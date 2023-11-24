// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NavBar from './nav-bar/nav-bar';
import { Box } from '@chakra-ui/react';

export function App() {
  return (
    <div>
      <NavBar />
      <Box>Set footer here</Box>
    </div>
  );
}

export default App;
