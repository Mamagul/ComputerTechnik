import React from "react";
import firstScreenBg from "../images/firstScreen.svg";
import useFetch from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";

export default function FirstScreen() {
  const { t } = useTranslation();
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch("main_page");
  console.log(details);
  return (
    <section
      className="first-screen bg-no-repeat min-h-[90vh] relative z-10 flex px-32 pt-[132px]"
      style={{
        backgroundImage: `url(${firstScreenBg})`,
        backgroundSize: "80% 100%",
        backgroundPosition: "right center",
      }}
    >
      <div className="gradient-overlay absolute top-0 left-0 w-[60%] h-full z-0"></div>
      <div className="first-screen-content flex flex-col items-start justify-start gap-9 z-20 py-20 pt-28 w-[40%]">
        <h1 className="font-PlayfairDisplay text-[#FFFEFE] text-5xl font-bold leading-18">
          {t("hero.title")}
        </h1>
        <p className="flex flex-col gap-1 font-helvetica text-[#FFFEFE] text-xl font-light">
          <span className="text-[#019ee2]"> из Гамбурга по всему миру!</span>
          <span className="text-[#FFFEFE]">
            Ноутбуки и игровые ПК в розницу и оптом — из Гамбурга по всему миру!
          </span>
        </p>
        <div className="flex gap-4 font-helvetica font-normal text-base ">
          <button className="px-6 py-4 bg-[#019ee2] text-[#FFFEFE] rounded">
            Подобрать компьютер
          </button>
          <button className="px-6 py-4 border border-[#019ee2] bg-none text-[#019ee2] rounded">
            Получить прайс
          </button>
        </div>
      </div>
    </section>
  );
}
