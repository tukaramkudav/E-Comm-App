import React from 'react'
import {PRODUCTS}  from "../../product";
import {Product} from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
        <div className="shoptitle">
            <h1>PedroTech Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) =>(
              <Product data={product}/>
            ))}
        </div>
    </div>
  )
};
