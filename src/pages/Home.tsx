import {
  Heading,
  Text,
  Button,
  Stack,
  Container,
  Box,
  HStack,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { projects } from "../projects/constants";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TypingText from "../components/TypingText";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py="20vh">
        <Container maxW="6xl">
          <Stack gap={6} align="start">
            <Stack>
              <Stack flex="1" gap={4} align="start">
                <Heading size="7xl">Nik Payne</Heading>
                <Heading size="3xl">
                  Product designer, product manager, engineer—whatever it takes
                </Heading>
                <Text fontSize="lg">
                  Product designer and customer-obsessed product person.
                  Currently working on core product and ai work at working at{" "}
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
                <TypingText />

                <Link
                  href="https://linkedin.com/in/nikpayne"
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button variant="solid">+ Add me on Linkedin</Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack gap={12}>
            <Heading size="6xl" mb={4}>
              Featured Work
            </Heading>

            <Stack gap={6}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
