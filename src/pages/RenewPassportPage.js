import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  useColorModeValue,
  useToast,
  FormControl,
  FormLabel,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RenewPassportPage = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [step, setStep] = useState(1);
  const toast = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    // Perform the submit action here (like sending data to Firestore)
    toast({
      title: "Application Submitted!",
      description: "Your passport renewal request has been submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/confirmation");
  };

  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box maxW="md" mx="auto" p={6} mb='50px'>
      <Box p={6} mb={4}>
        <Heading size="lg" mb={4}>
          DIGIPORT
        </Heading>
        <Image src="https://firebasestorage.googleapis.com/v0/b/digiport-dc.appspot.com/o/R.png?alt=media&token=7507c4fc-4c95-49e6-af0a-bc9ae76f2b50" alt="Passport" />
        <Text fontSize="sm" color="gray.500" mb={4}>
          REPUBLIC OF ZAMBIA
        </Text>
      </Box>
      {step === 1 && (
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontWeight="bold">
            Renew Passport
          </Text>

          <FormControl>
            <FormLabel>Passport Number</FormLabel>
            <Input
              placeholder="Enter your current passport number"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="teal" onClick={handleNextStep}>
            Next
          </Button>
        </VStack>
      )}

      {step === 2 && (
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontWeight="bold">
            Upload Documents
          </Text>

          <FormControl>
            <FormLabel>Upload Passport Photo</FormLabel>
            <Input type="file" onChange={handleFileChange} />
            {uploadedFile && <Text>{uploadedFile.name}</Text>}
          </FormControl>

          <Button colorScheme="teal" onClick={handleNextStep}>
            Review
          </Button>
        </VStack>
      )}

      {step === 3 && (
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontWeight="bold">
            Review Your Application
          </Text>

          <Box>
            <Text>Passport Number: {passportNumber}</Text>
            <Text>Expiry Date: {expiryDate}</Text>
            <Text>
              Uploaded File:{" "}
              {uploadedFile ? uploadedFile.name : "No file uploaded"}
            </Text>
          </Box>

          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit Application
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default RenewPassportPage;
