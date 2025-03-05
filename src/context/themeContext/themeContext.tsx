import { createContext } from "react";
import { ThemeContextType } from "./themeContext.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
