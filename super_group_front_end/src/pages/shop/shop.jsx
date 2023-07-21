import React, {Fragment, useEffect, useState } from "react"; 
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import axios from "axios";




class ProductModel {
  constructor(id, name, image, actualPrice, discountedPrice) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.actualPrice = actualPrice;
    this.discountedPrice = discountedPrice;
  }
}




export const Shop = ({ productModels, setProductModels }) => {
    const [data, setData] = useState([])
    //const [productModels, setProductModels] = useState([]);
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
            product.discountedPrice
          )
        ));
        setProductModels(models);
        console.log(productModels);
     
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
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  };