import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <div className={css.container}>
      <ul className={css.imageGalleryList}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
