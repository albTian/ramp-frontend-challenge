import { LinkIcon } from "@chakra-ui/icons";
import { Text, Button } from "@chakra-ui/react";
import Link from "next/link";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import RampInput from "../components/RampInput";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Text color="text">
      Here's the input prop you asked for :) To input an array, simply separate
      statements with commas.
    </Text>
    <Text color="text">
      Big thanks to Next.js and ChakraUI, this repo is base off the public
      template
    </Text>
    <Button color="text">
      <Link href="https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui" target={"_blank"}>
        Template here
      </Link>
    </Button>
    <RampInput />

    <DarkModeSwitch />
    <CTA />
  </Container>
);

export default Index;
