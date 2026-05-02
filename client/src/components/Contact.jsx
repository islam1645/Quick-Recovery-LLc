import { useState } from 'react';
import { FiSend, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const info = [
  { icon: FiPhone, label: 'Phone', value: '0451438026' },//telephone
  { icon: FiMail, label: 'Email', value: 'hello@velabusiness.com' },//email
  { icon: FiMapPin, label: 'Location', value: '14 WEST 41ST STREET BAYONNE, NEW JERSEY 07002' },//position
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMsg(data.message);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.message || 'The server had an issue sending the email.');
      }
    } catch (err){
      setStatus('error');
      setMsg('Cannot connect to the server. Is it running?');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.93rem',
    color: 'var(--gray-dark)',
    background: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--gray-dark)',
    marginBottom: '0.4rem',
  };

  return (
    <section id="contact" style={{ background: 'var(--navy)', padding: '6rem 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
          <span className="section-label" style={{ color: '#7ABAFF' }}>Get In Touch</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            letterSpacing: '0.04em',
            color: 'var(--white)',
            marginBottom: '1rem',
          }}>
            REQUEST A FREE QUOTE
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.60)', lineHeight: 1.8 }}>
            Fill out the form and our team will get back to you within 1 hour.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div className="reveal">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--white)',
              letterSpacing: '0.06em',
              marginBottom: '2rem',
            }}>CONTACT INFORMATION</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '6px',
                    background: 'rgba(26,109,212,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#7ABAFF', flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.15rem' }}>
                      {label}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours box */}
            <div style={{
              background: 'rgba(26,109,212,0.15)',
              border: '1px solid rgba(26,109,212,0.3)',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#7ABAFF', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                BUSINESS HOURS
              </div>
              {[['Mon – Fri', '7:00 AM – 9:00 PM'], ['Saturday', '8:00 AM – 6:00 PM'], ['Sunday', 'Emergency Only']].map(([d, t]) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.65)' }}>{d}</span>
                  <span style={{ color: 'white', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'var(--white)', borderRadius: '8px',
                padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="John Smith" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+1 (555) 000-0000" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell us how we can help you..." required rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Status message */}
              {status === 'success' && (
                <div style={{ background: '#DCFCE7', color: '#166534', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500 }}>
                  ✓ {msg}
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500 }}>
                  ✕ {msg}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
                style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
