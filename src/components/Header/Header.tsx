import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tag,
  Text,
  Tooltip,
  useDisclosure,
  useStyleConfig,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import ButtonHeader from "./components/ButtonHeader";
import FullPage from "../FullPage";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import api from "@/api";
import {
  BsFillPlayFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsPauseFill,
} from "react-icons/bs";

const Header = () => {
  const router = useRouter();

  const {
    data: { user },
  } = useSession();
  const [favorite, setFavorite] = useState(false);
  const styles = useStyleConfig("Header");
  const modal = useDisclosure();
  const { data: player } = useQuery(
    ["api.home.playerCurrent"],
    api.home.playerCurrent
  );
  const [audio] = useState(new Audio(player?.item?.preview_url));
  const [playing, setPlaying] = useState(false);

  function openFullscreen() {
    modal.onOpen();
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  console.log(audio);

  return (
    <Box sx={styles}>
      <FullPage {...modal} />
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
                  src={user?.image}
                  bg={!user?.image && "whiteAlpha.400"}
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
              {user?.name}
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
            bg={`URL(${player?.item.album.images[0].url})`}
            bgSize="cover"
            w="60px"
            h="60px"
            rounded="md"
          />
          <Box>
            <Text lineHeight="4" fontWeight="semibold">
              {player?.item.name}
            </Text>
            <Text fontSize="xs" lineHeight="4" color="whiteAlpha.700">
              {player?.item.album.artists.map((art) => art.name)}
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
        <Box w="500px">
          <HStack justify="center">
            <IconButton
              variant="ghost"
              icon={<BsSkipStartFill />}
              rounded="full"
              size="sm"
              aria-label="skip-button"
            />
            <IconButton
              icon={playing ? <BsPauseFill /> : <BsFillPlayFill />}
              color="spy.dark"
              bg="white"
              rounded="full"
              size="sm"
              aria-label="play-button"
              onClick={() => setPlaying(!playing)}
            />
            <IconButton
              variant="ghost"
              icon={<BsSkipEndFill />}
              rounded="full"
              size="sm"
              aria-label="skip-button"
            />
          </HStack>
          <Slider
            aria-label="sound-controller"
            defaultValue={50}
            id="sound-controller-1"
            sx={{
              _hover: {
                ".chakra-slider__thumb": {
                  d: "block",
                },
                ".chakra-slider__filled-track": {
                  bg: "spy.green",
                },
              },
            }}
          >
            <SliderTrack bg="whiteAlpha.500">
              <SliderFilledTrack bg="whiteAlpha.800" />
            </SliderTrack>

            <SliderThumb _focus={{ boxShadow: "none" }} d="none" boxSize={3} />
          </Slider>
        </Box>
        <HStack>
          <Tooltip label={`${player?.device.volume_percent}%`}>
            <Box w="100px">
              <Slider
                aria-label="sound-controller"
                defaultValue={player?.device.volume_percent}
                id="sound-controller-1"
              >
                <SliderTrack bg="whiteAlpha.700">
                  <SliderFilledTrack bg="spy.green" />
                </SliderTrack>

                <SliderThumb _focus={{ boxShadow: "none" }} boxSize={3} />
              </Slider>
            </Box>
          </Tooltip>
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
