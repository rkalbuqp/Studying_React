import { useTheme } from "../../../app/hooks/useTheme";
import { themeStyles, switchStyles, circleStyles } from "./styles";
import { cn } from "../../../app/utils/cn";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(themeStyles({ theme }))}>
      <button onClick={toggleTheme} className={cn(switchStyles({ theme }))}>
        <div className={cn(circleStyles({ theme }))} />
      </button>
    </div>
  );
};

export { ThemeSwitch };
