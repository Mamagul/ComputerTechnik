import React from "react";
import puzzle1 from "../images/puzzle1.svg";
import puzzle2 from "../images/puzzle2.svg";
import puzzle3 from "../images/puzzle3.svg";
import puzzle4 from "../images/puzzle4.svg";
import puzzle3_1 from "../images/puzzlePhone3.svg";
import puzzle4_1 from "../images/puzzlePhone4.svg";
import puzzle5 from "../images/puzzle5.svg";
import puzzle6 from "../images/puzzle6.svg";
import puzzle11 from "../images/puzzle11.svg";
import puzzle22 from "../images/puzzle22.svg";
import puzzle33 from "../images/puzzle33.svg";
import puzzle44 from "../images/puzzle44.svg";
import puzzle55 from "../images/puzzle55.svg";
import puzzle66 from "../images/puzzle66.svg";
import PixelTransition from "./effects/PixelTransition";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader.jsx";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers";

export default function ImagePuzzle() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useFetch("service");

  services ? console.log("services", services) : null;
  if (servicesLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (servicesError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }
  return (
    <>
      {/* Desktop */}

      <div className="puzzle-grid hidden sm:grid grid-cols-3 sm:gap-[20px] lg:gap-[30px] h-full relative z-10">
        {/* First Puzzle */}
        {services && services.length > 5 ? (
          <>
            <PixelTransition
              firstContent={
                <img
                  src={puzzle1}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle11}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[0], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[0], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Second Puzzle */}

            <PixelTransition
              firstContent={
                <img
                  src={puzzle2}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle22}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[1], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[1], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Third Puzzle */}

            <PixelTransition
              firstContent={
                <img
                  src={puzzle3}
                  alt="service image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "rotate(180deg)",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle33}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[2], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[2], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Fourth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle4}
                  alt="service image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle44}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[3], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[3], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Fifth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle5}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle55}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[4], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[4], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Sixth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle6}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle66}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-3 lg:gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[20px] lg:px-[30px]">
                    <span className="sm:text-[18px] lg:text-[28px] font-bold text-center leading-5 lg:leading-7">
                      {getLocalizedField(services[5], "title", lang)}
                    </span>
                    <span className="sm:text-xs lg:text-xl font-normal text-center">
                      {getLocalizedField(services[5], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </>
        ) : null}
      </div>
      {/* Mobile */}
      <div className="puzzle-grid grid sm:hidden grid-cols-2 gap-4 h-full relative z-10">
        {/* First Puzzle */}
        {services && services.length > 5 ? (
          <>
            <PixelTransition
              firstContent={
                <img
                  src={puzzle1}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle11}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-xl font-bold text-center">
                      {getLocalizedField(services[0], "title", lang)}
                    </span>
                    <span className="text-xs font-normal text-center">
                      {getLocalizedField(services[0], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Second Puzzle */}

            <PixelTransition
              firstContent={
                <img
                  src={puzzle2}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle22}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-[28px] font-bold text-center">
                      {getLocalizedField(services[1], "title", lang)}
                    </span>
                    <span className="text-xl font-normal text-center">
                      {getLocalizedField(services[1], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Third Puzzle */}

            <PixelTransition
              firstContent={
                <img
                  src={puzzle3_1}
                  alt="service image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    translate: "translatex(100%)",
                  }}
                  className="rotate-180"
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle33}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-[28px] font-bold text-center">
                      {getLocalizedField(services[2], "title", lang)}
                    </span>
                    <span className="text-xl font-normal text-center">
                      {getLocalizedField(services[2], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Fourth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle4_1}
                  alt="service image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle44}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-[28px] font-bold text-center">
                      {getLocalizedField(services[3], "title", lang)}
                    </span>
                    <span className="text-xl font-normal text-center">
                      {getLocalizedField(services[3], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Fifth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle5}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle55}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-[28px] font-bold text-center">
                      {getLocalizedField(services[4], "title", lang)}
                    </span>
                    <span className="text-xl font-normal text-center">
                      {getLocalizedField(services[4], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* Sixth Puzzle */}
            <PixelTransition
              firstContent={
                <img
                  src={puzzle6}
                  alt="service image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={puzzle66}
                    alt="service image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-6 absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[30px]">
                    <span className="text-[28px] font-bold text-center">
                      {getLocalizedField(services[5], "title", lang)}
                    </span>
                    <span className="text-xl font-normal text-center">
                      {getLocalizedField(services[5], "description", lang)}
                    </span>
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </>
        ) : null}
      </div>
    </>
  );
}
