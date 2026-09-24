// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";
import { chestPain } from "./chest-pain";
import { febrileInfant } from "./febrile-infant";
import { overdose } from "./overdose";
import { trauma } from "./trauma";
import { ethicsCommunication } from "./ethics-communication";

export const CASES: OralCase[] = [chestPain, febrileInfant, overdose, trauma, ethicsCommunication];

export function getCase(id: string): OralCase | undefined {
  return CASES.find((c) => c.id === id);
}
