import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Button from "../Button/Button";

const Navbar = ({ page }) => {

    const navigate = useNavigate();
    const counter = useSelector((state) => state.cartHandler.counter);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand">Shopping Online</h1>

            {page === 'cart' ?
                <Button className="btn btn-danger" buttonOnClick={() => navigate("/")}>
                    <i class="bi bi-caret-down-fill"></i> <i className="bi bi-cart4"></i>({counter})
                </Button> :
                <Button className="btn btn-success" buttonOnClick={() => navigate("/cart")}>
                    <i class="bi bi-caret-right-fill"></i> <i class="bi bi-cart4"></i>({counter})
                </Button>}
        </nav>
    )
}

export default Navbar;