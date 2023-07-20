import React, { useContext } from "react";


export const Product = (props) => {
 const { id, productName, price, productImage} = props.data;
 return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> R{price}</p>
      </div>
      {/* <button className="addToCartBttn" onClick={() => addToCart(id)}>
       // Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button> */}
      <button className="addToCartButton">Add to Cart</button>
    </div>
  );
};