import style from "./ImageModal.module.css";

const ImageModal = ({ modalImage }) => {
  return (
    <div className={style.backdrop}>
      <img className={style.modalImage} src={modalImage.urls.full} alt="" />

      <div className={style.imageDescriptionWrapper}>
        <p className={style.nameText}>
          <span className={style.accent}>Name: </span>
          {modalImage.alt_description}
        </p>
        <p>
          <span className={style.accent}>Author: </span>
          {modalImage.user.name}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
