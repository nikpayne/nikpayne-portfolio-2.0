import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  Separator,
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
  const MOBILE_HEADING_SIZE = "4xl";
  const DESKTOP_HEADING_SIZE = "5xl";
  return (
    <Box position="relative">
      <Box py={{ base: 16, md: 32 }}>
        <Container maxW="8xl">
          <Stack gap={12}>
            <Image
              src={aboutImg}
              alt="About Me"
              borderTopRadius="full"
              borderBottomRadius="l3"
              boxSize={{ base: "150px", md: "2xs" }}
              objectFit="cover"
            />

            <Heading
              size={{ base: MOBILE_HEADING_SIZE, md: DESKTOP_HEADING_SIZE }}
            >
              About me
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

      <Separator />

      {/* Mentorship Section */}
      <Box py={{ base: 16, md: 32 }}>
        <Container maxW="8xl">
          <Stack gap={6}>
            <Heading
              size={{ base: MOBILE_HEADING_SIZE, md: DESKTOP_HEADING_SIZE }}
            >
              Mentorship
            </Heading>
            <Text fontSize="xl" lineHeight="tall" maxW="2xl">
              If you need help breaking into design or just want to chat, hit me
              up. I can't promise I have all the answers but I am a two-time
              AIGA mentor and I'm happy to share what I know after—sheesh—almost
              10 years of doing this.
            </Text>
            <HStack>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nikolasapayne@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
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
