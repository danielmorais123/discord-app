import { User } from "@/app/types/typing";
import {
  faBan,
  faGear,
  faHeadphones,
  faHeadset,
  faMicrophone,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileTab({ user }: { user: User }) {
  console.log(user);
  return (
    <div className="px-3 py-2 flex items-center justify-between border-t border-t-zinc-700 shadow-md">
      <div className="flex items-center">
        <img
          src={user?.profilePicture}
          alt=""
          className="w-8 object-contain rounded-full"
        />
        <div className="ml-1.5 ">
          <p className="text-sm">{user?.fullName}</p>
          <p className="text-xs text-zinc-600">Invisible</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-zinc-500">
        <FontAwesomeIcon
          icon={faMicrophone}
          className="cursor-pointer hover:bg-zinc-700 p-1 rounded-md transition"
        />

        <FontAwesomeIcon
          icon={faHeadphones}
          className="cursor-pointer hover:bg-zinc-700 p-1 rounded-md transition"
        />
        <FontAwesomeIcon
          icon={faGear}
          className="cursor-pointer hover:bg-zinc-700 p-1 rounded-md transition"
        />
      </div>
    </div>
  );
}
