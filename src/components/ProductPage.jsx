import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  Typography,
  TextField,
  Grid,
  Container,
  CssBaseline,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";

import "../style.css";

const queryClient = new QueryClient();

function ProductPage() {
  const { isLoading, error, data } = useQuery("repoData", async () => {
    let res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    return res.json();
  });

  console.log(data);

  if (isLoading) return "Loading...";

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <main maxWidth="lg" className="productPage">
        <Container>
          <Grid container spacing={4}>
            <Grid item md={9}>
              <Grid container spacing={3} className="productPanel">
                <Grid item md={5}>
                  <Card>
                    <CardMedia
                      className="productPhoto"
                      component="img"
                      image={data.images[0]}
                      title="image title"
                    />
                    <CardActions>
                      <Button>View</Button>
                      <Button>Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={7}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {data.title}
                      </Typography>

                      <Typography className="priceLable">
                        {data.price}
                      </Typography>
                      <div className="quantityPanel">
                        <Button variant="outlined">-</Button>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          className="quantityTextholder"
                          size="small"
                        />
                        <Button variant="outlined">+</Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="error"
                          endIcon={<AddShoppingCartIcon />}
                          className="addToCartBtn"
                        >
                          Add To Cart
                        </Button>
                      </div>
                      <Typography gutterBottom variant="h5">
                        {data.description}
                      </Typography>
                      {/* <Rating name="half-rating" defaultValue={"data.rating.rate"} precision={0.1} /> */}
                    </CardContent>
                    <CardActions>
                      <Button>View</Button>
                      <Button>Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?cs=srgb&dl=pexels-maxime-francis-2246476.jpg&fm=jpg"
                  title="image title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores, cupiditate quae aut at saepe atque, aperiam
                    magni expedita obcaecati amet incidunt quasi ducimus.
                    Quisquam itaque porro reiciendis est maiores numquam.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>View</Button>
                  <Button>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </QueryClientProvider>
  );
}

export default ProductPage;
