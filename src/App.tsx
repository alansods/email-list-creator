import React, { useState } from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  Input,
  Button,
  VStack,
  Heading
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { PersonModel } from "./model/person";

export const App = () => {
  const [people, setPeople] = useState<PersonModel[]>([]);

  const {handleSubmit, register, reset} = useForm()

  const addPeople = (personToAdd: PersonModel) => {
    if (!people.some((person) => person.email === personToAdd.email)) {
      const tempPeople = [...people]
      tempPeople.unshift(personToAdd)
      setPeople(tempPeople)
      reset()
    }
  };

  const removePeople = () => {
    const tempPeople = [...people]
    tempPeople.shift()
    setPeople(tempPeople)
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex p={6}>
        <form onSubmit={handleSubmit(addPeople)}>
          <VStack width="300px" spacing={4}>
            <Input placeholder="name" {...register("name")}></Input>
            <Input placeholder="email" {...register("email")}></Input>
            <Button colorScheme="teal" type="submit" width="100%">
              Enviar
            </Button>
            <Button colorScheme="red" width="100%" onClick={removePeople}>
              Enviar
            </Button>
          </VStack>
        </form>
      </Flex>
      <VStack w={400} spacing={6}>
        {people.map((person) => {
          return <Heading>{person.name}</Heading>
        })}
      </VStack>
    </ChakraProvider>
  );
};
