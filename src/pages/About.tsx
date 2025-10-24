import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  Image,
  Container,
  SimpleGrid,
  Link,
  Button,
} from "@chakra-ui/react";
import { values } from "../content/about";
import Footer from "../components/Footer";
import aboutImg from "../assets/about/about-photo-cropped.jpg";

export default function About() {
  return (
    <Box position="relative">
      <Box py={{ base: 16, md: 32 }}>
        <Container maxW="6xl">
          <Stack gap={12} align="center">
            <Image
              src={aboutImg}
              alt="About Me"
              borderRadius="full"
              boxSize={{ base: "150px", md: "2xs" }}
              objectFit="cover"
            />

            <Heading
              size="5xl"
              textAlign="center"
              mb={{ base: undefined, md: 10 }}
            >
              How I build products
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>
              {values.map((value) => (
                <Stack key={value.id}>
                  <Heading size="xl" mb={3} fontWeight="bold">
                    {value.title}
                  </Heading>
                  <Box fontSize="lg" flex="1.5">
                    {value.description}
                  </Box>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <hr />

      {/* Mentorship Section */}
      <Box py={{ base: 16, md: 32 }}>
        <Container maxW="5xl">
          <Stack gap={6} align="center" textAlign="center">
            <Heading size="5xl">Mentorship</Heading>
            <Text fontSize="xl" lineHeight="tall" maxW="2xl">
              If you need help breaking into design or just want to chat, hit me
              up. I can't promise I have all the answers but I am a two-time
              AIGA mentor and I'm happy to share what I know after—sheesh—almost
              10 years of doing this.
            </Text>
            <HStack>
              <Link href="mailto:nikolasapayne@gmail.com">
                <Button size="lg">Email me</Button>
              </Link>
              <Link
                href="https://linkedin.com/in/nikpayne"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg">Linkedin me</Button>
              </Link>
            </HStack>
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
