import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { RouterError } from './routerError';
import Tools from './app/tools/tools';
import Blogs from './app/blogs/blogs';
import AboutMe from './app/about-me/about-me';

const reactRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Tools />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
    ],
  },
]);

const rootDOM = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={reactRouter} />
    </ChakraProvider>
  </StrictMode>
);
