import {
  Box,
  HStack,
  IconButton,
  Link,
  List,
  Popover,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" p={7} px="10">
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Text fontSize="lg">© Nik Payne, {currentYear}</Text>

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
                <Code size={24} />
              </IconButton>
            </Popover.Trigger>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                  <Stack gap={1} fontSize="xs">
                    <Text fontWeight="bold" mb={1}>
                      Vibe and hand-coded with love using:
                    </Text>
                    <List.Root pl={3}>
                      <List.Item>
                        <Text>Chakra UI V3</Text>
                      </List.Item>
                      <List.Item>
                        <Text>Vite + React Router</Text>
                      </List.Item>
                      <List.Item>
                        <Text>Vercel</Text>
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
