import React from 'react';
import './orders.css'
import { ForwardIcon  } from  '../../components/forward_icon';

export const Orders = () => {

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
            <th>TOTAL</th>
            <th>ITEMS</th>
        
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
              <td>
                  <img src={item.image} alt="Image" className="table-image" />
                </td>
                <td>{item.text1}</td>
               
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
