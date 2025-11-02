import {
  chakra,
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

import ProjectCard from "../components/ProjectCard";
import CyclingSoftwareLogo from "../components/CyclingSoftwareLogo";
import winningImg from "../assets/about/winning-son.svg";
import winningImageAlt from "../assets/about/winning-son-alternate.svg";
import { projects } from "../content/projects";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py="20vh">
        <Container maxW="8xl">
          <Stack gap={6} align="start">
            <Stack gap={4} align="start">
              <Stack
                flexDirection={{ base: "column", lg: "row" }}
                align="center"
                justify="center"
                gap={{ base: 10, lg: 32 }}
              >
                <Stack flex="1" gap={{ base: 3, md: 5 }}>
                  <Heading size={{ base: "4xl", md: "6xl" }}>
                    Product designer, product manager, engineer—whatever it
                    takes
                  </Heading>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    flex="3"
                    maxW="2xl"
                  >
                    Nik Payne is a product designer and customer-obsessed
                    product person. Currently at{" "}
                    <Link
                      href="https://gamma.app"
                      target="_blank"
                      rel="noreferrer"
                      textDecoration="underline"
                    >
                      Gamma
                    </Link>{" "}
                    working on core product and ai features to replace
                    traditional slide decks (finally).
                  </Text>
                </Stack>
                <Stack>
                  <Box position="relative">
                    <Image
                      src={winningImageAlt}
                      alt="Are you winning?"
                      // p="8"
                      // bg="white"
                      borderRadius="lg"
                      maxW={{
                        base: "300px",
                        md: "400px",
                        lg: "400px",
                        xl: "500px",
                      }}
                      filter={{ _light: "none", _dark: "invert(1)" }}
                      opacity={{ _light: 1, _dark: 0.8 }}
                    />
                    <CyclingSoftwareLogo />
                  </Box>
                </Stack>
              </Stack>{" "}
              {/* 

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
      <Stack py={20} gap={12} separator={<Separator />}>
        {projects.map((project, index) => (
          <Container maxW="8xl">
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          </Container>
        ))}
      </Stack>

      <Footer />
    </Box>
  );
}
