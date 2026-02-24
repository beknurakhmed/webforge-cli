import { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, Flex, Switch } from '@chakra-ui/react';

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <Box>
      <Heading as="h1" size="xl" color="gray.900" mb={6}>
        Settings
      </Heading>
      <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200" mb={6}>
        <Heading as="h3" size="sm" fontWeight={600} color="gray.900" mb={5}>
          Profile
        </Heading>
        <VStack gap={4} align="stretch" maxW="400px">
          <Box>
            <Text as="label" htmlFor="name" display="block" fontSize="0.85rem" fontWeight={500} color="gray.700" mb={1}>
              Full Name
            </Text>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)' }}
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="email" display="block" fontSize="0.85rem" fontWeight={500} color="gray.700" mb={1}>
              Email Address
            </Text>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)' }}
            />
          </Box>
        </VStack>
      </Box>
      <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200" mb={6}>
        <Heading as="h3" size="sm" fontWeight={600} color="gray.900" mb={5}>
          Preferences
        </Heading>
        <VStack gap={4} align="stretch">
          <Flex align="center" gap={3}>
            <Switch.Root checked={darkMode} onCheckedChange={(e) => setDarkMode(e.checked)}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
            <Text fontSize="0.9rem" color="gray.700">Dark Mode</Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Switch.Root checked={notifications} onCheckedChange={(e) => setNotifications(e.checked)}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
            <Text fontSize="0.9rem" color="gray.700">Email Notifications</Text>
          </Flex>
        </VStack>
      </Box>
      <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} fontSize="0.9rem" px={5} _hover={{ bg: '#4338ca' }}>
        Save Changes
      </Button>
    </Box>
  );
}
