import React from "react";
// import firstScreenBg from "../images/firstScreen.svg";
import useFetch from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers.js";

export default function FirstScreen() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch("main_page");
  console.log(details);
  details ? console.log(getLocalizedField(details, "text", lang)) : null;
  // details ? console.log(details[0].h_text_en) : null;
  // details ? console.log(details[0].h_text_ru) : null;

  if (detailsLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("loading")} */} Loading
      </div>
    );
  }

  if (detailsError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  return (
    <>
      {details && details.length > 0 ? (
        <section
          className="first-screen bg-no-repeat min-h-[90vh] relative z-10 flex px-32 pt-[132px]"
          style={{
            backgroundImage: `url(${details[0].image})`,
            backgroundSize: "80% 100%",
            backgroundPosition: "right center",
          }}
        >
          <div className="gradient-overlay absolute top-0 left-0 w-[60%] h-full z-0"></div>
          <div className="first-screen-content flex flex-col items-start justify-start gap-9 z-20 py-20 pt-28 w-[40%]">
            <h1 className="font-PlayfairDisplay text-[#FFFEFE] text-5xl font-bold leading-18">
              {getLocalizedField(details[0], "h_text", lang)}
            </h1>
            <p className="flex flex-col gap-1 font-helvetica text-[#FFFEFE] text-xl font-light">
              <span className="text-[#019ee2]">
                {getLocalizedField(details[0], "blue_text", lang)}
              </span>
              <span className="text-[#FFFEFE]">
                {getLocalizedField(details[0], "text", lang)}
              </span>
            </p>
            <div className="flex gap-4 font-helvetica font-normal text-base ">
              <button className="px-6 py-4 bg-[#019ee2] text-[#FFFEFE] rounded">
                {t("hero.cta2")}
              </button>
              <button className="px-6 py-4 border border-[#019ee2] bg-none text-[#019ee2] rounded">
                {t("hero.cta")}
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
