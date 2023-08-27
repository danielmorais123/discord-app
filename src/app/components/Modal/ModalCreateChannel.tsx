import {
  Button,
  Modal,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  RadioGroup,
  Radio,
  Switch,
} from "@chakra-ui/react";
import {
  faHashtag,
  faLock,
  faPlus,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ModalCreateChannel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState<string>("1");
  const [privateChannel, setPrivateChannel] = useState<boolean>(false);
  const [newChannelName, setNewChannelName] = useState<string>("");

  return (
    <>
      <FontAwesomeIcon
        onClick={onOpen}
        icon={faPlus}
        className="text-zinc-400"
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className="!bg-[#313338] !text-zinc-300">
          <ModalHeader>
            <div className="flex flex-col">
              <p className="text-[16px] font-normal tracking-tighter">
                Create Channel
              </p>{" "}
              <p className="text-xs font-normal text-zinc-500">
                In Voice Channels
              </p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="text-xs text-zinc-400 font-bold uppercase">
              Channel Type
            </p>
            <RadioGroup
              defaultValue="2"
              className="mt-2"
              onChange={setValue}
              value={value}
            >
              <div className="text-[14px] px-2 flex items-center justify-between hover:bg-zinc-700  transition-all py-3 rounded-lg">
                <div className="flex items-center flex-row">
                  {" "}
                  <FontAwesomeIcon icon={faHashtag} />
                  <div className="flex flex-col ml-3">
                    <p>Text</p>
                    <p className="text-xs">
                      Send messages, images, GIFs, emoji, opinions and puns
                    </p>
                  </div>
                </div>
                <Radio colorScheme="gray" size="lg" value="1"></Radio>
              </div>
              <div className="text-[14px] px-2 flex items-center justify-between hover:bg-zinc-700  transition-all py-3 rounded-lg">
                <div className="flex items-center flex-row">
                  <FontAwesomeIcon icon={faVolumeHigh} className="w-4" />
                  <div className="flex flex-col ml-2">
                    <p>Voice</p>
                    <p className="text-xs">
                      Hang out together with voice, video and screen share
                    </p>
                  </div>
                </div>
                <Radio colorScheme="gray" size="lg" value="2"></Radio>
              </div>
            </RadioGroup>
            <div className="mt-2">
              <p className="text-xs text-zinc-400 font-bold uppercase">
                Channel Name
              </p>
              <div className="flex items-center mt-2 bg-zinc-800 p-2">
                {value === "1" ? (
                  <FontAwesomeIcon icon={faHashtag} className="w-3" />
                ) : (
                  <FontAwesomeIcon icon={faVolumeHigh} className="w-3" />
                )}

                <input
                  type="text"
                  placeholder="new channel"
                  className="w-full ml-2 bg-transparent outline-none text-sm"
                  onChange={(e) => setNewChannelName(e.target.value)}
                  value={newChannelName}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLock} className="w-3 mr-2" />
                <p className="text-[14px] font-normal tracking-tighter">
                  Private Channel
                </p>
              </div>
              <Switch
                size="md"
                onChange={(e) => setPrivateChannel(!privateChannel)}
                isChecked={privateChannel}
              />
            </div>
            <div className="mt-3">
              <p className="text-xs text-zinc-400">
                Only selected members and roles will be able to view this
                channel.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="text-xs" onClick={onClose}>
              Cancel
            </button>{" "}
            <button
              disabled
              className="text-xs ml-3 px-2 py-2 rounded-sm bg-[#5865f2]"
            >
              Create Channel
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
