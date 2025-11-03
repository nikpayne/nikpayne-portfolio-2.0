import { HStack, Stack, Heading, Text } from "@chakra-ui/react";
import type { KeyResult } from "../content/projects";

interface Props {
  keyResults?: KeyResult[];
}

export default function ProjectKeyResults({ keyResults }: Props) {
  if (!keyResults || keyResults.length === 0) return null;
  return (
    <Stack gap={6} align="flex-start" direction={{ base: "column", lg: "row" }}>
      {keyResults.map((result, index) => (
        <Stack
          key={index}
          gap="1.5"
          flex="1"
          // direction={{ base: "row", lg: "column" }}
          w="100%"
        >
          <Heading
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight="bold"
            lineHeight="1"
            flexShrink={0}
            flex="1"
            fontFamily="'PP Neue Montreal Mono', monospace"
          >
            {result.value}
          </Heading>
          <Text fontSize="sm" color="text.secondary" lineHeight="1.3" flex="2">
            {result.label}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
}
