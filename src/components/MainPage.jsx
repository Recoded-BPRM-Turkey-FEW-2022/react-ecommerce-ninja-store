import React from "react";
import {Link} from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "react-query";

function MainPage() {
  const { isLoading, error, data } = useQuery("repoData", async () => {
    let res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    return res.json();
  });
  console.log(data);

  if (isLoading) return "Loading...";
  return(
    <div>
    <h1>Products</h1>
        <div>
        {data.map((product) => (
        <div>
        <h2>Title</h2>
        <h3>{product.title}</h3>
        <Link to={`/products/${product.id}`}>Go to Product Page</Link>   
        </div>
            ))}
        </div>
    </div>
    
    )
    }
export default MainPage;
