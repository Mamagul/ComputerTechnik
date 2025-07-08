import React from "react";
import Catalog from "../components/Catalog";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <div className="catalog">
        <Catalog />
      </div>
    </div>
  );
}
