import Button from "../Button/Button";

const Navbar = ({navButton}) => {
    const {isCartMenuOpen, menageCart, countProductsInCart} = navButton;
    const buttonClass = isCartMenuOpen? "btn btn-danger" : "btn btn-success";
    const buttonText = isCartMenuOpen? "close" : "Vedi Carrello ("+countProductsInCart+")";
    return <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Shopping Online</h1>
        <Button className={buttonClass} buttonOnClick={menageCart}>{buttonText}</Button>  
    </nav>
}

export default Navbar;