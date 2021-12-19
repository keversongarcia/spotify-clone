import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      position="absolute"
      left={0}
      top={0}
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      bg="spy.dark"
    >
      <Spinner size="xl" mb={2} color="spy.green" thickness="3px" />
    </Flex>
  );
};

export default Loading;
