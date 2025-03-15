import { useEffect, useState, useRef } from "react";
import style from "./LoadMoreBtn.module.css";

import { TbArrowsDown } from "react-icons/tb";
import { motion } from "framer-motion";

const LoadMoreBtn = ({ handleLoadMore }) => {
  const [isHover, setIsHover] = useState(false);
  const btnRef = useRef();

  const handleHover = () => {
    setIsHover(true);
  };

  const handleDisHover = () => {
    setIsHover(false);
  };

  return (
    <div className={style.btnWrapper}>
      <button
        className={style.loadMoreBtn}
        onClick={handleLoadMore}
        ref={btnRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleDisHover}
      >
        Load more
      </button>

      {isHover && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          <TbArrowsDown animate={{ scale: 1.2 }} className={style.arrowIcon} />
        </motion.div>
      )}
    </div>
  );
};

export default LoadMoreBtn;
