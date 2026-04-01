<?php
/**
 * Template Name: Home Template
 * Template Post Type: page
 *
 * Estructura:
 *   header.php  →  monta #cre-navbar    (sticky, todas las páginas)
 *   #cre-hero   →  HeroCRE.jsx          (solo el hero + wave)
 *   <sections>  →  PHP/HTML estático    (services, why, how, areas, CTA, map)
 *   footer.php  →  monta #cre-footer    (todas las páginas)
 */

get_header(); ?>

<!-- ── Hero (React) ── -->
<div id="cre-hero"></div>

<?php
// ─── DATOS ────────────────────────────────────────────────────────────────

$services = [
  [
    'title' => 'Landscaping',
    'desc'  => 'Design, installation, and seasonal maintenance to keep your property looking its best year-round.',
    'href'  => '/services/landscaping',
    'img'   => '/wp-content/uploads/2026/04/Landscaping-scaled.jpg',
    'icon'  => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
  ],
  [
    'title' => 'Hardscape & Concrete',
    'desc'  => 'Patios, retaining walls, walkways, parking areas, and driveways built for durability and curb appeal.',
    'href'  => '/services/hardscape-concrete',
    'img'   => '/wp-content/uploads/2026/04/Hardscrapenconcrete-scaled.jpg',
    'icon'  => '<rect x="3" y="12" width="18" height="9" rx="1"/><path d="M3 12l4-7h10l4 7"/><line x1="3" y1="16" x2="21" y2="16"/>',
  ],
  [
    'title' => 'Drainage & Erosion Control',
    'desc'  => 'French drains, drainage solutions, and erosion management that protect your land and investment.',
    'href'  => '/services/drainage-erosion-control',
    'img'   => '/wp-content/uploads/2026/04/drainagenerotion.jpg',
    'icon'  => '<path d="M12 2v6M8 6l4 4 4-4"/><path d="M3 14s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/><path d="M3 18s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/>',
  ],
  [
    'title' => 'Tree Services',
    'desc'  => 'Expert tree trimming, removal, storm cleanup, and risk mitigation for overgrown or hazardous trees.',
    'href'  => '/services/tree-services',
    'img'   => '/wp-content/uploads/2026/04/treeservice.jpg',
    'icon'  => '<path d="M12 22V12"/><path d="M5 12H2l10-10 10 10h-3"/><path d="M5 17H2l10-10 10 10h-3"/>',
  ],
  [
    'title' => 'Exterior Cleaning',
    'desc'  => 'Roof cleaning, gutter care, pressure washing, and deck maintenance to protect and refresh every surface.',
    'href'  => '/services/exterior-cleaning',
    'img'   => '/wp-content/uploads/2026/04/exteriorcleaning.jpg',
    'icon'  => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/><circle cx="18" cy="20" r="3"/><path d="M18 17v-4m-2 5l4-2"/>',
  ],
  [
    'title' => 'Property Preparation',
    'desc'  => 'Full interior and exterior preparation for homeowners, investors, and realtors getting a property market-ready.',
    'href'  => '/services/property-preparation',
    'img'   => '/wp-content/uploads/2026/04/propertypreparation.jpg',
    'icon'  => '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
  ],
];

