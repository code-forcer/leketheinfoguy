"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaPenNib, FaBookOpen } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      w="full"
      h={{ base: "600px", md: "700px" }} // Taller for more impact
      display="flex"
      alignItems="center"
      justifyContent="center"
      // Background Image (Calm, abstract, or nature)
      bgImage="url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      {/* Dark Overlay - Makes text pop and feels "cinematic" */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.600" // Semi-transparent black
        zIndex={1}
      />

      <Container maxW="4xl" position="relative" zIndex={2}>
        <VStack spacing={8} textAlign="center">
          
          {/* Main Heading */}
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            lineHeight="1.1"
            letterSpacing="tight"
          >
            Your feelings allow us <br />
            <Box as="span" color="blue.300">
              to learn and grow.
            </Box>
          </Heading>

          {/* Subheading - Pitching your specific vision */}
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            color="gray.200"
            maxW="2xl"
            fontWeight="light"
          >
            A safe space to share your wins, vent your worries, and turn lost opportunities into lessons for others. You are not alone in this journey.
          </Text>

          {/* CTA Buttons */}
          <HStack spacing={4} pt={4} flexDirection={{ base: "column", sm: "row" }} w="full" justify="center">
            <Button
              size="xl" // Larger button for main action
              colorScheme="blue"
              bg="blue.500"
              color="white"
              px={10}
              py={7}
              fontSize="lg"
              rounded="full"
              _hover={{ bg: "blue.400", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              as="a"
              href="/write"
            >
              <Box mr={2}><FaPenNib /></Box> Share Your Story
            </Button>

            <Button
              size="xl"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.800"
              px={10}
              py={7}
              fontSize="lg"
              rounded="full"
              _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
              as="a"
              href="/stories"
            >
              <Box mr={2}><FaBookOpen /></Box> Read Lessons
            </Button>
          </HStack>
          
          {/* Trust/Social Proof text */}
          <Text fontSize="sm" color="whiteAlpha.700" pt={4}>
            Join a community built on empathy and real lived experiences.
          </Text>

        </VStack>
      </Container>
    </Box>
  );
}