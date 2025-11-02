import {
  chakra,
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { projects } from "../content/projects";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py="20vh">
        <Container maxW="6xl">
          <Stack gap={6} align="start">
            <Stack flex="1" gap={4} align="start">
              <Heading
                size="6xl"
                // textShadow="
                //   -1px 0 0 red,
                //   1px 0 0 blue,
                //   0 0 2px cyan"
              >
                Product designer, product manager, engineer—whatever it takes
              </Heading>
              <Stack flexDirection={{ base: "column", md: "row" }}>
                <Text fontSize="2xl" flex="3">
                  Nik Payne is a product designer and customer-obsessed product
                  person. Currently at{" "}
                  <Link
                    href="https://gamma.app"
                    target="_blank"
                    rel="noreferrer"
                    textDecoration="underline"
                  >
                    Gamma
                  </Link>{" "}
                  working on core product and ai features to replace traditional
                  slide decks (finally).
                </Text>
                <Stack flex="2" display={{ base: "none", md: "block" }}></Stack>
              </Stack>
              {/* <TypingText />

                <Link
                  href="https://linkedin.com/in/nikpayne"
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button variant="solid">+ Add me on Linkedin</Button>
                </Link> */}
            </Stack>
            {/* <ExperienceTimeline /> */}
          </Stack>
        </Container>
      </Box>

      <Separator flex="1" />

      {/* Featured Projects Section */}
      <Stack py={20} gap={12} separator={<hr />}>
        {projects.map((project) => (
          <Container maxW="6xl">
            <ProjectCard key={project.id} project={project} />
          </Container>
        ))}
      </Stack>

      <Footer />
    </Box>
  );
}
