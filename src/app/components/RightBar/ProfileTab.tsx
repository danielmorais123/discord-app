import {
  faGear,
  faHeadphones,
  faHeadset,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileTab() {
  return (
    <div className="px-3 py-2 flex items-center justify-between border-t border-t-zinc-700 shadow-md">
      <div className="flex items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg"
          alt=""
          className="w-8 object-contain rounded-full"
        />
        <div className="ml-1.5 ">
          <p className="text-sm">Iron Man</p>
          <p className="text-xs text-zinc-600">Iron Man</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-500">
        <FontAwesomeIcon icon={faMicrophone} className="cursor-pointer" />
        <FontAwesomeIcon icon={faHeadphones} className="cursor-pointer" />
        <FontAwesomeIcon icon={faGear} className="cursor-pointer" />
      </div>
    </div>
  );
}
