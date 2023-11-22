import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Button from "../Button/Button";
import Searchbar from "./Searchbar/Searchbar";

const Navbar = ({ page, searchState }) => {

    const navigate = useNavigate();
    const counter = useSelector((state) => state.cartHandler.counter);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand">Shopping Online</h1>
            <Searchbar searchState={searchState} />

            {page === 'cart' ?
                <Button className="btn btn-danger" buttonOnClick={() => navigate("/")}>
                    <i className="bi bi-caret-down-fill"></i> <i className="bi bi-cart4"></i>({counter})
                </Button> :
                <Button className="btn btn-success" buttonOnClick={() => navigate("/cart")}>
                    <i className="bi bi-caret-right-fill"></i> <i className="bi bi-cart4"></i>({counter})
                </Button>}
        </nav>
    )
}

export default Navbar;