import { createContext, useState } from "react";

export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [appLang, setAppLang] = useState("en");

  const changeLang = (newLang) => {
    setAppLang(newLang);
  };

  return (
    <LangContext value={{ lang: appLang, changeLang }}>{children}</LangContext>
  );
};

export default LangProvider;
