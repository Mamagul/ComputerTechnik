import React from "react";
import services1 from "../images/services1.svg";
import services2 from "../images/services2.svg";
import services3 from "../images/services3.svg";
import services4 from "../images/services4.svg";
import serIcon1 from "../images/serIcon1.svg";
import serIcon2 from "../images/serIcon2.svg";
import serIcon3 from "../images/serIcon3.svg";
// import Aurora from "./Aurora";
import DotGrid from "./effects/DotGrid";

export default function Services() {
  const services = [
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
  return (
    // <div className="services bg-[#E7F1FC] relative">
    <div className="services bg-[#E7F1FC] py-20 px-28 relative z-20">
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
        <h2 className="text-4xl font-bold text-center">Services</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-[30px] pt-14">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col gap-5 group">
              <div className="img-container flex items-center justify-center rounded shadow-soft p-[1px] group-hover:p-0 group-hover:border group-hover:border-[#019ee2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="content-container flex justify-between rounded bg-white p-5 group-hover:bg-[#019ee2]">
                <div className="title-container flex flex-col gap-3 font-helvetica text-[#1F1F1F] w-[70%]">
                  <h3 className="text-2xl font-normal">{service.title}</h3>
                  <p className="text-base font-light">{service.description}</p>
                </div>
                <div className="icon-container flex items-center justify-center pr-6">
                  <img src={service.icon} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-900 mt-[85px] h-[85vh] flex justify-center items-center">
          <span className="text-white ">Video</span>
        </div>
      </div>
    </div>
  );
}
