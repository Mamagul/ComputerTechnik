import React, { useState, useRef } from "react";
import services1 from "../images/services1.svg";
import services2 from "../images/services2.svg";
import services3 from "../images/services3.svg";
import services4 from "../images/services4.svg";
import serIcon1 from "../images/serIcon1.svg";
import serIcon2 from "../images/serIcon2.svg";
import serIcon3 from "../images/serIcon3.svg";
// import Aurora from "./Aurora";
import DotGrid from "./effects/DotGrid";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers";
import { IoMdPlay } from "react-icons/io";
import {
  IoPauseSharp,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
} from "react-icons/io5";

export default function Services() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useFetch("service");
  const {
    data: video,
    loading: videoLoading,
    error: videoError,
  } = useFetch("main_video");
  // video ? console.log(video) : null;
  const serviceList = [
    {
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: services1,
      icon: serIcon1,
    },
    {
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: services2,
      icon: serIcon2,
    },
    {
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: services3,
      icon: serIcon3,
    },
    {
      title: "Service 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: services4,
      icon: serIcon1,
    },
  ];
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

  const toggleMute = () => {
    if (videoRef.current) {
      if (volume > 0) {
        setVolume(0);
        videoRef.current.volume = 0;
      } else {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return (
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
      );
    } else if (volume < 0.5) {
      return (
        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
      );
    } else {
      return (
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      );
    }
  };

  if (videoLoading || servicesLoading) {
    return (
      <section className="services bg-[#E7F1FC] py-5 lg:py-20 px-3 lg:px-28 relative z-20">
        <div className="flex justify-center items-center h-64">
          <span className="text-gray-600">Loading...</span>
        </div>
      </section>
    );
  }

  if (videoError || servicesError) {
    console.error("Error loading data:", videoError || servicesError);
  }

  // services ? console.log(services) : null;

  const getServiceIcon = (index) => {
    return serviceList[index]?.icon || serIcon1;
  };

  return (
    // <div className="services bg-[#E7F1FC] relative">
    <section
      id="services"
      className="services bg-[#E7F1FC] py-5 lg:py-10 xl:py-20 px-3 sm:px-10 xl:px-28 relative z-20"
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
          activeColor="#116a95"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-20">
        <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4 lg:gap-[30px] pt-3 sm:pt-6 lg:pt-14">
          {services && services.length > 3
            ? services.slice(0, 4).map((service, index) => (
                <div
                  key={service.id}
                  className="service-card flex flex-col gap-1 lg:gap-5 group h-full"
                >
                  <div className="img-container flex items-center justify-center rounded shadow-soft p-[1px] group-hover:p-0 group-hover:border group-hover:border-[#019ee2]">
                    <img
                      src={service.image}
                      alt={getLocalizedField(service, "title", lang)}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="content-container flex justify-between rounded bg-white p-2 lg:p-5 group-hover:bg-[#019ee2] h-full">
                    <div className="title-container flex flex-col gap-1 lg:gap-3 font-helvetica text-[#1F1F1F] w-[70%]">
                      <h3 className="text-[14px] lg:text-xl xl:text-2xl font-normal">
                        {getLocalizedField(service, "title", lang)}
                      </h3>
                      <p className="text-[10px] lg:text-[14px] xl:text-base font-light">
                        {getLocalizedField(service, "description", lang)}
                      </p>
                    </div>
                    <div className="icon-container flex items-center justify-center pr-0 lg:pr-2 xl:pr-6 scale-[0.6] lg:scale-[0.9]">
                      <img
                        src={getServiceIcon(index)}
                        alt={getLocalizedField(service, "title", lang)}
                      />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        {video && video.length > 0 ? (
          <div className="bg-blue-900 mt-5 lg:mt-[50px] xl:mt-[85px] h-[25vh] sm:h-[32vh] lg:h-[60vh] xl:h-[75vh] flex justify-center items-center relative rounded-lg overflow-hidden">
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
