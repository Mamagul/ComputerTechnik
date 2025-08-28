import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import getLocalizedField from "../utils/localizationHelpers";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import catalogBg from "../images/catalog.svg";
import Aurora from "./Aurora";
import Loader from "./Loader.jsx";

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
  const {
    data: description,
    loading: descriptionLoading,
    error: descriptionError,
  } = useFetch("description_main");

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

  category ? console.log(category) : null;
  detailsCard ? console.log(detailsCard) : null;

  if (detailsCardLoading || categoryLoading || descriptionLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        <Loader />
      </div>
    );
  }

  if (detailsCardError || categoryError || descriptionError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {/* {t("error")} */} Error
      </div>
    );
  }

  const filteredCards = detailsCard?.filter((card) => {
    if (!card.category || !Array.isArray(card.category)) {
      return false;
    }
    return card.category.some((cat) => cat.id === activeCategoryId);
  });

  // console.log("filteredCards", filteredCards);

  return (
    <section
      id="catalog"
      className="relative  min-h-[50vh] sm:min-h-[60vh] lg:min-h-[90vh]"
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#019ee2"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div
        className="catalog bg-cover bg-center bg-no-repeat min-h-[50vh] sm:min-h-[60vh] lg:min-h-[90vh] flex flex-col items-center justify-center pb-8 px-3 sm:px-10 lg:px-28 -mt-[148px] lg:-pt-[85px]"
        style={{ backgroundImage: `url(${catalogBg})` }}
      >
        <h2 className="font-PlayfairDisplay text-white text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold pb-1 lg:pb-5 mt-12 lg:mt-20">
          {t("catalog.title")}
        </h2>
        <p className="font-helvetica text-[#fde9e9] text-[10px] sm:text-base font-light pb-5 lg:pb-10 text-center max-w-2xl">
          {description && description.length > 0
            ? getLocalizedField(description[0], "catalog_des", lang)
            : null}
        </p>
        <div className="containerCategories container1 flex justify-between lg:justify-center gap-2 sm:gap-4 lg:gap-12 pb-5 lg:pb-10 ">
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
                  className={`font-helvetica w-[70px] sm:w-full text-[8px] sm:text-base md:text-lg font-light rounded px-[2px] sm:px-[10px] lg:px-4 py-0 sm:py-2 lg:py-2 transition-all duration-300 border-[1px] whitespace-normal sm:whitespace-nowrap ${
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
        <div className="containerCards grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {filteredCards && filteredCards.length > 0
            ? filteredCards.map((card) => (
                <Card
                  key={card.id}
                  image={card.image}
                  title={getLocalizedField(card, "name", lang)}
                  description={getLocalizedField(card, "description", lang)}
                  available={card.check_box}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
