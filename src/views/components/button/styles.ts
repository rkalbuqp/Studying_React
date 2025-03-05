// src/components/Button/styles.ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-red-400 text-button-text-light hover:bg-red-600",
        secondary: "bg-blue-400 text-black hover:bg-blue-600",
        tertiary: "bg-gray-200 hover:bg-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
