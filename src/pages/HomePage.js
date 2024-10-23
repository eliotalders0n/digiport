import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Container,
  Heading,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Home, User, Globe, Book, FileText, MessageCircle } from "lucide-react";

// Home Page Component
const HomePage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const bgSecondaryColor = useColorModeValue("white", "gray.600");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="sm" p={4} bg={bgColor} minH="100vh" mb='50px'>
      <Box p={6} mb={4}>
        <Heading size="lg" mb={4}>
          DIGIPORT
        </Heading>
        <Image src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/R.png?alt=media&token=7507c4fc-4c95-49e6-af0a-bc9ae76f2b50" alt="Passport" />
        <Text fontSize="sm" color="gray.500" mb={4}>
          REPUBLIC OF ZAMBIA
        </Text>
      </Box>

      <VStack spacing={3} align="stretch">
        <Button
          as={Link} // Use Link from react-router-dom
          to="/emergency-contacts" // The route to the Emergency Contacts page
          leftIcon={<Icon as={User} />}
          justifyContent="flex-start"
          bg={cardBg}
          h="16"
          shadow="sm"
        >
          EMERGENCY CONTACTS
        </Button>
        <Button
          as={Link} // Use Link from react-router-dom
          to="/renew-passport"
          leftIcon={<Icon as={Book} />}
          justifyContent="flex-start"
          bg={bgSecondaryColor}
          h="16"
          shadow="sm"
        >
          RENEW PASSPORT
        </Button>
        <Button
          as={Link} // Use Link from react-router-dom
          to="/review-application"
          leftIcon={<Icon as={MessageCircle} />}
          justifyContent="flex-start"
          bg={cardBg}
          h="16"
          shadow="sm"
        >
          REVIEW YOUR APPLICATION
        </Button>
        <Button
          as={Link} // Use Link from react-router-dom
          to="/track-application"
          leftIcon={<Icon as={Globe} />}
          justifyContent="flex-start"
          bg={bgSecondaryColor}
          h="16"
          shadow="sm"
        >
          TRACK YOUR APPLICATION
        </Button>
        <Button
          as={Link} // Use Link from react-router-dom
          to="/documents"
          leftIcon={<Icon as={FileText} />}
          justifyContent="flex-start"
          bg={cardBg}
          h="16"
          shadow="sm"
        >
          DOCUMENTS
        </Button>
      </VStack>
    </Container>
  );
};

export default HomePage;
