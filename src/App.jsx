import { useState, useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import CustomBuild from "./components/CustomBuild";
import Repair from "./components/Repair";
import B2B from "./components/B2B";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Language context
const translations = {
  de: {
    header: {
      about: "Über uns",
      catalog: "Katalog",
      customBuild: "Konfigurator",
      repair: "Reparatur",
      b2b: "Großhandel",
      reviews: "Bewertungen",
      contact: "Kontakt",
    },
    hero: {
      title: "Laptops und Gaming-PCs im Einzel- und Großhandel",
      subtitle: "Aus Hamburg in die ganze Welt!",
      cta: "Preisliste anfordern",
      cta2: "PC konfigurieren",
    },
  },
  en: {
    header: {
      about: "About",
      catalog: "Catalog",
      customBuild: "Custom Build",
      repair: "Repair",
      b2b: "Wholesale",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      title: "Laptops and Gaming PCs Retail and Wholesale",
      subtitle: "From Hamburg to the World!",
      cta: "Get Price List",
      cta2: "Configure PC",
    },
  },
};

function App() {
  const [language, setLanguage] = useState("de");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language];

  return (
    <div className="App">
      <Header
        language={language}
        setLanguage={setLanguage}
        scrolled={scrolled}
        translations={t}
      />
      <Hero translations={t} language={language} />
      <About language={language} />
      <Catalog language={language} />
      <CustomBuild language={language} />
      <Repair language={language} />
      <B2B language={language} />
      <Reviews language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
