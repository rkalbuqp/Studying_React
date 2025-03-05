import { useState } from "react";
import { CountProviderProps } from "./countContext.types";
import { CountContext } from "./countContext";

const CountProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  const value = { count, increment, decrement, reset };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export { CountProvider };
