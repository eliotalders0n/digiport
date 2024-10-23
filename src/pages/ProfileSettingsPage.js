import React from "react";
import {
  Box,
  Container,
  Button,
  Text,
  VStack,
  HStack,
  useColorMode,
  useColorModeValue,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaLock } from "react-icons/fa";

const ProfilePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container p={4} bg={bgColor} minH="100vh">
      <Box bg={cardBg} rounded="2xl" shadow="lg" p={6}>
        {/* Profile Header */}
        <VStack spacing={4} mb={6} textAlign="center">
          <Heading as="h2" size="lg" color={textColor}>
            Profile
          </Heading>
          <Text fontSize="lg" color="teal.400" fontWeight="bold">
            Manage your account settings
          </Text>
        </VStack>

        <Stack spacing={6}>
          {/* Light/Dark Mode Toggle */}
          <HStack justify="space-between">
            <Text color='gray.400' fontWeight='Bold' fontSize="md">
              Theme
            </Text>
            <IconButton
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              colorScheme="teal"
            />
          </HStack>

          {/* Reset Password Section */}
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel color={textColor}>New Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="gray.500" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  color={textColor}
                  focusBorderColor="teal.400"
                  _placeholder={{ color: "gray.500" }}
                />
              </InputGroup>
            </FormControl>

            <Button colorScheme="teal" size="lg">
              Reset Password
            </Button>
          </VStack>

          {/* Log Out Button */}
          <Button
            colorScheme="red"
            size="lg"
            width="full"
            _hover={{ bg: "red.600" }}
          >
            Log Out
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfilePage;
