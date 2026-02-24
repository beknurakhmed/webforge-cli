'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, Flex, SimpleGrid, Switch } from '@chakra-ui/react';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <Box>
      <Box mb={6}>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>Settings</Heading>
        <Text color="gray.500">Manage your CRM preferences and configuration.</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>⚙️ General Settings</Heading>
          <VStack gap={4} align="stretch">
            <Box>
              <Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Company Name</Text>
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} border="1px solid" borderColor="gray.300" borderRadius="lg" />
            </Box>
            <Box>
              <Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Admin Email</Text>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} border="1px solid" borderColor="gray.300" borderRadius="lg" />
            </Box>
            <Box>
              <Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Currency</Text>
              <Box as="select" w="100%" p={2} border="1px solid" borderColor="gray.300" borderRadius="lg" defaultValue="USD">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (&euro;)</option>
                <option value="GBP">GBP (&pound;)</option>
              </Box>
            </Box>
            <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} alignSelf="flex-start">Save Changes</Button>
          </VStack>
        </Box>

        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>🔔 Notifications</Heading>
          <VStack gap={6} align="stretch">
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight={600} color="gray.900" fontSize="0.9rem">Email Notifications</Text>
                <Text fontSize="0.8rem" color="gray.500">Receive email alerts for new leads</Text>
              </Box>
              <Switch.Root checked={notifications} onCheckedChange={(e) => setNotifications(e.checked)}>
                <Switch.HiddenInput />
                <Switch.Control><Switch.Thumb /></Switch.Control>
              </Switch.Root>
            </Flex>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight={600} color="gray.900" fontSize="0.9rem">Deal Alerts</Text>
                <Text fontSize="0.8rem" color="gray.500">Get notified when deal stages change</Text>
              </Box>
              <Switch.Root checked={dealAlerts} onCheckedChange={(e) => setDealAlerts(e.checked)}>
                <Switch.HiddenInput />
                <Switch.Control><Switch.Thumb /></Switch.Control>
              </Switch.Root>
            </Flex>
          </VStack>
        </Box>

        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>📊 Pipeline Stages</Heading>
          <VStack gap={2} align="stretch">
            {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
              <Flex key={stage} align="center" gap={3} p={3} bg="gray.50" borderRadius="lg">
                <Flex w="28px" h="28px" borderRadius="full" bg="#4f46e5" align="center" justify="center">
                  <Text fontSize="0.8rem" fontWeight={700} color="white">{i + 1}</Text>
                </Flex>
                <Text fontWeight={500}>{stage}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" mb={5}>🔒 Security</Heading>
          <VStack gap={4} align="stretch">
            <Box>
              <Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Current Password</Text>
              <Input type="password" placeholder="Enter current password" border="1px solid" borderColor="gray.300" borderRadius="lg" />
            </Box>
            <Box>
              <Text fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>New Password</Text>
              <Input type="password" placeholder="Enter new password" border="1px solid" borderColor="gray.300" borderRadius="lg" />
            </Box>
            <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} alignSelf="flex-start">Update Password</Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
