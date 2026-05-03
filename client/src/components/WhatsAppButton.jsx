export default function WhatsAppButton() {
  const phone = '15513302502';
  const message = encodeURIComponent('Hello! I found you on your website and I would like to get more information.');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.43-2.006A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.845l-.484-.287-5.01 1.192 1.234-4.874-.317-.5A13.226 13.226 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.876c-.398-.199-2.354-1.161-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.619-3.202-1.975-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.672-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.325 0 1.963 1.427 3.859 1.626 4.125.2.266 2.809 4.288 6.808 6.015.952.411 1.694.657 2.273.841.955.304 1.824.261 2.512.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.266-.763-.465z"/>
        </svg>
        <span className="whatsapp-label">Chat with us</span>
      </a>

      <style>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem 0.75rem 0.85rem;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
        }
        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(37,211,102,0.55);
        }
        .whatsapp-label {
          white-space: nowrap;
        }
        @media (max-width: 500px) {
          .whatsapp-label { display: none; }
          .whatsapp-btn { padding: 0.85rem; border-radius: 50%; }
        }
      `}</style>
    </>
  );
}
