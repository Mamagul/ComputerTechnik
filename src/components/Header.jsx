import React, { useState } from "react";
import logo from "../images/logo.svg";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import burger from "../images/burger.svg";

export default function Header() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    // if (element) {
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      // Определяем отступ в зависимости от размера экрана
      let offset = 100; // по умолчанию для десктопа

      if (window.innerWidth < 480) {
        offset = 80; // мобильные устройства
      } else if (window.innerWidth < 768) {
        offset = 100; // планшеты портрет
      } else if (window.innerWidth < 1024) {
        offset = 110; // планшеты ландшафт
      } else if (window.innerWidth < 1440) {
        offset = 115; // небольшие десктопы
      } else {
        offset = 140; // большие экраны
      }
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsSidebarOpen(false); // Закрываем сайдбар после клика
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="header flex flex-col justify-center items-center fixed z-50 w-full"
        style={{
          boxShadow: "0px 4px 14px 10px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div className="header-contacts w-full bg-white">
          <div className="container1">
            <div className="w-full py-[10px] flex justify-end items-center gap-[22px] font-helvetica">
              <span className="text-[#019ee2] text-[8px] sm:text-xs lg:text-base font-normal">
                +49 (0)1516 1569163
              </span>
              <span className="text-[#019ee2] text-[8px] sm:text-xs lg:text-base font-normal">
                computertech@gmail.com
              </span>
              <div className="header-contacts-social flex gap-[10px] sm:gap-[22px]">
                <a
                  href="#"
                  className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px]"
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a
                  href="#"
                  className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px]"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main bg-[#e7f1fc] w-full">
          <div className="container1">
            <div className=" flex justify-between items-center w-full">
              <div className="flex justify-between items-center sm:gap-16 md:gap-36 lg:gap-5">
                <div className="header-logo py-2 w-[70px] h-[50px] sm:w-[114px] sm:h-[80px] lg:w-full lg:h-full">
                  <img src={logo} alt="logo" />
                </div>
                <div className="header-menu sr-only sm:not-sr-only">
                  <ul className="header-menu-list font-helvetica flex items-center justify-center sm:gap-2 lg:gap-5 text-black sm:text-[10px] lg:text-base font-light sm:w-[220px] lg:w-full sm:flex-wrap lg:flex-nowrap">
                    <li className="header-menu-item py-0 lg:py-2 whitespace-nowrap">
                      <a href="#" onClick={(e) => handleNavClick(e, "about")}>
                        {t("header.about")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a href="#" onClick={(e) => handleNavClick(e, "catalog")}>
                        {t("header.catalog")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2 whitespace-nowrap">
                      <a
                        href="#"
                        onClick={(e) => handleNavClick(e, "customBuild")}
                      >
                        {t("header.customBuild")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a href="#" onClick={(e) => handleNavClick(e, "upgrade")}>
                        {t("header.repair")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a href="#" onClick={(e) => handleNavClick(e, "b2b")}>
                        {t("header.b2b")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a href="#" onClick={(e) => handleNavClick(e, "reviews")}>
                        {t("header.reviews")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a
                        href="#"
                        onClick={(e) => handleNavClick(e, "contacts")}
                      >
                        {t("header.contact")}
                      </a>
                    </li>
                    <li className="header-menu-item py-0 lg:py-2">
                      <a href="https://computershophamburg.de/en/collections/laptop">
                        {t("catalog.title")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row-reverse sm:flex-row items-center justify-center gap-4">
                <button
                  className="block sm:hidden w-6 h-6 z-60"
                  onClick={toggleSidebar}
                >
                  <img src={burger} alt="menu" />
                </button>
                <div className="header-language flex gap-2">
                  <LanguageSwitcher />
                </div>
                <button
                  onClick={() => scrollToSection("customBuild")}
                  className="header-button font-helvetica p-[5px] lg:p-[10px] bg-none border-[1px] border-[#019ee2] rounded text-[#019ee2] text-[10px] lg:text-base font-normal min-w-[90px] lg:min-w-[178px] whitespace-nowrap"
                >
                  {t("header.leaveRequest")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-[38px] right-0 h-fit w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 sm:hidden rounded-bl ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-5 py-2 border-b border-gray-200">
            <LanguageSwitcher />

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-1 py-4">
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "catalog")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.catalog")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "customBuild")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.customBuild")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "upgrade")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.repair")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "b2b")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.b2b")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "reviews")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.reviews")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "contacts")}
                  className="block px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-helvetica text-base"
                >
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Sidebar Footer */}
          {/* <div className="p-2 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <div className="flex justify-start gap-4 pl-2">
                <a href="#" className="w-8 h-8">
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="w-full h-full"
                  />
                </a>
                <a href="#" className="w-8 h-8">
                  <img
                    src={telegram}
                    alt="telegram"
                    className="w-full h-full"
                  />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
