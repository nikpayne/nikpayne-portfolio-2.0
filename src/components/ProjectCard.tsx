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
  index: number;
  totalProjects: number;
}

export default function ProjectCard({
  project,
  index,
  totalProjects,
}: ProjectCardProps) {
  const textStyling = {
    fontSize: "lg",
    color: "text.secondary",
    fontFamily: "PP Neue Montreal Mono",
  };

  return (
    <Card.Root key={project.id} variant="outline" border="none" bg="none">
      <Card.Body
        minH="80vh"
        py={{ base: 8, lg: "16" }}
        px={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Stack gap={8}>
          <Stack
            gap={{ base: 8, lg: 16 }}
            align="flex-start"
            flexDirection={{ base: "column-reverse", lg: "row" }}
          >
            {/* <Flex flex="0.2" position="sticky" top={8}>
              <Text {...textStyling}>{index + 1} --------</Text>
            </Flex> */}
            <Flex flex="1">
              <Stack gap={5}>
                <Stack gap="2">
                  <Text {...textStyling}>{project.duration}</Text>
                  <Heading size="4xl" pb="1">
                    {project.title}
                  </Heading>
                </Stack>

                <Box fontSize="lg" lineHeight="tall">
                  {project.description}
                </Box>

                {/* <HStack wrap="wrap" gap={1.5} pb={1}>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="subtle" size="md">
                      {tech}
                    </Badge>
                  ))}
                </HStack> */}

                <ProjectKeyResults keyResults={project.keyResults} />

                {project.cta && (
                  <Stack
                    pt={{ base: 0, lg: 3 }}
                    align={{ base: "stretch", lg: "start" }}
                  >
                    {project.cta}
                  </Stack>
                )}
              </Stack>
            </Flex>
            <Flex flex="1" justifyContent="center">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                borderRadius="lg"
                maxH="65vh"
              />
            </Flex>
          </Stack>

          {project.extraContent && (
            <Stack width="100%" mt={6} align={{ base: "stretch", lg: "start" }}>
              {project.extraContent}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
