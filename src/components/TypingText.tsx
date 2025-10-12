import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const activities = [
  "Organizing Linear tickets into milestones",
  "Building code prototypes in React",
  "Talking to customers in Canny (our feedback platform)",
  "Building out research megafiles in FigJam",
  "Taking continuous discovery calls with power users",
  "Using Claude to help me write SQL",
  "Building metabase dashboards to see if we're on the right track",
  "Shipping polish PRs to Gamma's repo",
  "Making low-fidelity wireframes in FigJam",
  "Drafting success criteria for our new beta feature",
  "Building opportunity solution trees in FigJam",
  "Putting together a research deck to share in show and tell",
  "Sitting in on sales calls",
  "Staffing the Gamma booth at dreamforce",
  "Turning on feature flags in LaunchDarkly",
  "Having desk conversations with my engineers",
  "Reporting bugs in our #bugs channel",
  "Talking with our power users in our Gambassador slack",
  "Building simple RICE models",
  "Running Yarn to fix my local environment",
  "Managing my API keys in Claude",
  "Writing posts for our changelog",
  "Working on a first draft of product principles (wow they're hard)",
  "Pitching new features to the team",
  "Analyzing written feedback for our AI generator",
  "Defining categories for a classifier to classify prompts",
  "Designing upsells",
  "Hanging out with the design team",
  "Going to design team standup",
  "Going to product team standup",
  "Vibe coding a drag interaction for a pages panel",
  "Inspecting font metadata to write a categorizer function",
  "Futzing with REM values",
  "Making brand imagery in MidJourney using our refs",
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
    <Text fontSize="md" fontFamily="mono" color="text.secondary">
      currently: {displayText}
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
