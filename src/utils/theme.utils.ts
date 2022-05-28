// Theme utility functions
import Bugsnag from "@bugsnag/js";

import CONSTANTS from "config/constants";

const { THEME_PREFERENCE_TOKEN } = CONSTANTS.STORAGE;

export const isDarkThemePreferred = () => {
  if (typeof window === "undefined") return false;
  try {
    const isSystemDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    const localStorageTheme = localStorage.getItem(THEME_PREFERENCE_TOKEN);
    const localStorageDark = localStorageTheme === "dark";
    if (localStorageTheme === null) return isSystemDark;

    return localStorageDark;
  } catch (e) {
    Bugsnag.notify(e);
    return false;
  }
};

/* Only works for initial values, it doesn't take into consideration
 * local storage preference
 */
export const isSystemDarkThemePreferred = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
};
