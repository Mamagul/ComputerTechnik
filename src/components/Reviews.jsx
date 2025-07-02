import { useState } from "react";
import "./Reviews.css";

const Reviews = ({ language }) => {
  const [activeReview, setActiveReview] = useState(0);

  const t = {
    de: {
      title: "Kundenbewertungen",
      subtitle: "Was unsere Kunden über uns sagen",
      reviews: [
        {
          name: "Michael Schmidt",
          company: "Freelancer",
          rating: 5,
          text: "Perfekte Beratung und schnelle Lieferung nach Österreich. Mein Gaming-PC läuft einwandfrei!",
          location: "Wien, Österreich",
        },
        {
          name: "Sarah Johnson",
          company: "StartupTech GmbH",
          rating: 5,
          text: "Great B2B service! Fast delivery to Netherlands, all documentation perfect. Highly recommended!",
          location: "Amsterdam, Netherlands",
        },
        {
          name: "Marco Rossi",
          company: "IT Solutions",
          rating: 5,
          text: "Ottimo servizio per la riparazione. Diagnosi gratuita e prezzi onesti. Continuerò a lavorare con loro.",
          location: "Milano, Italien",
        },
        {
          name: "Anna Kowalski",
          company: "Grafik Design Studio",
          rating: 5,
          text: "Profesjonalna obsługa i szybka dostawa do Polski. Workstation działa idealnie!",
          location: "Krakau, Polen",
        },
      ],
      partners: [
        { name: "TechPartner GmbH", logo: "🏢" },
        { name: "EU Distributors", logo: "🌍" },
        { name: "Gaming Solutions", logo: "🎮" },
        { name: "Business Systems", logo: "💼" },
      ],
      caseStudies: [
        {
          title: "Gaming Café Prag",
          description: "50 Gaming-PCs für neues eSports-Center",
          result: "Komplette Ausstattung in 2 Wochen",
        },
        {
          title: "IT-Firma Wien",
          description: "Workstations für 30 Entwickler",
          result: "15% Kosteneinsparung durch Bulk-Order",
        },
      ],
    },
    en: {
      title: "Customer Reviews",
      subtitle: "What our customers say about us",
      reviews: [
        {
          name: "Michael Schmidt",
          company: "Freelancer",
          rating: 5,
          text: "Perfect advice and fast delivery to Austria. My gaming PC works flawlessly!",
          location: "Vienna, Austria",
        },
        {
          name: "Sarah Johnson",
          company: "StartupTech GmbH",
          rating: 5,
          text: "Great B2B service! Fast delivery to Netherlands, all documentation perfect. Highly recommended!",
          location: "Amsterdam, Netherlands",
        },
        {
          name: "Marco Rossi",
          company: "IT Solutions",
          rating: 5,
          text: "Excellent repair service. Free diagnosis and fair prices. Will continue working with them.",
          location: "Milan, Italy",
        },
        {
          name: "Anna Kowalski",
          company: "Graphic Design Studio",
          rating: 5,
          text: "Professional service and fast delivery to Poland. Workstation works perfectly!",
          location: "Krakow, Poland",
        },
      ],
      partners: [
        { name: "TechPartner GmbH", logo: "🏢" },
        { name: "EU Distributors", logo: "🌍" },
        { name: "Gaming Solutions", logo: "🎮" },
        { name: "Business Systems", logo: "💼" },
      ],
      caseStudies: [
        {
          title: "Gaming Café Prague",
          description: "50 Gaming PCs for new eSports center",
          result: "Complete setup in 2 weeks",
        },
        {
          title: "IT Company Vienna",
          description: "Workstations for 30 developers",
          result: "15% cost savings through bulk order",
        },
      ],
    },
  };

  const content = t[language];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % content.reviews.length);
  };

  const prevReview = () => {
    setActiveReview(
      (prev) => (prev - 1 + content.reviews.length) % content.reviews.length
    );
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className="reviews-carousel">
          <button className="carousel-btn prev" onClick={prevReview}>
            ‹
          </button>
          <div className="review-card active">
            <div className="review-rating">
              {[...Array(content.reviews[activeReview].rating)].map((_, i) => (
                <span key={i} className="star">
                  ⭐
                </span>
              ))}
            </div>
            <p className="review-text">
              "{content.reviews[activeReview].text}"
            </p>
            <div className="review-author">
              <strong>{content.reviews[activeReview].name}</strong>
              <span>{content.reviews[activeReview].company}</span>
              <span className="location">
                {content.reviews[activeReview].location}
              </span>
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextReview}>
            ›
          </button>
        </div>

        <div className="review-indicators">
          {content.reviews.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeReview ? "active" : ""}`}
              onClick={() => setActiveReview(index)}
            />
          ))}
        </div>

        <div className="case-studies">
          <h3>
            {language === "de" ? "Erfolgsgeschichten" : "Success Stories"}
          </h3>
          <div className="cases">
            {content.caseStudies.map((caseStudy, index) => (
              <div key={index} className="case-card">
                <h4>{caseStudy.title}</h4>
                <p>{caseStudy.description}</p>
                <div className="case-result">{caseStudy.result}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners">
          <h3>{language === "de" ? "Unsere Partner" : "Our Partners"}</h3>
          <div className="partner-logos">
            {content.partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <span className="logo">{partner.logo}</span>
                <span className="name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
