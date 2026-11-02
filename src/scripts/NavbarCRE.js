import React, { useState, useEffect, useRef } from "react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hideTop, setHideTop] = useState(false)
  const topRef = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 20)
      if (Math.abs(y - lastY) < 5) return
      // Oculta el topbar al bajar, lo muestra al subir
      setHideTop(y > lastY && y > 80)
      lastY = y
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Desplaza el contenedor sticky hacia arriba la altura del topbar
  useEffect(() => {
    const container = document.getElementById("cre-navbar")
    if (!container || !topRef.current) return
    const hide = hideTop && !menuOpen
    container.style.top = hide ? `-${topRef.current.offsetHeight}px` : "0px"
  }, [hideTop, menuOpen])

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
            { name: "Hauling & Debris Removal", link: "/services/hauling-debris-removal" },
          ],
        },
      ],
    },
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

        #cre-navbar { transition: top 0.35s cubic-bezier(0.16,1,0.3,1); }

        /* ── TOP BAR ── */
        .tl-top {
          position: relative;
          background: var(--tl-dark-bg);
          border-bottom: 1px solid rgba(42,90,73,0.3);
          height: 36px; padding: 0 26px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
        }
        .tl-top-left { display: flex; align-items: center; gap: 18px; flex: 1; }
        .tl-top-center {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          flex-shrink: 0; white-space: nowrap;
        }
        .tl-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(236,235,195,0.6); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-top-item:hover { color: var(--tl-lemon); }
        .tl-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.1); flex-shrink: 0; }
        .tl-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(42,90,73,0.25);
          border: 1px solid rgba(42,90,73,0.5);
          color: var(--tl-lemon); font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        /* Social icons */
        .tl-top-social { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .tl-top-social-icon {
          display: flex; align-items: center; justify-content: center;
          color: rgba(236,235,195,0.5); transition: color 0.2s; text-decoration: none;
        }
        .tl-top-social-icon:hover { color: var(--tl-lemon); }
        .tl-top-social-text {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em;
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
          max-width: 1408px; margin: 0 auto; padding: 0 26px;
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
          font-family: 'Barlow Condensed', sans-serif; font-size: 16.2px; font-weight: 600;
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
          position: fixed; inset: 0; z-index: 1100; background: #FCF7EC;
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

        /* ── MOBILE CONTACT BLOCK ── */
        .tl-mob-contact {
          padding: 16px 24px;
          border-top: 1px solid rgba(42,90,73,0.12);
          background: #FCF7EC;
          display: flex; flex-direction: column; gap: 10px;
        }
        .tl-mob-contact-item {
          display: flex; align-items: center; gap: 8px;
          color: rgba(9,25,20,0.5); font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: color 0.2s;
        }
        .tl-mob-contact-item:hover { color: var(--tl-accent); }
        .tl-mob-social-row {
          display: flex; align-items: center; gap: 14px;
          padding-top: 8px; border-top: 1px solid rgba(42,90,73,0.08);
        }
        .tl-mob-social-icon {
          display: flex; align-items: center; justify-content: center;
          color: rgba(9,25,20,0.4); transition: color 0.2s; text-decoration: none;
        }
        .tl-mob-social-icon:hover { color: var(--tl-accent); }
        .tl-mob-social-text {
          font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .tl-links, .tl-cta { display: none !important; }
          .tl-ham { display: flex !important; }
          /* Top bar mobile — simplified */
          .tl-top { height: auto; padding: 6px 16px; flex-wrap: wrap; gap: 6px; }
          .tl-top-center { display: none !important; }
          /* Left — keep only phone, hide email & badge */
          .tl-top-left { gap: 10px; flex: 1; min-width: 0; }
          .tl-top-left .tl-top-sep { display: none; }
          .tl-top-left .tl-top-badge { display: none; }
          .tl-top-left a:last-of-type { display: none; } /* hide email */
          /* Social — keep visible */
          .tl-top-social { display: flex !important; gap: 12px; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="tl-top" ref={topRef}>
        {/* Left — phone · email · badge */}
        <div className="tl-top-left">
          <a href="tel:+19199518341" className="tl-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (919) 951-8341
          </a>
          <div className="tl-top-sep" />
          <a href="mailto:info@truelinesolutionsus.com" className="tl-top-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@truelinesolutionsus.com
          </a>
          <div className="tl-top-sep" />
          {/* <div className="tl-top-badge"><div className="tl-dot" />Licensed &amp; Insured</div> */}
        </div>

        {/* Center — dirección */}
        <a href="https://www.google.com/maps/search/?api=1&query=2121+Guess+Rd+Durham+NC+27705+USA" target="_blank" rel="noopener noreferrer" className="tl-top-item tl-top-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          2121 Guess Rd, Durham, NC 27705, USA
        </a>

        {/* Right — social icons */}
        <div className="tl-top-social">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100084989864880&rdid=VlAsIHcPapOvNQSx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XcvxTFnsn%2F#" target="_blank" rel="noopener noreferrer" className="tl-top-social-icon" aria-label="Facebook">
            <svg width="15.4" height="15.4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/trueline_property_solutions" target="_blank" rel="noopener noreferrer" className="tl-top-social-icon" aria-label="Instagram">
            <svg width="15.4" height="15.4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/trueline-property-solutions-88481b309/" target="_blank" rel="noopener noreferrer" className="tl-top-social-icon" aria-label="LinkedIn">
            <svg width="15.4" height="15.4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 11-.01-4.13 2.07 2.07 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <div className="tl-top-sep" />
          {/* BBB */}
          <a href="https://www.bbb.org/us/nc/chapel-hill/profile/landscape-contractors/navas-landscape-services-llc-0593-90339816" target="_blank" rel="noopener noreferrer" className="tl-top-social-icon" aria-label="BBB">
            <svg width="15.4" height="15.4" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true"><path d="M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z"/></svg>
          </a>
          {/* Google My Business */}
          <a href="https://www.google.com/maps/place/Trueline+Property+Solutions/@35.879242,-79.3199126,246962m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8bf09039f7cd30ab:0x56fff4ba1a7aba0e!8m2!3d35.879242!4d-79.3199126!16s%2Fg%2F11zxj6hw25?hl=en-HN&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="tl-top-social-icon" aria-label="Google Reviews">
            <svg width="15.4" height="15.4" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true"><path d="M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"/></svg>
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <div className={`tl-nav ${isScrolled ? "scrolled" : "top"}`}>
        <div className={`tl-inner ${isScrolled ? "scrolled" : ""}`}>

          {/* Logo — actualizar src con ruta final del asset PNG */}
          <a className="tl-logo" href="/">
            <img
              src="/wp-content/uploads/2026/05/Imagotipo_Principal.png"
              alt="TrueLine Property Solutions"
              style={{ height: "48px", width: "auto", objectFit: "contain", display: "block" }}
            />
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
              Request a Free Estimate
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
            <img
              src="/wp-content/uploads/2026/05/Imagotipo_Principal.png"
              alt="TrueLine Property Solutions"
              style={{ height: "36px", width: "auto", objectFit: "contain", display: "block" }}
            />
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

        {/* Mobile — contact info + social */}
        <div className="tl-mob-contact">
          <a href="tel:+19199518341" className="tl-mob-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (919) 951-8341
          </a>
          <a href="mailto:info@truelinesolutionsus.com" className="tl-mob-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@truelinesolutionsus.com
          </a>
          {/* Dirección — visible también en móvil */}
          <a href="https://www.google.com/maps/search/?api=1&query=2121+Guess+Rd+Durham+NC+27705+USA" target="_blank" rel="noopener noreferrer" className="tl-mob-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            2121 Guess Rd, Durham, NC 27705, USA
          </a>
          <div className="tl-mob-social-row">
            <a href="https://facebook.com/truelinepropertysolutions" target="_blank" rel="noopener noreferrer" className="tl-mob-social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/truelinepropertysolutions" target="_blank" rel="noopener noreferrer" className="tl-mob-social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://linkedin.com/company/truelinepropertysolutions" target="_blank" rel="noopener noreferrer" className="tl-mob-social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.bbb.org/us/nc/chapel-hill/profile/landscape-contractors/navas-landscape-services-llc-0593-90339816" target="_blank" rel="noopener noreferrer" className="tl-mob-social-icon tl-mob-social-text" aria-label="BBB">
              BBB
            </a>
            <a href="https://www.google.com/maps/place/Trueline+Property+Solutions/@35.879242,-79.3199126,246962m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8bf09039f7cd30ab:0x56fff4ba1a7aba0e!8m2!3d35.879242!4d-79.3199126!16s%2Fg%2F11zxj6hw25?hl=en-HN&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="tl-mob-social-icon" aria-label="Google Reviews">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.17v2.73h5.51c-.56 2.37-2.67 3.98-5.51 3.98-3.36 0-6.08-2.72-6.08-6.08s2.72-6.08 6.08-6.08c1.56 0 2.97.59 4.04 1.55l2.06-2.06C16.56 3.67 14.41 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.56 0 9.25-3.91 9.25-9.41 0-.63-.07-1.24-.15-1.74z"/></svg>
            </a>
          </div>
        </div>

        <div className="tl-mob-foot">
          <a href="/contact" className="tl-mob-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Request a Free Estimate
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar