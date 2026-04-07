import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '160px 24px',
        textAlign: 'center',
        background: '#041C32',
        overflow: 'hidden',
      }}
    >
      {/* Centered glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255,200,120,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.1,
            fontWeight: 400,
            marginBottom: '28px',
          }}
        >
          Let's build something that works quietly but powerfully
        </h2>

        <p
          className="reveal reveal-delay-1"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: 'hsl(var(--muted-foreground))',
            lineHeight: 1.8,
            marginBottom: '48px',
          }}
        >
          A website that reflects your work.
          <br />
          Builds trust.
          <br />
          And converts attention into inquiries.
        </p>

        <button className="glass-btn glass-btn-lg glow-btn reveal reveal-delay-2">
          Start Your Project
        </button>
      </div>
    </section>
  )
}
