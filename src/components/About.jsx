import "./About.css";

const About = ({ language }) => {
  const t = {
    de: {
      title: "Über ComputerTechnic",
      subtitle: "Ihr vertrauensvoller Partner für Computertechnik in Hamburg",
      description:
        "Seit über 5 Jahren sind wir Ihr zuverlässiger Partner für hochwertige Computertechnik. Von unserem Standort in Hamburg aus beliefern wir Kunden in ganz Europa.",
      features: [
        {
          icon: "🏆",
          title: "Über 5 Jahre Erfahrung",
          text: "Bewährte Expertise im Bereich Computertechnik und individuelle Beratung",
        },
        {
          icon: "🌍",
          title: "Europaweite Lieferung",
          text: "Schnelle und sichere Lieferung in alle EU-Länder und darüber hinaus",
        },
        {
          icon: "🤝",
          title: "B2B & B2C",
          text: "Individuelle Lösungen für Privatpersonen und Unternehmen",
        },
        {
          icon: "📋",
          title: "Garantie & Dokumentation",
          text: "Vollständige Dokumentation und Garantie für alle Produkte",
        },
      ],
    },
    en: {
      title: "About ComputerTechnic",
      subtitle: "Your trusted partner for computer technology in Hamburg",
      description:
        "For over 5 years, we have been your reliable partner for high-quality computer technology. From our location in Hamburg, we supply customers throughout Europe.",
      features: [
        {
          icon: "🏆",
          title: "Over 5 Years Experience",
          text: "Proven expertise in computer technology and individual consultation",
        },
        {
          icon: "🌍",
          title: "Europe-wide Delivery",
          text: "Fast and secure delivery to all EU countries and beyond",
        },
        {
          icon: "🤝",
          title: "B2B & B2C",
          text: "Individual solutions for private customers and companies",
        },
        {
          icon: "📋",
          title: "Warranty & Documentation",
          text: "Complete documentation and warranty for all products",
        },
      ],
    },
  };

  const content = t[language];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2>{content.title}</h2>
          <h3>{content.subtitle}</h3>
          <p>{content.description}</p>
        </div>

        <div className="about-features">
          {content.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">
              {language === "de" ? "Jahre Erfahrung" : "Years Experience"}
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">
              {language === "de" ? "Zufriedene Kunden" : "Happy Customers"}
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">27</span>
            <span className="stat-label">
              {language === "de" ? "EU-Länder" : "EU Countries"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
