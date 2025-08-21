import React from "react";
import { useTranslation } from "react-i18next";
import b2bImage from "../images/b2b.svg";

export default function B2b() {
  const { t } = useTranslation();
  return (
    <section id="b2b" className="b2b bg-[#7db8eb]">
      <div className="container1 flex flex-col py-5 lg:pt-20 lg:pb-10 gap-0 lg:gap-14">
        <h2 className="font-PlayfairDisplay text-xl lg:text-[40px] font-bold text-[#012645] text-center">
          {t("b2b.title")}
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start">
          <div className="text flex flex-col gap-3 lg:gap-8 font-helvetica text-black">
            <p className="font-bold text-xs lg:text-xl pt-4 lg:pt-0">
              {t("b2b.h4_text")}:
            </p>
            <ul className="list-disc pl-0 lg:pl-4 ml-0 lg:ml-4 text-sm lg:text-2xl font-normal marker:text-[#019ee2] space-y-7">
              {t("b2b.items", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="hidden sm:block bg-[#019ee2] py-4 text-white w-[338px] rounded text-[10px] lg:text-base">
              {t("b2b.button")}
            </button>
          </div>
          <button className="flex sm:hidden justify-center items-center bg-[#019ee2] py-4 text-white w-[338px] rounded text-[10px] lg:text-base">
            {t("b2b.button")}
          </button>
          <div className="image w-[310px] lg:w-[500px] h-[310px] lg:h-[500px] ">
            <img
              src={b2bImage}
              alt="b2b"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
