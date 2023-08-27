import {
  faBell,
  faHashtag,
  faThumbTack,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChannelMessages from "./ChannelMessages";
import { Channel, Server, User } from "@/app/types/typing";

export default function MessagesSide({
  server,
  channel,
  user,
}: {
  server: Server;
  channel: Channel;
  user: User;
}) {
  return (
    <div className="bg-[#313338] flex-grow flex flex-col">
      <div className="px-4 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={faHashtag}
            className="cursor-pointer text-zinc-600 !h-6"
          />
          <p className="text-[14px] font-black tracking-wider">
            {channel?.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faHashtag}
            className="cursor-pointer text-zinc-500"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="cursor-pointer text-zinc-500"
          />

          <FontAwesomeIcon
            icon={faThumbTack}
            className="cursor-pointer text-zinc-500"
          />

          <FontAwesomeIcon icon={faUsers} className="cursor-pointer" />
        </div>
      </div>
      <hr className="border-zinc-700 mt-4" />
      <ChannelMessages
        chatName={channel?.name}
        channelId={channel.id}
        messages={channel.message}
        user={user}
      />
    </div>
  );
}
