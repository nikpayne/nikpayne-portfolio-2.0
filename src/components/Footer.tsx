import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  Popover,
  Stack,
} from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={8}>
      <Container maxW="container.xl">
        <HStack justify="space-between" align="center">
          <Text fontSize="xl">© Nik Payne, {currentYear}</Text>

          <Popover.Root positioning={{ placement: "top" }}>
            <Popover.Trigger asChild>
              <Button size="xl" fontFamily="mono" variant="ghost">
                &lt;/&gt;
              </Button>
            </Popover.Trigger>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                  <Stack gap={1}>
                    <Text fontSize="xs" fontWeight="bold" mb={1}>
                      Built with Cursor, Claude and:
                    </Text>
                    <Text fontSize="xs">• Chakra UI v3</Text>
                    <Text fontSize="xs">• React Router</Text>
                    <Text fontSize="xs">• Vite</Text>
                    <Text fontSize="xs">• Deployed on Vercel</Text>
                  </Stack>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Popover.Root>
        </HStack>
      </Container>
    </Box>
  );
}
