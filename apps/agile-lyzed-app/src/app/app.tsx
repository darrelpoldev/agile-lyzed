// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NavBar from './nav-bar/nav-bar';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <div className={styles['container']}>
        <NavBar />
        <h1>Hello, welcome to AgileLyzed!</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
