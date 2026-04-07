import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: '✦',
    title: 'Smooth and immersive experience',
    desc: 'Every scroll, every click feels intentional and fluid.',
  },
  {
    icon: '◈',
    title: 'Clear user flow and structure',
    desc: 'Visitors always know where they are and what to do next.',
  },
  {
    icon: '⟡',
    title: 'Fast and responsive',
    desc: 'Optimized performance on every device and screen size.',
  },
  {
    icon: '❖',
    title: 'Built to create trust instantly',
    desc: 'Design that communicates authority and professionalism.',
  },
]

export default function FeaturesSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 24px',
        background: 'linear-gradient(to bottom, #041C32, #030f1a)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,200,120,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
            Experience
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
            Designed with intention
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '28px',
          }}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass-card animate-float-slow reveal reveal-delay-${i + 1}`}
              style={{
                padding: '44px 32px',
                textAlign: 'center',
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  marginBottom: '20px',
                  opacity: 0.6,
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
