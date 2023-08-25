"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Channel from "./Channel";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function ChannelTab({ title, channels = [] }: any) {
  const [showChannels, setShowChannels] = useState<boolean>(false);
  return (
    <>
      <div
        className="py-1.5 flex items-center cursor-pointer"
        onClick={() => setShowChannels(!showChannels)}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={twMerge(
            "w-1.5 transition duration-500",
            showChannels ? "rotate-90" : ""
          )}
        />
        <p className="ml-2 text-zinc-400 text-sm">{title}</p>
      </div>
      {showChannels ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {channels.map((channel: any, idx: number) => (
            <Channel channel={channel} key={idx} />
          ))}
        </motion.div>
      ) : null}
    </>
  );
}
