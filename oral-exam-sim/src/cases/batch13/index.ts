import type { OralCase } from "@/engine/types";
import { lateDinnerChestPain } from "./late-dinner-chest-pain";
import { postpartumHeadacheReturnVisit } from "./postpartum-headache-return-visit";
import { boarderHardToWake } from "./boarder-hard-to-wake";

/** Batch 13. Q500 oral cases: chest pain, pre-eclampsia, decreased level of consciousness, anaphylaxis. */
export const BATCH_13: OralCase[] = [lateDinnerChestPain, postpartumHeadacheReturnVisit, boarderHardToWake];
