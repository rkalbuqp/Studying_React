import { useState, useEffect } from "react";
import { ThemeContext } from "./themeContext";
import { getStoredTheme, saveTheme } from "./themeStorage";
import { themeProviderProps } from "./themeContext.types";

export const ThemeProvider = ({ children }: themeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
