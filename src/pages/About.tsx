import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "CSS",
    "HTML",
    "Git",
  ];

  return (
    <Container maxW="container.xl" py={20}>
      <Stack gap={8}>
        <Heading size="3xl" textAlign="center">
          About Me
        </Heading>

        <Box maxW="3xl" mx="auto">
          <Text fontSize="lg" lineHeight="tall" mb={8}>
            I'm a developer who loves creating beautiful and functional web
            applications. With a passion for clean code and user experience, I
            enjoy tackling complex problems and turning ideas into reality.
          </Text>

          <Text fontSize="lg" lineHeight="tall" mb={8}>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or learning something new in
            the ever-evolving world of web development.
          </Text>
        </Box>

        <Box>
          <Heading size="xl" mb={6} textAlign="center">
            Skills & Technologies
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} maxW="2xl" mx="auto">
            {skills.map((skill) => (
              <Badge
                key={skill}
                colorScheme="blue"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                textAlign="center"
                fontSize="md"
              >
                {skill}
              </Badge>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
