import React from "react";
import { useTranslation } from "react-i18next";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.svg";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <section
      id="contacts"
      className="flex flex-col sm:flex-row bg-[#011b32] sm:bg-transparent w-full"
    >
      <h2 className="block sm:hidden font-PlayfairDisplay text-[#e7f1fc] font-bold text-center text-xl sm:text-2xl lg:text-[32px] w-full pt-5 lg:pt-0">
        {t("contact.title")}:
      </h2>
      <div className="flex flex-row sm:flex-col  bg-[#011b32] px-3 sm:px-10 lg:px-12 xl:px-28 h-full gap-5 lg:gap-[46px] py-5 lg:py-16 xl:py-24">
        <h2 className="hidden sm:block font-PlayfairDisplay text-[#e7f1fc] font-bold text-xl sm:text-2xl lg:text-[32px]">
          {t("contact.title")}:
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-start w-[200px] lg:w-full">
          <p className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base">
            <FiPhoneCall className="text-[#019ee2] w-3 lg:w-5 h-3 lg:h-5" />
            +49 (0)1516 1569163
          </p>
          <p className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base">
            <GoMail className="text-[#019ee2] w-3 lg:w-5 h-3 lg:h-5" />
            info@so-computertechnik.de
          </p>
          <p className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base w-[165px] lg:w-full">
            <SlLocationPin className="text-[#019ee2] w-5 h-5" />
            Kieler Str. 103-107/entrance D, 25474 Bönningstedt
          </p>
        </div>
        <div className="iconsButton flex flex-col justify-end items-start gap-3 sm:gap-5 lg:gap-[30px] w-full">
          <div className="contacts-social flex gap-3 lg:gap-[22px]">
            <a href="#" className="w-5 h-5 sm:w-8 sm:h-8">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="#" className="w-5 h-5 sm:w-8 sm:h-8">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
          <a
            href="https://computershophamburg.de/en/pages/kontaktformular"
            target="_blank"
            className="font-helvetica py-[10px] w-full bg-[#019ee2] text-center text-white font-normal whitespace-nowrap text-[10px] sm:text-xs lg:text-base rounded"
          >
            {t("contact.button")}
          </a>
        </div>
      </div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1751.6978436971228!2d58.40417650936241!3d37.909097483365336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1748940553598!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        className="w-full h-[250px] sm:h-[312px] lg:h-[513px] xl:h-[582px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
