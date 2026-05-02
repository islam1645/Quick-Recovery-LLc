export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: '#070F1A',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'white', letterSpacing: '0.08em' }}>
          MOHARA QRLLC
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {['About', 'Services', 'Contact'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', textDecoration: 'none',
              fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#7ABAFF'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            >{l}</a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '0.78rem' }}>
          © {year} S.A . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
