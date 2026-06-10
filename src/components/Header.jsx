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
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import ColorModeToggle from "@/components/ColorModeToggle";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, logout } = useAuth();

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

            {/* Auth Buttons */}
            {!loading && (
              <>
                {user ? (
                  <HStack spacing={2} ml={2}>
                    <Flex
                      align="center"
                      gap={2}
                      px={3}
                      py={1.5}
                      bg={{ base: "blue.50", _dark: "blue.900" }}
                      rounded="full"
                    >
                      <Box
                        w={7}
                        h={7}
                        rounded="full"
                        bg="blue.500"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {user.name?.charAt(0).toUpperCase()}
                      </Box>
                      <Text fontSize="sm" fontWeight="medium" color={{ base: "blue.700", _dark: "blue.200" }}>
                        {user.name}
                      </Text>
                    </Flex>
                    <Button
                      variant="ghost"
                      size="sm"
                      color="red.400"
                      _hover={{ bg: "red.50", color: "red.500" }}
                      onClick={logout}
                    >
                      <FaSignOutAlt />
                    </Button>
                  </HStack>
                ) : (
                  <HStack spacing={2} ml={2}>
                    <Button
                      variant="ghost"
                      as="a"
                      href="/login"
                      color={{ base: "blue.700", _dark: "blue.200" }}
                      fontWeight="medium"
                      _hover={{ bg: { base: "blue.50", _dark: "blue.900" } }}
                    >
                      Log In
                    </Button>
                    <Button
                      colorScheme="blue"
                      as="a"
                      href="/register"
                      boxShadow="md"
                      color="white"
                      bg="blue.500"
                      _hover={{ boxShadow: "lg", transform: "translateY(-1px)" }}
                      transition="all 0.2s"
                    >
                      Sign Up
                    </Button>
                  </HStack>
                )}
              </>
            )}

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
          maxH={isOpen ? "600px" : "0"}
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

            {/* Mobile Auth */}
            {!loading && (
              <>
                {user ? (
                  <>
                    <Flex align="center" gap={2} px={4} py={2}>
                      <Box
                        w={7}
                        h={7}
                        rounded="full"
                        bg="blue.500"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {user.name?.charAt(0).toUpperCase()}
                      </Box>
                      <Text fontSize="sm" fontWeight="medium" color={{ base: "blue.700", _dark: "blue.200" }}>
                        {user.name}
                      </Text>
                    </Flex>
                    <Button
                      variant="ghost"
                      justifyContent="flex-start"
                      color="red.400"
                      _hover={{ bg: "red.50" }}
                      onClick={() => { logout(); setIsOpen(false); }}
                    >
                      <FaSignOutAlt style={{ marginRight: 8 }} /> Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      as="a"
                      href="/login"
                      justifyContent="flex-start"
                      onClick={() => setIsOpen(false)}
                      color={{ base: "blue.700", _dark: "blue.200" }}
                    >
                      Log In
                    </Button>
                    <Button
                      colorScheme="blue"
                      as="a"
                      href="/register"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </>
            )}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}