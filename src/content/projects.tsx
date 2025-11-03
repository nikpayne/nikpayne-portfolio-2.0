import {
  Button,
  chakra,
  HStack,
  Image,
  Link,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import appStore from "../assets/app-store.svg";
import campingChecklistPdf from "../assets/pdfs/Camping-Checklist-Pro-2025.pdf";
import androidAutoUpdatedImg from "../assets/projects/android-auto-upscaled.png";
import campingChecklistImgV3 from "../assets/projects/camping-checklist-v3.png";
import gammaImg from "../assets/projects/gamma.png";
import lyft95ImgV2 from "../assets/projects/lyft-95-borderless.png";
import spotheroWebImg from "../assets/projects/spothero-web.jpg";
import touchlessParkingImg from "../assets/projects/touchless-parking.jpg";
import AppStoreRating from "../components/AppStoreRating";
import AppStoreUpdatedDate from "../components/AppStoreUpdatedDate";

export interface KeyResult {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface GammaProject {
  title: string;
  challenge?: string;
  description: string;
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
    title: "AI generator 2.0",
    description:
      "Unified our prompt and text-based AI generation into a single interface optimized for simplicity and discoverability. Added card-by-card mode for more control and iteration",
  },
  {
    title: "Persisted drafts & doc history",
    description:
      "First implementation of version control and draft saving—foundational for enterprise workflows",
  },
  {
    title: "Card count upsell",
    description:
      "#1 individual feature for monetization—strategically placed upgrade prompts at high-intent moments",
  },
  {
    title: "Engagement analytics",
    description:
      "Designed an engagement analytics dashboard to help users understand engagement with their content. Aided in pro plan upsells.",
  },
  {
    title: "Account & workspace settings V1",
    description:
      "Designed core settings infrastructure: user roles, invitations, account deletion, and workspace management",
  },
  {
    title: "Custom themes editor",
    description:
      "Built theme customization system with live preview, visual settings, and theme import",
    challenge:
      "Providing visibility into system status while decomposing base styles",
  },
  {
    title: "Review screen & page setup",
    description:
      "Designed portable page setup allowing content to fluidly move between presentation, document, and web formats",
  },
  {
    title: "Card headers and footers",
    description:
      "Added persistent page elements for logos, page numbers, and branding across presentations",
    challenge: "Data modeling for inheritance and per-page overrides",
  },
  {
    title: "Custom font upload",
    description:
      "Built font management system allowing teams to upload and manage brand fonts",
    challenge:
      "Designed scalable data model (FontFamily + FontFiles + Weights) that allows editing after upload",
  },
  {
    title: "Custom workspace templates",
    description:
      "Created template system to streamline team workflows and enforce brand consistency",
  },
  {
    title: "Card styling menu",
    description:
      "Centralized all visual design controls for individual cards into a unified interface",
  },
];

const StandardCTA = ({
  href,
  label = "Read case study",
}: {
  href: string;
  label?: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    w={{ base: "full", lg: "auto" }}
  >
    <Button size="lg" w={{ base: "full", lg: "auto" }}>
      {label}
    </Button>
  </Link>
);

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
      { value: "11th", label: "Employee" },
      { value: "$50M", label: "ARR" },
      { value: "50M", label: "Users" },
    ],
    description: (
      <Stack gap={4}>
        <Text>
          I currently work at Gamma. Being early means I've gotten to work on a
          ton of the product—designing and shipping 0→1 features across AI, core
          product, onboarding, monetization, and B2B. I've also worn multiple
          hats: research, design, product strategy, and light eng work. I've
          built the role I want.
        </Text>
        <Text>
          The exciting and scary part has been making architectural decisions
          that will shape the product for years. UIs are malleable and easy to
          fix. Data models are harder, but there are migration paths. Customer
          content though (decks, prompts, permissions) is damn near forever.
        </Text>
        <Text>
          Gamma lets you write content like a document and present it like a
          deck. Think: "Notion on crack" (actual customer quote) but for
          presentations, and increasingly other media.
        </Text>
      </Stack>
    ),
    cta: <StandardCTA href="https://gamma.app" label="Try Gamma" />,
    // extraContent: (
    //   <Table.Root size="sm" variant="line" mt={6} bg="none">
    //     <Table.Header>
    //       <Table.Row bg="none">
    //         <Table.ColumnHeader width="30%">Project</Table.ColumnHeader>
    //         <Table.ColumnHeader>Description</Table.ColumnHeader>
    //       </Table.Row>
    //     </Table.Header>
    //     <Table.Body>
    //       {gammaProjects.map((project, index) => (
    //         <Table.Row key={index} bg="none">
    //           <Table.Cell fontWeight="semibold" bg="none">
    //             {project.title}
    //           </Table.Cell>
    //           <Table.Cell bg="none">
    //             <Stack gap={1}>
    //               <Text>{project.description}</Text>
    //               {project.challenge && (
    //                 <Text fontSize="sm" color="text.secondary">
    //                   Challenge: {project.challenge}
    //                 </Text>
    //               )}
    //             </Stack>
    //           </Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>
    //   </Table.Root>
    // ),
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
    cta: <StandardCTA href={campingChecklistPdf} />,
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
      <Button size="lg" disabled w={{ base: "full", lg: "auto" }}>
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
        value: "1st",
        label:
          "Off-street parking app for connected car in the world (to my knowledge)",
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
      <StandardCTA href="https://www.behance.net/gallery/102456283/SpotHero-for-Android-Auto" />
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
        label: "Design leadership (iOS, Android, Web, Marketing & PR)",
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
      <StandardCTA href="https://www.behance.net/gallery/96814497/SpotHero-Touchless-Parking" />
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
      <StandardCTA href="https://www.behance.net/gallery/48142457/Lyft-95-The-Ridesharing-of-Yesterday" />
    ),
  },
];

// Helper function to get featured projects (you can customize this logic)
export const getFeaturedProjects = () => {
  return projects.slice(0, 3);
};
