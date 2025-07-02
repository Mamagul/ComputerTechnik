import { useState } from "react";
import "./Header.css";

const Header = ({ language, setLanguage, scrolled, translations }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>ComputerTechnic</h2>
            <span>Hamburg</span>
          </div>

          <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  {translations.header.about}
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => scrollToSection("catalog")}>
                  {translations.header.catalog}
                </a>
              </li>
              <li>
                <a
                  href="#custom-build"
                  onClick={() => scrollToSection("custom-build")}
                >
                  {translations.header.customBuild}
                </a>
              </li>
              <li>
                <a href="#repair" onClick={() => scrollToSection("repair")}>
                  {translations.header.repair}
                </a>
              </li>
              <li>
                <a href="#b2b" onClick={() => scrollToSection("b2b")}>
                  {translations.header.b2b}
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={() => scrollToSection("reviews")}>
                  {translations.header.reviews}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  {translations.header.contact}
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="language-switcher">
              <button
                className={language === "de" ? "active" : ""}
                onClick={() => setLanguage("de")}
              >
                DE
              </button>
              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>

            <div className="contact-info">
              <a href="tel:+4940123456789" className="phone">
                +49 40 123 456 789
              </a>
              <a href="mailto:info@computertechnic.de" className="email">
                info@computertechnic.de
              </a>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
