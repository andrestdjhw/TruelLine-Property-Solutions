<?php
/**
 * Template Name: Service Areas Template
 *
 * Página única de áreas de servicio — grid de tarjetas con mapas embebidos.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .sa-page { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }
  .sa-page {
    --accent:        #2A5A49;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.5);
  }

  /* ── SCROLL REVEAL ── */
  .sa-reveal {
    opacity: 0; transform: translateY(26px);
    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .sa-reveal.sa-in { opacity: 1; transform: none; }
  .sa-reveal[data-delay="1"]  { transition-delay: 0.06s; }
  .sa-reveal[data-delay="2"]  { transition-delay: 0.12s; }
  .sa-reveal[data-delay="3"]  { transition-delay: 0.18s; }
  .sa-reveal[data-delay="4"]  { transition-delay: 0.24s; }
  .sa-reveal[data-delay="5"]  { transition-delay: 0.30s; }
  .sa-reveal[data-delay="6"]  { transition-delay: 0.36s; }
  .sa-reveal[data-delay="7"]  { transition-delay: 0.42s; }
  .sa-reveal[data-delay="8"]  { transition-delay: 0.48s; }
  .sa-reveal[data-delay="9"]  { transition-delay: 0.54s; }
  .sa-reveal[data-delay="10"] { transition-delay: 0.60s; }
  .sa-reveal[data-delay="11"] { transition-delay: 0.66s; }

  /* ── SHARED ── */
  .sa-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

  /* ══ PAGE HEADER ══ */
  .sa-header {
    background: linear-gradient(160deg, #091914 0%, #0f2015 60%, #133429 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .sa-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(42,90,73,0.1) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sa-header-wm {
    position: absolute; inset: 0; display: flex;
    align-items: center; justify-content: space-between;
    padding: 0 6%; pointer-events: none; z-index: 0;
  }
  .sa-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .sa-header-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
  .sa-hero-label {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
    color: rgba(42,160,90,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .sa-hero-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: saPulse 2s infinite; }
  @keyframes saPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .sa-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(38px, 6.5vw, 72px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .sa-header h1 em { color: var(--accent); font-style: normal; }
  .sa-header-sub {
    color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75;
    max-width: 580px; margin: 0 auto;
  }

  /* Wave */
  .sa-wave { line-height: 0; background: linear-gradient(160deg, #091914, #133429); }
  .sa-wave svg { display: block; width: 100%; }

  /* ══ GRID SECTION ══ */
  .sa-grid-section { padding: 80px 0 96px; background: #FCF7EC; }

  .sa-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  /* ── LOCATION CARD ── */
  .sa-card {
    background: #fff; border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 20px rgba(9,25,20,0.09);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex; flex-direction: column;
  }
  .sa-card:hover { transform: translateY(-6px); box-shadow: 0 16px 44px rgba(9,25,20,0.14); }

  /* Map */
  .sa-card-map {
    position: relative; height: 200px; overflow: hidden; flex-shrink: 0;
  }
  .sa-card-map iframe {
    width: 100%; height: 100%; border: 0; display: block;
    pointer-events: none; /* prevent map interaction on card — click goes to CTA */
  }
  .sa-card-map-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.08) 100%);
    pointer-events: none;
  }
  /* County / region badge over map */
  .sa-card-region {
    position: absolute; top: 12px; left: 12px; z-index: 2;
    background: rgba(8,12,8,0.82); backdrop-filter: blur(8px);
    border: 1px solid rgba(42,90,73,0.3); border-radius: 3px;
    padding: 4px 10px;
    font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: rgba(42,160,90,0.85);
  }

  /* Body */
  .sa-card-body {
    padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 10px;
    border-top: 3px solid var(--accent);
  }
  .sa-card-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: 22px; letter-spacing: 0.04em; text-transform: uppercase;
    color: var(--dark); line-height: 1;
  }
  .sa-card-meta {
    font-size: 13px; color: var(--muted); line-height: 1.5; flex: 1;
  }
  .sa-card-cta {
    display: inline-flex; align-items: center; gap: 6px; margin-top: 6px;
    padding: 10px 18px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
    text-decoration: none; transition: background 0.2s, transform 0.2s;
    box-shadow: 0 4px 14px rgba(42,90,73,0.3); align-self: flex-start;
  }
  .sa-card-cta:hover { background: #133429; transform: translateY(-2px); }

  /* ══ BOTTOM CTA ══ */
  .sa-cta-section { background: #FCF7EC; padding: 0 32px 88px; }
  .sa-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
    border: 1px solid rgba(42,90,73,0.2); border-radius: 8px;
    padding: 60px 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .sa-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(42,90,73,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .sa-cta-inner > * { position: relative; z-index: 1; }
  .sa-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(42,160,90,0.8); margin-bottom: 16px; display: block; }
  .sa-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 32px;
  }
  .sa-cta-title span { color: var(--accent); }
  .sa-cta-actions { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
  .sa-cta-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(42,90,73,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sa-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sa-cta-btn:hover::before { left: 160%; }
  .sa-cta-btn:hover { background: #133429; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(42,90,73,0.55); }
  .sa-cta-phone {
    display: flex; align-items: center; gap: 8px;
    color: rgba(200,215,240,0.6); font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .sa-cta-phone:hover { color: var(--accent); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .sa-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .sa-header { padding: 56px 20px 64px; }
    .sa-grid-section { padding: 56px 0 72px; }
    .sa-container { padding: 0 20px; }
    .sa-grid { grid-template-columns: 1fr; gap: 20px; }
    .sa-cta-section { padding: 0 20px 64px; }
    .sa-cta-inner { padding: 40px 24px; }
    .sa-cta-actions { flex-direction: column; gap: 16px; }
  }
</style>

<div class="sa-page">

  <!-- ══ PAGE HEADER ══ -->
  <div class="sa-header">
    <div class="sa-header-wm" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="white">
        <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"/>
        <path d="M12 28 L12 18 L20 12 L28 18 L28 28" stroke="white" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <line x1="12" y1="28" x2="28" y2="28" stroke="white" stroke-width="1.5"/>
      </svg>
      <svg viewBox="0 0 40 40" fill="white" style="transform:scaleX(-1)">
        <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"/>
        <path d="M12 28 L12 18 L20 12 L28 18 L28 28" stroke="white" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <line x1="12" y1="28" x2="28" y2="28" stroke="white" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="sa-header-inner">
      <div class="sa-hero-label">
        <div class="sa-hero-dot"></div>
        Triangle &amp; Triad · North Carolina
      </div>
      <h1>Our <em>Service Areas</em></h1>
      <p class="sa-header-sub">TrueLine Property Solutions serves homeowners, investors, and real estate professionals across the Triangle and Triad of North Carolina — one standard, every property, every visit.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="sa-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#FCF7EC"/>
    </svg>
  </div>

  <!-- ══ LOCATIONS GRID ══ -->
  <section class="sa-grid-section">
    <div class="sa-container">

      <?php
      // ── ÁREAS DE SERVICIO — edita aquí ────────────────────────────────
      // embed_src: extraído de las URLs de Google Maps provistas
      // meta: descripción corta que aparece en la tarjeta
      $areas = [
        [
          'name'      => 'Holly Springs',
          'region'    => 'Wake County',
          'meta'      => 'One of the fastest-growing communities in Wake County — TrueLine serves Holly Springs with the full range of exterior property services.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.8700!3d35.6513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf53e203c208f%3A0x5f9f54184597aa40!2sHolly%20Springs%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Cary',
          'region'    => 'Wake County',
          'meta'      => 'Consistently ranked among the best places to live in NC — Cary homeowners expect quality and TrueLine delivers it on every visit.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.9218!3d35.7890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acbd54ff4a8b43%3A0x44568fdb5a444be1!2sCary%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Chapel Hill',
          'region'    => 'Orange County',
          'meta'      => 'Established neighborhoods, mature trees, and an active real estate market — Chapel Hill properties get the care and expertise they demand.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.0805!3d35.9132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc31c216e7ea7%3A0x7f03bae00443e4cb!2sChapel%20Hill%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Raleigh',
          'region'    => 'Wake County',
          'meta'      => 'From established neighborhoods to newer developments — Raleigh homeowners and investors get full exterior property services from TrueLine.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.6382!3d35.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Durham',
          'region'    => 'Durham County',
          'meta'      => 'A city of homeowners who invest in their properties — TrueLine brings the same high standard to every Durham project.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.9002!3d35.9956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace471120f66f1%3A0xe17ada898a46f27e!2sDurham%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Hillsborough',
          'region'    => 'Orange County',
          'meta'      => 'Historic character and residential pride define Hillsborough — TrueLine serves properties here with the attention they deserve.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.0997!3d36.0754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc1041d398e59%3A0x3593ab3cd48ad23e!2sHillsborough%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Orange County',
          'region'    => 'Orange County',
          'meta'      => 'Serving properties throughout Orange County — from Chapel Hill to Hillsborough and the communities in between.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.1097!3d36.0263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acdd65dbd3e811%3A0x49b749c57542ea3e!2sOrange%20County%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Wake County',
          'region'    => 'Wake County',
          'meta'      => 'The heart of the Triangle — TrueLine covers Wake County properties with reliable exterior care and professional property services.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.5661!3d35.8032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac88ccfabb3d93%3A0xa41a40b5c635c72c!2sWake%20County%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Greensboro',
          'region'    => 'Guilford County',
          'meta'      => 'Greensboro\'s established residential neighborhoods get the same level of exterior property care TrueLine delivers across the Triangle.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.7915!3d36.0726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853193f38c77b79%3A0x93b9c49478be12c8!2sGreensboro%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Winston-Salem',
          'region'    => 'Forsyth County',
          'meta'      => 'Serving Winston-Salem homeowners with full exterior property services — landscaping, hardscape, drainage, cleaning, tree care, and preparation.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-80.2434!3d36.0948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853a19b82d6b277%3A0x50325f54b43f8245!2sWinston-Salem%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'High Point',
          'region'    => 'Guilford County',
          'meta'      => 'High Point properties receive the same commitment to quality and precision that defines TrueLine\'s work across every market we serve.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-80.0053!3d35.9557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530bc771b841eb%3A0xf2ee8a2d049910df!2sHigh%20Point%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Chatham County',
          'region'    => 'Chatham County',
          'meta'      => 'Chatham County\'s growing residential communities and rural properties get the same high standard of exterior care TrueLine delivers across the region.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.2559!3d35.7043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acef1b29e5e75b%3A0x78b3e67b9f1eda8d!2sChatham%20County%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Apex',
          'region'    => 'Wake County',
          'meta'      => 'One of the most desirable communities in the Triangle — Apex homeowners get the full range of TrueLine exterior property services.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-78.8503!3d35.7329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf5c6a5e3f205%3A0x9b0e55c3a9e2b1a1!2sApex%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Siler City',
          'region'    => 'Chatham County',
          'meta'      => 'Siler City properties receive professional exterior care and property services — the same quality TrueLine brings to every market we serve.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.4645!3d35.7243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acedf3b3e3e3e3%3A0x1a2b3c4d5e6f7a8b!2sSiler%20City%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Mebane',
          'region'    => 'Alamance County',
          'meta'      => 'Mebane\'s fast-growing residential areas get reliable exterior property services from TrueLine — landscaping, hardscape, drainage, and more.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.2667!3d36.0957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace1f1f1f1f1f1%3A0x2b3c4d5e6f7a8b9c!2sMebane%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
        [
          'name'      => 'Burlington',
          'region'    => 'Alamance County',
          'meta'      => 'Burlington homeowners and property investors get TrueLine\'s full suite of exterior services — the same one standard across every city we serve.',
          'embed_src' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003!2d-79.4378!3d36.0957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace2d2d2d2d2d2%3A0x3c4d5e6f7a8b9c0d!2sBurlington%2C%20NC!5e0!3m2!1sen!2sus!4v1',
        ],
      ];
      // ──────────────────────────────────────────────────────────────────
      ?>

      <div class="sa-grid">
        <?php foreach ( $areas as $i => $area ) : ?>
          <div class="sa-card sa-reveal" data-delay="<?php echo ( $i % 6 ) + 1; ?>">

            <!-- Map -->
            <div class="sa-card-map">
              <iframe
                src="<?php echo esc_url( $area['embed_src'] ); ?>"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="<?php echo esc_attr( $area['name'] ); ?>, NC — TrueLine Property Solutions"
                allowfullscreen="">
              </iframe>
              <div class="sa-card-map-overlay"></div>
              <div class="sa-card-region"><?php echo esc_html( $area['region'] ); ?></div>
            </div>

            <!-- Body -->
            <div class="sa-card-body">
              <div class="sa-card-name"><?php echo esc_html( $area['name'] ); ?></div>
              <p class="sa-card-meta"><?php echo esc_html( $area['meta'] ); ?></p>
              <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>?area=<?php echo esc_attr( sanitize_title( $area['name'] ) ); ?>"
                 class="sa-card-cta">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Get a Free Estimate
              </a>
            </div>

          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ BOTTOM CTA ══ -->
  <section class="sa-cta-section">
    <div class="sa-cta-inner sa-reveal">
      <span class="sa-cta-label">Wherever You Are in NC</span>
      <h2 class="sa-cta-title">One Standard.<br><span>Every Property.</span></h2>
      <div class="sa-cta-actions">
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="sa-cta-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          Request a Free Estimate
        </a>
        <a href="tel:+19199518341" class="sa-cta-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (919) 951-8341
        </a>
      </div>
    </div>
  </section>

</div><!-- .sa-page -->

<script>
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('sa-in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.sa-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<?php get_footer(); ?>