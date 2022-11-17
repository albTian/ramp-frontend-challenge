import { Flex, Heading } from '@chakra-ui/react'

export const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    py="100"
  >
    <Heading fontSize="6vw">Hey Ramp! I'm albert</Heading>
  </Flex>
)
