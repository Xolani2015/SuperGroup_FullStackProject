import React, { useContext } from "react";
import {AppContext} from "../../context/appContext"


export const Product = (props) => {
 const { id, productName, price, productImage} = props.data;
 const { addToCart, cartItems} = useContext(AppContext);
 const cartItemAmount = cartItems[id];
 return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> R{price}</p>
      </div>
      <button className="addToCartButton" onClick={()=> addToCart(id)}>Add to Cart { cartItemAmount > 0 && <> ({cartItemAmount})</>} </button>
    </div>
  );
};