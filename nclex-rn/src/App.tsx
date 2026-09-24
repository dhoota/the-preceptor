import { useEffect, useState } from "react";
import { Mark } from "@/components/Mark";
import { APP_NAME } from "@/lib/constants";
import { TABBED, type Route } from "./routes";
import { useApp } from "./state";
import { CaseRun, Cases } from "./screens/Cases";
import { Disclaimer } from "./screens/Disclaimer";
import { Home } from "./screens/Home";
import { MockHome, MockResult, MockRun } from "./screens/Mock";
import { Paywall } from "./screens/Paywall";
import { Progress } from "./screens/Progress";
import { Runner } from "./screens/Runner";
import { Settings } from "./screens/Settings";

const TABS: { name: "home" | "cases" | "mock" | "progress" | "settings"; label: string }[] = [
  { name: "home", label: "Practice" },
  { name: "cases", label: "Cases" },
  { name: "mock", label: "Mock" },
  { name: "progress", label: "Progress" },
  { name: "settings", label: "More" },
];

export function App() {
  const app = useApp();
  const [route, setRoute] = useState<Route>({ name: "home" });
  const go = (r: Route) => {
    setRoute(r);
    window.scrollTo(0, 0);
  };

  // Android back and browser back return home rather than closing the app mid set.
  useEffect(() => {
    const onPop = () => go({ name: "home" });
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("large", app.settings.largeText);
  }, [app.settings.largeText]);

  if (!app.ready) return <div className="app" />;
  if (!app.settings.acceptedDisclaimer) return <Disclaimer onAccept={() => app.updateSettings({ acceptedDisclaimer: true })} />;

  const tabbed = TABBED.includes(route.name);
  const inSet = route.name === "practice" || route.name === "case";

  function back() {
    if (route.name === "mockRun") return go({ name: "mock" });
    if (inSet && !confirm("Leave this set? Items you submitted are saved.")) return;
    if (route.name === "case") return go({ name: "cases" });
    if (route.name === "mockResult") return go({ name: "mock" });
    go({ name: "home" });
  }

  return (
    <div className="app">
      <header className="top">
        {tabbed ? (
          <span className="brand">
            <Mark size={22} /> {APP_NAME}
          </span>
        ) : (
          <button className="back" onClick={back}>
            {route.name === "mockRun" ? "Pause" : inSet ? "Exit" : "Back"}
          </button>
        )}
        <span className="spacer" />
        {!app.access.full && tabbed && (
          <button className="btn small ghost" onClick={() => go({ name: "paywall" })}>
            Full access
          </button>
        )}
      </header>

      <main className="main">
        {route.name === "home" && <Home go={go} />}
        {route.name === "practice" && (
          <Runner
            key={route.key}
            items={route.ids.map((id) => app.itemById(id)).filter((x): x is NonNullable<typeof x> => Boolean(x))}
            title={route.title}
            onDone={() => go({ name: "home" })}
          />
        )}
        {route.name === "cases" && <Cases go={go} />}
        {route.name === "case" && <CaseRun key={route.id} id={route.id} go={go} />}
        {route.name === "mock" && <MockHome go={go} />}
        {route.name === "mockRun" && <MockRun key={route.id} id={route.id} go={go} />}
        {route.name === "mockResult" && <MockResult id={route.id} go={go} />}
        {route.name === "progress" && <Progress go={go} />}
        {route.name === "settings" && <Settings go={go} />}
        {route.name === "paywall" && <Paywall go={go} />}
      </main>

      {tabbed && (
        <nav className="tabs" aria-label="Sections">
          {TABS.map((t) => (
            <button key={t.name} aria-current={route.name === t.name ? "page" : undefined} onClick={() => go({ name: t.name })}>
              {t.label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
