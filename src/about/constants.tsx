import { Text } from "@chakra-ui/react";

export interface Value {
  id: string;
  title: string;
  icon?: string;
  description: React.ReactNode;
}

export const values: Value[] = [
  {
    id: "quality",
    title: "Quality",
    description: (
      <Text>
        Whether it's an app or a pair of jeans, I value quality. We deserve it,
        and life's too short for bad product.
      </Text>
    ),
  },
  {
    id: "kindness",
    title: "Kindness",
    description: (
      <Text>
        Kindness is important in every context: to coworkers, to customers (in
        the product), and to yourself.
      </Text>
    ),
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: (
      <Text>
        I value teams that talk. Design is all about information exchange, so
        collaboration is critical.
      </Text>
    ),
  },
  {
    id: "focus",
    title: "Focus",
    description: (
      <Text>
        In my experience, focused teams generally create higher quality product
        [faster], and have more fun.
      </Text>
    ),
  },
  {
    id: "going-for-it",
    title: "Going for It",
    description: (
      <Text>
        My favorite work has always involved diving into scary problems I have
        no idea how to solve.
      </Text>
    ),
  },
  {
    id: "fun",
    title: "Fun",
    description: (
      <Text>
        It's critical to happiness and creativity. Playfulness and humor make
        work (and life) way more fun.
      </Text>
    ),
  },
];
