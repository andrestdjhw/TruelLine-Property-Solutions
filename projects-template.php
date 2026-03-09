<?php
/**
 * Template Name: Projects Template
 *
 * Página About Us — HTML + Tailwind inline.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
// ── HELPERS ────────────────────────────────────────────────────────────────
$theme_uri = get_template_directory_uri();

// Reemplaza estas URLs con tus imágenes reales
$img_origin   = $theme_uri . '/assets/images/about-origin.jpg';        // Foto equipo / obra
$img_founder  = $theme_uri . '/assets/images/christian-rosas.jpg';     // Foto Christian Rosas
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .au-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }

  /* ── SCROLL REVEAL ── */
  .au-reveal {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .au-reveal.au-in { opacity: 1; transform: none; }
  .au-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .au-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .au-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .au-reveal[data-delay="4"] { transition-delay: 0.32s; }
  .au-reveal[data-delay="5"] { transition-delay: 0.40s; }

  /* ── SECTION LABEL ── */
  .au-label {
    display: inline-block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: #e66414;
    margin-bottom: 10px;
  }
  .au-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 48px); letter-spacing: 0.02em;
    text-transform: uppercase; color: #1a1410; line-height: 1;
  }
  .au-title span { color: #e66414; }
  .au-rule { width: 40px; height: 3px; background: #e66414; border-radius: 2px; margin-top: 14px; }
  .au-body { color: #6b6560; font-size: 15px; line-height: 1.8; }
  .au-body strong { color: #1a1410; font-weight: 600; }

  /* ── PAGE HEADER ── */
  .au-header {
    background: linear-gradient(160deg, #080c18 0%, #0d1525 60%, #0b1020 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .au-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(230,100,20,0.09) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .au-header-wm {
    position: absolute; inset: 0; display: flex;
    align-items: center; justify-content: space-between;
    padding: 0 6%; pointer-events: none; z-index: 0;
  }
  .au-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .au-header-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }
  .au-hero-label {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.25);
    color: #e88040; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .au-hero-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; animation: auPulse 2s infinite; }
  @keyframes auPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .au-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(36px, 6.5vw, 76px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .au-header h1 em { color: #e66414; font-style: normal; }
  .au-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 600px; margin: 0 auto; }

  /* Wave */
  .au-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0b1020); }
  .au-wave svg { display: block; width: 100%; }

  /* ── ORIGIN SECTION ── */
  .au-origin {
    max-width: 1200px; margin: 0 auto; padding: 88px 32px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  }
  .au-origin-img-wrap {
    position: relative; border-radius: 6px; overflow: hidden;
    aspect-ratio: 4/3;
    box-shadow: 0 20px 60px rgba(26,20,16,0.2);
  }
  .au-origin-img-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(230,100,20,0.15) 0%, transparent 60%);
    pointer-events: none;
  }
  .au-origin-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .au-origin-img-placeholder {
    width: 100%; height: 100%; background: linear-gradient(135deg, #1a1e2e, #0d1525);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  }
  .au-origin-img-placeholder svg { opacity: 0.15; }
  .au-origin-img-placeholder span { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.2); }
  /* Badge sobre la imagen */
  .au-origin-badge {
    position: absolute; bottom: 20px; left: 20px; z-index: 2;
    background: rgba(8,12,24,0.88); backdrop-filter: blur(12px);
    border: 1px solid rgba(230,100,20,0.25); border-radius: 4px;
    padding: 12px 18px;
  }
  .au-origin-badge-val {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 28px;
    color: #e66414; line-height: 1;
  }
  .au-origin-badge-label { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(200,215,240,0.4); margin-top: 3px; }

  .au-origin-text { display: flex; flex-direction: column; gap: 20px; }
  .au-origin-quote {
    font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
    font-style: italic; color: #1a1410; line-height: 1.3;
    border-left: 3px solid #e66414; padding-left: 20px;
  }

  /* ── STATS BAR ── */
  .au-stats-bar {
    background: #0d1525;
    border-top: 1px solid rgba(230,100,20,0.15);
    border-bottom: 1px solid rgba(230,100,20,0.15);
  }
  .au-stats-inner {
    max-width: 1200px; margin: 0 auto; padding: 48px 32px;
    display: grid; grid-template-columns: repeat(4, 1fr);
    divide-x: 1px solid rgba(255,255,255,0.06);
  }
  .au-stat {
    text-align: center; padding: 0 24px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .au-stat:last-child { border-right: none; }
  .au-stat-val {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(36px, 4vw, 54px); color: #e66414; line-height: 1;
    letter-spacing: -0.01em;
  }
  .au-stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(200,215,240,0.35); margin-top: 6px; }

  /* ── MVP SECTION (Mission/Vision/Purpose) ── */
  .au-mvp-section { background: #fff; padding: 88px 32px; }
  .au-mvp-inner { max-width: 1200px; margin: 0 auto; }
  .au-mvp-head { text-align: center; margin-bottom: 56px; }
  .au-mvp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .au-mvp-card {
    background: #faf8f5; border-radius: 6px; padding: 36px 28px;
    border-top: 3px solid #e66414;
    box-shadow: 0 2px 16px rgba(26,20,16,0.06);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .au-mvp-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(26,20,16,0.11); }
  .au-mvp-card-icon {
    width: 44px; height: 44px; background: rgba(230,100,20,0.08);
    border: 1px solid rgba(230,100,20,0.18); border-radius: 6px;
    display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
  }
  .au-mvp-card-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #e66414; margin-bottom: 10px; }
  .au-mvp-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 22px;
    text-transform: uppercase; color: #1a1410; margin-bottom: 14px; line-height: 1.1;
  }

  /* ── VALUES SECTION ── */
  .au-values-section { padding: 88px 32px; background: #f5f3ef; }
  .au-values-inner { max-width: 1200px; margin: 0 auto; }
  .au-values-head { margin-bottom: 52px; }
  .au-values-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
  .au-value-card {
    background: #fff; border-radius: 6px; padding: 28px 22px;
    box-shadow: 0 2px 14px rgba(26,20,16,0.07);
    border-bottom: 3px solid transparent;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
    position: relative; overflow: hidden;
  }
  .au-value-card::before {
    content: attr(data-number);
    position: absolute; top: -10px; right: 14px;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: 72px; color: rgba(230,100,20,0.05); line-height: 1;
    pointer-events: none; user-select: none;
  }
  .au-value-card:hover { border-bottom-color: #e66414; transform: translateY(-4px); box-shadow: 0 10px 30px rgba(26,20,16,0.12); }
  .au-value-icon {
    width: 40px; height: 40px; background: rgba(230,100,20,0.08);
    border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .au-value-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 17px;
    text-transform: uppercase; color: #1a1410; margin-bottom: 8px; line-height: 1.1;
  }
  .au-value-desc { font-size: 12.5px; color: #9a8f86; line-height: 1.6; }

  /* ── CRE ADVANTAGE ── */
  .au-adv-section {
    background: linear-gradient(160deg, #080c18 0%, #0d1525 100%);
    padding: 88px 32px; position: relative; overflow: hidden;
  }
  .au-adv-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 50% 60% at 30% 50%, rgba(230,100,20,0.07) 0%, transparent 65%);
  }
  .au-adv-inner {
    max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  }
  .au-adv-label { color: #e88040; }
  .au-adv-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 3.5vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1; letter-spacing: 0.02em;
  }
  .au-adv-title span { color: #e66414; }
  .au-adv-rule { width: 40px; height: 3px; background: #e66414; border-radius: 2px; margin: 16px 0 24px; }
  .au-adv-body { color: rgba(200,215,240,0.5); font-size: 15px; line-height: 1.8; }
  .au-adv-body strong { color: rgba(200,215,240,0.8); font-weight: 600; }
  .au-adv-right { display: flex; flex-direction: column; gap: 16px; }
  .au-adv-item {
    display: flex; gap: 16px; align-items: flex-start;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-left: 3px solid #e66414; border-radius: 4px; padding: 18px 20px;
  }
  .au-adv-item-icon {
    width: 36px; height: 36px; background: rgba(230,100,20,0.1);
    border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .au-adv-item-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px; text-transform: uppercase; color: #e8e0d5; margin-bottom: 4px; letter-spacing: 0.05em; }
  .au-adv-item-desc { font-size: 12.5px; color: rgba(200,215,240,0.4); line-height: 1.6; }

  /* ── FOUNDER ── */
  .au-founder-section { background: #fff; padding: 88px 32px; }
  .au-founder-inner {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 340px 1fr; gap: 64px; align-items: start;
  }
  .au-founder-photo {
    border-radius: 6px; overflow: hidden; aspect-ratio: 3/4;
    box-shadow: 0 12px 40px rgba(26,20,16,0.15);
    background: linear-gradient(135deg, #1a1e2e, #0d1525);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
  }
  .au-founder-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
  .au-founder-photo-placeholder svg { opacity: 0.12; }
  .au-founder-photo-placeholder span { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.18); }
  .au-founder-info { display: flex; flex-direction: column; gap: 0; padding-top: 8px; }
  .au-founder-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(32px, 4vw, 52px); text-transform: uppercase;
    color: #1a1410; line-height: 1; letter-spacing: 0.02em;
  }
  .au-founder-name span { color: #e66414; }
  .au-founder-title {
    font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
    color: #9a8f86; margin-top: 8px; margin-bottom: 20px;
  }
  .au-founder-divider { width: 40px; height: 3px; background: #e66414; border-radius: 2px; margin-bottom: 24px; }
  .au-founder-bio {
    font-size: 15px; color: #6b6560; line-height: 1.8;
    background: #fdf9f2; border-left: 3px solid rgba(230,100,20,0.3);
    padding: 20px 24px; border-radius: 0 4px 4px 0;
    font-style: italic; margin-bottom: 24px;
  }
  .au-founder-note { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #c0b8b0; }
  .au-founder-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
  .au-founder-tag {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: #e66414; background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.18);
    padding: 4px 12px; border-radius: 2px;
  }

  /* ── CTA ── */
  .au-cta-section { background: #f5f3ef; padding: 88px 32px; }
  .au-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #0d1525 0%, #162040 100%);
    border: 1px solid rgba(230,100,20,0.2); border-radius: 8px;
    padding: 60px 48px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .au-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(230,100,20,0.08) 0%, transparent 65%);
    pointer-events: none;
  }
  .au-cta-inner > * { position: relative; z-index: 1; }
  .au-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #e88040; margin-bottom: 16px; display: block; }
  .au-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 18px;
  }
  .au-cta-title span { color: #e66414; }
  .au-cta-body { color: rgba(200,215,240,0.45); font-size: 15px; line-height: 1.7; margin-bottom: 36px; max-width: 500px; margin-left: auto; margin-right: auto; }
  .au-cta-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 15px 36px; background: #e66414; color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 6px 22px rgba(230,100,20,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .au-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .au-cta-btn:hover::before { left: 160%; }
  .au-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(230,100,20,0.55); }

  @media (max-width: 1024px) {
    .au-origin, .au-adv-inner, .au-founder-inner { grid-template-columns: 1fr; gap: 40px; }
    .au-values-grid { grid-template-columns: repeat(3, 1fr); }
    .au-mvp-grid { grid-template-columns: 1fr; }
    .au-stats-inner { grid-template-columns: repeat(2, 1fr); }
    .au-founder-photo { aspect-ratio: 4/3; max-width: 400px; }
  }
  @media (max-width: 640px) {
    .au-header { padding: 56px 20px 64px; }
    .au-origin, .au-mvp-section, .au-values-section,
    .au-adv-section, .au-founder-section, .au-cta-section { padding: 56px 20px; }
    .au-values-grid { grid-template-columns: 1fr 1fr; }
    .au-stats-inner { grid-template-columns: 1fr 1fr; }
    .au-cta-inner { padding: 40px 24px; }
  }
</style>

<div class="au-page">

  <!-- ══ PAGE HEADER ══ -->
  <div class="au-header">
    <div class="au-header-wm" aria-hidden="true">
      <svg viewBox="0 0 46 50" fill="white">
        <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
        <path d="M10 19L23 12L36 19" stroke="white" stroke-width="2" fill="none"/>
        <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
        <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
      </svg>
      <svg viewBox="0 0 46 50" fill="white" style="transform:scaleX(-1)">
        <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
        <path d="M10 19L23 12L36 19" stroke="white" stroke-width="2" fill="none"/>
        <path d="M10 19L10 30L23 24L36 30L36 19" fill="rgba(255,255,255,0.3)"/>
        <path d="M19 24H27V33H19z" fill="rgba(255,255,255,0.4)"/>
      </svg>
    </div>
    <div class="au-header-inner">
      <div class="au-hero-label">
        <div class="au-hero-dot"></div>
        Jackson, Wyoming · Est. 2020
      </div>
      <h1>We Don't Build <em>Volume.</em><br>We Build <em>Certainty.</em></h1>
      <p class="au-header-sub">CRE Construction Group was founded on a simple conviction: in high-stakes construction, the most valuable thing a contractor can deliver isn't a trade — it's the certainty that the job will be done right, on schedule, and without surprises.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="au-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#f5f3ef"/>
    </svg>
  </div>

  <!-- ══ ORIGIN STORY ══ -->
  <section style="background:#f5f3ef">
    <div class="au-origin">

      <!-- Imagen -->
      <div class="au-reveal au-origin-img-wrap">
        <?php if ( file_exists( get_template_directory() . '/assets/images/about-origin.jpg' ) ) : ?>
          <img src="<?php echo esc_url( $img_origin ); ?>" alt="CRE Construction Group — team on site" loading="lazy" />
        <?php else : ?>
          <div class="au-origin-img-placeholder">
            <svg width="80" height="88" viewBox="0 0 46 50" fill="white">
              <path d="M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"/>
            </svg>
            <span>Photo Coming Soon</span>
          </div>
        <?php endif; ?>
        <div class="au-origin-badge">
          <div class="au-origin-badge-val">Jackson, WY</div>
          <div class="au-origin-badge-label">Teton County · Licensed & Insured</div>
        </div>
      </div>

      <!-- Texto -->
      <div class="au-origin-text">
        <div class="au-reveal">
          <span class="au-label">Our Story</span>
          <h2 class="au-title">The Story<br>of <span>CRE</span></h2>
          <div class="au-rule"></div>
        </div>
        <p class="au-reveal au-body" data-delay="1">
          <strong>CRE stands for more than initials.</strong> It's a name built from family — the first letters of founder <strong>Christian Rosas</strong> and his son <strong>Emiliano</strong> — a reminder that the reputation we build belongs not just to a business, but to a legacy.
        </p>
        <p class="au-reveal au-body" data-delay="2">
          CRE was founded to solve a recurring problem in complex construction: <strong>the absence of certainty.</strong> Errors cause delays. Delays compound. In a market like Jackson, Wyoming — where construction windows are short, codes are strict, inspections are unforgiving, and skilled labor is scarce — the cost of a weak subcontractor isn't just financial. It's reputational.
        </p>
        <blockquote class="au-reveal au-origin-quote" data-delay="3">
          Projects
        </blockquote>
        <p class="au-reveal au-body" data-delay="4">
          Project by project, inspection by inspection — we've built something harder to copy than any trade skill: <strong>a reputation for making problems disappear before they start.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- ══ STATS BAR ══ -->
  <div class="au-stats-bar">
    <div class="au-stats-inner">
      <?php
      $stats = [
        [ 'val' => '20+',       'label' => 'Years Combined Experience' ],
        [ 'val' => '500+',      'label' => 'Projects Completed' ],
        [ 'val' => '6',         'label' => 'Trade Specialties' ],
        [ 'val' => 'NAICS',     'label' => '23813 · 23839 Certified' ],
      ];
      foreach ( $stats as $i => $s ) : ?>
        <div class="au-stat au-reveal" data-delay="<?php echo $i + 1; ?>">
          <div class="au-stat-val"><?php echo esc_html( $s['val'] ); ?></div>
          <div class="au-stat-label"><?php echo esc_html( $s['label'] ); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- ══ MISSION / VISION / PURPOSE ══ -->
  <section class="au-mvp-section">
    <div class="au-mvp-inner">
      <div class="au-mvp-head au-reveal">
        <span class="au-label">Why We Exist</span>
        <h2 class="au-title">Mission, Vision<br>&amp; <span>Purpose</span></h2>
        <div class="au-rule" style="margin:14px auto 0"></div>
      </div>
      <div class="au-mvp-grid">

        <?php
        $mvp = [
          [
            'label' => 'Our Purpose',
            'title' => 'Why We Exist',
            'body'  => 'To reduce operational risk in complex construction through disciplined execution, reliable processes, and uncompromising integrity — providing certainty where there\'s no room for error.',
            'icon'  => '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
          ],
          [
            'label' => 'Our Mission',
            'title' => 'How We Work',
            'body'  => 'To deliver high-end construction solutions through disciplined execution, skilled craftsmanship, and proven processes — ensuring protected schedules and consistent results across every project.',
            'icon'  => '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
          ],
          [
            'label' => 'Our Vision',
            'title' => 'Where We\'re Headed',
            'body'  => 'To become the most trusted structural execution partner in the Jackson Hole region — recognized for reliability, operational discipline, and consistent results on the projects that matter most.',
            'icon'  => '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
          ],
        ];
        foreach ( $mvp as $i => $card ) : ?>
          <div class="au-mvp-card au-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="au-mvp-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e66414" stroke-width="2">
                <?php echo $card['icon']; ?>
              </svg>
            </div>
            <div class="au-mvp-card-label"><?php echo esc_html( $card['label'] ); ?></div>
            <div class="au-mvp-card-title"><?php echo esc_html( $card['title'] ); ?></div>
            <p class="au-body" style="font-size:14px"><?php echo esc_html( $card['body'] ); ?></p>
          </div>
        <?php endforeach; ?>

      </div>
    </div>
  </section>

  <!-- ══ CORE VALUES ══ -->
  <section class="au-values-section">
    <div class="au-values-inner">
      <div class="au-values-head au-reveal">
        <span class="au-label">What We Stand For</span>
        <h2 class="au-title">Core <span>Values</span></h2>
        <div class="au-rule"></div>
      </div>
      <div class="au-values-grid">

        <?php
        $values = [
          [
            'name' => 'Reliable Execution',
            'desc' => 'We plan, coordinate, and deliver with discipline. Schedules are promises, not suggestions.',
            'icon' => '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
          ],
          [
            'name' => 'Total Accountability',
            'desc' => 'We own our work fully. We don\'t pass problems — we solve them.',
            'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          ],
          [
            'name' => 'Operational Integrity',
            'desc' => 'No shortcuts. No improvisations. We meet technical standards even when no one is watching.',
            'icon' => '<polyline points="20 6 9 17 4 12"/>',
          ],
          [
            'name' => 'Order & Coordination',
            'desc' => 'A disciplined job site is a safe job site. Clear communication reduces errors.',
            'icon' => '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
          ],
          [
            'name' => 'Long-Term Reputation',
            'desc' => 'Every project shapes what comes next. We make decisions for the relationship, not the moment.',
            'icon' => '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
          ],
        ];
        foreach ( $values as $i => $v ) : ?>
          <div class="au-value-card au-reveal" data-number="0<?php echo $i + 1; ?>" data-delay="<?php echo $i + 1; ?>">
            <div class="au-value-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e66414" stroke-width="2">
                <?php echo $v['icon']; ?>
              </svg>
            </div>
            <div class="au-value-name"><?php echo esc_html( $v['name'] ); ?></div>
            <p class="au-value-desc"><?php echo esc_html( $v['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>

      </div>
    </div>
  </section>

  <!-- ══ CRE ADVANTAGE ══ -->
  <section class="au-adv-section">
    <div class="au-adv-inner">

      <!-- Left -->
      <div>
        <div class="au-reveal">
          <span class="au-label au-adv-label">The Difference</span>
          <h2 class="au-adv-title">What Makes CRE <span>Different</span> From Every Other Sub on Your List</h2>
          <div class="au-adv-rule"></div>
        </div>
        <p class="au-adv-body au-reveal" data-delay="1">
          Most subcontractors are <strong>single-trade operators.</strong> They do one thing, hand it off, and leave. CRE operates across the full structural and finish envelope — framing, timber, exterior, drywall, flooring, carpentry — with crews trained to transition between phases.
        </p>
        <p class="au-adv-body au-reveal" data-delay="2" style="margin-top:16px">
          The result: <strong>fewer handoff failures, tighter sequencing,</strong> and a single accountable partner for the phases that determine whether a project passes or fails.
        </p>
      </div>

      <!-- Right — advantage items -->
      <div class="au-adv-right">
        <?php
        $advantages = [
          [
            'title' => 'Multi-Trade Crews',
            'desc'  => 'Framing, timber, exterior, drywall — one team, one standard.',
            'icon'  => '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
          ],
          [
            'title' => 'Documented Processes',
            'desc'  => 'Every phase is planned, sequenced, and tracked — not improvised.',
            'icon'  => '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
          ],
          [
            'title' => 'Single Point of Accountability',
            'desc'  => 'One partner for the phases that matter most. No finger-pointing.',
            'icon'  => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          ],
          [
            'title' => 'Jackson Hole Market Expertise',
            'desc'  => 'Short construction windows, strict codes, demanding inspections. We know this market.',
            'icon'  => '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
          ],
        ];
        foreach ( $advantages as $i => $a ) : ?>
          <div class="au-adv-item au-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="au-adv-item-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e66414" stroke-width="2">
                <?php echo $a['icon']; ?>
              </svg>
            </div>
            <div>
              <div class="au-adv-item-title"><?php echo esc_html( $a['title'] ); ?></div>
              <div class="au-adv-item-desc"><?php echo esc_html( $a['desc'] ); ?></div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ FOUNDER ══ -->
  <section class="au-founder-section">
    <div class="au-founder-inner">

      <!-- Foto -->
      <div class="au-reveal">
        <div class="au-founder-photo">
          <?php if ( file_exists( get_template_directory() . '/assets/images/christian-rosas.jpg' ) ) : ?>
            <img src="<?php echo esc_url( $img_founder ); ?>" alt="Christian Rosas — Founder & CEO, CRE Construction Group" loading="lazy" />
          <?php else : ?>
            <div class="au-founder-photo-placeholder" style="display:flex;flex-direction:column;align-items:center;gap:12px">
              <svg width="80" height="88" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Photo Coming Soon</span>
            </div>
          <?php endif; ?>
        </div>
      </div>

      <!-- Info -->
      <div class="au-founder-info">
        <div class="au-reveal">
          <div class="au-founder-name">Christian <span>Rosas</span></div>
          <div class="au-founder-title">Founder &amp; CEO · CRE Construction Group</div>
          <div class="au-founder-divider"></div>
        </div>
        <blockquote class="au-reveal au-founder-bio" data-delay="1">
          <!-- Bio placeholder — reemplazar con bio real cuando esté disponible -->
          Bio to be provided. Should include: years in construction, specific expertise in heavy timber and structural framing, philosophy on execution and reliability, personal connection to the Jackson Hole market.
        </blockquote>
        <p class="au-founder-note au-reveal" data-delay="2">
          ✎ &nbsp;Bio and photo pending — update in <code>/assets/images/christian-rosas.jpg</code>
        </p>
        <div class="au-founder-tags au-reveal" data-delay="3">
          <span class="au-founder-tag">Structural Framing</span>
          <span class="au-founder-tag">Heavy Timber</span>
          <span class="au-founder-tag">Jackson Hole, WY</span>
          <span class="au-founder-tag">Multi-Trade</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ══ BOTTOM CTA ══ -->
  <section class="au-cta-section">
    <div class="au-cta-inner au-reveal">
      <span class="au-cta-label">Ready to Work Together?</span>
      <h2 class="au-cta-title">Your Schedule Is<br>Our <span>Reputation.</span></h2>
      <p class="au-cta-body">Ready to work with a team that treats your schedule like their reputation? Let's connect and talk about your next project.</p>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="au-cta-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Start a Conversation
      </a>
    </div>
  </section>

</div><!-- .au-page -->

<script>
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('au-in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.au-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<?php get_footer(); ?>