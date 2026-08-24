function OriginSection() {
  return (
    <section id="origin" className="origin-section">

      {/* Background Image */}
      <div className="origin-image">
        <img
          src="/images/gem3-bg.png"
          alt="Natural gemstone representing the geological origin of Aetherion Gems"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="origin-overlay"></div>

      {/* Content */}
      <div className="origin-content">

        <p className="section-label">
          THE ORIGIN
        </p>

        <h2>
          Born Beneath
          <br />
          <span>Ancient Forces.</span>
        </h2>

        <p className="origin-description">
          Long before a gemstone becomes an object of beauty,
          it exists as matter hidden within the Earth's immense
          geological architecture.
        </p>

        <p className="origin-description">
          Heat, pressure, mineral chemistry and geological time
          work together over millions of years, creating crystals
          whose internal structures record a history far older
          than humanity itself.
        </p>

        <button
          type="button"
          className="origin-button"
          onClick={() => {
            window.location.href = "#essence";
          }}
        >
          Discover the Essence
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default OriginSection;