import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/core';

import PokeAbout from './PokeAbout';

function PokeInfo({
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
    <Tabs variant="soft-rounded" isFitted height="auto">
      <TabList>
        <Tab>About</Tab>
        <Tab>Stats</Tab>
      </TabList>

      <TabPanels>
        <TabPanel paddingX={6}>
          <PokeAbout info="Species" value={species} />
          <PokeAbout info="Height" value={`(${height} cm)`} />
          <PokeAbout info="Weight" value={`(${weight} kg)`} />
          <PokeAbout info="Abilities" value={abilities} />
          <Text fontSize={24} fontWeight={600} marginY={4}>
            Breeding
          </Text>
        </TabPanel>
        <TabPanel>
          <PokeAbout info="HP" value={hp} />
          <PokeAbout info="Attack" value={attack} />
          <PokeAbout info="Defense" value={defense} />
          <PokeAbout info="Sp. Atk" value={spatk} />
          <PokeAbout info="Sp. Def" value={spdef} />
          <PokeAbout info="Speed" value={speed} />
          <PokeAbout info="Total" value={total} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default PokeInfo;
