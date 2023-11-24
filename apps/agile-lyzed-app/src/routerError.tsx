import { FunctionComponent, ReactElement } from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Text, Code } from '@chakra-ui/react';

export const RouterError: FunctionComponent = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  return (
    <Box>
      <Text fontSize={'2xl'}>Router Error</Text>
      <Code>{error.statusText || error.message}</Code>
    </Box>
  );
};
