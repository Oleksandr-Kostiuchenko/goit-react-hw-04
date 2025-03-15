import style from "./ImageGallery.module.css";
import ImageCard from "../imagecard/ImageCard";

const ImageGallery = ({ galleryArr, openModal }) => {
  return (
    <ul className={style.imageList}>
      {galleryArr.map((element) => (
        <li
          className={style.imageItem}
          key={element.id}
          onClick={() => openModal(element)}
        >
          <ImageCard data={element} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
