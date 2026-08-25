function BioSection() {
  return (
    <section id="bio" className="bio-section">

      <div className="bio-container">

        <div className="bio-image">
          <img
            src={`${import.meta.env.BASE_URL}images/machi-bio.png`}
            alt="Ilonthan, founder of Aetherion Gems"
          />
        </div>

        <div className="bio-content">

          <p className="section-label">
            THE CURATOR
          </p>

          <h2>
            A Vision
            <br />
            <span>Beyond Stones.</span>
          </h2>

          <p className="bio-introduction">
            Aetherion Gems was born from a fascination with
            the stories hidden within natural gemstones,
            and the human journey behind their discovery,
            interpretation and craft.
          </p>

          <p className="bio-introduction">
            For Ilonthan, gemstones are more than objects of
            beauty. They are fragments of geological history,
            shaped by forces that existed long before humanity.
          </p>

          <a
            href="/bio.html"
            className="bio-button"
          >
            Read the Curator's Story
            <span>→</span>
          </a>

          <div className="bio-signature">
            <strong>— Ilonthan</strong>
            <span>Founder · Aetherion Gems</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BioSection;