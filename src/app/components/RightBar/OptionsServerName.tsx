"use client";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  faBell,
  faCalendarPlus,
  faChevronDown,
  faCirclePlus,
  faFlag,
  faFolderPlus,
  faGear,
  faGem,
  faGhost,
  faPen,
  faSquare,
  faUserPlus,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ModalInvitePeople from "../Modal/ModalInvitePeople";
import { Friend, Server, User } from "@/app/types/typing";

export default function OptionsServerName({
  server,
  friends,
  userId,
}: {
  server: Server;
  friends: Friend[];
  userId: number;
}) {
  const [openInvitePeopleModal, setOpenInvitePeopleModal] =
    useState<boolean>(false);
  return (
    <>
      <div>
        <Menu>
          <MenuButton className="w-fit p-0 m-0">
            {" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-3 cursor-pointer"
            />
          </MenuButton>
          <MenuList className="!bg-zinc-800 !border-zinc-600">
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Server Boost
              <FontAwesomeIcon icon={faGem} className="absolute right-2" />
            </MenuItem>
            <hr className="!border-zinc-600" />
            <MenuItem
              onClick={() => setOpenInvitePeopleModal(true)}
              className="!bg-zinc-800 !text-[#7289da] hover:!bg-[#7289da] hover:!text-white text-sm relative"
            >
              Invite People
              <FontAwesomeIcon icon={faUserPlus} className="absolute right-1" />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Server Settings
              <FontAwesomeIcon icon={faGear} className="absolute right-2" />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Create Channel
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="absolute right-2"
              />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Create Category
              <FontAwesomeIcon
                icon={faFolderPlus}
                className="absolute right-2"
              />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Create Event
              <FontAwesomeIcon
                icon={faCalendarPlus}
                className="absolute right-2"
              />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              App Directory
              <FontAwesomeIcon icon={faGhost} className="absolute right-2" />
            </MenuItem>
            <hr className="!border-zinc-600" />
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Notifications Settings
              <FontAwesomeIcon icon={faBell} className="absolute right-2" />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Private Settings
              <FontAwesomeIcon
                icon={faUserShield}
                className="absolute right-1"
              />
            </MenuItem>
            <hr className="!border-zinc-600" />

            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Edit Server Profile
              <FontAwesomeIcon icon={faPen} className="absolute right-2" />
            </MenuItem>
            <MenuItem className="!bg-zinc-800 hover:!bg-zinc-700 text-sm relative">
              Hide Muted Channels{" "}
              <FontAwesomeIcon icon={faSquare} className="absolute right-2" />
            </MenuItem>
            <hr className="!border-zinc-600" />
            <MenuItem className="!bg-zinc-800 hover:!bg-red-500 hover:!text-white text-sm relative !text-red-500">
              Report Raid
              <FontAwesomeIcon icon={faFlag} className="absolute right-2" />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      {openInvitePeopleModal ? (
        <ModalInvitePeople
          isOpen={openInvitePeopleModal}
          setOpen={setOpenInvitePeopleModal}
          server={server}
          friends={friends}
          userId={userId}
        />
      ) : null}
    </>
  );
}
