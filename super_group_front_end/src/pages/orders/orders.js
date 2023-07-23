import React, {Fragment, useEffect, useState } from "react"; 
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';
import axios from "axios";


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

export const Orders = () => {
  const [orderData, setData] = useState([])
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

  return (
    <div className="orders">
      <h1>Your orders</h1>
       <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
           
            <th>QUATITIY</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>ITEMS</th> 
            <th>STATUS</th> 
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
          <td>R {item.totalAmount}.00</td>
          <td>{tdContent}</td>
          <td>
            <div className="circle-container">
              <ForwardIcon />
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  })
}
        </tbody>
      </table>
    </div>
    </div>
  );
};
