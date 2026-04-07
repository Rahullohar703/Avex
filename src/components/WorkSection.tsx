import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Architect portfolio designed for clarity and trust',
    category: 'Portfolio',
    color: '#1a2a3a',
  },
  {
    title: 'Interior website structured to convert inquiries',
    category: 'Lead Generation',
    color: '#1a1a2a',
  },
  {
    title: 'Creative studio built for immersive storytelling',
    category: 'Brand Website',
    color: '#2a1a1a',
  },
]

export default function WorkSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 24px',
        background: '#030f1a',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p
            className="reveal"
            style={{
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,200,120,0.5)',
              marginBottom: '24px',
            }}
          >
            Portfolio
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.05,
              fontWeight: 400,
            }}
          >
            Selected work
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Project image placeholder */}
              <div
                style={{
                  height: '340px',
                  background: `linear-gradient(135deg, ${project.color}, #0a0a1a)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative grid */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: '2rem',
                    opacity: 0.15,
                    letterSpacing: '0.1em',
                  }}
                >
                  {project.category}
                </span>
              </div>

              <div style={{ padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(255,200,120,0.4)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {project.category}
                  </span>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.5,
                    }}
                  >
                    {project.title}
                  </p>
                </div>
                <button className="glass-btn glass-btn-sm">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
