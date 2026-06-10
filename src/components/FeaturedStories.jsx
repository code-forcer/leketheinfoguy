"use client";

import { useState, useEffect } from "react";
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
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { getStories } from "@/lib/api";

// Category badge colors
const categoryColors = {
  win: "green",
  worry: "blue",
  loss: "red",
  lesson: "purple",
};

const categoryLabels = {
  win: "WIN",
  worry: "WORRY",
  loss: "LOST OPPORTUNITY",
  lesson: "LESSON",
};

// Fallback placeholder images for stories without images
const placeholderImages = [
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
];

export default function FeaturedStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const data = await getStories({ limit: 3 });
        setStories(data.stories || []);
      } catch (err) {
        console.error("Failed to fetch featured stories:", err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatured();
  }, []);

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

          {/* Loading */}
          {loading && (
            <Flex justify="center" w="full" py={10}>
              <Spinner size="lg" color="blue.500" />
            </Flex>
          )}

          {/* Empty */}
          {!loading && stories.length === 0 && (
            <Box textAlign="center" w="full" py={10}>
              <Text color="gray.500" mb={4}>No stories yet. Be the first to share!</Text>
              <Button as="a" href="/write" bg="blue.500" color="white" _hover={{ bg: "blue.600" }}>
                Share Your Story
              </Button>
            </Box>
          )}

          {/* Stories Grid */}
          {!loading && stories.length > 0 && (
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 6, md: 8, lg: 10 }}
              justifyContent="center"
              w="full"
            >
              {stories.map((story, index) => (
                <Box
                  key={story.id}
                  bg={{ base: "white", _dark: "gray.900" }}
                  overflow="hidden"
                  shadow="md"
                  transition="transform 0.2s"
                  _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                  maxW={{ base: "full", md: "340px", lg: "350px" }}
                  mx="auto"
                  mb={{ base: 6, md: 0 }}
                  borderWidth="1px"
                  borderColor={{ base: "transparent", _dark: "gray.800" }}
                >
                  <Image 
                    src={placeholderImages[index % placeholderImages.length]} 
                    alt={story.title} 
                    h="200px" 
                    w="full" 
                    objectFit="cover" 
                  />
                  <Box p={{ base: 5, md: 6 }}>
                    <Badge colorScheme={categoryColors[story.category] || "gray"} mb={3} px={2} py={1} rounded="md">
                      {categoryLabels[story.category] || story.category?.toUpperCase()}
                    </Badge>
                    
                    <Heading size="md" mb={3} lineHeight="short" color={{ base: "gray.900", _dark: "white" }}>
                      {story.title}
                    </Heading>
                    
                    <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={4} noOfLines={3}>
                      {story.content}
                    </Text>
                    
                    <Flex justify="space-between" align="center">
                      <Text fontSize="xs" color="gray.500">
                        {story.anonymous ? "Anonymous" : story.authorName}
                      </Text>
                      <Button variant="link" colorScheme="blue" size="sm">
                        Read Story
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          )}

        </VStack>
      </Container>
    </Box>
  );
}
