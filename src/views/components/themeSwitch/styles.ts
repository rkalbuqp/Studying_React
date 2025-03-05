import { cva } from "class-variance-authority";

export const themeStyles = cva("transition-all duration-300", {
  variants: {
    theme: {
      light: "bg-white text-black",
      dark: "bg-gray-800 text-white",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

export const switchStyles = cva(
  "w-12 h-6 rounded-full bg-gray-300 relative cursor-pointer transition-colors duration-300 absolute top-6 right-6",
  {
    variants: {
      theme: {
        light: "bg-gray-300",
        dark: "bg-gray-600",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);

export const circleStyles = cva(
  "absolute w-5 h-5 bg-white rounded-full transition-all duration-300 transform",
  {
    variants: {
      theme: {
        light: "translate-x-1 translate-y-[-10px]",
        dark: "translate-x-6 translate-y-[-10px]",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);
