import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  SimpleGrid,
  Link,
  Button,
} from "@chakra-ui/react";
import { values } from "../about/constants";
import Footer from "../components/Footer";
import aboutImg from "../assets/about/about-photo.jpg";

export default function About() {
  return (
    <Box position="relative">
      {/* About Me Section */}
      <Container maxW="4xl" py={32}>
        <Stack gap={8}>
          <Heading size="4xl" textAlign="center">
            About Me
          </Heading>

          {/* Placeholder for image */}
          <Image src={aboutImg} alt="About Me" />

          <Heading size="lg" mb={4}>
            Hi. My Name's Nik
          </Heading>

          <Stack gap={4}>
            <Text>
              I'm a SF-based product designer with 6 years of experience
              designing and building product. I grew up in the Santa Cruz
              mountains. My product design practice draws from a variety of past
              experiences studying art, computer science, economics and
              business.
            </Text>

            <Text>
              I currently work as a product designer at a seed-stage startup
              called{" "}
              <Link
                href="https://gamma.app"
                target="_blank"
                rel="noreferrer"
                textDecoration="underline"
              >
                Gamma
              </Link>{" "}
              where I get to work on all kinds of things (design, product
              management, FE development).
            </Text>

            <Text>
              Prior to that I was at SpotHero, where I led design initiatives on
              mobile apps, our website, emails, in-car experiences and more.
              Areas of focus have included CRO, SEO, growth, innovation,
              efficiency, safety and security.
            </Text>

            <Text>
              In my spare time I like staying active: running, crossfit and more
              recently mountain biking. I also go to a lot of metal/hardcore
              shows, and I'm low key an expert on UFOs.
            </Text>
          </Stack>
        </Stack>
      </Container>

      <hr />

      {/* My Values Section */}
      <Box py={32}>
        <Container maxW="container.xl">
          <Stack gap={12}>
            <Heading size="5xl" textAlign="center">
              🥑 My Values
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {values.map((value) => (
                <Box key={value.id}>
                  <Heading size="lg" mb={3}>
                    {value.title}
                  </Heading>
                  <Box fontSize="xl">{value.description}</Box>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <hr />

      {/* Mentorship Section */}
      <Box py={32}>
        <Container maxW="5xl">
          <Stack gap={6} align="center" textAlign="center">
            <Heading size="5xl">☕ Mentorship</Heading>
            <Text fontSize="xl" lineHeight="tall" maxW="2xl">
              If you need help breaking into design or just want to chat, hit me
              up. I can't promize I have all the answers but I'm a two-time AIGA
              mentor and I'm happy to share what I know. Shoot me an email at{" "}
              <Link
                href="mailto:nikolasapayne@gmail.com"
                rel="noreferrer"
                textDecoration="underline"
              >
                nikolasapayne@gmail.com
              </Link>{" "}
              or message me on Linkedin
            </Text>
            <Link
              href="https://linkedin.com/in/nikpayne"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg">Connect on Linkedin</Button>
            </Link>
          </Stack>
        </Container>
      </Box>
      {/* <Box h="900px" w="1600px" ref={containerRef} bg="red">
        <Box h="10" w="10" ref={elementRef} bg="white"></Box>
      </Box> */}

      <Footer />
    </Box>
  );
}
