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
    <section className="flex">
      <div className="flex flex-col bg-[#011b32] px-28 h-full gap-[46px] py-24">
        <h2 className="font-PlayfairDisplay text-[#e7f1fc] font-bold text-[32px]">
          {t("contact.title")}:
        </h2>
        <div className="flex flex-col gap-6 justify-start">
          <p className="flex gap-6 text-white">
            <FiPhoneCall className="text-[#019ee2] w-5 h-5" />
            +49 (0)1516 1569163
          </p>
          <p className="flex gap-6 text-white">
            <GoMail className="text-[#019ee2] w-5 h-5" />
            info@so-computertechnik.de
          </p>
          <p className="flex gap-6 text-white">
            <SlLocationPin className="text-[#019ee2] w-5 h-5" />
            Kieler Str. 103-107/entrance D, 25474 Bönningstedt
          </p>
        </div>
        <div className="iconsButton flex flex-col gap-[30px]">
          <div className="contacts-social flex gap-[22px]">
            <a href="#">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="#">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
          <button className="font-helvetica py-[10px] w-[300px] bg-[#019ee2] text-white font-normal text-base rounded">
            {t("contact.button")}
          </button>
        </div>
      </div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1751.6978436971228!2d58.40417650936241!3d37.909097483365336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1748940553598!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        className="w-full h-[582px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
