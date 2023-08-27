import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ChannelsSide from "./RightBar/ChannelsSide";
import MessagesSide from "./RightBar/MessagesSide";
import UsersInChannel from "./RightBar/UsersInChannel";
import { cookies } from "next/headers";
import { Server } from "../types/typing";
import { redirect } from "next/navigation";

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
  const { data: serverW } = await supabase
    .from("server")
    .select("*")
    /* @ts-ignore */
    .eq("id", user[0]?.lastServerId);

  /* @ts-ignore */
  const { data: channels } = await supabase
    .from("channel")
    .select("*, message(*,user(*))")
    /* @ts-ignore */
    .eq("serverId", serverW[0]?.id);
  /* @ts-ignore */
  const server: Server = { ...serverW[0], channels };

  const usersInChannel = await supabase
    .from("userChannel")
    .select("user(*)")
    .eq("channelId", server.channelId);
  console.log({ user });
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
      <ChannelsSide server={server} />
      <MessagesSide
        server={server}
        /*@ts-ignore*/
        channel={server.channels?.find((x) => x.id === server.channelId)}
        /*@ts-ignore*/
        user={user[0]}
      />
      {/*@ts-ignore*/}
      <UsersInChannel users={usersInChannel.data} />
    </div>
  );
}
