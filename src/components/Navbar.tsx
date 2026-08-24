import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        AETHERION
        <span>GEMS</span>
      </a>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <div
        id="main-navigation"
        className={`navbar-links ${menuOpen ? "open" : ""}`}
      >

        <a href="#home" onClick={closeMenu}>
  Home
</a>

<a href="#origin" onClick={closeMenu}>
  Origin
</a>

<a href="#essence" onClick={closeMenu}>
  Essence
</a>

<a href="#craft" onClick={closeMenu}>
  Craft
</a>

<a href="#gallery" onClick={closeMenu}>
  Gallery
</a>

<a href="#bio" onClick={closeMenu}>
  Bio
</a>

<a href="#contact" onClick={closeMenu}>
  Contact
</a>

      </div>

    </nav>
  );
}

export default Navbar;