"use client";
import { Friend, Server, User } from "@/app/types/typing";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { faHashtag, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SuggestedFriends from "../RightBar/SuggestedFriends";

export default function ModalInvitePeople({
  isOpen,
  setOpen,
  server,
  friends,
  userId,
}: {
  isOpen: boolean;
  setOpen: any;
  server: Server;
  friends: Friend[];
  userId: number;
}) {
  return (
    <>
      <Modal onClose={() => setOpen(false)} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className="!bg-[#313338] !text-zinc-300">
          <ModalHeader>
            <div className="flex flex-col">
              <p className="text-[16px] font-normal tracking-tighter">
                Invite friends to {server?.name}
              </p>{" "}
              <div className="flex items-center gap-2 text-zinc-500 mt-2">
                <FontAwesomeIcon icon={faHashtag} className="w-3" />
                <p className="text-xs">general</p>
              </div>
            </div>
            <div className="bg-zinc-800 relative mt-2">
              <input
                placeholder="Search for friends"
                className="w-full text-xs bg-transparent outline-none p-1 py-2 ml-2"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="right-2 absolute w-3 top-2"
              />
            </div>
            <div>
              <SuggestedFriends
                friends={friends}
                userId={userId}
                serverId={server?.id}
              />
            </div>
            <div className="mt-3">
              <p className="text-xs text-zinc-400 uppercase">
                Or, send a server invite link to a friend
              </p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
