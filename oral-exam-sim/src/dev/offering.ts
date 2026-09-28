/**
 * Development only. A stand-in for the RevenueCat `ccfpem` offering, so the
 * paywall and the simulated purchase flow can be clicked through in the dev
 * server and captured by the store screenshot script. Loaded on demand by the
 * web adapter in dev builds. The store apps read the live offering instead,
 * and show only the prices RevenueCat returns.
 */
export const DEV_PACKAGES = [
  { identifier: "complete_6m", product: { identifier: "ccfpem_complete_6m", priceString: "$199.99" } },
  { identifier: "complete_3m", product: { identifier: "ccfpem_complete_3m", priceString: "$129.99" } },
  { identifier: "written_6m", product: { identifier: "ccfpem_written_6m", priceString: "$149.99" } },
  { identifier: "written_3m", product: { identifier: "ccfpem_written_3m", priceString: "$99.99" } },
  { identifier: "oral_6m", product: { identifier: "ccfpem_oral_6m", priceString: "$99.99" } },
  { identifier: "oral_3m", product: { identifier: "ccfpem_oral_3m", priceString: "$69.99" } },
];
