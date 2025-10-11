import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Card,
  Badge,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { projects } from "../projects/constants";

export default function Projects() {
  return (
    <Container maxW="container.xl" py={20}>
      <Stack gap={8}>
        <Heading size="3xl" textAlign="center">
          My Projects
        </Heading>

        <Text
          fontSize="lg"
          textAlign="center"
          color="gray.600"
          maxW="2xl"
          mx="auto"
        >
          Here are some of the projects I've worked on. Each one represents a
          learning journey and showcases different aspects of my development
          skills.
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
          {projects.map((project) => (
            <Card.Root key={project.id} variant="outline" overflow="hidden">
              {/* Image placeholder since actual images aren't available yet */}
              <Box
                h="240px"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gray.500" fontWeight="medium">
                  {project.title} - Image Placeholder
                </Text>
              </Box>
              <Card.Body p={6}>
                <Stack gap={4}>
                  <HStack justify="space-between" align="start">
                    <Box>
                      <Heading size="lg" mb={1}>
                        {project.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.500">
                        {project.duration}
                      </Text>
                    </Box>
                    <Badge colorScheme="blue" variant="subtle">
                      {project.category}
                    </Badge>
                  </HStack>

                  <Box color="gray.600" lineHeight="tall">
                    {project.description}
                  </Box>

                  {project.metrics && (
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        mb={2}
                        color="gray.700"
                      >
                        Key Results:
                      </Text>
                      <Stack gap={1}>
                        {project.metrics.map((metric, index) => (
                          <Text key={index} fontSize="sm" color="gray.600">
                            • {metric}
                          </Text>
                        ))}
                      </Stack>
                    </Box>
                  )}

                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      mb={2}
                      color="gray.700"
                    >
                      Technologies:
                    </Text>
                    <HStack wrap="wrap" gap={2}>
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>

                  {project.ctaText &&
                    (project.ctaUrl ? (
                      <Link
                        href={project.ctaUrl}
                        target="_blank"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outline"
                          colorScheme="brand"
                          size="sm"
                          mt={4}
                          width="full"
                        >
                          {project.ctaText}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="outline"
                        colorScheme="brand"
                        size="sm"
                        mt={4}
                      >
                        {project.ctaText}
                      </Button>
                    ))}
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
