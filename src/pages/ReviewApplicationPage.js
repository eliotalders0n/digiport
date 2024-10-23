import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  useColorModeValue,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';

const ReviewApplicationPage = ({ applicationData, handleEdit, handleSubmit }) => {
  const cardBg = useColorModeValue('white', 'gray.700');

  // Sample application data, would be passed as props in the actual implementation
  const sampleApplicationData = {
    fullName: 'John Doe',
    passportType: '32-page ordinary passport',
    nationalID: '123456789',
    dateOfBirth: '1990-01-01',
    placeOfBirth: 'Lusaka, Zambia',
    address: '123 Main Street, Lusaka',
    phoneNumber: '+260 976 123456',
    email: 'john.doe@email.com',
    documentsUploaded: ['National ID', 'Birth Certificate'],
  };

  return (
    <Box maxW="md" mx="auto" p={6} bg={cardBg} shadow="lg" rounded="lg" mb='60px' mt='5px'>
        <Box p={6} mb={4}>
        <Heading size="lg" mb={4}>
          DIGIPORT
        </Heading>
        <Image src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/R.png?alt=media&token=7507c4fc-4c95-49e6-af0a-bc9ae76f2b50" alt="Passport" />
        <Text fontSize="sm" color="gray.500" mb={4}>
          REPUBLIC OF ZAMBIA
        </Text>
      </Box>
      <VStack spacing={4} align="start">
        <Text fontSize="lg" fontWeight="bold">Review Your Application</Text>
        <Divider />

        {/* Review Section */}
        <VStack spacing={4} w="full">
          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Full Name:</Text>
            <Text>{sampleApplicationData.fullName}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Passport Type:</Text>
            <Text>{sampleApplicationData.passportType}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">National ID:</Text>
            <Text>{sampleApplicationData.nationalID}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Date of Birth:</Text>
            <Text>{sampleApplicationData.dateOfBirth}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Place of Birth:</Text>
            <Text>{sampleApplicationData.placeOfBirth}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Address:</Text>
            <Text>{sampleApplicationData.address}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Phone Number:</Text>
            <Text>{sampleApplicationData.phoneNumber}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Email:</Text>
            <Text>{sampleApplicationData.email}</Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Documents Uploaded:</Text>
            <VStack align="start">
              {sampleApplicationData.documentsUploaded.map((doc, idx) => (
                <Text key={idx}>{doc}</Text>
              ))}
            </VStack>
          </HStack>
        </VStack>

        <Divider />

        {/* Action Buttons */}
        <Stack direction="row" w="full" justify="space-between" mt={6}>
          <Button colorScheme="teal" variant="outline" onClick={handleEdit}>
            Edit Application
          </Button>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit Application
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ReviewApplicationPage;
