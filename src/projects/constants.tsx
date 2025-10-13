import { Text, Image, Link, Stack, Button } from "@chakra-ui/react";
import campingChecklistImg from "../assets/projects/camping-checklist.png";
import androidAutoImg from "../assets/projects/android-auto.jpg";
import touchlessParkingImg from "../assets/projects/touchless-parking.jpg";
import spotheroWebImg from "../assets/projects/spothero-web.jpg";
import lyft95Img from "../assets/projects/lyft-95.png";
import gammaImg from "../assets/projects/gamma.png";
import appStore from "../assets/app-store.svg";

export interface Project {
  id: string;
  title: string;
  duration: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  metrics?: string[];
  description: React.ReactNode;
  ctaText?: string;
  ctaUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gamma",
    title: "Gamma",
    duration: "2022 - present",
    imageUrl: gammaImg,
    imageAlt:
      "Gamma presentation platform interface showing doc-to-deck conversion",
    technologies: ["", "TypeScript", "Node.js", "AI/ML"],
    description: (
      <>
        <Text mb={4}>
          I'm currently working with a small, talented team on the future of
          slide decks. Gamma lets you write content like a doc, and present it
          like a deck. Think: Pitch meets Notion.
        </Text>
        <Text>Free yourself from slides, and give it a try 😊.</Text>
      </>
    ),
    ctaText: "Try Gamma",
    ctaUrl: "https://gamma.app",
  },
  {
    id: "camping-checklist-pro",
    title: "Camping Checklist Pro",
    duration: "2021 - present",
    imageUrl: campingChecklistImg,
    imageAlt:
      "Camping Checklist Pro mobile app interface showing outdoor gear organization",
    technologies: ["iOS", "Swift UI", "Realm DB", "ASO"],
    metrics: [
      "5,000+ downloads",
      "4.87★ rating (71 reviews)",
      "Available in US, Canada, UK, Australia, Germany",
    ],
    description: (
      <Stack gap={4} align="start">
        <Text>
          I love camping and backpacking. In fall of 2020 I went looking for a
          good, mobile-optimized camping checklist. The options online and in
          the App Store were disappointing and I figured I could make something
          better.
        </Text>
        <Text>
          200+ hours later, I had learned Switf, and shipped an app. "Camping
          Checklist - Pro" has had{" "}
          <Text as="span" fontWeight="bold">
            10,000+ downloads
          </Text>{" "}
          around the world. Primarily the US, Canada, UK, Australia and Germany.
        </Text>
        <Link
          href="https://apps.apple.com/us/app/camping-checklist-pro/id1564492728"
          target="_blank"
          rel="noreferrer"
          mt={2}
        >
          <Image src={appStore} alt="App Store" />
        </Link>
      </Stack>
    ),
    ctaText: "Download on the App Store",
  },
  {
    id: "spothero-android-auto",
    title: "SpotHero for Android Auto",
    duration: "2020",
    imageUrl: androidAutoImg,
    imageAlt:
      "SpotHero Android Auto interface showing parking reservation in connected car",
    technologies: ["Android", "Android Auto", "Connected car", "0 → 1"],
    metrics: [
      "1,000+ beta signups",
      "World's first parking app for connected car",
    ],
    description: (
      <Stack gap={4}>
        <Text>
          SpotHero partnered with Google to create one of the world’s first
          connected-car parking apps. I led design.
        </Text>
        <Text>
          Our V1 beta streamlined navigation and redemption for SpotHero users,
          while V2 enabled finding and paying for parking entirely in-car.
        </Text>
        <Text>
          Though success is hard to quantify for an emerging platform, the
          launch drew over 1,000 beta signups and positive press for SpotHero. A
          meaningful step toward safer, truly hands-free parking experiences.
        </Text>
        {/* <Text mb={4}>
          I owned design on SpotHero's partner project with Google to build{" "}
          <Text as="span" fontWeight="bold">
            one of the world's first parking apps for connected car
          </Text>
          .
        </Text>
        <Text mb={4}>
          Our V1 beta simplified navigation and redemption for SpotHero users,
          and our V2 release added the ability to find and pay for parking
          entirely in-car.
        </Text>
        <Text>
          While adoption is still early and limited, the project yielded{" "}
          <Text as="span" fontWeight="bold">
            1,000+ beta signups
          </Text>{" "}
          and good press for SpotHero. It's a big step towards safer, and truly
          hands-free parking experiences.
        </Text> */}
      </Stack>
    ),
    ctaText: "Read Case Study",
  },
  {
    id: "spothero-touchless-parking",
    title: "SpotHero Touchless Parking",
    duration: "2020",
    imageUrl: touchlessParkingImg,
    imageAlt:
      "SpotHero touchless parking interface showing contactless parking solutions",
    technologies: [
      "Mobile App",
      "Product Strategy",
      "COVID Response",
      "Team Leadership",
    ],
    metrics: ["5 cross-functional teams", "Company-wide research initiative"],
    description: (
      <Stack gap={4}>
        <Text>
          When the pandemic hit, I led SpotHero’s research and design efforts
          around COVID-19 safety.
        </Text>
        <Text>
          My research informed company-wide decisions, and I designed and
          launched a new “touchless parking” redemption category and in-app
          quick filters, supported by a blog post and email campaign. I also
          project-managed the rollout across five product and engineering teams.
        </Text>
      </Stack>
    ),
    ctaText: "Read Case Study",
  },
  {
    id: "spothero-web-renovation",
    title: "SpotHero Web Renovation",
    duration: "2019",
    imageUrl: spotheroWebImg,
    imageAlt:
      "SpotHero website redesign showing before and after interface improvements",
    technologies: ["React", "Web Design", "UX Research", "A/B Testing"],
    metrics: [
      "25% increase in conversion",
      "67% YOY growth in mobile traffic",
      "34% growth on desktop",
    ],
    description: (
      <Stack gap={4} align="start">
        <Text>
          I led design on a project to overhaul SpotHero’s website and address
          low conversion rates.
        </Text>
        <Text>
          Working with a small team and one front-end engineer, we improved
          conversion by 25% across mobile web and desktop by resolving usability
          issues, adressing user questions, and A/B testing.
        </Text>
        <Text>
          Our work also contributed to 67% year-over-year growth in mobile web
          traffic and 34% on desktop.
        </Text>
        <Button disabled={true}>Case Study by Request</Button>
      </Stack>
    ),
    ctaText: "Case Study by Request",
  },
  {
    id: "lyft-windows-95",
    title: "Lyft for Windows 95",
    duration: "1994",
    imageUrl: lyft95Img,
    imageAlt:
      "Lyft Windows 95 application interface showing retro ride-sharing software",
    technologies: ["Windows 95", "C++", "Desktop", "Trolling"],
    metrics: [
      "World's first ride-sharing software",
      "Steve Ballmer collaboration",
    ],
    description: (
      <Stack gap={4}>
        <Text>
          One morning in the fall of 1994, I fired up my modem and logged into
          AOL to find an email from the CEO of Lyft Systems™.
        </Text>
        <Text>
          He sounded worried. His team had signed a contract to build the
          world’s first “ride-sharing” app for the yet-unreleased Windows 95,
          but progress had stalled and Steve Ballmer was getting impatient.
        </Text>
        <Text>
          I stepped in as design lead, the team shipped on time, and the Windows
          95 launch was a{" "}
          <Link
            fontWeight="bold"
            textDecoration="underline"
            href="https://www.youtube.com/watch?v=lAkuJXGldrM"
            target="_blank"
            rel="noreferrer"
          >
            smash success
          </Link>
          .
        </Text>
      </Stack>
    ),
    ctaText: 'Read "Case Study"',
  },
];

// Helper function to get featured projects (you can customize this logic)
export const getFeaturedProjects = () => {
  return projects.slice(0, 3);
};
