import React, {Fragment, useEffect, useState } from "react"; 
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import axios from "axios"




export const Shop = () => {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://localhost:7270/api/Shop/ProductList')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    console.log(data.productList)
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>SuperGroup Store</h1>
        </div>

        <div className="products">
            {
                data.length>0 ? 
                data.map((item, index)=> { 
                return     <Fragment>
                    <p> item</p>
                </Fragment>
                })
                :
                "Nothing"
            } 
        </div>
  
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  };