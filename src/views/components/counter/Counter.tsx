import { useCount } from "../../../app/hooks/useCount";
import { cn } from "../../../app/utils/cn"; // A função cn
import { Button } from "../button/Button";
import {
  button,
  buttonContainer,
  counterContainer,
  counterHeading,
} from "./styles";

const Counter = () => {
  const { count, increment, decrement, reset } = useCount();

  const borderColor = () => {
    if (count > 0) {
      return "positive";
    }

    if (count < 0) {
      return "negative";
    }

    return "zero";
  };

  return (
    <div className={cn("h-screen flex items-center justify-center")}>
      {" "}
      <div className={cn(counterContainer({ borderColor: borderColor() }))}>
        <h1 className={cn(counterHeading())}>{`Count: ${count}`}</h1>
        <div className={cn(buttonContainer())}>
          <Button
            className={cn(button({ variant: "primary" }))}
            onClick={increment}
            variant="primary"
          >
            +
          </Button>
          <Button
            className={cn(button({ variant: "secondary" }))}
            onClick={decrement}
            variant="secondary"
          >
            -
          </Button>
          <Button
            className={cn(button({ variant: "tertiary" }))}
            onClick={reset}
            variant="tertiary"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
