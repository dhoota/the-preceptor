import { useEffect, useState } from "react";
import { Mark } from "@/components/Mark";
import { dueCards } from "@/engine";
import { stopSpeaking } from "@/lib/speech";
import type { Route } from "./routes";
import { useApp } from "./state";
import { CaseIntro } from "./screens/CaseIntro";
import { Disclaimer } from "./screens/Disclaimer";
import { Home } from "./screens/Home";
import { Paywall } from "./screens/Paywall";
import { Progress } from "./screens/Progress";
import { Result } from "./screens/Result";
import { Review } from "./screens/Review";
import { Runner } from "./screens/Runner";
import { SelfScore } from "./screens/SelfScore";
import { Settings } from "./screens/Settings";

const TABS: { name: "home" | "review" | "progress" | "settings"; label: string }[] = [
  { name: "home", label: "Cases" },
  { name: "review", label: "Review" },
  { name: "progress", label: "Progress" },
  { name: "settings", label: "Settings" },
];

export function App() {
  const app = useApp();
  const [route, setRoute] = useState<Route>({ name: "home" });
  const go = (r: Route) => {
    stopSpeaking();
    setRoute(r);
    window.scrollTo(0, 0);
  };

  // Android back button and browser back return home rather than closing the app mid case.
  useEffect(() => {
    const onPop = () => go({ name: "home" });
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (!app.ready) return <div className="app" />;
  if (!app.settings.acceptedDisclaimer) return <Disclaimer onAccept={() => app.updateSettings({ acceptedDisclaimer: true })} />;

  const due = dueCards(app.deck, Date.now()).length;
  const tabbed = ["home", "review", "progress", "settings"].includes(route.name);
  const inCase = route.name === "run";

  return (
    <div className="app">
      <header className="top">
        {tabbed ? (
          <span className="brand">
            <Mark size={22} /> Preceptor: Oral
          </span>
        ) : (
          <button
            className="back"
            onClick={() => {
              if (inCase && !confirm("Leave this case? Your answers so far will not be saved.")) return;
              go({ name: "home" });
            }}
          >
            {inCase ? "Exit case" : "Back"}
          </button>
        )}
        <span className="spacer" />
        {!app.unlocked && tabbed && (
          <button className="btn small ghost" onClick={() => go({ name: "paywall" })}>
            Get all cases
          </button>
        )}
      </header>

      <main className="main">
        {route.name === "home" && <Home go={go} />}
        {route.name === "case" && <CaseIntro id={route.id} go={go} />}
        {route.name === "run" && <Runner id={route.id} mode={route.mode} go={go} />}
        {route.name === "score" && <SelfScore attemptId={route.attemptId} go={go} />}
        {route.name === "result" && <Result attemptId={route.attemptId} go={go} />}
        {route.name === "review" && <Review go={go} />}
        {route.name === "progress" && <Progress go={go} />}
        {route.name === "settings" && <Settings go={go} />}
        {route.name === "paywall" && <Paywall go={go} />}
      </main>

      {tabbed && (
        <nav className="tabs" aria-label="Sections">
          {TABS.map((t) => (
            <button key={t.name} aria-current={route.name === t.name ? "page" : undefined} onClick={() => go({ name: t.name })}>
              {t.label}
              {t.name === "review" && due > 0 && <span className="badge">{due}</span>}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
