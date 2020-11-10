import { extendTheme } from '@chakra-ui/core';
import { theme } from '@chakra-ui/theme';

export default extendTheme({
  colors: {
    water: theme.colors.blue,
    fire: theme.colors.red,
    grass: theme.colors.green,
    bug: theme.colors.teal,
    normal: theme.colors.gray,
    flying: theme.colors.linkedin,
    poison: theme.colors.teal,
    electric: theme.colors.yellow,
    ground: theme.colors.orange,
    primary: theme.colors.gray,
  },
});
