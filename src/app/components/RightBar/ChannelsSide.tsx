import Channel from "./Channel";
import ChannelTab from "./ChannelTab";
import Activity from "./Activity";
import ProfileTab from "./ProfileTab";
import OptionsServerName from "./OptionsServerName";
import { Channel as ChannelType, Friend, Server } from "@/app/types/typing";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function ChannelsSide({
  server,
  friends = [],
}: {
  server: Server;
  friends: Friend[];
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return redirect("/login");
  const user = await supabase
    .from("user")
    .select("*")
    .eq("email", session?.user?.email);
  console.log(user);

  const serverName =
    server?.name?.length < 18
      ? server?.name
      : server?.name?.substring(0, 18) + "...";

  const activity = {
    image:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    name: "Visual Studio Code",
  };

  let channelsText: ChannelType[] = [];
  const { data: privateChannelsUserHasAccess } = await supabase
    .from("userChannel")
    .select("channelId")
    .eq("userId", user?.data[0].id);
  console.log(privateChannelsUserHasAccess);
  if (server?.channels && server?.channels?.length > 0) {
    server.channels.forEach((ch) => {
      if (ch.isPublic && ch.isText) {
        channelsText.push(ch);
      } else if (!ch.isPublic && ch.isText) {
        if (
          privateChannelsUserHasAccess?.find((cha) => cha.channelId === ch.id)
        ) {
          channelsText.push(ch);
        }
      }
    });
  }

  return (
    <div className="bg-[#2b2d31] w-[240px] rounded-tl-xl flex flex-col">
      <div className="px-4 mt-4 flex items-center justify-between">
        <p className="text-[15px] font-black tracking-wider">{serverName}</p>
        {/* @ts-ignore */}
        <OptionsServerName
          server={server}
          /* @ts-ignore */
          friends={friends} /* @ts-ignore */
          userId={user.data[0]?.id}
        />
      </div>
      <hr className="border-zinc-700 mt-4" />
      {/* <div className="mt-2 gap-2 flex flex-col mx-2">
        <Channel />
      </div> */}
      <div className="mx-2 mt-2  flex-grow">
        <ChannelTab
          title="Text channels"
          selectedChannelId={server.channelId}
          channels={channelsText}
          server={server}
        />
        <ChannelTab
          server={server}
          selectedChannelId={server.channelId}
          title="Voice channels"
          channels={server?.channels?.filter((x) => !x.isText)}
        />
      </div>
      <div>
        <Activity activity={activity} />
        {/* @ts-ignore */}
        <ProfileTab user={user.data[0]} />
      </div>
    </div>
  );
}
