import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export interface ConfirmOptions {
  title: string;
  body?: string;
  confirm: string;
  cancel?: string;
  /** Styles the confirm button as a destructive action. */
  danger?: boolean;
}

type Ask = (o: ConfirmOptions) => Promise<boolean>;

const Ctx = createContext<Ask>(async () => false);

/** In-app confirmation. Replaces window.confirm, which is unstyled in the native web view. */
export function useConfirm(): Ask {
  return useContext(Ctx);
}

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const returnTo = useRef<Element | null>(null);

  const ask = useCallback<Ask>(
    (o) =>
      new Promise<boolean>((resolve) => {
        returnTo.current = document.activeElement;
        setOpen({ ...o, resolve });
      }),
    [],
  );

  const close = (v: boolean) => {
    open?.resolve(v);
    setOpen(null);
    (returnTo.current as HTMLElement | null)?.focus?.();
  };

  useEffect(() => {
    if (!open) return;
    cancelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <Ctx.Provider value={ask}>
      {children}
      {open && (
        <div className="scrim" onClick={() => close(false)}>
          <div
            className="dialog"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            aria-describedby={open.body ? "confirm-body" : undefined}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="confirm-title">{open.title}</h2>
            {open.body && <p id="confirm-body">{open.body}</p>}
            <div className="dialog-actions">
              <button ref={cancelRef} type="button" className="btn quiet" onClick={() => close(false)}>
                {open.cancel ?? "Cancel"}
              </button>
              <button type="button" className={`btn ${open.danger ? "danger" : ""}`} onClick={() => close(true)}>
                {open.confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
