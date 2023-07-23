import React, {Fragment, useEffect, useState } from "react"; 
import { Product } from "./product";
import "./shop.css";
import axios from "axios";
import { useParams } from 'react-router-dom';


export const Shop = ({ productModels, setProductModels,  categoryProp },) => {
  const { category } = useParams();
    // console.log(">>>>>>>>>>");
    // console.log(category);
    // console.log(">>>>>>>>>>");

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://localhost:7270/api/Shop/ProductList')
      .then((res) => {
        const productList = res.data.productList;
        const models = productList.map((product) => (
          new ProductModel(
            product.id,
            product.name,
            product.image,
            product.actualPrice,
            product.discountedPrice,
            product.category
          )
        ));
        setProductModels(models);
        console.log(">>>>>>>>>>");

        // console.log(">>>>>>>>>>");
         console.log(productModels);
          console.log(">>>>>>>>>>");
     
      })
        .catch(err => console.log(err));
    },[])

    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>SuperGroup Store</h1>
        </div>

        <div className="products">
          {productModels.map((product) => (
            category == 'All' ? <Product data={product} /> :  
            product.category == category ? <Product data={product}/> :
            product.category == category ? <Product data={product}/> : null
         
          ))}
        </div>
      </div>
    );
  };

  class ProductModel {
    constructor(id, name, image, actualPrice, discountedPrice, category) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.actualPrice = actualPrice;
      this.discountedPrice = discountedPrice;
      this.category = category;
    }
  }