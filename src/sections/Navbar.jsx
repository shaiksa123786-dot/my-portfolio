import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Desktop Menu */}
      <div className="desktop-menu">

        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("about")}>
          About
        </button>

        <button onClick={() => scrollToSection("skills")}>
          Skills
        </button>

        <button onClick={() => scrollToSection("projects")}>
          Projects
        </button>

        <button onClick={() => scrollToSection("achievements")}>
          Achievements
        </button>

        <button onClick={() => scrollToSection("certifications")}>
          Certifications
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("achievements")}>
            Achievements
          </button>

          <button onClick={() => scrollToSection("certifications")}>
            Certifications
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;