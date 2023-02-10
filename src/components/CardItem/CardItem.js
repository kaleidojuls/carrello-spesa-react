import "./CardItem.css";
import Button from "../Button/Button";
import Image from "../Image/Image";

const CardItem = ({ productData, buttonClass, buttonText, buttonOnClick }) => {
   const { title, description } = productData;
   const cardStyle = { maxHeight: "100%", overflowY: "auto" };

   return <div className="myCard card">
      <Image imageData={productData} />
      <div className="card-body" style={cardStyle}>
         <h3 className="card-title">{title}</h3>
         <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
         <Button className={buttonClass} buttonOnClick={buttonOnClick}>{buttonText}</Button>
      </div>
   </div>
}

export default CardItem