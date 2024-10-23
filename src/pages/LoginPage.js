import React from 'react';
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Text,
  Heading,
  IconButton,
  FormControl,
  FormLabel,
  Stack,
  Image,
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box minH="100vh" bg="gray.800" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="sm" p={6} >
        {/* Passport Image/Logo */}
        <Box textAlign="center" mb={4}>
          <Image src="/assets/R.png" alt="Passport Logo" width="100%" height="100%" /> 
          <Text color="teal.400" fontSize="lg" fontWeight="bold">
            REPUBLIC OF ZAMBIA
          </Text>
        </Box>

        {/* Login Form */}
        <Stack spacing={6}>
          <Text fontSize="20px" color="white" textAlign="center">
            Login
          </Text>
          <Text fontSize="sm" color="gray.500">
            to access your digital passport
          </Text>

          <FormControl>
            <FormLabel color="gray.300">Username</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUserAlt color="gray.500" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Enter your username"
                color="gray.300"
                focusBorderColor="teal.400"
                _placeholder={{ color: 'gray.500' }}
              />
            </InputGroup>
            <Text color="gray.500" fontSize="xs" mt={1}>
              Cross check for typos
            </Text>
          </FormControl>

          <FormControl>
            <FormLabel color="gray.300">Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.500" />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                color="gray.300"
                focusBorderColor="teal.400"
                _placeholder={{ color: 'gray.500' }}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  icon={showPassword ? <HiEyeOff color="gray.500" /> : <HiEye color="gray.500" />}
                  onClick={handleShowClick}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text color="gray.500" fontSize="sm" textAlign="right">
            Forgot Password?
          </Text>

          <Button
            bg="teal.500"
            size="lg"
            width="full"
            _hover={{ bg: 'teal.600' }}
            color='white'
          >
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;
