import { useContext } from "react";

import { ThemeContext } from "contexts/theme/theme.context";
import { ThemeProviderValue } from "contexts/theme/theme.context.types";

const useTheme = () => {
  const context = useContext<ThemeProviderValue>(ThemeContext);
  if (typeof context === "undefined") {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
