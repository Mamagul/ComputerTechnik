import React, { useState } from "react";
import logo from "../images/logo.svg";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import burger from "../images/burger.svg";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header
      className="header flex flex-col justify-center items-center fixed z-50 w-full"
      style={{
        boxShadow: "0px 4px 14px 10px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div className="header-contacts w-full  bg-white">
        <div className="container1">
          <div className="w-full py-[10px] flex justify-end items-center gap-[22px] font-helvetica">
            <span className="text-[#019ee2] text-[8px] sm:text-base font-normal">
              +49 (0)1516 1569163
            </span>
            <span className="text-[#019ee2] text-[8px] sm:text-base font-normal">
              computertech@gmail.com
            </span>
            <div className="header-contacts-social flex gap-[22px]">
              <a href="#" className="w-[18px] h-[18px] sm:w-[32px] sm:h-[32px]">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="#" className="w-[18px] h-[18px] sm:w-[32px] sm:h-[32px]">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main bg-[#e7f1fc] w-full">
        <div className="container1">
          <div className=" flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-2">
              <div className="header-logo py-2 w-[70px] h-[50px] sm:w-full sm:h-full">
                <img src={logo} alt="logo" />
              </div>
              <div className="header-menu sr-only sm:not-sr-only">
                <ul className="header-menu-list font-helvetica flex gap-5 text-black text-base font-light ">
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.about")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#catalog">{t("header.catalog")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.customBuild")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.repair")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.b2b")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.reviews")}</a>
                  </li>
                  <li className="header-menu-item py-2">
                    <a href="#">{t("header.contact")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row-reverse sm:flex-row items-center justify-center gap-4">
              <button className="w-6 h-6">
                <img src={burger} alt="" />
              </button>
              <div className="header-language flex gap-2">
                <LanguageSwitcher />
              </div>
              <button className="header-button font-helvetica p-[5px] lg:p-[10px] bg-none border-[1px] border-[#019ee2] rounded text-[#019ee2] text-[10px] lg:text-base font-normal min-w-[90px] lg:min-w-[178px] whitespace-nowrap">
                {t("header.leaveRequest")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
