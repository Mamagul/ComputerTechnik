import React from "react";
import puzzle1 from "../images/puzzle1.png";
import puzzle2 from "../images/puzzle2.png";
import puzzle3 from "../images/puzzle3.png";
import puzzle4 from "../images/puzzle4.png";
import puzzlePhone3 from "../images/puzzlePhone3.svg";
import puzzlePhone4 from "../images/puzzlePhone4.svg";
import puzzle5 from "../images/puzzle5.png";
import puzzle6 from "../images/puzzle6.png";
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
                  // style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle1})`,
                      WebkitMaskImage: `url(${puzzle1})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
                  // style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle2})`,
                      WebkitMaskImage: `url(${puzzle2})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
                    // width: "100%",
                    // height: "100%",
                    // objectFit: "cover",
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle3})`,
                      WebkitMaskImage: `url(${puzzle3})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
              firstContent={<img src={puzzle4} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle4})`,
                      WebkitMaskImage: `url(${puzzle4})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
              firstContent={<img src={puzzle5} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle5})`,
                      WebkitMaskImage: `url(${puzzle5})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
              firstContent={<img src={puzzle6} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle6})`,
                      WebkitMaskImage: `url(${puzzle6})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
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
              firstContent={<img src={puzzle1} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle1})`,
                      WebkitMaskImage: `url(${puzzle1})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[0], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
              firstContent={<img src={puzzle2} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle2})`,
                      WebkitMaskImage: `url(${puzzle2})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[1], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
                  src={puzzlePhone4}
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzlePhone4})`,
                      WebkitMaskImage: `url(${puzzlePhone4})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[2], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
                  src={puzzlePhone3}
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzlePhone3})`,
                      WebkitMaskImage: `url(${puzzlePhone3})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[3], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
              firstContent={<img src={puzzle5} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle5})`,
                      WebkitMaskImage: `url(${puzzle5})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[4], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
              firstContent={<img src={puzzle6} alt="service image" />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#E7F1FC",
                      maskImage: `url(${puzzle6})`,
                      WebkitMaskImage: `url(${puzzle6})`,
                      maskSize: "cover",
                      WebkitMaskSize: "cover",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      position: "relative",
                      zIndex: 10,
                    }}
                  />
                  <p className="flex flex-col items-center justify-center gap-[10px] absolute top-0 left-0 right-0 bottom-0 z-15 text-[#012645] px-[10px]">
                    <span className="text-[14px] font-bold text-center leading-4">
                      {getLocalizedField(services[5], "title", lang)}
                    </span>
                    <span className="text-[10px] font-normal text-center leading-3">
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
