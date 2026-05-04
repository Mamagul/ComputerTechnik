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
      <div className="container1 flex flex-col sm:px-6 py-5 sm:pt-10 sm:pb-5 lg:pt-20 lg:pb-10 gap-2 lg:gap-14">
        <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-[#012645] text-center">
          {t("b2b.title")}
        </h2>
        {b2b && b2b.length > 0 ? (
          <div className="flex flex-col-reverse sm:flex-row justify-center lg:justify-between items-center sm:items-start">
            <div className="text flex flex-col gap-3 sm:gap-5 lg:gap-8 font-helvetica text-black">
              <p className="font-bold text-xs sm:text-base lg:text-xl">
                {getLocalizedField(b2b[0], "title", lang)}:
              </p>
              <ul className="list-disc pl-0 lg:pl-4 ml-0 lg:ml-4 text-sm lg:text-2xl font-normal marker:text-[#019ee2] space-y-2 lg:space-y-7">
                {b2b[0].optom_buy_items.map((item) => (
                  <li key={item.id}>{getLocalizedField(item, "text", lang)}</li>
                ))}
              </ul>
            </div>
            <div className="image w-[310px] lg:w-[500px] h-[310px] lg:h-[500px] -mt-10 lg:-mt-26">
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
