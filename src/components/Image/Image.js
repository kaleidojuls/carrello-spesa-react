import "./Image.css"

const Image = ({imageData}) => {
    const {title, thumbnail} = imageData || {};
    const imageSrcDefault = thumbnail || "";
    const imageTitleDefault = title || "immagine";
    return <img className="imageThumbnail" src={imageSrcDefault} title={imageTitleDefault} alt={imageTitleDefault}></img>
}

export default Image;