import React from "react";
import { useTranslation } from "react-i18next";
import b2bImage from "../images/b2b.svg";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";
import Loader from "./Loader";

export default function B2b() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: b2b,
    loading: b2bLoading,
    error: b2bError,
  } = useFetch("optom_buy");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    // if (element) {
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      // Определяем отступ в зависимости от размера экрана
      let offset = 100; // по умолчанию для десктопа

      if (window.innerWidth < 480) {
        offset = 80; // мобильные устройства
      } else if (window.innerWidth < 768) {
        offset = 100; // планшеты портрет
      } else if (window.innerWidth < 1024) {
        offset = 110; // планшеты ландшафт
      } else if (window.innerWidth < 1440) {
        offset = 115; // небольшие десктопы
      } else {
        offset = 140; // большие экраны
      }
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  // b2b ? console.log(b2b) : null;
  if (b2bLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (b2bError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  return (
    <section id="b2b" className="b2b bg-[#7db8eb]">
      <div className="container1 flex flex-col sm:px-6 py-5 sm:py-10 lg:pt-20 lg:pb-10 gap-0 lg:gap-14">
        <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-[#012645] text-center">
          {t("b2b.title")}
        </h2>
        {b2b && b2b.length > 0 ? (
          <div className="flex flex-col-reverse sm:flex-row justify-center lg:justify-between items-center sm:items-start">
            <button className="flex sm:hidden justify-center items-center bg-[#019ee2] py-2 text-white w-[338px] rounded-[2px] lg:rounded text-[10px] lg:text-base mt-5">
              {t("b2b.button")}
            </button>
            <div className="text flex flex-col gap-3 sm:gap-5 lg:gap-8 font-helvetica text-black">
              <p className="font-bold text-xs sm:text-base lg:text-xl">
                {getLocalizedField(b2b[0], "title", lang)}:
              </p>
              <ul className="list-disc pl-0 lg:pl-4 ml-0 lg:ml-4 text-sm lg:text-2xl font-normal marker:text-[#019ee2] space-y-2 lg:space-y-7">
                {b2b[0].optom_buy_items.map((item) => (
                  <li key={item.id}>{getLocalizedField(item, "text", lang)}</li>
                ))}
              </ul>
              <button
                className="hidden sm:block bg-[#019ee2] py-4 text-white w-[338px] rounded-[2px] lg:rounded text-[10px] sm:text-xs lg:text-base"
                onClick={() => scrollToSection("customBuild")}
              >
                {t("b2b.button")}
              </button>
            </div>
            <div className="image w-[310px] lg:w-[500px] h-[310px] lg:h-[500px] ">
              <img
                src={b2bImage}
                alt="b2b"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
