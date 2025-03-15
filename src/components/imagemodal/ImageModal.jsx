import style from "./ImageModal.module.css";

const ImageModal = ({ modalImage }) => {
  return (
    <div className={style.backdrop}>
      {/* <p>{modalImage.id}</p> */}
      <img className={style.modalImage} src={modalImage.urls.full} alt="" />
    </div>
  );
};

export default ImageModal;
