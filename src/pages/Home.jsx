import React from 'react'
import Catalog from '../components/Catalog'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="catalog">
          <Catalog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
