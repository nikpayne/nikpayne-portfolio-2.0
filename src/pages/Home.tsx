import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
  Box,
  SimpleGrid,
  Card,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { projects } from "../projects/constants";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.md" py={20}>
        <Stack gap={8} align="center" textAlign="center">
          <Heading
            size="4xl"
            bgGradient="linear(to-r, brand.400, accent.500)"
            bgClip="text"
          >
            Hi, I'm Nik Payne
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            A passionate developer creating amazing web experiences. Welcome to
            my portfolio where you can explore my work and get to know me
            better.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} gap={4}>
            <Button colorScheme="brand" size="lg">
              View My Work
            </Button>
            <Button variant="outline" colorScheme="brand" size="lg">
              Get In Touch
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Featured Projects Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="6xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size="2xl" mb={4}>
                Featured Work
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
                A selection of projects I've worked on, from startup ventures to
                enterprise solutions
              </Text>
            </Box>

            <Stack gap={6}>
              {projects.map((project) => (
                <Card.Root key={project.id} variant="outline" bg="white">
                  <Card.Body p={6}>
                    <Stack gap={4}>
                      <Box>
                        <Image src={project.imageUrl} alt={project.imageAlt} />
                        <HStack justify="space-between" align="start" mb={2}>
                          <Heading size="md">{project.title}</Heading>
                          <Text fontSize="xs" color="gray.500">
                            {project.duration}
                          </Text>
                        </HStack>
                        <Badge colorScheme="blue" variant="subtle" size="sm">
                          {project.category}
                        </Badge>
                      </Box>

                      <Box color="gray.600" fontSize="sm" lineHeight="tall">
                        {project.description}
                      </Box>

                      {project.metrics && project.metrics.length > 0 && (
                        <Box>
                          <Text
                            fontSize="xs"
                            fontWeight="medium"
                            color="gray.700"
                            mb={1}
                          >
                            Key Impact:
                          </Text>
                          <Text fontSize="xs" color="gray.600">
                            • {project.metrics[0]}
                          </Text>
                        </Box>
                      )}

                      <HStack wrap="wrap" gap={1}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" size="xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Text fontSize="xs" color="gray.500">
                            +{project.technologies.length - 4} more
                          </Text>
                        )}
                      </HStack>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
