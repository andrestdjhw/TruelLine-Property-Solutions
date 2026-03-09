import React, { useEffect, useRef, useState } from "react"

function HeroCRE() {

  // ─── DATOS — edita aquí ───────────────────────────────────────────────
  const heroData = {
    eyebrow: "NAICS 23813 · 23839 · Licensed General Contractor",
    headline: ["Built to", "Perform.", "Built to Last."],
    headlineAccent: 1, // índice de la línea que va en naranja
    subheadline: "Structural framing, heavy timber, exterior envelope, and interior finishes — delivered with precision from foundation to finish.",
    cta1: { label: "Request a Quote", href: "/contact" },
    cta2: { label: "Our Services", href: "#services" },
  }

  const stats = [
    { value: "20+", label: "Years Active" },
    { value: "500+", label: "Projects Completed" },
    { value: "NAICS", label: "Certified" },
    { value: "24/7", label: "GC Support" },
  ]

  const services = [
    {
      href: "/services/structural-framing",
      title: "Structural Framing",
      desc: "Precision wood and steel framing for residential and commercial builds, from foundations to roof.",
      icon: "framing",
    },
    {
      href: "/services/heavy-timber",
      title: "Heavy Timber Construction",
      desc: "Exposed timber structures built with craftsmanship — ideal for commercial, hospitality, and custom homes.",
      icon: "timber",
    },
    {
      href: "/services/exterior-envelope",
      title: "Exterior Envelope & Siding",
      desc: "Weather-tight building envelopes with fiber cement, composite, and specialty siding systems.",
      icon: "envelope",
    },
    {
      href: "/services/interior-finishes",
      title: "Interior Finishes & Drywall",
      desc: "Complete interior finishing from drywall and taping to flooring, trim, and paint-ready surfaces.",
      icon: "interior",
    },
    {
      href: "/services/residential-remodel",
      title: "Residential Remodel",
      desc: "Full-scope home renovations: kitchen, bath, additions, and whole-home transformations.",
      icon: "remodel",
    },
    {
      href: "/services/commercial",
      title: "Commercial (Selective)",
      desc: "Selective commercial tenant improvements and light commercial builds for the right partners.",
      icon: "commercial",
    },
  ]

  const whyItems = [
    { title: "Licensed & Insured", desc: "Fully licensed in all jurisdictions we operate. Comprehensive liability and workers' comp coverage on every job." },
    { title: "GC-Ready", desc: "We understand GC workflows. Pre-qualified, documented, and ready to integrate into your project schedule." },
    { title: "On-Time Delivery", desc: "We track milestones rigorously and communicate proactively — no surprises on your critical path." },
    { title: "Quality Guarantee", desc: "Every project is backed by our workmanship warranty. We stand behind what we build." },
  ]
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    // Entrada animada al cargar
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Intersection Observer para animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cre-in-view")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    )
    document.querySelectorAll(".cre-reveal").forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ServiceIcon = ({ type }) => {
    const icons = {
      framing: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10"/>,
      timber:  <><path d="M17 8h1a4 4 0 010 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></>,
      envelope:<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>,
      interior:<><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>,
      remodel: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
      commercial:<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/></>,
    }
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </svg>
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cre-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; }

        /* ── SCROLL REVEAL ── */
        .cre-reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-reveal.cre-in-view { opacity: 1; transform: translateY(0); }
        .cre-reveal:nth-child(1) { transition-delay: 0s; }
        .cre-reveal:nth-child(2) { transition-delay: 0.1s; }
        .cre-reveal:nth-child(3) { transition-delay: 0.2s; }
        .cre-reveal:nth-child(4) { transition-delay: 0.3s; }
        .cre-reveal:nth-child(5) { transition-delay: 0.4s; }
        .cre-reveal:nth-child(6) { transition-delay: 0.5s; }

        /* ══════════════════════════════════════════
           HERO
        ══════════════════════════════════════════ */
        .cre-hero {
          position: relative; overflow: hidden;
          background: linear-gradient(160deg, #080c18 0%, #0d1525 55%, #0b1020 100%);
          min-height: 92vh;
          display: flex; flex-direction: column;
        }

        /* Watermark logo — igual que SERNA */
        .cre-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%;
        }
        .cre-hero-wm-hex {
          width: min(260px, 28%); opacity: 0.04;
          filter: brightness(100) grayscale(1);
        }

        /* Glows animados */
        .cre-hero-glows {
          position: absolute; inset: 0; z-index: 2; opacity: 1; pointer-events: none;
        }
        .cre-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: creGlow 8s ease-in-out infinite;
        }
        .cre-glow-1 { width: 400px; height: 400px; background: rgba(230,100,20,0.12); top: -100px; left: -100px; }
        .cre-glow-2 { width: 500px; height: 500px; background: rgba(20,60,180,0.1); bottom: -100px; right: -50px; animation-delay: 3s; }
        .cre-glow-3 { width: 300px; height: 300px; background: rgba(230,100,20,0.07); bottom: 0; left: 30%; animation-delay: 5s; }
        @keyframes creGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.15) translate(20px, -20px); opacity: 0.7; }
        }

        /* Grid pattern */
        .cre-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Hero content */
        .cre-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 80px 32px 60px;
          text-align: center;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-hero-content.visible { opacity: 1; transform: translateY(0); }

        .cre-hero-inner { max-width: 900px; margin: 0 auto; }

        .cre-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.28);
          color: #e88040; font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 32px; animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .cre-badge-dot { width: 6px; height: 6px; background: #e66414; border-radius: 50%; animation: crePulse 2s infinite; }
        @keyframes crePulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .cre-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(52px, 9vw, 110px); line-height: 0.92;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 28px;
        }
        .cre-hero h1 .accent {
          color: #e66414;
          text-shadow: 0 0 60px rgba(230,100,20,0.3);
        }

        .cre-hero-sub {
          font-size: clamp(15px, 1.8vw, 18px); line-height: 1.7;
          color: rgba(200,215,240,0.5); max-width: 580px; margin: 0 auto 40px;
        }

        .cre-hero-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px;
        }
        .cre-hero-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 24px rgba(230,100,20,0.45);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .cre-hero-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(230,100,20,0.6); }
        .cre-hero-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: transparent; color: rgba(210,220,240,0.75);
          border: 1px solid rgba(230,100,20,0.3); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .cre-hero-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.07); }

        /* Stats bar */
        .cre-hero-stats {
          display: flex; gap: 0; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
          max-width: 640px; margin: 0 auto;
        }
        .cre-hero-stat {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .cre-hero-stat:last-child { border-right: none; }
        .cre-hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800;
          color: #e66414; letter-spacing: 0.04em; line-height: 1;
        }
        .cre-hero-stat-label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(190,205,235,0.35); margin-top: 4px;
        }

        /* Wave SVG — igual estructura que SERNA */
        .cre-hero-wave {
          position: relative; z-index: 10; margin-top: -2px; line-height: 0;
        }
        .cre-hero-wave svg { display: block; width: 100%; }

        /* ══════════════════════════════════════════
           MAIN CONTENT
        ══════════════════════════════════════════ */
        .cre-main { background: #f5f3ef; }
        .cre-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        /* Section header */
        .cre-section-head { text-align: center; margin-bottom: 52px; }
        .cre-section-label {
          display: inline-block; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase; color: #e66414;
          margin-bottom: 12px;
        }
        .cre-section-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(28px, 4vw, 44px); letter-spacing: 0.02em; text-transform: uppercase;
          color: #1a1410; line-height: 1.05; margin-bottom: 14px;
        }
        .cre-section-title span { color: #e66414; }
        .cre-section-desc { color: #6b6560; font-size: 16px; line-height: 1.7; max-width: 560px; margin: 0 auto; }
        .cre-section-rule {
          width: 48px; height: 3px; background: #e66414; border-radius: 2px; margin: 18px auto 0;
        }

        /* ── SERVICES ── */
        .cre-services-section { padding: 88px 0; }
        .cre-services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .cre-service-card {
          background: #fff; border-radius: 6px;
          box-shadow: 0 2px 20px rgba(26,20,16,0.08), 0 1px 3px rgba(26,20,16,0.05);
          overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .cre-service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,20,16,0.14); }
        .cre-service-card-top {
          height: 160px;
          background: linear-gradient(135deg, #0d1525 0%, #162040 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .cre-service-card-top::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(230,100,20,0.12), transparent 60%);
        }
        .cre-service-card-top svg { color: rgba(230,150,80,0.85); position: relative; z-index: 1; }
        .cre-service-card-body { padding: 24px; }
        /* Watermark en cards — igual que SERNA .card-watermark::after */
        .cre-service-card::after {
          content: ''; position: absolute; bottom: 12px; right: 12px;
          width: 70px; height: 70px; pointer-events: none; z-index: 0;
          background: url('/wp-content/uploads/2026/02/logo-cre-watermark.png') no-repeat center/contain;
          opacity: 0.04; filter: grayscale(100%) brightness(0);
        }
        .cre-service-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 20px; letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 10px; position: relative; z-index: 1;
        }
        .cre-service-card-desc {
          color: #6b6560; font-size: 13.5px; line-height: 1.65; margin-bottom: 18px;
          position: relative; z-index: 1;
        }
        .cre-service-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #e66414; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s; position: relative; z-index: 1;
        }
        .cre-service-link:hover { gap: 10px; }
        .cre-service-link svg { transition: transform 0.2s; }
        .cre-service-link:hover svg { transform: translateX(3px); }

        /* ── WHY US ── */
        .cre-why-section {
          padding: 88px 0;
          background: linear-gradient(160deg, #0d1525 0%, #111e35 100%);
          position: relative; overflow: hidden;
        }
        .cre-why-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(230,100,20,0.07) 0%, transparent 65%),
            repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
            repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
        }
        .cre-why-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px; position: relative; z-index: 1;
        }
        .cre-why-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; padding: 28px 28px 28px 24px;
          border-left: 3px solid #e66414;
          transition: background 0.2s, border-color 0.2s;
        }
        .cre-why-card:hover { background: rgba(230,100,20,0.05); border-left-color: #ff8c3a; }
        .cre-why-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 18px;
          letter-spacing: 0.06em; text-transform: uppercase; color: #e8ddd0; margin-bottom: 10px;
        }
        .cre-why-card-desc { color: rgba(200,215,240,0.45); font-size: 14px; line-height: 1.65; }
        .cre-why-section .cre-section-title { color: #e8ddd0; }
        .cre-why-section .cre-section-desc { color: rgba(200,215,240,0.45); }
        .cre-why-section .cre-section-label { color: #e88040; }

        /* ── CTA SECTION ── */
        .cre-cta-section {
          padding: 88px 0;
          background: #f5f3ef;
        }
        .cre-cta-box {
          background: #fff; border-radius: 8px;
          box-shadow: 0 4px 40px rgba(26,20,16,0.1);
          padding: 64px 48px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cre-cta-box::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(230,100,20,0.04) 0%, transparent 70%);
        }
        .cre-cta-box h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(30px, 4vw, 48px); letter-spacing: 0.03em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 14px; position: relative; z-index: 1;
        }
        .cre-cta-box h2 span { color: #e66414; }
        .cre-cta-box p {
          color: #6b6560; font-size: 16px; line-height: 1.7;
          max-width: 520px; margin: 0 auto 36px; position: relative; z-index: 1;
        }
        .cre-cta-box-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .cre-cta-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(230,100,20,0.38); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .cre-cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.5); }
        .cre-cta-btn-ghost {
          padding: 14px 28px; background: transparent; color: #1a1410;
          border: 2px solid rgba(26,20,16,0.2); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .cre-cta-btn-ghost:hover { border-color: #e66414; color: #e66414; }

        /* ── MAP ── */
        .cre-map-section { padding: 0 0 88px; }
        .cre-map-wrap {
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 4px 30px rgba(26,20,16,0.12);
        }
        .cre-map-wrap iframe { display: block; }

        @media (max-width: 1024px) {
          .cre-services-grid { grid-template-columns: repeat(2, 1fr); }
          .cre-why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .cre-services-grid { grid-template-columns: 1fr; }
          .cre-hero-stats { flex-direction: column; }
          .cre-hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .cre-hero-stat:last-child { border-bottom: none; }
          .cre-container { padding: 0 20px; }
          .cre-cta-box { padding: 40px 24px; }
        }
      `}</style>

      <div className="cre-page">

        {/* ══ HERO ══ */}
        <section className="cre-hero">

          {/* Watermark — misma técnica que SERNA */}
          <div className="cre-hero-wm" aria-hidden="true">
            <svg className="cre-hero-wm-hex" viewBox="0 0 46 50" fill="white">
              <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
              <path d="M10 19L23 12L36 19" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
              <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
            </svg>
            <svg className="cre-hero-wm-hex" viewBox="0 0 46 50" fill="white" style={{ transform: "scaleX(-1)" }}>
              <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
              <path d="M10 19L23 12L36 19" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
              <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
            </svg>
          </div>

          <div className="cre-hero-glows">
            <div className="cre-glow cre-glow-1" />
            <div className="cre-glow cre-glow-2" />
            <div className="cre-glow cre-glow-3" />
          </div>
          <div className="cre-hero-grid" />

          <div className={`cre-hero-content ${visible ? "visible" : ""}`}>
            <div className="cre-hero-inner">
              <div className="cre-hero-badge">
                <div className="cre-badge-dot" />
                {heroData.eyebrow}
              </div>

              <h1>
                {heroData.headline.map((line, i) => (
                  <span key={i} className={i === heroData.headlineAccent ? "accent" : ""}>
                    {line}{i < heroData.headline.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="cre-hero-sub">{heroData.subheadline}</p>

              <div className="cre-hero-btns">
                <a href={heroData.cta1.href} className="cre-hero-btn-main">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {heroData.cta1.label}
                </a>
                <a href={heroData.cta2.href} className="cre-hero-btn-ghost">
                  {heroData.cta2.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>

              <div className="cre-hero-stats">
                {stats.map((s, i) => (
                  <div key={i} className="cre-hero-stat">
                    <div className="cre-hero-stat-val">{s.value}</div>
                    <div className="cre-hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave — igual estructura SVG que SERNA */}
          <div className="cre-hero-wave">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "clamp(40px, 6vw, 80px)" }}>
              <path d="M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z" fill="#f5f3ef"/>
            </svg>
          </div>
        </section>

        {/* ══ MAIN CONTENT ══ */}
        <div className="cre-main">

          {/* ── SERVICES ── */}
          <section id="services" className="cre-services-section">
            <div className="cre-container">
              <div className="cre-section-head cre-reveal">
                <span className="cre-section-label">What We Build</span>
                <h2 className="cre-section-title">Our <span>Services</span></h2>
                <p className="cre-section-desc">From structural framing to interior finishes — complete construction capabilities under one reliable partner.</p>
                <div className="cre-section-rule" />
              </div>

              <div className="cre-services-grid">
                {services.map((s, i) => (
                  <div key={i} className="cre-service-card cre-reveal">
                    <div className="cre-service-card-top">
                      <ServiceIcon type={s.icon} />
                    </div>
                    <div className="cre-service-card-body">
                      <div className="cre-service-card-title">{s.title}</div>
                      <p className="cre-service-card-desc">{s.desc}</p>
                      <a href={s.href} className="cre-service-link">
                        Learn More
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY CRE ── */}
          <section className="cre-why-section">
            <div className="cre-container">
              <div className="cre-section-head cre-reveal">
                <span className="cre-section-label">Why CRE</span>
                <h2 className="cre-section-title" style={{ color: "#e8ddd0" }}>Built on <span>Trust</span></h2>
                <p className="cre-section-desc" style={{ color: "rgba(200,215,240,0.45)" }}>We don't just build structures — we build partnerships with general contractors and homeowners who demand more.</p>
                <div className="cre-section-rule" />
              </div>
              <div className="cre-why-grid">
                {whyItems.map((w, i) => (
                  <div key={i} className="cre-why-card cre-reveal">
                    <div className="cre-why-card-title">{w.title}</div>
                    <p className="cre-why-card-desc">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cre-cta-section">
            <div className="cre-container">
              <div className="cre-cta-box cre-reveal">
                <h2>Ready to <span>Start</span> Your Project?</h2>
                <p>Tell us about your build. We'll review your plans and get back to you with a clear, competitive proposal.</p>
                <div className="cre-cta-box-btns">
                  <a href="/contact" className="cre-cta-btn-main">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    Request a Quote
                  </a>
                  <a href="/for-gcs" className="cre-cta-btn-ghost">General Contractor Portal</a>
                  <a href="/projects" className="cre-cta-btn-ghost">View Projects</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── MAP ── */}
          <section className="cre-map-section">
            <div className="cre-container">
              <div className="cre-section-head cre-reveal">
                <span className="cre-section-label">Find Us</span>
                <h2 className="cre-section-title">Our <span>Location</span></h2>
                <div className="cre-section-rule" />
              </div>
              <div className="cre-map-wrap cre-reveal">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405069536!2d-118.69192!3d34.02016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fefa34c8f2cbc!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CRE Construction Group Location"
                />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default HeroCRE