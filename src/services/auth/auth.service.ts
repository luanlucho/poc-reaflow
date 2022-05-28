// Auth services
import { mockAuth } from "./auth.service.mock";
import { Auth } from "./auth.service.types";
import { shouldMock } from "utils/common.utils";

export const fetchAuth = (): Promise<Auth> => {
  try {
    if (!shouldMock) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockAuth);
        }, 1000);
      }); // Replace with your API request call
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockAuth);
        }, 1000);
      });
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
