function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">

      <div className="gallery-header">

        <p className="section-label">
          THE COLLECTION
        </p>

        <h2>
          Stones of
          <br />
          <span>Rare Character.</span>
        </h2>

        <p className="gallery-introduction">
          Each gemstone is selected for its individuality,
          natural character and the geological story preserved
          within it.
        </p>

      </div>

      <div className="gallery-grid">

        <article className="gallery-card">
          <img
            src={`${import.meta.env.BASE_URL}images/gem2-bg.png`}
            alt="Aetherion gemstone collection"
          />

          <div className="gallery-card-overlay">
            <p>01</p>
            <h3>Earth & Fire</h3>
            <span>Natural Gemstone</span>
          </div>
        </article>

        <article className="gallery-card">
          <img
           src={`${import.meta.env.BASE_URL}images/gem3-bg.png`}
            alt="Natural gemstone"
          />

          <div className="gallery-card-overlay">
            <p>02</p>
            <h3>Ancient Light</h3>
            <span>Natural Gemstone</span>
          </div>
        </article>

        <article className="gallery-card">
          <img
            src={`${import.meta.env.BASE_URL}images/home2-bg.png`}
            alt="Aetherion gemstone"
          />

          <div className="gallery-card-overlay">
            <p>03</p>
            <h3>Fragments of Time</h3>
            <span>Natural Gemstone</span>
          </div>
        </article>

      </div>

      <div className="gallery-action">
        <a href="#gallery" className="gallery-button">
          Explore Collection
          <span>→</span>
        </a>
      </div>

    </section>
  );
}

export default GallerySection;