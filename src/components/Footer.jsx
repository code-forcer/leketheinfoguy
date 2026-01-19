"use client";

import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Button,
  Link,
  Flex,
  Separator,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  // Define repeated colors here for cleanliness, using the new format
  const linkColor = { base: "gray.600", _dark: "gray.400" };
  const hoverColor = { base: "blue.500", _dark: "blue.300" };

  return (
    <Box 
      as="footer" 

      color={{ base: "gray.800", _dark: "gray.200" }} 
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="7xl">
        {/* Main Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, lg: 12 }}
          alignItems="flex-start"
        >
          {/* Brand */}
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500">
              LekeTheInfoGuy
            </Text>

            <Text fontSize="sm" color={linkColor} lineHeight="1.8" maxW="280px">
              A calm space for sharing thoughts, emotions, lessons, and lived
              experiences built for reflection, learning, and growth.
            </Text>

            <HStack spacing={3} pt={2}>
              {[FaFacebook, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="social link"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize="36px"
                  rounded="md"
                  // Updated for v3: use _dark prop
                  bg={{ base: "whiteAlpha.50", _dark: "whiteAlpha.100" }}
                  color={linkColor}
                  _hover={{ 
                    bg: { base: "whiteAlpha.200", _dark: "whiteAlpha.300" }, 
                    color: hoverColor 
                  }}
                  transition="all 0.2s"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Explore */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">
              EXPLORE
            </Text>

            {["Home", "Stories", "Reflections", "Community", "About"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  fontSize="sm"
                  color={linkColor}
                  _hover={{ color: hoverColor }}
                >
                  {item}
                </Link>
              )
            )}
          </VStack>

          {/* Participate */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">
              PARTICIPATE
            </Text>

            <Link
              href="/write"
              fontSize="sm"
              color={linkColor}
              _hover={{ color: hoverColor }}
            >
              Write a Story
            </Link>
            <Link
              href="/guidelines"
              fontSize="sm"
              color={linkColor}
              _hover={{ color: hoverColor }}
            >
              Community Guidelines
            </Link>
            <Link
              href="/support"
              fontSize="sm"
              color={linkColor}
              _hover={{ color: hoverColor }}
            >
              Support & Safety
            </Link>

            <Button
              as="a"
              href="/write"
              size="sm"
              colorScheme="blue"
              mt={2}
              fontWeight="bold"
              bg="blue.500"
              color="white"
              alignSelf="flex-start"
            >
              Share Your Story
            </Button>
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">
              CONTACT
            </Text>

            <HStack spacing={3} align="flex-start">
              <Box pt="2px" color={linkColor}>
                <FaMapMarkerAlt size={14} />
              </Box>
              <Text fontSize="sm" color={linkColor}>
                Lagos, Nigeria
              </Text>
            </HStack>

            <HStack spacing={3} align="flex-start">
              <Box pt="2px" color={linkColor}>
                <FaEnvelope size={14} />
              </Box>
              <Link
                href="mailto:hello@leketheinfoguy.com"
                fontSize="sm"
                color={linkColor}
                _hover={{ color: hoverColor }}
              >
                hello@leketheinfoguy.com
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Divider */}
        <Separator 
          my={10} 
          borderColor={{ base: "gray.300", _dark: "gray.700" }} 
        />

        {/* Bottom Bar */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color={linkColor} textAlign="center">
            © {new Date().getFullYear()} LekeTheInfoGuy — a shared human space.
          </Text>

          <HStack spacing={6} fontSize="sm">
            <Link href="/privacy" color={linkColor} _hover={{ color: hoverColor }}>
              Privacy
            </Link>
            <Link href="/terms" color={linkColor} _hover={{ color: hoverColor }}>
              Terms
            </Link>
            <Link href="/cookies" color={linkColor} _hover={{ color: hoverColor }}>
              Cookies
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}