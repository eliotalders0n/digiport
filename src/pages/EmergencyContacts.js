import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Container,
  Heading,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const EmergencyContactsPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Container maxW="sm" p={4} bg={bgColor} minH="100vh" mb='50px'>
      <Box bg={cardBg} rounded="2xl" shadow="lg" p={6}>
        {/* Emergency Contacts Header */}
        <Heading
          size="md"
          mb={4}
          color={textColor}
        >
          Emergency Contacts
        </Heading>
        
        <Text fontSize="sm" color={textColor} mb={6}>
          Find important emergency contacts for government authorities, embassies, police, and ambulance services.
        </Text>

        {/* Government Authorities */}
        <Heading size="sm" color="teal.400" mb={2}>
          Government Authorities
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Text color={textColor}>Ministry of Home Affairs: +260 211 252622</Text>
          <Text color={textColor}>Immigration Department: +260 211 255282</Text>
        </VStack>

        <Divider />

        {/* Embassy Contacts */}
        <Heading size="sm" color="teal.400" mt={4} mb={2}>
          Embassy Contacts
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Text color={textColor}>South Africa: +27-XXX-XXXX</Text>
          <Text color={textColor}>Malawi: +1-XXX-XXXX</Text>
          <Text color={textColor}>Tanzania: +1-XXX-XXXX</Text>
          <Text color={textColor}>Angola: +1-XXX-XXXX</Text>
          <Text color={textColor}>Namibia: +1-XXX-XXXX</Text>
          <Text color={textColor}>Zimbabwe: +1-XXX-XXXX</Text>
          <Text color={textColor}>Mozambique: +1-XXX-XXXX</Text>
        </VStack>

        <Divider />

        {/* Police and Ambulance */}
        <Heading size="sm" color="teal.400" mt={4} mb={2}>
          Police & Ambulance
        </Heading>
        <VStack align="start" spacing={2}>
          <HStack>
            <Text fontWeight="bold" color="red.500">
              Police Emergency:
            </Text>
            <Text color={textColor}>911</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" color="red.500">
              Ambulance Emergency:
            </Text>
            <Text color={textColor}>991</Text>
          </HStack>
        </VStack>

        {/* Contact us section */}
        <Box mt={6} p={4} bg={bgColor} rounded="lg" textAlign="center">
          <Text fontSize="md" color="teal.400" fontWeight="bold">
            Need further assistance?
          </Text>
          <Text fontSize="sm" color={textColor}>
            Contact us at support@appfusion.com or call +260-XXX-XXXX.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default EmergencyContactsPage;
