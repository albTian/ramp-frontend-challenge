import { Flex, FlexProps, Heading } from '@chakra-ui/react'

export const Hero = (props: FlexProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    textAlign={"center"}
    {...props}
  >
    <Heading fontSize={["48px", "48px"]}>Hey Ramp! I'm albert</Heading>
  </Flex>
)
