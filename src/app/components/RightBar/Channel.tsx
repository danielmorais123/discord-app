import { faHashtag, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channel({ channel }: any) {
  return (
    <div className="hover:bg-zinc-700 transition-all text-zinc-400 px-2 py-1.5 flex items-center cursor-pointer rounded-md">
      {channel?.isTextChannel ? (
        <FontAwesomeIcon icon={faHashtag} className="" />
      ) : (
        <FontAwesomeIcon icon={faVolumeHigh} className="w-4" />
      )}

      <p className="ml-1.5 text-sm tracking-wide">{channel?.name}</p>
    </div>
  );
}
