import { User } from "@/app/types/typing";
import ListUsersInChannel from "./ListUsersInChannel";

export default function UsersInChannel({ users }: { users: User[] }) {
  return (
    <div className="w-[230px]">
      <ListUsersInChannel users={users} />
    </div>
  );
}
