import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, HStack, Text, Badge } from '@chakra-ui/react';
import { CartItem } from '../data/products';

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="gray.200" position="sticky" top={0} zIndex={10}>
      <Flex maxW="1200px" mx="auto" px={8} py={4} align="center" justify="space-between">
        <Heading as={NavLink} to="/" size="lg" color="#4f46e5" textDecoration="none">
          {'{{projectName}}'}
        </Heading>
        <HStack gap={6}>
          <Box
            as={NavLink}
            to="/"
            end
            textDecoration="none"
            color="gray.500"
            fontWeight={500}
            _hover={{ color: '#4f46e5' }}
            css={{ '&.active': { color: '#4f46e5' } }}
          >
            Home
          </Box>
          <HStack
            as={NavLink}
            to="/cart"
            gap={1}
            textDecoration="none"
            color="gray.500"
            fontWeight={500}
            _hover={{ color: '#4f46e5' }}
            css={{ '&.active': { color: '#4f46e5' } }}
          >
            <Text>Cart</Text>
            {cartCount > 0 && (
              <Badge bg="#4f46e5" color="white" borderRadius="full" fontSize="0.7rem" px={2}>
                {cartCount}
              </Badge>
            )}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
