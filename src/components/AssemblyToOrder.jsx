import React from "react";
import assemblyBg from "../images/assemblyBg.svg";
import assemblyIcon1 from "../images/iconAssembly.svg";
import { useTranslation } from "react-i18next";
import ImagePuzzle from "./ImagePuzzle";

export default function AssemblyToOrder() {
  const { t } = useTranslation();
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
    {
      id: 4,
      title: "Professional Assembly",
      description:
        "Ваш компьютер, не только справится с любой задачей, но и прослужит вам долгие годы.",
      image: assemblyIcon1,
    },
  ];
  return (
    <section
      className="assemblytoOrder bg-blue-950 h-fit flex flex-col justify-center items-center gap-14 px-28 py-20 relative z-10"
      // style={{
      //   backgroundImage: `url(${assemblyBg})`,
      //   backgroundPosition: "center",
      // }}
    >
      <div className="text flex flex-col justify-center items-center gap-2">
        <h2 className="font-PlayfairDisplay text-white text-[40px] font-bold">
          zborka pod zakaz
        </h2>
        <p className="font-helvetica text-[#fde9e9] font-light text-base">
          We configure and build your PC according to your wishes. Highest
          quality, professional assembly and comprehensive testing
        </p>
      </div>
      <div className="form flex gap-10 ">
        <form className="flex flex-col gap-5 bg-[#011729b0] rounded py-10 px-10 w-1/2">
          <label className="font-helvetica text-[#019ee2] text-2xl font-semibold">
            Contact Details
            {/* {nameError && (
                  <span className="text-red-500 text-xs text-center font-light ml-2">
                    {nameError}
                  </span>
                )} */}
          </label>
          <div className="flex flex-col gap-2 bg-[#012749] rounded border border-[#013761]">
            <input
              type="text"
              value={name}
              //   onChange={handleNameChange}
              placeholder={""}
              className="text-white px-[10px] py-2"
            />
          </div>
          <button
            type="submit"
            className="font-helvetica bg-[#019ee2] text-[#fffafa] py-[10px] rounded"
          >
            Send
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
