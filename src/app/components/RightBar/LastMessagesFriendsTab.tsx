import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import TabMainMenu from "./TabMainMenu";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCreateChat from "../Modal/ModalCreateChat";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import UserChat from "../UserChat";
import { Friend, User } from "@/app/types/typing";
import { acceptInviteToServer } from "@/app/actions";
import Notifications from "./Notifications";

export default async function LastMessagesFriendsTab({
  friends,
  userId,
  notifications,
  serverId,
}: {
  friends: Friend[];
  userId: number;
  notifications: any[];
  serverId: number;
}) {
  const supabase = createServerComponentClient({ cookies });
  console.log(notifications);
  //bg-[#2b2d31]
  return (
    <div className=" w-[250px]">
      <div className="flex justify-center mt-2 w-full">
        <button className="bg-zinc-900 text-zinc-400 w-full text-start pl-2 py-1.5 mx-3  rounded-md text-xs">
          Find or start a conversation
        </button>
      </div>
      <hr className="border-zinc-700 mt-2 w-full" />
      <div className="mt-4 flex flex-col gap-2">
        <TabMainMenu title="Friends" icon={faUser} />
        <TabMainMenu
          title="Nitro"
          icon={faAccessibleIcon}
          classes="!bg-transparent"
        />
      </div>
      <div className="mt-4 px-5 flex items-center justify-between">
        <p className="text-xs text-zinc-400 font-bold uppercase">
          Direct Messages
        </p>
        <ModalCreateChat />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {friends?.map((friend: Friend, idx) => {
          let user = friend?.user_id as User;
          let friendUser = friend?.friend_id as User;
          return (
            <UserChat
              user={userId === user?.id ? friendUser : user}
              key={idx}
            />
          );
        })}
      </div>
      <div>
        <Notifications userId={userId} notifications={notifications} />
      </div>
    </div>
  );
}
