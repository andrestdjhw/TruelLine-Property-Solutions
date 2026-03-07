import { useState, useEffect } from "react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    "Structural Framing",
    "Heavy Timber Construction",
    "Exterior Envelope & Siding",
    "Interior Finishes & Drywall",
    "Residential Remodel",
    "Commercial (Selective)",
  ]

  const links = ["Home", "About", "Services", "Projects", "For GCs", "Contact"]

  return (
    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0b0f1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* TOP BAR */
        .cre-top {
          background: #060a14;
          border-bottom: 1px solid rgba(230,100,20,0.18);
          height: 36px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .cre-top-left { display: flex; align-items: center; gap: 18px; }
        .cre-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(200,210,230,0.45); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-top-item:hover { color: #e66414; }
        .cre-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.08); }
        .cre-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(230,100,20,0.12); border: 1px solid rgba(230,100,20,0.28);
          color: #e66414; font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        .cre-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; animation: crePulse 2s infinite; }
        @keyframes crePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        /* NAVBAR */
        .cre-nav {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cre-nav.top {
          background: #0d1220;
          box-shadow: none;
        }
        .cre-nav.scrolled {
          background: rgba(8,12,22,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(230,100,20,0.2);
        }
        .cre-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
          height: 72px;
        }
        .cre-inner.scrolled { height: 60px; }

        /* LOGO */
        .cre-logo { display: flex; align-items: center; gap: 13px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .cre-logo-mark {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 4px 12px rgba(230,100,20,0.5));
        }
        .cre-logo:hover .cre-logo-mark {
          transform: rotate(30deg) scale(1.08);
          filter: drop-shadow(0 6px 18px rgba(230,100,20,0.7));
        }
        .cre-logo-mark span {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 17px; color: white; letter-spacing: -0.02em;
          transform: rotate(0deg);
        }
        .cre-logo-text { display: flex; flex-direction: column; }
        .cre-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 21px; letter-spacing: 0.06em; text-transform: uppercase;
          color: #ffffff; line-height: 1;
        }
        .cre-logo-name span { color: #e66414; }
        .cre-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(150,170,210,0.5); margin-top: 2px;
        }

        /* NAV LINKS */
        .cre-links { display: flex; align-items: center; list-style: none; gap: 0; }
        .cre-link-item { position: relative; }
        .cre-link {
          display: flex; align-items: center; gap: 4px;
          padding: 8px 15px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(190,205,230,0.6);
          background: none; border: none; cursor: pointer; border-radius: 4px;
          transition: color 0.2s, background 0.2s;
        }
        .cre-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .cre-link.active { color: #fff; }
        .cre-active-line {
          position: absolute; bottom: -1px; left: 15px; right: 15px;
          height: 2px; background: linear-gradient(90deg, #e66414, #ff8c3a);
          border-radius: 2px 2px 0 0;
        }
        .cre-chevron { opacity: 0.55; transition: transform 0.25s; }
        .cre-chevron.open { transform: rotate(180deg); }

        /* DROPDOWN */
        .cre-dropdown {
          position: absolute; top: calc(100% + 10px); left: 0;
          background: #0e1528; border: 1px solid rgba(230,100,20,0.22);
          border-radius: 6px; padding: 6px; min-width: 230px; z-index: 200;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55);
          transition: opacity 0.2s, transform 0.2s;
        }
        .cre-dropdown.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        .cre-dropdown.closed { opacity: 0; transform: translateY(-8px); pointer-events: none; }
        .cre-dropdown::before {
          content: ''; position: absolute; top: -5px; left: 18px;
          width: 8px; height: 8px; background: #0e1528;
          border-left: 1px solid rgba(230,100,20,0.22); border-top: 1px solid rgba(230,100,20,0.22);
          transform: rotate(45deg);
        }
        .cre-drop-item {
          display: flex; align-items: center; gap: 10px; padding: 9px 12px;
          color: rgba(190,205,230,0.65); font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; cursor: pointer; border-radius: 4px;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
          transition: all 0.15s;
        }
        .cre-drop-item:hover { color: #fff; background: rgba(230,100,20,0.1); }
        .cre-drop-icon {
          width: 22px; height: 22px; background: rgba(230,100,20,0.1);
          border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .cre-drop-item:hover .cre-drop-icon { background: rgba(230,100,20,0.2); }

        /* CTA */
        .cre-cta {
          display: flex; align-items: center; gap: 8px; padding: 10px 20px;
          background: #e66414; color: white; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 13.5px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(230,100,20,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          white-space: nowrap; position: relative; overflow: hidden; text-decoration: none;
        }
        .cre-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cre-cta:hover::before { left: 160%; }
        .cre-cta:hover { background: #f07020; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }
        .cre-cta:active { transform: translateY(0); }

        /* GC PILL */
        .cre-gc {
          display: flex; align-items: center; gap: 6px; padding: 8px 14px;
          background: transparent; border: 1px solid rgba(230,100,20,0.3);
          color: rgba(230,150,80,0.85); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; white-space: nowrap;
        }
        .cre-gc:hover { border-color: #e66414; color: #e66414; background: rgba(230,100,20,0.06); }

        /* HAMBURGER */
        .cre-ham {
          display: none; flex-direction: column; gap: 5px;
          width: 40px; height: 40px; align-items: center; justify-content: center;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .cre-ham:hover { background: rgba(230,100,20,0.16); }
        .cre-hbar { width: 20px; height: 2px; background: #e66414; border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .cre-ham.open .cre-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .cre-ham.open .cre-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .cre-ham.open .cre-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* MOBILE MENU */
        .cre-mob {
          position: fixed; inset: 0; z-index: 500; background: #080c18;
          display: flex; flex-direction: column;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .cre-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .cre-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(230,100,20,0.15);
        }
        .cre-mob-x {
          width: 38px; height: 38px; background: rgba(230,100,20,0.1);
          border: 1px solid rgba(230,100,20,0.2); border-radius: 4px;
          color: #e66414; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cre-mob-links { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 24px 32px; gap: 2px; }
        .cre-mob-link {
          font-family: 'Barlow Condensed', sans-serif; font-size: 34px; font-weight: 800;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: rgba(190,210,240,0.45); background: none; border: none; cursor: pointer;
          text-align: left; padding: 7px 16px; border-radius: 4px; transition: all 0.2s;
          border-left: 3px solid transparent;
        }
        .cre-mob-link:hover, .cre-mob-link.active { color: #fff; border-left-color: #e66414; background: rgba(230,100,20,0.05); }
        .cre-mob-foot { padding: 24px 32px; border-top: 1px solid rgba(230,100,20,0.12); display: flex; flex-direction: column; gap: 10px; }
        .cre-mob-cta {
          width: 100%; padding: 15px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px rgba(230,100,20,0.4);
        }
        .cre-mob-gc {
          width: 100%; padding: 13px; background: transparent;
          color: rgba(230,150,80,0.8); border: 1px solid rgba(230,100,20,0.25);
          border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }

        @media (max-width: 960px) {
          .cre-links, .cre-cta, .cre-gc { display: none !important; }
          .cre-ham { display: flex !important; }
          .cre-top-left { display: none !important; }
        }

        /* HERO DEMO */
        .cre-hero {
          min-height: calc(100vh - 108px);
          background: linear-gradient(160deg, #0b0f1a 0%, #0f1628 50%, #0b0f1a 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 60px 24px; position: relative; overflow: hidden;
        }
        .cre-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(230,100,20,0.07) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px);
        }
        .cre-hero-naics {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.25);
          color: #e66414; font-family: 'Barlow', sans-serif;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 3px; margin-bottom: 28px;
        }
        .cre-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(42px, 7.5vw, 88px); line-height: 0.95;
          letter-spacing: 0.02em; text-transform: uppercase; color: #ffffff; margin-bottom: 20px;
        }
        .cre-hero h1 .orange { color: #e66414; }
        .cre-hero p {
          color: rgba(190,205,235,0.5); font-family: 'Barlow', sans-serif;
          font-size: 16px; line-height: 1.7; max-width: 540px; margin-bottom: 40px;
        }
        .cre-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .cre-btn-main {
          padding: 14px 28px; background: #e66414; color: white; border: none;
          border-radius: 4px; cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(230,100,20,0.4); transition: transform 0.2s, box-shadow 0.2s;
        }
        .cre-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(230,100,20,0.5); }
        .cre-btn-ghost {
          padding: 14px 28px; background: transparent; color: rgba(190,210,240,0.7);
          border: 1px solid rgba(230,100,20,0.28); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s;
        }
        .cre-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.06); }
        .cre-stats {
          display: flex; gap: 36px; margin-top: 56px; flex-wrap: wrap; justify-content: center;
        }
        .cre-stat { text-align: center; }
        .cre-stat-n { font-family: 'Barlow Condensed', sans-serif; font-size: 30px; font-weight: 800; color: #e66414; letter-spacing: 0.04em; }
        .cre-stat-l { font-family: 'Barlow', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(190,205,235,0.35); margin-top: 4px; }
        .cre-stat-sep { width: 1px; background: rgba(230,100,20,0.18); align-self: stretch; }

        .cre-demo-btn {
          position: fixed; bottom: 20px; right: 20px; z-index: 400;
          background: rgba(230,100,20,0.12); border: 1px solid rgba(230,100,20,0.3);
          color: #e66414; padding: 9px 16px; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="cre-top">
        <div className="cre-top-left">
          <a href="tel:+18005550100" className="cre-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (800) 555-0100
          </a>
          <div className="cre-top-sep" />
          <a href="mailto:info@creconstruction.com" className="cre-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            info@creconstruction.com
          </a>
          <div className="cre-top-sep" />
          <div className="cre-top-badge"><div className="cre-dot" />Licensed & Insured</div>
        </div>
        <div className="cre-top-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          NAICS 23813 · 23839
        </div>
      </div>

      {/* NAVBAR */}
      <div className={`cre-nav ${isScrolled ? "scrolled" : "top"}`}>
        <div className={`cre-inner ${isScrolled ? "scrolled" : ""}`}>

          {/* Logo */}
          <a className="cre-logo" href="#">
            <div className="cre-logo-mark"><span>CRE</span></div>
            <div className="cre-logo-text">
              <div className="cre-logo-name">Construction <span>Group</span></div>
              <div className="cre-logo-sub">Inc. · General Contractors</div>
            </div>
          </a>

          {/* Links */}
          <ul className="cre-links">
            {links.map(link => (
              <li key={link} className="cre-link-item">
                {link === "Services" ? (
                  <>
                    <button
                      className={`cre-link ${activeLink === link ? "active" : ""}`}
                      onClick={() => { setActiveLink(link); setServicesOpen(o => !o) }}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 160)}
                    >
                      {link}
                      <svg className={`cre-chevron ${servicesOpen ? "open" : ""}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {activeLink === link && <div className="cre-active-line" />}
                    <div className={`cre-dropdown ${servicesOpen ? "open" : "closed"}`}>
                      {services.map((s, i) => {
                        const icons = ["◈","◉","▣","◧","⬡","◈"]
                        return (
                          <button key={s} className="cre-drop-item" onClick={() => setServicesOpen(false)}>
                            <div className="cre-drop-icon">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6"/>
                              </svg>
                            </div>
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <button className={`cre-link ${activeLink === link ? "active" : ""}`} onClick={() => setActiveLink(link)}>{link}</button>
                    {activeLink === link && <div className="cre-active-line" />}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="cre-gc" onClick={() => setActiveLink("For GCs")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              For GCs
            </button>
            <a href="tel:+18005550100" className="cre-cta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Get a Quote
            </a>
            <button className={`cre-ham ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(true)}>
              <div className="cre-hbar" /><div className="cre-hbar" /><div className="cre-hbar" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`cre-mob ${menuOpen ? "open" : "closed"}`}>
        <div className="cre-mob-head">
          <div className="cre-logo">
            <div style={{ width:36,height:36,background:"#e66414",clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:13,color:"white" }}>CRE</span>
            </div>
            <div className="cre-logo-name" style={{ fontSize:18 }}>Construction <span>Group</span></div>
          </div>
          <button className="cre-mob-x" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <div className="cre-mob-links">
          {links.map(link => (
            <button key={link} className={`cre-mob-link ${activeLink === link ? "active" : ""}`}
              onClick={() => { setActiveLink(link); setMenuOpen(false) }}>
              {link}
            </button>
          ))}
        </div>
        <div className="cre-mob-foot">
          <a href="tel:+18005550100" className="cre-mob-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Get a Quote
          </a>
          <button className="cre-mob-gc" onClick={() => { setActiveLink("For GCs"); setMenuOpen(false) }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            General Contractor Portal
          </button>
        </div>
      </div>

      {/* HERO DEMO */}
      <div className="cre-hero">
        <div className="cre-hero-naics">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/></svg>
          NAICS 23813 · 23839 · Licensed General Contractor
        </div>
        <h1>Built to<br/><span className="orange">Perform.</span><br/>Built to Last.</h1>
        <p>Structural framing, heavy timber, exterior envelope, and interior finishes — delivered with precision from foundation to finish.</p>
        <div className="cre-hero-btns">
          <button className="cre-btn-main">Request a Quote</button>
          <button className="cre-btn-ghost">View Projects</button>
        </div>
        <div className="cre-stats">
          <div className="cre-stat"><div className="cre-stat-n">20+</div><div className="cre-stat-l">Years Active</div></div>
          <div className="cre-stat-sep" />
          <div className="cre-stat"><div className="cre-stat-n">500+</div><div className="cre-stat-l">Projects</div></div>
          <div className="cre-stat-sep" />
          <div className="cre-stat"><div className="cre-stat-n">NAICS</div><div className="cre-stat-l">Certified</div></div>
          <div className="cre-stat-sep" />
          <div className="cre-stat"><div className="cre-stat-n">GC</div><div className="cre-stat-l">Ready</div></div>
        </div>
      </div>

      <button className="cre-demo-btn" onClick={() => setIsScrolled(s => !s)}>
        {isScrolled ? "▲ Normal" : "▼ Scroll Effect"}
      </button>
    </div>
  )
}

export default Navbar