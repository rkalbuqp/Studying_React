import { useTheme } from "../../../app/hooks/useTheme";
import { cn } from "../../../app/utils/cn";
import Counter from "../../components/counter/Counter";
import { themeStyles } from "../../components/themeSwitch/styles";
import { ThemeSwitch } from "../../components/themeSwitch/ThemeSwitch";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={cn(themeStyles({ theme }))}>
      <ThemeSwitch />
      <Counter />
    </div>
  );
};

export { Home };
