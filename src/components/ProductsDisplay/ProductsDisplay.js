import "./ProductsDisplay.css";

const ProductsDisplay = ({ children, isCartMenuOpen }) => {
    const defaultClass = isCartMenuOpen ? "d-none" : "productsDisplay bg-light w-100"
    return <div className={defaultClass}>{children}</div>
}

export default ProductsDisplay;