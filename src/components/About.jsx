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
    <div className="aboutUs bg-[#E7F1FC] flex items-center justify-center gap-16 py-20 px-[155px]">
      {details && details.length > 0 ? (
        <div className="images grid grid-cols-2 gap-[30px] w-[50%]">
          <div className="2img grid grid-rows-[344px_1fr] gap-[30px]">
            <div className="img1 rounded relative h-[344px]">
              <div
                className="absolute -top-8 -left-11 bg-[#FAF8F8] rounded w-[150px] h-[116px] flex flex-col items-center justify-center font-semibold"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
              >
                <span className="font-PlayfairDisplay text-4xl text-black">
                  200+
                </span>
                <span className="font-PlayfairDisplay text-xl text-black">
                  {t("about.comp")}
                </span>
              </div>
              <img
                src={details[0].image_1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="img2 rounded h-[196px]">
              <img
                src={details[0].image_3}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="img3 flex items-center justify-center">
            <div className="rounded h-[390px] relative">
              <img
                src={details[0].image_2}
                alt=""
                className="w-full h-full object-cover rounded"
              />
              <div
                className="absolute -bottom-20 left-18 bg-[#FAF8F8] rounded w-[150px] h-[116px] flex flex-col items-center justify-center font-semibold"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
              >
                <span className="font-PlayfairDisplay text-4xl text-black">
                  200+
                </span>
                <span className="font-PlayfairDisplay text-xl text-black">
                  {t("about.comp")}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="textCards w-[50%] flex flex-col items-start gap-14">
        <div className="text flex flex-col items-start justify-center gap-6">
          <h2 className="font-PlayfairDisplay text-[40px] font-bold">
            {t("about.title")}
          </h2>
          <p className="font-helvetica text-base font-light">
            {details && details.length > 0
              ? getLocalizedField(details[0], "text", lang)
              : null}
          </p>
        </div>
        <div className="cards grid grid-cols-2 grid-rows-2 gap-10">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-[10px] bg-[#012645] rounded p-4 border border-[#019ee2]"
              >
                <div className="h-16">
                  <img src={item.image} alt="" className="h-full" />
                </div>
                <span className="font-helvetica text-center text-xl font-normal text-[#E7F1FC]">
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
