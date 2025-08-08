import React from "react";
import dhl from "../images/dhl.svg";
import businessmen from "../images/businessmen.svg";
import individual from "../images/individual.svg";
import document from "../images/document.svg";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch("about_us");
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
  const cards = [
    {
      title: t("about.icon1"),
      image: dhl,
    },
    {
      title: t("about.icon2"),
      image: businessmen,
    },
    {
      title: t("about.icon3"),
      image: individual,
    },
    {
      title: t("about.icon4"),
      image: document,
    },
  ];

  return (
    <div className="aboutUs bg-[#E7F1FC] flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-16 py-5 lg:py-20 px-10 lg:px-[155px]">
      <h2 className="block sm:hidden font-PlayfairDisplay text-center text-xl lg:text-[40px] font-bold w-full">
        {t("about.title")}
      </h2>
      {details && details.length > 0 ? (
        <div className="images grid grid-cols-2 gap-3 lg:gap-[30px] w-full lg:w-[50%]">
          <div className="2img grid grid-rows-[192px_1fr] lg:grid-rows-[344px_1fr] gap-3 lg:gap-[30px]">
            <div className="img1 rounded relative h-[192px] lg:h-[344px]">
              <div
                className="absolute -top-4 lg:-top-8 -left-4 lg:-left-11 bg-[#FAF8F8] rounded w-[80px] lg:w-[150px] h-[60px] lg:h-[116px] flex flex-col items-center justify-center font-semibold"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
              >
                <span className="font-PlayfairDisplay text-xl lg:text-4xl text-black">
                  200+
                </span>
                <span className="font-PlayfairDisplay text-xs lg:text-xl text-black">
                  {t("about.comp")}
                </span>
              </div>
              <img
                src={details[0].image_1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="img2 rounded h-[92px] lg:h-[196px]">
              <img
                src={details[0].image_3}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="img3 flex items-center justify-center">
            <div className="rounded h-[205px] lg:h-[390px] relative">
              <img
                src={details[0].image_2}
                alt=""
                className="w-full h-full object-cover rounded"
              />
              <div
                className="absolute -bottom-7 lg:-bottom-20 left-7 lg:left-18 bg-[#FAF8F8] rounded w-[80px] lg:w-[150px] h-[60px] lg:h-[116px] flex flex-col items-center justify-center font-semibold"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
              >
                <span className="font-PlayfairDisplay text-xl lg:text-4xl text-black">
                  200+
                </span>
                <span className="font-PlayfairDisplay text-xs lg:text-xl text-black">
                  {t("about.comp")}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="textCards w-full lg:w-[50%] flex flex-col items-start gap-3 lg:gap-14">
        <div className="text flex flex-col items-start justify-center gap-6">
          <h2 className="font-PlayfairDisplay hidden sm:block text-base lg:text-[40px] font-bold">
            {t("about.title")}
          </h2>
          <p className="font-helvetica text-xs lg:text-base font-light">
            {details && details.length > 0
              ? getLocalizedField(details[0], "text", lang)
              : null}
          </p>
        </div>
        <div className="cards grid grid-cols-2 grid-rows-2 gap-3 lg:gap-10">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-[10px] bg-[#012645] rounded p-4 border border-[#019ee2]"
              >
                <div className="h-9 lg:h-16">
                  <img src={item.image} alt="" className="h-full" />
                </div>
                <span className="font-helvetica text-center text-[10px] lg:text-xl font-normal text-[#E7F1FC]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
