export type Tab = "home" | "cases" | "mock" | "progress" | "settings";

export type Route =
  | { name: "home" }
  | { name: "practice"; ids: string[]; title: string; key: number }
  | { name: "cases" }
  | { name: "case"; id: string }
  | { name: "mock" }
  | { name: "mockRun"; id: string }
  | { name: "mockResult"; id: string }
  | { name: "progress" }
  | { name: "settings" }
  | { name: "paywall" };

export type Go = (r: Route) => void;

export const TABBED: Route["name"][] = ["home", "cases", "mock", "progress", "settings"];
