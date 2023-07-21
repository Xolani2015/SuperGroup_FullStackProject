import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import product1 from '../../assets/products/1.png';

export const CartItem = (props) => {
  const { id, name, actualPrice, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(AppContext);
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
    <div className="cartItem">
      <img src={display_image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: R{actualPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};