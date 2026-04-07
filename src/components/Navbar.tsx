const navLinks = [
  { label: 'Home', active: true },
  { label: 'Studio', active: false },
  { label: 'About', active: false },
  { label: 'Journal', active: false },
  { label: 'Reach Us', active: false },
]

export default function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '24px 32px',
      }}
    >
      {/* Nav links — centered to viewport */}
      <div
        className="hidden md:flex items-center justify-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          gap: '32px',
          pointerEvents: 'none',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            style={{
              fontSize: '14px',
              color: link.active ? 'white' : 'hsl(var(--muted-foreground))',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              pointerEvents: 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              if (!link.active) e.currentTarget.style.color = 'hsl(var(--muted-foreground))'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Logo + CTA on edges */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '80rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "'Instrument Serif', serif",
            color: 'white',
            fontSize: '28px',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}
        >
          Avex<sup style={{ fontSize: '10px', verticalAlign: 'super' }}>®</sup>
        </a>

        {/* CTA Button */}
        <button className="glass-btn glass-btn-sm">Begin Journey</button>
      </div>
    </header>
  )
}
