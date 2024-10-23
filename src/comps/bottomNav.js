import React from 'react';
import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Home, FileText, User, HelpCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const activeColor = useColorModeValue('teal.500', 'teal.300');
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');

  const menuItems = [
    { 
      icon: Home, 
      label: 'Home', 
      path: '/',
      // Only match exact home path
      isActive: location.pathname === '/' 
    },
    { 
      icon: FileText, 
      label: 'Passport', 
      path: '/passport',
      // Match passport and related paths
      isActive: location.pathname.includes('/passport') || location.pathname.includes('/qrcode')
    },
    { 
      icon: User, 
      label: 'Profile', 
      path: '/profile-Page',
      // Match profile related paths
      isActive: location.pathname.includes('/profile')
    },
    { 
      icon: HelpCircle, 
      label: 'Help', 
      path: '/help',
      // Match help related paths
      isActive: location.pathname.includes('/help')
    },
  ];

  return (
    <Box 
      position="fixed" 
      bottom="0" 
      left="0" 
      right="0" 
      bg={bgColor} 
      boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
      borderTop="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      zIndex="sticky"
    >
      <Container maxW="sm" p={0}>
        <HStack justify="space-between" py={2} px={6}>
          {menuItems.map(({ icon: IconComponent, label, path, isActive }) => (
            <VStack 
              key={path} 
              spacing={1} 
              flex={1} 
              cursor="pointer"
              color={isActive ? activeColor : inactiveColor}
              onClick={() => navigate(path)}
              position="relative"
              transition="all 0.2s"
              _hover={{
                color: activeColor,
              }}
            >
              <Icon 
                as={IconComponent} 
                w={6} 
                h={6}
              />
              <Text 
                fontSize="8px" 
                fontWeight={isActive ? "medium" : "normal"}
              >
                {label}
              </Text>
              {isActive && (
                <Box
                  position="absolute"
                  bottom="-2px"
                  width="4"
                  height="0"
                  bg={activeColor}
                  borderRadius="full"
                  transition="all 0.2s"
                />
              )}
            </VStack>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default BottomNav;