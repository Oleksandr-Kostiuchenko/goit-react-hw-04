import style from "./LangSwitcher.module.css";
import { IoClose } from "react-icons/io5";

import { useLang } from "../../hook/useLang";

const LangSwitcher = ({ setLangModalIsOpen }) => {
  const langCtx = useLang();

  const handleChange = (event) => {
    langCtx.changeLang(event.target.value);
  };

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <button
          className={style.closeModalBtn}
          onClick={() => {
            setLangModalIsOpen(false);
          }}
        >
          <IoClose />
        </button>

        <h2 className={style.title}>
          {langCtx.lang === "en" ? "Select language: " : "Виберіть мову: "}
        </h2>
        <div className={style.selectWrapper}>
          <select
            className={style.langSelector}
            value={langCtx.lang}
            onChange={handleChange}
          >
            <option value="uk">Українська</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
