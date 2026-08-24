import { Sparkles, Sun, RotateCw, Zap } from 'lucide-react'

function EssenceSection() {
  const properties = [
    {
      icon: <Sun size={16} />,
      name: 'Refraction',
      description:
        'Light bends as it enters the crystal, revealing the relationship between wavelength, density, and optical geometry.',
    },
    {
      icon: <RotateCw size={16} />,
      name: 'Pleochroism',
      description:
        'Certain crystals reveal different colors depending on the direction from which they are viewed.',
    },
    {
      icon: <Sparkles size={16} />,
      name: 'Asterism',
      description:
        'Oriented inclusions can transform reflected light into a luminous star that appears to move across the gem.',
    },
    {
      icon: <Zap size={16} />,
      name: 'Fluorescence',
      description:
        'Ultraviolet radiation can excite trace elements within a gemstone, producing visible emitted light.',
    },
  ]

  return (
    <section id="essence" className="essence-section">

      <div className="essence-background"></div>

      <div className="essence-content">

        {/* Header */}

        <div className="essence-header">

          <div className="section-label essence-label">
            <Sparkles size={15} />
            <span>Optical Physics & Mysticism</span>
          </div>

          <h2>
            The Essence:
            <br />
            <span>Dialogue with Light.</span>
          </h2>

          <p className="essence-quote">
            “Light enters, bends, and whispers through layers of time—
            revealing what cannot be replicated.”
          </p>

          <p className="essence-introduction">
            A gemstone is not simply a colored object. Its internal
            structure determines how light travels, bends, separates,
            reflects, and returns to the observer.
          </p>

        </div>

        {/* Optical Properties */}

        <div className="essence-properties">

          {properties.map((property) => (
            <article
              key={property.name}
              className="essence-card"
            >

              <div className="essence-icon">
                {property.icon}
              </div>

              <h3>
                {property.name}
              </h3>

              <p>
                {property.description}
              </p>

              <span className="essence-card-link">
                Explore phenomenon →
              </span>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}

export default EssenceSection