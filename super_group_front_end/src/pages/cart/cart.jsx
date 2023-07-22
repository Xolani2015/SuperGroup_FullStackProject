import React, { useContext } from "react";
import { AppContext} from "../../context/appContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./cart.css";
export const Cart = ({ productModels }) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(AppContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  const handleCheckout = (cartitems) => { 
    
    // const data = { 
    //   products: cartitems
    // };
    // axios.post('https://localhost:7270/api/Shop/Checkout', data).then((result)=>{
    //   if(result.data.statusCode === 200){
    //     alert('Order Submited')
    //   //  navigate("/")
    //   }else{
    //     alert('No item added')
    //   }
    // }).catch(err => console.log(err));
    console.log(cartitems)
  }


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {productModels.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: R{totalAmount} </p>
          <button onClick={() =>  navigate("/checkout")
        }> Continue Shopping </button>
          <button
            onClick={() => {
       
              handleCheckout(cartItems)
             console.log(cartItems)
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Shopping Cart Empty</h1>
      )}
    </div>
  );
};