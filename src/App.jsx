//* Import modules
import { useState, useEffect } from "react";
import "./App.css";

//* Import components
import SearchBar from "./components/searchbar/SearchBar";
import ImageGallery from "./components/imagegallery/ImageGallery";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";

import ImageModal from "./components/imagemodal/ImageModal";
import Modal from "react-modal";
Modal.setAppElement("#root");

import LangSwitcher from "./components/langswitcher/LangSwitcher";

import { IoMenuSharp } from "react-icons/io5";

//* Import fetch function
import { FetchImages } from "./FetchImages";

function App() {
  const [galleryData, setGalleryData] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState();

  const [langModalIsOpen, setLangModalIsOpen] = useState(false);

  const openModal = (imageData) => {
    setModalImage(imageData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalImage();
    setModalIsOpen(false);
  };

  const handleSearch = (topic) => {
    setGalleryData([]);
    setUserQuery(topic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (userQuery === "") {
      return;
    }

    const getGalleryData = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const fetchGalleryData = await FetchImages(userQuery, page);
        setGalleryData((prevPhotos) => [
          ...prevPhotos,
          ...fetchGalleryData.results,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getGalleryData();
  }, [userQuery, page]);

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
        <button
          className="menu-btn"
          onClick={() => {
            setLangModalIsOpen(true);
          }}
        >
          <IoMenuSharp className="menu-icon" />
        </button>
      </header>

      {langModalIsOpen && (
        <LangSwitcher setLangModalIsOpen={setLangModalIsOpen} />
      )}

      {galleryData.length > 0 && (
        <ImageGallery galleryArr={galleryData} openModal={openModal} />
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {galleryData.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`modal ${modalIsOpen ? "modalIsOpen" : ""}`}
        overlayClassName={`overlay ${modalIsOpen ? "overlayIsOpen" : ""}`}
        closeTimeoutMS={300}
      >
        {modalIsOpen && <ImageModal modalImage={modalImage} />}
      </Modal>
    </>
  );
}

export default App;
