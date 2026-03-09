import React, { useState, useEffect } from "react"

function ContactCRE() {

  // ─── DATOS — edita aquí ──────────────────────────────────────────────────
  const contact = {
    phone: "(800) 555-0100",
    phoneHref: "tel:+18005550100",
    email: "info@creconstruction.com",
    emailHref: "mailto:info@creconstruction.com",
    address: "1234 Builder Ave, Suite 100",
    city: "Los Angeles, CA 90001",
    // Reemplaza con tu embed real de Google Maps
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405069536!2d-118.69192!3d34.02016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fefa34c8f2cbc!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1234567890",
    // Reemplaza con tu shortcode real de Contact Form 7
    cf7Shortcode: "[contact-form-7 id=\"YOUR_FORM_ID\" title=\"Contact CRE\"]",
  }

  const hours = [
    { day: "Monday – Friday", time: "7:00 AM – 5:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  const services = [
    "Structural Framing",
    "Heavy Timber Construction",
    "Exterior Envelope & Siding",
    "Interior Finishes & Drywall",
    "Residential Remodel",
    "Commercial (Selective)",
    "Not sure yet",
  ]

  const faqs = [
    {
      q: "How do I request a bid as a General Contractor?",
      a: "Fill out the form on this page selecting your project type, or visit our For GCs page to download our pre-qualification packet. We typically respond within 1 business day.",
    },
    {
      q: "What is your service area?",
      a: "We primarily serve the Greater Los Angeles area and surrounding counties. For larger commercial projects, we may be able to accommodate other regions — contact us to discuss.",
    },
    {
      q: "How long does it take to receive a quote?",
      a: "For standard residential projects, we typically turn around quotes within 2–3 business days after an initial site visit or plan review. Larger commercial scopes may take 5–7 days.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. CRE Construction Group Inc. is fully licensed in the state of California and carries comprehensive general liability and workers' compensation insurance. Certificates available upon request.",
    },
    {
      q: "Do you work as a subcontractor?",
      a: "Absolutely. We partner with general contractors across all our service lines. Visit our For GCs page for pre-qualification information and capabilities documentation.",
    },
  ]
  // ────────────────────────────────────────────────────────────────────────

  const [openFaq, setOpenFaq] = useState(null)
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  // Intersection Observer para animaciones scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("cre-c-in") }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    document.querySelectorAll(".cre-c-reveal").forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setFormState(p => ({ ...p, [e.target.name]: e.target.value }))

  // Si usas CF7, este handler no aplica — el form lo maneja CF7 vía shortcode PHP
  // Este handler es solo para la versión React pura (fallback)
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cre-c-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; }

        /* ── SCROLL REVEAL ── */
        .cre-c-reveal {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-c-reveal.cre-c-in { opacity: 1; transform: none; }
        .cre-c-reveal:nth-child(2) { transition-delay: 0.08s; }
        .cre-c-reveal:nth-child(3) { transition-delay: 0.16s; }
        .cre-c-reveal:nth-child(4) { transition-delay: 0.24s; }

        /* ══ PAGE HEADER ══ */
        .cre-c-header {
          background: linear-gradient(160deg, #080c18 0%, #0d1525 60%, #0b1020 100%);
          padding: 72px 32px 80px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cre-c-header::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 70% at 50% 60%, rgba(230,100,20,0.08) 0%, transparent 65%),
            repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
            repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
        }
        /* Watermark */
        .cre-c-header-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          display: flex; align-items: center; justify-content: space-between; padding: 0 6%;
        }
        .cre-c-header-wm svg { width: min(220px, 25%); opacity: 0.035; filter: brightness(100) grayscale(1); }

        .cre-c-header-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
        .cre-c-header-label {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.25);
          color: #e88040; font-size: 10.5px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 3px; margin-bottom: 22px;
        }
        .cre-c-label-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; animation: crcPulse 2s infinite; }
        @keyframes crcPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .cre-c-header h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(40px, 7vw, 72px); line-height: 0.95;
          letter-spacing: 0.02em; text-transform: uppercase; color: #e8e0d5; margin-bottom: 16px;
        }
        .cre-c-header h1 span { color: #e66414; }
        .cre-c-header p { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.7; }

        /* Wave */
        .cre-c-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0b1020); }
        .cre-c-wave svg { display: block; width: 100%; }

        /* ══ MAIN LAYOUT ══ */
        .cre-c-main { max-width: 1280px; margin: 0 auto; padding: 72px 32px 88px; }

        /* ── INFO CARDS ROW ── */
        .cre-c-info-row {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 72px;
        }
        .cre-c-info-card {
          background: #fff; border-radius: 6px; padding: 28px 24px;
          box-shadow: 0 2px 16px rgba(26,20,16,0.08);
          border-top: 3px solid #e66414;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cre-c-info-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(26,20,16,0.13); }
        .cre-c-info-icon {
          width: 44px; height: 44px; background: rgba(230,100,20,0.08);
          border: 1px solid rgba(230,100,20,0.18); border-radius: 6px;
          display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
        }
        .cre-c-info-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: #e66414; margin-bottom: 8px;
        }
        .cre-c-info-card-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 17px; font-weight: 700;
          color: #1a1410; line-height: 1.3; margin-bottom: 4px;
        }
        .cre-c-info-card-sub { font-size: 12.5px; color: #9a8f86; line-height: 1.5; }
        .cre-c-info-link { text-decoration: none; color: inherit; display: block; }
        .cre-c-info-link:hover .cre-c-info-card-val { color: #e66414; }

        /* ── FORM + SIDEBAR GRID ── */
        .cre-c-body-grid {
          display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: start;
        }

        /* ── CONTACT FORM ── */
        .cre-c-form-wrap {
          background: #fff; border-radius: 8px; padding: 48px;
          box-shadow: 0 2px 24px rgba(26,20,16,0.09);
        }
        .cre-c-form-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 28px; letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 6px;
        }
        .cre-c-form-title span { color: #e66414; }
        .cre-c-form-sub { color: #9a8f86; font-size: 14px; line-height: 1.6; margin-bottom: 36px; }
        .cre-c-form-rule { width: 40px; height: 3px; background: #e66414; border-radius: 2px; margin-bottom: 36px; }

        /* CF7 override styles — aplican cuando WordPress renderiza el shortcode */
        .cre-c-form-wrap .wpcf7-form,
        .cre-c-form-wrap form {
          display: flex; flex-direction: column; gap: 0;
        }
        .cre-c-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .cre-c-form-row.full { grid-template-columns: 1fr; }
        .cre-c-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
        .cre-c-label {
          font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #6b6560;
        }
        .cre-c-label span { color: #e66414; }
        .cre-c-input,
        .cre-c-select,
        .cre-c-textarea,
        .cre-c-form-wrap input[type="text"],
        .cre-c-form-wrap input[type="email"],
        .cre-c-form-wrap input[type="tel"],
        .cre-c-form-wrap select,
        .cre-c-form-wrap textarea {
          width: 100%; padding: 12px 16px;
          background: #faf8f5; border: 1.5px solid #e8e2dc;
          border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 14px; color: #1a1410;
          transition: border-color 0.2s, box-shadow 0.2s; outline: none;
          appearance: none; -webkit-appearance: none;
        }
        .cre-c-input:focus,
        .cre-c-select:focus,
        .cre-c-textarea:focus,
        .cre-c-form-wrap input:focus,
        .cre-c-form-wrap select:focus,
        .cre-c-form-wrap textarea:focus {
          border-color: #e66414; box-shadow: 0 0 0 3px rgba(230,100,20,0.1);
          background: #fff;
        }
        .cre-c-textarea,
        .cre-c-form-wrap textarea { resize: vertical; min-height: 130px; }
        .cre-c-select,
        .cre-c-form-wrap select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23e66414' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 40px; cursor: pointer;
        }
        .cre-c-submit,
        .cre-c-form-wrap input[type="submit"],
        .cre-c-form-wrap .wpcf7-submit {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          padding: 15px 32px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(230,100,20,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
          width: 100%; margin-top: 8px;
        }
        .cre-c-submit:hover,
        .cre-c-form-wrap input[type="submit"]:hover,
        .cre-c-form-wrap .wpcf7-submit:hover {
          transform: translateY(-2px); box-shadow: 0 8px 26px rgba(230,100,20,0.5);
        }
        .cre-c-success {
          text-align: center; padding: 40px 20px;
        }
        .cre-c-success-icon {
          width: 60px; height: 60px; background: rgba(230,100,20,0.1);
          border: 2px solid rgba(230,100,20,0.3); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;
        }
        .cre-c-success h3 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 26px;
          letter-spacing: 0.04em; text-transform: uppercase; color: #1a1410; margin-bottom: 10px;
        }
        .cre-c-success p { color: #9a8f86; font-size: 14px; line-height: 1.6; }

        /* ── SIDEBAR ── */
        .cre-c-sidebar { display: flex; flex-direction: column; gap: 24px; }

        /* Hours card */
        .cre-c-side-card {
          background: #fff; border-radius: 6px; padding: 28px;
          box-shadow: 0 2px 16px rgba(26,20,16,0.08);
        }
        .cre-c-side-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: #e66414;
          margin-bottom: 18px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(230,100,20,0.15);
          display: flex; align-items: center; gap: 8px;
        }
        .cre-c-hours-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 9px 0; border-bottom: 1px solid #f0ece7; font-size: 13.5px;
        }
        .cre-c-hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .cre-c-hours-day { color: #6b6560; font-weight: 500; }
        .cre-c-hours-time { color: #1a1410; font-weight: 600; }
        .cre-c-hours-closed { color: #c0b8b0; font-weight: 500; }
        .cre-c-emergency {
          margin-top: 16px; display: flex; align-items: center; gap: 8px;
          background: rgba(230,100,20,0.06); border: 1px solid rgba(230,100,20,0.18);
          border-radius: 4px; padding: 10px 14px;
          font-size: 12.5px; font-weight: 600; color: #e66414; letter-spacing: 0.04em;
        }
        .cre-c-emerg-dot { width: 6px; height: 6px; background: #e66414; border-radius: 50%; animation: crcPulse 2s infinite; flex-shrink: 0; }

        /* GC promo card */
        .cre-c-gc-card {
          background: linear-gradient(135deg, #0d1525 0%, #162040 100%);
          border-radius: 6px; padding: 28px;
          border: 1px solid rgba(230,100,20,0.2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .cre-c-gc-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #e88040; margin-bottom: 10px;
        }
        .cre-c-gc-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 22px;
          letter-spacing: 0.04em; text-transform: uppercase; color: #e8e0d5;
          margin-bottom: 10px; line-height: 1.1;
        }
        .cre-c-gc-title span { color: #e66414; }
        .cre-c-gc-desc { color: rgba(200,215,240,0.45); font-size: 13px; line-height: 1.6; margin-bottom: 20px; }
        .cre-c-gc-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 12px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 14px rgba(230,100,20,0.4);
        }
        .cre-c-gc-btn:hover { background: #f07020; transform: translateY(-2px); }

        /* ── MAP ── */
        .cre-c-map-section { margin-top: 72px; }
        .cre-c-section-head { margin-bottom: 32px; }
        .cre-c-section-label {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #e66414; display: block; margin-bottom: 8px;
        }
        .cre-c-section-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(24px, 3.5vw, 38px); letter-spacing: 0.02em; text-transform: uppercase;
          color: #1a1410;
        }
        .cre-c-section-title span { color: #e66414; }
        .cre-c-section-rule { width: 40px; height: 3px; background: #e66414; border-radius: 2px; margin-top: 14px; }
        .cre-c-map-wrap {
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 4px 30px rgba(26,20,16,0.12);
        }
        .cre-c-map-wrap iframe { display: block; }

        /* ── FAQ ── */
        .cre-c-faq-section { margin-top: 72px; }
        .cre-c-faq-grid { display: flex; flex-direction: column; gap: 12px; }
        .cre-c-faq-item {
          background: #fff; border-radius: 6px; overflow: hidden;
          box-shadow: 0 1px 12px rgba(26,20,16,0.07);
          border-left: 3px solid transparent; transition: border-color 0.2s;
        }
        .cre-c-faq-item.open { border-left-color: #e66414; }
        .cre-c-faq-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; background: none; border: none; cursor: pointer;
          text-align: left; gap: 16px;
        }
        .cre-c-faq-q {
          font-family: 'Barlow', sans-serif; font-size: 15px; font-weight: 600;
          color: #1a1410; line-height: 1.4;
        }
        .cre-c-faq-item.open .cre-c-faq-q { color: #e66414; }
        .cre-c-faq-icon {
          width: 28px; height: 28px; background: rgba(230,100,20,0.08);
          border: 1px solid rgba(230,100,20,0.18); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: background 0.2s, transform 0.3s;
        }
        .cre-c-faq-item.open .cre-c-faq-icon { background: rgba(230,100,20,0.18); transform: rotate(45deg); }
        .cre-c-faq-body {
          padding: 0 24px; max-height: 0; overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding 0.35s;
        }
        .cre-c-faq-item.open .cre-c-faq-body { max-height: 200px; padding-bottom: 20px; }
        .cre-c-faq-a { color: #6b6560; font-size: 14px; line-height: 1.7; }

        @media (max-width: 1024px) {
          .cre-c-body-grid { grid-template-columns: 1fr; }
          .cre-c-sidebar { flex-direction: row; flex-wrap: wrap; }
          .cre-c-side-card, .cre-c-gc-card { flex: 1; min-width: 280px; }
          .cre-c-info-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cre-c-main { padding: 48px 20px 64px; }
          .cre-c-form-wrap { padding: 28px 20px; }
          .cre-c-form-row { grid-template-columns: 1fr; }
          .cre-c-info-row { grid-template-columns: 1fr; }
          .cre-c-header { padding: 56px 20px 64px; }
          .cre-c-sidebar { flex-direction: column; }
        }
      `}</style>

      <div className="cre-c-page">

        {/* ══ PAGE HEADER ══ */}
        <div className="cre-c-header">
          <div className="cre-c-header-wm" aria-hidden="true">
            <svg viewBox="0 0 46 50" fill="white">
              <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
              <path d="M10 19L23 12L36 19" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
              <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
            </svg>
            <svg viewBox="0 0 46 50" fill="white" style={{ transform: "scaleX(-1)" }}>
              <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
              <path d="M10 19L23 12L36 19" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
              <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
            </svg>
          </div>
          <div className="cre-c-header-inner">
            <div className="cre-c-header-label">
              <div className="cre-c-label-dot" />
              We'd love to hear from you
            </div>
            <h1>Get in <span>Touch</span></h1>
            <p>Ready to start your project or need more information? Fill out the form and our team will get back to you within 1 business day.</p>
          </div>
        </div>

        {/* Wave */}
        <div className="cre-c-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "clamp(32px,5vw,60px)" }}>
            <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#f5f3ef"/>
          </svg>
        </div>

        {/* ══ MAIN ══ */}
        <div className="cre-c-main">

          {/* ── INFO CARDS ── */}
          <div className="cre-c-info-row">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                label: "Phone",
                val: contact.phone,
                sub: "Mon–Sat, business hours",
                href: contact.phoneHref,
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                label: "Email",
                val: contact.email,
                sub: "We reply within 1 business day",
                href: contact.emailHref,
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                label: "Address",
                val: contact.address,
                sub: contact.city,
                href: null,
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                label: "Response Time",
                val: "Within 24 hrs",
                sub: "On all project inquiries",
                href: null,
              },
            ].map((card, i) => (
              <div key={i} className="cre-c-reveal">
                {card.href ? (
                  <a href={card.href} className="cre-c-info-link">
                    <div className="cre-c-info-card">
                      <div className="cre-c-info-icon">{card.icon}</div>
                      <div className="cre-c-info-card-title">{card.label}</div>
                      <div className="cre-c-info-card-val">{card.val}</div>
                      <div className="cre-c-info-card-sub">{card.sub}</div>
                    </div>
                  </a>
                ) : (
                  <div className="cre-c-info-card">
                    <div className="cre-c-info-icon">{card.icon}</div>
                    <div className="cre-c-info-card-title">{card.label}</div>
                    <div className="cre-c-info-card-val">{card.val}</div>
                    <div className="cre-c-info-card-sub">{card.sub}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── FORM + SIDEBAR ── */}
          <div className="cre-c-body-grid">

            {/* FORM — React puro (reemplazable por shortcode CF7 desde PHP) */}
            <div className="cre-c-form-wrap cre-c-reveal">
              <h2 className="cre-c-form-title">Request a <span>Quote</span></h2>
              <p className="cre-c-form-sub">Tell us about your project and we'll prepare a competitive proposal tailored to your needs.</p>
              <div className="cre-c-form-rule" />

              {submitted ? (
                <div className="cre-c-success">
                  <div className="cre-c-success-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3>Message <span style={{ color:"#e66414" }}>Sent!</span></h3>
                  <p>Thank you for reaching out. Our team will review your project details and get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cre-c-form-row">
                    <div className="cre-c-field">
                      <label className="cre-c-label">Full Name <span>*</span></label>
                      <input className="cre-c-input" type="text" name="name" placeholder="John Smith" required value={formState.name} onChange={handleChange} />
                    </div>
                    <div className="cre-c-field">
                      <label className="cre-c-label">Email <span>*</span></label>
                      <input className="cre-c-input" type="email" name="email" placeholder="john@company.com" required value={formState.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="cre-c-form-row">
                    <div className="cre-c-field">
                      <label className="cre-c-label">Phone</label>
                      <input className="cre-c-input" type="tel" name="phone" placeholder="(555) 000-0000" value={formState.phone} onChange={handleChange} />
                    </div>
                    <div className="cre-c-field">
                      <label className="cre-c-label">Company / GC Name</label>
                      <input className="cre-c-input" type="text" name="company" placeholder="Your company (optional)" value={formState.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="cre-c-field">
                    <label className="cre-c-label">Service Needed <span>*</span></label>
                    <select className="cre-c-select" name="service" required value={formState.service} onChange={handleChange}>
                      <option value="">— Select a service —</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="cre-c-field">
                    <label className="cre-c-label">Project Description <span>*</span></label>
                    <textarea className="cre-c-textarea" name="message" placeholder="Describe your project — location, scope, timeline, budget range..." required value={formState.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="cre-c-submit">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="cre-c-sidebar">

              {/* Hours */}
              <div className="cre-c-side-card cre-c-reveal">
                <div className="cre-c-side-card-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Office Hours
                </div>
                {hours.map((h, i) => (
                  <div key={i} className="cre-c-hours-row">
                    <span className="cre-c-hours-day">{h.day}</span>
                    <span className={h.time === "Closed" ? "cre-c-hours-closed" : "cre-c-hours-time"}>{h.time}</span>
                  </div>
                ))}
                <div className="cre-c-emergency">
                  <div className="cre-c-emerg-dot" />
                  Emergency line available 24/7
                </div>
              </div>

              {/* GC Promo */}
              <div className="cre-c-gc-card cre-c-reveal">
                <div className="cre-c-gc-label">General Contractors</div>
                <div className="cre-c-gc-title">Need a <span>Sub?</span></div>
                <p className="cre-c-gc-desc">Download our capabilities sheet, review our pre-qual docs, and add us to your approved vendor list.</p>
                <a href="/for-gcs" className="cre-c-gc-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  GC Portal
                </a>
              </div>

            </div>
          </div>

          {/* ── MAP ── */}
          <div className="cre-c-map-section">
            <div className="cre-c-section-head cre-c-reveal">
              <span className="cre-c-section-label">Find Us</span>
              <h2 className="cre-c-section-title">Our <span>Location</span></h2>
              <div className="cre-c-section-rule" />
            </div>
            <div className="cre-c-map-wrap cre-c-reveal">
              <iframe
                src={contact.mapSrc}
                width="100%" height="460"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CRE Construction Group Location"
              />
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="cre-c-faq-section">
            <div className="cre-c-section-head cre-c-reveal">
              <span className="cre-c-section-label">Common Questions</span>
              <h2 className="cre-c-section-title">FAQ<span>s</span></h2>
              <div className="cre-c-section-rule" />
            </div>
            <div className="cre-c-faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className={`cre-c-faq-item cre-c-reveal ${openFaq === i ? "open" : ""}`}>
                  <button className="cre-c-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="cre-c-faq-q">{faq.q}</span>
                    <div className="cre-c-faq-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e66414" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </div>
                  </button>
                  <div className="cre-c-faq-body">
                    <p className="cre-c-faq-a">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactCRE