import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ChannelsSide from "./RightBar/ChannelsSide";
import MessagesSide from "./RightBar/MessagesSide";
import UsersInChannel from "./RightBar/UsersInChannel";
import { cookies } from "next/headers";
import { Channel, Server } from "../types/typing";
import { redirect } from "next/navigation";
import LastMessagesFriendsTab from "./RightBar/LastMessagesFriendsTab";

export default async function RightBar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return redirect("/login");
  const { data: user } = await supabase
    .from("user")
    .select("*")
    .eq("email", session?.user?.email);
  let { data: serverW } = await supabase
    .from("server")
    .select("*")
    /* @ts-ignore */
    .eq("id", user[0]?.lastServerId);

  const { data: friends } = await supabase
    .from("friends")
    .select("user_id(*),friend_id(*),confirmed,created_at")
    /* @ts-ignore */
    .or(`friend_id.eq.${user[0]?.id},user_id.eq.${user[0]?.id}`);

  const { data: notifications } = await supabase
    .from("notification")
    .select("*")
    .eq("to_user_id", user[0]?.id);

  if (!serverW || (user && user[0]?.lastServerId === -1)) {
    return (
      <div className="ml-3 rounded-tl-lg flex flex-grow bg-[#2b2d31] ">
        {/* @ts-ignore */}
        <LastMessagesFriendsTab
          friends={friends}
          userId={user[0]?.id}
          notifications={notifications}
        />
      </div>
    );
  }

  /* @ts-ignore */
  const { data: channels } = await supabase
    .from("channel")
    .select("*, message(*,user(*))")
    /* @ts-ignore */
    .eq("serverId", serverW[0]?.id);
  /* @ts-ignore */
  const server: Server = { ...serverW[0], channels };

  let channel: Channel = channels?.find((c) => c.id === server.channelId);
  let usersInChannel = [];
  if (channel?.isPublic) {
    /* @ts-ignore */
    usersInChannel = await supabase
      .from("userServer")
      .select("user(*)")
      .eq("serverId", server?.id);
  } else {
    /* @ts-ignore */
    usersInChannel = await supabase
      .from("userChannel")
      .select("user(*)")
      .eq("channelId", server.channelId);
  }

  let showUsersInChannel: boolean = true;
  // const newserver = {
  //   name: "Fecundária do Pinhal Novo",
  //   textChannels: [
  //     {
  //       id: 1,
  //       name: "best",
  //       messages: [
  //         {
  //           id: 1,
  //           message: "fdssss",
  //           user: {
  //             id: 1,
  //             name: "Steve Rogers",
  //           },
  //         },
  //       ],
  //       people: [
  //         {
  //           id: 1,
  //           name: "Steve Rogers",
  //         },
  //       ],
  //       isTextChannel: true,
  //     },
  //   ],
  //   voiceChannels: [
  //     {
  //       id: 2,
  //       name: "best voice",
  //       messages: [
  //         {
  //           id: 1,
  //           message: "fdssss",
  //           user: {
  //             id: 1,
  //             name: "Steve Rogers",
  //           },
  //         },
  //       ],
  //       people: [
  //         {
  //           id: 1,
  //           name: "Steve Rogers",
  //         },
  //       ],
  //       isTextChannel: false,
  //     },
  //   ],
  //   selectedChannelId: 1,
  // };
  return (
    <div className="ml-3 rounded-tl-lg flex flex-grow bg-[#2b2d31] ">
      {/*@ts-ignore*/}
      <ChannelsSide server={server} friends={friends} />
      <MessagesSide
        server={server}
        /*@ts-ignore*/
        channel={server.channels?.find((x) => x.id === server.channelId)}
        /*@ts-ignore*/
        user={user[0]}
        showUsersInChannel={showUsersInChannel}
      />
      {/*@ts-ignore*/}
      {showUsersInChannel ? (
        <UsersInChannel users={usersInChannel.data} />
      ) : null}
    </div>
  );
}
