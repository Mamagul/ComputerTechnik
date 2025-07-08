import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import catalogBg from "../images/catalog.svg";
import desktop from "../images/card.png";
import Aurora from "./Aurora";

export default function Catalog() {
  const { t } = useTranslation();

  const categories = [
    {
      name: "Ноутбуки",
      image: "../images/catalog.svg",
    },
    {
      name: "Игровые ПК",
      image: "../images/catalog.svg",
    },
    {
      name: "Сборки под заказ",
      image: "../images/catalog.svg",
    },
    {
      name: "Мониторы и аксессуары",
      image: "../images/catalog.svg",
    },
  ];

  const dataCards = [
    {
      image: desktop,
      title: "Apple iMac 24",
      description: "I5/16 GB RAM SSD 512 GB/ GTX 150 Ti",
      available: "В наличии",
    },
    {
      image: desktop,
      title: "Apple iMac 24",
      description: "I5/16 GB RAM SSD 512 GB/ GTX 150 Ti",
      available: "Нет в наличии",
    },
    {
      image: desktop,
      title: "Apple iMac 24",
      description: "I5/16 GB RAM SSD 512 GB/ GTX 150 Ti",
      available: "Нет в наличии",
    },
    {
      image: desktop,
      title: "Apple iMac 24",
      description: "I5/16 GB RAM SSD 512 GB/ GTX 150 Ti",
      available: "В наличии",
    },
  ];
  return (
    <div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#019ee2"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <div
        className="catalog bg-cover bg-center bg-no-repeat min-h-[90vh] flex flex-col items-center justify-start pb-[85px] px-[110px] -mt-[85px]"
        style={{ backgroundImage: `url(${catalogBg})` }}
      >
        <h2 className="font-PlayfairDisplay text-white text-4xl font-bold pb-[20px]">
          {t("catalog.title")}
        </h2>
        <p className="font-helvetica text-[#fde9e9] text-base font-light pb-[40px]">
          {t("catalog.description")}
        </p>
        <div className="containerCategories flex gap-[50px] pb-[70px]">
          {categories.map((category) => (
            <button className="font-helvetica bg-none hover:bg-[#e7f1fc] hover:text-[#263238] transition-all duration-300 border-[1px] border-[#fffefe] hover:border-[#263238] text-[#fffefe] rounded p-[10px] text-xl font-light">
              {category.name}
            </button>
          ))}
        </div>
        <div className="containerCards flex gap-[50px]">
          {dataCards.map((card) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              available={card.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
