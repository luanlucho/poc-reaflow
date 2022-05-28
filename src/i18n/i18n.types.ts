import en from "./locales/en";

export type Dictionary = typeof en;

export interface Locales<T extends Dictionary = Dictionary> {
  es: T;
  en: T;
}
