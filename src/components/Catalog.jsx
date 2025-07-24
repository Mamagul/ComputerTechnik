import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from './Card'
import catalogBg from '../images/catalog.svg'
import desktop from '../images/card.png'
import Aurora from './Aurora'

export default function Catalog() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('Ноутбуки')

  const categories = [
    {
      name: 'Ноутбуки',
      image: '../images/catalog.svg',
    },
    {
      name: 'Игровые ПК',
      image: '../images/catalog.svg',
    },
    {
      name: 'Сборки под заказ',
      image: '../images/catalog.svg',
    },
    {
      name: 'Мониторы и аксессуары',
      image: '../images/catalog.svg',
    },
  ]

  // Mock filtered data based on active category
  const dataCards = [
    {
      image: desktop,
      title: 'Apple iMac 24',
      description: 'I5/16 GB RAM SSD 512 GB/ GTX 150 Ti',
      available: 'В наличии',
      category: 'Ноутбуки',
    },
    {
      image: desktop,
      title: 'Gaming PC Pro',
      description: 'I7/32 GB RAM SSD 1 TB/ RTX 3080',
      available: 'Нет в наличии',
      category: 'Игровые ПК',
    },
    {
      image: desktop,
      title: 'Custom Build X',
      description: 'I9/64 GB RAM SSD 2 TB/ RTX 3090',
      available: 'Нет в наличии',
      category: 'Сборки под заказ',
    },
    {
      image: desktop,
      title: 'Monitor Ultra',
      description: '4K 27" IPS/144Hz',
      available: 'В наличии',
      category: 'Мониторы и аксессуары',
    },
  ]

  const filteredCards = dataCards.filter((card) => card.category === activeCategory)

  return (
    <div className="bg-black min-h-screen">
      <Aurora
        colorStops={['#3A29FF', '#FF94B4', '#019ee2']}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <div
        className="catalog bg-cover bg-center bg-no-repeat min-h-[90vh] flex flex-col items-center justify-start pb-8 px-4 sm:px-8 md:px-16 lg:px-28 -mt-[85px]"
        style={{ backgroundImage: `url(${catalogBg})` }}>
        <h2 className="font-PlayfairDisplay text-white text-2xl sm:text-3xl md:text-4xl font-bold pb-5 mt-20">
          {t('catalog.title')}
        </h2>
        <p className="font-helvetica text-[#fde9e9] text-sm sm:text-base font-light pb-10 text-center max-w-2xl">
          {t('catalog.description')}
        </p>
        <div className="containerCategories flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-10">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`font-helvetica text-sm sm:text-base md:text-lg font-light rounded px-4 py-2 transition-all duration-300 border-[1px] ${
                activeCategory === category.name
                  ? 'bg-[#e7f1fc] text-[#263238] border-[#263238]'
                  : 'bg-transparent text-[#fffefe] border-[#fffefe] hover:bg-[#e7f1fc] hover:text-[#263238] hover:border-[#263238]'
              }`}>
              {category.name}
            </button>
          ))}
        </div>
        <div className="containerCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {dataCards.map((card) => (
            <Card
              key={card.title + card.category}
              image={card.image}
              title={card.title}
              description={card.description}
              available={card.available}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
