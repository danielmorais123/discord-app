"use client";

import { acceptInviteToServer } from "@/app/actions";

export default function Notifications({
  notifications,
  userId,
}: {
  notifications: any[];
  userId: number;
}) {
  console.log(notifications);
  return (
    <div>
      {notifications?.map((noti, idx) => {
        return (
          <form
            key={idx}
            action={() => acceptInviteToServer(userId, noti?.server_id)}
          >
            {noti.notification}

            <button type="submit">Submit</button>
          </form>
        );
      })}
    </div>
  );
}
