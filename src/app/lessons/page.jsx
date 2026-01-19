"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lessons = [
  { quote: "Success is not final, failure is not fatal.", author: "Anonymous User", context: "After failing my exams" },
  { quote: "You cannot heal in the same environment that made you sick.", author: "Sarah K.", context: "On leaving a toxic job" },
  { quote: "It is okay to outgrow people who aren't growing.", author: "Mike T.", context: "Losing childhood friends" },
  { quote: "Worrying implies we don't trust God's plan.", author: "Leke", context: "Dealing with anxiety" },
];

export default function LessonsPage() {
  return (
    <>
      <Header />
      <Box bg={{ base: "gray.50", _dark: "black" }} minH="100vh" py={16}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            
            <VStack textAlign="center" spacing={4}>
              <Icon as={FaLightbulb} boxSize={12} color="yellow.400" />
              <Heading size="2xl" color={{ base: "gray.900", _dark: "white" }}>The Wisdom Board</Heading>
              <Text fontSize="xl" color={{ base: "gray.600", _dark: "gray.400" }} maxW="2xl">
                Short, powerful lessons learned from real life experiences. Take what you need.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
              {lessons.map((lesson, i) => (
                <Flex 
                  key={i}
                  direction="column"
                  p={10}
                  bg={{ base: "white", _dark: "gray.900" }}
                  rounded="3xl"
                  position="relative"
                  shadow="md"
                >
                  <Icon as={FaQuoteLeft} color="gray.200" boxSize={10} position="absolute" top={6} left={6} />
                  
                  <Text 
                    fontSize="2xl" 
                    fontWeight="medium" 
                    color={{ base: "gray.800", _dark: "white" }} 
                    fontStyle="italic"
                    zIndex={1}
                    mb={6}
                    mt={4}
                  >
                    "{lesson.quote}"
                  </Text>
                  
                  <Box mt="auto" borderTop="1px solid" borderColor="gray.100" pt={4}>
                    <Text fontWeight="bold" color="blue.500">{lesson.author}</Text>
                    <Text fontSize="sm" color="gray.500">Context: {lesson.context}</Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>

          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}