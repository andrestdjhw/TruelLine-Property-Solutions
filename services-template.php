<?php
/**
 * Template Name: Services Template
 *
 * Página de servicios — grid de 6 servicios + ContactForm React al final.
 * Sin componente React en el grid. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .sv-pg { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }
  .sv-pg {
    --accent:        #2A5A49;
    --accent-dark:   #133429;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.5);
  }

  /* ── SCROLL REVEAL ── */
  .sv-pg-reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
  .sv-pg-reveal.sv-pg-in { opacity: 1; transform: none; }
  .sv-pg-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .sv-pg-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .sv-pg-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .sv-pg-reveal[data-delay="4"] { transition-delay: 0.32s; }
  .sv-pg-reveal[data-delay="5"] { transition-delay: 0.40s; }
  .sv-pg-reveal[data-delay="6"] { transition-delay: 0.48s; }

  /* ══ PAGE HEADER ══ */
  .sv-pg-header {
    background: linear-gradient(160deg, #091914 0%, #0f2015 60%, #133429 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .sv-pg-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(42,90,73,0.1) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sv-pg-header-wm {
    position: absolute; inset: 0; display: flex;
    align-items: center; justify-content: space-between;
    padding: 0 6%; pointer-events: none; z-index: 0;
  }
  .sv-pg-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .sv-pg-header-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
  .sv-pg-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
    color: rgba(42,160,90,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .sv-pg-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: svpgPulse 2s infinite; }
  @keyframes svpgPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .sv-pg-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(38px, 6.5vw, 72px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .sv-pg-header h1 em { color: #ECEBC3; font-style: normal; }
  .sv-pg-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 580px; margin: 0 auto; }

  /* Wave */
  .sv-pg-wave { line-height: 0; background: linear-gradient(160deg, #091914, #133429); }
  .sv-pg-wave svg { display: block; width: 100%; }

  /* ══ GRID SECTION ══ */
  .sv-pg-grid-section { padding: 88px 0; background: #FCF7EC; }
  .sv-pg-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
  .sv-pg-section-head { text-align: center; margin-bottom: 56px; }
  .sv-pg-label { display: inline-block; font-size: 10.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .sv-pg-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 46px); letter-spacing: 0.02em; text-transform: uppercase; color: var(--dark); line-height: 1; }
  .sv-pg-title span { color: var(--accent); }
  .sv-pg-rule { width: 44px; height: 3px; background: var(--accent); border-radius: 2px; margin: 16px auto 0; }

  /* Cards grid */
  .sv-pg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .sv-pg-card {
    background: #fff; border-radius: 8px; overflow: hidden;
    box-shadow: 0 2px 20px rgba(9,25,20,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex; flex-direction: column;
  }
  .sv-pg-card:hover { transform: translateY(-6px); box-shadow: 0 16px 44px rgba(9,25,20,0.13); }

  /* Card image top */
  .sv-pg-card-img {
    height: 210px; overflow: hidden; position: relative; flex-shrink: 0;
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
  }
  .sv-pg-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
  .sv-pg-card:hover .sv-pg-card-img img { transform: scale(1.06); }
  .sv-pg-card-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(9,25,20,0.1) 0%, rgba(9,25,20,0.45) 100%);
  }
  /* Fallback icon when no image */
  .sv-pg-card-icon-wrap {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #091914, #133429);
    position: relative;
  }
  .sv-pg-card-icon-wrap::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(42,90,73,0.18), transparent 60%);
  }
  .sv-pg-card-icon-wrap svg { position: relative; z-index: 1; }

  /* Card body */
  .sv-pg-card-body { padding: 26px 24px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
  .sv-pg-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: 21px; letter-spacing: 0.04em; text-transform: uppercase;
    color: var(--dark); line-height: 1;
  }
  .sv-pg-card-desc { color: var(--muted); font-size: 13.5px; line-height: 1.65; flex: 1; }
  .sv-pg-card-link {
    display: inline-flex; align-items: center; gap: 6px; margin-top: 4px;
    color: var(--accent); font-size: 12.5px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
    transition: gap 0.2s, color 0.2s;
  }
  .sv-pg-card-link:hover { gap: 10px; color: var(--accent-dark); }

  /* ══ CONTACT FORM SECTION ══ */
  .sv-pg-contact-section {
    background: linear-gradient(160deg, #091914 0%, #133429 100%);
    padding: 88px 32px; position: relative; overflow: hidden;
  }
  .sv-pg-contact-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 60% at 50% 100%, rgba(42,90,73,0.12) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .sv-pg-contact-inner {
    max-width: 1000px; margin: 0 auto; position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center;
  }
  .sv-pg-contact-text {}
  .sv-pg-contact-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(42,160,90,0.85); display: block; margin-bottom: 12px; }
  .sv-pg-contact-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(28px, 4vw, 48px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.0; margin-bottom: 18px;
  }
  .sv-pg-contact-title span { color: #ECEBC3; }
  .sv-pg-contact-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin-bottom: 24px; }
  .sv-pg-contact-body { color: rgba(200,215,240,0.5); font-size: 15px; line-height: 1.8; margin-bottom: 28px; }
  .sv-pg-contact-phone {
    display: inline-flex; align-items: center; gap: 10px;
    color: rgba(200,215,240,0.65); font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .sv-pg-contact-phone:hover { color: #ECEBC3; }

  /* Form overrides for dark bg */
  .sv-pg-form-wrap .cf-wrap {
    background: rgba(13,22,16,0.85) !important;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(42,90,73,0.25) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4) !important;
  }
  .sv-pg-form-wrap .cf-title { color: #e8e0d5 !important; }
  .sv-pg-form-wrap .cf-sub { color: rgba(200,215,240,0.45) !important; }
  .sv-pg-form-wrap .cf-label { color: rgba(190,210,240,0.55) !important; }
  .sv-pg-form-wrap .cf-input,
  .sv-pg-form-wrap .cf-select,
  .sv-pg-form-wrap .cf-textarea {
    background: rgba(255,255,255,0.05) !important;
    border-color: rgba(42,90,73,0.25) !important;
    color: #e8e0d5 !important;
  }
  .sv-pg-form-wrap .cf-input::placeholder,
  .sv-pg-form-wrap .cf-textarea::placeholder { color: rgba(200,215,240,0.25) !important; }
  .sv-pg-form-wrap .cf-input:focus,
  .sv-pg-form-wrap .cf-select:focus,
  .sv-pg-form-wrap .cf-textarea:focus {
    background: rgba(255,255,255,0.08) !important;
    border-color: #2A5A49 !important;
  }
  .sv-pg-form-wrap .cf-success h3 { color: #e8e0d5 !important; }
  .sv-pg-form-wrap .cf-success p { color: rgba(200,215,240,0.5) !important; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .sv-pg-grid { grid-template-columns: repeat(2, 1fr); }
    .sv-pg-contact-inner { grid-template-columns: 1fr; gap: 44px; }
  }
  @media (max-width: 640px) {
    .sv-pg-header { padding: 56px 20px 64px; }
    .sv-pg-grid-section, .sv-pg-contact-section { padding: 56px 0; }
    .sv-pg-container { padding: 0 20px; }
    .sv-pg-grid { grid-template-columns: 1fr; gap: 20px; }
    .sv-pg-contact-section { padding: 56px 20px; }
  }
</style>

<div class="sv-pg">

  <!-- ══ PAGE HEADER ══ -->
  <div class="sv-pg-header">
    <div class="sv-pg-header-wm" aria-hidden="true">
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
    <div class="sv-pg-header-inner">
      <div class="sv-pg-badge">
        <div class="sv-pg-dot"></div>
        TrueLine Property Solutions
      </div>
      <h1>Our <em>Services</em></h1>
      <p class="sv-pg-header-sub">Complete exterior and property solutions — landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation. One team, one standard.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="sv-pg-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#FCF7EC"/>
    </svg>
  </div>

  <!-- ══ SERVICES GRID ══ -->
  <section class="sv-pg-grid-section">
    <div class="sv-pg-container">

      <div class="sv-pg-section-head sv-pg-reveal">
        <span class="sv-pg-label">What We Do</span>
        <h2 class="sv-pg-title">Everything Your Property <span>Needs</span></h2>
        <div class="sv-pg-rule"></div>
      </div>

      <?php
      $services = [
        [
          'title' => 'Landscaping',
          'desc'  => 'Design, installation, and seasonal maintenance to keep your property looking its best year-round.',
          'href'  => '/services/landscaping',
          'img'   => '/wp-content/uploads/2026/04/TruelineLandscaping-scaled.jpg',
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
          'img'   => '/wp-content/uploads/2026/04/DrainageErotionTrueLine-scaled.jpg',
          'icon'  => '<path d="M12 2v6M8 6l4 4 4-4"/><path d="M3 14s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/>',
        ],
        [
          'title' => 'Tree Services',
          'desc'  => 'Expert tree trimming, removal, storm cleanup, and risk mitigation for overgrown or hazardous trees.',
          'href'  => '/services/tree-services',
          'img'   => '/wp-content/uploads/2026/04/TreeServicesTrueLine-scaled.jpg',
          'icon'  => '<path d="M12 22V12"/><path d="M5 12H2l10-10 10 10h-3"/><path d="M5 17H2l10-10 10 10h-3"/>',
        ],
        [
          'title' => 'Exterior Cleaning',
          'desc'  => 'Roof cleaning, gutter care, pressure washing, and deck maintenance to protect and refresh every surface.',
          'href'  => '/services/exterior-cleaning',
          'img'   => '/wp-content/uploads/2026/04/ExteriorCleaningTrueLine-scaled.jpg',
          'icon'  => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/>',
        ],
        [
          'title' => 'Property Preparation',
          'desc'  => 'Full interior and exterior preparation for homeowners, investors, and realtors getting a property market-ready.',
          'href'  => '/services/property-preparation',
          'img'   => '/wp-content/uploads/2026/04/PropertyPreparationTrueLine-scaled.jpg',
          'icon'  => '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>',
        ],
      ];
      ?>

      <div class="sv-pg-grid">
        <?php foreach ( $services as $i => $s ) : ?>
          <div class="sv-pg-card sv-pg-reveal" data-delay="<?php echo ( $i % 3 ) + 1; ?>">

            <!-- Image / icon top -->
            <div class="sv-pg-card-img">
              <?php if ( ! empty( $s['img'] ) ) : ?>
                <img src="<?php echo esc_url( $s['img'] ); ?>"
                     alt="<?php echo esc_attr( $s['title'] ); ?>"
                     loading="lazy" />
                <div class="sv-pg-card-img-overlay"></div>
              <?php else : ?>
                <div class="sv-pg-card-icon-wrap">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                       stroke="rgba(42,160,90,0.8)" stroke-width="1.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <?php echo $s['icon']; ?>
                  </svg>
                </div>
              <?php endif; ?>
            </div>

            <!-- Body -->
            <div class="sv-pg-card-body">
              <div class="sv-pg-card-title"><?php echo esc_html( $s['title'] ); ?></div>
              <p class="sv-pg-card-desc"><?php echo esc_html( $s['desc'] ); ?></p>
              <a href="<?php echo esc_url( $s['href'] ); ?>" class="sv-pg-card-link">
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

  <!-- ══ CONTACT FORM ══ -->
  <section class="sv-pg-contact-section">
    <div class="sv-pg-contact-inner sv-pg-reveal">

      <!-- Left — copy -->
      <div class="sv-pg-contact-text">
        <span class="sv-pg-contact-label">Free Estimates · No Obligation</span>
        <h2 class="sv-pg-contact-title">Ready to Get <span>Started?</span></h2>
        <div class="sv-pg-contact-rule"></div>
        <p class="sv-pg-contact-body">Tell us about your property and what you need. We'll walk the site with you, scope the work honestly, and get back to you within 1 business day.</p>
        <a href="tel:+19199518341" class="sv-pg-contact-phone">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (919) 951-8341
        </a>
      </div>

      <!-- Right — React ContactForm -->
      <div class="sv-pg-form-wrap" id="cre-contact-form-services"></div>

    </div>
  </section>

</div><!-- .sv-pg -->

<script>
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('sv-pg-in'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.sv-pg-reveal').forEach(function (el) { observer.observe(el); });
})();
</script>

<?php get_footer(); ?>