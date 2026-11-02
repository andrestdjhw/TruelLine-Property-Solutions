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
    location: "2121 Guess Rd, Durham, NC 27705, USA",
    license: "Licensed & Insured",
    copyright: `© ${new Date().getFullYear()} TrueLine Property Solutions. All Rights Reserved.`,
    // DEV NOTE: Update year as needed. Add BBB badge and Licensed & Insured badge in footer.
  }

  const socials = [
    { name: "Facebook",  href: "https://www.facebook.com/profile.php?id=100084989864880&rdid=VlAsIHcPapOvNQSx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XcvxTFnsn%2F#",  icon: "facebook"  },
    { name: "Instagram", href: "https://www.instagram.com/trueline_property_solutions", icon: "instagram" },
    { name: "LinkedIn",  href: "https://www.linkedin.com/in/trueline-property-solutions-88481b309/", icon: "linkedin" },
    { name: "Google Business Profile", href: "https://www.google.com/maps/place/Trueline+Property+Solutions/@35.879242,-79.3199126,246962m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8bf09039f7cd30ab:0x56fff4ba1a7aba0e!8m2!3d35.879242!4d-79.3199126!16s%2Fg%2F11zxj6hw25?hl=en-HN&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D", icon: "google" },
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
        { name: "Hauling & Debris Removal",  href: "/services/hauling-debris-removal/"  },
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
    )
    if (icon === "instagram") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
    )
    if (icon === "linkedin") return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 11-.01-4.13 2.07 2.07 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    )
    if (icon === "google") return (
      <svg width="16" height="16" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true"><path d="M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"/></svg>
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
          padding: 48px 26px;
        }
        .tl-footer-cta-inner {
          max-width: 1408px; margin: 0 auto;
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
          max-width: 1408px; margin: 0 auto; padding: 52px 26px 36px;
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
        .tl-footer-socials { display: flex; gap: 8px; flex-wrap: wrap; }
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
          padding: 18px 26px;
        }
        .tl-footer-bottom-inner {
          max-width: 1408px; margin: 0 auto;
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
        .tl-footer-legal { display: flex; flex-wrap: wrap; gap: 8px 20px; }
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
          .tl-footer-main { grid-template-columns: 1fr; padding: 40px 16px 28px; }
          .tl-footer-brand { grid-column: auto; }
          .tl-footer-cta-band { padding: 36px 16px; }
          .tl-footer-bottom { padding: 18px 16px; }
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
              <a href="https://www.google.com/maps/search/?api=1&query=2121+Guess+Rd+Durham+NC+27705+USA"
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
              {/* <div className="tl-footer-badge-bbb">
                BBB Badge — Placeholder
              </div> */}
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
              {/* Abre el modal de cookies (CookieConsentCRE) */}
              <a href="#cookie-settings" role="button" onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new Event("tl:open-cookie-settings"))
              }}>Cookie Settings</a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default FooterCRE