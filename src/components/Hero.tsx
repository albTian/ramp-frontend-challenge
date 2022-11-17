import { Flex, FlexProps, Heading } from '@chakra-ui/react'

export const Hero = (props: FlexProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    {...props}
  >
    <Heading fontSize="6vw">Hey Ramp! I'm albert</Heading>
  </Flex>
)
