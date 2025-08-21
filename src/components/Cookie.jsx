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
    <div className="w-full bg-white text-[#302727] py-4 px-10 z-50 flex justify-between items-center gap-32">
      <p className="text-sm">{t("cookie.description")}</p>
      <div className="flex gap-8">
        <button
          onClick={handleAccept}
          className="bg-[#e7f1fc] text-[#019ee2] border-[#019ee2] border-[1px] px-9 py-2 rounded whitespace-nowrap"
        >
          {t("cookie.buttonSettings")}
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#019ee2] text-white rounded px-9 py-2 whitespace-nowrap"
        >
          {t("cookie.buttonAccept")}
        </button>
        <button
          onClick={handleClose}
          className="bg-[#e7f1fc] text-[#019ee2] border-[#019ee2] border-[1px] px-2 py-2 rounded"
        >
          <IoClose className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cookie;
