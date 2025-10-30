import { Box, HStack, Stack, Spacer, Text, Heading } from "@chakra-ui/react";

interface Role {
  title: string;
  period: string;
}

interface Company {
  id: string;
  name: string;
  roles: Role[];
  totalPeriod: string;
}

// FOO
const companies: Company[] = [
  {
    id: "gamma",
    name: "Gamma",
    roles: [{ title: "Product Designer", period: "Feb 2022 - Present" }],
    totalPeriod: "2022 - Present",
  },
  {
    id: "spothero",
    name: "SpotHero",
    roles: [
      { title: "Senior Product Designer", period: "Jan 2021 - Feb 2022" },
      { title: "Product Designer", period: "Jun 2018 - Jan 2021" },
    ],
    totalPeriod: "2018 - 2022",
  },
  {
    id: "arity",
    name: "Arity, Allstate",
    roles: [{ title: "Product Designer", period: "Jan 2017 - May 2018" }],
    totalPeriod: "2017 - 2018",
  },
  {
    id: "perkins-will",
    name: "Perkins + Will",
    roles: [{ title: "UX/UI Designer", period: "Jun 2016 - Oct 2016" }],
    totalPeriod: "2016",
  },
];

export default function ExperienceTimeline() {
  return (
    <Box overflowX="auto" w="100%">
      <Stack align="start" gap={0} minW="max-content" w="100%">
        {companies.map((company, index) => (
          <HStack key={company.id} align="start" gap={0} w="100%">
            {/* Company Content */}

            <HStack w="100%" align="start">
              <Stack gridGap="1">
                <Heading fontSize="md" fontWeight="semibold">
                  {company.name}
                </Heading>
                {company.roles.map((role, roleIndex) => (
                  <Text key={roleIndex} fontSize="sm" color="fg.muted">
                    {role.title}
                  </Text>
                ))}
              </Stack>
              <Spacer />
              <Text fontSize="sm" fontWeight="bold" color="fg.muted">
                {company.totalPeriod}
              </Text>
            </HStack>

            {/* Timeline dot and line */}
            {/* {index < companies.length - 1 && (
              <HStack gap={0} align="center" px={4}>
                <Box w={2} h={2} borderRadius="full" bg="border" />
                <Box h="2px" w="32px" bg="border" />
              </HStack>
            )} */}
          </HStack>
        ))}
      </Stack>
    </Box>
  );
}
