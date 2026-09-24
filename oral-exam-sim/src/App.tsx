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
import { MockExamResult, MockExamScreen, MockOralScreen } from "./screens/Mocks";
import { Resources } from "./screens/Resources";
import { SampPractice, SampResult, TopicSamps, Written } from "./screens/Written";

const TABS: { name: "home" | "written" | "review" | "progress" | "settings"; label: string }[] = [
  { name: "home", label: "Oral" },
  { name: "written", label: "Written" },
  { name: "review", label: "Review" },
  { name: "progress", label: "Progress" },
  { name: "settings", label: "More" },
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
  const tabbed = ["home", "written", "review", "progress", "settings"].includes(route.name);
  const inCase = route.name === "run" || route.name === "mock" || route.name === "samp";

  return (
    <div className="app">
      <header className="top">
        {tabbed ? (
          <span className="brand">
            <Mark size={22} /> Preceptor: CCFP-EM
          </span>
        ) : (
          <button
            className="back"
            onClick={() => {
              if (route.name === "mock") return go({ name: "written" });
              if (inCase && !confirm("Leave this case? Your answers so far will not be saved.")) return;
              go(route.name === "samp" || route.name === "sampResult" || route.name === "topic" || route.name === "mockResult" ? { name: "written" } : { name: "home" });
            }}
          >
            {route.name === "mock" ? "Pause" : inCase ? "Exit" : "Back"}
          </button>
        )}
        <span className="spacer" />
        {!(app.access.written && app.access.oral) && tabbed && (
          <button className="btn small ghost" onClick={() => go({ name: "paywall" })}>
            Get full access
          </button>
        )}
      </header>

      <main className="main">
        {route.name === "home" && <Home go={go} />}
        {route.name === "case" && <CaseIntro id={route.id} go={go} />}
        {route.name === "run" && <Runner key={route.id} id={route.id} mode={route.mode} mockOralId={route.mockOralId} go={go} />}
        {route.name === "score" && <SelfScore attemptId={route.attemptId} mockOralId={route.mockOralId} go={go} />}
        {route.name === "mockOral" && <MockOralScreen id={route.id} go={go} />}
        {route.name === "written" && <Written go={go} />}
        {route.name === "topic" && <TopicSamps id={route.id} go={go} />}
        {route.name === "samp" && <SampPractice key={route.id} id={route.id} go={go} />}
        {route.name === "sampResult" && <SampResult attemptId={route.attemptId} go={go} />}
        {route.name === "mock" && <MockExamScreen id={route.id} go={go} />}
        {route.name === "mockResult" && <MockExamResult id={route.id} go={go} />}
        {route.name === "resources" && <Resources />}
        {route.name === "result" && <Result attemptId={route.attemptId} go={go} />}
        {route.name === "review" && <Review go={go} />}
        {route.name === "progress" && <Progress go={go} />}
        {route.name === "settings" && <Settings go={go} />}
        {route.name === "paywall" && <Paywall go={go} focus={route.focus} />}
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
