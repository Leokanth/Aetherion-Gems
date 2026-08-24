import "./App.css";

import Navbar from "./components/Navbar";
import OriginSection from "./components/OriginSection";
import EssenceSection from "./components/EssenceSection";
import CraftSection from "./components/CraftSection";
import GallerySection from "./components/GallerySection";
import BioSection from "./components/BioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-label">
              AETHERION GEMS
            </p>

            <h1>
              Fragments of Time.
            </h1>

            <h2>
              Sculpted by the Universe.
            </h2>

            <p className="hero-description">
              Natural gemstones shaped by geological time,
              revealed through light, craft, and human hands.
            </p>

            <a href="#origin" className="hero-button">
              Explore the Collection
            </a>
          </div>
        </section>

        <OriginSection />

        <EssenceSection />

        <CraftSection />

        <GallerySection />

        <BioSection />

        <ContactSection />

      </main>

      <Footer />
    </>
  );
}

export default App;