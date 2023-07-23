import React from 'react';
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';
import product1 from '../../assets/products/1.png';

export const Orders = () => {

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
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
              <td>
                  <img src={product1} alt="Image" className="table-image" />
                </td>
                <td>{item.text1}</td>
                <td>{item.text2}</td>
                <td>{item.text2}</td>
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
