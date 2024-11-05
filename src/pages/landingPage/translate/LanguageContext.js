import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import Espanol from "./Español";
import Ingles from "./Ingles";

const translations = {
  es: Espanol,
  en: Ingles,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const switchLanguage = (lang) => setLanguage(lang);

  const value = useMemo(() => ({
    language,
    switchLanguage,
    texts: translations[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
