import "./Repair.css";

const Repair = ({ language }) => {
  const t = {
    de: {
      title: "Reparatur & Service",
      subtitle: "Professioneller Service für Privatpersonen und Unternehmen",
      description:
        "Schnelle Diagnose, faire Preise und zuverlässige Reparaturen. Wir kümmern uns um Ihre Computertechnik.",
      services: [
        {
          icon: "🔍",
          title: "Kostenlose Diagnose",
          description:
            "Wir analysieren Ihr Problem und erstellen einen kostenlosen Kostenvoranschlag",
          price: "Kostenlos",
        },
        {
          icon: "⚡",
          title: "Hardware-Reparatur",
          description:
            "Austausch defekter Komponenten, Mainboard-Reparatur, Löt-Service",
          price: "ab 45€",
        },
        {
          icon: "💻",
          title: "Software-Service",
          description:
            "Betriebssystem-Installation, Datenrettung, Virus-Entfernung",
          price: "ab 35€",
        },
        {
          icon: "⬆️",
          title: "Upgrade-Service",
          description: "RAM-Erweiterung, SSD-Einbau, Grafikkarten-Upgrade",
          price: "ab 25€",
        },
        {
          icon: "🏢",
          title: "Business-Support",
          description: "IT-Support für Büros, Wartungsverträge, Fernwartung",
          price: "auf Anfrage",
        },
        {
          icon: "🚚",
          title: "Abhol-Service",
          description:
            "Wir holen Ihre Geräte ab und bringen sie repariert zurück",
          price: "ab 15€",
        },
      ],
      cta: "Reparatur anfragen",
      warranty: "6 Monate Garantie auf alle Reparaturen",
      fastService: "Express-Service in 24h verfügbar",
    },
    en: {
      title: "Repair & Service",
      subtitle: "Professional service for individuals and businesses",
      description:
        "Fast diagnosis, fair prices and reliable repairs. We take care of your computer technology.",
      services: [
        {
          icon: "🔍",
          title: "Free Diagnosis",
          description:
            "We analyze your problem and provide a free cost estimate",
          price: "Free",
        },
        {
          icon: "⚡",
          title: "Hardware Repair",
          description:
            "Replacement of defective components, mainboard repair, soldering service",
          price: "from €45",
        },
        {
          icon: "💻",
          title: "Software Service",
          description:
            "Operating system installation, data recovery, virus removal",
          price: "from €35",
        },
        {
          icon: "⬆️",
          title: "Upgrade Service",
          description: "RAM expansion, SSD installation, graphics card upgrade",
          price: "from €25",
        },
        {
          icon: "🏢",
          title: "Business Support",
          description:
            "IT support for offices, maintenance contracts, remote maintenance",
          price: "on request",
        },
        {
          icon: "🚚",
          title: "Pickup Service",
          description: "We pick up your devices and bring them back repaired",
          price: "from €15",
        },
      ],
      cta: "Request Repair",
      warranty: "6 months warranty on all repairs",
      fastService: "Express service available in 24h",
    },
  };

  const content = t[language];

  return (
    <section className="repair" id="repair">
      <div className="container">
        <div className="repair-header">
          <h2>{content.title}</h2>
          <h3>{content.subtitle}</h3>
          <p>{content.description}</p>
        </div>

        <div className="repair-services">
          {content.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="repair-features">
          <div className="feature-badge">
            <span className="badge-icon">🛡️</span>
            <span>{content.warranty}</span>
          </div>
          <div className="feature-badge">
            <span className="badge-icon">⚡</span>
            <span>{content.fastService}</span>
          </div>
        </div>

        <div className="repair-cta">
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
      </div>
    </section>
  );
};

export default Repair;
