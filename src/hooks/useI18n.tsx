import { useRouter } from "next/router";

import locales from "i18n/i18n";

const { en, es } = locales;

const useI18n = () => {
  const { locale } = useRouter();
  switch (locale) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return es;
  }
};

export default useI18n;
