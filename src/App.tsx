import { useState, useEffect } from "react";
import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { fetchData } from "./components/api";

import { Image } from "./types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const PER_PAGE = 12;

  const handleSearchSubmit = async (newQuery: string) => {
    setQuery(newQuery);
    setCurrentPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchData(query, currentPage, PER_PAGE);
        console.log(data.results);

        //--Map Results---

        const mappedResults: Image[] = data.results.map((item) => ({
          id: item.id,
          alt_description: item.alt_description,
          urls: {
            small: item.urls.small,
            regular: item.urls.regular,
          },
        }));
        //----
        setImages((prevImages) => {
          return [...prevImages, ...mappedResults];
        });
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [query, currentPage]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && currentPage < totalPages && (
        <LoadMoreBtn onLoadMoreClick={handleLoadMoreClick} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />

      <Toaster />
    </div>
  );
}

export default App;
