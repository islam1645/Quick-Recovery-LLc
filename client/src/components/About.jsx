import { FiCheck } from 'react-icons/fi';

const points = [
  'Licensed & fully insured professionals',
  'Rapid response — we arrive on time, every time',
  'Transparent pricing with no hidden fees',
  'Customer satisfaction is our top priority',
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left: Visual block */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--blue-light)',
              borderRadius: '8px',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Decorative block design */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `
                  linear-gradient(135deg, var(--blue-light) 0%, #D0E7F8 100%)
                `,
              }} />
              <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '6rem',
                  color: 'var(--blue)',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                }}>PHOTO</div>
                <div style={{ fontWeight: 600, color: 'var(--gray-dark)', fontSize: '1rem', marginTop: '0.5rem' }}>
                  VIEW
                </div>
              </div>

              {/* Accent corner */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '100px', height: '100px',
                background: 'var(--blue)',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              }} />
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '2rem',
              background: 'var(--navy)', color: 'white',
              padding: '1rem 1.5rem', borderRadius: '6px',
              boxShadow: '0 8px 24px rgba(13,33,55,0.25)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#7ABAFF', letterSpacing: '0.04em' }}>0</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Satisfied Clients</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal" style={{ paddingTop: '1rem' }}>
            <span className="section-label">Who We Are</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              letterSpacing: '0.04em',
              color: 'var(--navy)',
              marginBottom: '1.25rem',
            }}>
              YOUR TRUSTED PARTNER 
            </h2>
            <p style={{ color: 'var(--gray-mid)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
               MOHARA QUICK RECOVERY LLC  was built on a simple promise: deliver fast, honest, and professional services
              that people can count on. Over a decade later, that commitment drives everything we do.
            </p>
            <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Our experienced team combines industry expertise with genuine care for every client,
              ensuring you receive the highest quality service — every single time.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'var(--blue)', color: 'white', flexShrink: 0,
                  }}>
                    <FiCheck size={13} strokeWidth={3} />
                  </span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--gray-dark)', fontWeight: 400 }}>{p}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary">
              Learn More About Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
