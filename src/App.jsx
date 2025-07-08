import { useState, useEffect } from "react";
import "./index.css";

// Components
// import Header from "./components/ii/Header";
// import Hero from "./components/ii/Hero";
// import About from "./components/ii/About";
// import Catalog from "./components/ii/Catalog";
// import CustomBuild from "./components/ii/CustomBuild";
// import Repair from "./components/ii/Repair";
// import B2B from "./components/ii/B2B";
// import Reviews from "./components/ii/Reviews";
// import Contact from "./components/ii/Contact";
// import Footer from "./components/ii/Footer";
import Home from "./pages/Home";

function App() {
  // const [language, setLanguage] = useState("de");
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const t = translations[language];

  return (
    <div>
      <Home />
    </div>
    // <div className="App">
    //   <Header
    //     language={language}
    //     setLanguage={setLanguage}
    //     scrolled={scrolled}
    //     translations={t}
    //   />
    //   <Hero translations={t} language={language} />
    //   <About language={language} />
    //   <Catalog language={language} />
    //   <CustomBuild language={language} />
    //   <Repair language={language} />
    //   <B2B language={language} />
    //   <Reviews language={language} />
    //   <Contact language={language} />
    //   <Footer language={language} />
    // </div>
  );
}

export default App;
