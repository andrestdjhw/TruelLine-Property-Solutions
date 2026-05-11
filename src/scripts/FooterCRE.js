import React from "react"

function FooterCRE() {

  // ─── DATOS DEL FOOTER — edita aquí ──────────────────────────────────────
  const company = {
    name: "TrueLine Property Solutions",
    tagline: "Exterior Property Services · North Carolina",
    description: "TrueLine Property Solutions is a full-service exterior contractor serving the Triangle and Triad of North Carolina. Landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation — one team, one standard.",
    phone: "(919) 951-8341",
    phoneHref: "tel:+19199518341",
    email: "info@truelinesolutionsus.com",
    emailHref: "mailto:info@truelinesolutionsus.com",
    location: "The Triangle & Triad — North Carolina",
    license: "Licensed & Insured",
    copyright: `© ${new Date().getFullYear()} TrueLine Property Solutions. All Rights Reserved.`,
    // DEV NOTE: Update year as needed. Add BBB badge and Licensed & Insured badge in footer.
  }

  const socials = [
    { name: "Facebook",  href: "https://www.facebook.com/profile.php?id=100084989864880&rdid=VlAsIHcPapOvNQSx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XcvxTFnsn%2F#",  icon: "facebook"  },
    { name: "Jobber", href: "https://navaslandscapeservicesandmore.jobbersites.com/", icon: "jobber" },
  ]

  const footerLinks = [
    {
      title: "Services",
      items: [
        { name: "Landscaping",               href: "/services/landscaping"              },
        { name: "Hardscape & Concrete",      href: "/services/hardscape-concrete"       },
        { name: "Drainage & Erosion Control",href: "/services/drainage-erosion-control" },
        { name: "Tree Services",             href: "/services/tree-services"            },
        { name: "Exterior Cleaning",         href: "/services/exterior-cleaning"        },
        { name: "Property Preparation",      href: "/services/property-preparation"     },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "Home",              href: "/"              },
        { name: "About Us",          href: "/about"         },
        { name: "Contact Us",        href: "/contact"       },
        { name: "Privacy Policy",    href: "/privacy"       },
        { name: "Terms & Conditions",href: "/terms"         },
      ],
    },
  ]
  // ────────────────────────────────────────────────────────────────────────

  const SocialIcon = ({ icon }) => {
    if (icon === "facebook") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    )
    if (icon === "jobber") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    )
    return null
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        /* ── BRAND TOKENS ── */
        .tl-footer {
          --f-accent:       #2A5A49;
          --f-accent-dark:  #133429;
          --f-accent-soft:  rgba(42,90,73,0.08);
          --f-accent-mid:   rgba(42,90,73,0.15);
          --f-accent-border:rgba(42,90,73,0.18);
          --f-onyx:         #091914;
          --f-white:        #FCF7EC;
          --f-lemon:        #ECEBC3;
          --f-text:         #091914;
          --f-muted:        rgba(9,25,20,0.5);
          --f-muted-light:  rgba(9,25,20,0.38);
        }

        .tl-footer {
          background: var(--f-white);
          border-top: 3px solid var(--f-accent);
          font-family: 'Barlow', sans-serif;
        }

        /* ── CTA BAND — Onyx oscuro ── */
        .tl-footer-cta-band {
          background: var(--f-onyx);
          border-bottom: 1px solid rgba(42,90,73,0.25);
          padding: 48px 32px;
        }
        .tl-footer-cta-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
        }
        .tl-footer-cta-text h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(24px, 2.8vw, 36px); letter-spacing: 0.04em;
          text-transform: uppercase; color: var(--f-white); line-height: 1.1; margin-bottom: 8px;
        }
        .tl-footer-cta-text h2 span { color: var(--f-lemon); }
        .tl-footer-cta-text p {
          color: rgba(236,235,195,0.45); font-size: 14px; line-height: 1.6; max-width: 480px;
        }
        .tl-footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .tl-footer-btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: var(--f-accent); color: var(--f-white);
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(42,90,73,0.4);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-primary:hover { background: var(--f-accent-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(42,90,73,0.5); }
        .tl-footer-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: rgba(236,235,195,0.65);
          border: 1px solid rgba(236,235,195,0.25); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-ghost:hover { border-color: var(--f-lemon); color: var(--f-lemon); background: rgba(236,235,195,0.06); }

        /* ── MAIN FOOTER — Floral White ── */
        .tl-footer-main {
          max-width: 1280px; margin: 0 auto; padding: 52px 32px 36px;
          display: grid; gap: 48px;
          grid-template-columns: 1.8fr 1fr 1fr;
        }

        /* Brand column */
        .tl-footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; text-decoration: none; }
        .tl-footer-logo-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          filter: drop-shadow(0 2px 8px rgba(42,90,73,0.25));
        }
        .tl-footer-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 19px; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--f-text); line-height: 1;
        }
        .tl-footer-logo-name span { color: var(--f-accent); }
        .tl-footer-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--f-muted-light); margin-top: 2px;
        }

        /* Tagline */
        .tl-footer-tagline {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--f-accent); margin-bottom: 14px;
          border-left: 3px solid var(--f-accent); padding-left: 12px;
        }

        .tl-footer-desc {
          color: var(--f-muted); font-size: 13.5px; line-height: 1.75; margin-bottom: 24px;
        }

        /* Contact info */
        .tl-footer-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .tl-footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          color: var(--f-muted); font-size: 13px; line-height: 1.5;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-contact-item:hover { color: var(--f-accent); }
        .tl-footer-contact-icon {
          width: 28px; height: 28px; background: var(--f-accent-soft);
          border: 1px solid var(--f-accent-border); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }

        /* Badges row */
        .tl-footer-badges { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .tl-footer-badge {
          display: flex; align-items: center; gap: 6px;
          background: var(--f-accent-soft); border: 1px solid var(--f-accent-border);
          color: var(--f-accent); font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }
        .tl-footer-badge-dot { width: 5px; height: 5px; background: var(--f-accent); border-radius: 50%; }
        /* DEV NOTE: Replace .tl-footer-badge-bbb with actual BBB logo image when available */
        .tl-footer-badge-bbb {
          display: flex; align-items: center; gap: 6px;
          background: transparent; border: 1px dashed var(--f-accent-border);
          color: var(--f-muted-light); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }

        /* Socials */
        .tl-footer-socials { display: flex; gap: 8px; }
        .tl-footer-social {
          width: 34px; height: 34px;
          background: var(--f-accent-soft); border: 1px solid var(--f-accent-border);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: var(--f-accent); text-decoration: none; transition: all 0.2s;
        }
        .tl-footer-social:hover { background: var(--f-accent); color: var(--f-white); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(42,90,73,0.3); }

        /* Link columns */
        .tl-footer-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--f-accent);
          margin-bottom: 16px; padding-bottom: 10px;
          border-bottom: 1px solid var(--f-accent-border);
        }
        .tl-footer-col-links { display: flex; flex-direction: column; gap: 2px; }
        .tl-footer-col-link {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 4px;
          color: var(--f-muted); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: all 0.18s;
          border-left: 2px solid transparent;
        }
        .tl-footer-col-link:hover {
          color: var(--f-accent); background: var(--f-accent-soft);
          border-left-color: var(--f-accent); padding-left: 12px;
        }
        .tl-footer-col-link svg { opacity: 0.35; flex-shrink: 0; transition: opacity 0.18s; }
        .tl-footer-col-link:hover svg { opacity: 1; }

        /* ── BOTTOM BAR — Lemon Chiffon ── */
        .tl-footer-bottom {
          background: var(--f-lemon);
          border-top: 1px solid rgba(42,90,73,0.15);
          padding: 18px 32px;
        }
        .tl-footer-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .tl-footer-copyright {
          color: var(--f-muted); font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
        }
        .tl-footer-license-pill {
          display: flex; align-items: center; gap: 6px;
          background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
          color: var(--f-accent); font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px;
        }
        .tl-footer-license-dot { width: 5px; height: 5px; background: var(--f-accent); border-radius: 50%; }
        .tl-footer-legal { display: flex; gap: 20px; }
        .tl-footer-legal a {
          color: var(--f-muted); font-size: 11.5px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-legal a:hover { color: var(--f-accent); }

        @media (max-width: 1024px) {
          .tl-footer-main { grid-template-columns: 1fr 1fr; }
          .tl-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .tl-footer-main { grid-template-columns: 1fr; padding: 40px 20px 28px; }
          .tl-footer-brand { grid-column: auto; }
          .tl-footer-cta-band { padding: 36px 20px; }
          .tl-footer-bottom { padding: 18px 20px; }
          .tl-footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>

      <footer className="tl-footer">

        {/* ── CTA BAND ── */}
        <div className="tl-footer-cta-band">
          <div className="tl-footer-cta-inner">
            <div className="tl-footer-cta-text">
              <h2>Your Property. Held to a <span>Higher Standard.</span></h2>
              <p>Serving the Triangle and Triad of North Carolina — Holly Springs, Cary, Raleigh, Durham, Chapel Hill, Hillsborough, and Orange County.</p>
            </div>
            <div className="tl-footer-cta-btns">
              <a href="/contact" className="tl-footer-btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Request a Free Estimate
              </a>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="tl-footer-main">

          {/* Brand + Contact */}
          <div className="tl-footer-brand">
            {/* Logo — actualizar src con ruta final del asset PNG */}
            <a href="/" className="tl-footer-logo">
              <img
                src="/wp-content/uploads/2026/05/Imagotipo_Principal.png"
                alt="TrueLine Property Solutions"
                style={{ height: "52px", width: "auto", objectFit: "contain", display: "block" }}
              />
            </a>

            <div className="tl-footer-tagline">Your Property. Held to a Higher Standard.</div>

            <p className="tl-footer-desc">{company.description}</p>

            <div className="tl-footer-contact">
              <a href={company.phoneHref} className="tl-footer-contact-item">
                <div className="tl-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                {company.phone}
              </a>
              <a href={company.emailHref} className="tl-footer-contact-item">
                <div className="tl-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                {company.email}
              </a>
              <a href="https://www.google.com/maps/place/Holly+Springs,+Carolina+del+Norte,+EE.+UU./@35.644151,-78.848793,13z/data=!3m1!4b1!4m6!3m5!1s0x89acf53e203c208f:0x5f9f54184597aa40!8m2!3d35.6512655!4d-78.8336218!16zL20vMHlsdGg?hl=es-ES&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                 target="_blank" rel="noopener noreferrer" className="tl-footer-contact-item">
                <div className="tl-footer-contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                {company.location}
              </a>
            </div>

            {/* Badges — DEV NOTE: replace .tl-footer-badge-bbb with actual BBB image/logo */}
            <div className="tl-footer-badges">
              <div className="tl-footer-badge">
                <div className="tl-footer-badge-dot" />
                Licensed &amp; Insured
              </div>
              <div className="tl-footer-badge-bbb">
                BBB Badge — Placeholder
              </div>
            </div>

            <div className="tl-footer-socials">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="tl-footer-social" aria-label={s.name}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — generadas dinámicamente */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <div className="tl-footer-col-title">{col.title}</div>
              <div className="tl-footer-col-links">
                {col.items.map((item, j) => (
                  <a key={j} href={item.href} className="tl-footer-col-link">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="tl-footer-bottom">
          <div className="tl-footer-bottom-inner">
            <span className="tl-footer-copyright">{company.copyright}</span>
            <div className="tl-footer-license-pill">
              <div className="tl-footer-license-dot" />
              {company.license}
            </div>
            <div className="tl-footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default FooterCRE