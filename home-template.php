<?php
/**
 * Template Name: Home Template
 * Template Post Type: page
 *
 * Estructura:
 *   header.php  →  monta #cre-navbar    (sticky, todas las páginas)
 *   #cre-hero   →  HeroCRE.jsx          (solo el hero + wave)
 *   <sections>  →  PHP/HTML estático    (services, why, CTA, map)
 *   footer.php  →  monta #cre-footer    (todas las páginas)
 */

get_header(); ?>

<!-- ── Hero (React) ── -->
<div id="cre-hero"></div>

<?php
// ─── DATOS ────────────────────────────────────────────────────────────────
// Edita estos arrays para actualizar el contenido sin tocar el HTML.

$services = [
  [
    'title' => 'Landscaping',
    'desc'  => 'Full-service lawn care and landscape design tailored to your property. Seasonal maintenance, planting, and curb appeal upgrades.',
    'href'  => '/services/landscaping',
    'icon'  => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
  ],
  [
    'title' => 'Hardscape & Concrete',
    'desc'  => 'Patios, walkways, retaining walls, and driveways built to last. Clean lines, solid foundations, lasting results.',
    'href'  => '/services/hardscape-concrete',
    'icon'  => '<rect x="3" y="12" width="18" height="9" rx="1"/><path d="M3 12l4-7h10l4 7"/><line x1="3" y1="16" x2="21" y2="16"/>',
  ],
  [
    'title' => 'Drainage & Erosion Control',
    'desc'  => 'French drains, grading, and erosion solutions to protect your property from water damage before it becomes a problem.',
    'href'  => '/services/drainage-erosion-control',
    'icon'  => '<path d="M12 2v6M8 6l4 4 4-4"/><path d="M3 14s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/><path d="M3 18s1-1 2-1 2 2 3 2 2-2 3-2 2 2 3 2 2-1 2-1"/>',
  ],
  [
    'title' => 'Tree Services',
    'desc'  => 'Tree trimming, pruning, removal, and stump grinding. We keep your trees healthy and your property safe.',
    'href'  => '/services/tree-services',
    'icon'  => '<path d="M12 22V12"/><path d="M5 12H2l10-10 10 10h-3"/><path d="M5 17H2l10-10 10 10h-3"/>',
  ],
  [
    'title' => 'Exterior Cleaning',
    'desc'  => 'Pressure washing for driveways, siding, decks, and fences. Restore your property\'s appearance without the damage.',
    'href'  => '/services/exterior-cleaning',
    'icon'  => '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/><circle cx="18" cy="20" r="3"/><path d="M18 17v-4m-2 5l4-2"/>',
  ],
  [
    'title' => 'Property Preparation',
    'desc'  => 'Land clearing, grading, site prep, and debris removal. Ready for construction, sale, or a seasonal refresh.',
    'href'  => '/services/property-preparation',
    'icon'  => '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
  ],
];

