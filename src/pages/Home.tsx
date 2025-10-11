import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
  Box,
  Card,
  Badge,
  HStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import { projects } from "../projects/constants";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py={20}>
        <Container maxW="5xl">
          <Stack gap={6} align="start">
            <HStack>
              <Stack flex="1">
                <Heading size="7xl">Nik Payne</Heading>
                <Heading size="4xl">Product designer</Heading>
                <Heading size="2xl">Product manager</Heading>
                <Heading size="xl">FE engineer</Heading>
                <Heading size="md">Whatever it takes</Heading>
              </Stack>
              <Stack flex="1">
                <Text fontSize="lg">
                  My name's Nik Payne. I'm a product designer and human-centered
                  design generalist, who can pm or code when needed. Currently
                  working at{" "}
                  <Link
                    href="https://gamma.app"
                    target="_blank"
                    rel="noreferrer"
                    textDecoration="underline"
                  >
                    Gamma
                  </Link>
                  , a medium to replace slide decks. I live in 📍 San Francisco.
                </Text>
                <HStack gap={4}>
                  <Link
                    href="https://www.behance.net/nikpayne"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button variant="outline">Behance Portfolio ↗</Button>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/nikpayne"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button variant="outline">Linkedin ↗</Button>
                  </Link>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box py={20}>
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
                <Card.Root key={project.id} variant="outline">
                  <Card.Body p={6}>
                    <HStack>
                      <Flex flex="1">
                        <Stack gap={4}>
                          <Box>
                            <HStack
                              justify="space-between"
                              align="start"
                              mb={2}
                            >
                              <Heading size="md">{project.title}</Heading>
                              <Text fontSize="xs">{project.duration}</Text>
                            </HStack>
                            <Badge
                              colorScheme="blue"
                              variant="subtle"
                              size="sm"
                            >
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
                      </Flex>
                      <Flex flex="1">
                        <Image src={project.imageUrl} alt={project.imageAlt} />
                      </Flex>
                    </HStack>
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
