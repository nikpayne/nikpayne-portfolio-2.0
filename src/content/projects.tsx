import {
  Text,
  Image,
  HStack,
  Link,
  Stack,
  Button,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionRoot,
  chakra,
} from "@chakra-ui/react";
import AppStoreRating from "../components/AppStoreRating";
import AppStoreUpdatedDate from "../components/AppStoreUpdatedDate";
import androidAutoImg from "../assets/projects/android-auto.jpg";
import touchlessParkingImg from "../assets/projects/touchless-parking.jpg";
import spotheroWebImg from "../assets/projects/spothero-web.jpg";
import lyft95Img from "../assets/projects/lyft-95.png";
import lyft95ImgV2 from "../assets/projects/lyft-95-borderless.png";
import gammaImg from "../assets/projects/gamma.png";
import appStore from "../assets/app-store.svg";
import campingChecklistImgV2 from "../assets/projects/camping-checklist-v1.png";
import campingChecklistPdf from "../assets/pdfs/Camping-Checklist-Pro-2025.pdf";
import campingChecklistImgV3 from "../assets/projects/camping-checklist-v3.png";
import androidAutoUpdatedImg from "../assets/projects/android-auto-upscaled.png";

export interface KeyResult {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface GammaProject {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  keyResults?: KeyResult[];
  description: React.ReactNode;
  cta?: React.ReactNode;
  extraContent?: React.ReactNode;
}

export const gammaProjects: GammaProject[] = [
  {
    title: "Project 1",
    content: <Text>Description of project 1 at Gamma.</Text>,
  },
  {
    title: "Project 2",
    content: <Text>Description of project 2 at Gamma.</Text>,
  },
  {
    title: "Project 3",
    content: <Text>Description of project 3 at Gamma.</Text>,
  },
];

export const projects: Project[] = [
  {
    id: "gamma",
    title: "Gamma",
    duration: "2022 - present",
    imageUrl: gammaImg,
    imageAlt:
      "Gamma presentation platform interface showing doc-to-deck conversion",
    technologies: [
      "Product design",
      "Research",
      "Product management",
      "Strategy",
      "AI",
    ],
    keyResults: [
      { value: "12th", label: "Employee (designer #3, jokingly PM #0)" },
      { value: "$50M", label: "ARR (from $0, pre-PMF)" },
      { value: "50M", label: "Users" },
    ],
    description: (
      <Stack gap={4}>
        <Text>
          I currently work at Gamma. Being early means I've gotten to work on an
          ungodly amount of the product—AI, core product, onboarding,
          monetization, B2B—across multiple disciplines: research, design,
          product strategy, and even eng work. I've built the role I want.
        </Text>
        <Text>
          I've also surely made some mistakes that may haunt future teams as we
          scale 😅. The future is yet to reveal itself.
        </Text>
        <Text>
          Gamma lets you write content like a document and present it like a
          deck. Think: "Notion on crack" (actual customer quote) but for
          presentations, and increasingly other media.
        </Text>
      </Stack>
    ),
    cta: (
      <Link href="https://gamma.app" target="_blank" rel="noreferrer">
        <Button>Try Gamma</Button>
      </Link>
    ),
    extraContent: (
      <AccordionRoot collapsible>
        {gammaProjects.map((project, index) => (
          <AccordionItem key={index} value={`gamma-${index}`}>
            <AccordionItemTrigger
              cursor="pointer"
              pb={4}
              justifyContent="space-between"
            >
              {project.title}
            </AccordionItemTrigger>
            <AccordionItemContent>{project.content}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    ),
  },
  {
    id: "camping-checklist-pro",
    title: "Camping Checklist Pro",
    duration: "2021 - present",
    imageUrl: campingChecklistImgV3,
    imageAlt:
      "Camping Checklist Pro mobile app interface showing outdoor gear organization",
    technologies: ["Design", "Development", "iOS", "Swift UI", "Realm DB"],
    keyResults: [
      { value: "200+", label: "Hours of tutorials, design and development" },
      { value: "10,000+", label: "Downloads in the App Store" },
      {
        value: (
          <AppStoreRating
            id="1564492728"
            showCount={false}
            showUpdated={false}
          />
        ),
        label: (
          <>
            App store rating, as of <AppStoreUpdatedDate id="1564492728" />
          </>
        ),
      },
    ],
    description: (
      <Stack gap={4} align="start">
        <Text>
          I love camping and backpacking. In fall of 2020 I went looking for a
          good, mobile-optimized camping checklist. The options in the App Store
          were disappointing and I figured I could make something better.
        </Text>
        <Text>
          It took 7 months of free time—but after many late nights interviewing
          friends, designing, prototyping, and watching SwifttUI + Realm DB
          tutorials—I shipped an app. "Camping Checklist - Pro" has been
          downloaded by folks all over the world. Primarily the US, Canada, UK,
          Australia and Germany.
        </Text>
        <HStack mt="2" gap={3} alignItems="center" flexWrap="wrap">
          <Link
            href="https://apps.apple.com/us/app/camping-checklist-pro/id1564492728"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={appStore} alt="App Store" h="11" />
          </Link>
          <Stack gap={-2}>
            <Text>
              <chakra.span style={{ color: "#ffa41c" }}>★★★★★</chakra.span>{" "}
              <AppStoreRating
                id="1564492728"
                showCount={true}
                showUpdated={false}
              />
            </Text>
            <Text fontSize="sm">
              Updated <AppStoreUpdatedDate id="1564492728" />
            </Text>
          </Stack>
        </HStack>
      </Stack>
    ),
    cta: (
      <Link href={campingChecklistPdf} target="_blank" rel="noreferrer">
        <Button size="lg">Read case study</Button>
      </Link>
    ),
  },
  {
    id: "spothero-web-renovation",
    title: "SpotHero Web Renovation",
    duration: "2019",
    imageUrl: spotheroWebImg,
    imageAlt:
      "SpotHero website redesign showing before and after interface improvements",
    technologies: [
      "Conversion rate optimization",
      "UX research",
      "Experimentation",
      "A/B testing",
    ],
    keyResults: [
      { value: "25%", label: "Increase in conversion" },
      { value: "67%", label: "YOY growth in mobile traffic" },
      { value: "34%", label: "YOY growth on desktop" },
    ],
    description: (
      <Stack gap={4} align="start">
        <Text>
          I led design on a project to overhaul SpotHero's website and address
          low conversion rates, especially on mobile.
        </Text>
        <Text>
          Working with a small team and one front-end engineer, we improved
          conversion by resolving usability issues, addressing user concerns,
          and running A/B tests. It also led to the SpotHero Parking guarantee,
          which I co-wrote with legal.
        </Text>
      </Stack>
    ),
    cta: (
      <Button size="lg" disabled>
        Case study on request
      </Button>
    ),
  },
  {
    id: "spothero-android-auto",
    title: "SpotHero for Android Auto",
    duration: "2020",
    imageUrl: androidAutoUpdatedImg,
    imageAlt:
      "SpotHero Android Auto interface showing parking reservation in connected car",
    technologies: ["Android", "Android Auto", "Connected car", "Innovation"],
    keyResults: [
      {
        value: "World's 1st",
        label: "Off-street parking app for connected car (to my knowledge)",
      },
      { value: "1,000+", label: "Beta signups" },
    ],
    description: (
      <Stack gap={4} align="start">
        <Text>
          SpotHero partnered with Google to create one of the world's first
          connected-car parking apps. I led design.
        </Text>
        <Text>
          Our V1 beta streamlined navigation and redemption for SpotHero users,
          while V2 enabled finding and paying for parking entirely in-car. And
          although success is hard to quantify for an emerging platform, the
          project drew positive press for SpotHero and represents a meaningful
          step toward safer, truly hands-free parking experiences.
        </Text>
      </Stack>
    ),
    cta: (
      <Link
        href="https://www.behance.net/gallery/102456283/SpotHero-for-Android-Auto"
        target="_blank"
        rel="noreferrer"
      >
        <Button size="lg">Read case study</Button>
      </Link>
    ),
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
    keyResults: [
      {
        value: "120",
        label: "Users surveyed on COVID-19 safety and parking behavior",
      },
      {
        value: "5-team",
        label:
          "Design leadership exercise (coordinating iOS, Android, Web, Marketing & PR)",
      },

      {
        value: "450%",
        label: "Increase in in-app filter use among paying customers",
      },
    ],
    description: (
      <Stack gap={4}>
        <Text>
          When the pandemic hit, I led SpotHero's research and design efforts
          around COVID-19 safety. My research informed company-wide decisions,
          and led to the launch of new "touchless parking" classification.
        </Text>
        <Text>
          I designed and launched in-app filters across android, ios, mobile
          web, and desktop—and helped craft a blog post and email campaign. I
          also project-managed the rollout across five product and engineering
          teams.
        </Text>
      </Stack>
    ),
    cta: (
      <Link
        href="https://www.behance.net/gallery/96814497/SpotHero-Touchless-Parking"
        target="_blank"
        rel="noreferrer"
      >
        <Button size="lg">Read case study</Button>
      </Link>
    ),
  },

  {
    id: "lyft-windows-95",
    title: "Lyft for Windows 95",
    duration: "1994",
    imageUrl: lyft95ImgV2,
    imageAlt:
      "Lyft Windows 95 application interface showing retro ride-sharing software",
    technologies: ["Windows 95", "C++", "Desktop", "Trolling"],
    keyResults: [
      { value: "100%", label: "Totally legit project" },
      { value: "Steve Ballmer", label: "Approved" },
    ],
    description: (
      <Stack gap={4}>
        <Text>
          One morning in the fall of 1994, I fired up my modem and logged into
          AOL to find an email from the CEO of Lyft Systems™.
        </Text>
        <Text>
          He sounded worried. His team had signed a contract to build the
          world's first "ride-sharing" app for the yet-unreleased Windows 95,
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
    cta: (
      <Link
        href="https://www.behance.net/gallery/48142457/Lyft-95-The-Ridesharing-of-Yesterday"
        target="_blank"
        rel="noreferrer"
      >
        <Button size="lg">Read "case study"</Button>
      </Link>
    ),
  },
];

// Helper function to get featured projects (you can customize this logic)
export const getFeaturedProjects = () => {
  return projects.slice(0, 3);
};
