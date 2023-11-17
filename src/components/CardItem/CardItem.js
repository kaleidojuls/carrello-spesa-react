import { useState } from 'react';

import Button from "../Button/Button";
import CardImage from "../CardImage/CardImage";

import "./CardItem.css";

const CardItem = ({ productData, buttonClass, buttonText, buttonOnClick }) => {
   const { title, description, price, stock } = productData;
   const [quantity, setQuantity] = useState(1);

   const handleQuantity = (action) => {
      if (action == "plus" && quantity < stock) {
         setQuantity(quantity + 1);

      } else if (action == "minus" && quantity > 1) {
         setQuantity(quantity - 1);
      }
   }

   return (
      <div className="myCard card">
         <CardImage imageData={productData} />
         <div className="card-body" style={{ maxHeight: "100%", overflowY: "auto" }}>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
         </div>

         <div className="card-footer d-flex justify-content-around">
            <p className="price">${price}</p>
            <p className="quantity">
               <i className="quantity-i bi bi-dash-circle-fill"
                  onClick={() => { handleQuantity('minus') }}></i>
               {quantity}
               <i className="quantity-i bi bi-plus-circle-fill"
                  onClick={() => { handleQuantity('plus') }}></i>
            </p>
            <Button className={buttonClass} buttonOnClick={buttonOnClick}>{buttonText}</Button>
         </div>
      </div>
   )
}

export default CardItem