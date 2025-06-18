import css from "./ImageCard.module.css";

import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void
}

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  return (
    <div className={css.imageCard} onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}


 