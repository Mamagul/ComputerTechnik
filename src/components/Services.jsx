import React, { useState, useRef } from "react";
import services1 from "../images/services1.svg";
import services2 from "../images/services2.svg";
import services3 from "../images/services3.svg";
import services4 from "../images/services4.svg";
import serIcon1 from "../images/serIcon1.svg";
import serIcon2 from "../images/serIcon2.svg";
import serIcon3 from "../images/serIcon3.svg";
import serIcon4 from "../images/serIcon4.svg";
import DotGrid from "./effects/DotGrid.jsx";
import useFetch from "../hooks/useFetch.js";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers";
// import { IoMdPlay } from "react-icons/io";
// import {
//   IoPauseSharp,
//   IoVolumeHighSharp,
//   IoVolumeMuteSharp,
// } from "react-icons/io5";
import Loader from "./Loader.jsx";

export default function Services() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [volume, setVolume] = useState(1);
  // const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  // const videoRef = useRef(null);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useFetch("service");
  // const {
  //   data: video,
  //   loading: videoLoading,
  //   error: videoError,
  // } = useFetch("main_video");
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
      icon: serIcon4,
    },
  ];
  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const handleTimeUpdate = () => {
  //   if (videoRef.current) {
  //     setCurrentTime(videoRef.current.currentTime);
  //   }
  // };

  // const handleLoadedMetadata = () => {
  //   if (videoRef.current) {
  //     setDuration(videoRef.current.duration);
  //   }
  // };

  // const handleSeek = (e) => {
  //   if (videoRef.current) {
  //     const rect = e.currentTarget.getBoundingClientRect();
  //     const pos = (e.clientX - rect.left) / rect.width;
  //     videoRef.current.currentTime = pos * duration;
  //   }
  // };

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  // };

  // const handleVolumeChange = (e) => {
  //   const newVolume = parseFloat(e.target.value);
  //   setVolume(newVolume);
  //   if (videoRef.current) {
  //     videoRef.current.volume = newVolume;
  //   }
  // };

  if (videoLoading || servicesLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (videoError || servicesError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4 lg:gap-[30px] pt-3 sm:pt-6 lg:pt-14">
          {services && services.length > 3
            ? services.slice(0, 4).map((service, index) => (
                <div
                  key={service.id}
                  className="service-card flex flex-col gap-1 lg:gap-5 group h-full"
                >
                  <div className="img-container flex items-center justify-center rounded-[2px] lg:rounded shadow-soft p-[1px] group-hover:p-0 group-hover:border group-hover:border-[#019ee2]">
                    <img
                      src={service.image}
                      alt={getLocalizedField(service, "title", lang)}
                      className="w-full h-full object-cover rounded-[2px] lg:rounded "
                    />
                  </div>
                  <div className="content-container flex justify-between rounded-[2px] lg:rounded bg-white p-2 lg:p-5 group-hover:bg-[#019ee2] h-full">
                    <div className="title-container flex flex-col justify-start font-helvetica text-[#1F1F1F] w-[70%]">
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
        </div> */}
      </div>
    </section>
  );
}
