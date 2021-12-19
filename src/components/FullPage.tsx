import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

const FullPage = ({ onClose, isOpen }) => {
  function onCloseModal() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      onClose();
    }
  }

  useEffect(() => {
    function onOpenModal() {
      if (!document.fullscreenElement && isOpen) {
        document.documentElement.requestFullscreen();
      }
    }

    onOpenModal();
  }, [isOpen]);

  return (
    <Modal
      onClose={onCloseModal}
      isOpen={isOpen}
      closeOnEsc={false}
      size="full"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent bg="spy.dark" rounded="0">
        <ModalHeader>
          <HStack>
            <FaSpotify size="2.5rem" />
            <Box>
              <Text
                fontSize="sm"
                lineHeight="5"
                color="whiteAlpha.800"
                fontWeight="normal"
              >
                Tocando de album
              </Text>
              <Text lineHeight="5">CLOUDS</Text>
            </Box>
          </HStack>
        </ModalHeader>
        <ModalCloseButton as={AiOutlineFullscreenExit} cursor="pointer" />
        <ModalBody>teste</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FullPage;
