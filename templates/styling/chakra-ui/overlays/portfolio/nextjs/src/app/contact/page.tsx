'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, Flex, SimpleGrid } from '@chakra-ui/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box maxW="1000px" mx="auto" px={6} py={8}>
      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900">Get in Touch</Heading>
        <Text color="gray.500" mt={2}>Have a project in mind or just want to say hello? I would love to hear from you.</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="start" templateColumns={{ base: '1fr', md: '1.2fr 1fr' }}>
        <Box bg="white" p={8} borderRadius="xl" border="1px solid" borderColor="gray.200">
          {submitted ? (
            <Box textAlign="center" py={8}>
              <Text fontSize="3rem" mb={4}>✅</Text>
              <Heading as="h3" size="md" color="gray.900" mb={2}>Message Sent!</Heading>
              <Text color="gray.500" mb={6}>Thank you for reaching out. I will get back to you as soon as possible.</Text>
              <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} onClick={() => setSubmitted(false)}>Send Another</Button>
            </Box>
          ) : (
            <Box as="form" onSubmit={handleSubmit}>
              <VStack gap={5} align="stretch">
                <Box>
                  <Text fontSize="0.85rem" fontWeight={600} color="gray.600" mb={1}>Name</Text>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" border="1px solid" borderColor="gray.300" borderRadius="lg" required />
                </Box>
                <Box>
                  <Text fontSize="0.85rem" fontWeight={600} color="gray.600" mb={1}>Email</Text>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" border="1px solid" borderColor="gray.300" borderRadius="lg" required />
                </Box>
                <Box>
                  <Text fontSize="0.85rem" fontWeight={600} color="gray.600" mb={1}>Subject</Text>
                  <Box as="select" name="subject" value={formData.subject} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)} w="100%" p={2} border="1px solid" borderColor="gray.300" borderRadius="lg" required>
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="other">Other</option>
                  </Box>
                </Box>
                <Box>
                  <Text fontSize="0.85rem" fontWeight={600} color="gray.600" mb={1}>Message</Text>
                  <Box as="textarea" name="message" value={formData.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)} placeholder="Tell me about your project..." w="100%" p={3} border="1px solid" borderColor="gray.300" borderRadius="lg" fontFamily="inherit" fontSize="0.95rem" resize="vertical" rows={5} required />
                </Box>
                <Button type="submit" w="100%" bg="#4f46e5" color="white" py={6} borderRadius="lg" fontWeight={600} fontSize="1.05rem" _hover={{ bg: '#4338ca' }}>Send Message</Button>
              </VStack>
            </Box>
          )}
        </Box>

        <VStack gap={5} align="stretch">
          <Box bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200">
            <Heading as="h3" size="sm" color="gray.900" mb={4}>Contact Information</Heading>
            <VStack gap={4} align="stretch">
              <Flex gap={3}>
                <Text fontSize="1.5rem" flexShrink={0}>📧</Text>
                <Box>
                  <Text fontSize="0.8rem" color="gray.500">Email</Text>
                  <Text fontWeight={600} color="gray.900">hello@{'{{projectName}}'}.com</Text>
                </Box>
              </Flex>
              <Flex gap={3}>
                <Text fontSize="1.5rem" flexShrink={0}>📍</Text>
                <Box>
                  <Text fontSize="0.8rem" color="gray.500">Location</Text>
                  <Text fontWeight={600} color="gray.900">San Francisco, CA</Text>
                </Box>
              </Flex>
              <Flex gap={3}>
                <Text fontSize="1.5rem" flexShrink={0}>🕐</Text>
                <Box>
                  <Text fontSize="0.8rem" color="gray.500">Availability</Text>
                  <Text fontWeight={600} color="gray.900">Open for freelance projects</Text>
                </Box>
              </Flex>
            </VStack>
          </Box>

          <Box bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200">
            <Heading as="h3" size="sm" color="gray.900" mb={4}>Social Links</Heading>
            <SimpleGrid columns={2} gap={3}>
              <Flex as="a" href="#" align="center" gap={2} p={3} bg="gray.50" borderRadius="lg" fontWeight={500} color="gray.600" _hover={{ bg: '#eef2ff', color: '#4f46e5' }} transition="all 0.2s">
                <Text>💼</Text><Text>LinkedIn</Text>
              </Flex>
              <Flex as="a" href="#" align="center" gap={2} p={3} bg="gray.50" borderRadius="lg" fontWeight={500} color="gray.600" _hover={{ bg: '#eef2ff', color: '#4f46e5' }} transition="all 0.2s">
                <Text>📂</Text><Text>GitHub</Text>
              </Flex>
              <Flex as="a" href="#" align="center" gap={2} p={3} bg="gray.50" borderRadius="lg" fontWeight={500} color="gray.600" _hover={{ bg: '#eef2ff', color: '#4f46e5' }} transition="all 0.2s">
                <Text>🐦</Text><Text>Twitter</Text>
              </Flex>
              <Flex as="a" href="#" align="center" gap={2} p={3} bg="gray.50" borderRadius="lg" fontWeight={500} color="gray.600" _hover={{ bg: '#eef2ff', color: '#4f46e5' }} transition="all 0.2s">
                <Text>📸</Text><Text>Dribbble</Text>
              </Flex>
            </SimpleGrid>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
