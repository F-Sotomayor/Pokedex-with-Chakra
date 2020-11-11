import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
} from '@chakra-ui/core';

import Table from '../Table';

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
  bgtype,
}) {
  return (
    <Tabs variant="soft-rounded" isFitted height="auto" colorScheme={bgtype}>
      <TabList>
        <Tab>About</Tab>
        <Tab>Stats</Tab>
      </TabList>

      <TabPanels>
        <TabPanel
          paddingX={6}
          marginTop={6}
          width="100%"
          justifyContent="space-between"
        >
          <Table>
            <tbody>
              <tr>
                <td>Height</td>
                <td>{`(${height} cm)`}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{`(${weight} kg)`}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>{abilities}</td>
              </tr>
            </tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{hp}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={hp > 50 ? 'green' : 'red'}
                    value={hp}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{attack}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={attack > 50 ? 'green' : 'red'}
                    value={attack}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{defense}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={defense > 50 ? 'green' : 'red'}
                    value={defense}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Sp. Atk</td>
                <td>{spatk}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={spatk > 50 ? 'green' : 'red'}
                    value={spatk}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Sp. Def</td>
                <td>{spdef}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={spdef > 50 ? 'green' : 'red'}
                    value={spdef}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{speed}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={speed > 50 ? 'green' : 'red'}
                    value={speed}
                  ></Progress>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{hp + attack + spatk + spdef + speed + defense}</td>
                <td width="45%">
                  <Progress
                    size="xs"
                    colorScheme={total > 50 ? 'green' : 'red'}
                    value={total}
                  ></Progress>
                </td>
              </tr>
            </tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default PokeInfo;
