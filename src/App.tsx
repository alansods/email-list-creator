import * as React from "react"
import {ChakraProvider, theme, Flex, Input} from "@chakra-ui/react"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex>
      <Input placeholder="name"></Input>
      <Input placeholder="email"></Input>
    </Flex>
  </ChakraProvider>
)
