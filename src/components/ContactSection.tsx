function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <p className="contact-label">
          Begin a Conversation
        </p>

        <h2>
          Some stones are meant
          <br />
          to be discovered.
        </h2>

        <p className="contact-description">
          Whether you are searching for a rare natural gemstone,
          exploring a collection, or simply wish to learn more
          about the world of Aetherion Gems, we welcome your inquiry.
        </p>

        <a
          href="mailto:info@aetheriongems.com"
          className="contact-button"
        >
          Contact Aetherion
        </a>

      </div>

    </section>
  );
}

export default ContactSection;