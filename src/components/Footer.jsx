import "./Footer.css";

const Footer = ({ language }) => {
  const t = {
    de: {
      company: {
        name: "ComputerTechnic",
        tagline: "Ihr Partner für Computertechnik in Hamburg",
        description:
          "Professionelle Computertechnik, individuelle Konfigurationen und erstklassiger Service seit über 5 Jahren.",
      },
      links: {
        products: {
          title: "Produkte",
          items: [
            "Laptops",
            "Gaming PCs",
            "Workstations",
            "Monitore",
            "Zubehör",
          ],
        },
        services: {
          title: "Services",
          items: [
            "PC-Konfiguration",
            "Reparatur",
            "Upgrade",
            "B2B-Lösungen",
            "Support",
          ],
        },
        company: {
          title: "Unternehmen",
          items: [
            "Über uns",
            "Karriere",
            "Partner werden",
            "Kontakt",
            "Standort",
          ],
        },
        legal: {
          title: "Rechtliches",
          items: [
            "Impressum",
            "Datenschutz",
            "AGB",
            "Widerrufsrecht",
            "Cookie-Richtlinie",
          ],
        },
      },
      contact: {
        title: "Kontakt",
        address: "Musterstraße 123, 20095 Hamburg",
        phone: "+49 40 123 456 789",
        email: "info@computertechnic.de",
        hours: "Mo-Fr: 9:00-18:00, Sa: 10:00-16:00",
      },
      social: {
        title: "Folgen Sie uns",
        platforms: ["Facebook", "Instagram", "LinkedIn", "YouTube"],
      },
      legal: {
        copyright: "© 2024 ComputerTechnic Hamburg. Alle Rechte vorbehalten.",
        vat: "USt-IdNr.: DE123456789",
        registration: "Handelsregister: HRB 123456",
        ceo: "Geschäftsführer: Max Mustermann",
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Ihre E-Mail-Adresse",
        button: "Abonnieren",
        description: "Erhalten Sie Updates zu neuen Produkten und Angeboten",
      },
    },
    en: {
      company: {
        name: "ComputerTechnic",
        tagline: "Your Partner for Computer Technology in Hamburg",
        description:
          "Professional computer technology, individual configurations and first-class service for over 5 years.",
      },
      links: {
        products: {
          title: "Products",
          items: [
            "Laptops",
            "Gaming PCs",
            "Workstations",
            "Monitors",
            "Accessories",
          ],
        },
        services: {
          title: "Services",
          items: [
            "PC Configuration",
            "Repair",
            "Upgrade",
            "B2B Solutions",
            "Support",
          ],
        },
        company: {
          title: "Company",
          items: [
            "About Us",
            "Careers",
            "Become Partner",
            "Contact",
            "Location",
          ],
        },
        legal: {
          title: "Legal",
          items: [
            "Imprint",
            "Privacy Policy",
            "Terms",
            "Right of Withdrawal",
            "Cookie Policy",
          ],
        },
      },
      contact: {
        title: "Contact",
        address: "Musterstraße 123, 20095 Hamburg",
        phone: "+49 40 123 456 789",
        email: "info@computertechnic.de",
        hours: "Mon-Fri: 9:00-18:00, Sat: 10:00-16:00",
      },
      social: {
        title: "Follow Us",
        platforms: ["Facebook", "Instagram", "LinkedIn", "YouTube"],
      },
      legal: {
        copyright: "© 2024 ComputerTechnic Hamburg. All rights reserved.",
        vat: "VAT ID: DE123456789",
        registration: "Commercial Register: HRB 123456",
        ceo: "Managing Director: Max Mustermann",
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Your email address",
        button: "Subscribe",
        description: "Get updates on new products and offers",
      },
    },
  };

  const content = t[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <h3>{content.company.name}</h3>
              <span className="brand-location">Hamburg 🇩🇪</span>
            </div>
            <p className="brand-tagline">{content.company.tagline}</p>
            <p className="brand-description">{content.company.description}</p>

            <div className="newsletter">
              <h4>{content.newsletter.title}</h4>
              <p>{content.newsletter.description}</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder={content.newsletter.placeholder}
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  {content.newsletter.button}
                </button>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>{content.links.products.title}</h4>
              <ul>
                {content.links.products.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#catalog"
                      onClick={() => scrollToSection("catalog")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>{content.links.services.title}</h4>
              <ul>
                {content.links.services.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      onClick={() => scrollToSection("repair")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>{content.links.company.title}</h4>
              <ul>
                {content.links.company.items.map((item, index) => (
                  <li key={index}>
                    <a href="#about" onClick={() => scrollToSection("about")}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>{content.contact.title}</h4>
              <div className="contact-info">
                <p className="contact-item">📍 {content.contact.address}</p>
                <p className="contact-item">
                  📞 <a href="tel:+4940123456789">{content.contact.phone}</a>
                </p>
                <p className="contact-item">
                  📧{" "}
                  <a href="mailto:info@computertechnic.de">
                    {content.contact.email}
                  </a>
                </p>
                <p className="contact-item">🕒 {content.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h4>{content.social.title}</h4>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              📘
            </a>
            <a href="#" className="social-link instagram">
              📷
            </a>
            <a href="#" className="social-link linkedin">
              💼
            </a>
            <a href="#" className="social-link youtube">
              📺
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="legal-links">
              {content.links.legal.items.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </div>

            <div className="company-details">
              <p>{content.legal.copyright}</p>
              <p>
                {content.legal.vat} | {content.legal.registration}
              </p>
              <p>{content.legal.ceo}</p>
            </div>
          </div>

          <button className="back-to-top" onClick={scrollToTop}>
            ↑ {language === "de" ? "Nach oben" : "Back to top"}
          </button>
        </div>

        <div className="footer-certificates">
          <div className="certificates">
            <span className="cert">🇪🇺 EU</span>
            <span className="cert">🛡️ SSL</span>
            <span className="cert">📋 GDPR</span>
            <span className="cert">✅ Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
