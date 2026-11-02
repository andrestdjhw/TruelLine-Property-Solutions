import React, { useState, useEffect } from "react"

const STORAGE_KEY = "tl_cookie_consent"

function CookieConsentCRE() {
  const [visible, setVisible] = useState(false)

  // Muestra el modal solo si el usuario aún no ha respondido
  useEffect(() => {
    let saved = null
    try { saved = localStorage.getItem(STORAGE_KEY) } catch (e) {}
    if (!saved) setVisible(true)

    // Permite reabrir el modal desde el link "Cookie Settings" del footer
    const open = () => setVisible(true)
    window.addEventListener("tl:open-cookie-settings", open)
    return () => window.removeEventListener("tl:open-cookie-settings", open)
  }, [])

  // Bloquea el scroll del sitio mientras el modal está abierto
  useEffect(() => {
    if (!visible) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = prev }
  }, [visible])

  const respond = (value) => {
    try { localStorage.setItem(STORAGE_KEY, value) } catch (e) {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .tl-cookie-overlay {
          position: fixed; inset: 0; z-index: 2000;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          background: rgba(9,25,20,0.35);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          animation: tlCookieFade 0.3s ease-out;
        }
        .tl-cookie-modal {
          width: 100%; max-width: 460px;
          background: #FCF7EC; border: 1px solid rgba(42,90,73,0.2);
          border-top: 3px solid #2A5A49; border-radius: 6px;
          box-shadow: 0 24px 64px rgba(9,25,20,0.25);
          padding: 32px 28px 28px; text-align: center;
          animation: tlCookieRise 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-cookie-icon {
          width: 52px; height: 52px; margin: 0 auto 16px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(42,90,73,0.08); color: #2A5A49; border-radius: 50%;
        }
        .tl-cookie-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 24px; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; color: #091914;
          margin-bottom: 10px;
        }
        .tl-cookie-text {
          font-family: 'Barlow', sans-serif; font-size: 14px; line-height: 1.65;
          color: rgba(9,25,20,0.65); margin-bottom: 24px;
        }
        .tl-cookie-text a { color: #2A5A49; font-weight: 600; text-decoration: underline; }
        .tl-cookie-text a:hover { color: #133429; }
        .tl-cookie-actions { display: flex; gap: 10px; }
        .tl-cookie-btn {
          flex: 1; padding: 13px 18px; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .tl-cookie-accept { background: #2A5A49; color: #FCF7EC; border: 1px solid #2A5A49; }
        .tl-cookie-accept:hover { background: #133429; border-color: #133429; }
        .tl-cookie-decline { background: transparent; color: #2A5A49; border: 1px solid rgba(42,90,73,0.4); }
        .tl-cookie-decline:hover { background: rgba(42,90,73,0.08); border-color: #2A5A49; }
        @keyframes tlCookieFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes tlCookieRise { from { opacity: 0; transform: translateY(16px) scale(0.98) } to { opacity: 1; transform: none } }
        @media (max-width: 480px) {
          .tl-cookie-modal { padding: 28px 20px 20px; }
          .tl-cookie-actions { flex-direction: column-reverse; }
        }
      `}</style>

      <div className="tl-cookie-overlay">
        <div className="tl-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="tl-cookie-title">
          <div className="tl-cookie-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" />
            </svg>
          </div>
          <h2 id="tl-cookie-title" className="tl-cookie-title">We Use Cookies</h2>
          <p className="tl-cookie-text">
            We use cookies to improve your browsing experience, analyze site traffic, and understand where our visitors come from. By clicking "Accept", you consent to our use of cookies. Learn more in our <a href="/privacy">Privacy Policy</a>.
          </p>
          <div className="tl-cookie-actions">
            <button type="button" className="tl-cookie-btn tl-cookie-decline" onClick={() => respond("declined")}>Decline</button>
            <button type="button" className="tl-cookie-btn tl-cookie-accept" onClick={() => respond("accepted")} autoFocus>Accept</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieConsentCRE
