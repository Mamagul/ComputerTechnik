import React from "react";
import { useTranslation } from "react-i18next";

export default function OfficeMaintenance() {
  const { t } = useTranslation();
  return (
    <section className="office-maintenance container flex flex-col bg-[#E7F1FC] py-20 gap-14">
      <h2 className="font-PlayfairDisplay text-[40px] font-bold text-[#012645] text-center">
        {t("officeMaintenance.title")}
      </h2>
      <div className="text flex flex-col gap-4 font-helvetica text-black font-normal text-xl">
        <p>
          {t("officeMaintenance.description")}
          <br />
          {t("officeMaintenance.effective")}:
        </p>
        <div className="item1">
          <span className="text-[#019ee2]">
            {t("officeMaintenance.h4_text1")}
          </span>
          <ul className="list-disc pl-4 ml-4">
            {t("officeMaintenance.items1", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        <div className="item2">
          <span className="text-[#019ee2]">
            {t("officeMaintenance.h4_text2")}
          </span>
          <ul className="list-disc pl-4 ml-4">
            {t("officeMaintenance.items2", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        <div className="item3">
          <span className="text-[#019ee2]">
            {t("officeMaintenance.h4_text3")}
          </span>
          <ul className="list-disc pl-4 ml-4">
            {t("officeMaintenance.items3", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        <p>{t("officeMaintenance.p1")}</p>
      </div>
    </section>
  );
}
