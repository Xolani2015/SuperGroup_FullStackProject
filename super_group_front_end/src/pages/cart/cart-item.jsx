import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import SumsangProduct1 from '../../assets/products/SamsungGalaxyS22.jpg';
import hpProduct1 from '../../assets/products/hp1.jpg';
import BeatsProduct1 from '../../assets/products/beats1.webp';
import HuaweiProduct1 from '../../assets/products/huawie1.png';
import ZenbookProduct1 from '../../assets/products/laptop.png';
import SonyProduct1 from '../../assets/products/headphones.jpg';
import iphoneProduct1 from '../../assets/products/iphone.jpg';
import ZenbookProduct2 from '../../assets/products/flip.jpg';

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
       case 'AusProduct1':
       display_image =ZenbookProduct1;
        break;
      case 'SonyProduct1':
       display_image = SonyProduct1;
        break;
        case 'OppoProduct1':
          display_image = iphoneProduct1;
        break;
        case 'AsusProduct2':
          display_image = ZenbookProduct2;
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