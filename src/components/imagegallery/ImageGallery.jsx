import style from "./ImageGallery.module.css";
import ImageCard from "../imagecard/ImageCard";

import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = ({ galleryArr, openModal }) => {
  return (
    <ul className={style.imageList}>
      <AnimatePresence mode="popLayout">
        {galleryArr.map((element) => (
          <motion.li
            className={style.imageItem}
            key={element.id}
            onClick={() => openModal(element)}
            layout
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <ImageCard data={element} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ImageGallery;
