import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ContactSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '120px 24px 80px',
        background: 'linear-gradient(to bottom, #041C32, var(--color-deep))',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            Contact
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Get in touch
          </h2>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div className="reveal reveal-delay-2">
            <input
              type="text"
              placeholder="Your name"
              className="form-input"
            />
          </div>
          <div className="reveal reveal-delay-3">
            <input
              type="tel"
              placeholder="Phone number"
              className="form-input"
            />
          </div>
          <div className="reveal reveal-delay-4">
            <textarea
              placeholder="Tell us about your project..."
              className="form-input"
              rows={4}
              style={{ resize: 'vertical' as const, minHeight: '120px' }}
            />
          </div>
          <div className="reveal reveal-delay-5" style={{ textAlign: 'center', marginTop: '12px' }}>
            <button type="submit" className="glass-btn glass-btn-lg glow-btn" style={{ width: '100%' }}>
              Submit
            </button>
          </div>
        </form>

        {/* Footer */}
        <div
          className="reveal reveal-delay-5"
          style={{
            textAlign: 'center',
            marginTop: '100px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '24px',
              color: 'white',
              textDecoration: 'none',
              opacity: 0.5,
            }}
          >
            Avex<sup style={{ fontSize: '8px' }}>®</sup>
          </a>
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.2)',
              marginTop: '12px',
            }}
          >
            © 2026 Avex. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
