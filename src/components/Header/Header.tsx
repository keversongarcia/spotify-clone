import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  useStyleConfig,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import ButtonHeader from "./components/ButtonHeader";

const Header = () => {
  const styles = useStyleConfig("Header");

  return (
    <Flex as="header" sx={styles}>
      <ButtonGroup>
        <ButtonHeader previous />
        <ButtonHeader next />
      </ButtonGroup>
      <Button
        leftIcon={<Avatar size="xs" />}
        rightIcon={<HiChevronDown />}
        rounded="full"
        size="sm"
        bg="whiteAlpha.200"
        p={1}
        _hover={{ bg: "whiteAlpha.300" }}
        _focus={{ bg: "whiteAlpha.300" }}
        _active={{ bg: "whiteAlpha.300" }}
      >
        Keverson
      </Button>
    </Flex>
  );
};

export default Header;
