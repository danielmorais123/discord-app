import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerIcon from "./ServerIcon";

export default function LeftBar() {
  const servers = [
    {
      id: 1,
      icon: faDiscord,
      classNames: "hover:bg-red-500",
    },
    {
      id: 2,
      icon: faDiscord,
      classNames: "hover:bg-red-500",
    },
    {
      id: 3,
      icon: faDiscord,
      classNames: "hover:bg-red-500",
    },
  ];
  return (
    <div className=" w-[60px] flex flex-col items-center mt-2">
      <ServerIcon icon={faDiscord} />

      <hr className="w-[60%] my-2 !border-zinc-600" />
      <div className="gap-3 flex flex-col">
        {servers.map((server) => (
          <ServerIcon icon={server.icon} classNames={server.classNames} />
        ))}
      </div>
    </div>
  );
}
