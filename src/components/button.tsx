import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  disabled?: boolean;
}

export function Button({ disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        disabled
          ? "opacity-0"
          : "underline text-green-400 font-bold border-2 border-green-400 py-5 xl:py-10 px-4 rounded-lg hover:border-green-300 hover:text-green-300 max-w-60 max-h-16 flex justify-center items-center "
      }
    >
      <a target="_blank" href="https://wa.me/message/43YZB3COQS5IG1">
        RESERVE SUA VAGA
      </a>
    </button>
  );
}
