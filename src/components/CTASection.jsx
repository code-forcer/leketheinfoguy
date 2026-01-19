"use client";

import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function CTASection() {
  return (
    <Box py={{ base: 20, md: 28 }} bg="blue.600" position="relative" overflow="hidden">
      {/* Decorative circle */}
      <Box
        position="absolute"
        top="-50%"
        left="-10%"
        w="500px"
        h="500px"
        bg="whiteAlpha.100"
        rounded="full"
      />
      
      <Container maxW="4xl" position="relative" zIndex={2}>
        <VStack spacing={8} textAlign="center">
          <Heading color="white" size="2xl">
            You have a story that someone needs to hear.
          </Heading>
          <Text color="blue.100" fontSize="xl" maxW="2xl">
            Whether it's a heavy worry or a lesson learned the hard way, sharing it can lighten your load and light the way for others.
          </Text>
          <Button
            size="lg"
            bg="white"
            color="blue.600"
            px={10}
            py={8}
            fontSize="xl"
            rounded="full"
            _hover={{ bg: "blue.50", transform: "scale(1.05)" }}
            transition="all 0.2s"
            as="a"
            href="/write"
          >
            Start Writing Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}