import { LinkIcon } from "@chakra-ui/icons";
import { Text, Button, Box, VStack, Code } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import RampInput from "../components/RampInput";

const rampPrompt =
  'Create a React component that accepts an "input" prop. If the "input" prop is falsy, render a live-updating date and time that updates every second. If the "input" prop is an array, render the array\'s elements in a list. If the "input" prop is anything else, render the value in a <div>.';

const Index = () => (
  <Container>
    <Head>
      <title>Hey Ramp! I'm albert</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <VStack w={["90%", "50%"]} p={"20px"} spacing={"20px"}>
      <Hero />
      <Text color="text">
        Here's the input prop you asked for :) In response to the prompt:
      </Text>
      <Code>{rampPrompt}</Code>
      <Text color="text">
        As an easter egg to the backend challenge, try pasting a base64 encoded
        string ;)
      </Text>
      <RampInput />

      <DarkModeSwitch />
      <CTA />
    </VStack>
  </Container>
);

export default Index;
