import type { OralCase } from "@/engine/types";
import { neckNodeFeverDayFive } from "./neck-node-fever-day-five";
import { returnVisitBellyPainGirl } from "./return-visit-belly-pain-girl";
import { ruralChildWheezeTiring } from "./rural-child-wheeze-tiring";
import { ruralBreathlessAfterUlcerBleed } from "./rural-breathless-after-ulcer-bleed";

/** Batch 14. Q500 expansion: pediatric fever, abdominal pain, asthma and COPD, DVT and PE. */
export const BATCH_14: OralCase[] = [ruralBreathlessAfterUlcerBleed, ruralChildWheezeTiring, returnVisitBellyPainGirl, neckNodeFeverDayFive];
