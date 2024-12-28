import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/util";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  pending?: boolean; // オプショナルプロパティ 「必須ではない」
}

const Button = ({ children, className, pending }: ButtonProps) => {
  return (
    <button
      className={cn(
        `bg-sky-500 inline-block px-6 py-4 rounded-md text-white shadow cursor-pointer font-medium`,
        className,
        {
          "bg-gray-600": pending,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
