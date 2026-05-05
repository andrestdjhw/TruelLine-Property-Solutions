<?php
/**
 * Template Name: About Us Template
 *
 * Página About Us — HTML estático + PHP data arrays.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
// ── HELPERS ────────────────────────────────────────────────────────────────
$theme_uri = get_template_directory_uri();

// DEV NOTE: Replace with real professional team/job site photo
$img_team = $theme_uri . '/assets/images/about-team.jpg';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .au-page { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }

  /* ── BRAND TOKENS ── */
  .au-page {
    --accent:        #2A5A49;
    --accent-hover:  #133429;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.5);
  }

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

  /* ── SHARED TYPOGRAPHY ── */
  .au-label {
    display: inline-block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
  }
  .au-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 48px); letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--dark); line-height: 1;
  }
  .au-title span { color: var(--accent); }
  .au-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 14px; }
  .au-body { color: var(--muted); font-size: 15px; line-height: 1.8; }
  .au-body strong { color: var(--dark); font-weight: 600; }

  /* ══ PAGE HEADER ══ */
  .au-header {
    background: linear-gradient(160deg, #091914 0%, #0f2015 60%, #133429 100%);
    padding: 80px 32px 88px; text-align: center;
    position: relative; overflow: hidden;
  }
  .au-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(42,90,73,0.1) 0%, transparent 65%),
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
    background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
    color: rgba(42,160,90,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 24px;
  }
  .au-hero-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: auPulse 2s infinite; }
  @keyframes auPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .au-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(36px, 6.5vw, 76px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 20px;
  }
  .au-header h1 em { color: var(--accent); font-style: normal; }
  .au-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.75; max-width: 620px; margin: 0 auto; }

  /* Wave */
  .au-wave { line-height: 0; background: linear-gradient(160deg, #091914, #133429); }
  .au-wave svg { display: block; width: 100%; }

  /* ══ ORIGIN / STORY ══ */
  .au-origin {
    max-width: 1200px; margin: 0 auto; padding: 88px 32px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  }
  .au-origin-img-wrap {
    position: relative; border-radius: 6px; overflow: hidden; aspect-ratio: 4/3;
    box-shadow: 0 20px 60px rgba(26,20,16,0.2);
  }
  .au-origin-img-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(42,90,73,0.15) 0%, transparent 60%);
    pointer-events: none;
  }
  .au-origin-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .au-origin-img-placeholder {
    width: 100%; height: 100%; background: linear-gradient(135deg, #091914, #133429);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  }
  .au-origin-img-placeholder svg { opacity: 0.15; }
  .au-origin-img-placeholder span { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.2); }
  .au-origin-badge {
    position: absolute; bottom: 20px; left: 20px; z-index: 2;
    background: rgba(8,12,8,0.88); backdrop-filter: blur(12px);
    border: 1px solid rgba(42,90,73,0.3); border-radius: 4px; padding: 12px 18px;
  }
  .au-origin-badge-val {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 22px;
    color: var(--accent); line-height: 1;
  }
  .au-origin-badge-label { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(200,215,240,0.4); margin-top: 3px; }
  .au-origin-text { display: flex; flex-direction: column; gap: 20px; }
  .au-origin-quote {
    font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
    font-style: italic; color: var(--dark); line-height: 1.3;
    border-left: 3px solid var(--accent); padding-left: 20px;
  }

  /* ══ STATS BAR ══ */
  .au-stats-bar {
    background: #091914;
    border-top: 1px solid rgba(42,90,73,0.15);
    border-bottom: 1px solid rgba(42,90,73,0.15);
  }
  .au-stats-inner {
    max-width: 1200px; margin: 0 auto; padding: 48px 32px;
    display: grid; grid-template-columns: repeat(4, 1fr);
  }
  .au-stat {
    text-align: center; padding: 0 24px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .au-stat:last-child { border-right: none; }
  .au-stat-val {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(36px, 4vw, 54px); color: var(--accent); line-height: 1; letter-spacing: -0.01em;
  }
  .au-stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(200,215,240,0.35); margin-top: 6px; }

  /* ══ CORE VALUES ══ */
  .au-values-section { padding: 88px 32px; background: #FCF7EC; }
  .au-values-inner { max-width: 1200px; margin: 0 auto; }
  .au-values-head { text-align: center; margin-bottom: 52px; }
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
    font-size: 72px; color: rgba(42,90,73,0.05); line-height: 1;
    pointer-events: none; user-select: none;
  }
  .au-value-card:hover { border-bottom-color: var(--accent); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(26,20,16,0.12); }
  .au-value-icon {
    width: 40px; height: 40px; background: var(--accent-soft);
    border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .au-value-name {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 17px;
    text-transform: uppercase; color: var(--dark); margin-bottom: 8px; line-height: 1.1;
  }
  .au-value-desc { font-size: 12.5px; color: rgba(9,25,20,0.4); line-height: 1.6; }

  /* ══ LICENSED / CREDENTIALS ══ */
  .au-creds-section {
    background: linear-gradient(160deg, #091914 0%, #133429 100%);
    padding: 88px 32px; position: relative; overflow: hidden;
  }
  .au-creds-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 50% 60% at 70% 50%, rgba(42,90,73,0.08) 0%, transparent 65%);
  }
  .au-creds-inner {
    max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  }
  .au-creds-label { color: rgba(42,160,90,0.85); }
  .au-creds-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 3.5vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1; letter-spacing: 0.02em;
  }
  .au-creds-title span { color: var(--accent); }
  .au-creds-rule { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin: 16px 0 24px; }
  .au-creds-body { color: rgba(200,215,240,0.5); font-size: 15px; line-height: 1.8; }
  .au-creds-body strong { color: rgba(200,215,240,0.8); font-weight: 600; }
  .au-creds-tagline {
    margin-top: 24px; font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px; font-weight: 700; font-style: italic;
    color: rgba(42,160,90,0.7); letter-spacing: 0.04em;
    border-left: 3px solid rgba(42,90,73,0.4); padding-left: 16px;
  }
  .au-creds-badges { display: flex; flex-direction: column; gap: 16px; }
  .au-creds-badge-item {
    display: flex; gap: 16px; align-items: flex-start;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-left: 3px solid var(--accent); border-radius: 4px; padding: 18px 20px;
  }
  .au-creds-badge-icon {
    width: 36px; height: 36px; background: rgba(42,90,73,0.1);
    border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .au-creds-badge-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px;
    text-transform: uppercase; color: #e8e0d5; margin-bottom: 4px; letter-spacing: 0.05em;
  }
  .au-creds-badge-desc { font-size: 12.5px; color: rgba(200,215,240,0.4); line-height: 1.6; }

  /* ══ SERVICE AREAS ══ */
  .au-areas-section { background: #ECEBC3; padding: 88px 32px; }
  .au-areas-inner { max-width: 1200px; margin: 0 auto; }
  .au-areas-head { text-align: center; margin-bottom: 44px; }
  .au-areas-grid {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;
  }
  .au-area-pill {
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--accent); background: var(--accent-soft);
    border: 1px solid var(--accent-border);
    padding: 8px 20px; border-radius: 4px; text-decoration: none;
    transition: background 0.2s, color 0.2s, transform 0.2s;
  }
  .au-area-pill:hover { background: var(--accent); color: #FCF7EC; transform: translateY(-2px); }

  /* ══ BOTTOM CTA ══ */
  .au-cta-section { background: #FCF7EC; padding: 88px 32px; }
  .au-cta-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
    background: linear-gradient(135deg, #091914 0%, #133429 100%);
    border: 1px solid rgba(42,90,73,0.2); border-radius: 8px;
    padding: 60px 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    position: relative; overflow: hidden;
  }
  .au-cta-inner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(42,90,73,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .au-cta-inner > * { position: relative; z-index: 1; }
  .au-cta-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(42,160,90,0.8); margin-bottom: 16px; display: block; }
  .au-cta-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(26px, 4vw, 44px); text-transform: uppercase;
    color: #e8e0d5; line-height: 1.05; margin-bottom: 18px;
  }
  .au-cta-title span { color: var(--accent); }
  .au-cta-actions { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
  .au-cta-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 15px 36px; background: var(--accent); color: #FCF7EC;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    box-shadow: 0 6px 22px rgba(42,90,73,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .au-cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: skewX(-15deg); transition: left 0.5s;
  }
  .au-cta-btn:hover::before { left: 160%; }
  .au-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(42,90,73,0.55); }
  .au-cta-phone {
    display: flex; align-items: center; gap: 8px;
    color: rgba(200,215,240,0.6); font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-decoration: none;
    transition: color 0.2s;
  }
  .au-cta-phone:hover { color: var(--accent); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .au-origin, .au-creds-inner { grid-template-columns: 1fr; gap: 40px; }
    .au-values-grid { grid-template-columns: repeat(3, 1fr); }
    .au-stats-inner { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .au-header { padding: 56px 20px 64px; }
    .au-origin, .au-values-section, .au-creds-section, .au-areas-section, .au-cta-section { padding: 56px 20px; }
    .au-values-grid { grid-template-columns: 1fr 1fr; }
    .au-stats-inner { grid-template-columns: 1fr 1fr; }
    .au-cta-inner { padding: 40px 24px; }
    .au-cta-actions { flex-direction: column; gap: 16px; }
  }
</style>

<div class="au-page">

  <!-- ══ PAGE HEADER ══ -->
  <div class="au-header">
    <div class="au-header-wm" aria-hidden="true">
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
    <div class="au-header-inner">
      <div class="au-hero-label">
        <div class="au-hero-dot"></div>
        The Triangle &amp; Triad · North Carolina
      </div>
      <h1>Built on the<br><em>Right Standard.</em></h1>
      <p class="au-header-sub">TrueLine Property Solutions was founded on a simple conviction: that property owners deserve a contractor who shows up prepared, executes with precision, and takes full responsibility for the result.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="au-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#FCF7EC"/>
    </svg>
  </div>

  <!-- ══ ORIGIN STORY ══ -->
  <section style="background:#FCF7EC">
    <div class="au-origin">

      <!-- Imagen -->
      <div class="au-reveal au-origin-img-wrap">
        <?php
        // DEV NOTE: Actualizar con la URL final de WordPress Media
        $img_team = '/wp-content/uploads/2026/05/HeroAboutTrueLine-scaled.jpg';
        ?>
        <img src="<?php echo esc_url( $img_team ); ?>" alt="TrueLine Property Solutions — team at work" loading="lazy" />
        <div class="au-origin-badge">
          <div class="au-origin-badge-val">NC Triangle</div>
          <div class="au-origin-badge-label">Licensed &amp; Insured · BBB Accredited</div>
        </div>
      </div>

      <!-- Texto -->
      <div class="au-origin-text">
        <div class="au-reveal">
          <span class="au-label">Our Story</span>
          <h2 class="au-title">Built Different.<br>By <span>Design.</span></h2>
          <div class="au-rule"></div>
        </div>
        <p class="au-reveal au-body" data-delay="1">
          TrueLine was founded in North Carolina by a team that saw too many homeowners underserved — <strong>contractors who didn't communicate, cut corners on materials, or left jobs unfinished.</strong>
        </p>
        <p class="au-reveal au-body" data-delay="2">
          We built TrueLine to be different. A company where every project is held to a single standard: <strong>done correctly, with the right materials, by people who actually care about the outcome.</strong>
        </p>
        <blockquote class="au-reveal au-origin-quote" data-delay="3">
          "Since launching, we have served homeowners, investors, and real estate professionals across the Triangle and Triad — building a reputation project by project, one property at a time."
        </blockquote>
      </div>
    </div>
  </section>

  <!-- ══ STATS BAR ══ -->
  <div class="au-stats-bar">
    <div class="au-stats-inner">
      <?php
      $stats = [
        [ 'val' => '10+',   'label' => 'Communities Served'  ],
        [ 'val' => '6',     'label' => 'Service Lines'       ],
        [ 'val' => '100%',  'label' => 'Licensed & Insured'  ],
        [ 'val' => 'BBB',   'label' => 'Accredited Business' ],
      ];
      foreach ( $stats as $i => $s ) : ?>
        <div class="au-stat au-reveal" data-delay="<?php echo $i + 1; ?>">
          <div class="au-stat-val"><?php echo esc_html( $s['val'] ); ?></div>
          <div class="au-stat-label"><?php echo esc_html( $s['label'] ); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- ══ CORE VALUES ══ -->
  <section class="au-values-section">
    <div class="au-values-inner">
      <div class="au-values-head au-reveal">
        <span class="au-label">What We Stand For</span>
        <h2 class="au-title">Our <span>Values</span></h2>
        <div class="au-rule" style="margin:14px auto 0"></div>
      </div>
      <div class="au-values-grid">
        <?php
        $values = [
          [
            'name' => 'The Right Standard',
            'desc' => 'We don\'t take shortcuts. Every project is executed with order, precision, and genuine quality — even when the easy path would be otherwise.',
            'icon' => '<polyline points="20 6 9 17 4 12"/>',
          ],
          [
            'name' => 'Total Accountability',
            'desc' => 'We own the result. One team, one point of contact, complete responsibility from start to finish.',
            'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          ],
          [
            'name' => 'Continuous Education',
            'desc' => 'We train constantly and stay current on materials, techniques, and best practices — because knowledge is what separates good work from lasting work.',
            'icon' => '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>',
          ],
          [
            'name' => 'Respect for the Environment',
            'desc' => 'We work in balance with the natural landscape. We protect existing flora, recommend sustainable solutions, and respect the long-term health of your property.',
            'icon' => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
          ],
          [
            'name' => 'Legacy & Reputation',
            'desc' => 'We think long-term. Every project builds a reputation we intend to carry for generations — with pride, consistency, and credibility.',
            'icon' => '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
          ],
        ];
        foreach ( $values as $i => $v ) : ?>
          <div class="au-value-card au-reveal" data-number="0<?php echo $i + 1; ?>" data-delay="<?php echo $i + 1; ?>">
            <div class="au-value-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" stroke-width="2">
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

  <!-- ══ LICENSED, INSURED & BBB ══ -->
  <section class="au-creds-section">
    <div class="au-creds-inner">

      <!-- Left -->
      <div>
        <div class="au-reveal">
          <span class="au-label au-creds-label">Credentials</span>
          <h2 class="au-creds-title">Licensed, Insured<br>&amp; <span>BBB Accredited</span></h2>
          <div class="au-creds-rule"></div>
        </div>
        <p class="au-creds-body au-reveal" data-delay="1">
          TrueLine Property Solutions holds all required state registrations, liability insurance, and workers' compensation coverage. We are <strong>BBB accredited</strong> and certified for fertilizer and pesticide application through the <strong>North Carolina Department of Agriculture.</strong>
        </p>
        <p class="au-creds-tagline au-reveal" data-delay="2">
          When you hire TrueLine, you are working with a legitimate, accountable business — not a crew with a truck.
        </p>
      </div>

      <!-- Right -->
      <div class="au-creds-badges">
        <?php
        $credentials = [
          [
            'title' => 'State Licensed & Registered',
            'desc'  => 'All required North Carolina state registrations held and current.',
            'icon'  => '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 18 15 15"/>',
          ],
          [
            'title' => 'Liability & Workers\' Comp',
            'desc'  => 'Fully insured — your property and our crew are protected on every job.',
            'icon'  => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          ],
          [
            'title' => 'BBB Accredited Business',
            'desc'  => 'Recognized for honesty, transparency, and commitment to customer satisfaction.',
            'icon'  => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
          ],
          [
            'title' => 'NC Dept. of Agriculture Certified',
            'desc'  => 'Certified for fertilizer and pesticide application — trained, tested, and compliant.',
            'icon'  => '<path d="M12 2a10 10 0 000 20" stroke-linecap="round"/><path d="M12 2c2.5 5 4 10 4 10s-4 2-8 0c0 0 1.5-5 4-10z"/><line x1="12" y1="12" x2="12" y2="22"/>',
          ],
        ];
        foreach ( $credentials as $i => $c ) : ?>
          <div class="au-creds-badge-item au-reveal" data-delay="<?php echo $i + 1; ?>">
            <div class="au-creds-badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A5A49" stroke-width="2">
                <?php echo $c['icon']; ?>
              </svg>
            </div>
            <div>
              <div class="au-creds-badge-title"><?php echo esc_html( $c['title'] ); ?></div>
              <div class="au-creds-badge-desc"><?php echo esc_html( $c['desc'] ); ?></div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- ══ SERVICE AREAS ══ -->
  <section class="au-areas-section">
    <div class="au-areas-inner">
      <div class="au-areas-head au-reveal">
        <span class="au-label">Where We Work</span>
        <h2 class="au-title">Serving North Carolina's Most<br><span>Valued Communities</span></h2>
        <p style="color:var(--muted);font-size:15px;line-height:1.7;max-width:580px;margin:14px auto 0">
          We concentrate our work in the areas of North Carolina where homeowners invest in their properties and expect a higher standard of service.
        </p>
        <div class="au-rule" style="margin:18px auto 0"></div>
      </div>
      <div class="au-areas-grid">
        <?php
        $areas = [
          'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham',
          'Orange County', 'Hillsborough', 'Greensboro', 'Winston-Salem', 'High Point',
        ];
        foreach ( $areas as $area ) : ?>
          <a href="<?php echo esc_url( home_url( '/service-areas/' . sanitize_title( $area ) ) ); ?>"
             class="au-area-pill au-reveal">
            <?php echo esc_html( $area ); ?>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ══ BOTTOM CTA ══ -->
  <section class="au-cta-section">
    <div class="au-cta-inner au-reveal">
      <span class="au-cta-label">Ready to Get Started?</span>
      <h2 class="au-cta-title">Ready to Work With a Team<br>That <span>Holds the Line?</span></h2>
      <div class="au-cta-actions">
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="au-cta-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          Request a Free Estimate
        </a>
        <a href="tel:+19199518341" class="au-cta-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (919) 951-8341
        </a>
      </div>
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