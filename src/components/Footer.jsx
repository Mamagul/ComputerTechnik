import logo from "../images/logo.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // const handleNavClick = (e, sectionId) => {
  //   e.preventDefault();
  //   scrollToSection(sectionId);
  // };

  return (
    <footer className="">
      <div className="container1">
        <div className="flex font-semibold justify-between items-end py-6 gap-5">
          <a href="#" className="w-[70px] h-[50px] sm:w-[140px] sm:h-full pt-2">
            <img src={logo} alt="Logo" />
          </a>
          <nav className="flex items-start justify-center gap-13 text-[8px] sm:text-base">
            <ul className="footer-menu-list font-helvetica grid grid-cols-3 gap-3 text-black text-[8px] lg:text-base font-normal whitespace-nowrap">
              <li className="footer-menu-item  text-center">
                <a
                  // href="#"
                  className="hover:underline transition-all duration-300 cursor-pointer"
                  // onClick={(e) => handleNavClick(e, "about")}
                  onClick={() => scrollToSection("about")}
                >
                  {t("header.about")}
                </a>
              </li>
              <li className="footer-menu-item text-center">
                <a
                  // href="#"
                  // onClick={(e) => handleNavClick(e, "catalog")}
                  onClick={() => scrollToSection("catalog")}
                  className="hover:underline transition-all duration-300 cursor-pointer"
                >
                  {t("header.catalog")}
                </a>
              </li>
              <li className="footer-menu-item text-center">
                <a
                  // href="#"
                  className="hover:underline transition-all duration-300 cursor-pointer"
                  // onClick={(e) => handleNavClick(e, "customBuild")}
                  onClick={() => scrollToSection("customBuild")}
                >
                  {t("header.customBuild")}
                </a>
              </li>
              <li className="footer-menu-item text-center">
                <a
                  // href="#"
                  className="hover:underline transition-all duration-300 cursor-pointer"
                  // onClick={(e) => handleNavClick(e, "upgrade")}
                  onClick={() => scrollToSection("upgrade")}
                >
                  {t("header.repair")}
                </a>
              </li>
              <li className="footer-menu-item text-center">
                <a
                  // href="#"
                  className="hover:underline transition-all duration-300 cursor-pointer"
                  // onClick={(e) => handleNavClick(e, "b2b")}
                  onClick={() => scrollToSection("b2b")}
                >
                  {t("header.b2b")}
                </a>
              </li>
              <li className="footer-menu-item text-center">
                <a
                  // href="#"
                  className="hover:underline transition-all duration-300 cursor-pointer"
                  // onClick={(e) => handleNavClick(e, "reviews")}
                  onClick={() => scrollToSection("reviews")}
                >
                  {t("header.reviews")}
                </a>
              </li>
              {/* <li className="footer-menu-item py-2 text-center">
                <a
                  href="#"
                  className="hover:underline transition-all duration-300"
                  onClick={(e) => handleNavClick(e, "contacts")}
                >
                  {t("header.contact")}
                </a>
              </li> */}
            </ul>
          </nav>
          <a
            href="https://computershophamburg.de/en/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#019EE2] text-[6px] lg:text-base hover:text-[#0179B4] hover:underline transition-all duration-300 cursor-pointer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
