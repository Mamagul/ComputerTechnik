import { useState } from "react";
import "./Catalog.css";

const Catalog = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const t = {
    de: {
      title: "Unser Katalog",
      subtitle: "Hochwertige Computertechnik für jeden Bedarf",
      filters: {
        all: "Alle Produkte",
        laptops: "Laptops",
        gaming: "Gaming PCs",
        custom: "Konfigurationen",
        monitors: "Monitore",
        accessories: "Zubehör",
      },
      products: [
        {
          id: 1,
          category: "laptops",
          name: "Business Laptop Pro",
          price: "ab 899€",
          specs: ["Intel i7", "16GB RAM", "512GB SSD", '15.6" Display'],
          image: "💻",
        },
        {
          id: 2,
          category: "gaming",
          name: "Gaming Beast RTX 4080",
          price: "ab 2.499€",
          specs: ["RTX 4080", "AMD Ryzen 7", "32GB RAM", "1TB NVMe"],
          image: "🖥️",
        },
        {
          id: 3,
          category: "monitors",
          name: '27" 4K Gaming Monitor',
          price: "ab 549€",
          specs: ["4K UHD", "144Hz", "HDR10", "USB-C"],
          image: "🖥️",
        },
      ],
      cta: "Preis anfragen",
      available: "Verfügbar",
      addToCart: "Zur Anfrage hinzufügen",
    },
    en: {
      title: "Our Catalog",
      subtitle: "High-quality computer technology for every need",
      filters: {
        all: "All Products",
        laptops: "Laptops",
        gaming: "Gaming PCs",
        custom: "Configurations",
        monitors: "Monitors",
        accessories: "Accessories",
      },
      products: [
        {
          id: 1,
          category: "laptops",
          name: "Business Laptop Pro",
          price: "from €899",
          specs: ["Intel i7", "16GB RAM", "512GB SSD", '15.6" Display'],
          image: "💻",
        },
        {
          id: 2,
          category: "gaming",
          name: "Gaming Beast RTX 4080",
          price: "from €2,499",
          specs: ["RTX 4080", "AMD Ryzen 7", "32GB RAM", "1TB NVMe"],
          image: "🖥️",
        },
        {
          id: 3,
          category: "monitors",
          name: '27" 4K Gaming Monitor',
          price: "from €549",
          specs: ["4K UHD", "144Hz", "HDR10", "USB-C"],
          image: "🖥️",
        },
      ],
      cta: "Get Price",
      available: "Available",
      addToCart: "Add to Inquiry",
    },
  };

  const content = t[language];

  const filteredProducts =
    activeFilter === "all"
      ? content.products
      : content.products.filter((product) => product.category === activeFilter);

  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className="catalog-filters">
          {Object.entries(content.filters).map(([key, value]) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? "active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-specs">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="spec-tag">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="product-price">{product.price}</div>
                <div className="product-actions">
                  <button className="btn btn-primary">{content.cta}</button>
                  <button className="btn btn-secondary">
                    {content.addToCart}
                  </button>
                </div>
                <div className="product-status available">
                  {content.available}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
