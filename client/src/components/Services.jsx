import { FiTruck, FiShield, FiTool, FiMapPin, FiClock, FiStar } from 'react-icons/fi';

const services = [
  {
    icon: FiTruck,
    title: 'Express Delivery',
    desc: 'Swift, reliable delivery solutions tailored to your schedule. We handle every shipment with care.',
  },
  {
    icon: FiShield,
    title: 'Insured Protection',
    desc: 'Full coverage on every service. Your assets are protected by our comprehensive insurance plan.',
  },
  {
    icon: FiTool,
    title: 'On-Site Support',
    desc: 'Our specialists come to you. Professional hands-on assistance wherever and whenever you need it.',
  },
  {
    icon: FiMapPin,
    title: 'GPS Tracking',
    desc: 'Real-time location updates keep you informed at every step of the process.',
  },
  {
    icon: FiClock,
    title: '24/7 Availability',
    desc: "Emergencies don't keep office hours. Neither do we. We're available around the clock.",
  },
  {
    icon: FiStar,
    title: 'Premium Quality',
    desc: "We don't cut corners. Every job is executed to the highest professional standard.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--gray-light)', padding: '6rem 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
          <span className="section-label">What We Offer</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            letterSpacing: '0.04em',
            color: 'var(--navy)',
            marginBottom: '1rem',
          }}>
            SERVICES BUILT AROUND YOU
          </h2>
          <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8 }}>
            From emergency support to planned projects, our full-service team handles it all —
            professionally and on time.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal"
                style={{
                  background: 'var(--white)',
                  borderRadius: '8px',
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,109,212,0.12)';
                  e.currentTarget.style.borderColor = 'var(--blue)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Icon */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px', height: '52px',
                  borderRadius: '8px',
                  background: 'var(--blue-light)',
                  color: 'var(--blue)',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em',
                  color: 'var(--navy)',
                  marginBottom: '0.6rem',
                }}>
                  {s.title.toUpperCase()}
                </h3>

                <p style={{ color: 'var(--gray-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  {s.desc}
                </p>

                <div style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--blue)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
