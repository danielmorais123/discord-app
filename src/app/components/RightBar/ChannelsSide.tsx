import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Channel from "./Channel";
import ChannelTab from "./ChannelTab";
import Activity from "./Activity";
import ProfileTab from "./ProfileTab";
import OptionsServerName from "./OptionsServerName";
export default function ChannelsSide({ server }: any) {
  const serverName =
    server?.name?.length < 18
      ? server?.name
      : server?.name.substring(0, 18) + "...";

  const activity = {
    image:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    name: "Visual Studio Code",
  };
  return (
    <div className="bg-[#2b2d31] w-[240px] rounded-tl-xl flex flex-col">
      <div className="px-4 mt-4 flex items-center justify-between">
        <p className="text-[15px] font-black tracking-wider">{serverName}</p>
        <OptionsServerName />
      </div>
      <hr className="border-zinc-700 mt-4" />
      <div className="mt-2 gap-2 flex flex-col mx-2">
        <Channel />
      </div>
      <div className="mx-2 mt-2  flex-grow">
        <ChannelTab title="Text channels" channels={server.textChannels} />
        <ChannelTab title="Voice channels" channels={server.voiceChannels} />
      </div>
      <div>
        <Activity activity={activity} />
        <ProfileTab />
      </div>
    </div>
  );
}
