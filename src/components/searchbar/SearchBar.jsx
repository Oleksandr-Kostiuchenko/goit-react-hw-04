import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useLang } from "../../hook/useLang";

const SearchBar = ({ onSearch }) => {
  const langCtx = useLang();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.galleryUserQuery;

    if (input.value.trim() === "") {
      toast("Please enter something!", {
        icon: "📌",
      });
      return;
    }

    onSearch(input.value);
    form.reset();
  };

  return (
    <>
      {langCtx.lang === "en" ? (
        <motion.div
          className={style.headerWrapper}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className={style.formWrapper} onSubmit={handleSubmit}>
            <input
              className={style.userInput}
              name="galleryUserQuery"
              type="text"
              autoComplete="off"
              maxLength="30"
              placeholder="Images..."
            />
            <FiSearch className={style.searchIcon} />
            <button className={style.searchBtn} type="submit">
              Search
            </button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </motion.div>
      ) : (
        <motion.div
          className={style.headerWrapper}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className={style.formWrapper} onSubmit={handleSubmit}>
            <input
              className={style.userInput}
              name="galleryUserQuery"
              type="text"
              autoComplete="off"
              maxLength="30"
              placeholder="Зображення..."
            />
            <FiSearch className={style.searchIcon} />
            <button className={style.searchBtn} type="submit">
              Пошук
            </button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </motion.div>
      )}
    </>
  );
};

export default SearchBar;
