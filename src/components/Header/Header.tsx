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
import {
  BsFillPlayFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsPauseFill,
} from "react-icons/bs";
import { IoRepeatOutline } from "react-icons/io5";
import useSpotify from "@/hooks/useSpotify";
import { millisToMinutesAndSeconds } from "@/lib/time";

const Header = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const router = useRouter();
  const styles = useStyleConfig("Header");
  const modal = useDisclosure();
  const [player, setPlayer] = useState({});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState(0);
  const [skip, setSkip] = useState(false);

  function openFullscreen() {
    modal.onOpen();
  }

  const onNext = () => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.skipToNext();
      setSkip(true);
    }
  };

  const onPrevious = () => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.skipToPrevious();
      setSkip(true);
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        setIsPlaying(data?.body?.is_playing);
        setPlayer(data?.body);
        setVolume(data?.body?.device?.volume_percent);
        setSkip(false);
      });
    }
  }, [session, spotifyApi, skip]);

  const onPlay = () => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        if (data?.body?.is_playing) {
          setIsPlaying(false);
          spotifyApi.pause();
        } else {
          setIsPlaying(true);
          spotifyApi.play();
        }
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.setVolume(volume);
    }
  }, [volume]);

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

      <Flex
        bg="whiteAlpha.50"
        rounded="lg"
        p={2}
        mt={4}
        align="center"
        gridGap={4}
        justify="space-between"
        position={{ base: "fixed", lg: "static" }}
        bottom={5}
        left={5}
        right={5}
      >
        <HStack spacing={4} w="300px" maxW="300px">
          <Box
            bg={`URL(${player?.item?.album.images[0].url}) rgba(255, 255, 255, .1)`}
            bgSize="cover"
            minW="60px"
            minH="60px"
            w="60px"
            h="60px"
            rounded="md"
          />
          <Box maxW="200px">
            <Text lineHeight="4" fontWeight="semibold" isTruncated>
              {player?.item?.name}
            </Text>
            <Text
              fontSize="xs"
              lineHeight="4"
              color="whiteAlpha.700"
              isTruncated
            >
              {player?.item?.album.artists.map((art) => art.name).join(", ")}
            </Text>
          </Box>
          <Box>
            {/* <Icon
              as={!favorite ? IoIosHeartEmpty : IoIosHeart}
              onClick={() => setFavorite(!favorite)}
              cursor="pointer"
            /> */}
          </Box>
        </HStack>
        <Box flexGrow={1}>
          <HStack justify="center">
            <IconButton
              variant="ghost"
              icon={<BsSkipStartFill />}
              rounded="full"
              size="sm"
              aria-label="skip-button"
              onClick={onPrevious}
              _hover={{ bg: "whiteAlpha.50" }}
              _focus={{ boxShadow: "none" }}
              _active={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              icon={isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
              color="spy.dark"
              bg="white"
              rounded="full"
              size="sm"
              aria-label="play-button"
              onClick={onPlay}
            />
            <IconButton
              variant="ghost"
              icon={<BsSkipEndFill />}
              rounded="full"
              size="sm"
              aria-label="skip-button"
              onClick={onNext}
              _hover={{ bg: "whiteAlpha.50" }}
              _focus={{ boxShadow: "none" }}
              _active={{ bg: "whiteAlpha.200" }}
            />
            {/* <IconButton
              variant="ghost"
              icon={<IoRepeatOutline />}
              rounded="full"
              size="sm"
              aria-label="skip-button"
              _hover={{ bg: "whiteAlpha.50" }}
              _focus={{ boxShadow: "none" }}
              _active={{ bg: "whiteAlpha.200" }}
            /> */}
          </HStack>
          <HStack>
            <Text fontSize="xs" color="whiteAlpha.700">
              {millisToMinutesAndSeconds(player?.progress_ms)}
            </Text>
            <Slider
              aria-label="sound-controller"
              max={player?.item?.duration_ms}
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

              <SliderThumb
                _focus={{ boxShadow: "none" }}
                d="none"
                boxSize={3}
              />
            </Slider>
            <Text fontSize="xs" color="whiteAlpha.700">
              {millisToMinutesAndSeconds(player?.item?.duration_ms)}
            </Text>
          </HStack>
        </Box>
        <HStack w="300px" maxW="300px" justify="end">
          <Box w="100px">
            <Slider
              aria-label="sound-controller"
              value={volume}
              defaultValue={volume}
              id="sound-controller-1"
              onChange={(e) => setVolume(e)}
              step={10}
            >
              <SliderTrack bg="whiteAlpha.700">
                <SliderFilledTrack bg="spy.green" />
              </SliderTrack>
              <Tooltip label={`${volume}%`} hasArrow>
                <SliderThumb _focus={{ boxShadow: "none" }} boxSize={3} />
              </Tooltip>
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
