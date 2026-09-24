export type Route =
  | { name: "home" }
  | { name: "case"; id: string }
  | { name: "run"; id: string; mode: "practice" | "exam" | "station"; mockOralId?: string }
  | { name: "score"; attemptId: string; mockOralId?: string }
  | { name: "result"; attemptId: string }
  | { name: "mockOral"; id: string }
  | { name: "written" }
  | { name: "topic"; id: string }
  | { name: "samp"; id: string }
  | { name: "sampResult"; attemptId: string }
  | { name: "mock"; id: string }
  | { name: "mockResult"; id: string }
  | { name: "review" }
  | { name: "progress" }
  | { name: "settings" }
  | { name: "resources" }
  | { name: "paywall"; focus?: "written" | "oral" };

export type Go = (r: Route) => void;
