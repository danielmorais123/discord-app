import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export default function TabMainMenu({ title, icon, classes }: any) {
  return (
    <div
      className={twMerge(
        "mx-3 flex items-center cursor-pointer text-zinc-300 bg-zinc-700 py-1.5 px-5 rounded-md",
        classes
      )}
    >
      <FontAwesomeIcon icon={icon} />
      <p className="ml-5 text-sm tracking-wide ">{title}</p>
    </div>
  );
}
