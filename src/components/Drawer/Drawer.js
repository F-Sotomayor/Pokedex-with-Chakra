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
import PokeInfo from './PokeInfo';

function PokeDrawer({
  setSelected,
  selected,
  bgtype,
  pokeid,
  pokename,
  bgtypetwo,
  species,
  height,
  weight,
  abilities,
  hp,
  attack,
  defense,
  spatk,
  spdef,
  speed,
  total,
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
          <DrawerContent
            padding={0}
            margin={0}
            backgroundColor={`${bgtype}.300`}
          >
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
            <DrawerBody padding={0} margin={0} overflowY="hidden">
              <Flex
                width="100%"
                justify="space-between"
                align="center"
                marginTop={4}
                marginBottom={2}
                paddingX={6}
                paddingY={0}
              >
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
              <Flex paddingX={6} paddingY={0}>
                <Box marginRight={4}>
                  <Text
                    bg={`${bgtype}.200`}
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
                    bg={`${bgtype}.200`}
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
                  zIndex={12}
                  width={200}
                  height={200}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeid}.png`}
                />
              </Flex>
              <Box
                overflow="hidden"
                width="100%"
                height="50vh"
                backgroundColor="white"
                borderTopRadius={24}
                marginTop={-10}
              >
                <Box padding={2} marginTop={12} overflowY="auto">
                  <PokeInfo
                    overflowY="auto"
                    species={species}
                    height={height}
                    weight={weight}
                    abilities={abilities}
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    spatk={spatk}
                    spdef={spdef}
                    speed={speed}
                    total={total}
                  />
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
}

export default PokeDrawer;
