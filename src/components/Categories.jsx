"use client";

import { Box, Container, SimpleGrid, VStack, Heading, Text, Icon, Flex } from "@chakra-ui/react";
import { FaTrophy, FaCloudRain, FaRoad, FaLightbulb } from "react-icons/fa";

const categories = [
  {
    title: "Wins & Celebrations",
    desc: "Big or small, your victories deserve to be seen.",
    icon: FaTrophy,
    color: "yellow.500",
  },
  {
    title: "Worries & Anxiety",
    desc: "Vent your fears in a judgment-free zone.",
    icon: FaCloudRain,
    color: "blue.400",
  },
  {
    title: "Lost Opportunities",
    desc: "Process regrets and let them go.",
    icon: FaRoad,
    color: "red.400",
  },
  {
    title: "Life Lessons",
    desc: "Turn your experience into a guide for others.",
    icon: FaLightbulb,
    color: "purple.400",
  },
];

export default function Categories() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={{ base: "white", _dark: "gray.900" }}>
      <Container maxW="7xl">
        <VStack spacing={12}>
          <Heading textAlign="center" size="2xl" color={{ base: "gray.900", _dark: "white" }}>
            What's on your mind?
          </Heading>

        <SimpleGrid
  columns={{ base: 1, md: 2, lg: 4 }}
  spacing={{ base: 6, md: 8, lg: 8 }}
  justifyContent="center"
  w="full"
>
  {categories.map((cat, index) => (
    <Flex
      key={index}
      direction="column"
      align="center"
      p={{ base: 5, md: 6, lg: 6 }} // smaller padding
      maxW={{ base: "full", md: "280px", lg: "290px" }} // limit box width
      bg={{ base: "gray.50", _dark: "gray.800" }}
      rounded="2xl"
      borderWidth="1px"
      borderColor={{ base: "gray.100", _dark: "gray.700" }}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
        borderColor: cat.color,
      }}
      cursor="pointer"
      mb={{ base: 4, md: 0 }}
    >
      <Box
        p={4}
        bg={{ base: "white", _dark: "gray.700" }}
        rounded="full"
        mb={5}
        shadow="sm"
      >
        <Icon as={cat.icon} boxSize={8} color={cat.color} />
      </Box>
      <Heading
        size="md"
        mb={2}
        textAlign="center"
        color={{ base: "gray.900", _dark: "white" }}
      >
        {cat.title}
      </Heading>
      <Text
        color={{ base: "gray.500", _dark: "gray.400" }}
        textAlign="center"
        fontSize="sm"
      >
        {cat.desc}
      </Text>
    </Flex>
  ))}
</SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
}
