// contexts/CountContext.tsx
import { createContext } from "react";
import { CountContextProps } from "./countContext.types";

const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export { CountContext };
