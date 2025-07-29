import React from "react";
import about1 from "../images/about1.svg";
import about2 from "../images/about2.svg";
import about3 from "../images/about3.svg";
import dhl from "../images/dhl.svg";
import businessmen from "../images/businessmen.svg";
import individual from "../images/individual.svg";
import document from "../images/document.svg";

export default function About() {
  const cards = [
    {
      title: "Поставка по всей Европе",
      image: dhl,
    },
    {
      title: "Работаем с физ. и юр. лицами",
      image: businessmen,
    },
    {
      title: "Индивидуальный подход",
      image: individual,
    },
    {
      title: "Документы и гарантии",
      image: document,
    },
  ];

  return (
    <div className="aboutUs bg-[#E7F1FC] flex items-center justify-center gap-16 py-20 px-[155px]">
      <div className="images grid grid-cols-2 gap-[30px] w-[50%]">
        <div className="2img grid grid-rows-[344px_1fr] gap-[30px]">
          <div className="img1 rounded relative">
            <div
              className="absolute -top-8 -left-11 bg-[#FAF8F8] rounded w-[150px] h-[116px] flex flex-col items-center justify-center font-semibold"
              style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
            >
              <span className="font-PlayfairDisplay text-4xl text-black">
                200+
              </span>
              <span className="font-PlayfairDisplay text-xl text-black">
                компьютер
              </span>
            </div>
            <img
              src={about1}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="img2 rounded">
            <img
              src={about3}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="img3 flex items-center justify-center">
          <div className="rounded h-[390px] relative">
            <img
              src={about2}
              alt=""
              className="w-full h-full object-cover rounded"
            />
            <div
              className="absolute -bottom-20 left-18 bg-[#FAF8F8] rounded w-[150px] h-[116px] flex flex-col items-center justify-center font-semibold"
              style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.07)" }}
            >
              <span className="font-PlayfairDisplay text-4xl text-black">
                200+
              </span>
              <span className="font-PlayfairDisplay text-xl text-black">
                компьютер
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="textCards w-[50%] flex flex-col items-start gap-14">
        <div className="text flex flex-col items-start justify-center gap-6">
          <h2 className="font-PlayfairDisplay text-[40px] font-bold">
            About us
          </h2>
          <p className="font-helvetica text-base font-light">
            Мы занимаемся компьютерами более 5 лет и уже наизусть выучили их
            устройство. Наши специалисты с многолетним опытом проведут
            комплексную диагностику вашего ПК на высшем уровне: почистят,
            исправят неполадки в работе комплектующих и программ, устранят
            вирусы и ненужные файлы, проведут специальные тесты и предоставят
            вам лист отчета по окончании обслуживания.
          </p>
        </div>
        <div className="cards grid grid-cols-2 grid-rows-2 gap-10">
          {cards.map((item) => {
            return (
              <div className="flex flex-col justify-start items-center gap-[10px] bg-[#012645] rounded p-4 border border-[#019ee2]">
                <div className="h-16">
                  <img src={item.image} alt="" className="h-full" />
                </div>
                <span className="font-helvetica text-center text-xl font-normal text-[#E7F1FC]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
