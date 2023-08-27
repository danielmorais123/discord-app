import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons/faWindowMaximize";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anton } from "next/font/google";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="bg-[#1e1f22] h-screen text-zinc-200 flex flex-col">
      <div className="px-3 pt-0.5 flex items-center justify-between">
        <p className={`text-zinc-400 ${anton.className} font-bold text-md `}>
          Discord
        </p>
        <div className="gap-1 flex">
          <FontAwesomeIcon
            icon={faMinus}
            className="w-3 hover:bg-zinc-200 hover:text-zinc-600 px-1 mx-1 transition cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faWindowMaximize}
            className="w-3 hover:bg-zinc-200 hover:text-zinc-600 px-1 mx-1 transition cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faClose}
            className="w-3 hover:bg-red-400 hover:text-zinc-100 px-1 ml-1 transition cursor-pointer"
          />
        </div>
      </div>
      <div className="pl-3 flex flex-grow">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
