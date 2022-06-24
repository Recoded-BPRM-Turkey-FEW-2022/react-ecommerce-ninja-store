import React, { Component } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";
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
import { parse } from "@fortawesome/fontawesome-svg-core";

function Cart() {
  const { isLoading, error, data } = useQuery(
    "repoData",
    async () => {
      let res = await fetch("http://localhost:8000/posts");
      return res.json();
    },
    {
      onSuccess: () => {
        queryClinet.invalidateQueries("repoData");
      },
    }
  );

  const queryClinet = useQueryClient();
  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:8000/posts/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  // const [quantity, setQuantity] = useState(data.quantity);
  let itemNumber = 0;
  let totalPrice = 0;

  function getTotal() {
    {
      data.map((e) => (totalPrice += e.price));
    }
    return <div> ${parseFloat(totalPrice).toFixed(2)}</div>;
  }

  if (isLoading) return "Loading...";
  //   console.log(data);

  return (
    <Grid container className="cartPage">
      <CssBaseline />
      <Grid item md={10}>
        {data.map((product) => (
          <main>
            <Container>
              <Grid container>
                <Grid item md={3}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title="image title"
                    className="imgList"
                    style={{
                      width: 70,
                      height: 70,
                      backgroundSize: "auto",
                      borderRadius: 50,
                    }}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography gutterBottom className="singleProduct-title">
                    {`${product.title.toUpperCase()}` + "..."}
                  </Typography>
                  <Typography className="priceLable">
                    <h5 className=" realPrice-list">
                      ${product.price}{" "}
                      <span className="itemsNum">({product.quantity})</span>{" "}
                    </h5>
                  </Typography>
                  <div className="listActionBtns ">
                    <Button
                      variant="contained"
                      className="listBtn"
                      id="button"
                      onClick={() => onDeleteHandler(product.id)}
                    >
                      <span id="#text">
                        <span id="w">Remove</span>
                      </span>
                    </Button>
                    <Button variant="contained" style={{paddingLeft:" 10px ",paddingRight:" 10px "}} className="listBtn">
                      Product Page
                    </Button>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="btnPlusMinus">
                    <Button
                      className="btnPlus"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      +
                    </Button>
                    <Button
                      className="btnMinus"
                      onClick={() => {
                        if (data.quantity - 1 >= 1) {
                          console.log(data.quantity);
                          setQuantity(data.quantity - 1);
                        }
                      }}
                    >
                      -
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <hr className="line" />
          </main>
        ))}
        <div className="summary">
          <ul>
            <li>
              Subtotal: <span>{getTotal()}</span>
            </li>
            
            <li>
              Tax: <span>${parseFloat((totalPrice*7)/100).toFixed(2) }</span>
            </li>
            <hr className="line"/>
            <li className="total">
              Total: <span>${parseFloat( totalPrice+(totalPrice*7)/100).toFixed(2)}</span>
            </li>
            <li>
                <Button size="small">Check Out</Button>
            </li>
          </ul>
          <div >
        </div>
        </div>
      </Grid>
     
    </Grid>
  );
}

export default Cart;
  {/* 
        <Typography className="totalPrice" variant="h5">{getTotal()}</Typography>
        <Typography className="totalPrice" variant="h5"><span>Tax:</span>%7</Typography>
        <Typography className="totalPrice" variant="h5"><span>Total:</span>{totalPrice+(totalPrice*7)/100} </Typography>
        */}