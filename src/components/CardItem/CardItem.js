import "./CardItem.css";
import Button from "../Button/Button";
import CardImage from "../CardImage/CardImage";

const CardItem = ({ productData, buttonClass, buttonText, buttonOnClick }) => {
   const { title, description } = productData;

   return <div className="myCard card">
      <CardImage imageData={productData} />
      <div className="card-body" style={{ maxHeight: "100%", overflowY: "auto" }}>
         <h3 className="card-title">{title}</h3>
         <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
         <Button className={buttonClass} buttonOnClick={buttonOnClick}>{buttonText}</Button>
      </div>
   </div>
}

export default CardItem