$why_items = [
  [
    'title' => 'Reliable Scheduling',
    'desc'  => 'We show up when we say we will. No chasing, no excuses — just dependable service on your timeline.',
    'icon'  => '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  ],
  [
    'title' => 'Transparent Pricing',
    'desc'  => 'Free detailed estimates with no hidden fees. You know exactly what you\'re paying for before any work begins.',
    'icon'  => '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
  ],
  [
    'title' => 'Licensed & Insured',
    'desc'  => 'Fully licensed and insured across all our service lines. Your property and your peace of mind are protected.',
    'icon'  => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  ],
  [
    'title' => 'Local Expertise',
    'desc'  => 'We know the Triangle — the soil, the climate, the neighborhoods. That local knowledge shows in every job.',
    'icon'  => '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  ],
];

$service_areas = [
  'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham', 'Hillsborough', 'Orange County',
];

// Reemplaza con el embed real de Google Maps para tu área de servicio
$map_src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207747.27!2d-79.0!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6b0f3e3e3e3e3e3e!2sHolly+Springs%2C+NC!5e0!3m2!1sen!2sus!4v1234567890';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .tl-home { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }

  /* ── TOKENS ── */
  .tl-home {
    --accent: #4aa050;
    --accent-soft: rgba(74,160,80,0.08);
    --accent-border: rgba(74,160,80,0.18);
    --dark: #1a1410;
    --muted: #6b6560;
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
  .tl-services-section { padding: 88px 0; background: #f5f3ef; }
  .tl-services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .tl-service-card {
    background: #fff; border-radius: 6px;
    box-shadow: 0 2px 20px rgba(26,20,16,0.08);
    overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
    display: flex; flex-direction: column;
  }
  .tl-service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,20,16,0.13); }
  .tl-service-card-top {
    height: 148px;
    background: linear-gradient(135deg, #0a1a10 0%, #0d2018 100%);
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .tl-service-card-top::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(74,160,80,0.14), transparent 60%);
  }
  .tl-service-card-top svg { position: relative; z-index: 1; }
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
    letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
    transition: gap 0.2s;
  }
  .tl-service-link:hover { gap: 10px; }
  .tl-service-link svg { transition: transform 0.2s; }
  .tl-service-link:hover svg { transform: translateX(3px); }

  /* ══ WHY US ══ */
  .tl-why-section {
    padding: 88px 0;
    background: linear-gradient(160deg, #0d1a10 0%, #0f2015 100%);
    position: relative; overflow: hidden;
  }
  .tl-why-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 20% 50%, rgba(74,160,80,0.08) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .tl-why-section .tl-title { color: #e8e0d5; }
  .tl-why-section .tl-desc { color: rgba(200,215,240,0.45); }
  .tl-why-section .tl-label { color: rgba(100,200,110,0.85); }
  .tl-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
    position: relative; z-index: 1;
  }
  .tl-why-card {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
    border-left: 3px solid var(--accent); border-radius: 4px; padding: 28px;
    display: flex; gap: 18px; align-items: flex-start;
    transition: background 0.2s;
  }
  .tl-why-card:hover { background: rgba(74,160,80,0.06); }
  .tl-why-icon {
    width: 42px; height: 42px; background: rgba(74,160,80,0.1);
    border: 1px solid rgba(74,160,80,0.22); border-radius: 6px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .tl-why-card-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 18px;
    letter-spacing: 0.05em; text-transform: uppercase; color: #e8ddd0; margin-bottom: 8px;
  }
  .tl-why-card-desc { color: rgba(200,215,240,0.45); font-size: 14px; line-height: 1.65; }

  /* ══ SERVICE AREAS BAND ══ */
  .tl-areas-band {
    background: #fff;
    border-top: 1px solid rgba(74,160,80,0.12);
    border-bottom: 1px solid rgba(74,160,80,0.12);
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
  .tl-areas-sep { width: 1px; height: 16px; background: rgba(74,160,80,0.2); flex-shrink: 0; }
  .tl-areas-list { display: flex; align-items: center; flex-wrap: wrap; gap: 0; }
  .tl-area-item {
    display: flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted);
    text-decoration: none; padding: 4px 14px;
    border-right: 1px solid rgba(26,20,16,0.1);
    transition: color 0.2s;
  }
  .tl-area-item:last-child { border-right: none; }
  .tl-area-item:hover { color: var(--accent); }

  /* ══ CTA ══ */
  .tl-cta-section { padding: 88px 0; background: #f5f3ef; }
  .tl-cta-box {
    background: linear-gradient(135deg, #0d1a10 0%, #142018 100%);
    border-radius: 8px; padding: 64px 48px; text-align: center;
    border: 1px solid rgba(74,160,80,0.2);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .tl-cta-box::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(74,160,80,0.1) 0%, transparent 65%);
  }
  .tl-cta-box > * { position: relative; z-index: 1; }
  .tl-cta-eyebrow {
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.22em;
    text-transform: uppercase; color: rgba(100,200,110,0.8); display: block; margin-bottom: 16px;
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
    padding: 15px 32px; background: var(--accent); color: white;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; box-shadow: 0 6px 22px rgba(74,160,80,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .tl-cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,160,80,0.55); }
  .tl-cta-btn-ghost {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 15px 28px; background: transparent; color: rgba(200,215,240,0.65);
    border: 1px solid rgba(74,160,80,0.3); border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; transition: all 0.2s;
  }
  .tl-cta-btn-ghost:hover { border-color: var(--accent); color: #fff; background: rgba(74,160,80,0.08); }

  /* ══ MAP ══ */
  .tl-map-section { padding: 0 0 88px; background: #f5f3ef; }
  .tl-map-head { text-align: left; margin-bottom: 32px; }
  .tl-map-wrap { border-radius: 8px; overflow: hidden; box-shadow: 0 4px 30px rgba(26,20,16,0.12); }
  .tl-map-wrap iframe { display: block; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .tl-services-grid { grid-template-columns: repeat(2, 1fr); }
    .tl-why-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .tl-services-grid { grid-template-columns: 1fr; }
    .tl-services-section, .tl-why-section, .tl-cta-section { padding: 56px 0; }
    .tl-container { padding: 0 20px; }
    .tl-cta-box { padding: 40px 24px; }
    .tl-areas-band { padding: 22px 20px; }
    .tl-area-item { padding: 4px 10px; font-size: 12px; }
    .tl-why-card { flex-direction: column; gap: 12px; }
  }
</style>

<div class="tl-home">

  <!-- ══ SERVICES ══ -->
  <section id="services" class="tl-services-section">
    <div class="tl-container">

      <div class="tl-section-head tl-reveal">
        <span class="tl-label">What We Do</span>
        <h2 class="tl-title">Our <span>Services</span></h2>
        <p class="tl-desc">Full-service exterior property care — from the ground up.</p>
        <div class="tl-rule"></div>
      </div>

      <div class="tl-services-grid">
        <?php foreach ( $services as $i => $service ) : ?>
          <div class="tl-service-card tl-reveal" data-delay="<?php echo ( $i % 3 ) + 1; ?>">
            <div class="tl-service-card-top">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
                   stroke="rgba(100,200,110,0.85)" stroke-width="1.6"
                   stroke-linecap="round" stroke-linejoin="round">
                <?php echo $service['icon']; ?>
              </svg>
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
        <h2 class="tl-title" style="color:#e8e0d5">The <span>True Line</span> Difference</h2>
        <p class="tl-desc" style="color:rgba(200,215,240,0.45)">Property care you can count on — every visit, every season.</p>
        <div class="tl-rule"></div>
      </div>

      <div class="tl-why-grid">
        <?php foreach ( $why_items as $i => $item ) : ?>
          <div class="tl-why-card tl-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="tl-why-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="#4aa050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            Get a Free Quote
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