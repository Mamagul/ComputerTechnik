import React from "react";
import { IoStar } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();
  const reviews = [
    {
      id: 1,
      name: "Thomas",
      review:
        "More than GOOD! Top-of-the-line HP EliteBook at a great, unbeatable price! In excellent condition! Thank you",
      stars: 5,
      date: "2025-01-01",
    },
    {
      id: 2,
      name: "Jan Kiesling",
      review: "Top experiences. Perfect delivery! Gladly again.",
      stars: 5,
    },
    {
      id: 3,
      name: "John Doe",
      review: "This is a review",
      stars: 5,
    },
    {
      id: 4,
      name: "John Doe",
      review: "This is a review",
      stars: 5,
    },
  ];
  return (
    <div>
      <h2>{t("reviews.title")}</h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="flex items-center gap-2">
              {Array.from({ length: review.stars }).map((_, index) => (
                <IoStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}

        {/* <IoStar /> */}
      </div>
    </div>
  );
}
