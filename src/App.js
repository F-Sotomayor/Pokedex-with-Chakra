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
} from '@chakra-ui/core';
import theme from './theme';

import Landing from './components/Landing/Landing';
import PokeCard from './components/Landing/PokeCard';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    Promise.all(
      new Array(51)
        .fill(true)
        .map((_, index) => index)
        .slice(1)
        .map(index => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${index}`).then(res =>
            res.json()
          );
        })
    ).then(setPokemons);
  }, []);
  console.log(isOpen);
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
                onClick={() => setIsOpen(true)}
                name={pokemon.name}
                id={pokemon.id}
                types={pokemon.types}
                image={pokemon.sprites.front_default}
                key={pokemon.id}
              />
            );
          })}
        </SimpleGrid>
        {isOpen && (
          <Drawer
            size="full"
            placement="left"
            isOpen
            onClose={() => setIsOpen(false)}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Pokedex</DrawerHeader>

                <DrawerBody></DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
