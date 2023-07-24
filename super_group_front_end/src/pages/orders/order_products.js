import React, {Fragment, useEffect, useState } from "react"; 
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';
import axios from "axios";


export const OrderProducts = () => {
  const [orderData, setData] = useState([])
  useEffect(()=>{
      axios.get('https://localhost:7270/api/Shop/OrderProducts')
    .then((res) => {
      const orderList = res.data.orderList;
      const models = orderList.map((order) => (
        new OrderProductModel(
          order.id,
          order.ProductID,
          order.OrderCode,
        )
      ));
      setData(models);
      console.log(orderData);
    })
      .catch(err => console.log(err));
  },[])

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
         
          <button className="black-button">
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


class OrderProductModel {
    constructor(id, ProductID, OrderCode,) {
      this.id = id;
      this.ProductID = ProductID;
      this.OrderCode = OrderCode;

    }
  }
