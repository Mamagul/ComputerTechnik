import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import google from "../images/google.svg";

export default function Reviews() {
  const { t } = useTranslation();
  const [expandedReviews, setExpandedReviews] = useState({});

  // Функция для расчета относительного времени
  const getRelativeTime = (dateString) => {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - reviewDate;

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return years === 1
        ? t("time.yearAgo")
        : t("time.yearsAgo", { count: years });
    } else if (months > 0) {
      return months === 1
        ? t("time.monthAgo")
        : t("time.monthsAgo", { count: months });
    } else if (days > 0) {
      return days === 1 ? t("time.dayAgo") : t("time.daysAgo", { count: days });
    } else {
      return t("time.today");
    }
  };

  // Функция для сокращения текста до 4 строк
  const getTruncatedText = (text, reviewId) => {
    const words = text.split(" ");
    const maxWords = 12; // примерно 4 строки

    if (words.length <= maxWords || expandedReviews[reviewId]) {
      return text;
    }

    return words.slice(0, maxWords).join(" ") + "...";
  };

  // Функция для переключения развернутого состояния
  const toggleExpanded = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Проверка нужна ли кнопка "Читать далее"
  const needsReadMore = (text) => {
    return text.split(" ").length > 12;
  };

  const reviews = [
    {
      id: 1,
      name: "Thomas",
      review:
        "More than GOOD! Top-of-the-line HP EliteBook at a great, unbeatable price! In excellent condition! Thank you",
      stars: 5,
      date: "2025-05-01",
    },
    {
      id: 2,
      name: "Jan Kiesling",
      review: "Top experiences. Perfect delivery! Gladly again.",
      stars: 5,
      date: "2025-04-01",
    },
    {
      id: 3,
      name: "a machti",
      review:
        "The company so computertechnik is very good, I recommend everyone who wanna do the electronics business. The whole team is sympa and helpful, I feel as at my own company. thank you all, special thanks to Serdar.",
      stars: 5,
      date: "2025-04-01",
    },
    {
      id: 4,
      name: "Saman Ebrahimi",
      review:
        "What fantastic service! I recently purchased an electrical appliance from this seller and was extremely satisfied from initial contact to delivery. The sales staff was extremely helpful, patient, and knowledgeable, and they walked me through all the options to ensure I selected the right device for my needs. The delivery was on time and the device was in perfect condition. I would recommend this seller to anyone looking for high quality electronics and excellent customer service. Thank you for a great experience!",
      stars: 5,
      date: "2024-08-01",
    },
  ];
  return (
    <section
      id="reviews"
      className="reviews container1 py-5 sm:py-10 lg:py-12 xl:py-[85px] flex flex-col gap-3 lg:gap-8"
    >
      <h2 className="font-PlayfairDisplay text-xl sm:text-2xl lg:text-4xl xl:text-[40px] font-bold text-center text-[#0f0e0e]">
        {t("reviews.title")}
      </h2>
      <div className="flex justify-start gap-2 lg:gap-8 overflow-auto ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-2 lg:p-5 flex flex-col justify-between gap-5 rounded min-w-[180px] sm:min-w-[210px] lg:min-w-[300px]"
          >
            <div className="starsReview flex flex-col gap-5">
              <div className="stars flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 lg:gap-2">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <IoStar
                      key={index}
                      className="text-yellow-500 text-sm lg:text-xl"
                    />
                  ))}
                </div>
                <div className="w-4 lg:w-[34px] h-4 lg:h-[34px]">
                  <img
                    src={google}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="review-text">
                <p className="leading-relaxed text-xs lg:text-base">
                  {getTruncatedText(review.review, review.id)}
                </p>
                {needsReadMore(review.review) && (
                  <a
                    href="https://computershophamburg.de/en#shopify-block-ASTUrZkxSUy94ajhrW__google_reviews_google_carousel_one_9gmWyX"
                    target="_blank"
                    rel="noopener noreferrer"
                    // onClick={() => toggleExpanded(review.id)}
                    className="text-[#019ee2] text-[8px] lg:text-sm font-medium mt-2 hover:underline transition-all duration-200"
                  >
                    {t("reviews.readMore")}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-5">
              <div className="image flex items-center justify-between bg-amber-400 rounded-full overflow-hidden w-10 h-10"></div>

              <div className="flex flex-col gap-1">
                <h3 className="font-helvetica text-[10px] lg:text-sm font-bold text-black">
                  {review.name}
                </h3>
                <p className="font-helvetica text-[8px] lg:text-xs font-light text-[#019ee2]">
                  {getRelativeTime(review.date)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* <IoStar /> */}
      </div>
    </section>
  );
}
