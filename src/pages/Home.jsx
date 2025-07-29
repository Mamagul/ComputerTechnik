import React from "react";
import Catalog from "../components/Catalog";
import Header from "../components/Header";
import FirstScreen from "../components/FirstScreen";
import About from "../components/About";
import Services from "../components/Services";
import TechServices from "../components/TechServices";
import AssemblyToOrder from "../components/AssemblyToOrder";
import Footer from "../components/Footer";
import Upgrade from "../components/Upgrade";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <FirstScreen />
        <About />
        <Catalog />
        <Services />
        <AssemblyToOrder />
        <TechServices />
        <Upgrade />
      </div>
      <Footer />
    </div>
  );
}
