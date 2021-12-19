import { IconButton } from "@chakra-ui/react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const ButtonHeader = ({ previous = false, next = false }) => {
  return (
    <IconButton
      icon={
        previous ? <HiChevronLeft /> : next ? <HiChevronRight /> : undefined
      }
      aria-label={`icon-${previous ? "previous" : next ? "next" : ""}`}
      rounded="full"
      size="sm"
      bg="whiteAlpha.200"
      _hover={{ bg: "whiteAlpha.300" }}
      _focus={{ bg: "whiteAlpha.300" }}
      _active={{ bg: "whiteAlpha.300" }}
    />
  );
};

export default ButtonHeader;
