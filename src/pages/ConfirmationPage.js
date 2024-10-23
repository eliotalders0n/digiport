import React from 'react';
import { Box, VStack, Text, Button, useColorModeValue, Heading, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const navigate = useNavigate();

  return (
    <Box maxW="md" mx="auto" p={6} bg={cardBg} shadow="lg" margin='100px 10px' rounded="lg">
        <Box p={6} mb={4}>
        <Heading size="lg" mb={4}>
          DIGIPORT
        </Heading>
        <Image src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/R.png?alt=media&token=7507c4fc-4c95-49e6-af0a-bc9ae76f2b50" alt="Passport" />
        <Text fontSize="sm" color="gray.500" mb={4}>
          REPUBLIC OF ZAMBIA
        </Text>
      </Box>
      <VStack spacing={6} align="center">
        <Text fontSize="lg" fontWeight="bold">Application Submitted</Text>
        <Text>Your passport renewal application has been submitted successfully.</Text>
        <Text>Tracking Number: <strong>589555</strong></Text>
        <Button colorScheme="teal" onClick={() => navigate('/track-application')}>
          Track Application
        </Button>
      </VStack>
    </Box>
  );
};

export default ConfirmationPage;
