import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Divider,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const HelpPage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container p={4} bg={bgColor} minH="100vh">
      <Box bg={cardBg} rounded="2xl" shadow="lg" p={6}>
        {/* About the App */}
        <VStack spacing={4} mb={6} textAlign="center">
          <Heading as="h2" size="lg" color={textColor}>
            Help & Support
          </Heading>
        </VStack>

        {/* Feedback Section */}
        <VStack spacing={4} align="stretch" mb={8}>
          <Heading size="md" color={textColor}>
            We Value Your Feedback
          </Heading>
          <FormControl>
            <FormLabel color={textColor}>Your Name</FormLabel>
            <Input
              placeholder="Enter your name"
              color={textColor}
              focusBorderColor="teal.400"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={textColor}>Your Email</FormLabel>
            <Input
              placeholder="Enter your email"
              type="email"
              color={textColor}
              focusBorderColor="teal.400"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={textColor}>Your Feedback</FormLabel>
            <Textarea
              placeholder="Tell us what you think"
              color={textColor}
              focusBorderColor="teal.400"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg">
            Submit Feedback
          </Button>
        </VStack>

        {/* Divider */}
        <Divider my={8} />

        {/* FAQ Section */}
        <VStack spacing={6} align="stretch">
          <Heading size="md" color={textColor}>
            Frequently Asked Questions
          </Heading>
          <Box>
            <Heading size="sm" color={textColor} mb={2}>
              How do I apply for a new passport?
            </Heading>
            <Text color="gray.500">
              You can apply for a new passport by going to the "Apply for New
              Passport" section on your dashboard.
            </Text>
          </Box>
          <Box>
            <Heading size="sm" color={textColor} mb={2}>
              How do I track my passport application?
            </Heading>
            <Text color="gray.500">
              After submission, you can track your application status in the
              "Track Application" section on your dashboard.
            </Text>
          </Box>
          <Box>
            <Heading size="sm" color={textColor} mb={2}>
              How long does it take to process my application?
            </Heading>
            <Text color="gray.500">
              Standard processing times vary, but the express service is usually
              completed in less than 10 minutes.
            </Text>
          </Box>
        </VStack>

        {/* Divider */}
        <Divider my={8} />

        {/* Government Links */}
        <VStack spacing={4} align="stretch">
          <Heading size="md" color={textColor}>
            Government Links
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Link
                href="https://www.zambiaimmigration.gov.zm/"
                color="teal.400"
                isExternal
              >
                Zambia Immigration Department
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.zamlii.org/" color="teal.400" isExternal>
                Zambia Legal Information Institute
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.mlss.gov.zm/" color="teal.400" isExternal>
                Ministry of Labour and Social Security
              </Link>
            </ListItem>
          </List>
        </VStack>
      </Box>

      <Text
            fontSize="md"
            bgGradient="linear(to-r, purple.500, red.500)"
            bgClip="text"
            fontWeight="bold"
            mb='60px'
            mt='20px'
          >
            <img src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/favicon.ico?alt=media&token=4aa32700-ae97-498b-9f0c-799a64d94852" style={{width:"25px", height:"25px", float: "left"}}/>Appfusion Studio Limited . Copyright © 2024
          </Text>
    </Container>
  );
};

export default HelpPage;
