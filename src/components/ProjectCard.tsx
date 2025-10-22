import {
  Box,
  Card,
  Stack,
  HStack,
  Flex,
  Heading,
  Text,
  Badge,
  Image,
} from "@chakra-ui/react";
import type { Project } from "../projects/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card.Root
      key={project.id}
      variant="outline"
      minH="80vh"
      border="none"
      bg="none"
    >
      <Card.Body
        // p={6}
        p={0}
      >
        <Stack gap={8}>
          <HStack gap={8} align="flex-start">
            <Flex flex="1">
              <Stack gap={4}>
                <Stack gap="3">
                  <Heading size="4xl">{project.title}</Heading>

                  <Text fontSize="md" color="text.secondary">
                    {project.duration}
                  </Text>
                  <HStack wrap="wrap" gap={1}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Stack>

                <Box fontSize="lg" lineHeight="tall">
                  {project.description}
                </Box>

                {project.cta && <Box mt={6}>{project.cta}</Box>}

                {project.keyResults && project.keyResults.length > 0 && (
                  <HStack gap={6} mt={6} align="flex-start">
                    {project.keyResults.map((result, index) => (
                      <Stack key={index} gap={1.5} flex="1">
                        <Heading
                          fontSize="3xl"
                          fontWeight="bold"
                          lineHeight="1"
                        >
                          {result.value}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="text.secondary"
                          lineHeight="1.25"
                        >
                          {result.label}
                        </Text>
                      </Stack>
                    ))}
                  </HStack>
                )}
              </Stack>
            </Flex>
            <Flex flex="1">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                borderRadius="lg"
              />
            </Flex>
          </HStack>

          {project.extraContent && (
            <Box width="100%">{project.extraContent}</Box>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
