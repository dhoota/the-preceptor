import type { OralCase } from "@/engine/types";
import { hoistTransferThighFracture } from "./hoist-transfer-thigh-fracture";
import { sleepoverSmoothieVomiting } from "./sleepover-smoothie-vomiting";
import { noodleSoupScaldReturn } from "./noodle-soup-scald-return";
import { benchPressChestPain } from "./bench-press-chest-pain";

/** Batch 17. Q500B oral cases. Analgesia/sedation, anaphylaxis, burns and chest pain. */
export const BATCH_17: OralCase[] = [hoistTransferThighFracture, sleepoverSmoothieVomiting, noodleSoupScaldReturn, benchPressChestPain];
