import React, { useContext } from "react";
import { AppContext} from "../../context/appContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2'


import "./cart.css";
export const Cart = ({ productModels }) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(AppContext);
  const totalAmount = getTotalCartAmount(productModels);
  const navigate = useNavigate();
  

  const handleClose = () => { 
    checkout()
  }

  const handleCheckout = (cartitems) => { 
    const selectedProducts = [];
    productModels.map((product) => {
      if (cartItems[product.id] !== 0) {
        for(let i = 0; i<cartItems[product.id]; i++){
          selectedProducts.push(product);
        }  
      }
    })


    axios.post('https://localhost:7270/api/Shop/Checkout', selectedProducts).then((result)=>{
      if(result.data.statusCode === 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Order has been placed',
          showConfirmButton: false,
          confirmButtonText: 'Yes, delete it!',
          onClose: handleClose(),
        })
      }else{
        Swal.fire({
          icon: 'error',    
          text: 'Internet Connection Error!',
        })
      }
    }).catch(err => console.log(err));
    console.log(selectedProducts)
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
          <p> Total Amount: R {totalAmount}.00 </p>
          <button onClick={() =>  navigate("/")
        }> Continue Shopping </button>
          <button
            onClick={() => { 
              handleCheckout(cartItems)
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