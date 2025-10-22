import { Text } from "@chakra-ui/react";

export interface Value {
  id: string;
  title: string;
  icon?: string;
  description: React.ReactNode;
}

export const values: Value[] = [
  {
    id: "customer-focus",
    title: "I am problem, and customer-obsessed",
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
    id: "interdisciplinary-thinking",
    title: "I work across disciplines",
    description: (
      <Text>
        I'm the opposite of a specialist; my value is as a connector. I've been
        a PM, engineer, and designer—partly out of selfish curiosity, but also
        because I belive it helps me collaborate more effectively across
        disciplines, and think about product more holistically. At Gamma I sit
        in both PM and design meetings, and push code when needed.
      </Text>
    ),
  },
  {
    id: "iterate-in-public",
    title: "I like building in public",
    description: (
      <Text>
        Product is hard if you try to play the chess game in your head. I tend
        to ship the obvious pieces of a design first, then wait for data and
        user feedback to clarify and validate next steps. If you let people pull
        product out of you, you'll rarely ship anything unnecessary.
      </Text>
    ),
  },
  {
    id: "simplicity",
    title: "I believe less is usually more",
    description: (
      <Text>
        I'm a minimalist. I grew up on Dieter Rams and Jony Ives, where great
        design involves boiling away ("less, but better"). I tend to approach
        product like an optimization problem: how do we achieve maximum customer
        value with the simplest and most elegant interfaces, code, and business
        logic. You can almost always layer on complexity as needed, but working
        in reverse is usually much harder.
      </Text>
    ),
  },

  {
    id: "going-for-it",
    title: "I will always do what it takes",
    description: (
      <Text>
        {/* I once helped plan dinner for 1,000 people on a NYC pier using one
        continuous table. Everything—including fire safety—was riding on a
        precise layout (my job). The artist only worked in crude ballpoint pen
        sketches. Shit. I fabricated to-scale wooden models for him to prototype
        with (using 2x4's and my dad's chopsaw), scraped site images using
        Google Earch, and taught myself SketchUp/CAD to get it all done. I'll
        find a way. */}
        I once helped plan dinner for 1,000 people on a NYC pier using one
        continuous table. Everything—including fire safety—was riding on a
        precise layout (my job). The artist only worked in crude ballpoint pen
        sketches. Shit. I fabricated wooden models from 2x4s using my dad's
        chopsaw, scraped hi-res site images from Google Earth and taught myself
        SketchUp to get it done. I'll find a way.
      </Text>
    ),
  },

  {
    id: "fun",
    title: "I like having fun at work",
    description: (
      <Text>
        I take product and design seriously, but at the end of the day it's just
        software. The things I'll remember when I'm old were the silly
        moments—like the time I spent with my coworkers in the hot tub in Tahoe,
        the jokes we told, and all of the team dinners and outings. I'm picky
        about where I work because I see work as my second home.
      </Text>
    ),
  },
];
