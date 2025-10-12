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
    <Card.Root key={project.id} variant="outline" my="8vh" border="none">
      <Card.Body p={6}>
        <HStack gap={8}>
          <Flex flex="1">
            <Stack gap={4}>
              <Stack>
                <Heading size="4xl">{project.title}</Heading>

                <Text fontSize="md" color="text.secondary">
                  {project.duration}
                </Text>
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
            </Stack>
          </Flex>
          <Flex flex="1">
            <Image src={project.imageUrl} alt={project.imageAlt} />
          </Flex>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
