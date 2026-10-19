import type { OralCase } from "@/engine/types";
import { preschoolerSixDayFever } from "./preschooler-six-day-fever";
import { returnVisitBellyPainGirl } from "./return-visit-belly-pain-girl";
import { ruralChildWheezeTiring } from "./rural-child-wheeze-tiring";
import { postpartumPleuriticChestPain } from "./postpartum-pleuritic-chest-pain";

/** Batch 14. Q500 expansion: pediatric fever, abdominal pain, asthma and COPD, DVT and PE. */
export const BATCH_14: OralCase[] = [postpartumPleuriticChestPain, ruralChildWheezeTiring, returnVisitBellyPainGirl, preschoolerSixDayFever];
