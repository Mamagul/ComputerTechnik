import React from "react";
import { useTranslation } from "react-i18next";
import LetterGlitch from "./LetterGlitch";
import { MdDone } from "react-icons/md";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";
import Loader from "./Loader";

export default function Upgrade() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: description,
    loading: descriptionLoading,
    error: descriptionError,
  } = useFetch("description_main");
  const {
    data: upgrade,
    loading: upgradeLoading,
    error: upgradeError,
  } = useFetch("upgrade");

  // upgrade ? console.log(upgrade) : null;
  if (descriptionLoading || upgradeLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (descriptionError || upgradeError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  return (
    <section id="upgrade" className="upgrade relative">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#081826] opacity-[0.6] z-[9]"></div>
      <div className="relative z-10 py-5 sm:py-10 lg:py-20 flex flex-col gap-5 sm:gap-8 lg:gap-14 items-center px-0 sm:px-10 lg:px-7 xl:px-26">
        <div className="container1 flex flex-col items-center gap-2 sm:gap-3">
          <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-center text-white">
            {t("upgrade.title")}
          </h2>
          <p className="font-helvetica text-[8px] sm:text-xs lg:text-base font-light text-[#fde9e9] text-center w-[90%]">
            {description && description.length > 0
              ? getLocalizedField(description[0], "upgrade_des", lang)
              : null}
          </p>
        </div>
        {upgrade && upgrade.length > 1 ? (
          <div className="twoCard container1 flex flex-col sm:flex-row gap-5 lg:gap-8 w-full px-3 sm:px-6 lg:px-0">
            <div className="firstCard flex flex-col w-full sm:w-1/2 bg-[#012749] rounded-[2px] lg:rounded ">
              <div className="img h-[190px] lg:h-[345px]">
                <img
                  src={upgrade[0].image}
                  alt="upgrade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="desc p-2 lg:p-[30px] flex flex-col justify-between gap-1 lg:gap-4">
                <h3 className="font-helvetica text-base lg:text-2xl xl:text-[32px] font-normal text-white">
                  {getLocalizedField(upgrade[0], "text", lang)}
                </h3>
                <p className="font-helvetica text-xs lg:text-xl xl:text-2xl font-normal text-[#019ee2]">
                  {getLocalizedField(upgrade[0], "blue_text", lang)}
                </p>
                <ul className="font-helvetica text-[10px] lg:text-xl font-light text-[#fbfeff]">
                  {upgrade[0].upgrade_items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MdDone className="text-[#08b428]" />
                      {getLocalizedField(item, "text", lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="secondCard flex flex-col w-full sm:w-1/2 bg-[#012749] rounded-[2px] lg:rounded ">
              <div className="img h-[190px] lg:h-[345px]">
                <img
                  src={upgrade[1].image}
                  alt="upgrade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="desc p-2 lg:p-[30px] flex flex-col justify-between gap-1 lg:gap-4">
                <h3 className="font-helvetica text-base lg:text-2xl xl:text-[32px] font-normal text-white">
                  {getLocalizedField(upgrade[1], "text", lang)}
                </h3>
                <p className="font-helvetica text-xs lg:text-xl xl:text-2xl font-normal text-[#019ee2]">
                  {getLocalizedField(upgrade[1], "blue_text", lang)}
                </p>
                <ul className="font-helvetica text-[10px] lg:text-xl font-light text-[#fbfeff]">
                  {upgrade[1].upgrade_items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MdDone className="text-[#08b428]" />
                      {getLocalizedField(item, "text", lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
