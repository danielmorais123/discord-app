import ChannelsSide from "./RightBar/ChannelsSide";
import MessagesSide from "./RightBar/MessagesSide";
import UsersInChannel from "./RightBar/UsersInChannel";

export default function RightBar() {
  const server = {
    name: "Fecundária do Pinhal Novo",
    textChannels: [
      {
        id: 1,
        name: "best",
        messages: [
          {
            id: 1,
            message: "fdssss",
            user: {
              id: 1,
              name: "Steve Rogers",
            },
          },
        ],
        people: [
          {
            id: 1,
            name: "Steve Rogers",
          },
        ],
        isTextChannel: true,
      },
    ],
    voiceChannels: [
      {
        id: 2,
        name: "best voice",
        messages: [
          {
            id: 1,
            message: "fdssss",
            user: {
              id: 1,
              name: "Steve Rogers",
            },
          },
        ],
        people: [
          {
            id: 1,
            name: "Steve Rogers",
          },
        ],
        isTextChannel: false,
      },
    ],
    selectedChannelId: 1,
  };
  return (
    <div className="ml-3 rounded-tl-lg flex flex-grow bg-[#2b2d31] ">
      <ChannelsSide server={server} />
      <MessagesSide />
      <UsersInChannel />
    </div>
  );
}
