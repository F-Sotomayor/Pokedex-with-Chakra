import React from 'react';
import {
  Flex,
  Image,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  ChakraProvider,
} from '@chakra-ui/core';
import { StarIcon, ArrowBackIcon } from '@chakra-ui/icons';
import theme from '../../theme';

function PokeDrawer({
  setSelected,
  selected,
  bgtype,
  pokeid,
  pokename,
  bgtypetwo,
}) {
  return (
    <ChakraProvider theme={theme}>
      <Drawer
        size="full"
        placement="left"
        isOpen
        onClose={() => setSelected(null)}
      >
        <DrawerOverlay>
          <DrawerContent padding={2} backgroundColor={`${bgtype}.400`}>
            <DrawerHeader
              padding={4}
              marginTop={2}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <ArrowBackIcon
                color="white"
                onClick={() => setSelected(null)}
                fontSize={32}
              />
              <StarIcon color="white" fontSize={24} />
            </DrawerHeader>
            <DrawerBody>
              <Flex width="100%" justify="space-between" align="center">
                <Box>
                  <Text
                    textTransform="capitalize"
                    fontSize={32}
                    fontWeight={600}
                    color="white"
                  >
                    {pokename}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={24} color="white">
                    #{pokeid}
                  </Text>
                </Box>
              </Flex>
              <Flex marginTop={2}>
                <Box marginRight={2}>
                  <Text
                    bg={`${bgtype}.300`}
                    width={24}
                    borderRadius={8}
                    color="white"
                    justifySelf="center"
                    textAlign="center"
                    textTransform="capitalize"
                    fontSize={16}
                  >
                    {`${bgtype}`}
                  </Text>
                </Box>
                <Box>
                  <Text
                    bg={`${bgtype}.300`}
                    width={24}
                    borderRadius={8}
                    color="white"
                    justifySelf="center"
                    textAlign="center"
                    textTransform="capitalize"
                    fontSize={16}
                  >
                    {bgtypetwo}
                  </Text>
                </Box>
              </Flex>
              <Flex width="100%" justify="center" marginTop={8}>
                <Image
                  width={200}
                  height={200}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeid}.png`}
                />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
}

export default PokeDrawer;
