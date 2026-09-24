import type { OralCase } from "@/engine/types";
import { chestPain } from "./chest-pain";
import { febrileInfant } from "./febrile-infant";
import { overdose } from "./overdose";
import { trauma } from "./trauma";
import { ethicsCommunication } from "./ethics-communication";

/** The first two are the free sample. Keep them first. */
export const SEED: OralCase[] = [chestPain, febrileInfant, overdose, trauma, ethicsCommunication];
