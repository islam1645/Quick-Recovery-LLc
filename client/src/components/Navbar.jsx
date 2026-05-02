import { useState, useEffect } from 'react';

const links = ['About', 'Services', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 'var(--nav-h)',
        background: scrolled ? 'rgba(13,33,55,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'background 0.3s, border 0.3s',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <a href="#hero" style={{
            fontFamily: 'var(--font-display)', fontSize: '2rem',
            color: 'var(--white)', letterSpacing: '0.08em', textDecoration: 'none',
          }}>
            QUICK RECOVERY LLC
          </a>

          <ul className="nav-desktop" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}>
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}>
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.78rem' }}>
                Get a Quote
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.6rem', lineHeight: 1 }}
            aria-label="Toggle menu"
          >
            {open ? '\u2715' : '\u2630'}
          </button>
        </div>

        {open && (
          <div style={{
            position: 'absolute', top: 'var(--nav-h)', left: 0, right: 0,
            background: 'var(--navy)', padding: '1.5rem 2rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>
                {l}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary"
              style={{ textAlign: 'center', marginTop: '0.5rem' }}
              onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .nav-desktop { display: flex !important; }
        .hamburger   { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </>
  );
}
