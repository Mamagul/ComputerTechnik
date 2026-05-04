import React from "react";
import Header from "../components/Header";
import FirstScreen from "../components/FirstScreen";
import About from "../components/About";
import AssemblyToOrder from "../components/AssemblyToOrder";
import Contacts from "../components/Contacts";
import OfficeMaintenance from "../components/OfficeMaintenance";
import B2b from "../components/B2b";
import Reviews from "../components/Reviews";
import Cookie from "../components/Cookie";

export default function Home() {
  return (
    <div className="wrapper overflow-hidden">
      <Header />
      <div className="main">
        <FirstScreen />
        <About />
        <AssemblyToOrder />
        <OfficeMaintenance />
        <B2b />
        <Reviews />
        <Contacts />
      </div>
      <Cookie />
    </div>
  );
}
