import type { OralCase } from "@/engine/types";
import { feverBackPainInjectionUse } from "./fever-back-pain-injection-use";
import { feverReturningTraveller } from "./fever-returning-traveller";
import { flankPainRigors } from "./flank-pain-rigors";
import { melenaWalletCard } from "./melena-wallet-card";
import { teenWantsToLeave } from "./teen-wants-to-leave";
import { colleagueAtHandover } from "./colleague-at-handover";
import { driverAsksForSilence } from "./driver-asks-for-silence";
import { newsInTheFamilyRoom } from "./news-in-the-family-room";
import { headachesAndACtResult } from "./headaches-and-a-ct-result";
import { hourSevenInTheHallway } from "./hour-seven-in-the-hallway";

/** Batch 09. Infection, ethics and communication. See docs/BLUEPRINT.md. */
export const BATCH_09: OralCase[] = [
  feverBackPainInjectionUse,
  feverReturningTraveller,
  flankPainRigors,
  melenaWalletCard,
  teenWantsToLeave,
  colleagueAtHandover,
  driverAsksForSilence,
  newsInTheFamilyRoom,
  headachesAndACtResult,
  hourSevenInTheHallway,
];
