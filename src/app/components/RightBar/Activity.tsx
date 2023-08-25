import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Activity({ activity }: any) {
  return (
    <div className="px-3 py-2 flex items-center justify-between border-t border-t-zinc-700 shadow-md">
      <div className="flex items-center">
        <img src={activity?.image} alt="" className="w-8 object-contain" />
        <p className="text-sm ml-2">{activity?.name}</p>
      </div>
      <FontAwesomeIcon
        icon={faDesktop}
        className="cursor-pointer text-zinc-500"
      />
    </div>
  );
}
