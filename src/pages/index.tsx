import { LinkIcon } from "@chakra-ui/icons";
import { Text, Button, Box, VStack, Code } from "@chakra-ui/react";
import Link from "next/link";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import RampInput from "../components/RampInput";

const rampPrompt =
  'Create a React component that accepts an "input" prop. If the "input" prop is falsy, render a live-updating date and time that updates every second. If the "input" prop is an array, render the array\'s elements in a list. If the "input" prop is anything else, render the value in a \<div\>.';

const Index = () => (
  <Container>
    <VStack w={"50%"} spacing={"20px"}>
      <Hero />
      <Text color="text">
        Here's the input prop you asked for :) In response to the prompt:
        <Code>{rampPrompt}</Code>
      </Text>
      <RampInput />

      <DarkModeSwitch />
      <CTA />
    </VStack>
  </Container>
);

export default Index;
