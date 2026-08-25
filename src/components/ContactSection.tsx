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
      href="mailto:aetheriongems@gmail.com"
      className="contact-button"
    >
      Contact Aetherion
    </a>

    <div className="contact-details">

      <a href="tel:+94755530579">
        +94 75 553 0579
      </a>

      <a
        href="https://wa.me/94763085192"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp: +94 76 308 5192
      </a>

      <a href="mailto:aetheriongems@gmail.com">
        aetheriongems@gmail.com
      </a>

    </div>

  </div>

</section>

);
}

export default ContactSection;