import { twMerge } from "tailwind-merge";

export default function AmazingButton({
  onClick,
  text,
  variant,
  className,
  type = "button",
}: any) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        "inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white  transition-all hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500",
        variant
          ? `bg-white text-blue-600 hover:bg-zinc-200 hover:text-blue-600 ${className}`
          : `${className}`
      )}
    >
      {text}
    </button>
  );
}
