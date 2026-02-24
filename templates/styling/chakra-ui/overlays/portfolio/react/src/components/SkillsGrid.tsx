import { SimpleGrid, Box, Heading, Flex, Badge } from '@chakra-ui/react';
import { skills } from '../data/projects';

function SkillsGrid() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6} maxW="1100px" mx="auto">
      {skills.map((group, i) => (
        <Box key={i} bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="sm" fontWeight={600} mb={4} color="#4f46e5">
            {group.category}
          </Heading>
          <Flex flexWrap="wrap" gap={2}>
            {group.items.map((skill, j) => (
              <Badge key={j} bg="gray.100" color="gray.700" px={3} py={1} borderRadius="md" fontSize="0.85rem" fontWeight={400}>
                {skill}
              </Badge>
            ))}
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default SkillsGrid;
