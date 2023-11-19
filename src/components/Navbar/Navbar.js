import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Button from "../Button/Button";

const Navbar = ({ page }) => {

    const navigate = useNavigate();
    const productsInCart = useSelector((state) => state.cartProducts);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand">Shopping Online</h1>

            {page === 'cart' ?
                <Button className="btn btn-danger" buttonOnClick={() => navigate("/")}>
                    <i class="bi bi-cart2"></i> Chiudi Carrello ({productsInCart.length})
                </Button> :
                <Button className="btn btn-success" buttonOnClick={() => navigate("/cart")}>
                    <i class="bi bi-cart2"></i> Vedi Carrello ({productsInCart.length})
                </Button>}
        </nav>
    )
}

export default Navbar;