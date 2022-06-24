import React from "react";
import SingleProduct from "./SingleProduct";
function AddProductList() {
  return (
    <>
      <div class="container">
        <div id="side">
          <h1>You Cart</h1>
          <SingleProduct />
        </div>
      </div>
    </>
  );
}

export default AddProductList;
