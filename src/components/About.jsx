import React, { useState, useRef } from "react";
import DotGrid from "./effects/DotGrid.jsx";
import aboutUs from "../images/aboutUs.png";
import dhl from "../images/dhl.svg";
import businessmen from "../images/businessmen.svg";
import individual from "../images/individual.svg";
import document from "../images/document.svg";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import getLocalizedField from "../utils/localizationHelpers";
import Loader from "./Loader.jsx";
import { IoMdPlay } from "react-icons/io";
import {
  IoPauseSharp,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
} from "react-icons/io5";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch("about_us");
  const {
    data: video,
    loading: videoLoading,
    error: videoError,
  } = useFetch("main_video");

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * duration;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  if (videoLoading || detailsLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (videoError || detailsError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }
  const cards = [
    {
      title: t("about.icon1"),
      image: dhl,
    },
    {
      title: t("about.icon2"),
      image: businessmen,
    },
    {
      title: t("about.icon3"),
      image: individual,
    },
    {
      title: t("about.icon4"),
      image: document,
    },
  ];

  return (
    <section
      id="about"
      className="aboutUs flex flex-col items-center justify-center gap-4 lg:gap-16 py-5 lg:py-22 px-3 lg:px-11 xl:px-20 2xl:px-[155px] relative z-10"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#d9eaf2"
          activeColor="#116a96"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-20">
        <h2 className="font-PlayfairDisplay text-center text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold w-full">
          {t("about.title")}
        </h2>
        <div className="flex flex-col  w-full gap-4 lg:gap-8 mt-5 lg:mt-14">
          {details && details.length > 0 ? (
            <div className="images grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-3 lg:gap-[30px]">
              <div
                className="img rounded-[2px] lg:rounded h-[280px] sm:h-[430px] lg:h-[50vh] px-3
               lg:px-0"
              >
                <img
                  src={aboutUs}
                  alt=""
                  className="w-full h-full object-cover object-[center_30%] rounded-[2px] lg:rounded"
                />
              </div>
              <div className="text flex flex-col items-start justify-start gap-6 px-3 lg:px-0">
                <p className="font-helvetica text-xs sm:text-[14px] lg:text-xl font-light tracking-normal leading-4 sm:leading-5 lg:leading-8 text-justify">
                  {details && details.length > 0
                    ? getLocalizedField(details[0], "text", lang)
                    : null}
                  {details && details.length > 0
                    ? getLocalizedField(details[0], "text", lang)
                    : null}
                </p>
              </div>
            </div>
          ) : null}
          <div className="textCards w-full flex flex-col items-start gap-3 lg:gap-8 xl:gap-10">
            <div className="cards grid grid-cols-2 lg:grid-cols-4 justify-between gap-3 lg:gap-5 w-full">
              {cards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-center gap-[10px] bg-[#012645] rounded-[2px] lg:rounded p-4 border border-[#019ee2] transition-all duration-300 hover:border-[6px] hover:border-[#E7F1FC]  hover:shadow-[4px_4px_8.4px_8px_#00000033] hover:shadow-[#012645]/30 hover:scale-105"
                  >
                    <div className="h-9 lg:h-16">
                      <img src={item.image} alt="" className="h-full" />
                    </div>
                    <span className="font-helvetica text-center text-[10px] lg:text-xl font-normal text-[#E7F1FC]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {video && video.length > 0 ? (
          <div className=" mt-5 xl:mt-10 h-[35vh] sm:h-[45vh] md:h-[62vh] lg:h-[72vh] xl:h-[76vh] flex justify-center items-center relative rounded-lg overflow-hidden w-full">
            <video
              ref={videoRef}
              src={video[0].video}
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />
            {/* Video Controls Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                !isPlaying ? "opacity-100" : "opacity-0 hover:opacity-100"
              }`}
            >
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 lg:p-6 transition-all duration-200 backdrop-blur-sm z-20"
              >
                {isPlaying ? (
                  <IoPauseSharp className="w-8 h-8 lg:w-12 lg:h-12 text-black" />
                ) : (
                  <IoMdPlay className="w-8 h-8 lg:w-12 lg:h-12 text-black" />
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 lg:p-4">
              <div className="flex items-center gap-2 lg:gap-4">
                {/* Time Display */}
                <span className="text-white text-xs lg:text-sm font-helvetica">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                {/* Progress Bar */}
                <div
                  className="flex-1 bg-gray-600 rounded-full h-1 lg:h-2 cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="bg-[#019ee2] h-full rounded-full transition-all duration-200"
                    onClick={handleSeek}
                    style={{
                      width: `${
                        duration ? (currentTime / duration) * 100 : 0
                      }%`,
                    }}
                  />
                </div>
                {/* Volume/Settings placeholder */}
                {/* Volume Control */}
                <div className="flex gap-2 items-center">
                  <div className="relative flex items-center">
                    <button
                      className="text-white hover:text-[#019ee2] transition-colors"
                      onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                      onMouseEnter={() => setShowVolumeSlider(true)}
                    >
                      {volume > 0 ? (
                        <IoVolumeHighSharp className="w-4 h-4 lg:w-5 lg:h-5" />
                      ) : (
                        <IoVolumeMuteSharp className="w-4 h-4 lg:w-5 lg:h-5" />
                      )}
                    </button>

                    {/* Volume Slider */}
                    {showVolumeSlider && (
                      <div
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 rounded-lg p-2 flex flex-col items-center"
                        onMouseLeave={() => setShowVolumeSlider(false)}
                      >
                        <div className="text-white text-xs mb-2">
                          {Math.round(volume * 100)}%
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-1 h-20 bg-gray-600 rounded-lg appearance-none cursor-pointer volume-slider vertical-slider"
                          style={{
                            background: `linear-gradient(to top, #019ee2 0%, #019ee2 ${
                              volume * 100
                            }%, #6b7280 ${volume * 100}%, #6b7280 100%)`,
                            writingMode: "bt-lr",
                            WebkitAppearance: "slider-vertical",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* <button className="text-white hover:text-[#019ee2] transition-colors">
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 mt-5 lg:mt-[85px] h-[32vh] lg:h-[85vh] flex justify-center items-center rounded-lg">
            <div className="text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>No video available</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
