import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  useToast,
  Image,
  Heading,
} from '@chakra-ui/react';

const TrackApplicationPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [error, setError] = useState('');
  const toast = useToast();

  const handleTrackApplication = () => {
    // Simulating an API call to fetch the status of the application
    if (trackingNumber === '589555') {
      setApplicationStatus('Your application is under review.');
      setError('');
    } else {
      setError('Invalid tracking number. Please try again.');
      setApplicationStatus(null);
    }

    // Show toast notification
    if (applicationStatus) {
      toast({
        title: 'Application Status Found',
        description: applicationStatus,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box maxW="md" mx="auto" p={6} bg={cardBg} shadow="lg" rounded="lg" margin='100px 10px'>
        <Box p={6} mb={4}>
        <Heading size="lg" mb={4}>
          DIGIPORT
        </Heading>
        <Image src="assets/R.PNG" alt="Passport" />
        <Text fontSize="sm" color="gray.500" mb={4}>
          REPUBLIC OF ZAMBIA
        </Text>
      </Box>
      <VStack spacing={4} align="start">
        <Text fontSize="lg" fontWeight="bold">Track Application</Text>

        <FormControl>
          <FormLabel>Tracking Number</FormLabel>
          <Input
            placeholder="Enter your tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          onClick={handleTrackApplication}
          isDisabled={!trackingNumber}
        >
          Track Application
        </Button>

        {applicationStatus && (
          <Box mt={4} p={4} bg="teal.50" rounded="md" w="full">
            <Text color="teal.600" fontWeight="bold">
              Status: {applicationStatus}
            </Text>
          </Box>
        )}

        {error && (
          <Box mt={4} p={4} bg="red.50" rounded="md" w="full">
            <Text color="red.600" fontWeight="bold">
              {error}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default TrackApplicationPage;
