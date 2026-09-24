import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";
import { AppProvider } from "./state";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);

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
