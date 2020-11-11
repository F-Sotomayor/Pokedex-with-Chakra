import React from 'react';
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  Button,
  Box,
} from '@chakra-ui/core';

import theme from './theme';

import Landing from './Header';
import PokeCard from './components/PokeCard/PokeCard';
import PokeDrawer from './components/PokeDrawer';

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
        overflowX="hidden"
        padding={4}
        width="100vw"
        minHeight="100vh"
        height="auto"
        overflowY="auto"
        justifyContent="center"
      >
        <Landing />
        <SimpleGrid
          justifyContent="center"
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
        <Box marginTop={4}>
          <Button
            marginLeft={24}
            colorScheme="primary"
            isLoading={isLoading}
            onClick={() => setPage(page + 1)}
          >
            Fetch More
          </Button>
        </Box>
        {selected && (
          <PokeDrawer onClose={() => setSelected(null)} pokemon={selected} />
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
