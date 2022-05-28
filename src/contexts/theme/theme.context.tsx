import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as ThemeProviderLib } from "styled-components";

import GlobalStyles from "../../styles/base";
import { ThemeProviderProps as Props } from "./theme.context.types";
import { ThemeProviderValue } from "./theme.context.types";
import themes from "styles/theme";
import { isDarkThemePreferred } from "utils/theme.utils";
import { isSystemDarkThemePreferred } from "utils/theme.utils";

// @ts-ignore
export const ThemeContext = createContext<ThemeProviderValue>({});

const ThemeProvider: React.FC<Props> = props => {
  const { theme } = props;
  const { light, dark } = themes;
  const initialTheme = isSystemDarkThemePreferred() ? dark : light;
  const [selectedTheme, setSelectedTheme] = useState(theme ?? initialTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const themeChangeHandler = (e: MediaQueryListEvent) => {
      setSelectedTheme(e.matches ? dark : light);
    };
    const matchMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
    matchMedia?.addEventListener("change", themeChangeHandler);

    return () => matchMedia?.removeEventListener("change", themeChangeHandler);
  }, [light, dark]);

  useEffect(() => {
    const isDark = isDarkThemePreferred();
    const initialTheme = isDark ? dark : light;
    setSelectedTheme(theme ?? initialTheme);
  }, [light, dark, theme]);

  const value: ThemeProviderValue = useMemo(() => {
    return {
      selectedTheme,
      setSelectedTheme
    };
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles theme={selectedTheme} />
      <ThemeProviderLib theme={selectedTheme}>
        {props.children}
      </ThemeProviderLib>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
