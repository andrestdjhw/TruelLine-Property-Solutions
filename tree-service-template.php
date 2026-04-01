<?php
/**
 * Template Name: Tree Services Template
 *
 * Página de servicio: Tree Services.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
$theme_uri = get_template_directory_uri();
// DEV NOTE: Replace with real photo — team performing professional tree work, safe, clean, well-equipped
$img_hero = $theme_uri . '/assets/images/tree-services-hero.jpg';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .sv-page { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }
  .sv-page {
    --accent:        #2A5A49;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.5);
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
    background: linear-gradient(160deg, #091914 0%, #0f2015 60%, #133429 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .sv-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(42,90,73,0.1) 0%, transparent 65%),
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
    background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
    color: rgba(42,160,90,0.9); font-size: 10.5px; font-weight: 700;
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
    padding: 14px 32px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(42,90,73,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sv-header-cta::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sv-header-cta:hover::before { left: 160%; }
  .sv-header-cta:hover { background: #133429; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(42,90,73,0.55); }

  .sv-wave { line-height: 0; background: linear-gradient(160deg, #091914, #133429); }
  .sv-wave svg { display: block; width: 100%; }

  /* ══ INTRO ══ */
  .sv-intro-section { padding: 88px 0; background: #FCF7EC; }
  .sv-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
  .sv-intro-img-wrap {
    position: relative; border-radius: 6px; overflow: hidden; aspect-ratio: 4/3;
    box-shadow: 0 20px 60px rgba(9,25,20,0.2);
  }
  .sv-intro-img-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(42,90,73,0.15) 0%, transparent 60%);
    pointer-events: none;
  }
  .sv-intro-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .sv-intro-img-placeholder {
    width: 100%; height: 100%; background: linear-gradient(135deg, #091914, #133429);
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
    background: #fff; border-radius: 6px; padding: 28px 26px;
    border-left: 3px solid var(--accent);
    box-shadow: 0 2px 14px rgba(9,25,20,0.06);
    transition: transform 0.25s, box-shadow 0.25s, background 0.2s;
    display: flex; gap: 18px; align-items: flex-start;
  }
  .sv-service-item:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(9,25,20,0.11); background: #FCF7EC; }
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

  /* ══ APPROACH ══ */
  .sv-who-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #091914 0%, #133429 100%);
    position: relative; overflow: hidden;
  }
  .sv-who-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 80% 50%, rgba(42,90,73,0.08) 0%, transparent 65%),
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
  .sv-areas-section { background: #ECEBC3; padding: 56px 32px; }
  .sv-areas-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .sv-areas-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); flex-shrink: 0; }
  .sv-areas-sep { width: 1px; height: 16px; background: rgba(42,90,73,0.2); flex-shrink: 0; }
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
  .sv-cta-section { background: #FCF7EC; padding: 88px 32px; }
  .sv-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
    border: 1px solid rgba(42,90,73,0.2); border-radius: 8px;
    padding: 60px 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .sv-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(42,90,73,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .sv-cta-inner > * { position: relative; z-index: 1; }
  .sv-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(42,160,90,0.8); margin-bottom: 16px; display: block; }
  .sv-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 32px;
  }
  .sv-cta-title span { color: var(--accent); }
  .sv-cta-actions { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
  .sv-cta-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 14px 32px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(42,90,73,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .sv-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .sv-cta-btn:hover::before { left: 160%; }
  .sv-cta-btn:hover { background: #133429; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(42,90,73,0.55); }
  .sv-cta-phone {
    display: flex; align-items: center; gap: 8px;
    color: rgba(200,215,240,0.6); font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .sv-cta-phone:hover { color: var(--accent); }

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
        TrueLine Property Solutions · Tree Services
      </div>
      <h1>Tree<br><em>Services</em></h1>
      <p class="sv-header-sub">Professional tree trimming, removal, risk management, and storm cleanup — handled safely, cleanly, and with respect for your property.</p>
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
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#FCF7EC"/>
    </svg>
  </div>

  <!-- ══ INTRO ══ -->
  <section class="sv-intro-section">
    <div class="sv-container">
      <div class="sv-intro-grid">

        <!-- Imagen -->
        <div class="sv-reveal sv-intro-img-wrap">
          <?php
          // DEV NOTE: Actualizar $img_hero con la URL final del recurso en WordPress Media
          $img_hero = '/wp-content/uploads/2026/04/treeservice.jpg';
          ?>
          <img src="<?php echo esc_url( $img_hero ); ?>" alt="TrueLine Landscaping — NC residential landscape" loading="lazy" />
        </div>

        <!-- Texto -->
        <div class="sv-intro-text">
          <div class="sv-reveal">
            <span class="sv-label">Professional Tree Care</span>
            <h2 class="sv-title">Expert Care for the<br><span>Trees on Your Property</span></h2>
            <div class="sv-rule"></div>
          </div>
          <p class="sv-reveal sv-body" data-delay="1">
            Trees are one of the most valuable features of any property — but they require proper care and management to remain <strong>safe, healthy, and visually appropriate.</strong>
          </p>
          <p class="sv-reveal sv-body" data-delay="2">
            Overgrown branches, diseased trees, storm damage, and hazardous limbs near power lines are not just aesthetic problems. They are <strong>real risks to your home, your family, and your neighbors.</strong>
          </p>
          <p class="sv-reveal sv-body" data-delay="3">
            TrueLine handles tree work with the <strong>knowledge, equipment, and care the job demands.</strong>
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
          'name' => 'Tree Trimming & Pruning',
          'desc' => 'Proper pruning techniques that improve tree structure, promote healthy growth, and maintain a clean, proportionate appearance.',
          'icon' => '<path d="M12 22V12"/><path d="M5 12H2l10-10 10 10h-3"/><path d="M5 17H2l10-10 10 10h-3"/>',
        ],
        [
          'name' => 'Tree Removal',
          'desc' => 'Safe, controlled removal of dead, diseased, or unwanted trees — including full debris cleanup and stump management where applicable.',
          'icon' => '<path d="M12 22V12"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M7 7l5-5 5 5"/>',
        ],
        [
          'name' => 'Hazard Tree Management',
          'desc' => 'Assessment and removal of trees or branches that pose a risk to your home, vehicles, utility lines, or surrounding structures.',
          'icon' => '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
        ],
        [
          'name' => 'Storm Damage Cleanup',
          'desc' => 'Rapid response to storm damage — clearing fallen trees, broken branches, and debris from your property safely and efficiently.',
          'icon' => '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
        ],
        [
          'name' => 'Debris Hauling & Removal',
          'desc' => 'Complete cleanup and hauling of all tree-related debris, branches, and organic material following any tree service.',
          'icon' => '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>',
        ],
      ];
      ?>

      <div class="sv-services-grid">
        <?php foreach ( $offerings as $i => $item ) : ?>
          <div class="sv-service-item sv-reveal" data-delay="<?php echo ( $i % 4 ) + 1; ?>">
            <div class="sv-service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

  <!-- ══ APPROACH ══ -->
  <section class="sv-who-section">
    <div class="sv-container">
      <div class="sv-who-inner sv-reveal">
        <span class="sv-label" style="color:rgba(42,160,90,0.85)">Our Standard</span>
        <h2 class="sv-who-title">Safe. Thorough. <span>Clean.</span></h2>
        <div class="sv-who-rule"></div>
        <p class="sv-who-body">
          Tree work is physically demanding and technically specific. We approach it with the <strong>right equipment, proper safety protocols, and a team trained to handle the unexpected.</strong>
        </p>
        <p class="sv-who-body" style="margin-top:18px">
          When we leave your property, <strong>there's no trace of the work — except the result.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- ══ SERVICE AREAS ══ -->
  <div class="sv-areas-section sv-reveal">
    <div class="sv-areas-inner">
      <span class="sv-areas-label">Service Areas</span>
      <div class="sv-areas-sep"></div>
      <nav class="sv-areas-list" aria-label="Tree services areas">
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
      <span class="sv-cta-label">We'll Handle It Safely</span>
      <h2 class="sv-cta-title">Need a Tree Assessment<br><span>or Removal?</span></h2>
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