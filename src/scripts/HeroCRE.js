import React, { useEffect, useState } from "react"
import ContactForm from "./ContactForm"

function HeroCRE() {

  // ─── DATOS — edita aquí ───────────────────────────────────────────────
  const heroData = {
    eyebrow: "Holly Springs · Cary · Raleigh · Durham · Chapel Hill",
    headline: ["Your Property", "Held to a", "Higher Standard."],
    headlineAccent: 2,
    subheadline: "Complete exterior and property solutions for homeowners who expect quality, reliability, and results that last across the Triangle and Triad of North Carolina.",
    cta2: { label: "Explore Our Services", href: "#services" },
  }

  const stats = [
    { value: "Licensed &\nInsured",        label: "Fully Covered"           },
    { value: "BBB",                         label: "Accredited"              },
    { value: "Serving Holly Springs,\nCary, Chapel Hill & Beyond", label: "Service Area" },
    { value: "Continuous\nTraining",        label: "Certified Specialists"   },
  ]
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // ─── IMÁGENES DEL SLIDESHOW ────────────────────────────────────────
  // Actualizar con las URLs finales de WordPress Media
  const slides = [
    '/wp-content/uploads/2026/04/TruelineHeroSlide1-scaled.jpg',
    '/wp-content/uploads/2026/04/TruelineHeroSlide2-scaled.jpeg',   // DEV: reemplazar con imagen real
    '/wp-content/uploads/2026/04/TruelineHeroSlide3-scaled.jpg',   // DEV: reemplazar con imagen real
  ]
  // ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 6000) // cambia cada 6 segundos
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .tl-hero {
          position: relative; overflow: hidden;
          min-height: 100vh;
          display: flex; flex-direction: column;
          background: #091914;
        }

        /* ── SLIDESHOW LAYERS ── */
        .tl-slide {
          position: absolute; inset: 0; z-index: 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        .tl-slide.active { opacity: 1; }
        .tl-slide-overlay {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(160deg, rgba(9,25,20,0.88) 0%, rgba(15,32,21,0.82) 55%, rgba(19,52,41,0.80) 100%);
        }

        /* Watermark */
        .tl-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between; padding: 0 4%;
        }
        .tl-hero-wm svg { width: min(200px, 18%); opacity: 0.03; filter: brightness(100) grayscale(1); }

        /* Glows */
        .tl-hero-glows { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        .tl-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: tlGlow 8s ease-in-out infinite;
        }
        .tl-glow-1 { width: 500px; height: 500px; background: rgba(42,90,73,0.12); top: -120px; left: -100px; }
        .tl-glow-2 { width: 400px; height: 400px; background: rgba(19,52,41,0.1); bottom: -80px; right: 40%; animation-delay: 3s; }
        .tl-glow-3 { width: 350px; height: 350px; background: rgba(42,90,73,0.08); top: 20%; right: -60px; animation-delay: 5s; }
        @keyframes tlGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.12) translate(15px,-15px); opacity: 0.7; }
        }

        /* Grid */
        .tl-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── CONTENT — two column layout ── */
        .tl-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 100px 5% 72px;
          max-width: 1440px; margin: 0 auto; width: 100%;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
          gap: 64px;
        }
        .tl-hero-content.visible { opacity: 1; transform: translateY(0); }

        /* Left column */
        .tl-hero-left {
          flex: 1; min-width: 0; max-width: 680px;
          display: flex; flex-direction: column; gap: 0;
        }

        /* Right column */
        .tl-hero-right {
          width: 420px; flex-shrink: 0;
        }

        .tl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.3);
          color: rgba(42,160,90,0.9); font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 28px; width: fit-content;
          animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .tl-badge-dot { width: 6px; height: 6px; background: #2A5A49; border-radius: 50%; animation: tlPulse 2s infinite; flex-shrink: 0; }
        @keyframes tlPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .tl-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
          font-size: clamp(52px, 7vw, 108px); line-height: 0.92;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 24px;
        }
        .tl-hero h1 .accent {
          color: #ECEBC3;
          text-shadow: 0 0 60px rgba(42,90,73,0.4);
        }

        .tl-hero-sub {
          font-size: clamp(18px, 1.4vw, 16px); line-height: 1.75;
          color: rgba(200,215,240,0.5); max-width: 520px;
          margin-bottom: 36px;
        }

        .tl-hero-ghost-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; background: transparent; color: rgba(210,220,240,0.65);
          border: 1px solid rgba(42,90,73,0.35); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; width: fit-content;
          margin-bottom: 48px;
        }
        .tl-hero-ghost-btn:hover { border-color: #ECEBC3; color: #FCF7EC; background: rgba(42,90,73,0.1); }

        /* Trust stats row */
        .tl-hero-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
        }
        .tl-hero-stat {
          padding: 16px 14px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tl-hero-stat:last-child { border-right: none; }
        .tl-hero-stat-icon {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px;
        }
        .tl-hero-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(190,205,235,0.5);
          line-height: 1.3;
        }

        /* Form wrapper — override cf-wrap shadow para integrarlo mejor */
        .tl-hero-form-wrap .cf-wrap {
          background: rgba(13,22,16,0.92) !important;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(42,90,73,0.25);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5) !important;
        }
        .tl-hero-form-wrap .cf-title { color: #e8e0d5 !important; }
        .tl-hero-form-wrap .cf-sub { color: rgba(200,215,240,0.45) !important; }
        .tl-hero-form-wrap .cf-label { color: rgba(190,210,240,0.55) !important; }
        .tl-hero-form-wrap .cf-input,
        .tl-hero-form-wrap .cf-select,
        .tl-hero-form-wrap .cf-textarea {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(42,90,73,0.25) !important;
          color: #e8e0d5 !important;
        }
        .tl-hero-form-wrap .cf-input::placeholder,
        .tl-hero-form-wrap .cf-textarea::placeholder {
          color: rgba(200,215,240,0.25) !important;
        }
        .tl-hero-form-wrap .cf-input:focus,
        .tl-hero-form-wrap .cf-select:focus,
        .tl-hero-form-wrap .cf-textarea:focus {
          background: rgba(255,255,255,0.08) !important;
          border-color: #2A5A49 !important;
        }
        .tl-hero-form-wrap .cf-success h3 { color: #e8e0d5 !important; }
        .tl-hero-form-wrap .cf-success p { color: rgba(200,215,240,0.5) !important; }

        /* Wave */
        .tl-hero-wave { position: relative; z-index: 10; margin-top: -2px; line-height: 0; }
        .tl-hero-wave svg { display: block; width: 100%; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .tl-hero-right { width: 360px; }
          .tl-hero h1 { font-size: clamp(44px, 6vw, 84px); }
        }
        @media (max-width: 900px) {
          .tl-hero-content {
            flex-direction: column; align-items: stretch;
            padding: 80px 24px 56px; gap: 40px;
          }
          .tl-hero-right { width: 100%; }
          .tl-hero h1 { font-size: clamp(44px, 10vw, 72px); }
          .tl-hero-sub { max-width: 100%; }
          .tl-hero-badge { margin-bottom: 20px; }
          .tl-hero-ghost-btn { margin-bottom: 32px; }
        }
        @media (max-width: 540px) {
          .tl-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .tl-hero-stat:nth-child(2) { border-right: none; }
          .tl-hero-stat:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.06); }
          .tl-hero-stat:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>

      <section className="tl-hero">

        {/* ── SLIDESHOW BACKGROUND ── */}
        {slides.map((src, i) => (
          <div
            key={i}
            className={`tl-slide ${i === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
        <div className="tl-slide-overlay" />

        {/* Watermark */}
        <div className="tl-hero-wm" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="white">
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"/>
            <path d="M12 28 L12 18 L20 12 L28 18 L28 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            <line x1="12" y1="28" x2="28" y2="28" stroke="white" strokeWidth="1.5"/>
          </svg>
          <svg viewBox="0 0 40 40" fill="white" style={{ transform: "scaleX(-1)" }}>
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"/>
            <path d="M12 28 L12 18 L20 12 L28 18 L28 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            <line x1="12" y1="28" x2="28" y2="28" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="tl-hero-glows">
          <div className="tl-glow tl-glow-1" />
          <div className="tl-glow tl-glow-2" />
          <div className="tl-glow tl-glow-3" />
        </div>
        <div className="tl-hero-grid" />

        <div className={`tl-hero-content ${visible ? "visible" : ""}`}>

          {/* ── LEFT — headline + trust stats ── */}
          <div className="tl-hero-left">

            <div className="tl-hero-badge">
              <div className="tl-badge-dot" />
              {heroData.eyebrow}
            </div>

            <h1>
              {heroData.headline.map((line, i) => (
                <span key={i} className={i === heroData.headlineAccent ? "accent" : ""}>
                  {line}{i < heroData.headline.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="tl-hero-sub">{heroData.subheadline}</p>

            <a href={heroData.cta2.href} className="tl-hero-ghost-btn">
              {heroData.cta2.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>

            {/* Trust stats */}
            <div className="tl-hero-stats">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Licensed &\nInsured" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>, label: "BBB\nAccredited" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Serving Holly Springs,\nCary & Beyond" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>, label: "Continuous\nTraining" },
              ].map((s, i) => (
                <div key={i} className="tl-hero-stat">
                  <div className="tl-hero-stat-icon">{s.icon}</div>
                  <div className="tl-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT — Contact Form ── */}
          <div className="tl-hero-right tl-hero-form-wrap">
            <ContactForm compact={true} />
          </div>

        </div>

        {/* Wave */}
        <div className="tl-hero-wave">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "clamp(40px,6vw,80px)" }}>
            <path d="M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z" fill="#FCF7EC"/>
          </svg>
        </div>

      </section>
    </>
  )
}

export default HeroCRE