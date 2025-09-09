import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

const Cookie = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-white text-[#302727] px-3 py-2 lg:py-4 lg:px-10  z-50 flex justify-between items-center gap-6 lg:gap-32">
      <p className="text-[6px] sm:text-[10px] lg:text-base">
        {t("cookie.description")}
      </p>
      <div className="flex gap-2 lg:gap-8">
        <button
          onClick={handleAccept}
          className="bg-[#e7f1fc] text-[#019ee2] border-[#019ee2] border-[1px] px-2 w-[100px] lg:w-[196px] rounded-[2px] lg:rounded whitespace-nowrap text-[10px] lg:text-base"
        >
          {t("cookie.buttonSettings")}
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#019ee2] text-white rounded-[2px] lg:rounded px-2 w-[100px] lg:w-[196px] whitespace-nowrap text-[10px] lg:text-base"
        >
          {t("cookie.buttonAccept")}
        </button>
        <button
          onClick={handleClose}
          className="bg-[#e7f1fc] text-[#019ee2] border-[#019ee2] border-[1px] px-2 py-2 rounded-[2px] lg:rounded text-[10px] lg:text-base"
        >
          <IoClose className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cookie;
