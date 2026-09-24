import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";
import { AppProvider } from "./state";

async function boot() {
  // Dev only: ?seed=1 loads a sample history for screenshots. Stripped from production builds.
  // VITE_SEED=1 keeps it in a static build made only for the screenshot script.
  if (import.meta.env.DEV || import.meta.env.VITE_SEED === "1") {
    const { applySeed } = await import("./dev/seed");
    const q = new URLSearchParams(location.search);
    await applySeed(q.has("seed"), q.has("demo"));
  }
  render();
}

function render() {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>,
  );
}

boot();

// Hide the app content in the task switcher, as the other Preceptor apps do.
(async () => {
  try {
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
    if (!cap?.isNativePlatform?.()) return;
    const m = await import("@capacitor-community/privacy-screen");
    await m.PrivacyScreen.enable();
  } catch {
    // optional
  }
})();
