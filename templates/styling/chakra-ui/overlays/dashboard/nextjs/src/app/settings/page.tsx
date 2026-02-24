'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, Flex, SimpleGrid, Switch } from '@chakra-ui/react';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <Box>
      <Box mb={6}><Heading as="h1" size="xl" color="gray.900" mb={1}>Settings</Heading><Text color="gray.500">Manage your application preferences and configuration.</Text></Box>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>⚙️ General</Heading>
          <VStack gap={4} align="stretch">
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Site Name</Text><Input value={siteName} onChange={(e) => setSiteName(e.target.value)} border="1px solid" borderColor="gray.300" borderRadius="lg" /></Box>
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Admin Email</Text><Input value={email} onChange={(e) => setEmail(e.target.value)} border="1px solid" borderColor="gray.300" borderRadius="lg" /></Box>
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Language</Text><Box as="select" w="100%" p={2} border="1px solid" borderColor="gray.300" borderRadius="lg" value={language} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)}><option value="en">English</option><option value="es">Spanish</option><option value="fr">French</option><option value="de">German</option></Box></Box>
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Timezone</Text><Box as="select" w="100%" p={2} border="1px solid" borderColor="gray.300" borderRadius="lg" value={timezone} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimezone(e.target.value)}><option value="UTC">UTC</option><option value="EST">Eastern Time</option><option value="PST">Pacific Time</option><option value="CET">Central European</option></Box></Box>
          </VStack>
        </Box>
        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>🔔 Notifications</Heading>
          <VStack gap={6} align="stretch">
            <Flex justify="space-between" align="center">
              <Box><Text fontWeight={500}>Email Notifications</Text><Text fontSize="sm" color="gray.500">Receive email updates about activity</Text></Box>
              <Switch.Root checked={notifications} onCheckedChange={(e) => setNotifications(e.checked)}><Switch.HiddenInput /><Switch.Control><Switch.Thumb /></Switch.Control></Switch.Root>
            </Flex>
            <Flex justify="space-between" align="center">
              <Box><Text fontWeight={500}>Dark Mode</Text><Text fontSize="sm" color="gray.500">Use dark theme for the dashboard</Text></Box>
              <Switch.Root checked={darkMode} onCheckedChange={(e) => setDarkMode(e.checked)}><Switch.HiddenInput /><Switch.Control><Switch.Thumb /></Switch.Control></Switch.Root>
            </Flex>
          </VStack>
        </Box>
        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>🔒 Security</Heading>
          <VStack gap={4} align="stretch">
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Current Password</Text><Input type="password" placeholder="Enter current password" border="1px solid" borderColor="gray.300" borderRadius="lg" /></Box>
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>New Password</Text><Input type="password" placeholder="Enter new password" border="1px solid" borderColor="gray.300" borderRadius="lg" /></Box>
            <Box><Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Confirm Password</Text><Input type="password" placeholder="Confirm new password" border="1px solid" borderColor="gray.300" borderRadius="lg" /></Box>
            <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} alignSelf="flex-start">Update Password</Button>
          </VStack>
        </Box>
        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>🎨 Appearance</Heading>
          <Flex gap={4}>
            {[{ label: 'Light', bg: 'white', borderColor: '#4f46e5' }, { label: 'Dark', bg: 'gray.800', borderColor: 'gray.200' }, { label: 'System', bg: 'linear-gradient(135deg, white 50%, #1a202c 50%)', borderColor: 'gray.200' }].map((t) => (
              <VStack key={t.label} gap={2} cursor="pointer">
                <Box w="80px" h="60px" borderRadius="lg" border="2px solid" borderColor={t.borderColor} bg={t.bg} />
                <Text fontSize="sm">{t.label}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
