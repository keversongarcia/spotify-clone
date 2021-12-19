import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useDisclosure,
  useStyleConfig,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import ButtonHeader from "./components/ButtonHeader";
import FullPage from "../FullPage";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [favorite, setFavorite] = useState(false);
  const styles = useStyleConfig("Header");
  const modal = useDisclosure();
  const { data: session } = useSession();

  function openFullscreen() {
    modal.onOpen();
  }
  const { data } = useSession();
  console.log(data);

  return (
    <Box sx={styles}>
      <FullPage {...modal} />
      <Flex as="header" justifyContent="space-between">
        <ButtonGroup>
          <ButtonHeader previous />
          <ButtonHeader next />
        </ButtonGroup>
        <Menu>
          <MenuButton as="div">
            <Button
              leftIcon={<Avatar size="xs" />}
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
            <MenuItem onClick={() => signOut()}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        bg="whiteAlpha.50"
        rounded="lg"
        p={2}
        mt={4}
        align="center"
        gridGap={4}
        justify="space-between"
      >
        <HStack spacing={4}>
          <Box
            bg="URL(https://styles.redditmedia.com/t5_3eb1i/styles/communityIcon_rvxr3d33y9i61.png)"
            bgSize="cover"
            w="40px"
            h="40px"
            rounded="md"
          />
          <Box>
            <Text lineHeight="4" fontWeight="semibold">
              Clouds
            </Text>
            <Text fontSize="xs" lineHeight="4" color="whiteAlpha.700">
              NF
            </Text>
          </Box>
          <Box>
            <Icon
              as={!favorite ? IoIosHeartEmpty : IoIosHeart}
              onClick={() => setFavorite(!favorite)}
              cursor="pointer"
            />
          </Box>
        </HStack>
        <HStack>
          <Box w="100px">
            <Slider
              aria-label="sound-controller"
              defaultValue={30}
              id="sound-controller-1"
            >
              <SliderTrack bg="whiteAlpha.700">
                <SliderFilledTrack bg="spy.green" />
              </SliderTrack>
              <SliderThumb _focus={{ boxShadow: "none" }} boxSize={3} />
            </Slider>
          </Box>
          <Icon
            as={AiOutlineFullscreen}
            onClick={openFullscreen}
            cursor="pointer"
            rounded="md"
            p={1}
            fontSize="2xl"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
