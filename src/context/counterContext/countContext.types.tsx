import { ReactNode } from "react";

export interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface CountProviderProps {
  children: ReactNode;
}
