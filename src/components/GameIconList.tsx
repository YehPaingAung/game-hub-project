import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export const GameIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    linux: FaLinux,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <div>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </div>
  );
};
