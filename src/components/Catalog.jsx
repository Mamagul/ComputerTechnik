import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import catalogBg from "../images/catalog.svg";
import desktop from "../images/card.png";
import Aurora from "./Aurora";

export default function Catalog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    data: category,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch("category");
  const {
    data: detailsCard,
    loading: detailsCardLoading,
    error: detailsCardError,
  } = useFetch("card_list");

  category ? console.log(category) : null;
  detailsCard ? console.log(detailsCard) : null;
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  useEffect(() => {
    if (category && category.length > 0 && !activeCategory) {
      setActiveCategory(getLocalizedField(category[0], "name", lang));
      setActiveCategoryId(category[0].id);
    }
  }, [category, activeCategory, lang]);

  // details ? console.log(details[0].h_text_en) : null;
  // details ? console.log(details[0].h_text_ru) : null;

  if (detailsCardLoading && categoryLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("loading")} */} Loading
      </div>
    );
  }

  if (detailsCardError && categoryError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  const filteredCards = detailsCard?.filter(
    (card) => card.category.id === activeCategoryId
  );

  console.log("filteredCards", filteredCards);

  return (
    <section className="relative  min-h-screen">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#019ee2"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div
        className="catalog bg-cover bg-center bg-no-repeat min-h-[90vh] flex flex-col items-center justify-start pb-8 px-3 sm:px-8 md:px-16 lg:px-28 -mt-[148px] lg:-pt-[85px]"
        style={{ backgroundImage: `url(${catalogBg})` }}
      >
        <h2 className="font-PlayfairDisplay text-white text-xl sm:text-3xl md:text-4xl font-bold pb-1 lg:pb-5 mt-12 lg:mt-20">
          {t("catalog.title")}
        </h2>
        <p className="font-helvetica text-[#fde9e9] text-[10px] sm:text-base font-light pb-5 lg:pb-10 text-center max-w-2xl">
          {t("catalog.description")}
        </p>
        <div className="containerCategories flex justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-12 pb-5 lg:pb-10">
          {category && category.length > 0
            ? category.slice(0, 4).map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(
                      getLocalizedField(category, "name", lang)
                    );
                    setActiveCategoryId(category.id);
                  }}
                  className={`font-helvetica w-[70px] lg:w-full text-[8px] sm:text-base md:text-lg font-light rounded px-0 lg:px-4 py-0 lg:py-2 transition-all duration-300 border-[1px] ${
                    activeCategory === getLocalizedField(category, "name", lang)
                      ? "bg-[#e7f1fc] text-[#263238] border-[#263238]"
                      : "bg-transparent text-[#fffefe] border-[#fffefe] hover:bg-[#e7f1fc] hover:text-[#263238] hover:border-[#263238]"
                  }`}
                >
                  {getLocalizedField(category, "name", lang)}
                </button>
              ))
            : null}
        </div>
        <div className="containerCards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {filteredCards.map((card) => (
            <Card
              key={card.title + card.category}
              image={card.image}
              title={getLocalizedField(card, "name", lang)}
              description={getLocalizedField(card, "description", lang)}
              available={card.check_box}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