$why_items = [
  [
    'title' => 'The Right Materials. Every Time.',
    'desc'  => 'We work with trusted local suppliers and stay current on materials, techniques, and industry standards so our work holds up long after the project is done.',
    'icon'  => '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  ],
  [
    'title' => 'Complete Accountability.',
    'desc'  => 'We own the result — start to finish. One point of contact, full responsibility, no excuses.',
    'icon'  => '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
  ],
  [
    'title' => 'Precision and Detail.',
    'desc'  => 'We are meticulous by nature. If something does not meet our standard, we fix it before you ever have to ask.',
    'icon'  => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  ],
  [
    'title' => 'Respect for Your Property.',
    'desc'  => 'We treat every property as if it were our own — protecting your landscaping, your surfaces, and the natural environment throughout every project.',
    'icon'  => '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  ],
];

$steps = [
  [
    'num'   => '01',
    'title' => 'Property Assessment',
    'desc'  => 'We visit your property, evaluate the scope, and listen to your goals before recommending any solution.',
  ],
  [
    'num'   => '02',
    'title' => 'Tailored Proposal',
    'desc'  => 'You receive a clear, itemized proposal — no vague quotes, no hidden costs. You know exactly what you\'re getting.',
  ],
  [
    'num'   => '03',
    'title' => 'Expert Execution',
    'desc'  => 'Our trained team arrives on time, uses the right materials, and works efficiently without cutting corners.',
  ],
  [
    'num'   => '04',
    'title' => 'Final Walkthrough',
    'desc'  => 'We don\'t leave until the work meets our standard and yours. Every project closes with a walkthrough and your full satisfaction.',
  ],
];

$service_areas = [
  'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham', 'Hillsborough', 'Orange County',
];

// Reemplaza con el embed real de Google Maps
$map_src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207747.27!2d-79.0!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6b0f3e3e3e3e3e3e!2sHolly+Springs%2C+NC!5e0!3m2!1sen!2sus!4v1234567890';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .tl-home { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }

  /* ── TOKENS ── */
  .tl-home {
    --accent:        #2A5A49;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --accent-dark:   #133429;
    --white:         #FCF7EC;
    --lemon:         #ECEBC3;
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.5);
  }

  /* ── SCROLL REVEAL ── */
  .tl-reveal {
    opacity: 0; transform: translateY(26px);
    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .tl-reveal.tl-in { opacity: 1; transform: none; }
  .tl-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .tl-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .tl-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .tl-reveal[data-delay="4"] { transition-delay: 0.32s; }
  .tl-reveal[data-delay="5"] { transition-delay: 0.40s; }
  .tl-reveal[data-delay="6"] { transition-delay: 0.48s; }

  /* ── SHARED ── */
  .tl-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
  .tl-section-head { text-align: center; margin-bottom: 52px; }
  .tl-label {
    display: inline-block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
  }
  .tl-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 46px); letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--dark); line-height: 1;
  }
  .tl-title span { color: var(--accent); }
  .tl-desc { color: var(--muted); font-size: 16px; line-height: 1.7; max-width: 540px; margin: 14px auto 0; }
  .tl-rule { width: 44px; height: 3px; background: var(--accent); border-radius: 2px; margin: 16px auto 0; }

  /* ══ SERVICES ══ */
  .tl-services-section { padding: 88px 0; background: #FCF7EC; }
  .tl-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .tl-service-card {
    background: #fff; border-radius: 6px;
    box-shadow: 0 2px 20px rgba(26,20,16,0.08);
    overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
    display: flex; flex-direction: column;
  }
  .tl-service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,20,16,0.13); }
  .tl-service-card-top {
    height: 200px;
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .tl-service-card-top::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(42,90,73,0.14), transparent 60%);
    z-index: 1;
  }
  .tl-service-card-top img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .tl-service-card:hover .tl-service-card-top img { transform: scale(1.06); }
  .tl-service-card-top-overlay {
    position: absolute; inset: 0; z-index: 2;
    background: linear-gradient(to bottom, rgba(9,25,20,0.15) 0%, rgba(9,25,20,0.5) 100%);
  }
  .tl-service-card-top svg { position: relative; z-index: 2; }
  .tl-service-card-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
  .tl-service-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 20px; letter-spacing: 0.04em; text-transform: uppercase;
    color: var(--dark); margin-bottom: 10px;
  }
  .tl-service-card-desc { color: var(--muted); font-size: 13.5px; line-height: 1.65; margin-bottom: 18px; flex: 1; }
  .tl-service-link {
    display: inline-flex; align-items: center; gap: 6px;
    color: var(--accent); font-size: 12.5px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; transition: gap 0.2s;
  }
  .tl-service-link:hover { gap: 10px; }
  .tl-service-link svg { transition: transform 0.2s; }
  .tl-service-link:hover svg { transform: translateX(3px); }

  /* ══ WHY US ══ */
  .tl-why-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #091914 0%, #133429 100%);
    position: relative; overflow: hidden;
  }
  .tl-why-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 20% 50%, rgba(42,90,73,0.08) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .tl-why-section .tl-title { color: #e8e0d5; }
  .tl-why-section .tl-desc { color: rgba(200,215,240,0.45); }
  .tl-why-section .tl-label { color: rgba(42,160,90,0.85); }
  .tl-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; position: relative; z-index: 1;
  }
  .tl-why-card {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
    border-left: 3px solid var(--accent); border-radius: 4px; padding: 28px;
    display: flex; gap: 18px; align-items: flex-start; transition: background 0.2s;
  }
  .tl-why-card:hover { background: rgba(42,90,73,0.06); }
  .tl-why-icon {
    width: 42px; height: 42px; background: rgba(42,90,73,0.1);
    border: 1px solid rgba(42,90,73,0.22); border-radius: 6px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .tl-why-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 18px;
    letter-spacing: 0.05em; text-transform: uppercase; color: #e8ddd0; margin-bottom: 8px;
  }
  .tl-why-card-desc { color: rgba(200,215,240,0.45); font-size: 14px; line-height: 1.65; }

  /* ══ HOW WE WORK ══ */
  .tl-how-section { padding: 88px 0; background: #FCF7EC; }
  .tl-how-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative;
  }
  .tl-how-grid::before {
    content: ''; position: absolute;
    top: 36px; left: calc(12.5% + 20px); right: calc(12.5% + 20px);
    height: 2px; background: linear-gradient(90deg, var(--accent), rgba(42,90,73,0.2));
    z-index: 0;
  }
  .tl-how-step {
    display: flex; flex-direction: column; align-items: center;
    text-align: center; padding: 0 20px; position: relative; z-index: 1;
  }
  .tl-how-number-wrap {
    width: 72px; height: 72px; border-radius: 50%;
    background: #FCF7EC; border: 2px solid var(--accent);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px; flex-shrink: 0;
    box-shadow: 0 4px 20px rgba(42,90,73,0.15);
    transition: background 0.3s, box-shadow 0.3s;
  }
  .tl-how-step:hover .tl-how-number-wrap {
    background: var(--accent); box-shadow: 0 8px 28px rgba(42,90,73,0.35);
  }
  .tl-how-number {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: 22px; letter-spacing: 0.04em; color: var(--accent);
    line-height: 1; transition: color 0.3s;
  }
  .tl-how-step:hover .tl-how-number { color: #fff; }
  .tl-how-step-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: 17px; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--dark); margin-bottom: 10px; line-height: 1.1;
  }
  .tl-how-step-desc { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

  /* ══ TESTIMONIALS ══ */
  .tl-testimonials-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #091914 0%, #133429 100%);
    position: relative; overflow: hidden;
  }
  .tl-testimonials-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 80% 50%, rgba(42,90,73,0.07) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .tl-testimonials-section .tl-title { color: #e8e0d5; }
  .tl-testimonials-section .tl-label { color: rgba(42,160,90,0.85); }
  .tl-testimonials-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    position: relative; z-index: 1;
  }
  .tl-testimonial-card {
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-top: 3px solid var(--accent); border-radius: 6px; padding: 32px 28px;
    display: flex; flex-direction: column; gap: 20px;
    transition: background 0.25s, transform 0.25s;
  }
  .tl-testimonial-card:hover { background: rgba(42,90,73,0.07); transform: translateY(-4px); }
  .tl-stars { display: flex; gap: 3px; }
  .tl-star {
    width: 16px; height: 16px; fill: var(--accent);
  }
  .tl-testimonial-quote {
    font-family: 'Barlow', sans-serif; font-size: 15px; font-style: italic;
    color: rgba(200,215,240,0.75); line-height: 1.75; flex: 1;
  }
  .tl-testimonial-quote::before { content: '\201C'; }
  .tl-testimonial-quote::after  { content: '\201D'; }
  .tl-testimonial-author {
    display: flex; align-items: center; gap: 12px;
    padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.07);
  }
  .tl-testimonial-avatar {
    width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
    background: rgba(42,90,73,0.15); border: 1px solid rgba(42,90,73,0.3);
    display: flex; align-items: center; justify-content: center;
  }
  .tl-testimonial-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase;
    color: #e8ddd0; line-height: 1;
  }
  .tl-testimonial-city {
    font-size: 12px; color: rgba(200,215,240,0.35);
    margin-top: 3px; letter-spacing: 0.04em;
  }
  /* DEV NOTE: Google Reviews badge placeholder */
  .tl-reviews-badge {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    margin-top: 48px; position: relative; z-index: 1;
  }
  .tl-reviews-badge-inner {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(42,90,73,0.2);
    border-radius: 4px; padding: 10px 20px;
    font-size: 13px; color: rgba(200,215,240,0.5); font-weight: 500;
  }
  .tl-reviews-badge-inner strong { color: rgba(42,160,90,0.8); font-weight: 700; }

  /* ══ SERVICE AREAS BAND ══ */
  .tl-areas-band {
    background: #ECEBC3;
    border-top: 1px solid rgba(42,90,73,0.2);
    border-bottom: 1px solid rgba(42,90,73,0.2);
    padding: 28px 32px;
  }
  .tl-areas-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .tl-areas-label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent); flex-shrink: 0;
  }
  .tl-areas-sep { width: 1px; height: 16px; background: rgba(42,90,73,0.2); flex-shrink: 0; }
  .tl-areas-list { display: flex; align-items: center; flex-wrap: wrap; gap: 0; }
  .tl-area-item {
    display: flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted);
    text-decoration: none; padding: 4px 14px;
    border-right: 1px solid rgba(26,20,16,0.1); transition: color 0.2s;
  }
  .tl-area-item:last-child { border-right: none; }
  .tl-area-item:hover { color: var(--accent); }

  /* ══ CTA ══ */
  .tl-cta-section { padding: 88px 0; background: #FCF7EC; }
  .tl-cta-box {
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
    border-radius: 8px; padding: 64px 48px; text-align: center;
    border: 1px solid rgba(42,90,73,0.2);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .tl-cta-box::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(42,90,73,0.1) 0%, transparent 65%);
  }
  .tl-cta-box > * { position: relative; z-index: 1; }
  .tl-cta-eyebrow {
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.22em;
    text-transform: uppercase; color: rgba(42,160,90,0.8); display: block; margin-bottom: 16px;
  }
  .tl-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(28px, 4vw, 48px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 16px;
  }
  .tl-cta-title span { color: var(--accent); }
  .tl-cta-body {
    color: rgba(200,215,240,0.45); font-size: 16px; line-height: 1.7;
    max-width: 500px; margin: 0 auto 40px;
  }
  .tl-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .tl-cta-btn-main {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 15px 32px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; box-shadow: 0 6px 22px rgba(42,90,73,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .tl-cta-btn-main:hover { background: #133429; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(42,90,73,0.55); }
  .tl-cta-btn-ghost {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 15px 28px; background: transparent; color: rgba(200,215,240,0.65);
    border: 1px solid rgba(42,90,73,0.3); border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; transition: all 0.2s;
  }
  .tl-cta-btn-ghost:hover { border-color: var(--accent); color: #fff; background: rgba(42,90,73,0.08); }

  /* ══ MAP ══ */
  .tl-map-section { padding: 0 0 88px; background: #FCF7EC; }
  .tl-map-head { text-align: left; margin-bottom: 32px; }
  .tl-map-wrap { border-radius: 8px; overflow: hidden; box-shadow: 0 4px 30px rgba(26,20,16,0.12); }
  .tl-map-wrap iframe { display: block; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .tl-services-grid { grid-template-columns: repeat(2, 1fr); }
    .tl-why-grid { grid-template-columns: 1fr; }
    .tl-how-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
    .tl-how-grid::before { display: none; }
    .tl-testimonials-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .tl-services-grid { grid-template-columns: 1fr; }
    .tl-services-section, .tl-why-section, .tl-how-section, .tl-testimonials-section, .tl-cta-section { padding: 56px 0; }
    .tl-container { padding: 0 20px; }
    .tl-cta-box { padding: 40px 24px; }
    .tl-areas-band { padding: 22px 20px; }
    .tl-area-item { padding: 4px 10px; font-size: 12px; }
    .tl-why-card { flex-direction: column; gap: 12px; }
    .tl-how-grid { grid-template-columns: 1fr; gap: 32px; }
    .tl-testimonials-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="tl-home">

  <!-- ══ SERVICES ══ -->
  <section id="services" class="tl-services-section">
    <div class="tl-container">

      <div class="tl-section-head tl-reveal">
        <span class="tl-label">What We Do</span>
        <h2 class="tl-title">Our <span>Services</span></h2>
        <p class="tl-desc">Everything Your Property Needs — One Team You Can Trust.</p>
        <div class="tl-rule"></div>
      </div>

      <div class="tl-services-grid">
        <?php foreach ( $services as $i => $service ) : ?>
          <div class="tl-service-card tl-reveal" data-delay="<?php echo ( $i % 3 ) + 1; ?>">
            <div class="tl-service-card-top">
              <?php if ( ! empty( $service['img'] ) ) : ?>
                <img src="<?php echo esc_url( $service['img'] ); ?>"
                     alt="<?php echo esc_attr( $service['title'] ); ?>"
                     loading="lazy" />
                <div class="tl-service-card-top-overlay"></div>
              <?php else : ?>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
                     stroke="rgba(42,160,90,0.85)" stroke-width="1.6"
                     stroke-linecap="round" stroke-linejoin="round">
                  <?php echo $service['icon']; ?>
                </svg>
              <?php endif; ?>
            </div>
            <div class="tl-service-card-body">
              <div class="tl-service-card-title"><?php echo esc_html( $service['title'] ); ?></div>
              <p class="tl-service-card-desc"><?php echo esc_html( $service['desc'] ); ?></p>
              <a href="<?php echo esc_url( $service['href'] ); ?>" class="tl-service-link">
                Learn More
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ WHY TRUE LINE ══ -->
  <section class="tl-why-section">
    <div class="tl-container">

      <div class="tl-section-head tl-reveal" style="position:relative;z-index:1">
        <span class="tl-label">Why Choose Us</span>
        <h2 class="tl-title" style="color:#e8e0d5">A Standard<span> Built on Results, </span>Not Promises.</h2>
        <!-- <p class="tl-desc" style="color:rgba(200,215,240,0.45)">Property care you can count on — every visit, every season.</p> -->
        <div class="tl-rule"></div>
      </div>

      <div class="tl-why-grid">
        <?php foreach ( $why_items as $i => $item ) : ?>
          <div class="tl-why-card tl-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="tl-why-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="#2A5A49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <?php echo $item['icon']; ?>
              </svg>
            </div>
            <div>
              <div class="tl-why-card-title"><?php echo esc_html( $item['title'] ); ?></div>
              <p class="tl-why-card-desc"><?php echo esc_html( $item['desc'] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ HOW WE WORK ══ -->
  <section class="tl-how-section">
    <div class="tl-container">

      <div class="tl-section-head tl-reveal">
        <span class="tl-label">How We Work</span>
        <h2 class="tl-title">A Clear Process from First Call<br>to <span>Final Result.</span></h2>
        <div class="tl-rule"></div>
      </div>

      <div class="tl-how-grid">
        <?php foreach ( $steps as $i => $step ) : ?>
          <div class="tl-how-step tl-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="tl-how-number-wrap">
              <span class="tl-how-number"><?php echo esc_html( $step['num'] ); ?></span>
            </div>
            <div class="tl-how-step-title"><?php echo esc_html( $step['title'] ); ?></div>
            <p class="tl-how-step-desc"><?php echo esc_html( $step['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ TESTIMONIALS ══ -->
  <section class="tl-testimonials-section">
    <div class="tl-container">

      <div class="tl-section-head tl-reveal" style="position:relative;z-index:1">
        <span class="tl-label">Client Reviews</span>
        <h2 class="tl-title" style="color:#e8e0d5">What Our <span>Clients Say</span></h2>
        <div class="tl-rule"></div>
      </div>

      <?php
      // DEV NOTE: Replace these placeholders with real Google Reviews.
      // Recommended: use a Google Reviews plugin (e.g. Widgets for Google Reviews)
      // or pull via Google Places API and render dynamically.
      $testimonials = [
        [
          'quote'  => 'They did exactly what they said they would — on time, clean, and professional.',
          'name'   => 'Homeowner',
          'city'   => 'Holly Springs, NC',
          'stars'  => 5,
        ],
        [
          'quote'  => 'Best contractor we\'ve hired. Our patio and retaining wall look incredible.',
          'name'   => 'Homeowner',
          'city'   => 'Cary, NC',
          'stars'  => 5,
        ],
        [
          'quote'  => 'They prepared our home for sale in record time. Our realtor was impressed.',
          'name'   => 'Homeowner',
          'city'   => 'Chapel Hill, NC',
          'stars'  => 5,
        ],
      ];
      ?>

      <div class="tl-testimonials-grid">
        <?php foreach ( $testimonials as $i => $t ) : ?>
          <div class="tl-testimonial-card tl-reveal" data-delay="<?php echo $i + 1; ?>">

            <div class="tl-stars">
              <?php for ( $s = 0; $s < $t['stars']; $s++ ) : ?>
                <svg class="tl-star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              <?php endfor; ?>
            </div>

            <p class="tl-testimonial-quote"><?php echo esc_html( $t['quote'] ); ?></p>

            <div class="tl-testimonial-author">
              <div class="tl-testimonial-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <div class="tl-testimonial-name"><?php echo esc_html( $t['name'] ); ?></div>
                <div class="tl-testimonial-city"><?php echo esc_html( $t['city'] ); ?></div>
              </div>
            </div>

          </div>
        <?php endforeach; ?>
      </div>

      <!-- DEV NOTE: Replace with actual Google rating when live reviews are connected -->
      <div class="tl-reviews-badge">
        <div class="tl-reviews-badge-inner">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#2A5A49"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <strong>5.0</strong> rated on Google · <strong>See all reviews →</strong>
        </div>
      </div>

    </div>
  </section>

  <!-- ══ SERVICE AREAS BAND ══ -->
  <div class="tl-areas-band tl-reveal">
    <div class="tl-areas-inner">
      <span class="tl-areas-label">Service Areas</span>
      <div class="tl-areas-sep"></div>
      <nav class="tl-areas-list" aria-label="Service areas">
        <?php foreach ( $service_areas as $area ) : ?>
          <a href="<?php echo esc_url( home_url( '/service-areas/' . sanitize_title( $area ) ) ); ?>"
             class="tl-area-item">
            <?php echo esc_html( $area ); ?>
          </a>
        <?php endforeach; ?>
      </nav>
    </div>
  </div>

  <!-- ══ CTA ══ -->
  <section class="tl-cta-section">
    <div class="tl-container">
      <div class="tl-cta-box tl-reveal">
        <span class="tl-cta-eyebrow">Ready to Get Started?</span>
        <h2 class="tl-cta-title">Your Property Deserves<br><span>Better Care.</span></h2>
        <p class="tl-cta-body">Get a free, no-obligation estimate. We'll walk the property with you and give you a clear, honest quote — no pressure.</p>
        <div class="tl-cta-btns">
          <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="tl-cta-btn-main">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Request a Free Estimate
          </a>
          <a href="<?php echo esc_url( home_url( '/gallery' ) ); ?>" class="tl-cta-btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            View Our Work
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ MAP ══ -->
  <div class="tl-map-section">
    <div class="tl-container">
      <div class="tl-map-head tl-reveal">
        <span class="tl-label">Where We Work</span>
        <h2 class="tl-title">Our <span>Service Area</span></h2>
        <div class="tl-rule" style="margin:14px 0 0"></div>
      </div>
      <div class="tl-map-wrap tl-reveal">
        <iframe
          src="<?php echo esc_url( $map_src ); ?>"
          width="100%"
          height="460"
          style="border:0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="True Line Property Solutions — Service Area"
        ></iframe>
      </div>
    </div>
  </div>

</div><!-- .tl-home -->

<script>
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('tl-in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.tl-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<?php get_footer(); ?>