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
import Contacts from "../components/Contacts";
import OfficeMaintenance from "../components/OfficeMaintenance";
import B2b from "../components/B2b";

export default function Home() {
  return (
    <div className="wrapper overflow-hidden">
      <Header />
      <div className="main">
        <FirstScreen />
        <About />
        <Catalog />
        <Services />
        <AssemblyToOrder />
        <TechServices />
        <Upgrade />
        <OfficeMaintenance />
        <B2b />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
