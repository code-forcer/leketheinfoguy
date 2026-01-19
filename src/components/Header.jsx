"use client";

import {
  Box,
  Container,
  Flex,
  Button,
  HStack,
  IconButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ColorModeToggle from "@/components/ColorModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Write", href: "/write" },
    { name: "Stories", href: "/stories" },
    { name: "Community", href: "/community" },
  ];

  return (
    <Box
      as="header"
      bg={{ base: "white", _dark: "gray.900" }}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
    >
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Text
            fontWeight="bold"
            bgGradient="linear(to-r, blue.600, blue.500)"
            bgClip="text"
            as="a"
            href="/"
            color={{ base: "blue.900", _dark: "blue.100" }}
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ bgGradient: "linear(to-r, blue.500, blue.400)" }}
          >
            LekeTheInfoGuy
          </Text>

          {/* Desktop Navigation */}
          <HStack spacing={1} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                as="a"
                href={item.href}
                color={{ base: "blue.700", _dark: "blue.200" }}
                fontWeight="medium"
                _hover={{ 
                  bg: { base: "blue.50", _dark: "blue.900" }, 
                  color: "blue.500" 
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              colorScheme="blue"
              as="a"
              href="/write"
              ml={2}
              boxShadow="md"
              color="white"
              bg="blue.500"
              _hover={{ boxShadow: "lg", transform: "translateY(-1px)" }}
              transition="all 0.2s"
            >
              Share Your Story
            </Button>
            <ColorModeToggle />
          </HStack>

          {/* Mobile Menu Toggle */}
          <HStack display={{ base: "flex", md: "none" }} spacing={2}>
            <ColorModeToggle />
            
            {/* V3 FIX: Replaced 'icon' prop with children */}
            <IconButton
              aria-label="Toggle menu"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              color={{ base: "blue.800", _dark: "blue.200" }}
              _hover={{ bg: { base: "blue.50", _dark: "blue.800" } }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        <Box
          maxH={isOpen ? "500px" : "0"}
          overflow="hidden"
          transition="max-height 0.3s ease, opacity 0.3s ease"
          opacity={isOpen ? 1 : 0}
        >
          <VStack
            spacing={2}
            align="stretch"
            mt={4}
            pt={4}
            pb={4}
            borderTop="1px solid"
            borderColor={{ base: "blue.200", _dark: "blue.700" }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                as="a"
                href={item.href}
                justifyContent="flex-start"
                onClick={() => setIsOpen(false)}
                color={{ base: "blue.700", _dark: "blue.200" }}
                _hover={{ 
                   bg: { base: "blue.100", _dark: "blue.800" }
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              colorScheme="blue"
              as="a"
              href="/write"
              onClick={() => setIsOpen(false)}
            >
              Share Your Story
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}