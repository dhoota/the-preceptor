import type { OralCase } from "@/engine/types";
import { lateDinnerChestPain } from "./late-dinner-chest-pain";
import { postpartumHeadacheSixthDay } from "./postpartum-headache-sixth-day";
import { boarderHardToWake } from "./boarder-hard-to-wake";
import { ladderFallAnkleSedation } from "./ladder-fall-ankle-sedation";

/** Batch 13. Q500 oral cases: chest pain, pre-eclampsia, decreased level of consciousness, anaphylaxis. Blueprint order. */
export const BATCH_13: OralCase[] = [lateDinnerChestPain, postpartumHeadacheSixthDay, boarderHardToWake, ladderFallAnkleSedation];
