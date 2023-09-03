import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../types/typing";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function UserChat({ user }: { user: User }) {
  return (
    <div className="mx-2 flex items-center hover:bg-zinc-700 p-1 transition-all rounded-md cursor-pointer">
      <div className="relative w-fit">
        <img
          src={user?.profilePicture}
          className="w-10 rounded-full el"
          alt=""
        />
        <FontAwesomeIcon
          icon={faCircle}
          className="absolute w-2.5 text-green-500 right-1 bottom-0"
        />
      </div>
      <p className="text-sm ml-2 text-zinc-300">{user?.fullName}</p>
    </div>
  );
}
