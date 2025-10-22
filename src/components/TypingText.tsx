import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const activities = [
  "organizing Linear tickets into milestones",
  "building code prototypes in React",
  "talking to customers in Canny (our feedback platform)",
  "building out research megafiles in FigJam",
  "taking continuous discovery calls with power users",
  "using Claude to help me write SQL",
  "building metabase dashboards",
  "shipping polish PRs to Gamma's repo",
  "making low-fidelity wireframes in FigJam",
  "drafting success criteria for our new beta feature",
  "building opportunity solution trees in FigJam",
  "putting together a research deck to share in show and tell",
  "sitting in on sales calls with large companies",
  "staffing the Gamma booth at dreamforce",
  "turning on feature flags in LaunchDarkly",
  "having desk conversations with my engineers",
  "reporting bugs in our #bugs channel",
  "talking with our power users in our Gambassador slack",
  "building simple RICE models",
  "running Yarn to fix my local environment",
  "managing my API keys in Claude",
  "writing posts for our changelog",
  "working on a first draft of product principles (wow they're hard)",
  "pitching new features to the team",
  "analyzing written feedback for our AI generator",
  "defining categories for a classifier to classify prompts",
  "designing upsells",
  "hanging out with the design team",
  "going to design team standup",
  "going to product team standup",
  "vibe coding a drag interaction for a pages panel",
  "inspecting font metadata to write a categorizer function",
  "futzing with REM values",
  "making brand imagery in MidJourney using our refs",
  "working the Gamma booth at Dreamforce",
  "joining Akiva on a webinar about workspace templates",
  "at Disneyland with the rest of the team",
  "on our annual Tahoe retreat",
];

export default function TypingText() {
  const TYPING_SPEED = 15;
  const DELETING_SPEED = 10;
  const PAUSE_TIME = 1000;
  const [displayText, setDisplayText] = useState("");
  const [activityIndex, setActivityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const currentActivity = activities[activityIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentActivity.length) {
          setDisplayText(currentActivity.substring(0, displayText.length + 1));
          setTypingSpeed(TYPING_SPEED);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentActivity.substring(0, displayText.length - 1));
          setTypingSpeed(DELETING_SPEED);
        } else {
          // Finished deleting, move to next activity
          setIsDeleting(false);
          setActivityIndex((prev) => (prev + 1) % activities.length);
          setTypingSpeed(PAUSE_TIME); // Pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, activityIndex, isDeleting, typingSpeed]);

  return (
    <Text fontSize="md" fontFamily="mono">
      Currently: {displayText}
      <Text
        as="span"
        opacity={displayText.length > 0 || !isDeleting ? 1 : 0}
        css={{
          animation: "blink 1s step-end infinite",
          "@keyframes blink": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        }}
      >
        |
      </Text>
    </Text>
  );
}
