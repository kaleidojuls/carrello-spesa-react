import "./CardImage.css"

const CardImage = ({ imageData }) => {
    const { title, thumbnail } = imageData || {};

    return <img className="imageThumbnail"
        src={thumbnail || ""}
        title={title || "immagine"}
        alt={title || "immagine"}></img>
}

export default CardImage;