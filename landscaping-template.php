<?php
/**
 * Template Name: Landscaping Template
 *
 * Página de servicio: Landscaping.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
// ── HELPERS ────────────────────────────────────────────────────────────────
$theme_uri = get_template_directory_uri();

// DEV NOTE: Replace with real NC residential landscape photo — manicured lawn, healthy plants, clean edges
$img_hero = $theme_uri . '/assets/images/landscaping-hero.jpg';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .sv-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }
  .sv-page {
    --accent:        #4aa050;
    --accent-soft:   rgba(74,160,80,0.08);
    --accent-border: rgba(74,160,80,0.18);
    --dark:          #1a1410;
    --muted:         #6b6560;
  }

  /* ── SCROLL REVEAL ── */
  .sv-reveal {
    opacity: 0; transform: translateY(26px);
    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .sv-reveal.sv-in { opacity: 1; transform: none; }
  .sv-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .sv-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .sv-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .sv-reveal[data-delay="4"] { transition-delay: 0.32s; }
  .sv-reveal[data-delay="5"] { transition-delay: 0.40s; }
  .sv-reveal[data-delay="6"] { transition-delay: 0.48s; }
  .sv-reveal[data-delay="7"] { transition-delay: 0.56s; }
  .sv-reveal[data-delay="8"] { transition-delay: 0.64s; }

  /* ── SHARED ── */
  .sv-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .sv-label {
    display: inline-block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
  }
  .sv-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 48px); letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--dark); line-height: 1;
  }
  .sv-title span { color: var(--accent); }
  .sv-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 14px; }
  .sv-body { color: var(--muted); font-size: 15px; line-height: 1.8; }
  .sv-body strong { color: var(--dark); font-weight: 600; }

  /* ══ PAGE HEADER ══ */
  .sv-header {
    background: linear-gradient(160deg, #080c18 0%, #0d1a10 60%, #0a1510 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .sv-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(74,160,80,0.1) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sv-header-wm {
    position: absolute; inset: 0; display: flex;
    align-items: center; justify-content: space-between;
    padding: 0 6%; pointer-events: none; z-index: 0;
  }
  .sv-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .sv-header-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }
  .sv-hero-label {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(74,160,80,0.1); border: 1px solid rgba(74,160,80,0.25);
    color: rgba(100,200,110,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .sv-hero-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: svPulse 2s infinite; }
  @keyframes svPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .sv-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(38px, 6.5vw, 76px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .sv-header h1 em { color: var(--accent); font-style: normal; }
  .sv-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 620px; margin: 0 auto 36px; }
  .sv-header-cta {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(74,160,80,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sv-header-cta::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sv-header-cta:hover::before { left: 160%; }
  .sv-header-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,160,80,0.55); }

  /* Wave */
  .sv-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0a1510); }
  .sv-wave svg { display: block; width: 100%; }

  /* ══ INTRO SECTION ══ */
  .sv-intro-section { padding: 88px 0; background: #f5f3ef; }
  .sv-intro-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  }
  .sv-intro-img-wrap {
    position: relative; border-radius: 6px; overflow: hidden; aspect-ratio: 4/3;
    box-shadow: 0 20px 60px rgba(26,20,16,0.2);
  }
  .sv-intro-img-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(74,160,80,0.15) 0%, transparent 60%);
    pointer-events: none;
  }
  .sv-intro-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .sv-intro-img-placeholder {
    width: 100%; height: 100%; background: linear-gradient(135deg, #0d1a10, #0a1510);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  }
  .sv-intro-img-placeholder svg { opacity: 0.15; }
  .sv-intro-img-placeholder span { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.2); }
  .sv-intro-text { display: flex; flex-direction: column; gap: 20px; }

  /* ══ WHAT WE OFFER ══ */
  .sv-services-section { padding: 88px 0; background: #fff; }
  .sv-services-head { text-align: center; margin-bottom: 52px; }
  .sv-services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .sv-service-item {
    background: #faf8f5; border-radius: 6px; padding: 28px 26px;
    border-left: 3px solid var(--accent);
    box-shadow: 0 2px 14px rgba(26,20,16,0.06);
    transition: transform 0.25s, box-shadow 0.25s, background 0.2s;
    display: flex; gap: 18px; align-items: flex-start;
  }
  .sv-service-item:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(26,20,16,0.11); background: #fff; }
  .sv-service-icon {
    width: 42px; height: 42px; background: var(--accent-soft);
    border: 1px solid var(--accent-border); border-radius: 6px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .sv-service-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 18px;
    text-transform: uppercase; color: var(--dark); margin-bottom: 8px; letter-spacing: 0.04em;
  }
  .sv-service-desc { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

  /* ══ WHO WE SERVE ══ */
  .sv-who-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #0d1a10 0%, #0f2015 100%);
    position: relative; overflow: hidden;
  }
  .sv-who-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 80% 50%, rgba(74,160,80,0.08) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sv-who-inner {
    max-width: 800px; margin: 0 auto; text-align: center; position: relative; z-index: 1;
  }
  .sv-who-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 24px;
  }
  .sv-who-title span { color: var(--accent); }
  .sv-who-body { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.8; }
  .sv-who-body strong { color: rgba(200,215,240,0.8); font-weight: 600; }
  .sv-who-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin: 0 auto 32px; }

  /* ══ SERVICE AREAS ══ */
  .sv-areas-section { background: #fff; padding: 56px 32px; }
  .sv-areas-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .sv-areas-label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent); flex-shrink: 0;
  }
  .sv-areas-sep { width: 1px; height: 16px; background: rgba(74,160,80,0.2); flex-shrink: 0; }
  .sv-areas-list { display: flex; align-items: center; flex-wrap: wrap; }
  .sv-area-item {
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted);
    text-decoration: none; padding: 4px 14px;
    border-right: 1px solid rgba(26,20,16,0.1); transition: color 0.2s;
  }
  .sv-area-item:last-child { border-right: none; }
  .sv-area-item:hover { color: var(--accent); }

  /* ══ BOTTOM CTA ══ */
  .sv-cta-section { background: #f5f3ef; padding: 88px 32px; }
  .sv-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #0d1a10 0%, #142018 100%);
    border: 1px solid rgba(74,160,80,0.2); border-radius: 8px;
    padding: 60px 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .sv-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74,160,80,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .sv-cta-inner > * { position: relative; z-index: 1; }
  .sv-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(100,200,110,0.8); margin-bottom: 16px; display: block; }
  .sv-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 32px;
  }
  .sv-cta-title span { color: var(--accent); }
  .sv-cta-actions { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
  .sv-cta-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(74,160,80,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sv-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sv-cta-btn:hover::before { left: 160%; }
  .sv-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,160,80,0.55); }
  .sv-cta-phone {
    display: flex; align-items: center; gap: 8px;
    color: rgba(200,215,240,0.6); font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .sv-cta-phone:hover { color: var(--accent); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .sv-intro-grid { grid-template-columns: 1fr; gap: 40px; }
    .sv-services-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .sv-header { padding: 56px 20px 64px; }
    .sv-intro-section, .sv-services-section, .sv-who-section, .sv-cta-section { padding: 56px 0; }
    .sv-container { padding: 0 20px; }
    .sv-areas-section { padding: 40px 20px; }
    .sv-cta-inner { padding: 40px 24px; }
    .sv-cta-actions { flex-direction: column; gap: 16px; }
  }
</style>

<div class="sv-page">

  <!-- ══ PAGE HEADER ══ -->
  <div class="sv-header">
    <div class="sv-header-wm" aria-hidden="true">
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
    <div class="sv-header-inner">
      <div class="sv-hero-label">
        <div class="sv-hero-dot"></div>
        TrueLine Property Solutions · Landscaping
      </div>
      <h1>Landscaping<br><em>Services</em></h1>
      <p class="sv-header-sub">Thoughtful design, expert installation, and consistent maintenance for properties that reflect the value of what's inside them.</p>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="sv-header-cta">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Request a Free Estimate
      </a>
    </div>
  </div>

  <!-- Wave -->
  <div class="sv-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#f5f3ef"/>
    </svg>
  </div>

  <!-- ══ INTRO ══ -->
  <section class="sv-intro-section">
    <div class="sv-container">
      <div class="sv-intro-grid">

        <!-- Imagen -->
        <div class="sv-reveal sv-intro-img-wrap">
          <?php if ( file_exists( get_template_directory() . '/assets/images/landscaping-hero.jpg' ) ) : ?>
            <img src="<?php echo esc_url( $img_hero ); ?>" alt="TrueLine Landscaping — NC residential landscape" loading="lazy" />
          <?php else : ?>
            <div class="sv-intro-img-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1">
                <path d="M12 2a10 10 0 000 20" stroke-linecap="round"/>
                <path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/>
                <line x1="12" y1="12" x2="12" y2="22"/>
              </svg>
              <!-- DEV NOTE: Add NC residential landscape photo at /assets/images/landscaping-hero.jpg -->
              <span>Photo Coming Soon</span>
            </div>
          <?php endif; ?>
        </div>

        <!-- Texto -->
        <div class="sv-intro-text">
          <div class="sv-reveal">
            <span class="sv-label">The Foundation</span>
            <h2 class="sv-title">A Living Property Starts with the<br><span>Right Foundation</span></h2>
            <div class="sv-rule"></div>
          </div>
          <p class="sv-reveal sv-body" data-delay="1">
            Landscaping isn't just maintenance — it's the first thing people see, and the clearest signal of how a property is cared for.
          </p>
          <p class="sv-reveal sv-body" data-delay="2">
            At TrueLine, we design and install landscapes that are <strong>built to look exceptional from day one</strong> and remain healthy with minimal effort over time. We use quality materials, proven planting techniques, and a practical understanding of <strong>North Carolina's climate</strong> to deliver results that last.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ WHAT WE OFFER ══ -->
  <section class="sv-services-section">
    <div class="sv-container">

      <div class="sv-services-head sv-reveal">
        <span class="sv-label">Services Included</span>
        <h2 class="sv-title">What We <span>Offer</span></h2>
        <div class="sv-rule" style="margin:14px auto 0"></div>
      </div>

      <?php
      $offerings = [
        [
          'name' => 'Landscape Design & Installation',
          'desc' => 'Custom landscape plans tailored to your property\'s layout, soil, sun exposure, and aesthetic. New plantings, layout design, and full installation included.',
          'icon' => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        ],
        [
          'name' => 'Lawn Care & Maintenance',
          'desc' => 'Routine mowing, edging, blowing, and seasonal upkeep to keep your lawn consistently clean and healthy.',
          'icon' => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
        ],
        [
          'name' => 'Planting — New & Replacement',
          'desc' => 'Fresh plantings, replacement of dead or damaged plants, and seasonal rotations. We source from quality nurseries and recommend what will thrive in your zone.',
          'icon' => '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
        ],
        [
          'name' => 'Mulch, Sod & Gravel Installation',
          'desc' => 'Professional installation of mulch beds, sod (including pallet sod), and decorative gravel — clean, even, and done right.',
          'icon' => '<rect x="3" y="12" width="18" height="9" rx="1"/><path d="M3 12l4-7h10l4 7"/><line x1="3" y1="16" x2="21" y2="16"/>',
        ],
        [
          'name' => 'Seasonal Plant Care',
          'desc' => 'Management and care of annual plants through their seasonal cycle — including installation, maintenance, and end-of-season removal.',
          'icon' => '<path d="M12 2v6M8 6l4 4 4-4"/><circle cx="12" cy="17" r="5"/>',
        ],
        [
          'name' => 'Lawn Fertilization & Weed Control',
          'desc' => 'Certified application of fertilizers and weed control treatments to keep your lawn dense, green, and healthy throughout the year.',
          'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        ],
        [
          'name' => 'Storm Cleanup & Debris Removal',
          'desc' => 'Post-storm cleanup including debris removal, branch clearing, and property restoration after weather events.',
          'icon' => '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
        ],
        [
          'name' => 'Landscape Renovation',
          'desc' => 'Overgrown, outdated, or neglected landscapes transformed with a clear renovation plan — from cleanup to full redesign.',
          'icon' => '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
        ],
      ];
      ?>

      <div class="sv-services-grid">
        <?php foreach ( $offerings as $i => $item ) : ?>
          <div class="sv-service-item sv-reveal" data-delay="<?php echo ( $i % 4 ) + 1; ?>">
            <div class="sv-service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <?php echo $item['icon']; ?>
              </svg>
            </div>
            <div>
              <div class="sv-service-name"><?php echo esc_html( $item['name'] ); ?></div>
              <p class="sv-service-desc"><?php echo esc_html( $item['desc'] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ WHO WE SERVE ══ -->
  <section class="sv-who-section">
    <div class="sv-container">
      <div class="sv-who-inner sv-reveal">
        <span class="sv-label" style="color:rgba(100,200,110,0.85)">Who We Serve</span>
        <h2 class="sv-who-title">Built for Homeowners Who<br><span>Value Their Property</span></h2>
        <div class="sv-who-rule"></div>
        <p class="sv-who-body">
          Our landscape clients are homeowners in Holly Springs, Cary, Chapel Hill, and surrounding communities who <strong>take pride in their exterior</strong> and want a team they can trust to maintain it over the long term.
        </p>
        <p class="sv-who-body" style="margin-top:18px">
          We don't just cut and go. <strong>We pay attention, we communicate, and we treat your property with the same care we'd give our own.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- ══ SERVICE AREAS ══ -->
  <div class="sv-areas-section sv-reveal">
    <div class="sv-areas-inner">
      <span class="sv-areas-label">Service Areas</span>
      <div class="sv-areas-sep"></div>
      <nav class="sv-areas-list" aria-label="Landscaping service areas">
        <?php
        $areas = [
          'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham',
          'Hillsborough', 'Orange County', 'Greensboro', 'Winston-Salem',
        ];
        foreach ( $areas as $area ) : ?>
          <a href="<?php echo esc_url( home_url( '/service-areas/' . sanitize_title( $area ) ) ); ?>"
             class="sv-area-item">
            <?php echo esc_html( $area ); ?>
          </a>
        <?php endforeach; ?>
      </nav>
    </div>
  </div>

  <!-- ══ BOTTOM CTA ══ -->
  <section class="sv-cta-section">
    <div class="sv-cta-inner sv-reveal">
      <span class="sv-cta-label">Ready to Get Started?</span>
      <h2 class="sv-cta-title">Let's Talk About<br><span>Your Property.</span></h2>
      <div class="sv-cta-actions">
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="sv-cta-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          Request a Free Estimate
        </a>
        <a href="tel:+19199518341" class="sv-cta-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (919) 951-8341
        </a>
      </div>
    </div>
  </section>

</div><!-- .sv-page -->

<script>
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('sv-in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.sv-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>

<?php get_footer(); ?>