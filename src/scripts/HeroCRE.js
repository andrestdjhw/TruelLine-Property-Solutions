import React, { useEffect, useState } from "react"

function HeroCRE() {

  // ─── DATOS — edita aquí ───────────────────────────────────────────────
  const heroData = {
    eyebrow: "Why Homeowners Choose TrueLine?",
    headline: ["Your Property", "Held to a", "Higher Standard."],
    headlineAccent: 2, // índice de la línea que va en acento
    subheadline: "Complete exterior and property solutions for homeowners who expect quality, reliability, and results that last — across the Triangle and Triad of North Carolina.",
    cta1: { label: "Request a Free Estimate", href: "/contact" },
    cta2: { label: "Explore Our Services", href: "/services" },
  }

  const stats = [
    { value: "✦",      label: "Licensed & Insured" },
    { value: "✦",      label: "BBB Accredited" },
    { value: "✦",   label: "Serving Holly Springs, Cary, Chapel Hill & Beyond" },
    { value: "✦",   label: "Continuous Training & Certified Specialists" },
  ]
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .tl-hero {
          position: relative; overflow: hidden;
          background: linear-gradient(160deg, #080c18 0%, #0d1525 55%, #0a1118 100%);
          min-height: 92vh;
          display: flex; flex-direction: column;
        }

        /* Watermark */
        .tl-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between; padding: 0 6%;
        }
        .tl-hero-wm svg { width: min(240px, 26%); opacity: 0.04; filter: brightness(100) grayscale(1); }

        /* Glows */
        .tl-hero-glows { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        .tl-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: tlGlow 8s ease-in-out infinite;
        }
        .tl-glow-1 { width: 400px; height: 400px; background: rgba(74,160,80,0.1); top: -100px; left: -80px; }
        .tl-glow-2 { width: 500px; height: 500px; background: rgba(20,80,30,0.08); bottom: -100px; right: -60px; animation-delay: 3s; }
        .tl-glow-3 { width: 300px; height: 300px; background: rgba(74,160,80,0.06); bottom: 0; left: 35%; animation-delay: 5s; }
        @keyframes tlGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.15) translate(20px,-20px); opacity: 0.7; }
        }

        /* Grid */
        .tl-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Content */
        .tl-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 80px 32px 60px; text-align: center;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-hero-content.visible { opacity: 1; transform: translateY(0); }
        .tl-hero-inner { max-width: 900px; margin: 0 auto; }

        .tl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(74,160,80,0.1); border: 1px solid rgba(74,160,80,0.28);
          color: rgba(100,200,110,0.9); font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 32px; animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .tl-badge-dot { width: 6px; height: 6px; background: #4aa050; border-radius: 50%; animation: tlPulse 2s infinite; flex-shrink: 0; }
        @keyframes tlPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .tl-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(48px, 9vw, 108px); line-height: 0.82;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 28px;
        }
        .tl-hero h1 .accent {
          color: #4aa050;
          text-shadow: 0 0 60px rgba(74,160,80,0.3);
        }

        .tl-hero-sub {
          font-size: clamp(15px, 1.8vw, 18px); line-height: 1.7;
          color: rgba(200,215,240,0.5); max-width: 580px; margin: 0 auto 40px;
        }

        .tl-hero-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px;
        }
        .tl-hero-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: #4aa050; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 24px rgba(74,160,80,0.45);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .tl-hero-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(74,160,80,0.6); }
        .tl-hero-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: transparent; color: rgba(210,220,240,0.75);
          border: 1px solid rgba(74,160,80,0.3); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .tl-hero-btn-ghost:hover { border-color: #4aa050; color: #fff; background: rgba(74,160,80,0.08); }

        /* Stats */
        .tl-hero-stats {
          display: flex; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
          max-width: 640px; margin: 0 auto;
        }
        .tl-hero-stat {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tl-hero-stat:last-child { border-right: none; }
        .tl-hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800;
          color: #4aa050; letter-spacing: 0.04em; line-height: 1;
        }
        .tl-hero-stat-label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(190,205,235,0.35); margin-top: 4px;
        }

        /* Wave */
        .tl-hero-wave { position: relative; z-index: 10; margin-top: -2px; line-height: 0; }
        .tl-hero-wave svg { display: block; width: 100%; }

        @media (max-width: 640px) {
          .tl-hero-stats { flex-direction: column; }
          .tl-hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .tl-hero-stat:last-child { border-bottom: none; }
          .tl-hero-content { padding: 60px 20px 48px; }
        }
      `}</style>

      <section className="tl-hero">

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
          <div className="tl-hero-inner">

            <h1>
              {heroData.headline.map((line, i) => (
                <span key={i} className={i === heroData.headlineAccent ? "accent" : ""}>
                  {line}{i < heroData.headline.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="tl-hero-sub">{heroData.subheadline}</p>

            <div className="tl-hero-btns">
              <a href={heroData.cta1.href} className="tl-hero-btn-main">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {heroData.cta1.label}
              </a>
              <a href={heroData.cta2.href} className="tl-hero-btn-ghost">
                {heroData.cta2.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            </div>

           <div className="tl-hero-badge">
              <div className="tl-badge-dot" />
              {heroData.eyebrow}
            </div>     

            <div className="tl-hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="tl-hero-stat">
                  <div className="tl-hero-stat-val">{s.value}</div>
                  <div className="tl-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Wave de transición al blanco */}
        <div className="tl-hero-wave">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "clamp(40px,6vw,80px)" }}>
            <path d="M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z" fill="#f5f3ef"/>
          </svg>
        </div>

      </section>
    </>
  )
}

export default HeroCRE