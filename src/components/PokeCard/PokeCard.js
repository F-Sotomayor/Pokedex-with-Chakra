import React from 'react';
import { Flex, Text, theme, ChakraProvider, Image } from '@chakra-ui/core';

function PokeCard({ name, types, id, image, onClick }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        onClick={onClick}
        width="45vw"
        height="22vh"
        direction="column"
        padding={3}
        backgroundColor={`${types[0].type.name}.400`}
        borderRadius={18}
      >
        <Flex justify="flex-end" align="flex-end" width="100%" paddingX={1}>
          <Text color="white">#{id}</Text>
        </Flex>
        <Flex marginTop={-2}>
          <Text color="white" fontSize={22} textTransform="capitalize">
            {name}
          </Text>
        </Flex>
        <Flex direction="row" height="100%">
          <Flex direction="column" justify="space-evenly" width={20} flex={1}>
            <Text
              bg={`${types[0].type.name}.300`}
              width={16}
              borderRadius={8}
              color="white"
              justifySelf="center"
              textAlign="center"
              textTransform="capitalize"
              fontSize={16}
            >
              {types[0].type.name}
            </Text>
            <Text
              bg={`${types[0].type.name}.300`}
              width={16}
              borderRadius={8}
              color="white"
              justifySelf="center"
              textAlign="center"
              textTransform="capitalize"
              fontSize={16}
            >
              {types[1]?.type?.name}
            </Text>
          </Flex>
          <Flex>
            <Image marginLeft={1} height="12vh" width="auto" src={image} />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default PokeCard;
