import css from "./ImageModal.module.css";
import Modal from "react-modal";

import { Image } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  selectedImage: Image | null;
  onRequestClose: () => void;
}

export default function ImageModal({ isOpen, selectedImage, onRequestClose } : ImageModalProps) {  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Preview"
    >
      {selectedImage && <img className={css.modalImg} src={selectedImage.urls.regular} alt={selectedImage.alt_description ?? "Image without description"} />}
    </Modal>
  );
}
