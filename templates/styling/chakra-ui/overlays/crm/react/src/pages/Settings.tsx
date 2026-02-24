import { Box, Heading, Text, Input, Button, VStack } from '@chakra-ui/react';

function Settings() {
  return (
    <Box>
      <Heading as="h1" size="xl" color="gray.900" mb={8}>
        Settings
      </Heading>
      <Box bg="white" borderRadius="xl" p={8} border="1px solid" borderColor="gray.200" maxW="500px">
        <VStack as="form" gap={5} align="stretch" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
          <Box>
            <Text as="label" htmlFor="companyName" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>
              Company Name
            </Text>
            <Input
              id="companyName"
              type="text"
              defaultValue="My Company"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              _focus={{ borderColor: '#4f46e5' }}
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="email" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>
              Email Address
            </Text>
            <Input
              id="email"
              type="email"
              defaultValue="admin@company.com"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              _focus={{ borderColor: '#4f46e5' }}
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="timezone" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>
              Timezone
            </Text>
            <Box
              as="select"
              id="timezone"
              defaultValue="UTC-5"
              w="100%"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              bg="white"
              css={{ '&:focus': { borderColor: '#4f46e5', outline: 'none' } }}
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-7">Mountain Time (UTC-7)</option>
              <option value="UTC-6">Central Time (UTC-6)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European (UTC+1)</option>
            </Box>
          </Box>
          <Button type="submit" bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} fontSize="0.9rem" px={5} _hover={{ bg: '#4338ca' }} alignSelf="flex-start">
            Save Changes
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Settings;
