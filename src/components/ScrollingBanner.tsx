import { Box } from "@chakra-ui/react";

const messages = [
  //   "I hope you have a lovely day",
  //   "Saying hi from San Francisco",
  //   "Thanks for stopping by",
  //   "You're doing great",
  //   "Design is my passion",
  //   "Coffee is life",
  //   "Let's build something cool together",
  //   "Product > everything",
  //   "Keep shipping",
  //   "Customer feedback is gold",
  "Thank you for visiting my site",
  "Than you for stopping by",
];

export default function ScrollingBanner() {
  // Create the message string with dots
  const messageString = messages.join(" · ") + " · ";

  return (
    <Box
      overflow="hidden"
      bg={{ base: "gray.900", _dark: "gray.50" }}
      color={{ base: "white", _dark: "gray.900" }}
      py={2}
      borderTop="1px solid"
      borderColor={{ base: "gray.700", _dark: "gray.200" }}
    >
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scrolling-text {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
      <Box
        className="scrolling-text"
        display="flex"
        whiteSpace="nowrap"
        fontSize="sm"
        fontWeight="medium"
      >
        <Box as="span" px={4}>
          {messageString}
          {messageString}
        </Box>
      </Box>
    </Box>
  );
}
