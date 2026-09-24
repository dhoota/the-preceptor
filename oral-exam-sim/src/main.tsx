import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";
import { AppProvider } from "./state";

async function boot() {
  // Dev only: ?seed=1 loads a sample history for screenshots. Stripped from production builds.
  // VITE_SEED=1 keeps it in a static build made only for the screenshot script.
  if ((import.meta.env.DEV || import.meta.env.VITE_SEED === "1") && new URLSearchParams(location.search).has("seed")) {
    const { seedHistory, seedSampHistory } = await import("./dev/seed");
    const { SAMPS } = await import("./samps");
    const { attempts, deck } = seedHistory();
    localStorage.setItem("samp_attempts_v1", JSON.stringify(seedSampHistory(SAMPS)));
    // The screenshot script reads answer keys from here to fill in a SAMP.
    const { PRIORITY_TOPICS } = await import("./blueprint/priorityTopics");
    Object.assign(window, { __SAMPS: SAMPS, __TOPIC_NAMES: Object.fromEntries(PRIORITY_TOPICS.map((t) => [t.id, t.name])) });
    localStorage.setItem("oral_attempts_v1", JSON.stringify(attempts));
    localStorage.setItem("oral_review_deck_v1", JSON.stringify(deck));
    localStorage.setItem("oral_settings_v1", JSON.stringify({ acceptedDisclaimer: true, speak: false, rate: 1, revealEachQuestion: true }));
    history.replaceState(null, "", location.pathname);
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
