import { useState } from "react";
import "./Contact.css";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const t = {
    de: {
      title: "Kontakt",
      subtitle: "Nehmen Sie Kontakt mit uns auf",
      description:
        "Wir sind für Sie da! Kontaktieren Sie uns für Beratung, Angebote oder Support.",
      address: {
        title: "Unser Standort",
        street: "Musterstraße 123",
        city: "20095 Hamburg",
        country: "Deutschland",
      },
      contactInfo: [
        {
          icon: "📞",
          title: "Telefon",
          value: "+49 40 123 456 789",
          link: "tel:+4940123456789",
        },
        {
          icon: "📧",
          title: "E-Mail",
          value: "info@computertechnic.de",
          link: "mailto:info@computertechnic.de",
        },
        {
          icon: "💬",
          title: "WhatsApp",
          value: "+49 40 123 456 789",
          link: "https://wa.me/4940123456789",
        },
        {
          icon: "📱",
          title: "Telegram",
          value: "@computertechnic",
          link: "https://t.me/computertechnic",
        },
      ],
      hours: {
        title: "Öffnungszeiten",
        weekdays: "Mo-Fr: 9:00 - 18:00",
        saturday: "Sa: 10:00 - 16:00",
        sunday: "So: Geschlossen",
      },
      form: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon (optional)",
        subject: "Betreff",
        message: "Nachricht",
        subjects: [
          "Preisanfrage",
          "PC-Konfiguration",
          "Reparatur-Anfrage",
          "B2B-Anfrage",
          "Allgemeine Frage",
        ],
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!",
        error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      },
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with us",
      description:
        "We are here for you! Contact us for consultation, quotes or support.",
      address: {
        title: "Our Location",
        street: "Musterstraße 123",
        city: "20095 Hamburg",
        country: "Germany",
      },
      contactInfo: [
        {
          icon: "📞",
          title: "Phone",
          value: "+49 40 123 456 789",
          link: "tel:+4940123456789",
        },
        {
          icon: "📧",
          title: "Email",
          value: "info@computertechnic.de",
          link: "mailto:info@computertechnic.de",
        },
        {
          icon: "💬",
          title: "WhatsApp",
          value: "+49 40 123 456 789",
          link: "https://wa.me/4940123456789",
        },
        {
          icon: "📱",
          title: "Telegram",
          value: "@computertechnic",
          link: "https://t.me/computertechnic",
        },
      ],
      hours: {
        title: "Opening Hours",
        weekdays: "Mon-Fri: 9:00 - 18:00",
        saturday: "Sat: 10:00 - 16:00",
        sunday: "Sun: Closed",
      },
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        subject: "Subject",
        message: "Message",
        subjects: [
          "Price Inquiry",
          "PC Configuration",
          "Repair Request",
          "B2B Inquiry",
          "General Question",
        ],
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
      },
    },
  };

  const content = t[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>{content.title}</h2>
          <h3>{content.subtitle}</h3>
          <p>{content.description}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="address-card">
              <h4>{content.address.title}</h4>
              <div className="address">
                <p>{content.address.street}</p>
                <p>{content.address.city}</p>
                <p>{content.address.country}</p>
              </div>

              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Hamburg, Germany</p>
                <small>
                  {language === "de" ? "Interaktive Karte" : "Interactive Map"}
                </small>
              </div>
            </div>

            <div className="contact-methods">
              {content.contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-method">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-details">
                    <span className="contact-title">{info.title}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="hours-card">
              <h4>{content.hours.title}</h4>
              <div className="hours">
                <p>{content.hours.weekdays}</p>
                <p>{content.hours.saturday}</p>
                <p>{content.hours.sunday}</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{content.form.name} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{content.form.email} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{content.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{content.form.subject} *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      {language === "de" ? "Wählen Sie..." : "Select..."}
                    </option>
                    {content.form.subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>{content.form.message} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending"
                  ? content.form.sending
                  : content.form.submit}
              </button>

              {formStatus === "success" && (
                <div className="form-message success">
                  {content.form.success}
                </div>
              )}
              {formStatus === "error" && (
                <div className="form-message error">{content.form.error}</div>
              )}
            </form>
          </div>
        </div>

        <div className="quick-contact">
          <div className="quick-contact-buttons">
            <a href="tel:+4940123456789" className="quick-btn phone">
              📞 {language === "de" ? "Anrufen" : "Call Now"}
            </a>
            <a
              href="https://wa.me/4940123456789"
              className="quick-btn whatsapp"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:info@computertechnic.de"
              className="quick-btn email"
            >
              📧 Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
