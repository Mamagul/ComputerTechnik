import React from "react";
import techServices from "../images/techSer1.svg";
import techServices2 from "../images/techSer2.svg";
import wallClock from "../images/wall-clock.svg";
import guarantee from "../images/guarantee.svg";
import { useTranslation } from "react-i18next";

export default function TechServices() {
  const { t } = useTranslation();
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
    <section className="techSer flex flex-col gap-10 bg-[#E7F1FC] py-20">
      <h2 className="font-PlayfairDisplay text-4xl font-bold text-center text-[#012645]">
        {t("techServices.title")}
      </h2>
      <div className="w-full h-[378px]">
        <img
          src={techServices}
          alt="techServices"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mainContent flex flex-col justify-center items-center gap-10 px-24">
        <div className="textContent flex flex-col justify-center items-center gap-2">
          <h3 className="font-helvetica text-2xl font-normal text-[#019ee2]">
            {t("techServices.title")}
          </h3>
          <p className="font-helvetica text-base font-light text-[#012645] w-[730px] leading-5 text-center">
            {t("techServices.description")}
          </p>
        </div>
        <div className="techServicesContent flex gap-8">
          <div className="w-2/5 h-[400px]">
            <img
              src={techServices2}
              alt="techServices"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="techServicesIcons flex flex-col justify-start items-start gap-10 w-3/5">
            <h4 className="font-helvetica text-[28px] font-bold text-left text-[#1f1f1f]">
              {t("techServices.why")}
            </h4>
            <div className="icons grid grid-cols-2 grid-rows-3 gap-x-7 gap-y-12">
              {techServicesData.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 items-center justify-start w-full"
                >
                  <div className="flex items-center w-10 h-10 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-helvetica text-xl font-light text-[#1f1f1f]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
