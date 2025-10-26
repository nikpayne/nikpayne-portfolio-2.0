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
import ProjectKeyResults from "./ProjectKeyResults";

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
              <Stack gap={6}>
                <Stack gap="3">
                  <Text fontSize="md" color="text.secondary">
                    {project.duration}
                  </Text>
                  <Heading size="4xl" pb="1">
                    {project.title}
                  </Heading>

                  <HStack wrap="wrap" gap={1}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="subtle" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Stack>

                <Box fontSize="lg" lineHeight="tall">
                  {project.description}
                </Box>

                <ProjectKeyResults keyResults={project.keyResults} />

                {project.cta && <Box mt="2">{project.cta}</Box>}
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

          {project.extraContent && (
            <Box width="100%" mt={6}>
              {project.extraContent}
            </Box>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
