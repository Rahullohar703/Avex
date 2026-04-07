import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    title: 'High converting websites',
    desc: 'Engineered for performance, built to turn visitors into clients.',
  },
  {
    title: 'Clean and structured portfolios',
    desc: 'Showcase your work with clarity and sophistication.',
  },
  {
    title: 'Lead focused digital systems',
    desc: 'Funnels and flows designed to capture meaningful inquiries.',
  },
  {
    title: 'Minimal and premium interfaces',
    desc: 'Design that feels expensive, polished, and intentional.',
  },
]

export default function WhatWeBuildSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 24px',
        background: '#041C32',
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
            Services
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
            What we build
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{ padding: '40px 32px' }}
            >
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: 'rgba(255,200,120,0.3)',
                  marginBottom: '24px',
                }}
              />
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.6,
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className="reveal reveal-delay-5"
          style={{
            textAlign: 'center',
            marginTop: '60px',
            fontSize: '1.05rem',
            color: 'hsl(var(--muted-foreground))',
            fontStyle: 'italic',
          }}
        >
          Built to turn attention into meaningful action.
        </p>
      </div>
    </section>
  )
}
