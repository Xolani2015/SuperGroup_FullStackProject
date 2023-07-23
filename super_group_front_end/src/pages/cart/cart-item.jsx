import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import product1 from '../../assets/products/1.png';
import SumsangProduct1 from '../../assets/products/sumsang1.webp';
import hpProduct1 from '../../assets/products/hp1.png';
import BeatsProduct1 from '../../assets/products/beats1.webp';
import HuaweiProduct1 from '../../assets/products/huawie1.png';
import SumsangProduct2 from '../../assets/products/sumsang1.webp';
import SonyProduct1 from '../../assets/products/speakers.PNG';
import SonyProduct2 from '../../assets/products/speakers.PNG';

export const CartItem = (props) => {
  const { id, name, actualPrice, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(AppContext);
    let display_image;

    switch (image) {
      case 'SumsangProduct1':
       display_image = SumsangProduct1;
       break;
       case 'hpProduct1':
       display_image =hpProduct1;
       break;
       case 'BeatsProduct1':
       display_image = BeatsProduct1;
       break;
       case 'HuaweiProduct1':
       display_image = HuaweiProduct1;
       break;
       case 'SumsangProduct2':
       display_image =SumsangProduct2;
        break;
      case 'SonyProduct1':
       display_image = SonyProduct1;
        break;
      default:
       display_image = BeatsProduct1;
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