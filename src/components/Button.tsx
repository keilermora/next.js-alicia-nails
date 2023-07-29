import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export default function Button({ className, children, onClick }: ButtonProps) {
  const buttonClasses = classNames(
    className,
    "cursor-pointer",
    "text-[var(--white)]",
    "bg-[var(--burnt-sienna)]",
    "px-4",
    "py-2",
    "border-none",
    "border-r-2",
    "transition",
    "hover:bg-[var(--apricot)]"
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
