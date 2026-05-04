import React, { useState, useRef } from "react";
import assemblyIcon1 from "../../public/icons/iconCB1.svg";
import assemblyIcon2 from "../../public/icons/iconCB2.svg";
import assemblyIcon3 from "../../public/icons/iconCB3.svg";
import assemblyBg from "../images/assemblyBg.jpg";
import { useTranslation } from "react-i18next";
import ImagePuzzle from "./ImagePuzzle";
import LetterGlitch from "./LetterGlitch";

import { useCatalogRequest } from "../hooks/useCatalogRequest";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader.jsx";

export default function AssemblyToOrder() {
  const { t } = useTranslation();

  return (
    <section
      id="customBuild"
      className="assemblytoOrder h-fit flex flex-col justify-center items-center gap-4 lg:gap-14 px-3 sm:px-10 lg:px-12 py-5 sm:py-10 lg:py-15 xl:py-20 relative z-10 overflow-hidden"
      style={{
        backgroundImage: `url(${assemblyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#081826] opacity-[0.6] z-[9]"></div>

      <div className="text flex flex-col justify-center items-center gap-2 relative z-10">
        <h2 className="font-PlayfairDisplay text-white text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold">
          {t("header.ourServices")}
        </h2>
      </div>
      <ImagePuzzle />
    </section>
  );
}
