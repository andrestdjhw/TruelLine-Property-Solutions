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
          background: linear-gradient(160deg, rgba(9,25,20,0.45) 0%, rgba(15,32,21,0.38) 55%, rgba(19,52,41,0.35) 100%);
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

        /* ── CONTENT WRAPPER ── */
        .tl-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 100px 4% 72px;
          max-width: 1600px; margin: 0 auto; width: 100%;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-hero-content.visible { opacity: 1; transform: translateY(0); }

        /* ── UNIFIED SPLIT CARD ── */
        .tl-hero-card {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 420px;
          background: rgba(252,247,236,0.65);
          backdrop-filter: blur(10px) saturate(115%);
          -webkit-backdrop-filter: blur(10px) saturate(115%);
          border: 1px solid rgba(252,247,236,0.25);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }

        /* Left half */
        .tl-hero-left {
          display: flex; flex-direction: column;
          padding: 56px 52px;
          position: relative;
        }
        /* Vertical divider — solo desktop */
        .tl-hero-left::after {
          content: '';
          position: absolute;
          top: 56px; bottom: 56px; right: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(42,90,73,0.18) 20%, rgba(42,90,73,0.18) 80%, transparent 100%);
        }

        /* Right half */
        .tl-hero-right {
          display: flex; align-items: center;
          padding: 40px 40px;
        }

        .tl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.3);
          color: #2A5A49; font-family: 'Barlow', sans-serif;
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
          color: #091914; margin-bottom: 24px;
        }
        .tl-hero h1 .accent {
          color: #2A5A49;
          text-shadow: none;
        }

        .tl-hero-sub {
          font-size: clamp(14px, 1.4vw, 16px); line-height: 1.75;
          color: rgba(9,25,20,0.65); max-width: 520px;
          margin-bottom: 36px;
        }

        .tl-hero-ghost-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; background: #2A5A49; color: #FCF7EC;
          border: 1px solid #2A5A49; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; width: fit-content;
          margin-bottom: 48px; box-shadow: 0 4px 14px rgba(42,90,73,0.3);
        }
        .tl-hero-ghost-btn:hover { background: #133429; border-color: #133429; color: #FCF7EC; transform: translateY(-2px); }

        /* Trust stats row */
        .tl-hero-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(42,90,73,0.18); border-radius: 6px; overflow: hidden;
          background: rgba(42,90,73,0.05);
          margin-top: auto;
        }
        .tl-hero-stat {
          padding: 16px 14px; text-align: center;
          border-right: 1px solid rgba(42,90,73,0.15);
        }
        .tl-hero-stat:last-child { border-right: none; }
        .tl-hero-stat-icon {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px;
        }
        .tl-hero-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(9,25,20,0.6);
          line-height: 1.3;
        }

        /* Form wrapper — sin background propio para integrarse a la card */
        .tl-hero-form-wrap {
          width: 100%;
          display: flex;
        }
        .tl-hero-form-wrap .cf-wrap {
          width: 100%;
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        /* Wave */
        .tl-hero-wave { position: relative; z-index: 10; margin-top: -2px; line-height: 0; }
        .tl-hero-wave svg { display: block; width: 100%; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .tl-hero-card { grid-template-columns: 1fr 380px; }
          .tl-hero-left { padding: 48px 40px; }
          .tl-hero-right { padding: 36px 32px; }
          .tl-hero h1 { font-size: clamp(44px, 6vw, 84px); }
        }
        @media (max-width: 900px) {
          .tl-hero-content {
            padding: 80px 24px 56px;
          }
          .tl-hero-card { grid-template-columns: 1fr; }
          .tl-hero-left { padding: 36px 28px; }
          /* En mobile, el divider pasa a horizontal */
          .tl-hero-left::after {
            top: auto; bottom: 0; right: 28px; left: 28px;
            width: auto; height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(42,90,73,0.18) 20%, rgba(42,90,73,0.18) 80%, transparent 100%);
          }
          .tl-hero-right { padding: 32px 28px; }
          .tl-hero h1 { font-size: clamp(44px, 10vw, 72px); }
          .tl-hero-sub { max-width: 100%; }
          .tl-hero-badge { margin-bottom: 20px; }
          .tl-hero-ghost-btn { margin-bottom: 32px; }
          .tl-hero-stats { margin-top: 0; }
        }
        @media (max-width: 540px) {
          .tl-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .tl-hero-stat:nth-child(2) { border-right: none; }
          .tl-hero-stat:nth-child(3) { border-top: 1px solid rgba(42,90,73,0.15); }
          .tl-hero-stat:nth-child(4) { border-top: 1px solid rgba(42,90,73,0.15); }
        }
        @media (min-width: 1600px) {
          .tl-hero-content { padding: 100px 6% 72px; max-width: 1800px; }
          .tl-hero-card { grid-template-columns: 1fr 480px; }
          .tl-hero-left { padding: 64px 56px; }
          .tl-hero-right { padding: 48px 44px; }
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

          {/* ── UNIFIED SPLIT CARD ── */}
          <div className="tl-hero-card">

            {/* LEFT — headline + trust stats */}
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

            {/* RIGHT — Contact Form */}
            <div className="tl-hero-right tl-hero-form-wrap">
              <ContactForm compact={true} />
            </div>

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