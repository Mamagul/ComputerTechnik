import React from "react";
import { useTranslation } from "react-i18next";
import b2bImage from "../images/b2b.svg";

export default function B2b() {
  const { t } = useTranslation();
  return (
    <section className="b2b bg-[#7db8eb]">
      <div className="container flex flex-col py-20 gap-14">
        <h2 className="font-PlayfairDisplay text-[40px] font-bold text-[#012645] text-center">
          {t("b2b.title")}
        </h2>
        <div className="flex justify-between items-start ">
          <div className="text flex flex-col gap-8 font-helvetica text-black">
            <p className="font-bold text-xl">{t("b2b.h4_text")}:</p>
            <ul className="list-disc pl-4 ml-4 text-2xl font-normal marker:text-[#019ee2]">
              {t("b2b.items", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="bg-[#019ee2] py-4 text-white w-[338px] rounded">
              {t("b2b.button")}
            </button>
          </div>
          <div className="image w-[500px] h-[500px]">
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
