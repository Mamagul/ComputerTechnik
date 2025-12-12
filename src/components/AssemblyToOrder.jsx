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
import getLocalizedField from "../utils/localizationHelpers";
import Loader from "./Loader.jsx";
import { IoMdPlay } from "react-icons/io";
import {
  IoPauseSharp,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
} from "react-icons/io5";

export default function AssemblyToOrder() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedOption, setSelectedOption] = useState(1);
  const [email, setEmail] = useState("");
  const { sendCatalogRequest, isLoading, error, success } = useCatalogRequest();

  const {
    data: video,
    loading: videoLoading,
    error: videoError,
  } = useFetch("main_video");
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
      title_en: "Professional PC Build",
      title_de: "Professionelle PC-Montage",
      description_en:
        "High-quality PC assembly and individual configuration by our company’s engineers. Modding and full customization of system units. Cable management and complete PC personalization.",
      description_de:
        "Hochwertige PC-Montage und individuelle Konfiguration durch die Ingenieure unseres Unternehmens. Modding und vollständige Individualisierung von Systemgehäusen. Kabelmanagement und vollständige Personalisierung des PCs.",
      image: assemblyIcon1,
    },
    {
      id: 2,
      title_en: "PC Stress Testing",
      title_de: "PC-Stresstest",
      description_en:
        "Every PC undergoes a 4-hour stress test with professional software and the latest AAA games – ensuring rock-solid stability and guaranteed performance",
      description_de:
        "Jeder PC durchläuft einen 4-stündigen Stresstest mit professioneller Software und den neuesten AAA-Spielen – für absolute Stabilität und garantierte Leistung.",
      image: assemblyIcon2,
    },
    {
      id: 3,
      title_en: "Pre-Built PC Delivery",
      title_de: "Lieferung fertiger PCs",
      description_en:
        "We deliver your pre-built PC to any part of the country. You will receive your computer safely and in perfect condition.",
      description_de:
        "Wir liefern Ihren fertig aufgebauten PC in jeden Teil des Landes. Sie erhalten Ihren Computer unversehrt und in einwandfreiem Zustand.",
      image: assemblyIcon3,
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

  if (videoLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (videoError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }
  if (descriptionLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (descriptionError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  return (
    <section
      id="customBuild"
      className="assemblytoOrder h-fit flex flex-col justify-center items-center gap-4 lg:gap-14 px-3 py-5 relative z-10 overflow-hidden"
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
