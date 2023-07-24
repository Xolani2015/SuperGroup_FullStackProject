import React, {Fragment, useEffect, useState } from "react"; 
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Orders = () => {
  const [orderData, setData] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
      axios.get('https://localhost:7270/api/Shop/OrderList')
    .then((res) => {
      const orderList = res.data.orderList;
      const models = orderList.map((order) => (
        new OrderModel(
          order.id,
          order.numProducts,
          order.totalAmount,
          order.date,
          order.active,
          order.firstProductImage,
          order.orderCode,
        )
      ));
      setData(models);
      console.log(orderData);
    })
      .catch(err => console.log(err));
  },[])

  const handleViewProducts = (id) => { 
   // navigate('/ordersproducts')
  }

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="space"></div>
       <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
           
            <th>QUATITIY</th>
            <th>DATE</th>
            <th>DELIVERY DATE</th> 
            <th>STATUS</th> 
            <th>TOTAL</th>
            <th>ITEMS</th> 
          </tr>
        </thead>
        <tbody>
        {
  orderData.map((item) => {
    let display_image;
    console.log(item.date)
    const tdContent = item.active ?  "Completed" :"In Progress" ;
    return (
      <React.Fragment key={item.id}>
        <tr>  
          <td>{item.numProducts} Items</td>
          <td>{item.date}</td>    
          <td>{tdContent}</td>
          <td>Pending</td>
          <td>R {item.totalAmount}.00</td>
          <td>
         
          <button className="black-button"        onClick={() => { 
              handleViewProducts(item.orderCode)

            }}>
             View Products
          </button>
          </td>
        </tr>
      </React.Fragment>
    );
  })
}
      </tbody>
      </table>
    </div>
    <div className="space"></div>
    <div className="space"></div>
    <div className="space"></div>
    <div className="space"></div>
    </div>
    
  );
};

class OrderModel {
  constructor(id, numProducts, totalAmount, date, active,firstProductImage,orderCode,) {
    this.id = id;
    this.numProducts = numProducts;
    this.totalAmount = totalAmount;
    this.date = date;
    this.active = active;
    this.firstProductImage = firstProductImage;
    this.orderCode = orderCode;
  }
}
