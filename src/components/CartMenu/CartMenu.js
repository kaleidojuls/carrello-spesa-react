import "./CartMenu.css";

const CartMenu = ({ children , isOpen }) => {
    const defaultClass = isOpen ? "cartMenu bg-light w-100" : "d-none";
    return <div className={defaultClass}>{children}</div>
}

export default CartMenu;