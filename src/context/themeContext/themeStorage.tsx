const THEME_KEY = "theme";

export const getStoredTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === "dark" ? "dark" : "light";
};

export const saveTheme = (theme: "light" | "dark") => {
  localStorage.setItem(THEME_KEY, theme);
  document.body.setAttribute("data-theme", theme);
};
