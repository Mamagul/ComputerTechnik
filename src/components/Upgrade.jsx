import React from "react";
import { useTranslation } from "react-i18next";
import LetterGlitch from "./LetterGlitch";
import upgrade1 from "../images/upgrade1.svg";
import upgrade2 from "../images/upgrade2.svg";
import { MdDone } from "react-icons/md";

export default function Upgrade() {
  const { t } = useTranslation();
  return (
    <section id="upgrade" className="upgrade relative">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#081826] opacity-[0.6] z-[9]"></div>
      <div className="relative z-10 py-5 lg:py-20 flex flex-col gap-5 lg:gap-14 items-center">
        <div className="container1 flex flex-col gap-2">
          <h2 className="font-PlayfairDisplay text-xl lg:text-[40px] font-bold text-center text-white">
            {t("upgrade.title")}
          </h2>
          <p className="font-helvetica text-[8px] lg:text-base font-light text-[#fde9e9] text-center">
            {t("upgrade.description")}
          </p>
        </div>
        <div className="twoCard container1 flex flex-col lg:flex-row gap-5 lg:gap-8 w-full px-10 lg:px-0">
          <div className="firstCard flex flex-col w-full lg:w-1/2 bg-[#012749] rounded">
            <div className="img h-[190px] lg:h-[345px]">
              <img
                src={upgrade2}
                alt="upgrade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="desc p-2 lg:p-[30px] flex flex-col justify-between h-full gap-2 lg:gap-4">
              <h3 className="font-helvetica text-base lg:text-[32px] font-normal text-white">
                {t("upgrade.componentReplacement")}
              </h3>
              <p className="font-helvetica text-xs lg:text-2xl font-normal text-[#019ee2]">
                {t("upgrade.desc1")}
              </p>
              <ul className="font-helvetica text-[10px] lg:text-xl font-light text-[#fbfeff]">
                {t("upgrade.items1", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MdDone className="text-[#08b428]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="secondCard flex flex-col w-full lg:w-1/2 bg-[#012749] rounded">
            <div className="img h-[190px] lg:h-[345px]">
              <img
                src={upgrade1}
                alt="upgrade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="desc p-2 lg:p-[30px] flex flex-col justify-between h-full gap-2 lg:gap-4">
              <h3 className="font-helvetica text-base lg:text-[32px] font-normal text-white">
                {t("upgrade.fixIssues")}
              </h3>
              <p className="font-helvetica text-xs lg:text-2xl font-normal text-[#019ee2]">
                {t("upgrade.desc2")}
              </p>
              <ul className="font-helvetica text-[10px] lg:text-xl font-light text-[#fbfeff]">
                {t("upgrade.items2", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MdDone className="text-[#08b428]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
