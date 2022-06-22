import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider ,useQuery} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App';

const queryClient=new QueryClient(); 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <QueryClientProvider client={queryClient}>
  <App  />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
