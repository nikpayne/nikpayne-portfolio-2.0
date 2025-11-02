import {
  Box,
  HStack,
  Code,
  IconButton,
  Link,
  List,
  Popover,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Code as CodeIcon } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" p={7} px="10">
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Text fontSize="lg" color="text.secondary">
          © Nik Payne, {currentYear} <chakra.span mx="1.5">ᐧ</chakra.span>{" "}
          <Link asChild color="text.secondary">
            <RouterLink to="/piracy">Piracy policy</RouterLink>
          </Link>
        </Text>

        <HStack gap={6}>
          <Text fontSize="lg">
            <Link
              href="https://www.instagram.com/vivasantacruz"
              target="_blank"
              rel="noreferrer"
              textDecoration="underline"
            >
              Instagram
            </Link>
          </Text>
          <Text fontSize="lg">
            <Link
              href="https://linkedin.com/in/nikpayne"
              target="_blank"
              rel="noreferrer"
              textDecoration="underline"
            >
              Linkedin
            </Link>
          </Text>

          <Popover.Root positioning={{ placement: "top" }}>
            <Popover.Trigger asChild>
              <IconButton variant="ghost" size="md" aria-label="Code">
                <CodeIcon size={24} />
              </IconButton>
            </Popover.Trigger>
            <Popover.Positioner>
              <Popover.Content maxW="200px">
                <Popover.Arrow />
                <Popover.Body fontFamily="mono">
                  <Stack gap={1} fontSize="xs">
                    <List.Root pl={3}>
                      <List.Item>
                        <Text>Chakra UI V3</Text>
                      </List.Item>
                      <List.Item>
                        <Text>Vite + React router</Text>
                      </List.Item>
                      <List.Item>
                        <Text>Deployed on Vercel</Text>
                      </List.Item>
                    </List.Root>
                  </Stack>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Popover.Root>
        </HStack>
      </Stack>
    </Box>
  );
}
