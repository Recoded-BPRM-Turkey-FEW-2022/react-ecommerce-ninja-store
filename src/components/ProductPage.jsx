import React from "react";
import { useState } from "react";
import DrobListMenu from "./DrobListMenu";
import { useParams } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "react-query";
import axios from "axios";
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
import AddProductList from "./AddProductList";

import AddCardIcon from "@mui/icons-material/AddCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Rating from "@mui/material/Rating";
import "../style.css";

const queryClient = new QueryClient();

function ProductPage() {
  const { id } = useParams();
  console.log(id)
  const [quantity, setQuantity] = useState(1);
  const { isLoading, error, data } = useQuery(`products/${id}`, async () => {
    let res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    return res.json();
  });



  console.log(data);
  const addData = useMutation((data) => {
    axios.post("http://localhost:3000/posts", data).catch((e) => {
      axios.delete(`http://localhost:3000/posts/${data.id}`).then((res) => {
        console.log(res);
        console.log(res.data);
        axios.post("http://localhost:3000/posts", data);
      });
    });
  });

 
  if (isLoading) return "Loading...";
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <main maxWidth="lg" className="productPage">
        <Container>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Grid container spacing={3} className="productPanel">
                <Grid item md={5}>
                  <Card>
                    <CardMedia
                      className="productPhoto"
                      component="img"
                      image={data.images}
                      title="image title"
                      style={{
                        backgroundSize: "contain",
                        borderRadius: 10,
                      }}
                    />
                    <CardActions className="centered">
                      <Button variant="outlined">Add To Wish List</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={7}>
                  <Card className=" productDetails">
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {/* {data.title.toUpperCase()} */}
                      </Typography>
                      <Typography className="priceLable">
                        <del>$459.00</del>
                        <span className="discount">55% off</span>

                        <h4 className="realPrice">${data.price}</h4>
                      </Typography>
                      <h5 className="product-title">quantity</h5>
                      <div className="quantityPanel">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            if (quantity - 1 >= 1) {
                              setQuantity(quantity - 1);
                            }
                          }}
                        >
                          -
                        </Button>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          className="quantityTextholder"
                          size="small"
                          name="numberformat"
                          inputProps={{
                            min: 0,
                            style: { textAlign: "center" },
                          }}
                          value={quantity}
                        />
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setQuantity(quantity + 1);
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <div className="actionBtns ">
                        <Button
                          onClick={(e) => {
                            addData.mutate({
                              ...data,
                              quantity,
                            });
                          }}
                          variant="contained"
                          color="error"
                          endIcon={<AddShoppingCartIcon />}
                          className="Btn"
                          id="button"
                        >
                          <span id="#text">
                            <span id="w">Add To Cart</span>
                          </span>
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          endIcon={<AddCardIcon />}
                          className="Btn"
                        >
                          Buy Now
                        </Button>
                      </div>
                      <Typography variant="h5" className=" product-title">
                        product details
                      </Typography>
                      <Typography
                        gutterBottom
                        paragraph
                        className="description"
                      >
                        {data.description}
                      </Typography>
                      {/* <h5 className="product-title">Rate:</h5> */}
                      {/* <Rating
                        name="half-rating"
                        defaultValue={data.rating.rate}
                        precision={0.5}
                      /> */}
                      {/* <span className="count">({data.rating.count})</span> */}
                    </CardContent>
                    <CardActions>
                      <div className="hr">
                        <div class="card">
                          <h4 className="product-title">Share It :</h4>
                          <div className="socialIconTable">
                            <a href="#Mail ">
                              <span className="socialIcon hover-fx">
                                {<EmailIcon fontSize="large" />}
                              </span>
                            </a>
                            <a href="#Facebook ">
                              <span className="socialIcon hover-fx">
                                {<FacebookIcon fontSize="large" />}
                              </span>
                            </a>
                            <a href="#Instgram ">
                              <span className="socialIcon hover-fx">
                                {<InstagramIcon fontSize="large" />}
                              </span>
                            </a>
                            <a href="#Twitter ">
                              <span className="socialIcon hover-fx">
                                {<TwitterIcon fontSize="large" />}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container>
            <Grid item md={12}>
              <DrobListMenu />
            </Grid>
          </Grid>
        </Container>
      </main>
      <AddProductList />
    </QueryClientProvider>
  );
}

export default ProductPage;
