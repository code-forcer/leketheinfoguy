"use client";

import { Box, Container, SimpleGrid, Text, Stack, Icon } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "I've never felt safe sharing my anxiety until I found this platform.",
    author: "Sarah J.",
    role: "Community Member",
  },
  {
    content: "Reading other people's 'lost opportunities' helped me realize I wasn't alone.",
    author: "David K.",
    role: "Reader",
  },
  {
    content: "It's therapy through storytelling. Writing here lifted a weight off my chest.",
    author: "Amara O.",
    role: "Writer",
  },
];

export default function Testimonials() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={{ base: "white", _dark: "gray.900" }}>
      <Container maxW="7xl">
        <Stack spacing={8} textAlign="center" mb={12}>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blue.500"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Community Voices
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color={{ base: "gray.900", _dark: "white" }}
          >
            Why people come here
          </Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 6, md: 8, lg: 10 }} // vertical + horizontal spacing
          justifyContent="center"
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              bg={{ base: "blue.50", _dark: "whiteAlpha.100" }}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              maxW={{ base: "full", md: "320px", lg: "350px" }}
              mx="auto"
              mb={{ base: 6, md: 0 }} // extra bottom margin for stacked mobile layout
            >
              <Icon as={FaQuoteLeft} w={8} h={8} color="blue.300" mb={4} />
              <Text
                fontSize="lg"
                mb={6}
                fontStyle="italic"
                color={{ base: "gray.700", _dark: "gray.300" }}
              >
                "{t.content}"
              </Text>
              <Stack direction="row" align="center" spacing={4}>
                <Avatar name={t.author} src={`https://i.pravatar.cc/150?u=${i}`} />
                <Box>
                  <Text fontWeight="bold" color={{ base: "gray.900", _dark: "white" }}>
                    {t.author}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {t.role}
                  </Text>
                </Box>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}
