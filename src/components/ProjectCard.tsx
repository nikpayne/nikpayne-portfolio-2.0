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
import type { Project } from "../content/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card.Root key={project.id} variant="outline" border="none" bg="none">
      <Card.Body
        minH="80vh"
        py={{ base: 8, lg: 12 }}
        px={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Stack gap={8}>
          <Stack
            gap={8}
            align="flex-start"
            flexDirection={{ base: "column-reverse", lg: "row" }}
          >
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
                          lineHeight="1.3"
                        >
                          {result.label}
                        </Text>
                      </Stack>
                    ))}
                  </HStack>
                )}

                {project.cta && <Box mt={6}>{project.cta}</Box>}
              </Stack>
            </Flex>
            <Flex flex="1">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                borderRadius="lg"
                maxH="65vh"
              />
            </Flex>
          </Stack>

          {/* {project.extraContent && (
            <Box width="100%">{project.extraContent}</Box>
          )} */}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
