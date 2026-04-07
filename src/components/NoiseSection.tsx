import { useScrollReveal } from '../hooks/useScrollReveal'


export default function NoiseSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '160px 24px 140px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--color-deep), #030f1a)',
        overflow: 'hidden',
      }}
    >


      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
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
          The Problem
        </p>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1.05,
            fontWeight: 400,
            marginBottom: '60px',
          }}
        >
          In a world full of noise
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '60px',
          }}
        >
          {[
            'Distractions everywhere',
            'Endless scrolling',
            'Constant interruptions',
          ].map((text, i) => (
            <p
              key={text}
              className={`reveal reveal-delay-${i + 2}`}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'hsl(var(--muted-foreground))',
                lineHeight: 1.6,
              }}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="section-divider reveal reveal-delay-4" style={{ marginBottom: '60px' }} />

        <p
          className="reveal reveal-delay-5"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'hsl(var(--muted-foreground))',
            lineHeight: 1.8,
            maxWidth: '550px',
            margin: '0 auto',
          }}
        >
          Most digital experiences are built to capture attention.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
            Not to help people focus or take action.
          </span>
        </p>
      </div>
    </section>
  )
}
