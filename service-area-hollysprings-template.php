<?php
/**
 * Template Name: Holly Springs Service Area Template
 *
 * Página de área de servicio: Holly Springs, NC.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .sa-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }
  .sa-page {
    --accent:        #4aa050;
    --accent-soft:   rgba(74,160,80,0.08);
    --accent-border: rgba(74,160,80,0.18);
    --dark:          #1a1410;
    --muted:         #6b6560;
  }

  /* ── SCROLL REVEAL ── */
  .sa-reveal {
    opacity: 0; transform: translateY(26px);
    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .sa-reveal.sa-in { opacity: 1; transform: none; }
  .sa-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .sa-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .sa-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .sa-reveal[data-delay="4"] { transition-delay: 0.32s; }
  .sa-reveal[data-delay="5"] { transition-delay: 0.40s; }
  .sa-reveal[data-delay="6"] { transition-delay: 0.48s; }

  /* ── SHARED ── */
  .sa-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .sa-label {
    display: inline-block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
  }
  .sa-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 48px); letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--dark); line-height: 1;
  }
  .sa-title span { color: var(--accent); }
  .sa-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 14px; }
  .sa-body { color: var(--muted); font-size: 15px; line-height: 1.8; }
  .sa-body strong { color: var(--dark); font-weight: 600; }

  /* ══ PAGE HEADER ══ */
  .sa-header {
    background: linear-gradient(160deg, #080c18 0%, #0d1a10 60%, #0a1510 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .sa-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(74,160,80,0.1) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sa-header-wm {
    position: absolute; inset: 0; display: flex;
    align-items: center; justify-content: space-between;
    padding: 0 6%; pointer-events: none; z-index: 0;
  }
  .sa-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .sa-header-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }
  .sa-hero-label {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(74,160,80,0.1); border: 1px solid rgba(74,160,80,0.25);
    color: rgba(100,200,110,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .sa-hero-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: saPulse 2s infinite; }
  @keyframes saPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .sa-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(38px, 6.5vw, 76px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .sa-header h1 em { color: var(--accent); font-style: normal; }
  .sa-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 600px; margin: 0 auto 36px; }
  .sa-header-cta {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(74,160,80,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sa-header-cta::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sa-header-cta:hover::before { left: 160%; }
  .sa-header-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,160,80,0.55); }

  /* Wave */
  .sa-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0a1510); }
  .sa-wave svg { display: block; width: 100%; }

  /* ══ INTRO ══ */
  .sa-intro-section { padding: 88px 0; background: #f5f3ef; }
  .sa-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
  .sa-intro-text { display: flex; flex-direction: column; gap: 20px; }

  /* Map embed */
  .sa-map-wrap {
    border-radius: 6px; overflow: hidden;
    box-shadow: 0 20px 60px rgba(26,20,16,0.2);
    aspect-ratio: 4/3; position: relative;
  }
  .sa-map-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(74,160,80,0.1) 0%, transparent 50%);
    pointer-events: none; z-index: 1;
  }
  .sa-map-wrap iframe { display: block; width: 100%; height: 100%; border: 0; }

  /* ══ SERVICES GRID ══ */
  .sa-services-section { padding: 88px 0; background: #fff; }
  .sa-services-head { text-align: center; margin-bottom: 52px; }
  .sa-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .sa-service-card {
    background: #faf8f5; border-radius: 6px; padding: 26px 22px;
    border-top: 3px solid var(--accent);
    box-shadow: 0 2px 14px rgba(26,20,16,0.07);
    transition: transform 0.25s, box-shadow 0.25s;
    display: flex; flex-direction: column; gap: 10px;
  }
  .sa-service-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(26,20,16,0.11); }
  .sa-service-icon {
    width: 40px; height: 40px; background: var(--accent-soft);
    border: 1px solid var(--accent-border); border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
  }
  .sa-service-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 17px;
    text-transform: uppercase; color: var(--dark); letter-spacing: 0.04em; line-height: 1.1;
  }
  .sa-service-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }
  .sa-service-link {
    display: inline-flex; align-items: center; gap: 5px; margin-top: auto;
    color: var(--accent); font-size: 12px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
    transition: gap 0.2s;
  }
  .sa-service-link:hover { gap: 8px; }

  /* ══ WHY TRUELINE LOCAL ══ */
  .sa-why-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #0d1a10 0%, #0f2015 100%);
    position: relative; overflow: hidden;
  }
  .sa-why-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 80% 50%, rgba(74,160,80,0.08) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sa-why-inner {
    max-width: 1200px; margin: 0 auto; padding: 0 32px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
    align-items: center; position: relative; z-index: 1;
  }
  .sa-why-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 3.5vw, 42px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 8px;
  }
  .sa-why-title span { color: var(--accent); }
  .sa-why-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin: 16px 0 24px; }
  .sa-why-body { color: rgba(200,215,240,0.5); font-size: 15px; line-height: 1.8; }
  .sa-why-body strong { color: rgba(200,215,240,0.8); font-weight: 600; }
  .sa-why-items { display: flex; flex-direction: column; gap: 14px; }
  .sa-why-item {
    display: flex; gap: 14px; align-items: flex-start;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-left: 3px solid var(--accent); border-radius: 4px; padding: 16px 18px;
  }
  .sa-why-item-icon {
    width: 34px; height: 34px; background: rgba(74,160,80,0.1);
    border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .sa-why-item-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px;
    text-transform: uppercase; color: #e8e0d5; margin-bottom: 3px; letter-spacing: 0.05em;
  }
  .sa-why-item-desc { font-size: 12.5px; color: rgba(200,215,240,0.4); line-height: 1.6; }

  /* ══ NEARBY AREAS ══ */
  .sa-nearby-section { background: #fff; padding: 56px 32px; }
  .sa-nearby-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .sa-nearby-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); flex-shrink: 0; }
  .sa-nearby-sep { width: 1px; height: 16px; background: rgba(74,160,80,0.2); flex-shrink: 0; }
  .sa-nearby-list { display: flex; align-items: center; flex-wrap: wrap; }
  .sa-nearby-item {
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted);
    text-decoration: none; padding: 4px 14px;
    border-right: 1px solid rgba(26,20,16,0.1); transition: color 0.2s;
  }
  .sa-nearby-item:last-child { border-right: none; }
  .sa-nearby-item:hover { color: var(--accent); }

  /* ══ BOTTOM CTA ══ */
  .sa-cta-section { background: #f5f3ef; padding: 88px 32px; }
  .sa-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #0d1a10 0%, #142018 100%);
    border: 1px solid rgba(74,160,80,0.2); border-radius: 8px;
    padding: 60px 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .sa-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74,160,80,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .sa-cta-inner > * { position: relative; z-index: 1; }
  .sa-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(100,200,110,0.8); margin-bottom: 16px; display: block; }
  .sa-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 32px;
  }
  .sa-cta-title span { color: var(--accent); }
  .sa-cta-actions { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
  .sa-cta-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(74,160,80,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sa-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sa-cta-btn:hover::before { left: 160%; }
  .sa-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,160,80,0.55); }
  .sa-cta-phone {
    display: flex; align-items: center; gap: 8px;
    color: rgba(200,215,240,0.6); font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .sa-cta-phone:hover { color: var(--accent); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .sa-intro-grid, .sa-why-inner { grid-template-columns: 1fr; gap: 40px; }
    .sa-services-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .sa-header { padding: 56px 20px 64px; }
    .sa-intro-section, .sa-services-section, .sa-why-section, .sa-cta-section { padding: 56px 0; }
    .sa-container { padding: 0 20px; }
    .sa-nearby-section { padding: 40px 20px; }
    .sa-cta-inner { padding: 40px 24px; }
    .sa-cta-actions { flex-direction: column; gap: 16px; }
    .sa-services-grid { grid-template-columns: 1fr; }
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
        TrueLine Property Solutions · Holly Springs, NC
      </div>
      <h1>Serving<br><em>Holly Springs, NC</em></h1>
      <p class="sa-header-sub">Professional landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation — delivered to Holly Springs homeowners and properties at the standard they deserve.</p>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="sa-header-cta">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Request a Free Estimate
      </a>
    </div>
  </div>

  <!-- Wave -->
  <div class="sa-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#f5f3ef"/>
    </svg>
  </div>

  <!-- ══ INTRO + MAP ══ -->
  <section class="sa-intro-section">
    <div class="sa-container">
      <div class="sa-intro-grid">

        <!-- Texto -->
        <div class="sa-intro-text">
          <div class="sa-reveal">
            <span class="sa-label">Holly Springs, NC</span>
            <h2 class="sa-title">Exterior Property Care<br>for <span>Holly Springs</span></h2>
            <div class="sa-rule"></div>
          </div>
          <p class="sa-reveal sa-body" data-delay="1">
            Holly Springs is one of the fastest-growing communities in Wake County — and one where <strong>homeowners take genuine pride in their properties.</strong> From newer construction in planned communities to established neighborhoods with mature landscaping, properties here demand a contractor who understands the standard.
          </p>
          <p class="sa-reveal sa-body" data-delay="2">
            TrueLine serves Holly Springs with the full range of our exterior services — <strong>landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation</strong> — all held to the same standard we apply across every market we serve.
          </p>
          <p class="sa-reveal sa-body" data-delay="3">
            We are <strong>locally familiar, fully licensed and insured,</strong> and committed to showing up prepared and delivering results you can see.
          </p>
        </div>

        <!-- Map -->
        <div class="sa-reveal sa-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52003.44!2d-78.8700!3d35.6513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf53e203c208f%3A0x5f9f54184597aa40!2sHolly%20Springs%2C%20NC!5e0!3m2!1sen!2sus!4v1234567890"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Holly Springs, NC — TrueLine Property Solutions Service Area"
            allowfullscreen="">
          </iframe>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ SERVICES IN HOLLY SPRINGS ══ -->
  <section class="sa-services-section">
    <div class="sa-container">

      <div class="sa-services-head sa-reveal">
        <span class="sa-label">What We Do in Holly Springs</span>
        <h2 class="sa-title">Services Available<br>in <span>Holly Springs</span></h2>
        <div class="sa-rule" style="margin:14px auto 0"></div>
      </div>

      <?php
      $services = [
        [
          'name' => 'Landscaping',
          'desc' => 'Design, installation, and maintenance for Holly Springs properties — from new builds to established yards.',
          'href' => '/services/landscaping',
          'icon' => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
        ],
        [
          'name' => 'Hardscape & Concrete',
          'desc' => 'Patios, walkways, retaining walls, and driveways built to last and complement your property.',
          'href' => '/services/hardscape-concrete',
          'icon' => '<rect x="3" y="12" width="18" height="9" rx="1"/><path d="M3 12l4-7h10l4 7"/><line x1="3" y1="16" x2="21" y2="16"/>',
        ],
        [
          'name' => 'Drainage & Erosion Control',
          'desc' => 'French drains and drainage solutions for Holly Springs properties dealing with runoff or standing water.',
          'href' => '/services/drainage-erosion-control',
          'icon' => '<path d="M12 2v6M8 6l4 4 4-4"/><path d="M3 14s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/>',
        ],
        [
          'name' => 'Tree Services',
          'desc' => 'Trimming, removal, storm cleanup, and hazard management for residential trees in Holly Springs.',
          'href' => '/services/tree-services',
          'icon' => '<path d="M12 22V12"/><path d="M5 12H2l10-10 10 10h-3"/><path d="M5 17H2l10-10 10 10h-3"/>',
        ],
        [
          'name' => 'Exterior Cleaning',
          'desc' => 'Pressure washing, roof cleaning, gutter maintenance, and surface care for every exterior surface.',
          'href' => '/services/exterior-cleaning',
          'icon' => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/>',
        ],
        [
          'name' => 'Property Preparation',
          'desc' => 'Full property prep for Holly Springs homeowners, investors, and realtors getting ready to list.',
          'href' => '/services/property-preparation',
          'icon' => '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>',
        ],
      ];
      ?>

      <div class="sa-services-grid">
        <?php foreach ( $services as $i => $s ) : ?>
          <div class="sa-service-card sa-reveal" data-delay="<?php echo ( $i % 3 ) + 1; ?>">
            <div class="sa-service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <?php echo $s['icon']; ?>
              </svg>
            </div>
            <div class="sa-service-name"><?php echo esc_html( $s['name'] ); ?></div>
            <p class="sa-service-desc"><?php echo esc_html( $s['desc'] ); ?></p>
            <a href="<?php echo esc_url( $s['href'] ); ?>" class="sa-service-link">
              Learn More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ WHY TRUELINE IN HOLLY SPRINGS ══ -->
  <section class="sa-why-section">
    <div class="sa-why-inner">

      <!-- Left -->
      <div class="sa-reveal">
        <span class="sa-label" style="color:rgba(100,200,110,0.85)">Why TrueLine</span>
        <h2 class="sa-why-title">The Contractor Holly Springs<br><span>Homeowners Can Count On</span></h2>
        <div class="sa-why-rule"></div>
        <p class="sa-why-body">
          Holly Springs homeowners expect quality — and they can tell the difference between a contractor who takes pride in their work and one who doesn't. <strong>TrueLine was built for exactly that standard.</strong>
        </p>
        <p class="sa-why-body" style="margin-top:16px">
          We show up on time, communicate clearly, use the right materials, and don't leave until the job is done right. <strong>Every visit. Every project.</strong>
        </p>
      </div>

      <!-- Right -->
      <div class="sa-why-items">
        <?php
        $reasons = [
          [
            'title' => 'Locally Familiar',
            'desc'  => 'We know Holly Springs — the neighborhoods, the soil conditions, the seasonal needs. That knowledge shows in our work.',
            'icon'  => '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
          ],
          [
            'title' => 'Licensed & Fully Insured',
            'desc'  => 'All required North Carolina registrations held and current. Your property is protected on every job.',
            'icon'  => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          ],
          [
            'title' => 'Free Estimates',
            'desc'  => 'We walk the property with you, scope the work, and give you a clear number — no pressure, no surprises.',
            'icon'  => '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>',
          ],
          [
            'title' => 'BBB Accredited',
            'desc'  => 'Recognized for honesty, transparency, and consistent customer satisfaction across every project.',
            'icon'  => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
          ],
        ];
        foreach ( $reasons as $i => $r ) : ?>
          <div class="sa-why-item sa-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="sa-why-item-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                <?php echo $r['icon']; ?>
              </svg>
            </div>
            <div>
              <div class="sa-why-item-title"><?php echo esc_html( $r['title'] ); ?></div>
              <div class="sa-why-item-desc"><?php echo esc_html( $r['desc'] ); ?></div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ NEARBY AREAS ══ -->
  <div class="sa-nearby-section sa-reveal">
    <div class="sa-nearby-inner">
      <span class="sa-nearby-label">Also Serving</span>
      <div class="sa-nearby-sep"></div>
      <nav class="sa-nearby-list" aria-label="Nearby service areas">
        <?php
        $nearby = [ 'Cary', 'Chapel Hill', 'Raleigh', 'Durham', 'Hillsborough', 'Orange County' ];
        foreach ( $nearby as $area ) : ?>
          <a href="<?php echo esc_url( home_url( '/service-areas/' . sanitize_title( $area ) ) ); ?>"
             class="sa-nearby-item">
            <?php echo esc_html( $area ); ?>
          </a>
        <?php endforeach; ?>
      </nav>
    </div>
  </div>

  <!-- ══ BOTTOM CTA ══ -->
  <section class="sa-cta-section">
    <div class="sa-cta-inner sa-reveal">
      <span class="sa-cta-label">Holly Springs, NC</span>
      <h2 class="sa-cta-title">Ready to Work With a Team<br>That <span>Holds the Line?</span></h2>
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
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.sa-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<?php get_footer(); ?>