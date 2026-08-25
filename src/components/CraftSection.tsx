function CraftSection() {
  return (
    <section id="craft" className="craft-section">

      <div className="craft-image">
        <img
          src={`${import.meta.env.BASE_URL}images/gem2-bg.png`}
          alt="Gemstone craftmanship"
        />
      </div>

      <div className="craft-overlay"></div>

      <div className="craft-content">

        <p className="section-label">
          THE CRAFT
        </p>

        <h2>
          Shaped by
          <br />
          <span>Human Hands.</span>
        </h2>

        <p className="craft-description">
          A gemstone may be formed by geological forces,
          but its final expression emerges through the
          patience, knowledge and precision of human hands.
        </p>

        <p className="craft-description">
          Cutting, polishing and setting are not simply
          technical processes. They are acts of interpretation,
          revealing the character that already exists within
          the stone.
        </p>

        <a
          href="#gallery"
          className="craft-button"
        >
          Explore the Craft
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default CraftSection;