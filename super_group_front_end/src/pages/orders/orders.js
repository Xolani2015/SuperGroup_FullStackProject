import React, {Fragment, useEffect, useState } from "react"; 
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';
import product1 from '../../assets/products/1.png';
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
          order.firstProductImage
        )
      ));
      setData(models);
      console.log(orderData);
   
    })
      .catch(err => console.log(err));
  },[])

    let display_image;
    // switch (image) {
    //     case 'admin':
    //      display_image = product1;
    //       break;
    //     case 'user':
    //      display_image =product1;
    //       break;
    //     case 'guest':
    //      display_image = product1;
    //       break;
    //     default:
    //      display_image = product1;
    //   }

    const data = [
        { id: 1, text1: 'First Text', image: 'path/to/image.jpg', text2: 'Second Text', text3: 'Third Text' },
        // Add more data rows as needed
      ];
  return (
    <div className="orders">
      <h1>Your orders</h1>
       <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QUATITIY</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>ITEMS</th>
        
          </tr>
        </thead>
        <tbody>
          {orderData.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
              <td>
                  <img src={product1} alt="Image" className="table-image" />
                </td>
                <td>{item.numProducts}</td>
                <td>{item.date}</td>
                <td>{item.totalAmount}</td>
                <td>
                <div className="circle-container">
                <ForwardIcon />
                </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
