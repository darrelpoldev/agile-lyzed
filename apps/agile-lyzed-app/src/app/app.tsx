// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NavBar from './nav-bar/nav-bar';
import { Box, ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Box>Set footer here</Box>
    </ChakraProvider>
  );
}

export default App;
