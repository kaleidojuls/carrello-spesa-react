import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Button from "../Button/Button";

const Navbar = ({ page }) => {
    const navigate = useNavigate();
    const productsInCart = useSelector((state) => state.cartProducts);
    const buttonText = page === 'cart' ? "Chiudi Carrello (" + productsInCart.length + ")" :
        "Vedi Carrello (" + productsInCart.length + ")";

    return <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Shopping Online</h1>
        <Button className={page === 'cart' ? "btn btn-danger" : "btn btn-success"}
            buttonOnClick={() => page === 'cart' ? navigate("/") : navigate("/cart")}>
            {buttonText}
        </Button>
    </nav>
}

export default Navbar;