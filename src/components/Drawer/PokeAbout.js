import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

function PokeAbout({ info, value }) {
  return (
    <Flex width="60%" justify="space-between">
      <Text color="gray.500" marginBottom={1} textTransform="capitalize">
        {info}
      </Text>
      <Text
        color="gray.500"
        marginBottom={1}
        textTransform="capitalize"
        textAlign="left"
      >
        {value}
      </Text>
    </Flex>
  );
}

export default PokeAbout;
