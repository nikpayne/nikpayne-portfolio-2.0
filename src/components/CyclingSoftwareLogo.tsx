import { Box, Image, Tooltip, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import figmaLogo from "../assets/software-logos/Figma-logo.svg";
import cannyLogo from "../assets/software-logos/canny-logo.png";
import chatgptLogo from "../assets/software-logos/chatgpt-logo.svg";
import claudeLogo from "../assets/software-logos/claude-logo.png";
import cursorLogo from "../assets/software-logos/cursor-logo.jpeg";
import githubLogo from "../assets/software-logos/github-logo.png";
import linearLogo from "../assets/software-logos/linear-logo.png";
import metabaseLogo from "../assets/software-logos/metabase-logo.svg";
import slackLogo from "../assets/software-logos/slack-logo.png";
import zoomLogo from "../assets/software-logos/zoom-logo.webp";
import launchdarklyLogo from "../assets/software-logos/launch-darkly-logo.webp";

const logos = [
  { src: figmaLogo, alt: "Figma" },
  { src: slackLogo, alt: "Slack" },
  { src: cannyLogo, alt: "Canny", needsInvert: true },
  { src: linearLogo, alt: "Linear" },
  { src: githubLogo, alt: "GitHub", needsInvert: true },
  { src: claudeLogo, alt: "Claude" },
  { src: chatgptLogo, alt: "ChatGPT", needsInvert: true },
  { src: cursorLogo, alt: "Cursor", needsInvert: true },
  { src: zoomLogo, alt: "Zoom" },
  { src: launchdarklyLogo, alt: "LaunchDarkly", needsInvert: true },
  { src: metabaseLogo, alt: "Metabase" },
];

export default function CyclingSoftwareLogo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="absolute"
      bottom="39.5%" // Adjust this to position on the computer screen
      left="88%"
      transform="translateX(-50%) rotate(12deg)"
      width="4.5%" // Adjust size relative to parent image
      aspectRatio="1"
      opacity={0.9}
      transition="opacity 0.5s ease-in-out"
    >
      <Tooltip.Root positioning={{ placement: "top" }}>
        <Tooltip.Trigger asChild cursor="help">
          <Image
            src={logos[currentIndex].src}
            alt={logos[currentIndex].alt}
            width="100%"
            height="100%"
            objectFit="contain"
            key={currentIndex}
            animation="fadeIn 0.5s ease-in-out"
            filter={{
              _light: "none",
              _dark: logos[currentIndex].needsInvert ? "invert(1)" : "none",
            }}
          />
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Text filter="invert(1)">{logos[currentIndex].alt}</Text>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </Box>
  );
}
