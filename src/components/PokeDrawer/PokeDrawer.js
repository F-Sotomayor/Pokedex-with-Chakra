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
import pokebg from '../../assets/pokebg.svg';

function PokeDrawer({ onClose, pokemon }) {
  const species = pokemon.species.name;
  const height = pokemon.height;
  const weight = pokemon.weight;
  const abilities = pokemon.abilities[0].ability.name;
  const hp = pokemon.stats[0].base_stat;
  const attack = pokemon.stats[1].base_stat;
  const defense = pokemon.stats[2].base_stat;
  const spatk = pokemon.stats[3].base_stat;
  const spdef = pokemon.stats[4].base_stat;
  const speed = pokemon.stats[5].base_stat;
  const total = pokemon.stats[0].base_stat;
  const bgtype = pokemon.types[0].type.name;
  const pokeid = pokemon.id;
  console.log(pokemon);
  return (
    <ChakraProvider theme={theme}>
      <Drawer size="full" placement="left" isOpen onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            padding={0}
            margin={0}
            backgroundImage={`url(${pokebg})`}
            backgroundColor={`${bgtype}.300`}
            backgroundRepeat="no-repeat"
            backgroundSize="300px"
            backgroundPosition="100px 150px"
          >
            <DrawerHeader
              padding={4}
              marginTop={2}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <ArrowBackIcon color="white" onClick={onClose} fontSize={32} />
              <StarIcon color="white" fontSize={24} />
            </DrawerHeader>
            <DrawerBody padding={0} margin={0}>
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
                    {pokemon.name}
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
                    {pokemon.types[1]?.type?.name}
                  </Text>
                </Box>
              </Flex>
              <Flex width="100%" justify="center" marginTop={8}>
                <Image
                  zIndex={12}
                  width={200}
                  height={200}
                  src={pokemon.sprites.front_default}
                />
              </Flex>
              <Box
                width="100%"
                height="55vh"
                backgroundColor="white"
                borderTopRadius={24}
                marginTop={-10}
                paddingTop={1}
              >
                <Box padding={2} marginTop={12}>
                  <PokeInfo
                    bgtype={bgtype}
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
