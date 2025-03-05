// contexts/CountContext.tsx
import { createContext, useState } from "react";
import { CountContextProps, CountProviderProps } from "./countContext.types";

const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

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

export { CountContext, CountProvider };
