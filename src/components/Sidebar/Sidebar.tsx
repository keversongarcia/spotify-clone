import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebar, subSidebar } from "./utils";

const Sidebar = () => {
  const styles = useStyleConfig("Sidebar");
  const router = useRouter();
  return (
    <Box as="aside" sx={styles}>
      <Flex
        position="fixed"
        w="230px"
        p={4}
        top={0}
        direction="column"
        h="100%"
        borderRight="1px"
        borderColor="whiteAlpha.50"
      >
        <Box>
          <Image src="/spotify.svg" alt="Spotify Logo" />
          <Box py={6}>
            {sidebar.map((sb) => (
              <Link key={sb.name} href={sb.href} passHref>
                <HStack
                  spacing={3}
                  bg={router.pathname.includes(sb.href) && "whiteAlpha.50"}
                  py={3}
                  px={4}
                  rounded="md"
                  cursor="pointer"
                  color={
                    router.pathname.includes(sb.href)
                      ? "white"
                      : "whiteAlpha.700"
                  }
                  _hover={{ color: "white" }}
                  transition=".3s"
                >
                  <Icon as={sb.icon} fontSize="1.4rem" />
                  <Text fontWeight="semibold" fontSize="sm">
                    {sb.name}
                  </Text>
                </HStack>
              </Link>
            ))}
          </Box>
          <Box>
            {subSidebar.map((subsb) => (
              <Link key={subsb.name} href={subsb.href} passHref>
                <HStack
                  spacing={3}
                  py={2}
                  px={4}
                  rounded="md"
                  cursor="pointer"
                  color={
                    router.pathname.includes(subsb.href)
                      ? "white"
                      : "whiteAlpha.700"
                  }
                  _hover={{ color: "white" }}
                  transition=".3s"
                >
                  <Icon
                    as={subsb.icon}
                    bg="whiteAlpha.800"
                    fontSize="1.4rem"
                    p={1}
                    rounded="sm"
                    color="spy.dark"
                  />
                  <Text fontWeight="semibold" fontSize="sm">
                    {subsb.name}
                  </Text>
                </HStack>
              </Link>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
