import style from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  return (
    <div className={style.imgWrapper}>
      <img
        className={style.imgGallery}
        src={data.urls.regular}
        alt={data.alt_description}
      />
    </div>
  );
};

export default ImageCard;
