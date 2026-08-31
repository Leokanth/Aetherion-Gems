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
        src={`${import.meta.env.BASE_URL}images/Bs1.png`}
        alt="Ceylon Blue Sapphire"
      />

      <div className="gallery-card-overlay">
        <p>01</p>
        <h3>Ceylon Blue Sapphire</h3>
        <span>Natural Sapphire</span>
      </div>
    </article>

    <article className="gallery-card">
      <img
        src={`${import.meta.env.BASE_URL}images/Pad1.png`}
        alt="Ceylon Padparadscha Sapphire"
      />

      <div className="gallery-card-overlay">
        <p>02</p>
        <h3>Padparadscha Sapphire</h3>
        <span>Natural Sapphire</span>
      </div>
    </article>

    <article className="gallery-card">
      <img
        src={`${import.meta.env.BASE_URL}images/Ys1.png`}
        alt="Ceylon Yellow Sapphire"
      />

      <div className="gallery-card-overlay">
        <p>03</p>
        <h3>Ceylon Yellow Sapphire</h3>
        <span>Natural Sapphire</span>
      </div>
    </article>

  </div>

  <div className="gallery-action">
    <a href="/collection/collection.html" className="gallery-button">
      Explore Collection
      <span>→</span>
    </a>
  </div>

</section>

);
}

export default GallerySection;