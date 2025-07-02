import "./B2B.css";

const B2B = ({ language }) => {
  const t = {
    de: {
      title: "Großhandel & B2B",
      subtitle: "Professionelle Lösungen für Unternehmen und Wiederverkäufer",
      description:
        "Attraktive Konditionen für Großabnehmer, Distributoren und Geschäftskunden. Europaweite Lieferung mit allen erforderlichen Dokumenten.",
      benefits: [
        {
          icon: "💰",
          title: "Großhandelspreise",
          description:
            "Gestaffelte Preise ab 10 Stück - je mehr Sie bestellen, desto günstiger wird es",
        },
        {
          icon: "🌍",
          title: "Europaweite Lieferung",
          description:
            "Zuverlässige Lieferung in alle EU-Länder und darüber hinaus",
        },
        {
          icon: "📋",
          title: "Komplette Dokumentation",
          description:
            "Alle Zoll- und Versanddokumente, Rechnungen, Zertifikate",
        },
        {
          icon: "🤝",
          title: "Persönlicher Ansprechpartner",
          description: "Dedizierte Betreuung für alle Großkunden und Partner",
        },
        {
          icon: "📦",
          title: "Flexible Verpackung",
          description:
            "Neutral oder mit Ihrem Branding - ganz nach Ihren Wünschen",
        },
        {
          icon: "⚡",
          title: "Schnelle Abwicklung",
          description: "Express-Bearbeitung für dringende B2B-Bestellungen",
        },
      ],
      partnerships: [
        {
          type: "Distributor",
          description: "Werden Sie unser Distributor in Ihrem Land",
          icon: "🏢",
        },
        {
          type: "Reseller",
          description: "Erweitern Sie Ihr Sortiment mit unseren Produkten",
          icon: "🛒",
        },
        {
          type: "System Integrator",
          description: "Komplette Systeme für Ihre Projekte",
          icon: "🔧",
        },
      ],
      cta: "B2B-Angebot anfordern",
      contactB2B: "B2B-Kontakt: b2b@computertechnic.de",
    },
    en: {
      title: "Wholesale & B2B",
      subtitle: "Professional solutions for companies and resellers",
      description:
        "Attractive conditions for bulk buyers, distributors and business customers. Europe-wide delivery with all required documents.",
      benefits: [
        {
          icon: "💰",
          title: "Wholesale Prices",
          description:
            "Tiered prices from 10 pieces - the more you order, the cheaper it gets",
        },
        {
          icon: "🌍",
          title: "Europe-wide Delivery",
          description: "Reliable delivery to all EU countries and beyond",
        },
        {
          icon: "📋",
          title: "Complete Documentation",
          description:
            "All customs and shipping documents, invoices, certificates",
        },
        {
          icon: "🤝",
          title: "Personal Contact Person",
          description: "Dedicated support for all major customers and partners",
        },
        {
          icon: "📦",
          title: "Flexible Packaging",
          description:
            "Neutral or with your branding - according to your wishes",
        },
        {
          icon: "⚡",
          title: "Fast Processing",
          description: "Express processing for urgent B2B orders",
        },
      ],
      partnerships: [
        {
          type: "Distributor",
          description: "Become our distributor in your country",
          icon: "🏢",
        },
        {
          type: "Reseller",
          description: "Expand your range with our products",
          icon: "🛒",
        },
        {
          type: "System Integrator",
          description: "Complete systems for your projects",
          icon: "🔧",
        },
      ],
      cta: "Request B2B Offer",
      contactB2B: "B2B Contact: b2b@computertechnic.de",
    },
  };

  const content = t[language];

  return (
    <section className="b2b" id="b2b">
      <div className="container">
        <div className="b2b-header">
          <h2>{content.title}</h2>
          <h3>{content.subtitle}</h3>
          <p>{content.description}</p>
        </div>

        <div className="b2b-benefits">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partnership-types">
          <h3>
            {language === "de" ? "Partnerschaftsmodelle" : "Partnership Models"}
          </h3>
          <div className="partnerships">
            {content.partnerships.map((partnership, index) => (
              <div key={index} className="partnership-card">
                <div className="partnership-icon">{partnership.icon}</div>
                <h4>{partnership.type}</h4>
                <p>{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-contact">
          <p className="b2b-contact-info">{content.contactB2B}</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {content.cta}
          </button>
        </div>

        <div className="price-tiers">
          <h3>{language === "de" ? "Preisstaffeln" : "Price Tiers"}</h3>
          <div className="tiers">
            <div className="tier">
              <span className="tier-quantity">
                10-49 {language === "de" ? "Stück" : "pcs"}
              </span>
              <span className="tier-discount">
                5% {language === "de" ? "Rabatt" : "Discount"}
              </span>
            </div>
            <div className="tier">
              <span className="tier-quantity">
                50-99 {language === "de" ? "Stück" : "pcs"}
              </span>
              <span className="tier-discount">
                10% {language === "de" ? "Rabatt" : "Discount"}
              </span>
            </div>
            <div className="tier">
              <span className="tier-quantity">
                100+ {language === "de" ? "Stück" : "pcs"}
              </span>
              <span className="tier-discount">
                15% {language === "de" ? "Rabatt" : "Discount"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B;
