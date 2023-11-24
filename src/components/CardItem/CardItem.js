import React from 'react';

import CardImage from "./CardImage/CardImage";
import CardFooter from "./CardFooter/CardFooter";

import "./CardItem.css";


const CardItem = ({ productData, quantityInCart }) => {

   const { title, description } = productData;

   return (
      <div className="myCard card">
         <CardImage imageData={productData} />
         <div className="card-body" style={{ maxHeight: "100%", overflowY: "auto" }}>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
         </div>
         <CardFooter productData={productData} quantityInCart={quantityInCart} />
      </div>
   )
}

export default CardItem