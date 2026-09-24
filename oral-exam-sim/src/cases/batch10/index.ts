import type { OralCase } from "@/engine/types";
import { discrepancyCallback } from "./discrepancy-callback";
import { interpreterConsentReduction } from "./interpreter-consent-reduction";
import { highwayBusCollision } from "./highway-bus-collision";
import { saturdayNightNoBeds } from "./saturday-night-no-beds";
import { crowdedResusRoom } from "./crowded-resus-room";
import { northernSnowmobileTransfer } from "./northern-snowmobile-transfer";
import { waitingRoomSlump } from "./waiting-room-slump";

/** Batch 10. Communication and systems. See docs/BLUEPRINT.md. */
export const BATCH_10: OralCase[] = [
  discrepancyCallback,
  interpreterConsentReduction,
  highwayBusCollision,
  saturdayNightNoBeds,
  crowdedResusRoom,
  northernSnowmobileTransfer,
  waitingRoomSlump,
];
