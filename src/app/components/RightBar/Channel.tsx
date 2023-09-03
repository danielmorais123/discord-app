"use client";
import { setChannel } from "@/app/actions";
import {
  faGear,
  faHashtag,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channel({ channel, isSelected }: any) {
  return (
    <div
      onClick={() => setChannel(channel.serverId, channel.id)}
      className={`${
        isSelected ? "bg-zinc-700" : ""
      } mb-1 relative hover:bg-zinc-700 transition-all text-zinc-400 px-2 py-1 flex items-center cursor-pointer rounded-[3px] group`}
    >
      {channel?.isText ? (
        <FontAwesomeIcon icon={faHashtag} className="" />
      ) : (
        <FontAwesomeIcon icon={faVolumeHigh} className="w-4" />
      )}

      <p className="ml-1.5 text-sm tracking-wide">{channel?.name}</p>
      <div className="absolute right-2 hidden group-hover:flex ">
        <FontAwesomeIcon icon={faGear} className=" w-3  " />
      </div>
    </div>
  );
}
