"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  Flex,
  Input,
} from "@chakra-ui/react";

// Mock data to simulate the feed
const feed = [
  { title: "I finally quit", category: "WIN", color: "green", text: "After years of doubt..." },
  { title: "The one that got away", category: "LOST OPPORTUNITY", color: "red", text: "I hesitated for one second..." },
  { title: "Anxiety before Monday", category: "WORRY", color: "blue", text: "Does anyone else feel this pit in their stomach?" },
  { title: "Learning to say no", category: "LESSON", color: "purple", text: "It is the most powerful word in the world." },
  { title: "My first marathon", category: "WIN", color: "green", text: "My legs hurt but my heart is full." },
  { title: "Financial regret", category: "LESSON", color: "purple", text: "Save money before you spend it." },
];

export default function StoriesPage() {
  return (
    <>
      <Box bg={{ base: "white", _dark: "black" }} minH="100vh">
        
        {/* Page Header */}
        <Box bg={{ base: "blue.50", _dark: "gray.900" }} py={16}>
          <Container maxW="7xl">
            <VStack spacing={6} align="center" textAlign="center">
              <Heading size="2xl" color={{ base: "gray.900", _dark: "white" }}>Real Stories</Heading>
              <Text maxW="2xl" fontSize="xl" color={{ base: "gray.600", _dark: "gray.400" }}>
                Browse stories from people just like you. Filter by what you need to read today.
              </Text>
              
              {/* Search Bar */}
              <Input 
                maxW="md" 
                placeholder="Search stories..." 
                bg={{ base: "white", _dark: "gray.800" }} 
                size="lg"
                border="none" 
              />
            </VStack>
          </Container>
        </Box>

        {/* Filters */}
        <Container maxW="7xl" py={8}>
          <Flex gap={3} overflowX="auto" pb={4} css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
            {["All", "Wins", "Worries", "Lost Opportunities", "Lessons"].map((filter) => (
              <Button 
                key={filter} 
                rounded="full" 
                variant="outline" 
                borderColor={{ base: "gray.300", _dark: "gray.700" }}
                color={{ base: "gray.600", _dark: "gray.300" }}
                _hover={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
              >
                {filter}
              </Button>
            ))}
          </Flex>

          {/* Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={8}>
            {feed.map((story, i) => (
              <Box 
                key={i}
                p={8}
                bg={{ base: "white", _dark: "gray.900" }}
                border="1px solid"
                borderColor={{ base: "gray.100", _dark: "gray.800" }}
                rounded="xl"
                shadow="sm"
                _hover={{ shadow: "md", borderColor: "blue.200" }}
                transition="all 0.2s"
              >
                <Badge colorScheme={story.color} mb={4}>{story.category}</Badge>
                <Heading size="md" mb={3} color={{ base: "gray.900", _dark: "white" }}>{story.title}</Heading>
                <Text color={{ base: "gray.600", _dark: "gray.400" }} noOfLines={3}>
                  {story.text}
                </Text>
                <Button variant="link" colorScheme="blue" mt={4} size="sm">Read more</Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}