const Button = ({ children, className, buttonOnClick }) => {

    return <button onClick={buttonOnClick}
        className={className || "btn btn-primary"}
        style={{ fontWeight: "bold" }}>{children}</button>
}

export default Button;
