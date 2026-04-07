import { useEffect, useState } from 'react'


export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Video Background with Parallax */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(4,28,50,0.3) 0%, rgba(4,28,50,0.5) 60%, var(--color-deep) 100%)',
          zIndex: 1,
        }}
      />



      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: '900px' }}>
        <h1
          className="animate-fade-rise"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            fontWeight: 400,
            color: 'white',
          }}
        >
          Where{' '}
          <em className="not-italic" style={{ color: 'hsl(var(--muted-foreground))' }}>
            dreams
          </em>{' '}
          rise{' '}
          <em className="not-italic" style={{ color: 'hsl(var(--muted-foreground))' }}>
            through the silence.
          </em>
        </h1>

        <p
          className="animate-fade-rise-delay"
          style={{
            color: 'hsl(var(--muted-foreground))',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)',
            maxWidth: '600px',
            margin: '32px auto 0',
            lineHeight: 1.7,
          }}
        >
          We design digital experiences for deep thinkers, creators, and focused
          builders who want clarity in a noisy world.
        </p>

        {/* Dual CTAs */}
        <div
          className="animate-fade-rise-delay-2"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          <button className="glass-btn glass-btn-lg glow-btn">Begin Journey</button>
          <button
            className="glass-btn glass-btn-lg"
            style={{ background: 'transparent !important' }}
          >
            Explore Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-float-slow"
        style={{
          position: 'absolute',
          bottom: '40px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '30px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
          }}
        />
      </div>
    </section>
  )
}
