import React from 'react';
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Flex,
  Box,
  Text,
  Image,
} from '@chakra-ui/core';
import { StarIcon, ArrowBackIcon } from '@chakra-ui/icons';
import theme from './theme';

import Landing from './components/Landing/Header';
import PokeCard from './components/Landing/PokeCard';

const PAGE_SIZE = 10;

function fetchPokemons(page = 1) {
  return Promise.all(
    new Array(page * PAGE_SIZE + 1)
      .fill(true)
      .map((_, index) => index)
      .slice(page * PAGE_SIZE - PAGE_SIZE + 1)
      .map(index =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`).then(res =>
          res.json()
        )
      )
  );
}

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [isLoading, toggleLoading] = React.useState(true);

  React.useEffect(() => {
    toggleLoading(true);
    fetchPokemons(page).then(newPokemons => {
      setPokemons(pokemons => pokemons.concat(newPokemons));
      toggleLoading(false);
    });
  }, [page]);

  return (
    <ChakraProvider theme={theme}>
      <Container
        padding={4}
        width="100vw"
        minHeight="100vh"
        height="auto"
        overflowY="auto"
      >
        <Landing />
        <SimpleGrid
          marginTop={12}
          columns={2}
          spacing={2}
          overflowY="auto"
          height="auto"
        >
          {pokemons.map(pokemon => {
            return (
              <PokeCard
                onClick={() => setSelected(pokemon)}
                name={pokemon.name}
                id={pokemon.id}
                types={pokemon.types}
                image={pokemon.sprites.front_default}
                key={pokemon.id}
              />
            );
          })}
        </SimpleGrid>
        <Button
          colorScheme="primary"
          isLoading={isLoading}
          onClick={() => setPage(page + 1)}
        >
          Fetch More
        </Button>
        {selected && (
          <Drawer
            size="full"
            placement="left"
            isOpen
            onClose={() => setSelected(null)}
          >
            <DrawerOverlay>
              <DrawerContent
                padding={2}
                backgroundColor={`${selected.types[0].type.name}.300`}
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
                <DrawerBody>
                  <Flex width="100%" justify="space-between" align="center">
                    <Box>
                      <Text
                        textTransform="capitalize"
                        fontSize={32}
                        fontWeight={600}
                        color="white"
                      >
                        {selected.name}
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize={24} color="white">
                        #{selected.id}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex marginTop={2}>
                    <Box marginRight={2}>
                      <Text
                        bg={`${selected.types[0].type.name}.200`}
                        width={24}
                        borderRadius={8}
                        color="white"
                        justifySelf="center"
                        textAlign="center"
                        textTransform="capitalize"
                        fontSize={16}
                      >
                        {selected.types[0].type.name}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        bg={`${selected.types[0].type.name}.200`}
                        width={24}
                        borderRadius={8}
                        color="white"
                        justifySelf="center"
                        textAlign="center"
                        textTransform="capitalize"
                        fontSize={16}
                      >
                        {selected.types[1]?.type?.name}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex width="100%" justify="center" marginTop={8}>
                    <Image
                      width={200}
                      height={200}
                      src={`https://pokeres.bastionbot.org/images/pokemon/${selected.id}.png`}
                    />
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
