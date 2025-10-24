import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useColorMode } from "../contexts/ColorModeContext";

export default function Navigation() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box as="nav">
      <Container maxW="container.xl">
        <Flex h={16} align="center" justify="space-between">
          <Heading size="lg">
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
                    fontWeight={isActive(item.path) ? "semibold" : "medium"}
                    color={
                      isActive(item.path)
                        ? undefined
                        : { base: "gray.600", _dark: "gray.400" }
                    }
                    _hover={{
                      bg: { base: "gray.100", _dark: "gray.700" },
                    }}
                  >
                    {item.label}
                  </Box>
                </RouterLink>
              ))}
            </HStack>

            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              aria-label="Toggle color mode"
            >
              {colorMode === "light" ? "☀️" : "🌙"}
            </IconButton>

            {/* <Button>Do not click this button</Button> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
