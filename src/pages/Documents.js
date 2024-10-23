import React from 'react';
import {
  Box,
  VStack,
  Text,
  IconButton,
  Grid,
  GridItem,
  Badge,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FiUploadCloud } from 'react-icons/fi'; // For the upload icon

const DocumentsPage = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const sectionTitleColor = useColorModeValue('gray.600', 'gray.300');
  
  const documents = [
    { title: 'Visa', count: 4, icon: '🛂' },
    { title: 'Travel', count: 4, icon: '📄' },
    { title: 'Vaccination', count: 3, icon: '💉' },
    { title: 'Insurance', count: 1, icon: '✅' },
  ];

  return (
    <Box p={4}>
      {/* Page Heading */}
      <VStack spacing={4} align="start" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Documents</Text>
        <Text fontSize="md" color={sectionTitleColor}>Manage your documents by uploading or checking the ones you already uploaded.</Text>
      </VStack>

      {/* Document Grid */}
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {documents.map((doc, index) => (
          <GridItem key={index}>
            <Box
              bg={cardBg}
              p={4}
              rounded="lg"
              shadow="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minH="150px"
              textAlign="center"
              position="relative"
            >
              {/* Icon */}
              <Text fontSize="4xl">{doc.icon}</Text>

              {/* Document Title */}
              <Text fontSize="lg" fontWeight="bold" mt={2}>{doc.title}</Text>

              {/* Badge for number of items */}
              <Badge mt={2} colorScheme="teal" fontSize="sm">
                {doc.count} Items
              </Badge>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Upload Button */}
      <VStack mt={6}>
        <Button leftIcon={<AddIcon />} colorScheme="teal" size="lg">
          Upload Document
        </Button>
      </VStack>
    </Box>
  );
};

export default DocumentsPage;
