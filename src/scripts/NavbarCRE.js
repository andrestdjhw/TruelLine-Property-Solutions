import React, { useState, useEffect } from "react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => prev === name ? null : name)
  }

  // ─── DATOS DEL NAVBAR — edita aquí para cambiar links ───────────────────
  const navItems = [
    { name: "Home", link: "/", hasDropdown: false },
    { name: "About Us", link: "/about", hasDropdown: false },
    {
      name: "Services",
      link: "/services",
      hasDropdown: true,
      columns: [
        {
          title: "Grounds & Hardscape",
          items: [
            { name: "Landscaping", link: "/services/landscaping" },
            { name: "Hardscape & Concrete", link: "/services/hardscape-concrete" },
            { name: "Drainage & Erosion Control", link: "/services/drainage-erosion-control" },
          ],
        },
        {
          title: "Property Care",
          items: [
            { name: "Tree Services", link: "/services/tree-services" },
            { name: "Exterior Cleaning", link: "/services/exterior-cleaning" },
            { name: "Property Preparation", link: "/services/property-preparation" },
          ],
        },
      ],
    },
    { name: "Gallery", link: "/gallery", hasDropdown: false },
    { name: "Service Areas", link: "/service-areas", hasDropdown: false },
    { name: "Contact Us", link: "/contact", hasDropdown: false },
  ]
  // ────────────────────────────────────────────────────────────────────────

  // ─── BRANDING — Paleta final TrueLine Property Solutions ────────────────
  // Accent: #2A5A49 Pine Teal · Hover: #133429 Evergreen · Dark bg: #091914 Onyx
  // Logo: reemplazar SVG placeholder con asset final de 828 Marketing Solutions
  // ────────────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── BRAND TOKENS — TrueLine Property Solutions ── */
        :root {
          --tl-accent:              #2A5A49;
          --tl-accent-hover:        #133429;
          --tl-accent-glow:         rgba(42,90,73,0.3);
          --tl-accent-soft:         rgba(42,90,73,0.08);
          --tl-accent-border:       rgba(42,90,73,0.2);
          --tl-accent-border-strong:rgba(42,90,73,0.4);
          --tl-dark-bg:             #091914;
          --tl-nav-bg:              #FCF7EC;
          --tl-nav-scrolled:        rgba(252,247,236,0.97);
          --tl-dropdown-bg:         #FCF7EC;
          --tl-text:                #091914;
          --tl-text-muted:          rgba(9,25,20,0.5);
          --tl-lemon:               #ECEBC3;
        }

        /* ── TOP BAR ── */
        .tl-top {
          background: var(--tl-dark-bg);
          border-bottom: 1px solid rgba(42,90,73,0.3);
          height: 36px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .tl-top-left { display: flex; align-items: center; gap: 18px; }
        .tl-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(236,235,195,0.6); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-top-item:hover { color: var(--tl-lemon); }
        .tl-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.1); }
        .tl-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(42,90,73,0.25);
          border: 1px solid rgba(42,90,73,0.5);
          color: var(--tl-lemon); font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        .tl-dot {
          width: 5px; height: 5px;
          background: #ECEBC3; border-radius: 50%;
          animation: tlPulse 2s infinite;
        }
        @keyframes tlPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        /* ── NAVBAR ── */
        .tl-nav {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(42,90,73,0.12);
        }
        .tl-nav.top { background: var(--tl-nav-bg); }
        .tl-nav.scrolled {
          background: var(--tl-nav-scrolled);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 24px rgba(9,25,20,0.1), 0 1px 0 rgba(42,90,73,0.12);
        }
        .tl-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-inner.scrolled { height: 60px; }

        /* ── LOGO ── */
        .tl-logo { display: flex; align-items: center; gap: 11px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .tl-logo-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 2px 8px var(--tl-accent-glow));
        }
        .tl-logo:hover .tl-logo-icon { transform: scale(1.08); filter: drop-shadow(0 4px 14px var(--tl-accent-glow)); }
        .tl-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--tl-text); line-height: 1;
        }
        .tl-logo-name span { color: var(--tl-accent); }
        .tl-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--tl-text-muted); margin-top: 2px;
        }

        /* ── DESKTOP LINKS ── */
        .tl-links { display: flex; align-items: center; list-style: none; gap: 0; flex: 1; justify-content: center; }
        .tl-link-item { position: relative; }
        .tl-link {
          display: flex; align-items: center; gap: 4px; padding: 8px 12px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 13.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--tl-text-muted); background: none; border: none; cursor: pointer;
          border-radius: 4px; transition: color 0.2s, background 0.2s; text-decoration: none;
        }
        .tl-link:hover { color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-link.active { color: var(--tl-accent); }
        .tl-active-line {
          position: absolute; bottom: -1px; left: 12px; right: 12px;
          height: 2px; background: linear-gradient(90deg, var(--tl-accent), var(--tl-accent-hover));
          border-radius: 2px 2px 0 0;
        }
        .tl-chevron { opacity: 0.45; transition: transform 0.25s; flex-shrink: 0; }
        .tl-chevron.open { transform: rotate(180deg); opacity: 0.8; }

        /* ── MEGA DROPDOWN ── */
        .tl-mega {
          position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: var(--tl-dropdown-bg); border: 1px solid rgba(42,90,73,0.15);
          border-radius: 6px; padding: 18px 22px; z-index: 200;
          box-shadow: 0 12px 40px rgba(9,25,20,0.12), 0 2px 8px rgba(9,25,20,0.08);
          transition: opacity 0.2s, transform 0.2s;
          min-width: 200px;
        }
        .tl-mega.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .tl-mega.closed { opacity: 0; transform: translateX(-50%) translateY(-8px); pointer-events: none; }
        .tl-mega::before {
          content: ''; position: absolute; top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px; height: 8px; background: var(--tl-dropdown-bg);
          border-left: 1px solid rgba(42,90,73,0.15);
          border-top: 1px solid rgba(42,90,73,0.15);
        }
        .tl-mega-grid { display: grid; gap: 20px; }
        .tl-mega-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          margin-bottom: 8px; padding-bottom: 7px;
          border-bottom: 1px solid rgba(42,90,73,0.15);
          text-decoration: none; display: block; transition: color 0.2s;
        }
        .tl-mega-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 10px; border-radius: 4px;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: var(--tl-text-muted); text-decoration: none;
          transition: all 0.15s; cursor: pointer;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
        }
        .tl-mega-item:hover { color: var(--tl-accent); background: var(--tl-accent-soft); padding-left: 14px; }
        .tl-mega-item-icon { opacity: 0.35; flex-shrink: 0; margin-left: 8px; }
        .tl-mega-item:hover .tl-mega-item-icon { opacity: 0.8; }

        /* ── RIGHT ACTIONS ── */
        .tl-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .tl-cta {
          display: flex; align-items: center; gap: 8px; padding: 9px 18px;
          background: var(--tl-accent); color: #FCF7EC; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 14px var(--tl-accent-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s; white-space: nowrap;
          position: relative; overflow: hidden; text-decoration: none;
        }
        .tl-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(252,247,236,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .tl-cta:hover::before { left: 160%; }
        .tl-cta:hover { background: var(--tl-accent-hover); transform: translateY(-2px); box-shadow: 0 8px 22px rgba(42,90,73,0.4); }

        /* ── HAMBURGER ── */
        .tl-ham {
          display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .tl-ham:hover { background: rgba(42,90,73,0.14); }
        .tl-hbar { width: 20px; height: 2px; background: var(--tl-accent); border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .tl-ham.open .tl-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .tl-ham.open .tl-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .tl-ham.open .tl-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .tl-mob {
          position: fixed; inset: 0; z-index: 500; background: #FCF7EC;
          display: flex; flex-direction: column; overflow-y: auto;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .tl-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .tl-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(42,90,73,0.12); flex-shrink: 0;
          background: #FCF7EC;
        }
        .tl-mob-x {
          width: 38px; height: 38px; background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border); border-radius: 4px;
          color: var(--tl-accent); font-size: 18px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .tl-mob-body { flex: 1; padding: 16px 24px; background: #FCF7EC; }
        .tl-mob-item-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border-radius: 4px; background: none; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--tl-text-muted); transition: all 0.2s; text-align: left;
          border-left: 3px solid transparent; text-decoration: none;
        }
        .tl-mob-item-btn:hover, .tl-mob-item-btn.active { color: var(--tl-accent); border-left-color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-mob-chevron { transition: transform 0.25s; opacity: 0.4; flex-shrink: 0; }
        .tl-mob-chevron.open { transform: rotate(180deg); opacity: 1; }
        .tl-mob-submenu { padding: 4px 0 8px 16px; }
        .tl-mob-col-title {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          padding: 10px 10px 6px; opacity: 0.7;
        }
        .tl-mob-sublink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 4px; margin: 2px 0;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: var(--tl-text-muted); text-decoration: none; transition: all 0.15s;
        }
        .tl-mob-sublink:hover { color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-mob-foot {
          padding: 20px 24px; border-top: 1px solid rgba(42,90,73,0.12); flex-shrink: 0;
          background: #ECEBC3;
        }
        .tl-mob-cta {
          width: 100%; padding: 14px; background: var(--tl-accent); color: #FCF7EC;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 20px var(--tl-accent-glow); text-decoration: none;
        }

        @media (max-width: 1024px) {
          .tl-links, .tl-cta { display: none !important; }
          .tl-ham { display: flex !important; }
          .tl-top-left { display: none !important; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="tl-top">
        <div className="tl-top-left">
          <a href="tel:+18005550100" className="tl-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (800) 555-0100
          </a>
          <div className="tl-top-sep" />
          <a href="mailto:info@truelinepropertysolutions.com" className="tl-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@truelinepropertysolutions.com
          </a>
          <div className="tl-top-sep" />
          <div className="tl-top-badge"><div className="tl-dot" />Licensed &amp; Insured</div>
        </div>
        <div className="tl-top-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Serving Your Area
        </div>
      </div>

      {/* NAVBAR */}
      <div className={`tl-nav ${isScrolled ? "scrolled" : "top"}`}>
        <div className={`tl-inner ${isScrolled ? "scrolled" : ""}`}>

          {/* Logo — PLACEHOLDER: reemplazar con assets finales de 828 Marketing Solutions */}
          <a className="tl-logo" href="/">
            <div className="tl-logo-icon">
              <svg width="42" height="42" viewBox="0 0 40 40">
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="var(--tl-accent)" opacity=".15"/>
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="var(--tl-accent)" strokeWidth="1.5"/>
                <path d="M12 28 L12 18 L20 12 L28 18 L28 28" fill="none" stroke="var(--tl-accent)" strokeWidth="2" strokeLinejoin="round"/>
                <line x1="12" y1="28" x2="28" y2="28" stroke="var(--tl-accent)" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="tl-logo-name">True Line <span>Property</span></div>
              <div className="tl-logo-sub">Solutions · Exterior Services</div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="tl-links">
            {navItems.map((item, index) => (
              <li key={index} className="tl-link-item">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`tl-link ${activeDropdown === item.name ? "active" : ""}`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <svg className={`tl-chevron ${activeDropdown === item.name ? "open" : ""}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {activeDropdown === item.name && <div className="tl-active-line" />}

                    <div
                      className={`tl-mega ${activeDropdown === item.name ? "open" : "closed"}`}
                      style={{ width: `${Math.min(item.columns.length * 210, 520)}px` }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div
                        className="tl-mega-grid"
                        style={{ gridTemplateColumns: `repeat(${item.columns.length}, 1fr)` }}
                      >
                        {item.columns.map((col, colIdx) => (
                          <div key={colIdx}>
                            {col.link
                              ? <a href={col.link} className="tl-mega-col-title">{col.title}</a>
                              : col.title && <span className="tl-mega-col-title">{col.title}</span>
                            }
                            {col.items.map((sub, subIdx) => (
                              <a
                                key={subIdx}
                                href={sub.link}
                                target={sub.external ? "_blank" : undefined}
                                rel={sub.external ? "noopener noreferrer" : undefined}
                                className="tl-mega-item"
                              >
                                {sub.name}
                                <svg className="tl-mega-item-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.link}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="tl-link"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="tl-actions">
            <a href="/contact" className="tl-cta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Get a Free Quote
            </a>
            <button className={`tl-ham ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(true)}>
              <div className="tl-hbar" /><div className="tl-hbar" /><div className="tl-hbar" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`tl-mob ${menuOpen ? "open" : "closed"}`}>
        <div className="tl-mob-head">
          <a className="tl-logo" href="/">
            <div style={{ width:32, height:32, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="32" height="32" viewBox="0 0 40 40">
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="var(--tl-accent)" opacity=".15"/>
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="var(--tl-accent)" strokeWidth="1.5"/>
                <path d="M12 28 L12 18 L20 12 L28 18 L28 28" fill="none" stroke="var(--tl-accent)" strokeWidth="2" strokeLinejoin="round"/>
                <line x1="12" y1="28" x2="28" y2="28" stroke="var(--tl-accent)" strokeWidth="2"/>
              </svg>
            </div>
            <div className="tl-logo-name" style={{ fontSize:17 }}>True Line <span>Property</span></div>
          </a>
          <button className="tl-mob-x" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="tl-mob-body">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    className={`tl-mob-item-btn ${activeDropdown === item.name ? "active" : ""}`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <svg className={`tl-mob-chevron ${activeDropdown === item.name ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {activeDropdown === item.name && (
                    <div className="tl-mob-submenu">
                      {item.columns.map((col, colIdx) => (
                        <div key={colIdx}>
                          {col.title && <div className="tl-mob-col-title">{col.title}</div>}
                          {col.items.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={sub.link}
                              className="tl-mob-sublink"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.link}
                  className="tl-mob-item-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="tl-mob-foot">
          <a href="/contact" className="tl-mob-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar