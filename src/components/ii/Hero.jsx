import "./Hero.css";

const Hero = ({ translations, language }) => {
  const t = {
    de: {
      title: "Laptops und Gaming-PCs im Einzel- und Großhandel",
      subtitle: "Aus Hamburg in die ganze Welt!",
      description:
        "Professionelle Computertechnik, individuelle Konfigurationen und erstklassiger Service seit über 5 Jahren. Wir liefern in ganz Europa.",
      cta1: "Preisliste anfordern",
      cta2: "PC konfigurieren",
      features: [
        "✓ Über 5 Jahre Erfahrung",
        "✓ Lieferung europaweit",
        "✓ Individuelle Beratung",
        "✓ Premium Qualität",
      ],
    },
    en: {
      title: "Laptops and Gaming PCs Retail and Wholesale",
      subtitle: "From Hamburg to the World!",
      description:
        "Professional computer technology, individual configurations and first-class service for over 5 years. We deliver throughout Europe.",
      cta1: "Get Price List",
      cta2: "Configure PC",
      features: [
        "✓ Over 5 years experience",
        "✓ Europe-wide delivery",
        "✓ Individual consultation",
        "✓ Premium Quality",
      ],
    },
  };

  const content = t[language];

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{content.title}</h1>
            <h2>{content.subtitle}</h2>
            <p>{content.description}</p>

            <div className="hero-features">
              {content.features.map((feature, index) => (
                <span key={index} className="feature-item">
                  {feature}
                </span>
              ))}
            </div>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {content.cta1}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("custom-build")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {content.cta2}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <div className="computer-illustration">
                <div className="laptop"></div>
                <div className="desktop"></div>
                <div className="components"></div>
              </div>
              <div className="flag-badge">
                <span className="flag">🇩🇪</span>
                <span>Made in Germany</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg-elements">
        <div className="circuit-pattern"></div>
        <div className="floating-icons">
          <span className="icon">💻</span>
          <span className="icon">🖥️</span>
          <span className="icon">⚡</span>
          <span className="icon">🚚</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
