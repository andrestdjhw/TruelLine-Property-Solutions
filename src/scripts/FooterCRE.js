import React from "react"

function FooterCRE() {

  // ─── DATOS DEL FOOTER — edita aquí ──────────────────────────────────────
  const company = {
    name: "CRE Construction Group",
    tagline: "Inc. · General Contractors",
    description: "Structural framing, heavy timber, exterior envelope, and interior finishes — delivered with precision from foundation to finish.",
    naics: "NAICS 23813 · 23839",
    phone: "(800) 555-0100",
    phoneHref: "tel:+18005550100",
    email: "info@creconstruction.com",
    address: "1234 Builder Ave, Suite 100",
    city: "Los Angeles, CA 90001",
    license: "Licensed · Bonded · Insured",
    copyright: `© ${new Date().getFullYear()} CRE Construction Group Inc. All rights reserved.`,
  }

  const socials = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ]

  const footerLinks = [
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Projects / Portfolio", href: "/projects" },
        { name: "Services Overview", href: "/services" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Structural Framing", href: "/services/structural-framing" },
        { name: "Heavy Timber Construction", href: "/services/heavy-timber" },
        { name: "Exterior Envelope & Siding", href: "/services/exterior-envelope" },
        { name: "Interior Finishes & Drywall", href: "/services/interior-finishes" },
        { name: "Residential Remodel", href: "/services/residential-remodel" },
        { name: "Commercial (Selective)", href: "/services/commercial" },
      ],
    },
    {
      title: "For General Contractors",
      items: [
        { name: "Subcontractor Capabilities", href: "/for-gcs/capabilities" },
        { name: "Pre-Qualification", href: "/for-gcs/pre-qualification" },
        { name: "Insurance & Licensing", href: "/for-gcs/insurance" },
        { name: "Request a Bid", href: "/for-gcs/request-bid" },
        { name: "Download Capabilities Sheet", href: "/for-gcs/capabilities-sheet" },
      ],
    },
  ]
  // ────────────────────────────────────────────────────────────────────────

  const SocialIcon = ({ icon }) => {
    if (icon === "linkedin") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
    if (icon === "facebook") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    )
    if (icon === "instagram") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    )
    return null
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .cre-footer {
          background: #080c18;
          border-top: 1px solid rgba(230,100,20,0.18);
          font-family: 'Barlow', sans-serif;
        }

        /* ── CTA BAND ── */
        .cre-footer-cta-band {
          background: linear-gradient(135deg, #0d1220 0%, #111828 100%);
          border-bottom: 1px solid rgba(230,100,20,0.15);
          padding: 48px 32px;
        }
        .cre-footer-cta-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
        }
        .cre-footer-cta-text h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(26px, 3vw, 38px); letter-spacing: 0.04em;
          text-transform: uppercase; color: #fff; line-height: 1; margin-bottom: 8px;
        }
        .cre-footer-cta-text h2 span { color: #e66414; }
        .cre-footer-cta-text p {
          color: rgba(190,205,235,0.5); font-size: 14px; line-height: 1.6; max-width: 480px;
        }
        .cre-footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .cre-footer-btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(230,100,20,0.4);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
          white-space: nowrap;
        }
        .cre-footer-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }
        .cre-footer-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: rgba(190,210,240,0.7);
          border: 1px solid rgba(230,100,20,0.28); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .cre-footer-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.06); }

        /* ── MAIN FOOTER ── */
        .cre-footer-main {
          max-width: 1280px; margin: 0 auto; padding: 56px 32px 40px;
          display: grid; gap: 48px;
          grid-template-columns: 1.6fr repeat(3, 1fr);
        }

        /* Brand column */
        .cre-footer-brand {}
        .cre-footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; text-decoration: none; }
        .cre-footer-logo-hex {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          filter: drop-shadow(0 3px 10px rgba(230,100,20,0.45));
        }
        .cre-footer-logo-hex span {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 14px; color: white;
        }
        .cre-footer-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 19px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; line-height: 1;
        }
        .cre-footer-logo-name span { color: #e66414; }
        .cre-footer-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase; color: rgba(150,170,210,0.45); margin-top: 2px;
        }
        .cre-footer-desc {
          color: rgba(180,195,220,0.45); font-size: 13.5px; line-height: 1.7;
          margin-bottom: 24px;
        }
        .cre-footer-naics {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          color: rgba(230,150,80,0.8); font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 3px;
          margin-bottom: 24px; display: block; width: fit-content;
        }

        /* Contact info */
        .cre-footer-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .cre-footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          color: rgba(180,195,220,0.5); font-size: 13px; line-height: 1.5;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-footer-contact-item:hover { color: #e66414; }
        .cre-footer-contact-icon {
          width: 28px; height: 28px; background: rgba(230,100,20,0.08);
          border: 1px solid rgba(230,100,20,0.15); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }

        /* Socials */
        .cre-footer-socials { display: flex; gap: 8px; }
        .cre-footer-social {
          width: 34px; height: 34px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.18);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: rgba(190,205,230,0.5); text-decoration: none;
          transition: all 0.2s;
        }
        .cre-footer-social:hover { background: rgba(230,100,20,0.18); border-color: #e66414; color: #e66414; transform: translateY(-2px); }

        /* Link columns */
        .cre-footer-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: #e66414;
          margin-bottom: 16px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(230,100,20,0.15);
        }
        .cre-footer-col-links { display: flex; flex-direction: column; gap: 2px; }
        .cre-footer-col-link {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 4px;
          color: rgba(180,195,220,0.5); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: all 0.18s;
          border-left: 2px solid transparent;
        }
        .cre-footer-col-link:hover {
          color: #fff; background: rgba(230,100,20,0.07);
          border-left-color: #e66414; padding-left: 12px;
        }
        .cre-footer-col-link svg { opacity: 0.4; flex-shrink: 0; transition: opacity 0.18s; }
        .cre-footer-col-link:hover svg { opacity: 1; }

        /* ── BOTTOM BAR ── */
        .cre-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 32px;
        }
        .cre-footer-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .cre-footer-copyright {
          color: rgba(150,165,190,0.35); font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
        }
        .cre-footer-license {
          display: flex; align-items: center; gap: 6px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.18);
          color: rgba(230,150,80,0.6); font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px;
        }
        .cre-footer-license-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; opacity: 0.7; }
        .cre-footer-legal { display: flex; gap: 20px; }
        .cre-footer-legal a {
          color: rgba(150,165,190,0.35); font-size: 11.5px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-footer-legal a:hover { color: rgba(230,150,80,0.8); }

        @media (max-width: 1024px) {
          .cre-footer-main { grid-template-columns: 1fr 1fr; }
          .cre-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .cre-footer-main { grid-template-columns: 1fr; padding: 40px 20px 28px; }
          .cre-footer-brand { grid-column: auto; }
          .cre-footer-cta-band { padding: 36px 20px; }
          .cre-footer-bottom { padding: 18px 20px; }
          .cre-footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>

      <footer className="cre-footer">

        {/* ── CTA BAND ── */}
        <div className="cre-footer-cta-band">
          <div className="cre-footer-cta-inner">
            <div className="cre-footer-cta-text">
              <h2>Ready to <span>Build</span>?</h2>
              <p>Get a free quote from our team. We partner with general contractors and homeowners across the region.</p>
            </div>
            <div className="cre-footer-cta-btns">
              <a href="/contact" className="cre-footer-btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Get a Quote
              </a>
              <a href="/projects" className="cre-footer-btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="cre-footer-main">

          {/* Brand + Contact */}
          <div className="cre-footer-brand">
            <a href="/" className="cre-footer-logo">
              <div className="cre-footer-logo-hex"><span>CRE</span></div>
              <div>
                <div className="cre-footer-logo-name">Construction <span>Group</span></div>
                <div className="cre-footer-logo-sub">Inc. · General Contractors</div>
              </div>
            </a>
            <p className="cre-footer-desc">{company.description}</p>
            <span className="cre-footer-naics">{company.naics}</span>

            <div className="cre-footer-contact">
              <a href={company.phoneHref} className="cre-footer-contact-item">
                <div className="cre-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="cre-footer-contact-item">
                <div className="cre-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                {company.email}
              </a>
              <div className="cre-footer-contact-item">
                <div className="cre-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>{company.address}<br/>{company.city}</span>
              </div>
            </div>

            <div className="cre-footer-socials">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="cre-footer-social" aria-label={s.name}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — generadas dinámicamente */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <div className="cre-footer-col-title">{col.title}</div>
              <div className="cre-footer-col-links">
                {col.items.map((item, j) => (
                  <a key={j} href={item.href} className="cre-footer-col-link">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="cre-footer-bottom">
          <div className="cre-footer-bottom-inner">
            <span className="cre-footer-copyright">{company.copyright}</span>
            <div className="cre-footer-license">
              <div className="cre-footer-license-dot" />
              {company.license}
            </div>
            <div className="cre-footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default FooterCRE