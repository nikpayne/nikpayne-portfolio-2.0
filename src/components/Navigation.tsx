import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      as="nav"
      bg="white"
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="container.xl">
        <Flex h={16} align="center" justify="space-between">
          <Heading size="lg" color="blue.500">
            <ChakraLink
              as={RouterLink}
              to="/"
              _hover={{ textDecoration: "none" }}
            >
              Nik Payne
            </ChakraLink>
          </Heading>

          <HStack gap={8} align="center">
            <HStack gap={6} display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => (
                <ChakraLink
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  px={3}
                  py={2}
                  borderRadius="md"
                  fontWeight={isActive(item.path) ? "bold" : "normal"}
                  color={isActive(item.path) ? "blue.500" : undefined}
                  bg={isActive(item.path) ? "blue.50" : undefined}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.100",
                  }}
                >
                  {item.label}
                </ChakraLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
