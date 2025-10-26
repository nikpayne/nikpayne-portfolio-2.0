import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
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

          <HStack gap={4}>
            <HStack gap={6}>
              {navItems.map((item) => (
                <RouterLink
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Heading
                    size="lg"
                    textDecoration={isActive(item.path) ? "underline" : "none"}
                  >
                    {item.label}
                  </Heading>
                </RouterLink>
              ))}
            </HStack>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              aria-label="Toggle color mode"
            >
              {colorMode === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
