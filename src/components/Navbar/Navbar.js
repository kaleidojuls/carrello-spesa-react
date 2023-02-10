import Button from "../Button/Button";

const Navbar = ({infoVarieCiccio}) => {
    const {countCart, isCartMenuOpen, manageCart} = infoVarieCiccio;
    
    const buttonClass = isCartMenuOpen? "btn btn-danger" : "btn btn-success";
    const buttonText = isCartMenuOpen? "close" : "Vedi Carrello ("+countCart+")";
    return <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Shopping Online</h1>
        <Button className={buttonClass} buttonOnClick={manageCart}>{buttonText}</Button>  
    </nav>
}

export default Navbar;