import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  useStyleConfig,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import ButtonHeader from "./components/ButtonHeader";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Player from "./components/Player";

const Header = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const styles = useStyleConfig("Header");

  return (
    <Box sx={styles}>
      <Flex as="header" justifyContent="space-between">
        <ButtonGroup>
          <ButtonHeader previous onClick={() => router.back()} />
          <ButtonHeader next />
        </ButtonGroup>
        <Menu autoSelect={false}>
          <MenuButton as="div">
            <Button
              leftIcon={
                <Avatar
                  size="xs"
                  src={session?.user?.image}
                  bg={!session?.user?.image && "whiteAlpha.400"}
                />
              }
              rightIcon={<HiChevronDown />}
              rounded="full"
              size="sm"
              bg="whiteAlpha.100"
              p={1}
              _hover={{ bg: "whiteAlpha.300" }}
              _focus={{ bg: "whiteAlpha.300" }}
              _active={{ bg: "whiteAlpha.300" }}
            >
              {session?.user?.name}
            </Button>
          </MenuButton>
          <MenuList zIndex={1000} bg="black" border="none">
            <MenuItem
              isDisabled={router.pathname === "/profile"}
              onClick={() => router.push("/profile")}
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Perfil
              <Tag size="sm" ml={2} bg="spy.green">
                Novidade
              </Tag>
            </MenuItem>
            <MenuItem
              onClick={() => signOut()}
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Player />
    </Box>
  );
};

export default Header;
