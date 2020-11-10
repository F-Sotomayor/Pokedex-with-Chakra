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
import PokeDrawer from './components/Drawer/Drawer';

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
            console.log(pokemon);
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
          <PokeDrawer
            setSelected={setSelected}
            selected={selected}
            pokename={selected.name}
            bgtype={selected.types[0].type.name}
            pokeid={selected.id}
            bgtypetwo={selected.types[1]?.type?.name}
            species={selected.species.name}
            height={selected.height}
            weight={selected.weight}
            abilities={selected.abilities[0].ability.name}
            hp={selected.stats[0].base_stat}
            attack={selected.stats[1].base_stat}
            defense={selected.stats[2].base_stat}
            spatk={selected.stats[3].base_stat}
            spdef={selected.stats[4].base_stat}
            speed={selected.stats[5].base_stat}
            total={selected.stats[0].base_stat}
          />
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
