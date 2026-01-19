"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaPaperPlane, FaLock } from "react-icons/fa";

export default function WritePage() {
  return (
    <>
      <Box 
        bg={{ base: "gray.50", _dark: "gray.900" }} 
        minH="100vh" 
        py={{ base: 10, md: 20 }}
      >
        <Container maxW="3xl">
          <VStack spacing={8} align="stretch">
            
            {/* Page Title */}
            <VStack spacing={2} textAlign="center">
              <Heading size="xl" color={{ base: "gray.800", _dark: "white" }}>
                Share Your Story
              </Heading>
              <Text color={{ base: "gray.600", _dark: "gray.400" }}>
                This is a safe space. Express your feelings, share your wins, or let go of your worries.
              </Text>
            </VStack>

            {/* Form Card */}
            <Box
              bg={{ base: "white", _dark: "gray.800" }}
              p={{ base: 6, md: 8 }}
              shadow="lg"
              border="1px solid"
              borderColor={{ base: "gray.100", _dark: "gray.700" }}
            >
              <VStack spacing={6}>
                
                {/* Title Input */}
                <Box w="full">
                  <Text mb={2} fontWeight="medium" color={{ base: "gray.700", _dark: "gray.300" }}>
                    Give your story a title
                  </Text>
                  <Input 
                    placeholder="e.g., The day I finally let go..." 
                    size="lg" 
                    bg={{ base: "gray.50", _dark: "gray.700" }}
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.600" }}
                  />
                </Box>

                {/* Category & Mood */}
                <Flex direction={{ base: "column", md: "row" }} gap={4} w="full">
                  {/* Category Select */}
                  <Box w="full">
                    <Text mb={2} fontWeight="medium" color={{ base: "gray.700", _dark: "gray.300" }}>
                      Category
                    </Text>
                    <Box 
                      as="select"
                      w="full"
                      h="48px"
                      px={4}
                      rounded="md"
                      bg={{ base: "gray.50", _dark: "gray.700" }}
                      border="1px solid"
                      borderColor={{ base: "gray.200", _dark: "gray.600" }}
                      color={{ base: "gray.800", _dark: "white" }}
                      _focus={{ outline: "none", borderColor: "blue.400" }}
                    >
                      <option value="win">Win & Celebration</option>
                      <option value="worry">Worry & Anxiety</option>
                      <option value="loss">Lost Opportunity</option>
                      <option value="lesson">Life Lesson</option>
                    </Box>
                  </Box>
                  
                  {/* Mood Select */}
                  <Box w="full">
                    <Text mb={2} fontWeight="medium" color={{ base: "gray.700", _dark: "gray.300" }}>
                      Current Mood
                    </Text>
                    <Box 
                      as="select"
                      w="full"
                      h="48px"
                      px={4}
                      rounded="md"
                      bg={{ base: "gray.50", _dark: "gray.700" }}
                      border="1px solid"
                      borderColor={{ base: "gray.200", _dark: "gray.600" }}
                      color={{ base: "gray.800", _dark: "white" }}
                      _focus={{ outline: "none", borderColor: "blue.400" }}
                    >
                      <option value="hopeful">Hopeful</option>
                      <option value="sad">Sad / Melancholy</option>
                      <option value="anxious">Anxious</option>
                      <option value="grateful">Grateful</option>
                      <option value="angry">Frustrated</option>
                    </Box>
                  </Box>
                </Flex>

                {/* Main Content */}
                <Box w="full">
                  <Text mb={2} fontWeight="medium" color={{ base: "gray.700", _dark: "gray.300" }}>
                    Your Story
                  </Text>
                  <Textarea
                    placeholder="Write as much as you need. No judgment here..."
                    size="lg"
                    minH="250px"
                    bg={{ base: "gray.50", _dark: "gray.700" }}
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.600" }}
                  />
                </Box>

                {/* Anonymity Checkbox */}
                <Flex 
                  w="full" 
                  justify="space-between" 
                  align="center" 
                  p={4} 
                  bg={{ base: "blue.50", _dark: "blue.900" }} 
                  rounded="lg"
                >
                  <Flex align="center" gap={3}>
                    <Icon as={FaLock} color="blue.500" />
                    <Box>
                      <Text fontWeight="bold" fontSize="sm" color={{ base: "gray.800", _dark: "white" }}>
                        Post Anonymously
                      </Text>
                      <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.300" }}>
                        Your name will be hidden
                      </Text>
                    </Box>
                  </Flex>
                  {/* Standard Checkbox Input */}
                  <Box 
                    as="input" 
                    type="checkbox" 
                    defaultChecked 
                    w={5} 
                    h={5} 
                    accentColor="#3182ce"
                  />
                </Flex>

                {/* Submit Button */}
                <Button
                  size="lg"
                  w="full"
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: "blue.600" }}
                  py={8}
                  fontSize="xl"
                >
                  <Box as="span" mr={2}><FaPaperPlane /></Box> Publish Story
                </Button>

              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}