"use client";

import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  Badge, 
  Button, 
  VStack, 
  Image, 
  Flex,
  Icon 
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const stories = [
  {
    title: "I finally quit the job that was draining me",
    excerpt: "It took me three years to build the courage. Today I walked out, and the air smells sweeter...",
    category: "WIN",
    color: "green",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The unspoken grief of losing a friend",
    excerpt: "Everyone says it gets easier with time. I'm writing this to say: it's okay if it doesn't.",
    category: "WORRY",
    color: "blue",
    image: "https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "What I learned from failing my startup",
    excerpt: "I lost money, I lost time, but here is the one lesson that was worth more than all of it.",
    category: "LESSON",
    color: "purple",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedStories() {
  return (
    <Box 
      as="section" 
      py={{ base: 16, md: 24 }} 
      bg={{ base: "gray.50", _dark: "black" }}
    >
      <Container maxW="7xl">
        <VStack spacing={12} align="flex-start">
          <Flex
            justify="space-between"
            w="full"
            align="center"
            direction={{ base: "column", sm: "row" }}
            gap={4}
          >
            <Heading size="xl" color={{ base: "gray.900", _dark: "white" }}>
              Trending Stories
            </Heading>
            
            <Button 
              variant="ghost" 
              colorScheme="blue" 
              as="a" 
              href="/stories"
              color={{ base: "blue.600", _dark: "blue.300" }}
              _hover={{ bg: { base: "blue.50", _dark: "gray.800" } }}
            >
              View All Stories <Icon as={FaArrowRight} ml={2} />
            </Button>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8, lg: 10 }}
            justifyContent="center"
            w="full"
          >
            {stories.map((story, index) => (
              <Box
                key={index}
                bg={{ base: "white", _dark: "gray.900" }}
                overflow="hidden"
                shadow="md"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                maxW={{ base: "full", md: "340px", lg: "350px" }}
                mx="auto"
                mb={{ base: 6, md: 0 }} // ADD vertical spacing for mobile stacked cards
                borderWidth="1px"
                borderColor={{ base: "transparent", _dark: "gray.800" }}
              >
                <Image src={story.image} alt={story.title} h="200px" w="full" objectFit="cover" />
                <Box p={{ base: 5, md: 6 }}>
                  <Badge colorScheme={story.color} mb={3} px={2} py={1} rounded="md">
                    {story.category}
                  </Badge>
                  
                  <Heading size="md" mb={3} lineHeight="short" color={{ base: "gray.900", _dark: "white" }}>
                    {story.title}
                  </Heading>
                  
                  <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={4} noOfLines={3}>
                    {story.excerpt}
                  </Text>
                  
                  <Button variant="link" colorScheme="blue" size="sm">
                    Read Story
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
}
