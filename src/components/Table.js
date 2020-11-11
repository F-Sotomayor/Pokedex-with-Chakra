import { Box } from '@chakra-ui/core';

function Table({ children }) {
  return (
    <Box
      css={{
        width: '100%',
        textTransform: 'capitalize',
        td: { color: 'gray', ':first-of-type': { fontWeight: 'bold' } },
      }}
      as="table"
    >
      {children}
    </Box>
  );
}

export default Table;
