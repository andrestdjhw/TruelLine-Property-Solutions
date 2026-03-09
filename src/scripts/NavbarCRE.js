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
    { name: "About", link: "/about", hasDropdown: false },
    {
      name: "Services",
      link: "/services",
      hasDropdown: true,
      columns: [
        {
          title: "Structural",
          items: [
            { name: "Structural Framing", link: "/services/structural-framing" },
            { name: "Heavy Timber Construction", link: "/services/heavy-timber" },
          ],
        },
        {
          title: "Exterior",
          items: [
            { name: "Exterior Envelope & Siding", link: "/services/exterior-envelope" },
          ],
        },
        {
          title: "Interior & Remodel",
          items: [
            { name: "Interior Finishes & Drywall", link: "/services/interior-finishes" },
            { name: "Residential Remodel", link: "/services/residential-remodel" },
            { name: "Commercial (Selective)", link: "/services/commercial" },
          ],
        },
      ],
    },
    {
      name: "Projects",
      link: "/projects",
      hasDropdown: false,
    },
    {
      name: "For GCs",
      link: "/for-gcs",
      hasDropdown: true,
      columns: [
        {
          title: "General Contractors",
          items: [
            { name: "Subcontractor Capabilities", link: "/for-gcs/capabilities" },
            { name: "Pre-Qualification", link: "/for-gcs/pre-qualification" },
            { name: "Insurance & Licensing", link: "/for-gcs/insurance" },
            { name: "Safety Standards", link: "/for-gcs/safety" },
          ],
        },
        {
          title: "Resources",
          items: [
            { name: "Request a Bid", link: "/for-gcs/request-bid" },
            { name: "Download Capabilities Sheet", link: "/for-gcs/capabilities-sheet" },
          ],
        },
      ],
    },
    { name: "Contact", link: "/contact", hasDropdown: false },
  ]
  // ────────────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── TOP BAR ── */
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

        /* ── NAVBAR ── */
        .cre-nav {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cre-nav.top { background: #0d1220; }
        .cre-nav.scrolled {
          background: rgba(8,12,22,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(230,100,20,0.2);
        }
        .cre-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-inner.scrolled { height: 60px; }

        /* ── LOGO ── */
        .cre-logo { display: flex; align-items: center; gap: 13px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .cre-logo-mark {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 4px 12px rgba(230,100,20,0.5));
        }
        .cre-logo:hover .cre-logo-mark { transform: rotate(30deg) scale(1.08); filter: drop-shadow(0 6px 18px rgba(230,100,20,0.7)); }
        .cre-logo-mark-text { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 14px; color: white; letter-spacing: -0.02em; }
        .cre-logo-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 21px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; line-height: 1; }
        .cre-logo-name span { color: #e66414; }
        .cre-logo-sub { font-family: 'Barlow', sans-serif; font-size: 9.5px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(150,170,210,0.5); margin-top: 2px; }

        /* ── DESKTOP LINKS ── */
        .cre-links { display: flex; align-items: center; list-style: none; gap: 0; flex: 1; justify-content: center; }
        .cre-link-item { position: relative; }
        .cre-link {
          display: flex; align-items: center; gap: 4px; padding: 8px 14px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(190,205,230,0.7); background: none; border: none; cursor: pointer;
          border-radius: 4px; transition: color 0.2s, background 0.2s; text-decoration: none;
        }
        .cre-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .cre-link.active { color: #fff; }
        .cre-active-line {
          position: absolute; bottom: -1px; left: 14px; right: 14px;
          height: 2px; background: linear-gradient(90deg, #e66414, #ff8c3a);
          border-radius: 2px 2px 0 0;
        }
        .cre-chevron { opacity: 0.55; transition: transform 0.25s; flex-shrink: 0; }
        .cre-chevron.open { transform: rotate(180deg); }

        /* ── MEGA DROPDOWN ── */
        .cre-mega {
          position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: #0e1528; border: 1px solid rgba(230,100,20,0.2);
          border-radius: 6px; padding: 20px 24px; z-index: 200;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          transition: opacity 0.2s, transform 0.2s;
          min-width: 220px;
        }
        .cre-mega.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .cre-mega.closed { opacity: 0; transform: translateX(-50%) translateY(-8px); pointer-events: none; }
        .cre-mega::before {
          content: ''; position: absolute; top: -5px; left: 50%; transform: translateX(-50%) rotate(45deg);
          width: 8px; height: 8px; background: #0e1528;
          border-left: 1px solid rgba(230,100,20,0.2); border-top: 1px solid rgba(230,100,20,0.2);
        }
        .cre-mega-grid { display: grid; gap: 24px; }
        .cre-mega-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: #e66414;
          margin-bottom: 10px; padding-bottom: 8px;
          border-bottom: 1px solid rgba(230,100,20,0.15);
          text-decoration: none; display: block; transition: color 0.2s;
        }
        a.cre-mega-col-title:hover { color: #ff8c3a; }
        .cre-mega-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 7px 10px; border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; color: rgba(190,205,230,0.7);
          text-decoration: none; transition: all 0.15s; cursor: pointer;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
        }
        .cre-mega-item:hover { color: #fff; background: rgba(230,100,20,0.1); padding-left: 14px; }
        .cre-mega-item-icon { opacity: 0.5; flex-shrink: 0; margin-left: 8px; }
        .cre-mega-item:hover .cre-mega-item-icon { opacity: 1; }

        /* ── RIGHT ACTIONS ── */
        .cre-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .cre-cta {
          display: flex; align-items: center; gap: 8px; padding: 10px 18px;
          background: #e66414; color: white; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13.5px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(230,100,20,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s; white-space: nowrap;
          position: relative; overflow: hidden; text-decoration: none;
        }
        .cre-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cre-cta:hover::before { left: 160%; }
        .cre-cta:hover { background: #f07020; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }

        /* ── HAMBURGER ── */
        .cre-ham {
          display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .cre-ham:hover { background: rgba(230,100,20,0.16); }
        .cre-hbar { width: 20px; height: 2px; background: #e66414; border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .cre-ham.open .cre-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .cre-ham.open .cre-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .cre-ham.open .cre-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .cre-mob {
          position: fixed; inset: 0; z-index: 500; background: #080c18;
          display: flex; flex-direction: column; overflow-y: auto;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .cre-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .cre-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(230,100,20,0.15); flex-shrink: 0;
        }
        .cre-mob-x {
          width: 38px; height: 38px; background: rgba(230,100,20,0.1);
          border: 1px solid rgba(230,100,20,0.2); border-radius: 4px;
          color: #e66414; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cre-mob-body { flex: 1; padding: 16px 24px; }
        .cre-mob-item-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border-radius: 4px; background: none; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(190,210,240,0.55); transition: all 0.2s; text-align: left;
          border-left: 3px solid transparent; text-decoration: none;
        }
        .cre-mob-item-btn:hover, .cre-mob-item-btn.active { color: #fff; border-left-color: #e66414; background: rgba(230,100,20,0.06); }
        .cre-mob-chevron { transition: transform 0.25s; opacity: 0.5; flex-shrink: 0; }
        .cre-mob-chevron.open { transform: rotate(180deg); }
        .cre-mob-submenu { padding: 4px 0 8px 16px; }
        .cre-mob-col-title {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: #e66414;
          padding: 10px 10px 6px; opacity: 0.8;
        }
        .cre-mob-sublink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 4px; margin: 2px 0;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(190,210,240,0.6); text-decoration: none; transition: all 0.15s;
        }
        .cre-mob-sublink:hover { color: #fff; background: rgba(230,100,20,0.1); }
        .cre-mob-foot { padding: 20px 24px; border-top: 1px solid rgba(230,100,20,0.12); flex-shrink: 0; }
        .cre-mob-cta {
          width: 100%; padding: 14px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px rgba(230,100,20,0.4); text-decoration: none;
        }

        @media (max-width: 1024px) {
          .cre-links, .cre-cta { display: none !important; }
          .cre-ham { display: flex !important; }
          .cre-top-left { display: none !important; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="cre-top">
        <div className="cre-top-left">
          <a href="tel:+18005550100" className="cre-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (800) 555-0100
          </a>
          <div className="cre-top-sep" />
          <a href="mailto:info@creconstruction.com" className="cre-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@creconstruction.com
          </a>
          <div className="cre-top-sep" />
          <div className="cre-top-badge"><div className="cre-dot" />Licensed & Insured</div>
        </div>
        <div className="cre-top-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          NAICS 23813 · 23839
        </div>
      </div>

      {/* NAVBAR */}
      <div className={`cre-nav ${isScrolled ? "scrolled" : "top"}`}>
        <div className={`cre-inner ${isScrolled ? "scrolled" : ""}`}>

          {/* Logo */}
          <a className="cre-logo" href="/">
            <div className="cre-logo-mark"><span className="cre-logo-mark-text">CRE</span></div>
            <div>
              <div className="cre-logo-name">Construction <span>Group</span></div>
              <div className="cre-logo-sub">Inc. · General Contractors</div>
            </div>
          </a>

          {/* Desktop Links — generados dinámicamente desde navItems */}
          <ul className="cre-links">
            {navItems.map((item, index) => (
              <li key={index} className="cre-link-item">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`cre-link ${activeDropdown === item.name ? "active" : ""}`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <svg className={`cre-chevron ${activeDropdown === item.name ? "open" : ""}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {activeDropdown === item.name && <div className="cre-active-line" />}

                    <div
                      className={`cre-mega ${activeDropdown === item.name ? "open" : "closed"}`}
                      style={{ width: `${Math.min(item.columns.length * 220, 700)}px` }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div
                        className="cre-mega-grid"
                        style={{ gridTemplateColumns: `repeat(${item.columns.length}, 1fr)` }}
                      >
                        {item.columns.map((col, colIdx) => (
                          <div key={colIdx}>
                            {col.link
                              ? <a href={col.link} className="cre-mega-col-title">{col.title}</a>
                              : col.title && <span className="cre-mega-col-title">{col.title}</span>
                            }
                            {col.items.map((sub, subIdx) => (
                              <a
                                key={subIdx}
                                href={sub.link}
                                target={sub.external ? "_blank" : undefined}
                                rel={sub.external ? "noopener noreferrer" : undefined}
                                className="cre-mega-item"
                              >
                                {sub.name}
                                {sub.external
                                  ? <svg className="cre-mega-item-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                  : <svg className="cre-mega-item-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                                }
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
                    className="cre-link"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="cre-actions">
            <a href="tel:+18005550100" className="cre-cta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
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
          <a className="cre-logo" href="/">
            <div style={{ width:34, height:34, background:"#e66414", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:12, color:"white" }}>CRE</span>
            </div>
            <div className="cre-logo-name" style={{ fontSize:18 }}>Construction <span>Group</span></div>
          </a>
          <button className="cre-mob-x" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="cre-mob-body">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    className={`cre-mob-item-btn ${activeDropdown === item.name ? "active" : ""}`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <svg className={`cre-mob-chevron ${activeDropdown === item.name ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {activeDropdown === item.name && (
                    <div className="cre-mob-submenu">
                      {item.columns.map((col, colIdx) => (
                        <div key={colIdx}>
                          {col.title && <div className="cre-mob-col-title">{col.title}</div>}
                          {col.items.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={sub.link}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noopener noreferrer" : undefined}
                              className="cre-mob-sublink"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                              {sub.external && (
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                              )}
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
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="cre-mob-item-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="cre-mob-foot">
          <a href="tel:+18005550100" className="cre-mob-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Get a Quote
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar