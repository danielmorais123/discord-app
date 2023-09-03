import { inviteToServer } from "@/app/actions";
import { Friend, User } from "@/app/types/typing";

export default function SuggestedFriends({
  friends,
  userId,
  serverId,
}: {
  friends: Friend[];
  userId: number;
  serverId: number;
}) {
  console.log(userId, friends);
  return (
    <div className="mt-3 flex flex-col gap-2 max-h-[200px] overflow-y-auto scrollbar-thin">
      {friends.map((friend, index) => {
        console.log(friend);
        const user =
          /* @ts-ignore */
          friend?.friend_id?.id === userId
            ? (friend?.user_id as User)
            : (friend?.friend_id as User);
        console.log(user);
        return (
          <form
            action={() => inviteToServer(serverId, user?.id, userId)}
            key={index}
            className="flex items-center hover:bg-zinc-700 transition-all cursor-pointer p-1 justify-between group"
          >
            <div className="flex items-center">
              <img
                src={user?.profilePicture}
                alt=""
                className="w-10 rounded-full"
              />
              <p className="ml-2 text-sm tracking-wide">{user?.fullName}</p>
            </div>
            <button
              type="submit"
              className="text-xs border border-[#5865f2] hover:bg-[#5865f2] px-3 py-2 transition-all group-hover:bg-[#5865f2]"
            >
              Invite
            </button>
          </form>
        );
      })}
    </div>
  );
}
