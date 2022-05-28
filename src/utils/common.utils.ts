// Common utility functions
import CONSTANTS from "config/constants";

const { API } = CONSTANTS;
const { MOCK_SERVICES } = API;

// This value should not be modified if you want to disable mocks
// To disable mocks, go to config/constants.ts
export const shouldMock =
  process.env.NEXT_PUBLIC_ENV === "production" ? false : MOCK_SERVICES;
