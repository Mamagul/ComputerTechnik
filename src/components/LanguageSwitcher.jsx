import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  return (
    <div className="header-language flex border-[1px] border-[#019ee2] rounded-lg overflow-hidden ">
      <button
        className={`font-helvetica p-1 text-[8px] sm:text-[10px] lg:text-base font-normal transition-colors duration-200 cursor-pointer ${
          i18n.language === "de"
            ? "bg-[#019ee2] text-white"
            : "bg-white text-[#019ee2] hover:bg-gray-50"
        }`}
        onClick={() => changeLanguage("de")}
      >
        DE
      </button>
      <button
        className={`font-helvetica p-1 text-[8px] sm:text-[10px] lg:text-base font-normal transition-colors duration-200 cursor-pointer ${
          i18n.language === "en"
            ? "bg-[#019ee2] text-white"
            : "bg-white text-[#019ee2] hover:bg-gray-50"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
