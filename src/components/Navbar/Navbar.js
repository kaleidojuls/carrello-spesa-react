import Button from "../Button/Button";
import { useNavigate } from "react-router-dom"

const Navbar = ({ cartButtonCounter }) => {
    const navigate = useNavigate();
    // const {isCartMenuOpen, menageCart, countProductsInCart} = navButton;
    // const buttonClass = isCartMenuOpen? "btn btn-danger" : "btn btn-success";
    const buttonText = "Vedi Carrello (" + cartButtonCounter + ")";
    return <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Shopping Online</h1>
        <Button className={"btn btn-success"} buttonOnClick={() => navigate("/cart")}>{buttonText}</Button>
    </nav>
}

export default Navbar;