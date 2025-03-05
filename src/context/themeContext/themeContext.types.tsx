import { ReactNode } from "react";

export interface themeProviderProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
