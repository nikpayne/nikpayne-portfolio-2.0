import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useColorMode } from "../contexts/ColorModeContext";

export default function Navigation() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box as="nav">
      <Container maxW="container.xl">
        <Flex h={16} align="center" justify="space-between">
          <Heading size="lg" color="blue.500">
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              Nik Payne
            </RouterLink>
          </Heading>

          <HStack gap={8} align="center">
            <HStack gap={6} display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => (
                <RouterLink
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    px={3}
                    py={2}
                    borderRadius="md"
                    fontWeight={isActive(item.path) ? "bold" : "normal"}
                    color={isActive(item.path) ? "blue.500" : undefined}
                    bg={isActive(item.path) ? "blue.50" : undefined}
                    _hover={{
                      bg: { base: "gray.100", _dark: "gray.700" },
                    }}
                  >
                    {item.label}
                  </Box>
                </RouterLink>
              ))}
            </HStack>

            <HStack gap={2} align="center">
              <Text fontSize="sm">☀️</Text>
              <Switch.Root
                checked={colorMode === "dark"}
                onCheckedChange={() => toggleColorMode()}
                size="sm"
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
              <Text fontSize="sm">🌙</Text>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
