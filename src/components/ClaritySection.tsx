import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ClaritySection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 24px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #030f1a, #041C32)',
        overflow: 'hidden',
      }}
    >
      {/* Soft center glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,200,120,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px', margin: '0 auto' }}>
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
          Our Approach
        </p>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1.05,
            fontWeight: 400,
            marginBottom: '40px',
          }}
        >
          We design for clarity
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'hsl(var(--muted-foreground))',
            lineHeight: 1.8,
            marginBottom: '48px',
          }}
        >
          We create calm, structured digital experiences that guide attention
          instead of fighting for it.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            'Every element has a purpose',
            'Every interaction is intentional',
          ].map((text, i) => (
            <p
              key={text}
              className={`reveal reveal-delay-${i + 3}`}
              style={{
                fontSize: '1.1rem',
                color: 'white',
                fontStyle: 'italic',
                opacity: 0.85,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
