<?php
/**
 * Template Name: Contact Template
 *
 * Página de contacto — HTML/PHP estático.
 * El formulario React (ContactForm.jsx) se monta en #cre-contact-form.
 * Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<?php
// ── DATOS — edita aquí sin tocar el HTML ─────────────────────────────────
$contact = [
  'phone'      => '(919) 951-8341',
  'phone_href' => 'tel:+19199518341',
  'email'      => 'navaslandscapenc1@gmail.com',
  'email_href' => 'mailto:navaslandscapenc1@gmail.com',
  'location'   => 'The Triangle & Triad, North Carolina',
  'response'   => 'Within 24 hrs',
];

$hours = [
  [ 'day' => 'Monday – Friday', 'time' => '7:00 AM – 6:00 PM' ],
  [ 'day' => 'Saturday',        'time' => '8:00 AM – 3:00 PM' ],
  [ 'day' => 'Sunday',          'time' => 'Closed'            ],
];

$faqs = [
  [
    'q' => 'Do you offer free estimates?',
    'a' => 'Yes — all estimates are completely free and come with no obligation. We\'ll walk the property with you, scope the work, and give you a clear, honest number before any work begins.',
  ],
  [
    'q' => 'How quickly can you start a project?',
    'a' => 'It depends on our current schedule and the scope of work, but we typically schedule new projects within 1–2 weeks of the estimate. We\'ll give you a realistic timeline upfront.',
  ],
  [
    'q' => 'Are you licensed and insured?',
    'a' => 'Yes. TrueLine Property Solutions is fully licensed and carries comprehensive general liability and workers\' compensation insurance. Certificates are available upon request.',
  ],
  [
    'q' => 'What areas do you serve?',
    'a' => 'We serve Holly Springs, Cary, Chapel Hill, Raleigh, Durham, Hillsborough, and Orange County. If you\'re just outside these areas, reach out — we\'ll let you know if we can help.',
  ],
  [
    'q' => 'Can you handle multiple services on the same property?',
    'a' => 'Absolutely. We offer landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation. Many clients use us for several services — it\'s easier to coordinate with one team than manage multiple contractors.',
  ],
];

// Reemplaza con el embed real de Google Maps para tu área de servicio
$map_src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207747.27!2d-79.0!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6b0f3e3e3e3e3e3e!2sHolly+Springs%2C+NC!5e0!3m2!1sen!2sus!4v1234567890';
?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  /* ── BASE ── */
  .ct-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; color: #1a1410; }
  .ct-page {
    --accent:        #4aa050;
    --accent-soft:   rgba(74,160,80,0.08);
    --accent-border: rgba(74,160,80,0.18);
    --muted:         #6b6560;
    --dark:          #1a1410;
  }

  /* ── SCROLL REVEAL ── */
  .ct-reveal {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
  }
  .ct-reveal.ct-in { opacity: 1; transform: none; }
  .ct-reveal[data-delay="1"] { transition-delay: 0.08s; }
  .ct-reveal[data-delay="2"] { transition-delay: 0.16s; }
  .ct-reveal[data-delay="3"] { transition-delay: 0.24s; }
  .ct-reveal[data-delay="4"] { transition-delay: 0.32s; }

  /* ── SHARED ── */
  .ct-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
  .ct-label {
    display: block; font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px;
  }
  .ct-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: clamp(26px, 3.5vw, 40px); letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--dark); line-height: 1;
  }
  .ct-title span { color: var(--accent); }
  .ct-rule { width: 36px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 12px; }

  /* ══ PAGE HEADER ══ */
  .ct-header {
    background: linear-gradient(160deg, #080c18 0%, #0d1a10 60%, #0a1510 100%);
    padding: 72px 32px 80px; text-align: center;
    position: relative; overflow: hidden;
  }
  .ct-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(74,160,80,0.09) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .ct-header-wm {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    display: flex; align-items: center; justify-content: space-between; padding: 0 6%;
  }
  .ct-header-wm svg { width: min(220px, 22%); opacity: 0.04; }
  .ct-header-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
  .ct-header-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(74,160,80,0.1); border: 1px solid rgba(74,160,80,0.25);
    color: rgba(100,200,110,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 22px;
  }
  .ct-badge-dot { width: 5px; height: 5px; background: var(--accent); border-radius: 50%; animation: ctPulse 2s infinite; }
  @keyframes ctPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .ct-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(38px, 7vw, 72px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase; color: #e8e0d5; margin-bottom: 18px;
  }
  .ct-header h1 em { color: var(--accent); font-style: normal; }
  .ct-header-sub { color: rgba(200,215,240,0.5); font-size: 16px; line-height: 1.7; }

  /* Wave */
  .ct-wave { line-height: 0; background: linear-gradient(160deg, #080c18, #0a1510); }
  .ct-wave svg { display: block; width: 100%; }

  /* ══ MAIN ══ */
  .ct-main { padding: 72px 0 88px; }

  /* ── INFO CARDS ── */
  .ct-info-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 64px;
  }
  .ct-info-card {
    background: #fff; border-radius: 6px; padding: 26px 22px;
    box-shadow: 0 2px 16px rgba(26,20,16,0.08); border-top: 3px solid var(--accent);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .ct-info-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(26,20,16,0.13); }
  .ct-info-icon {
    width: 42px; height: 42px; background: var(--accent-soft);
    border: 1px solid var(--accent-border); border-radius: 6px;
    display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .ct-info-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .ct-info-val { font-family: 'Barlow Condensed', sans-serif; font-size: 16px; font-weight: 700; color: var(--dark); line-height: 1.3; margin-bottom: 3px; }
  .ct-info-sub { font-size: 12px; color: #9a8f86; line-height: 1.5; }
  .ct-info-link { text-decoration: none; color: inherit; display: block; }
  .ct-info-link:hover .ct-info-val { color: var(--accent); }

  /* ── BODY GRID ── */
  .ct-body-grid {
    display: grid; grid-template-columns: 1fr 340px; gap: 48px; align-items: start;
  }

  /* ── SIDEBAR ── */
  .ct-sidebar { display: flex; flex-direction: column; gap: 22px; }
  .ct-side-card {
    background: #fff; border-radius: 6px; padding: 26px;
    box-shadow: 0 2px 16px rgba(26,20,16,0.08);
  }
  .ct-side-title {
    font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent);
    margin-bottom: 16px; padding-bottom: 10px;
    border-bottom: 1px solid var(--accent-border);
    display: flex; align-items: center; gap: 8px;
  }
  .ct-hours-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 9px 0; border-bottom: 1px solid #f0ece7; font-size: 13.5px;
  }
  .ct-hours-row:last-child { border-bottom: none; padding-bottom: 0; }
  .ct-hours-day { color: var(--muted); font-weight: 500; }
  .ct-hours-time { color: var(--dark); font-weight: 600; }
  .ct-hours-closed { color: #c0b8b0; font-weight: 500; }
  .ct-avail {
    margin-top: 14px; display: flex; align-items: center; gap: 8px;
    background: var(--accent-soft); border: 1px solid var(--accent-border);
    border-radius: 4px; padding: 9px 14px;
    font-size: 12.5px; font-weight: 600; color: var(--accent); letter-spacing: 0.04em;
  }
  .ct-avail-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; animation: ctPulse 2s infinite; flex-shrink: 0; }

  /* Areas card */
  .ct-areas-list { display: flex; flex-wrap: wrap; gap: 6px; }
  .ct-area-tag {
    font-size: 11.5px; font-weight: 600; color: var(--accent);
    background: var(--accent-soft); border: 1px solid var(--accent-border);
    padding: 4px 12px; border-radius: 3px; text-decoration: none;
    transition: background 0.2s;
  }
  .ct-area-tag:hover { background: rgba(74,160,80,0.15); }

  /* ══ MAP ══ */
  .ct-map-section { margin-top: 72px; }
  .ct-map-head { margin-bottom: 28px; }
  .ct-map-wrap { border-radius: 8px; overflow: hidden; box-shadow: 0 4px 30px rgba(26,20,16,0.12); }
  .ct-map-wrap iframe { display: block; }

  /* ══ FAQ ══ */
  .ct-faq-section { margin-top: 72px; }
  .ct-faq-head { margin-bottom: 32px; }
  .ct-faq-list { display: flex; flex-direction: column; gap: 10px; }
  .ct-faq-item {
    background: #fff; border-radius: 6px; overflow: hidden;
    box-shadow: 0 1px 12px rgba(26,20,16,0.07);
    border-left: 3px solid transparent; transition: border-color 0.2s;
  }
  .ct-faq-item.open { border-left-color: var(--accent); }
  .ct-faq-btn {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 18px 22px; background: none; border: none; cursor: pointer; text-align: left; gap: 16px;
  }
  .ct-faq-q { font-size: 15px; font-weight: 600; color: var(--dark); line-height: 1.4; }
  .ct-faq-item.open .ct-faq-q { color: var(--accent); }
  .ct-faq-icon {
    width: 26px; height: 26px; background: var(--accent-soft);
    border: 1px solid var(--accent-border); border-radius: 4px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    transition: background 0.2s, transform 0.3s;
  }
  .ct-faq-item.open .ct-faq-icon { background: rgba(74,160,80,0.18); transform: rotate(45deg); }
  .ct-faq-body {
    padding: 0 22px; max-height: 0; overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding 0.35s;
  }
  .ct-faq-item.open .ct-faq-body { max-height: 220px; padding-bottom: 18px; }
  .ct-faq-a { color: var(--muted); font-size: 14px; line-height: 1.7; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .ct-body-grid { grid-template-columns: 1fr; }
    .ct-sidebar { flex-direction: row; flex-wrap: wrap; }
    .ct-side-card { flex: 1; min-width: 260px; }
    .ct-info-row { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .ct-main { padding: 48px 0 64px; }
    .ct-container { padding: 0 20px; }
    .ct-header { padding: 56px 20px 64px; }
    .ct-info-row { grid-template-columns: 1fr; }
    .ct-sidebar { flex-direction: column; }
  }
</style>

<div class="ct-page">

  <!-- ══ PAGE HEADER ══ -->
  <div class="ct-header">
    <div class="ct-header-wm" aria-hidden="true">
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
    <div class="ct-header-inner">
      <div class="ct-header-badge">
        <div class="ct-badge-dot"></div>
        Free Estimates · No Obligation
      </div>
      <h1>Let's Talk About<br>Your <em>Property.</em></h1>
      <p class="ct-header-sub">Fill out the form and we'll get back to you within 1 business day with a free, no-pressure estimate.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="ct-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#f5f3ef"/>
    </svg>
  </div>

  <!-- ══ MAIN ══ -->
  <div class="ct-main">
    <div class="ct-container">

      <!-- ── INFO CARDS ── -->
      <div class="ct-info-row">

        <div class="ct-reveal">
          <a href="<?php echo esc_attr( $contact['phone_href'] ); ?>" class="ct-info-link">
            <div class="ct-info-card">
              <div class="ct-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div class="ct-info-label">Phone</div>
              <div class="ct-info-val"><?php echo esc_html( $contact['phone'] ); ?></div>
              <div class="ct-info-sub">Call or text anytime</div>
            </div>
          </a>
        </div>

        <div class="ct-reveal" data-delay="1">
          <a href="<?php echo esc_attr( $contact['email_href'] ); ?>" class="ct-info-link">
            <div class="ct-info-card">
              <div class="ct-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="ct-info-label">Email</div>
              <div class="ct-info-val" style="font-size:13px;word-break:break-all"><?php echo esc_html( $contact['email'] ); ?></div>
              <div class="ct-info-sub">Reply within 1 business day</div>
            </div>
          </a>
        </div>

        <div class="ct-reveal" data-delay="2">
          <div class="ct-info-card">
            <div class="ct-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="ct-info-label">Service Area</div>
            <div class="ct-info-val"><?php echo esc_html( $contact['location'] ); ?></div>
            <div class="ct-info-sub">7 communities served</div>
          </div>
        </div>

        <div class="ct-reveal" data-delay="3">
          <div class="ct-info-card">
            <div class="ct-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="ct-info-label">Response Time</div>
            <div class="ct-info-val"><?php echo esc_html( $contact['response'] ); ?></div>
            <div class="ct-info-sub">On all project inquiries</div>
          </div>
        </div>

      </div><!-- .ct-info-row -->

      <!-- ── FORM + SIDEBAR ── -->
      <div class="ct-body-grid">

        <!-- Formulario React — montado desde ContactForm.js -->
        <div class="ct-reveal" id="cre-contact-form"></div>

        <!-- Sidebar PHP estático -->
        <div class="ct-sidebar">

          <!-- Horarios -->
          <div class="ct-side-card ct-reveal" data-delay="1">
            <div class="ct-side-title">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Office Hours
            </div>
            <?php foreach ( $hours as $h ) : ?>
              <div class="ct-hours-row">
                <span class="ct-hours-day"><?php echo esc_html( $h['day'] ); ?></span>
                <span class="<?php echo $h['time'] === 'Closed' ? 'ct-hours-closed' : 'ct-hours-time'; ?>">
                  <?php echo esc_html( $h['time'] ); ?>
                </span>
              </div>
            <?php endforeach; ?>
            <div class="ct-avail">
              <div class="ct-avail-dot"></div>
              Call or text us anytime
            </div>
          </div>

          <!-- Áreas de servicio -->
          <div class="ct-side-card ct-reveal" data-delay="2">
            <div class="ct-side-title">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Areas We Serve
            </div>
            <div class="ct-areas-list">
              <?php
              $areas = [ 'Holly Springs', 'Cary', 'Chapel Hill', 'Raleigh', 'Durham', 'Hillsborough', 'Orange County' ];
              foreach ( $areas as $area ) : ?>
                <a href="<?php echo esc_url( home_url( '/service-areas/' . sanitize_title( $area ) ) ); ?>"
                   class="ct-area-tag">
                  <?php echo esc_html( $area ); ?>
                </a>
              <?php endforeach; ?>
            </div>
          </div>

        </div><!-- .ct-sidebar -->
      </div><!-- .ct-body-grid -->

      <!-- ── MAP ── -->
      <div class="ct-map-section ct-reveal">
        <div class="ct-map-head">
          <span class="ct-label">Where We Work</span>
          <h2 class="ct-title">Our <span>Service Area</span></h2>
          <div class="ct-rule"></div>
        </div>
        <div class="ct-map-wrap">
          <iframe
            src="<?php echo esc_url( $map_src ); ?>"
            width="100%"
            height="440"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="TrueLine Property Solutions — Service Area">
          </iframe>
        </div>
      </div>

      <!-- ── FAQ ── -->
      <div class="ct-faq-section">
        <div class="ct-faq-head ct-reveal">
          <span class="ct-label">Common Questions</span>
          <h2 class="ct-title">FAQ<span>s</span></h2>
          <div class="ct-rule"></div>
        </div>
        <div class="ct-faq-list">
          <?php foreach ( $faqs as $i => $faq ) : ?>
            <div class="ct-faq-item ct-reveal" data-delay="<?php echo ( $i % 4 ) + 1; ?>" data-index="<?php echo $i; ?>">
              <button class="ct-faq-btn" onclick="ctToggleFaq(this)">
                <span class="ct-faq-q"><?php echo esc_html( $faq['q'] ); ?></span>
                <div class="ct-faq-icon">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4aa050" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>
              <div class="ct-faq-body">
                <p class="ct-faq-a"><?php echo esc_html( $faq['a'] ); ?></p>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

    </div><!-- .ct-container -->
  </div><!-- .ct-main -->

</div><!-- .ct-page -->

<script>
/* ── Scroll reveal ── */
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('ct-in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.ct-reveal').forEach(function (el) { obs.observe(el); });
})();

/* ── FAQ accordion ── */
function ctToggleFaq(btn) {
  var item = btn.closest('.ct-faq-item');
  var isOpen = item.classList.contains('open');
  // Cierra todos
  document.querySelectorAll('.ct-faq-item.open').forEach(function (el) { el.classList.remove('open'); });
  // Abre el clickeado si estaba cerrado
  if (!isOpen) item.classList.add('open');
}
</script>

<?php get_footer(); ?>