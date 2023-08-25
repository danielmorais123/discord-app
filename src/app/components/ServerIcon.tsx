import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export default function ServerIcon({ icon, classNames }: any) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={twMerge(
        "text-[28px] bg-[#313338] rounded-full transition hover:bg-[#7289da] p-2.5 cursor-pointer",
        classNames
      )}
    />
  );
}
