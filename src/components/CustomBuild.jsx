import { useState } from "react";
import "./CustomBuild.css";

const CustomBuild = ({ language }) => {
  const [formData, setFormData] = useState({
    purpose: "",
    budget: "",
    preferences: "",
    contact: "",
  });

  const t = {
    de: {
      title: "Individuelle PC-Konfiguration",
      subtitle: "Ihr Traum-PC, perfekt auf Ihre Bedürfnisse zugeschnitten",
      description:
        "Wir konfigurieren und bauen Ihren PC nach Ihren Wünschen. Höchste Qualität, professionelle Montage und umfassende Tests.",
      form: {
        purpose: "Verwendungszweck",
        purposePlaceholder: "Gaming, Office, Streaming, Entwicklung...",
        budget: "Budget",
        budgetPlaceholder: "Ihr Budget in Euro",
        preferences: "Besondere Wünsche",
        preferencesPlaceholder:
          "RGB-Beleuchtung, leise Kühlung, kompakte Bauweise...",
        contact: "Kontaktdaten",
        contactPlaceholder: "E-Mail oder Telefon",
        submit: "Konfiguration anfordern",
      },
      features: [
        {
          icon: "🔧",
          title: "Professionelle Montage",
          text: "Sorgfältige Montage durch erfahrene Techniker",
        },
        {
          icon: "🧪",
          title: "Umfassende Tests",
          text: "48h Stresstest und Qualitätskontrolle",
        },
        {
          icon: "📦",
          title: "Sichere Verpackung",
          text: "Professionelle Verpackung für sicheren Transport",
        },
        {
          icon: "🛡️",
          title: "2 Jahre Garantie",
          text: "Vollständige Garantie auf Montage und Komponenten",
        },
      ],
    },
    en: {
      title: "Custom PC Configuration",
      subtitle: "Your dream PC, perfectly tailored to your needs",
      description:
        "We configure and build your PC according to your wishes. Highest quality, professional assembly and comprehensive testing.",
      form: {
        purpose: "Purpose",
        purposePlaceholder: "Gaming, Office, Streaming, Development...",
        budget: "Budget",
        budgetPlaceholder: "Your budget in Euro",
        preferences: "Special Requests",
        preferencesPlaceholder:
          "RGB lighting, quiet cooling, compact design...",
        contact: "Contact Details",
        contactPlaceholder: "Email or Phone",
        submit: "Request Configuration",
      },
      features: [
        {
          icon: "🔧",
          title: "Professional Assembly",
          text: "Careful assembly by experienced technicians",
        },
        {
          icon: "🧪",
          title: "Comprehensive Testing",
          text: "48h stress test and quality control",
        },
        {
          icon: "📦",
          title: "Safe Packaging",
          text: "Professional packaging for safe transport",
        },
        {
          icon: "🛡️",
          title: "2 Years Warranty",
          text: "Full warranty on assembly and components",
        },
      ],
    },
  };

  const content = t[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="custom-build" id="custom-build">
      <div className="container">
        <div className="custom-build-header">
          <h2>{content.title}</h2>
          <h3>{content.subtitle}</h3>
          <p>{content.description}</p>
        </div>

        <div className="custom-build-content">
          <div className="build-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{content.form.purpose}</label>
                <input
                  type="text"
                  name="purpose"
                  placeholder={content.form.purposePlaceholder}
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{content.form.budget}</label>
                <input
                  type="text"
                  name="budget"
                  placeholder={content.form.budgetPlaceholder}
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{content.form.preferences}</label>
                <textarea
                  name="preferences"
                  placeholder={content.form.preferencesPlaceholder}
                  value={formData.preferences}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>{content.form.contact}</label>
                <input
                  type="text"
                  name="contact"
                  placeholder={content.form.contactPlaceholder}
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {content.form.submit}
              </button>
            </form>
          </div>

          <div className="build-features">
            {content.features.map((feature, index) => (
              <div key={index} className="build-feature">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="build-examples">
          <div className="example-builds">
            <div className="example-build">
              <h4>{language === "de" ? "Gaming Setup" : "Gaming Setup"}</h4>
              <div className="build-image">🎮</div>
            </div>
            <div className="example-build">
              <h4>{language === "de" ? "Workstation" : "Workstation"}</h4>
              <div className="build-image">💼</div>
            </div>
            <div className="example-build">
              <h4>{language === "de" ? "Streaming Rig" : "Streaming Rig"}</h4>
              <div className="build-image">📺</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuild;
