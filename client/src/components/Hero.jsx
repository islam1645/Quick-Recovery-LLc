import { FiPhone, FiArrowRight } from 'react-icons/fi';

const stats = [
  { value: '0', label: 'Years Experience' },
 // { value: '2,400+', label: 'Happy Clients' },
  { value: '24/7', label: 'Always Available' },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a5c 55%, #1558B0 100%)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav-h)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Diagonal accent bar */}
      <div style={{
        position: 'absolute', right: '-80px', top: 0, bottom: 0,
        width: '460px',
        background: 'rgba(26,109,212,0.18)',
        transform: 'skewX(-8deg)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '680px' }}>
          <span className="section-label" style={{ color: '#7ABAFF', marginBottom: '1rem', display: 'block' }}>
            ★ Trusted Professional Services
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            color: 'var(--white)',
            letterSpacing: '0.03em',
            lineHeight: 1.0,
            marginBottom: '1.5rem',
          }}>
            RELIABLE.<br />
            <span style={{ color: '#7ABAFF' }}>PROFESSIONAL.</span><br />
            FAST.
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '50ch',
            marginBottom: '2.5rem',
            fontWeight: 300,
            lineHeight: 1.75,
          }}>
            MOHARA QUICK RECOVERY LLC delivers expert solutions when you need them most. Our team is ready
            around the clock to make sure you're never left waiting.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Get a Free Quote <FiArrowRight />
            </a>
            <a href="tel:+1234567890" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              <FiPhone /> Call Us Now
            </a>
          </div>

          {/* Stats bar */}
          <div style={{
            display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '2rem',
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.4rem',
                  color: '#7ABAFF',
                  letterSpacing: '0.04em',
                }}>{s.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
