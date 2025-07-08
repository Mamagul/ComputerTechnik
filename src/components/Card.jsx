import React from "react";
import { VscPass } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

export default function Card({ image, title, description, available }) {
  const { t } = useTranslation();
  return (
    <div
      className="card border-[1px] border-[#019ee2] bg-[#26323870] rounded-[4px] flex flex-col min-h-[500px]"
      style={{
        boxShadow: "0px 4px 12px 0px rgba(255, 255, 255, 0.07)",
      }}
    >
      <div className="card-content flex flex-col gap-[14px] p-[30px]">
        <div className="card-image min-w-[240px] min-h-[190px] ">
          <img src={image} alt="card" className="w-full h-full object-cover" />
        </div>
        <div className="card-title text-[#fffafa] text-center text-2xl font-bold">
          {title}
        </div>
        <div className="card-description text-[#fffafa] text-center text-base font-normal">
          {description}
        </div>
      </div>
      <div className="card-footer flex flex-col gap-[14px] justify-between items-center pb-[30px]">
        <div className="available flex justify-center items-center gap-[10px] text-[#0af32d] text-base font-normal">
          <VscPass className="text-[#0af32d] w-4 h-4" />
          {available}
        </div>
        <button className="card-button-text bg-[#019ee2] text-[#fffafa] rounded py-[10px] w-60 text-center text-base font-medium">
          {t("catalog.getPrice")}
        </button>
        <button className="card-button-icon bg-none text-[#f6fcff] rounded border-[#019ee2] border-[1px] py-[10px] w-60 text-center text-base font-normal">
          {t("catalog.addRequest")}
        </button>
      </div>
    </div>
  );
}
