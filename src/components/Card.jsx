import React from "react";
import { VscPass } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

export default function Card({ image, title, description, available }) {
  const { t } = useTranslation();
  const isAvailable = available === "В наличии";

  return (
    <div
      className="card border-[1px] border-[#019ee2] bg-[#26323870] rounded-[4px] flex flex-col justify-between min-h-[400px] sm:min-h-[450px] md:min-h-[500px] w-full max-w-sm mx-auto"
      style={{
        boxShadow: "0px 4px 12px 0px rgba(255, 255, 255, 0.07)",
      }}
    >
      <div className="card-content flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
        <div className="card-image min-w-[200px] min-h-[150px] sm:min-w-[220px] sm:min-h-[170px] md:min-w-[240px] md:min-h-[190px]">
          <img
            src={image}
            alt="card"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="card-title text-[#fffafa] text-center text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </div>
        <div className="card-description text-[#fffafa] text-center text-sm sm:text-base font-normal">
          {description}
        </div>
      </div>
      <div className="card-footer flex flex-col gap-3 sm:gap-4 justify-between items-center pb-4 sm:pb-6 px-4 sm:px-6">
        <div
          className={`available flex justify-center items-center gap-2 text-sm sm:text-base font-normal ${
            isAvailable ? "text-[#0af32d]" : "text-red-500"
          }`}
        >
          {isAvailable && <VscPass className="text-[#0af32d] w-4 h-4" />}
          {available}
        </div>
        <button className="card-button-text bg-[#019ee2] text-[#fffafa] rounded py-2 w-full max-w-[200px] sm:max-w-[240px] text-center text-sm sm:text-base font-medium">
          {t("catalog.getPrice")}
        </button>
        <button className="card-button-icon bg-transparent text-[#f6fcff] rounded border-[#019ee2] border-[1px] py-2 w-full max-w-[200px] sm:max-w-[240px] text-center text-sm sm:text-base font-normal">
          {t("catalog.addRequest")}
        </button>
      </div>
    </div>
  );
}
