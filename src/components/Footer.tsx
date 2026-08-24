function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-brand">

          <p className="footer-logo">
            AETHERION GEMS
          </p>

          <p className="footer-tagline">
            Natural gemstones shaped by time.
          </p>

        </div>

        <nav className="footer-navigation">

          <a href="#home">Home</a>

          <a href="#origin">Origin</a>

          <a href="#essence">Essence</a>

          <a href="#craft">Craft</a>

          <a href="#gallery">Gallery</a>

          <a href="#bio">Bio</a>

          <a href="#contact">Contact</a>

        </nav>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Aetherion Gems. All rights reserved.
          </p>

          <p>
            Crafted with respect for nature and time.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;