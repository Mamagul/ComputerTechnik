import { React, useState } from "react";
import assemblyBg from "../images/assemblyBg.svg";
import assemblyIcon1 from "../images/iconAssembly.svg";
import { useTranslation } from "react-i18next";
import ImagePuzzle from "./ImagePuzzle";
import axios from "axios";

export default function AssemblyToOrder() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitMessage("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const category = selectedOption === 1 ? "wholesale" : "retail";

      const response = await axios.post(`${baseUrl}/send-mail/`, {
        email: email.trim(),
        category: category,
      });

      setSubmitMessage(`Catalog sent successfully to ${email}!`);
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage("Error sending email. Please try again.");
    } finally {
      setIsSubmitting(false);
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
      className="assemblytoOrder bg-blue-950 h-fit flex flex-col justify-center items-center gap-14 px-28 py-20 relative z-10"
      // style={{
      //   backgroundImage: `url(${assemblyBg})`,
      //   backgroundPosition: "center",
      // }}
    >
      <div className="text flex flex-col justify-center items-center gap-2">
        <h2 className="font-PlayfairDisplay text-white text-[40px] font-bold">
          {t("customBuild.title")}
        </h2>
        <p className="font-helvetica text-[#fde9e9] font-light text-base">
          {t("customBuild.description")}
        </p>
      </div>
      <div className="form flex flex-col lg:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 bg-[#011729b0] rounded py-10 px-10 w-1/2"
        >
          <div className="flex flex-col gap-2">
            <label className="font-helvetica text-[#019ee2] text-[18px] font-normal">
              Contact Details
            </label>
            <div className="flex flex-col gap-2 bg-[#012749] rounded border border-[#013761]">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email or phone"}
                className="text-white px-[10px] py-2"
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
                <div className="w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#70aac3] peer-checked:bg-[#011729b0] transition-colors duration-200 flex items-center justify-center">
                  {selectedOption === 1 && (
                    <div className="w-[9px] h-[9px] sm:w-[13px] sm:h-[13px] lg:w-[18px] lg:h-[18px] rounded-full bg-[#019ee2] transition-transform duration-200" />
                  )}
                </div>
              </label>
              <span className="font-helvetica ml-3 lg:ml-9 font-normal text-[14px] sm:text-xl lg:text-2xl text-white">
                {t("wholesale")}
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
                <div className="w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#70aac3] peer-checked:bg-[#011729b0] transition-colors duration-200 flex items-center justify-center">
                  {selectedOption === 2 && (
                    <div className="w-[9px] h-[9px] sm:w-[13px] sm:h-[13px] lg:w-[18px] lg:h-[18px] rounded-full bg-[#019ee2] transition-transform duration-200" />
                  )}
                </div>
              </label>
              <span className="font-helvetica ml-3 lg:ml-9 font-normal text-[14px] sm:text-xl lg:text-2xl text-white">
                {t("retail")}
              </span>
            </div>
          </div>

          {submitMessage && (
            <div
              className={`font-helvetica text-center py-2 px-4 rounded ${
                submitMessage.includes("Error")
                  ? "text-red-400 bg-red-900/20"
                  : "text-green-400 bg-green-900/20"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-helvetica py-[10px] rounded transition-colors ${
              isSubmitting
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#019ee2] text-[#fffafa] hover:bg-[#0186c7]"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="image flex flex-col gap-10 w-1/2">
          {professionalAssembly.map((item) => (
            <div
              key={item.id}
              className="flex gap-10 items-start bg-[#012645] rounded py-4 px-7"
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <div className="image-item w-[50px] h-[50px] flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text flex flex-col gap-3 justify-center">
                <h3 className="font-helvetica text-white text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="font-helvetica text-[#fde9e9] font-light text-base">
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
