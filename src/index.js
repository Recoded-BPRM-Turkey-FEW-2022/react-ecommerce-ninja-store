import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { QueryClient, QueryClientProvider ,useQuery} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

=======
>>>>>>> 37eed78f06276a552e98673c3fd49f9a10465f66
import App from './App';

const queryClient=new QueryClient(); 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<<<<<<< HEAD
  <QueryClientProvider client={queryClient}>
  <App  />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
=======
  <StrictMode>
      <App />
  </StrictMode>
>>>>>>> 37eed78f06276a552e98673c3fd49f9a10465f66
);
