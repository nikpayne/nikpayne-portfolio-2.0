import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function Piracy() {
  return (
    <Box>
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="4xl">
          <VStack
            gap={8}
            align="stretch"
            fontFamily="PP Neue Montreal Mono !important"
          >
            {/* Header */}
            <Stack gap={2} textAlign="center">
              <Heading
                size={{ base: "4xl", md: "6xl" }}
                mb={{ base: 4, md: 8 }}
              >
                Piracy Policy
              </Heading>
            </Stack>

            <Stack>
              <Heading size="2xl">NOTICE OF GENERAL STANCE</Heading>
              <Text>
                BE IT KNOWN that Nik Payne Incorporated maintains a generally
                pro-piracy position.
              </Text>
              <List.Root ps={6} gap={2}>
                <List.Item>
                  You wouldn't download a car, but if you could, you absolutely
                  should.
                </List.Item>
                <List.Item>All good design involves stealing.</List.Item>
                <List.Item>
                  Information wants to be free, including my case studies.
                </List.Item>
                <List.Item>
                  If you're going pirating, please invite me.
                </List.Item>
              </List.Root>
            </Stack>

            {/* Section 1 */}
            <Stack gap={4}>
              <Heading size="2xl">1. DEFINITIONS</Heading>

              <Stack gap={3}>
                <Text>
                  1.1 "The Company" shall refer to Nik Payne Incorporated, a
                  fictitious entity of questionable legal standing, domiciled
                  wherever Nik Payne happens to be sitting at any given moment.
                </Text>

                <Text>
                  1.2 "Piracy" shall mean any unauthorized viewing, copying,
                  screenshotting, inspiration-taking, vibe-checking, or general
                  admiration of any content, design, code, meme, or pixel
                  contained within this digital property.
                </Text>

                <Text>
                  1.3 "You" refers to any party who has read this far into a
                  piracy policy, thereby demonstrating either exceptional
                  thoroughness or dangerous amounts of free time.
                </Text>

                <Text>
                  1.4 "Treasured Intellectual Property" means anything on this
                  website that you thought was cool enough to consider stealing.
                </Text>
              </Stack>
            </Stack>

            {/* Section 2 */}
            <Stack gap={4}>
              <Heading size="2xl">2. GRANT OF LICENSE</Heading>

              <Stack gap={3}>
                <Text>
                  2.1 The Company hereby grants You a non-exclusive, worldwide,
                  royalty-free license to:
                </Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>Think this website is neat</List.Item>
                  <List.Item>Be inspired by elements herein</List.Item>
                  <List.Item>Tell your friends about it</List.Item>
                  <List.Item>
                    Copy reasonable portions for educational purposes,
                    transformative works, or because you really liked that one
                    thing
                  </List.Item>
                </List.Root>

                <Text>
                  2.2 In exchange for this generous license, You agree to:
                </Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>
                    Maintain a general sense of "hey, that's pretty cool"
                  </List.Item>
                  <List.Item>
                    Perhaps consider linking back if you use something
                    substantial
                  </List.Item>
                  <List.Item>
                    Not claim you invented something that clearly came from here
                  </List.Item>
                  <List.Item>
                    Buy Nik a coffee if you feel guilty (optional but
                    appreciated)
                  </List.Item>
                </List.Root>
              </Stack>
            </Stack>

            {/* Section 3 */}
            <Stack gap={4}>
              <Heading size="2xl">3. PROHIBITED ACTS</Heading>

              <Stack gap={3}>
                <Text>3.1 You shall NOT:</Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>
                    Clone this entire website and just change the name to your
                    own (come on, we'll both be embarrassed)
                  </List.Item>
                  <List.Item>
                    Use any content in a way that makes it seem like Nik
                    endorses your cryptocurrency scam
                  </List.Item>
                  <List.Item>
                    Train an AI model exclusively on this site to create an
                    artificial Nik (one is sufficient)
                  </List.Item>
                </List.Root>

                <Text>
                  3.2 If You violate Section 3.1, the Company reserves the right
                  to:
                </Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>Feel disappointed</List.Item>
                  <List.Item>Send a passive-aggressive tweet</List.Item>
                  <List.Item>
                    Write a blog post about it without naming names but making
                    it super obvious
                  </List.Item>
                  <List.Item>
                    Nothing else, really, because lawsuits are expensive and
                    we're all just trying to vibe here
                  </List.Item>
                </List.Root>
              </Stack>
            </Stack>

            {/* Section 4 */}
            <Stack gap={4}>
              <Heading size="2xl">4. THE ACTUAL POLICY</Heading>

              <Stack gap={3}>
                <Text>
                  Look, here's the deal: this website exists to share ideas,
                  showcase work, and maybe make you chuckle. If you found
                  something useful or inspiring here, that's the entire point.
                  Use it. Learn from it. Make something cool with it.
                </Text>

                <Text>
                  Just don't be a jerk about it. If you're taking substantial
                  portions of work, give credit. If you're inspired by
                  something, that's literally how creativity works—go forth and
                  create.
                </Text>

                <Text>
                  The "piracy policy" name is a joke because intellectual
                  property is weird, the internet is built on remix culture, and
                  taking yourself too seriously is exhausting.
                </Text>
              </Stack>
            </Stack>

            {/* Section 5 */}
            <Stack gap={4}>
              <Heading size="2xl">5. DISCLAIMER OF WARRANTIES</Heading>

              <Stack gap={3}>
                <Text>
                  THE COMPANY PROVIDES THIS WEBSITE AND ALL CONTENTS "AS IS"
                  WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO THE WARRANTIES OF GOOD TASTE, TECHNICAL
                  ACCURACY, OR THAT THE MEMES ARE STILL RELEVANT.
                </Text>

                <Text>The Company makes no warranty that:</Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>
                    Any advice herein will actually help your career
                  </List.Item>
                  <List.Item>
                    The code examples won't break in production (they probably
                    will)
                  </List.Item>
                  <List.Item>
                    Future Nik won't cringe at current Nik's design choices (he
                    definitely will)
                  </List.Item>
                </List.Root>
              </Stack>
            </Stack>

            {/* Section 6 */}
            <Stack gap={4}>
              <Heading size="2xl">6. LIMITATION OF LIABILITY</Heading>

              <Stack gap={3}>
                <Text>
                  IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DAMAGES
                  WHATSOEVER, INCLUDING BUT NOT LIMITED TO:
                </Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>Wasted time reading this entire policy</List.Item>
                  <List.Item>
                    Disappointment upon realizing there's no hidden treasure at
                    the end
                  </List.Item>
                  <List.Item>
                    The existential realization that all intellectual property
                    is a social construct
                  </List.Item>
                  <List.Item>
                    Any damages at all, really, because again: we're just vibing
                  </List.Item>
                </List.Root>
              </Stack>
            </Stack>

            {/* Section 7 */}
            <Stack gap={4}>
              <Heading size="2xl">7. DISPUTE RESOLUTION</Heading>

              <Stack gap={3}>
                <Text>
                  7.1 Any disputes arising from this Policy shall be resolved
                  through:
                </Text>

                <List.Root ps={6} gap={2}>
                  <List.Item>A nice email conversation</List.Item>
                  <List.Item>
                    Perhaps a video call if it's complicated
                  </List.Item>
                  <List.Item>
                    Agreeing that life is short and we should probably just move
                    on
                  </List.Item>
                  <List.Item>Rock, paper, scissors (best of three)</List.Item>
                </List.Root>

                <Text>
                  7.2 This Policy shall be governed by the laws of Common Sense
                  and Good Faith, with jurisdiction in the Court of Just Be Cool
                  About It.
                </Text>
              </Stack>
            </Stack>

            {/* Section 8 */}
            <Stack gap={4}>
              <Heading size="2xl">8. AMENDMENTS</Heading>

              <Text>
                The Company reserves the right to modify this Policy at any
                time, for any reason, including but not limited to thinking of
                funnier jokes or encountering actual legal issues (unlikely).
              </Text>
            </Stack>

            {/* Section 9 */}
            <Stack gap={4}>
              <Heading size="2xl">9. SEVERABILITY</Heading>

              <Text>
                Pirating can be dangerous, and pirates have been known to lose
                legs. If any provision of this Policy is found to be
                unenforceable, overly pretentious, or just not that funny, the
                remaining provisions shall continue in full force and effect,
                and we'll all pretend that weird paragraph never happened.
              </Text>
            </Stack>

            {/* Section 10 */}
            <Stack gap={4}>
              <Heading size="2xl">10. ENTIRE AGREEMENT</Heading>

              <Text>
                This Policy constitutes the entire agreement between You and The
                Company regarding piracy, intellectual property, and the general
                philosophy of sharing cool stuff on the internet. Any prior
                agreements are superseded, particularly the one where Future Nik
                promised Present Nik that he'd stop putting memes on
                professional websites.
              </Text>
            </Stack>

            {/* Contact */}
            <Stack gap={4}>
              <Heading size="2xl">CONTACT</Heading>

              <Stack gap={2}>
                <Text>
                  For questions, concerns, or to report that someone actually
                  read this entire thing:
                </Text>
                <Text>Nik Payne Incorporated</Text>
                <Text>Department of Fictitious Legal Affairs</Text>
                <Text color="gray.500" fontSize="sm">
                  Email: [Your actual email if you want to include it]
                </Text>
              </Stack>
            </Stack>

            {/* Final Note */}
            <Box
              p={6}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="lg"
            >
              <Text fontSize="sm">
                By reading this Policy, You acknowledge that you have a sense of
                humor and agree not to take any of this too seriously, while
                simultaneously acknowledging that there's a kernel of actual
                philosophy here about creative commons, attribution, and not
                being a jerk.
              </Text>
            </Box>

            {/* Copyright */}
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              fontStyle="italic"
            >
              © 2024-2025 Nik Payne Incorporated. Some rights reserved. Most
              rights given away freely. A few rights still figuring out what
              they want to be.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
