// src/components/Button/index.tsx
import { cn } from "../../../../app/utils/cn";
import { buttonVariants } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  variant,
  onClick,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
