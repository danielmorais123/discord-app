"use client";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { setServer } from "../actions";

export default function ServerIcon({
  classNames,
  server,
  user,
  selected,
}: any) {
  console.log(user);

  function onClick() {
    if (!user) return;
    if (!server) {
      setServer(-1, user?.id);
    } else {
      setServer(server?.id, user?.id);
    }
  }
  return (
    <>
      {server?.image ? (
        <img
          onClick={onClick}
          src={server?.image}
          className={twMerge(
            "w-7 object-cover bg-[#313338] rounded-full transition hover:bg-[#7289da] p-2.5 cursor-pointer",
            classNames
          )}
          alt=""
        />
      ) : (
        <FontAwesomeIcon
          icon={faDiscord}
          onClick={onClick}
          className={twMerge(
            "text-[28px] bg-[#313338] rounded-full transition hover:bg-[#7289da] p-2.5 cursor-pointer",
            classNames
          )}
        />
      )}
    </>
  );
}
