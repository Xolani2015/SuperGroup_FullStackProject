import React, { useContext } from "react";
import {AppContext} from "../../context/appContext"
import product1 from '../../assets/products/1.png';


export const Product = (props) => {
 const { id, name, actualPrice, image} = props.data;
 const { addToCart, cartItems} = useContext(AppContext);
 const cartItemAmount = cartItems[id];
 let display_image;

 switch (image) {
   case 'admin':
    display_image = product1;
     break;
   case 'user':
    display_image =product1;
     break;
   case 'guest':
    display_image = product1;
     break;
   default:
    display_image = product1;
 }
 return (
    <div className="product">
      <img src={display_image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> R{actualPrice}</p>
      </div>

      <button className="addToCartButton" onClick={()=> addToCart(id)}>Add to Cart { cartItemAmount > 0 && <> ({cartItemAmount})</>} </button>
    </div>
  );
};