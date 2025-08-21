import React from "react";
import techServices from "../images/techSer1.svg";
import techServices2 from "../images/techSer2.svg";
import wallClock from "../images/wall-clock.svg";
import guarantee from "../images/guarantee.svg";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";

export default function TechServices() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch("tech_servoce");
  details ? console.log(details) : null;
  const techServicesData = [
    {
      id: 1,
      image: wallClock,
      description: t("techServices.items.1"),
    },
    {
      id: 2,
      image: wallClock,
      description: t("techServices.items.2"),
    },
    {
      id: 3,
      image: guarantee,
      description: t("techServices.items.3"),
    },
    {
      id: 4,
      image: guarantee,
      description: t("techServices.items.4"),
    },
    {
      id: 5,
      image: wallClock,
      description: t("techServices.items.5"),
    },
    {
      id: 6,
      image: guarantee,
      description: t("techServices.items.6"),
    },
  ];
  return (
    <section
      id="techServices"
      className="techSer flex flex-col gap-5 lg:gap-10 bg-[#E7F1FC] py-5 lg:py-20"
    >
      <h2 className="font-PlayfairDisplay text-xl lg:text-4xl font-bold text-center text-[#012645]">
        {t("techServices.title")}
      </h2>
      {details && details.length > 0 ? (
        <>
          <div className="w-full h-[120px] lg:h-[378px]">
            <img
              src={details[0].image_1}
              alt="techServices"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mainContent flex flex-col justify-center items-center gap-3 lg:gap-10 px-3 lg:px-24">
            <div className="textContent flex flex-col justify-center items-center gap-2">
              <h3 className="font-helvetica text-xs lg:text-2xl font-normal text-[#019ee2]">
                {getLocalizedField(details[0], "blue_text", lang)}
              </h3>
              <p className="font-helvetica text-[10px] lg:text-base font-light text-[#012645] w-[310px] lg:w-[730px] text-center">
                {getLocalizedField(details[0], "text", lang)}
              </p>
            </div>
            <div className="techServicesContent flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="w-full lg:w-2/5 h-[204px] lg:h-[400px] px-10 lg:px-0 rounded">
                <img
                  src={details[0].image_2}
                  alt="techServices"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="techServicesIcons flex flex-col justify-start items-start gap-4 lg:gap-10 w-full lg:w-3/5">
                <h4 className="font-helvetica text-base lg:text-[28px] font-bold text-center lg:text-left text-[#1f1f1f]">
                  {t("techServices.why")}
                </h4>
                <div className="icons grid grid-cols-2 grid-rows-3 gap-x-2 lg:gap-x-7 gap-y-1 lg:gap-y-12">
                  {techServicesData.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-1 lg:gap-5 items-center justify-start w-full"
                    >
                      <div className="flex items-center scale-[0.5] lg:scale-100 w-10 h-10 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.description}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-helvetica text-[10px] lg:text-xl font-light text-[#1f1f1f]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}
