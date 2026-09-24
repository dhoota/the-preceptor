import type { OralCase } from "@/engine/types";
import { nearFatalAsthma } from "./near-fatal-asthma";
import { hypercapnicCopdExacerbation } from "./hypercapnic-copd-exacerbation";
import { intermediateRiskPe } from "./intermediate-risk-pe";
import { secondaryPneumothoraxCopd } from "./secondary-pneumothorax-copd";
import { massiveHemoptysis } from "./massive-hemoptysis";
import { ludwigAnginaAirway } from "./ludwig-angina-airway";
import { hypothermicCardiacArrest } from "./hypothermic-cardiac-arrest";
import { exertionalHeatStroke } from "./exertional-heat-stroke";
import { drowningCottageLake } from "./drowning-cottage-lake";
import { carbonMonoxideFamily } from "./carbon-monoxide-family";

/** Batch 03. Respiratory and environmental. See docs/BLUEPRINT.md. */
export const BATCH_03: OralCase[] = [
  nearFatalAsthma,
  hypercapnicCopdExacerbation,
  intermediateRiskPe,
  secondaryPneumothoraxCopd,
  massiveHemoptysis,
  ludwigAnginaAirway,
  hypothermicCardiacArrest,
  exertionalHeatStroke,
  drowningCottageLake,
  carbonMonoxideFamily,
];
