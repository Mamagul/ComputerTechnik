import React, { useState } from "react";
import assemblyIcon1 from "../images/iconAssembly.svg";
import assemblyBg from "../images/assemblyBg.jpg";
import { useTranslation } from "react-i18next";
import ImagePuzzle from "./ImagePuzzle";
import { useCatalogRequest } from "../hooks/useCatalogRequest";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";

export default function AssemblyToOrder() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedOption, setSelectedOption] = useState(1);
  const [email, setEmail] = useState("");
  const { sendCatalogRequest, isLoading, error, success } = useCatalogRequest();

  const {
    data: description,
    loading: descriptionLoading,
    error: descriptionError,
  } = useFetch("description_main");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    try {
      const category = selectedOption === 1 ? "wholesale" : "retail";
      await sendCatalogRequest(email.trim(), category);
      setEmail("");
    } catch (err) {
      // Error handled by hook
    }
  };

  const professionalAssembly = [
    {
      id: 1,
      title: "Professional Assembly",
      description:
        "We configure and build your PC according to your wishes. Highest quality, professional assembly and comprehensive testing",
      image: assemblyIcon1,
    },
    {
      id: 2,
      title: "Professional Assembly",
      description:
        "Careful assembly by experienced technicians. Вы получаете мощное решение, обеспечивающее высокоскоростную работу.",
      image: assemblyIcon1,
    },
    {
      id: 3,
      title: "Professional Assembly",
      description:
        "Careful assembly by experienced technicians. Вы получаете мощное решение, обеспечивающее высокоскоростную работу.",
      image: assemblyIcon1,
    },
  ];

  return (
    <section
      id="customBuild"
      className="assemblytoOrder h-fit flex flex-col justify-center items-center gap-4 lg:gap-14 px-3 sm:px-10 md:px-16 xl:px-28 py-5 lg:py-10 xl:py-20 relative z-10 overflow-hidden"
      style={{
        backgroundImage: `url(${assemblyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text flex flex-col justify-center items-center gap-2">
        <h2 className="font-PlayfairDisplay text-white text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold">
          {t("customBuild.title")}
        </h2>
        <p className="font-helvetica text-[#fde9e9] font-light text-[10px] sm:text-[12px] lg:text-base text-center w-full sm:w-[70%]">
          {description && description.length > 0
            ? getLocalizedField(description[0], "abembly_to_order", lang)
            : null}
        </p>
      </div>

      <div className="form flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 lg:gap-10 bg-[#011729b0] rounded  p-5 lg:p-10 w-[85%] sm:w-1/2"
        >
          <div className="flex flex-col gap-2">
            <label className="font-helvetica text-[#019ee2] text-xs sm:text-sm lg:text-[18px] font-normal">
              Contact Details
            </label>
            <div className="flex flex-col gap-2 bg-[#012749] rounded border border-[#013761]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="text-white px-[10px] py-2 bg-transparent outline-none text-xs sm:text-sm lg:text-base"
                required
              />
            </div>
          </div>

          <div className="radio flex flex-col gap-4">
            <div className="flex gap-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={1}
                  checked={selectedOption === 1}
                  onChange={() => setSelectedOption(1)}
                  className="sr-only peer"
                />
                <div className="w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#70aac3] peer-checked:bg-transparent transition-colors duration-200 flex items-center justify-center">
                  {selectedOption === 1 && (
                    <div className="w-[9px] h-[9px] sm:w-[13px] sm:h-[13px] lg:w-[18px] lg:h-[18px] rounded-full bg-[#019ee2] transition-transform duration-200" />
                  )}
                </div>
              </label>
              <span className="font-helvetica ml-3 lg:ml-9 font-normal text-sm lg:text-xl 2xl:text-2xl text-white">
                {t("customBuild.wholesale")}
              </span>
            </div>
            <div className="flex gap-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={2}
                  checked={selectedOption === 2}
                  onChange={() => setSelectedOption(2)}
                  className="sr-only peer"
                />
                <div className="w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#70aac3] peer-checked:bg-transparent transition-colors duration-200 flex items-center justify-center">
                  {selectedOption === 2 && (
                    <div className="w-[9px] h-[9px] sm:w-[13px] sm:h-[13px] lg:w-[18px] lg:h-[18px] rounded-full bg-[#019ee2] transition-transform duration-200" />
                  )}
                </div>
              </label>
              <span className="font-helvetica ml-3 lg:ml-9 font-normal text-sm lg:text-xl 2xl:text-2xl text-white">
                {t("customBuild.retail")}
              </span>
            </div>
          </div>

          {error && (
            <div className="font-helvetica text-center py-2 px-4 rounded text-red-400 bg-red-900/20">
              {error}
            </div>
          )}

          {success && (
            <div className="font-helvetica text-center py-2 px-4 rounded text-green-400 bg-green-900/20">
              Catalog sent successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`font-helvetica py-[10px] rounded transition-colors font-normal text-[10px] lg:text-base ${
              isLoading
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#019ee2] text-[#fffafa] hover:bg-[#0186c7]"
            }`}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="image flex flex-col gap-3 lg:gap-5 xl:gap-10 w-full sm:w-1/2">
          {professionalAssembly.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 lg:gap-10 items-start bg-[#012645] rounded py-3 lg:py-4 px-3 lg:px-7"
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <div className="image-item w-[32px] h-[32px] lg:w-[50px] lg:h-[50px] flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text flex flex-col gap-2 justify-center">
                <h3 className="font-helvetica text-white text-sm lg:text-xl 2xl:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="font-helvetica text-[#fde9e9] font-light text-[10px] lg:text-[14px] xl:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImagePuzzle />
    </section>
  );
}
