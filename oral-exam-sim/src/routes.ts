export type Route =
  | { name: "home" }
  | { name: "case"; id: string }
  | { name: "run"; id: string; mode: "practice" | "exam" }
  | { name: "score"; attemptId: string }
  | { name: "result"; attemptId: string }
  | { name: "review" }
  | { name: "progress" }
  | { name: "settings" }
  | { name: "paywall" };

export type Go = (r: Route) => void;
