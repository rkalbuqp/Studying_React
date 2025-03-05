// Definição de tipagem para o hook useTheme
export type Theme = "light" | "dark";

export interface ThemeSwitchProps {
  theme: Theme;
  toggleTheme: () => void;
}
