import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerIcon from "./ServerIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignOut from "./RightBar/SignOut";
export default async function LeftBar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return redirect("/login");
  const { data: user } = await supabase
    .from("user")
    .select("*")
    .eq("email", session?.user?.email);

  console.log(user);
  if (!user) return redirect("/login");
  const userServers = await supabase
    .from("userServer")
    .select("serverId(*)")
    .eq("userId", user[0]?.id);

  console.log(userServers);
  return (
    <div className=" w-[60px] flex flex-col items-center mt-2">
      <ServerIcon
        icon={faDiscord}
        user={user[0]}
        selected={user[0]?.lastServerId === -1}
        classNames={user[0]?.lastServerId === -1 ? "bg-[#7289da]" : ""}
      />

      <hr className="w-[60%] my-2 !border-zinc-600" />
      <div className="gap-3 flex flex-col">
        {userServers?.data &&
          userServers?.data?.map((server: any) => {
            console.log(server);
            return (
              <ServerIcon
                user={user[0]}
                server={server?.serverId}
                icon={server?.serverId?.image}
                classNames={
                  server?.serverId?.id === user[0]?.lastServerId
                    ? "bg-[#7289da]"
                    : ""
                }
                selected={server?.serverId?.id === user[0]?.lastServerId}
              />
            );
          })}
      </div>
      <div
        className={`${
          userServers?.data && userServers?.data?.length > 0 ? "mt-3" : "mt-0"
        } flex flex-col`}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="!w-6 !h-6 bg-[#313338] p-3 rounded-full !text-green-500 hover:bg-green-500 hover:!text-white cursor-pointer transition"
        />
      </div>
      <div>
        <SignOut />
      </div>
    </div>
  );
}
