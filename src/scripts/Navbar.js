import { useState, useEffect } from "react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Inicio")
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = ["Instalación de Techos", "Reparación de Techos", "Canaletas & Drenaje", "Inspecciones"]
  const links = ["Inicio", "Servicios", "Galería", "Contacto"]

  return (
    <div style={{ fontFamily: "'Oswald', sans-serif", background: "#1a1410", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── TOP BAR ── */
        .top-bar {
          background: #0f0c09;
          border-bottom: 1px solid rgba(180,120,60,0.2);
          padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: 38px;
        }
        .top-bar-left {
          display: flex; align-items: center; gap: 20px;
        }
        .top-info {
          display: flex; align-items: center; gap: 6px;
          color: rgba(210,180,140,0.55); font-family: 'Source Sans 3', sans-serif;
          font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .top-info:hover { color: #c8864a; }
        .top-info svg { opacity: 0.7; flex-shrink: 0; }
        .top-divider { width: 1px; height: 14px; background: rgba(255,255,255,0.1); }
        .top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(180,100,40,0.15); border: 1px solid rgba(180,100,40,0.3);
          color: #c8864a; font-family: 'Source Sans 3', sans-serif;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 3px;
        }
        .top-badge-dot {
          width: 6px; height: 6px; background: #c8864a; border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* ── NAVBAR ── */
        .navbar {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          background: ${isScrolled
            ? "rgba(18,13,9,0.97)"
            : "linear-gradient(180deg, #1a1410 0%, #1a1410 100%)"};
          backdrop-filter: ${isScrolled ? "blur(20px)" : "none"};
          box-shadow: ${isScrolled
            ? "0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(180,100,40,0.25)"
            : "0 1px 0 rgba(255,255,255,0.05)"};
          border-bottom: 1px solid rgba(140,90,40,0.18);
        }

        .nav-inner {
          max-width: 1240px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: ${isScrolled ? "62px" : "74px"};
          transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        /* Logo */
        .logo {
          display: flex; align-items: center; gap: 12px; cursor: pointer;
          text-decoration: none; flex-shrink: 0;
        }
        .logo-shield {
          width: 46px; height: 50px; position: relative;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .logo-shield svg { width: 46px; height: 50px; }
        .logo-text { display: flex; flex-direction: column; }
        .logo-main {
          font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 22px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #e8ddd0; line-height: 1;
        }
        .logo-main span { color: #c8864a; }
        .logo-sub {
          font-family: 'Source Sans 3', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(180,140,100,0.6); margin-top: 2px;
        }

        /* Links */
        .nav-links {
          display: flex; align-items: center; gap: 0; list-style: none;
        }
        .nav-link-item { position: relative; }
        .nav-link {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 16px; font-family: 'Oswald', sans-serif;
          font-size: 14px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(210,190,165,0.65);
          background: none; border: none; cursor: pointer;
          transition: color 0.2s, background 0.2s; border-radius: 4px;
        }
        .nav-link:hover { color: #e8ddd0; background: rgba(255,255,255,0.04); }
        .nav-link.active { color: #e8ddd0; }
        .active-indicator {
          position: absolute; bottom: -1px; left: 16px; right: 16px;
          height: 2px; background: linear-gradient(90deg, #c8864a, #e8a060);
          border-radius: 2px 2px 0 0;
        }
        .chevron {
          transition: transform 0.25s;
          opacity: 0.6;
        }
        .chevron.open { transform: rotate(180deg); }

        /* Dropdown */
        .dropdown {
          position: absolute; top: calc(100% + 8px); left: 0;
          background: #1c1510; border: 1px solid rgba(140,90,40,0.3);
          border-radius: 6px; padding: 6px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
          min-width: 210px;
          opacity: ${servicesOpen ? "1" : "0"};
          transform: ${servicesOpen ? "translateY(0)" : "translateY(-8px)"};
          pointer-events: ${servicesOpen ? "all" : "none"};
          transition: opacity 0.2s, transform 0.2s;
          z-index: 50;
        }
        .dropdown::before {
          content: ''; position: absolute; top: -5px; left: 20px;
          width: 8px; height: 8px; background: #1c1510;
          border-left: 1px solid rgba(140,90,40,0.3);
          border-top: 1px solid rgba(140,90,40,0.3);
          transform: rotate(45deg);
        }
        .drop-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; color: rgba(210,190,165,0.7);
          font-family: 'Source Sans 3', sans-serif; font-size: 13.5px; font-weight: 500;
          cursor: pointer; border-radius: 4px; transition: all 0.15s;
          border: none; background: none; width: 100%; text-align: left;
          white-space: nowrap;
        }
        .drop-item:hover {
          color: #e8ddd0; background: rgba(200,134,74,0.1);
        }
        .drop-item::before {
          content: ''; width: 3px; height: 3px; border-radius: 50%;
          background: #c8864a; flex-shrink: 0; opacity: 0.6;
        }
        .drop-item:hover::before { opacity: 1; }

        /* CTA - Call Now */
        .cta-call {
          display: flex; align-items: center; gap: 9px;
          padding: 11px 20px;
          background: linear-gradient(135deg, #c8864a 0%, #a0622e 100%);
          color: #0f0c09; border: none; border-radius: 5px; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(180,100,40,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap; position: relative; overflow: hidden;
        }
        .cta-call::after {
          content: ''; position: absolute; top: 0; left: -100%; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transform: skewX(-20deg); transition: left 0.5s;
        }
        .cta-call:hover::after { left: 150%; }
        .cta-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(180,100,40,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .cta-call:active { transform: translateY(0); }
        .phone-icon-wrap {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Hamburger */
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          width: 40px; height: 40px; align-items: center; justify-content: center;
          background: rgba(200,134,74,0.1); border: 1px solid rgba(200,134,74,0.25);
          border-radius: 5px; cursor: pointer; transition: background 0.2s;
        }
        .hamburger:hover { background: rgba(200,134,74,0.18); }
        .ham-bar {
          width: 20px; height: 2px; background: #c8864a; border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1); transform-origin: center;
        }
        .hamburger.open .ham-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .ham-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .ham-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 768px) {
          .nav-links, .cta-call { display: none !important; }
          .hamburger { display: flex !important; }
          .top-bar-left { display: none; }
        }

        /* Mobile Menu */
        .mob-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: #0f0c09;
          display: flex; flex-direction: column;
          opacity: ${menuOpen ? "1" : "0"};
          pointer-events: ${menuOpen ? "all" : "none"};
          transform: ${menuOpen ? "translateX(0)" : "translateX(100%)"};
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .mob-header {
          padding: 20px 24px; display: flex; align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(140,90,40,0.2);
        }
        .mob-close {
          width: 40px; height: 40px; background: rgba(200,134,74,0.1);
          border: 1px solid rgba(200,134,74,0.25); border-radius: 5px;
          color: #c8864a; font-size: 20px; display: flex; align-items: center;
          justify-content: center; cursor: pointer;
        }
        .mob-links {
          flex: 1; display: flex; flex-direction: column; justify-content: center;
          padding: 32px 32px; gap: 4px;
        }
        .mob-link {
          font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: rgba(210,190,165,0.5); background: none; border: none;
          cursor: pointer; text-align: left; padding: 8px 16px; border-radius: 5px;
          transition: all 0.2s; border-left: 3px solid transparent;
        }
        .mob-link:hover, .mob-link.active {
          color: #e8ddd0; border-left-color: #c8864a;
          background: rgba(200,134,74,0.06);
        }
        .mob-footer {
          padding: 24px 32px; border-top: 1px solid rgba(140,90,40,0.2);
        }
        .mob-cta {
          width: 100%; padding: 16px;
          background: linear-gradient(135deg, #c8864a, #a0622e);
          color: #0f0c09; border: none; border-radius: 6px; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-weight: 700;
          font-size: 16px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          box-shadow: 0 6px 24px rgba(180,100,40,0.4);
        }

        /* Hero */
        .hero {
          min-height: calc(100vh - 112px);
          background: linear-gradient(160deg, #1a1410 0%, #231c14 40%, #1a1410 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 60px 24px; position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,134,74,0.06) 0%, transparent 70%),
            repeating-linear-gradient(
              0deg, transparent, transparent 40px,
              rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px
            ),
            repeating-linear-gradient(
              90deg, transparent, transparent 40px,
              rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px
            );
          pointer-events: none;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(200,134,74,0.1); border: 1px solid rgba(200,134,74,0.25);
          color: #c8864a; font-family: 'Source Sans 3', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 6px 14px; border-radius: 3px;
          margin-bottom: 28px; position: relative;
        }
        .hero h1 {
          font-family: 'Oswald', sans-serif; font-weight: 700;
          font-size: clamp(44px, 8vw, 90px); line-height: 0.95;
          letter-spacing: 0.02em; text-transform: uppercase;
          color: #e8ddd0; margin-bottom: 20px; position: relative;
        }
        .hero h1 .accent { color: #c8864a; }
        .hero p {
          color: rgba(210,180,140,0.5); font-family: 'Source Sans 3', sans-serif;
          font-size: 17px; line-height: 1.65; max-width: 520px; margin-bottom: 40px;
          position: relative;
        }
        .hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
          position: relative;
        }
        .btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px; background: linear-gradient(135deg, #c8864a, #a0622e);
          color: #0f0c09; border: none; border-radius: 5px; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 15px;
          letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(180,100,40,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(180,100,40,0.5); }
        .btn-outline {
          padding: 14px 28px; background: transparent;
          color: rgba(210,190,165,0.7); border: 1px solid rgba(200,134,74,0.3);
          border-radius: 5px; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-weight: 600; font-size: 15px;
          letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #c8864a; color: #e8ddd0; background: rgba(200,134,74,0.06); }

        .stats-row {
          display: flex; gap: 40px; margin-top: 56px; position: relative;
          flex-wrap: wrap; justify-content: center;
        }
        .stat { text-align: center; }
        .stat-num {
          font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700;
          color: #c8864a; letter-spacing: 0.04em; line-height: 1;
        }
        .stat-label {
          font-family: 'Source Sans 3', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(210,180,140,0.4); margin-top: 4px;
        }
        .stat-divider { width: 1px; background: rgba(140,90,40,0.25); align-self: stretch; }

        /* Demo toggle */
        .demo-toggle {
          position: fixed; bottom: 20px; right: 20px; z-index: 300;
          background: rgba(200,134,74,0.15); border: 1px solid rgba(200,134,74,0.35);
          color: #c8864a; padding: 10px 16px; border-radius: 6px; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; transition: background 0.2s;
        }
        .demo-toggle:hover { background: rgba(200,134,74,0.25); }
      `}</style>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="tel:+50488888888" className="top-info">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +504 8888-8888
          </a>
          <div className="top-divider" />
          <a href="mailto:info@ajsroofing.com" className="top-info">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            info@ajsroofing.com
          </a>
          <div className="top-divider" />
          <div className="top-badge">
            <div className="top-badge-dot" />
            Disponible 24/7
          </div>
        </div>
        <a href="#" className="top-info" style={{ gap: "5px" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Tegucigalpa, Honduras
        </a>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-inner">

          {/* Logo */}
          <div className="logo">
            <div className="logo-shield">
              <svg viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"
                  fill="#1c1510" stroke="rgba(200,134,74,0.5)" strokeWidth="1.5"/>
                <path d="M23 8L36 14V26C36 33 30 39 23 42C16 39 10 33 10 26V14L23 8Z"
                  fill="rgba(200,134,74,0.08)"/>
                <path d="M10 19L23 12L36 19" stroke="#c8864a" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(200,134,74,0.15)" stroke="rgba(200,134,74,0.4)" strokeWidth="1"/>
                <path d="M19 24H27V33H19z" fill="rgba(200,134,74,0.25)" stroke="rgba(200,134,74,0.5)" strokeWidth="1"/>
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-main">AJS <span>Roofing</span></div>
              <div className="logo-sub">& Gutters · Est. 2009</div>
            </div>
          </div>

          {/* Links */}
          <ul className="nav-links">
            {links.map(link => (
              <li key={link} className="nav-link-item">
                {link === "Servicios" ? (
                  <>
                    <button
                      className={`nav-link ${activeLink === link ? "active" : ""}`}
                      onClick={() => { setActiveLink(link); setServicesOpen(o => !o) }}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    >
                      {link}
                      <svg className={`chevron ${servicesOpen ? "open" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {activeLink === link && <div className="active-indicator" />}
                    <div className="dropdown">
                      {services.map(s => (
                        <button key={s} className="drop-item" onClick={() => setServicesOpen(false)}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      className={`nav-link ${activeLink === link ? "active" : ""}`}
                      onClick={() => setActiveLink(link)}
                    >
                      {link}
                    </button>
                    {activeLink === link && <div className="active-indicator" />}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button className="cta-call">
              <div className="phone-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              Llamar Ahora
            </button>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(true)}
            >
              <div className="ham-bar" /><div className="ham-bar" /><div className="ham-bar" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className="mob-overlay">
        <div className="mob-header">
          <div className="logo">
            <div style={{ width:36, height:36, background:"rgba(200,134,74,0.15)", border:"1px solid rgba(200,134,74,0.3)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8864a"><path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/></svg>
            </div>
            <div className="logo-main" style={{ fontSize:18 }}>AJS <span>Roofing</span></div>
          </div>
          <button className="mob-close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <div className="mob-links">
          {links.map(link => (
            <button
              key={link}
              className={`mob-link ${activeLink === link ? "active" : ""}`}
              onClick={() => { setActiveLink(link); setMenuOpen(false) }}
            >
              {link}
            </button>
          ))}
        </div>
        <div className="mob-footer">
          <button className="mob-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Llamar Ahora · +504 8888-8888
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="hero">
        <div className="hero-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Certificados · Asegurados · Honduras
        </div>
        <h1>Techos que<br/><span className="accent">Resisten</span><br/>Todo</h1>
        <p>Instalación y reparación de techos con materiales de primera calidad. Más de 15 años protegiendo hogares en Honduras.</p>
        <div className="hero-btns">
          <button className="btn-main">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Llamar Ahora
          </button>
          <button className="btn-outline">Ver Proyectos</button>
        </div>
        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">Años de Exp.</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">800+</div>
            <div className="stat-label">Proyectos</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Garantizado</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Emergencias</div>
          </div>
        </div>
      </div>

      <button className="demo-toggle" onClick={() => setIsScrolled(s => !s)}>
        {isScrolled ? "▲ Normal" : "▼ Con Scroll"}
      </button>
    </div>
  )
}

export default Navbar