import React, { useState } from "react"
import emailjs from "@emailjs/browser"

// ─── CREDENCIALES EmailJS ────────────────────────────────────────────────────
// Reemplaza estos tres valores con los de tu cuenta en emailjs.com
const EMAILJS_PUBLIC_KEY  = "NPFppts74nYqJf4Ci"
const EMAILJS_SERVICE_ID = "service_2xpp6jf"  
const EMAILJS_TEMPLATE_ID = "template_8rwqc1k"
// ────────────────────────────────────────────────────────────────────────────

/**
 * ContactForm — componente reutilizable de formulario de contacto.
 * Se monta en cualquier div con id="cre-contact-form".
 *
 * Props (opcionales):
 *   - compact: bool  — versión sin padding exterior para embeber en tarjeta
 */
function ContactForm({ compact = false }) {

  // ─── DATOS — edita aquí ──────────────────────────────────────────────────
  const services = [
    "Landscaping",
    "Hardscape & Concrete",
    "Drainage & Erosion Control",
    "Tree Services",
    "Exterior Cleaning",
    "Property Preparation",
    "Not sure yet — I need advice",
  ]
  // ────────────────────────────────────────────────────────────────────────

  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  })

  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle")

  const handleChange = e =>
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus("sending")

    // Los keys del objeto deben coincidir con las variables
    // de tu template en EmailJS: {{name}}, {{email}}, etc.
    const templateParams = {
      name:    formState.name,
      email:   formState.email,
      phone:   formState.phone,
      service: formState.service,
      message: formState.message,
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success")
        setFormState({ name: "", email: "", phone: "", service: "", message: "" })
      })
      .catch(err => {
        console.error("EmailJS error:", err)
        setStatus("error")
      })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cf-wrap {
          background: #fff; border-radius: 6px;
          padding: ${compact ? "28px 24px" : "44px 40px"};
          box-shadow: 0 2px 24px rgba(26,20,16,0.09);
          font-family: 'Barlow', sans-serif;
        }
        .cf-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 26px; letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 6px;
        }
        .cf-title span { color: #4aa050; }
        .cf-sub { color: #9a8f86; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
        .cf-rule { width: 36px; height: 3px; background: #4aa050; border-radius: 2px; margin-bottom: 28px; }

        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
        .cf-row.full { grid-template-columns: 1fr; }
        .cf-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 18px; }
        .cf-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #6b6560;
        }
        .cf-label span { color: #4aa050; }

        .cf-input, .cf-select, .cf-textarea {
          width: 100%; padding: 11px 14px;
          background: #faf8f5; border: 1.5px solid #e8e2dc;
          border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 14px; color: #1a1410;
          transition: border-color 0.2s, box-shadow 0.2s; outline: none;
          appearance: none; -webkit-appearance: none;
        }
        .cf-input:focus, .cf-select:focus, .cf-textarea:focus {
          border-color: #4aa050; box-shadow: 0 0 0 3px rgba(74,160,80,0.1);
          background: #fff;
        }
        .cf-textarea { resize: vertical; min-height: 120px; }
        .cf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234aa050' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 40px; cursor: pointer;
        }

        .cf-submit {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; padding: 14px 24px; background: #4aa050; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(74,160,80,0.38);
          transition: transform 0.2s, box-shadow 0.2s; margin-top: 6px;
          position: relative; overflow: hidden;
        }
        .cf-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
        .cf-submit::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cf-submit:hover:not(:disabled)::before { left: 160%; }
        .cf-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(74,160,80,0.5); }

        /* Feedback messages */
        .cf-error-banner {
          margin-top: 14px; padding: 12px 16px;
          background: #fff5f5; border: 1.5px solid #fca5a5;
          border-radius: 4px; color: #b91c1c;
          font-size: 13px; line-height: 1.5;
        }

        /* Success state */
        .cf-success { text-align: center; padding: 32px 20px; }
        .cf-success-icon {
          width: 56px; height: 56px; background: rgba(74,160,80,0.1);
          border: 2px solid rgba(74,160,80,0.3); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
        }
        .cf-success h3 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 24px;
          letter-spacing: 0.04em; text-transform: uppercase; color: #1a1410; margin-bottom: 10px;
        }
        .cf-success h3 span { color: #4aa050; }
        .cf-success p { color: #9a8f86; font-size: 14px; line-height: 1.65; }

        @media (max-width: 540px) {
          .cf-row { grid-template-columns: 1fr; }
          .cf-wrap { padding: 24px 18px; }
        }
      `}</style>

      <div className="cf-wrap">
        {status === "success" ? (
          /* ── Estado de éxito ── */
          <div className="cf-success">
            <div className="cf-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4aa050" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3>Message <span>Sent!</span></h3>
            <p>Thanks for reaching out. We'll review your request and get back to you within 1 business day with a free estimate.</p>
          </div>
        ) : (
          <>
            <div className="cf-title">Request a <span>Free Estimate</span></div>
            <p className="cf-sub">Tell us about your property and what you need — we'll get back to you within 1 business day.</p>
            <div className="cf-rule" />

            <form onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Full Name <span>*</span></label>
                  <input className="cf-input" type="text" name="name" placeholder="Jane Smith"
                    required value={formState.name} onChange={handleChange} />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email <span>*</span></label>
                  <input className="cf-input" type="email" name="email" placeholder="jane@email.com"
                    required value={formState.email} onChange={handleChange} />
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Phone</label>
                  <input className="cf-input" type="tel" name="phone" placeholder="(919) 000-0000"
                    value={formState.phone} onChange={handleChange} />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Service Needed <span>*</span></label>
                  <select className="cf-select" name="service" required
                    value={formState.service} onChange={handleChange}>
                    <option value="">— Select a service —</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="cf-field">
                <label className="cf-label">Project Description <span>*</span></label>
                <textarea className="cf-textarea" name="message"
                  placeholder="Describe your property, the work you need, and any relevant details — location, size, timeline..."
                  required value={formState.message} onChange={handleChange} />
              </div>

              <button type="submit" className="cf-submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send My Request
                  </>
                )}
              </button>

              {/* ── Banner de error (solo visible si el envío falló) ── */}
              {status === "error" && (
                <div className="cf-error-banner">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default ContactForm