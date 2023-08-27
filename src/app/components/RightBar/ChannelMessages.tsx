"use client";

import { sendMessage } from "@/app/actions";
// import { validate } from "@/app/actions";
import { Message, User } from "@/app/types/typing";
import { faCircleCheck, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";

export default function ChannelMessages({
  chatName,
  messages,
  channelId,
  user,
}: {
  chatName: string;
  channelId: number;
  messages: Message[];
  user: User;
}) {
  const [msgs, setMsgs] = useState<Message[]>([]);

  useEffect(() => {
    const msgsOrderAsc = messages.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    setMsgs(msgsOrderAsc);
  }, [messages]);

  let userLastMessage = "";
  return (
    <div className="flex-grow flex flex-col  relative">
      <div className="flex-grow flex flex-col">
        {msgs.map((message, idx) => {
          if (message?.user?.fullName !== userLastMessage) {
            /* @ts-ignore */

            userLastMessage = message?.user?.fullName;

            return (
              <div key={idx} className="flex items-center mt-4">
                <img
                  src={message?.user?.profilePicture}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col ml-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{message?.user?.fullName}</p>
                    <p className="text-zinc-500 text-xs ">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm">{message?.content}</p>
                </div>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="pl-12 relative text-zinc-300 text-sm cursor-pointer hover:bg-zinc-700 transition-all group duration-500"
            >
              <p className="text-xs hidden group-hover:flex absolute right-2 top-1 transition-all duration-500">
                {new Date(message.created_at).toLocaleString()}
              </p>
              <p>{message.content}</p>
            </div>
          );
        })}
      </div>

      <div className="px-4 py-5 relative flex">
        <form
          action={sendMessage}
          className="relative w-full bg-[#383a40] flex items-center rounded-xl"
        >
          <FontAwesomeIcon icon={faCirclePlus} className="mx-4 h-6" />
          <input
            type="text"
            className=" w-full p-3 bg-transparent outline-none text-sm"
            placeholder={`Message ${chatName}`}
            name="message"
          />
          <input name="channelId" value={channelId} className="hidden" />
          <input name="userId" value={user.id} className="hidden" />
          <button type="submit">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mr-4 cursor-pointer"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
