import React from "react";
import { VscPass } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

export default function Card({ image, title, description, available }) {
  const { t } = useTranslation();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // const isAvailable = available === "В наличии";

  return (
    <div
      className="card border-[1px] border-[#019ee2] bg-[#26323870] rounded-[2px] lg:rounded  flex flex-col justify-between min-h-[256px] sm:min-h-[310px] lg:min-h-[450px] w-full max-w-sm mx-auto overflow-hidden"
      style={{
        boxShadow: "0px 4px 12px 0px rgba(255, 255, 255, 0.07)",
      }}
    >
      <div className="card-content flex flex-col gap-2 lg:gap-4 p-3 lg:p-6 overflow-hidden">
        <div className="card-image relative min-w-[130px] min-h-[150px] sm:min-w-[184px] sm:min-h-[116px] overflow-hidden rounded-[2px] lg:rounded">
          <img src={image} alt="card" className="w-full h-full object-cover" />
        </div>
        <div className="card-title text-[#fffafa] text-center text-sm lg:text-2xl font-bold">
          {title}
        </div>
        <div className="card-description text-[#fffafa] text-center text-[10px] lg:text-base font-normal">
          {description}
        </div>
      </div>
      <div className="card-footer flex flex-col gap-[6px] sm:gap-4 justify-between items-center pb-3 lg:pb-6 px-3 sm:px-6">
        <div
          className={`available flex justify-center items-center gap-2 text-[10px] lg:text-base font-normal ${
            available ? "text-[#0af32d]" : "text-red-500"
          }`}
        >
          {available ? (
            <span className="flex justify-center items-center gap-2">
              <VscPass className="text-[#0af32d] w-4 h-4" />{" "}
              {t("catalog.available")}
            </span>
          ) : (
            t("catalog.notAvailable")
          )}
        </div>
        <a
          href="https://computershophamburg.de/en/collections/laptop"
          target="_blank"
          className="card-button-text bg-[#019ee2] text-[#fffafa] rounded py-2 w-full max-w-[200px] sm:max-w-[240px] text-center text-[8px] sm:text-[10px] lg:text-base font-medium"
        >
          {t("catalog.getPrice")}
        </a>
        <button
          onClick={() => scrollToSection("customBuild")}
          className="card-button-icon bg-transparent text-[#f6fcff] rounded border-[#019ee2] border-[1px] py-2 w-full max-w-[200px] sm:max-w-[240px] text-center text-[8px] sm:text-[10px] lg:text-base font-normal"
        >
          {t("catalog.addRequest")}
        </button>
      </div>
    </div>
  );
}
