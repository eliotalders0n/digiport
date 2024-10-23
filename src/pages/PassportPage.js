import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Container,
  Heading,
  Flex,
  Image,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { QRCodeCanvas } from 'qrcode.react';

const PassportPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBgSecondary = useColorModeValue("gray.300", "gray.600");

  return (
    <Container p={4} bg={bgColor} minH="100vh">
      <Box bg={cardBg} rounded="2xl" shadow="lg" p={6}>
        <Heading size="md" mb={6}>
          PASSPORT
        </Heading>

        {/* Photo and Coat of Arms section */}
        <Flex
          px={2}
          mb={6}
          justify="space-between"
          align="center"
          bg={cardBgSecondary}
          p={2}
          borderRadius={10}
        >
          {/* Left side - Photo */}
          <Box
            w="120px"
            h="160px"
            bg={bgColor}
            rounded="lg"
            overflow="hidden"
            position="relative"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/IMG_8161.JPG?alt=media&token=f6f48d78-7b86-48de-bb48-49518bfb2eb8"
              alt="Passport photo"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <Text
            color="white"
            fontSize="lg"
            marginLeft="-25px"
            fontWeight="medium"
            transform="rotate(-90deg)" // This rotates the text by 45 degrees
          >
            ZN589555
          </Text>

          {/* Right side - Coat of Arms */}
          <Box
            w="100px"
            h="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* <Box w="100px" h="100px" bg="gray.600"> */}

            <VStack>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/R.png?alt=media&token=7507c4fc-4c95-49e6-af0a-bc9ae76f2b50"
                alt="CourtofArms"
                w="100%"
                h="100%"
                objectFit="cover"
              />
              {/* </Box> */}
              <Text fontSize="x-small" fontWeight="Bold" color="gray.400">
                REPUBLIC OF ZAMBIA
              </Text>
            </VStack>
          </Box>
        </Flex>

        <VStack spacing={4} align="stretch">
          {[
            ["FULL NAME", "Pukuta Mwanza"],
            ["TYPE", "P"],
            ["COUNTRY CODE", "ZMB"],
            ["NATIONALITY", "Zambian"],
            ["SEX", "Male"],
            ["DATE OF BIRTH", "03/12/1996"],
            ["PLACE OF BIRTH", "Lusaka, Zambia"],
            ["DATE OF ISSUE", "10/22/2024"],
            ["DATE EXPIRED", "10/22/2029"],
            ["ISSUE OFFICE", "Solwezi Immigration Authority"],
            ["REG. NO.", "412706/10/1"],
          ].map(([label, value]) => (
            <Box
              key={label}
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Text fontSize="xs" color="gray.500">
                {label}
              </Text>
              <Text fontSize="sm" fontWeight="medium" ml={4}>
                {value}
              </Text>
            </Box>
          ))}
        </VStack>

        <Box mt={6} p={4} rounded="lg">
          <Button onClick={onOpen} bg="teal.600" color="white" p={10} size="lg">
            PASSPORT NUMBER <br /> ZN589555
          </Button>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={cardBg} justifyContent='center' alignItems='center' p='15px' width='80%'>
            <Heading size="sm" mb={6}>
              PASSPORT NUMBER
            </Heading>
            <Box
              w="full"
              h="300px"
              bg="gray.100"
              rounded="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <QRCodeCanvas value="589555" size={250} />
            </Box>

            <Text
              textAlign="center"
              mt={4}
              color="teal.600"
              fontSize="lg"
              fontWeight="bold"
            >
              ZN589555
            </Text>

            <Text
              textAlign="center"
              color="gray.600"
              fontSize="sm"
              fontWeight="bold"
            >
              secured
            </Text>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default PassportPage;
