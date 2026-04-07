import { useScrollReveal } from '../hooks/useScrollReveal'


export default function PhilosophySection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '180px 24px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #030f1a, #041C32)',
        overflow: 'hidden',
      }}
    >


      <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            fontWeight: 400,
            marginBottom: '48px',
          }}
        >
          Silence creates clarity
        </h2>

        <div
          className="section-divider reveal reveal-delay-1"
          style={{ marginBottom: '48px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'When everything is loud',
            'Clarity stands out.',
            '',
            'We believe the best digital experiences',
            'do not shout.',
            'They guide.',
          ].map((line, i) => (
            <p
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 2, 5)}`}
              style={{
                fontSize: line === '' ? '0' : 'clamp(1rem, 2vw, 1.2rem)',
                color: line.includes('guide') || line.includes('stands out')
                  ? 'rgba(255,255,255,0.95)'
                  : 'hsl(var(--muted-foreground))',
                lineHeight: line === '' ? '2' : '1.8',
                fontStyle:
                  line.includes('guide') || line.includes('stands out')
                    ? 'italic'
                    : 'normal',
                minHeight: line === '' ? '24px' : 'auto',
              }}
            >
              {line || '\u00A0'}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
