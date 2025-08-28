import React from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";

export default function OfficeMaintenance() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: officeService,
    loading: officeServiceLoading,
    error: officeServiceError,
  } = useFetch("office_service");

  officeService ? console.log(officeService) : null;
  return (
    <section
      id="officeMaintenance"
      className="office-maintenance container1 flex flex-col bg-[#E7F1FC] py-5 sm:py-10 lg:py-12 xl:py-20 gap-4 lg:gap-14 px-2 sm:px-6"
    >
      <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-[#012645] text-center">
        {t("officeMaintenance.title")}
      </h2>
      {officeService && officeService.length > 0 ? (
        <div className="text flex flex-col gap-2 lg:gap-4 font-helvetica text-black font-normal text-xs sm:text-sm lg:text-xl">
          <p>
            {getLocalizedField(officeService[0], "description", lang)}
            <br />
            {getLocalizedField(officeService[0], "effective", lang)}:
          </p>
          <div className="item1">
            <span className="text-[#019ee2]">
              {getLocalizedField(
                officeService[0].office_h4_text[0],
                "text",
                lang
              )}
            </span>
            <ul className="list-disc pl-4 ml-4">
              {officeService[0].office_h4_text[0].office_items.map(
                (item, index) => (
                  <li key={item.id}>{getLocalizedField(item, "text", lang)}</li>
                )
              )}
            </ul>
          </div>
          <div className="item2">
            <span className="text-[#019ee2]">
              {getLocalizedField(
                officeService[0].office_h4_text[1],
                "text",
                lang
              )}
            </span>
            <ul className="list-disc pl-4 ml-4">
              {officeService[0].office_h4_text[1].office_items.map(
                (item, index) => (
                  <li key={item.id}>{getLocalizedField(item, "text", lang)}</li>
                )
              )}
            </ul>
          </div>
          <div className="item3">
            <span className="text-[#019ee2]">
              {getLocalizedField(
                officeService[0].office_h4_text[2],
                "text",
                lang
              )}
            </span>
            <ul className="list-disc pl-4 ml-4">
              {officeService[0].office_h4_text[2].office_items.map(
                (item, index) => (
                  <li key={item.id}>{getLocalizedField(item, "text", lang)}</li>
                )
              )}
            </ul>
          </div>
          <p>{getLocalizedField(officeService[0], "paragraph", lang)}</p>
        </div>
      ) : null}
    </section>
  );
}
