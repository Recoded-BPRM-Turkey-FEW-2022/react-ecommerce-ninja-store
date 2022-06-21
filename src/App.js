import React from "react";
import "./style.css";
import MainPage from "./components/MainPage.jsx";  
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from 'react-query';
 
const queryClient = new QueryClient();
export default function App() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
      <h1>React Ecommerce!</h1>
      <MainPage />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
