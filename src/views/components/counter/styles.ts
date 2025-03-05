import { cva } from "class-variance-authority";

export const counterContainer = cva(
  "flex flex-col items-center justify-center gap-6 p-8 rounded-xl bg-white shadow-lg w-full h-auto max-w-sm",
  {
    variants: {
      borderColor: {
        positive: "border-4 border-red-500",
        zero: "border-4 border-gray-500",
        negative: "border-4 border-blue-500",
      },
      padding: {
        default: "p-8",
        large: "p-12",
        small: "p-4",
      },
    },
    defaultVariants: {
      borderColor: "zero",
      padding: "large",
    },
  }
);

export const counterHeading = cva("text-4xl font-semibold text-black mb-8", {
  variants: {
    size: {
      default: "text-4xl",
      small: "text-3xl",
      large: "text-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const buttonContainer = cva("flex gap-6");

export const button = cva(
  "px-6 py-3 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105",
  {
    variants: {
      variant: {
        primary: "bg-red-500 hover:bg-red-600",
        secondary: "bg-blue-500 hover:bg-blue-600",
        tertiary: "bg-gray-500 hover:bg-gray-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
