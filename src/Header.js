import React from 'react';
import { Stack, Box, Text, theme } from '@chakra-ui/core';

function Header() {
  return (
    <Stack>
      <Box>
        <Text fontSize={32} fontWeight={700} color={theme.colors.primary}>
          Pokedex
        </Text>
      </Box>
    </Stack>
  );
}

export default Header;
