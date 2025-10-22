import { Text } from "@chakra-ui/react";

export interface Value {
  id: string;
  title: string;
  icon?: string;
  description: React.ReactNode;
}

export const values: Value[] = [
  {
    id: "interdisciplinary-thinking",
    title: "Interdisciplinary thinking",
    description: (
      <Text>
        I'm the opposite of a specialist; my value is as a connector. I've been
        a PM, engineer, and designer—partly out of selfish curiosity, but also
        because it helps me collaborate better. At Gamma I sit in both PM and
        design meetings, and push code when needed.
      </Text>
    ),
  },
  {
    id: "customer-focus",
    title: "Relentless customer focus",
    description: (
      <Text>
        I start every morning in our support forums. "Give the people what they
        want" started as my strategy pitch and became a running joke at
        work—mostly because I won't shut up about customer feedback in Slack.
        IMO solving problems people bring you is 10X simpler and more effective
        than cooking up strategy decks.
      </Text>
    ),
  },
  {
    id: "iterate-in-public",
    title: "Iterating in public",
    description: (
      <Text>
        You can't play the whole chess game in your head. I tend to ship the
        obvious pieces of a design first, then wait for data and user feedback
        to clarify and validate next steps. If you let people pull product out
        of you, you'll rarely ship anything unnecessary.
      </Text>
    ),
  },
  {
    id: "simplicity",
    title: "Less is usually more",
    description: (
      <Text>
        I'm a minimalist. I grew up on Dieter Rams and Jony Ives, where great
        design involves boiling away ("less, but better"). I tend to approach
        product like an optimization problem: how do we achieve maximum customer
        value with the simplest and most elegant interfaces, code, and business
        logic.
      </Text>
    ),
  },

  {
    id: "going-for-it",
    title: "Finding a way through",
    description: (
      <Text>
        I once helped plan dinner for 1,000 people on a NYC pier using one
        continuous table. Everything—including fire safety—was riding on a
        precise layout (my job). The artist only worked in crude ballpoint pen
        sketches. Shit. I fabricated to-scale wooden models for him to prototype
        with, taught myself SketchUp and Google Earth, and got it done. There's
        usually a way through.
      </Text>
    ),
  },

  {
    id: "fun",
    title: "Having fun at work",
    description: (
      <Text>
        I take product and design seriously, but at the end of the day it's just
        software. I like to have fun at work, and the things I'll remember when
        I'm old were the silly moments—like the time I spent with my coworkers
        in the hot tub in Tahoe, the jokes we told, and all of the team dinners
        and outings.
      </Text>
    ),
  },
];
