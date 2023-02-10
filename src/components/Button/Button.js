const Button = ({children, className, buttonOnClick}) => {
    const defaultClassName = className || "btn btn-primary";
    const dafaultStyle = {fontWeight: "bold"};
    return <button onClick={buttonOnClick} className={defaultClassName} style={dafaultStyle}>{children}</button>
}

export default Button;
