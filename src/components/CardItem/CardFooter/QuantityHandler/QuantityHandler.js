import "./QuantityHandler.css";

const QuantityHandler = ({ quantity, setQuantity, stock }) => {

    const handleQuantity = (action) => {
        if (action == "plus" && quantity < stock) {
            setQuantity(quantity + 1);

        } else if (action == "minus" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <p className="quantity">
            <i className="quantity-i bi bi-dash-circle-fill"
                onClick={() => { handleQuantity('minus') }}></i>
            {quantity}
            <i className="quantity-i bi bi-plus-circle-fill"
                onClick={() => { handleQuantity('plus') }}></i>
        </p>
    )
}

export default QuantityHandler