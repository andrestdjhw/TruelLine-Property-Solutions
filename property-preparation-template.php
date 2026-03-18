<?php
/**
 * Template Name: Property Preparation Template
 *
 * Página de servicio: Property Preparation.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
$theme_uri = get_template_directory_uri();
// DEV NOTE: Replace with real photo — clean, prepared property ready for sale, strong curb appeal, fresh exterior
$img_hero = $theme_uri . '/assets/images/property-preparation-hero.jpg';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .sv-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }
  .sv-page {
    --accent:        #4aa050;
    --accent-soft:   rgba(74,160,80,0.08);
    --accent-border: rgba(74,160,80,0.18);
    --dark:          #1a1410;
    --muted:         #6b6560;
  }

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
  .sv-header-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
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
  .sv-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 660px; margin: 0 auto 36px; }
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

  .sv-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0a1510); }
  .sv-wave svg { display: block; width: 100%; }

  /* ══ INTRO ══ */
  .sv-intro-section { padding: 88px 0; background: #f5f3ef; }
  .sv-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
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

  /* ══ FOR REALTORS & INVESTORS — sección especial ══ */
  .sv-realtor-section { padding: 88px 0; background: #f5f3ef; }
  .sv-realtor-inner {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
  }
  .sv-realtor-text { display: flex; flex-direction: column; gap: 20px; }
  .sv-realtor-card {
    background: #fff; border-radius: 6px; padding: 40px 36px;
    box-shadow: 0 4px 28px rgba(26,20,16,0.1);
    border-top: 3px solid var(--accent);
    display: flex; flex-direction: column; gap: 20px;
  }
  .sv-realtor-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 20px;
    text-transform: uppercase; color: var(--dark); letter-spacing: 0.04em; line-height: 1.1;
  }
  .sv-realtor-card-title span { color: var(--accent); }
  .sv-realtor-card-body { font-size: 14px; color: var(--muted); line-height: 1.75; }
  .sv-realtor-card-body strong { color: var(--dark); font-weight: 600; }
  .sv-realtor-contact { display: flex; flex-direction: column; gap: 10px; padding-top: 8px; border-top: 1px solid rgba(74,160,80,0.15); }
  .sv-realtor-contact-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 13.5px; color: var(--muted); text-decoration: none; transition: color 0.2s;
  }
  .sv-realtor-contact-item:hover { color: var(--accent); }
  .sv-realtor-contact-icon {
    width: 32px; height: 32px; background: var(--accent-soft);
    border: 1px solid var(--accent-border); border-radius: 4px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  /* DEV NOTE: Add a line for realtor/investor inquiries below */
  .sv-realtor-note {
    font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
    color: rgba(74,160,80,0.7); font-style: italic;
  }

  /* ══ APPROACH ══ */
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
  .sv-who-inner { max-width: 800px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
  .sv-who-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 24px;
  }
  .sv-who-title span { color: var(--accent); }
  .sv-who-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin: 0 auto 32px; }
  .sv-who-body { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.8; }
  .sv-who-body strong { color: rgba(200,215,240,0.8); font-weight: 600; }

  /* ══ SERVICE AREAS ══ */
  .sv-areas-section { background: #fff; padding: 56px 32px; }
  .sv-areas-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .sv-areas-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); flex-shrink: 0; }
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

  @media (max-width: 1024px) {
    .sv-intro-grid, .sv-realtor-inner { grid-template-columns: 1fr; gap: 40px; }
    .sv-services-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .sv-header { padding: 56px 20px 64px; }
    .sv-intro-section, .sv-services-section, .sv-realtor-section, .sv-who-section, .sv-cta-section { padding: 56px 0; }
    .sv-container { padding: 0 20px; }
    .sv-areas-section { padding: 40px 20px; }
    .sv-cta-inner { padding: 40px 24px; }
    .sv-cta-actions { flex-direction: column; gap: 16px; }
    .sv-realtor-card { padding: 28px 22px; }
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
        TrueLine Property Solutions · Property Preparation
      </div>
      <h1>Property<br><em>Preparation</em></h1>
      <p class="sv-header-sub">Complete interior and exterior property preparation for homeowners, investors, and real estate professionals who need a property market-ready — on time and to a standard that moves listings.</p>
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
          <?php if ( file_exists( get_template_directory() . '/assets/images/property-preparation-hero.jpg' ) ) : ?>
            <img src="<?php echo esc_url( $img_hero ); ?>" alt="TrueLine Property Preparation — market-ready NC property" loading="lazy" />
          <?php else : ?>
            <div class="sv-intro-img-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path d="M9 22V12h6v10"/>
              </svg>
              <!-- DEV NOTE: Add prepared property / curb appeal photo at /assets/images/property-preparation-hero.jpg -->
              <span>Photo Coming Soon</span>
            </div>
          <?php endif; ?>
        </div>

        <!-- Texto -->
        <div class="sv-intro-text">
          <div class="sv-reveal">
            <span class="sv-label">First Impressions</span>
            <h2 class="sv-title">The Property Speaks<br><span>Before the Agent Does.</span></h2>
            <div class="sv-rule"></div>
          </div>
          <p class="sv-reveal sv-body" data-delay="1">
            First impressions in real estate are formed before anyone steps through the door. The condition of the exterior, the cleanliness of the property, and the quality of the outdoor presentation <strong>directly impact how buyers perceive value — and what they're willing to offer.</strong>
          </p>
          <p class="sv-reveal sv-body" data-delay="2">
            TrueLine works with homeowners, investors, and realtors across the Triangle to prepare properties for market with a <strong>comprehensive approach that covers everything from the curb to the driveway to the backyard.</strong>
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
          'name' => 'Full Exterior Preparation',
          'desc' => 'Landscaping cleanup and refresh, mowing and edging, mulching, gutter cleaning, pressure washing, and exterior surface care — everything that affects how a property presents from the street.',
          'icon' => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        ],
        [
          'name' => 'Interior Cleanup & Hauling',
          'desc' => 'Full interior cleanout, debris removal, and hauling for properties being prepared for sale, renovation, or occupancy. We remove what needs to go — efficiently and without damage.',
          'icon' => '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>',
        ],
        [
          'name' => 'Waste Removal & Hauling',
          'desc' => 'Bulk trash, yard debris, construction material, and property waste removed and disposed of properly. Available as a standalone service or as part of a full preparation package.',
          'icon' => '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>',
        ],
        [
          'name' => 'Paint Touch-Ups',
          'desc' => 'Exterior paint touch-ups and repairs to improve presentation and address visible wear before listing or showing.',
          'icon' => '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
        ],
        [
          'name' => 'Pressure Washing & Surface Cleaning',
          'desc' => 'Driveways, walkways, patios, siding, and exterior surfaces cleaned to a standard that holds up in listing photos and in-person showings.',
          'icon' => '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
        ],
        [
          'name' => 'Realtor Partnership Services',
          'desc' => 'TrueLine works directly with real estate professionals who need a reliable, accountable contractor for property preparation. Fast turnaround, clear communication, and a result that supports the listing.',
          'icon' => '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
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

  <!-- ══ FOR REALTORS & INVESTORS ══ -->
  <section class="sv-realtor-section">
    <div class="sv-container">
      <div class="sv-realtor-inner">

        <!-- Texto -->
        <div class="sv-realtor-text sv-reveal">
          <span class="sv-label">Realtors &amp; Investors</span>
          <h2 class="sv-title">For Realtors &amp;<br><span>Investors</span></h2>
          <div class="sv-rule"></div>
          <p class="sv-body" style="margin-top:20px">
            If you manage multiple listings or investment properties, you need a contractor who <strong>operates at your pace</strong> — communicates clearly, delivers on time, and doesn't require hand-holding.
          </p>
          <p class="sv-body">
            TrueLine has built working relationships with realtors and property investors across <strong>Holly Springs, Cary, Raleigh, and Chapel Hill.</strong> Contact us to discuss ongoing project arrangements.
          </p>
        </div>

        <!-- Card de contacto directo -->
        <div class="sv-realtor-card sv-reveal" data-delay="1">
          <div class="sv-realtor-card-title">Ready to Work Together<br><span>on Multiple Properties?</span></div>
          <p class="sv-realtor-card-body">
            We offer <strong>priority scheduling and clear communication</strong> for real estate professionals who need a dependable preparation team for every listing cycle.
          </p>
          <div class="sv-realtor-contact">
            <a href="tel:+19199518341" class="sv-realtor-contact-item">
              <div class="sv-realtor-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              (919) 951-8341
            </a>
            <a href="mailto:navaslandscapenc1@gmail.com" class="sv-realtor-contact-item">
              <div class="sv-realtor-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              navaslandscapenc1@gmail.com
            </a>
            <!-- DEV NOTE: Add a line for realtor/investor inquiries — ongoing property management partnerships -->
            <p class="sv-realtor-note">For ongoing property management partnerships, contact us directly.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ APPROACH ══ -->
  <section class="sv-who-section">
    <div class="sv-container">
      <div class="sv-who-inner sv-reveal">
        <span class="sv-label" style="color:rgba(100,200,110,0.85)">Our Standard</span>
        <h2 class="sv-who-title">On Time. To Standard.<br><span>Every Property.</span></h2>
        <div class="sv-who-rule"></div>
        <p class="sv-who-body">
          Property preparation isn't just cleanup — it's the work that <strong>sets the tone for every showing, every offer, and every negotiation.</strong>
        </p>
        <p class="sv-who-body" style="margin-top:18px">
          We understand the timeline pressure of a listing cycle. <strong>We show up prepared, we work efficiently, and we deliver a result you can photograph and show with confidence.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- ══ SERVICE AREAS ══ -->
  <div class="sv-areas-section sv-reveal">
    <div class="sv-areas-inner">
      <span class="sv-areas-label">Service Areas</span>
      <div class="sv-areas-sep"></div>
      <nav class="sv-areas-list" aria-label="Property preparation service areas">
        <?php
        $areas = [ 'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham', 'Hillsborough', 'Orange County' ];
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
      <span class="sv-cta-label">Let's Get It Market-Ready</span>
      <h2 class="sv-cta-title">Getting a Property<br><span>Ready to List?</span></h2>
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