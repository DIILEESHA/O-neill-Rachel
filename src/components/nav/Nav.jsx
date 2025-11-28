import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./nav.css";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150; 
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileOpen(false); // close mobile menu after click
    }
  };

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_flex">
        <div className="nav_sides">
          <a href="/">
            <img src={logo} alt="logo" className="logos" />
          </a>
        </div>

        {/* Desktop / Tablet Menu */}
        <div className={`nav_sides nav_links ${mobileOpen ? "open" : ""}`}>
          <ul className="nav_ul">
            <li className="nav_li" onClick={() => scrollToSection("our-story")}>
              Our Story
            </li>
            <li className="nav_li" onClick={() => scrollToSection("timeline")}>
              Timeline
            </li>
            <li className="nav_li" onClick={() => scrollToSection("where-to-stay")}>
              Where to stay
            </li>
            <li className="nav_li" onClick={() => scrollToSection("band")}>
              Entertainment
            </li>
          
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile_menu_icon" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X color="#fff" size={28} /> : <Menu color="#fff" size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile_nav_overlay">
          <ul className="mobile_nav_ul">
            <li onClick={() => scrollToSection("our-story")}>Our Story</li>
            <li onClick={() => scrollToSection("timeline")}>Timeline</li>
            <li onClick={() => scrollToSection("where-to-stay")}>Where to stay</li>
            <li onClick={() => scrollToSection("band")}>Entertainment</li>
            <li>
              <a href="rsvp" style={{ color: "#fff", textDecoration: "none" }}>RSVP</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
