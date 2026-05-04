import React from "react";
import { useTranslation } from "react-i18next";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <section
      id="contacts"
      className="flex flex-col-reverse lg:flex-row bg-[#011b32] sm:bg-transparent w-full"
    >
      <div className="flex flex-row lg:flex-col  bg-[#011b32] px-3 sm:px-10 lg:px-12 xl:px-28 h-full gap-5 lg:gap-[46px] py-5 lg:py-16 xl:py-24">
        <h2 className="hidden lg:block font-PlayfairDisplay text-[#e7f1fc] font-bold text-xl sm:text-2xl lg:text-3xl">
          {t("contact.title")}:
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-start w-[200px] sm:w-full">
          <a
            href="https://wa.me/4915161569163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base hover:text-[#019ee2] transition-colors"
          >
            <FiPhoneCall className="text-[#019ee2] w-3 lg:w-5 h-3 lg:h-5" />
            +49 (0)1516 1569163
          </a>
          <p className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base">
            <GoMail className="text-[#019ee2] w-3 lg:w-5 h-3 lg:h-5" />
            info@so-computertechnik.de
          </p>
          <p className="flex gap-3 lg:gap-6 text-white text-[10px] sm:text-xs lg:text-base w-[165px] sm:w-full">
            <SlLocationPin className="text-[#019ee2] w-5 h-5 lg:w-8 lg:h-8" />
            Kieler Str. 103-107/entrance D, 25474 Bönningstedt
          </p>
        </div>
        <div className="iconsButton flex flex-col justify-end items-start gap-3 sm:gap-5 lg:gap-[30px] w-full">
          <div className="contacts-social flex gap-3 lg:gap-[22px]">
            <a
              href="https://www.tiktok.com/@socomputertechnik?_r=1&_t=ZN-91wX8grQiAw"
              className="w-5 h-5 sm:w-8 sm:h-8"
            >
              <img src={tiktok} alt="tiktok" />
            </a>
            <a
              href="https://www.instagram.com/so_computertechnik?igsh=aWpvcnh4djRxcHBp&utm_source=qr"
              className="w-5 h-5 sm:w-8 sm:h-8"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://wa.me/message/R4GFIUV56O2JH1"
              className="w-5 h-5 sm:w-8 sm:h-8"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
          <a
            href="https://computershophamburg.de/en/pages/kontaktformular"
            target="_blank"
            className="font-helvetica py-2 lg:py-[10px] w-full bg-[#019ee2] text-center text-white font-normal whitespace-nowrap text-[10px] sm:text-xs lg:text-base rounded-[2px] lg:rounded "
          >
            {t("contact.button")}
          </a>
        </div>
      </div>
      <h2 className="block lg:hidden font-PlayfairDisplay bg-[#011b32] text-[#e7f1fc] font-bold text-center text-xl sm:text-2xl lg:text-[32px] w-full pt-5 lg:pt-0">
        {t("contact.title")}
      </h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.8816787856016!2d9.903833185188045!3d53.66451514266847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1876560dd6fcd%3A0x12067e2aada6e1d1!2zS2llbGVyIFN0ci4gMTAzLzEwNywgMjU0NzQgQsO2bm5pbmdzdGVkdCwg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2sbg!4v1777881692108!5m2!1sru!2sbg"
        width="600"
        height="450"
        style={{ border: 0 }}
        className="w-full h-[250px] sm:h-[312px] lg:h-[506px] xl:h-[570px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
