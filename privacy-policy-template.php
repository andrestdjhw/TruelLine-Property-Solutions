<?php
/**
 * Template Name: Privacy Policy Template
 *
 * Página: Privacy Policy — TrueLine Property Solutions.
 * Sin componente React. Navbar y footer vienen de header.php / footer.php.
 */

get_header(); ?>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .legal-page { font-family: 'Barlow', sans-serif; background: #FCF7EC; color: #091914; }
  .legal-page {
    --accent:        #2A5A49;
    --accent-soft:   rgba(42,90,73,0.08);
    --accent-border: rgba(42,90,73,0.18);
    --dark:          #091914;
    --muted:         rgba(9,25,20,0.55);
  }

  /* ══ PAGE HEADER ══ */
  .legal-header {
    background: linear-gradient(160deg, #091914 0%, #0f2015 60%, #133429 100%);
    padding: 72px 32px 80px; text-align: center;
    position: relative; overflow: hidden;
  }
  .legal-header::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(42,90,73,0.1) 0%, transparent 65%),
      repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
      repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
  }
  .legal-header-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
  .legal-header-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
    color: rgba(42,160,90,0.9); font-size: 10.5px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 3px; margin-bottom: 22px;
  }
  .legal-header h1 {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
    font-size: clamp(36px, 6vw, 64px); line-height: 0.95;
    letter-spacing: 0.02em; text-transform: uppercase;
    color: #e8e0d5; margin-bottom: 16px;
  }
  .legal-header h1 em { color: #ECEBC3; font-style: normal; }
  .legal-header-sub { color: rgba(200,215,240,0.5); font-size: 14px; line-height: 1.6; }

  /* Wave */
  .legal-wave { line-height: 0; background: linear-gradient(160deg, #091914, #133429); }
  .legal-wave svg { display: block; width: 100%; }

  /* ══ CONTENT ══ */
  .legal-main { padding: 72px 32px 96px; }
  .legal-container { max-width: 860px; margin: 0 auto; }

  .legal-meta {
    display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    padding: 16px 22px; background: #fff;
    border: 1px solid rgba(42,90,73,0.15); border-radius: 6px;
    margin-bottom: 52px;
    font-size: 13px; color: var(--muted);
  }
  .legal-meta strong { color: var(--dark); font-weight: 600; }
  .legal-meta-sep { width: 1px; height: 16px; background: rgba(42,90,73,0.15); }

  .legal-section { margin-bottom: 44px; }
  .legal-section-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: 22px; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--dark); margin-bottom: 14px;
    padding-bottom: 10px; border-bottom: 2px solid var(--accent-border);
    display: flex; align-items: center; gap: 10px;
  }
  .legal-section-title::before {
    content: ''; display: inline-block; width: 4px; height: 22px;
    background: var(--accent); border-radius: 2px; flex-shrink: 0;
  }
  .legal-body { color: var(--muted); font-size: 15px; line-height: 1.85; }
  .legal-body p { margin-bottom: 14px; }
  .legal-body p:last-child { margin-bottom: 0; }
  .legal-body strong { color: var(--dark); font-weight: 600; }
  .legal-body a { color: var(--accent); text-decoration: none; transition: opacity 0.2s; }
  .legal-body a:hover { opacity: 0.75; }
  .legal-body ul { margin: 10px 0 14px 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .legal-body ul li {
    padding-left: 18px; position: relative; font-size: 14.5px; color: var(--muted); line-height: 1.7;
  }
  .legal-body ul li::before {
    content: ''; position: absolute; left: 0; top: 10px;
    width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
  }

  /* Highlight box */
  .legal-highlight {
    background: var(--accent-soft); border: 1px solid var(--accent-border);
    border-radius: 6px; padding: 18px 22px; margin: 20px 0;
    font-size: 14px; color: var(--muted); line-height: 1.7;
  }
  .legal-highlight strong { color: var(--accent); }

  .legal-contact-box {
    background: #fff; border: 1px solid rgba(42,90,73,0.15);
    border-left: 4px solid var(--accent); border-radius: 6px;
    padding: 24px 28px; margin-top: 52px;
  }
  .legal-contact-box-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--dark); margin-bottom: 12px;
  }
  .legal-contact-box p { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 8px; }
  .legal-contact-box a { color: var(--accent); font-weight: 600; text-decoration: none; }

  @media (max-width: 640px) {
    .legal-header { padding: 56px 20px 64px; }
    .legal-main { padding: 48px 20px 72px; }
    .legal-meta { gap: 12px; }
    .legal-meta-sep { display: none; }
  }
</style>

<div class="legal-page">

  <!-- ══ HEADER ══ -->
  <div class="legal-header">
    <div class="legal-header-inner">
      <div class="legal-header-badge">TrueLine Property Solutions</div>
      <h1>Privacy <em>Policy</em></h1>
      <p class="legal-header-sub">Your privacy matters to us. This policy explains how we collect, use, and protect your information.</p>
    </div>
  </div>

  <!-- Wave -->
  <div class="legal-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="height:clamp(32px,5vw,60px)">
      <path d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 24C840 20 960 20 1080 24C1200 28 1320 34 1380 37L1440 40V80H0V0Z" fill="#FCF7EC"/>
    </svg>
  </div>

  <!-- ══ CONTENT ══ -->
  <div class="legal-main">
    <div class="legal-container">

      <!-- Meta -->
      <div class="legal-meta">
        <span><strong>Effective Date:</strong> April 1, 2026</span>
        <div class="legal-meta-sep"></div>
        <span><strong>Company:</strong> TrueLine Property Solutions</span>
        <div class="legal-meta-sep"></div>
        <span><strong>Jurisdiction:</strong> North Carolina, USA</span>
      </div>

      <!-- Intro -->
      <div class="legal-highlight">
        <strong>Summary:</strong> TrueLine Property Solutions collects only the information necessary to provide you with services and respond to your inquiries. We do not sell, rent, or share your personal information with third parties for marketing purposes.
      </div>

      <!-- 1 -->
      <div class="legal-section">
        <div class="legal-section-title">1. Who We Are</div>
        <div class="legal-body">
          <p>TrueLine Property Solutions is a licensed exterior property services contractor serving the Triangle and Triad regions of North Carolina. We operate this website at <strong>truelinepropertysolutions.com</strong> to provide information about our services and to allow potential and current clients to contact us.</p>
          <p>This Privacy Policy describes how we handle personal information collected through our website and in the course of providing our services.</p>
        </div>
      </div>

      <!-- 2 -->
      <div class="legal-section">
        <div class="legal-section-title">2. Information We Collect</div>
        <div class="legal-body">
          <p>We collect personal information only when you voluntarily provide it to us. This includes:</p>
          <ul>
            <li><strong>Contact form submissions</strong> — name, email address, phone number, service requested, and project description</li>
            <li><strong>Email correspondence</strong> — any information you include when emailing us directly</li>
            <li><strong>Phone calls</strong> — information discussed during service inquiries or scheduling calls</li>
            <li><strong>Service agreements</strong> — name, property address, and contact details required to fulfill a project proposal or contract</li>
          </ul>
          <p>We do not collect payment information directly through our website. Any payment processing is handled through secure third-party methods specified in your project proposal.</p>
        </div>
      </div>

      <!-- 3 -->
      <div class="legal-section">
        <div class="legal-section-title">3. How We Use Your Information</div>
        <div class="legal-body">
          <p>The information you provide is used solely to:</p>
          <ul>
            <li>Respond to your inquiries and estimate requests</li>
            <li>Schedule site visits and service appointments</li>
            <li>Prepare and deliver project proposals</li>
            <li>Communicate project updates, invoices, and follow-ups</li>
            <li>Improve our services based on feedback you provide</li>
          </ul>
          <p>We do <strong>not</strong> use your information to send unsolicited marketing communications, sell your data to third parties, or build advertising profiles.</p>
        </div>
      </div>

      <!-- 4 -->
      <div class="legal-section">
        <div class="legal-section-title">4. How We Store Your Information</div>
        <div class="legal-body">
          <p>Information submitted through our contact form is transmitted via <strong>EmailJS</strong>, a third-party email delivery service, and is received directly in our business email inbox. We do not maintain a separate database of form submissions.</p>
          <p>Client information related to active or completed projects may be retained in our internal business records for accounting and legal compliance purposes. We take reasonable precautions to protect this information from unauthorized access.</p>
        </div>
      </div>

      <!-- 5 -->
      <div class="legal-section">
        <div class="legal-section-title">5. Third-Party Services</div>
        <div class="legal-body">
          <p>Our website uses the following third-party services that may collect limited data as part of their standard operation:</p>
          <ul>
            <li><strong>EmailJS</strong> — processes contact form submissions. Subject to EmailJS's own privacy policy.</li>
            <li><strong>Google Maps</strong> — used to display our service area. Google may collect data in accordance with Google's Privacy Policy.</li>
            <li><strong>Google Fonts</strong> — used for website typography. May log font requests.</li>
          </ul>
          <p>We are not responsible for the privacy practices of these third-party providers. We encourage you to review their respective privacy policies.</p>
        </div>
      </div>

      <!-- 6 -->
      <div class="legal-section">
        <div class="legal-section-title">6. Cookies</div>
        <div class="legal-body">
          <p>Our website may use basic cookies to support site functionality (such as WordPress session cookies). We do not use tracking cookies, advertising cookies, or analytics cookies that collect personal behavioral data.</p>
          <p>If you have concerns about cookies, you may adjust your browser settings to restrict or disable them. Note that disabling cookies may affect some website functionality.</p>
        </div>
      </div>

      <!-- 7 -->
      <div class="legal-section">
        <div class="legal-section-title">7. Sharing of Information</div>
        <div class="legal-body">
          <p>We do not sell, trade, or rent your personal information to any third party. We may share your information only in the following limited circumstances:</p>
          <ul>
            <li>With service providers directly involved in completing your project (e.g., material suppliers or subcontractors), and only to the extent necessary</li>
            <li>When required by law, court order, or governmental authority</li>
            <li>To protect the rights, property, or safety of TrueLine Property Solutions, our clients, or others</li>
          </ul>
        </div>
      </div>

      <!-- 8 -->
      <div class="legal-section">
        <div class="legal-section-title">8. Your Rights</div>
        <div class="legal-body">
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your personal information, subject to any legal retention obligations</li>
            <li>Opt out of any future communications from us at any time by contacting us directly</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:navaslandscapenc1@gmail.com">navaslandscapenc1@gmail.com</a>.</p>
        </div>
      </div>

      <!-- 9 -->
      <div class="legal-section">
        <div class="legal-section-title">9. Children's Privacy</div>
        <div class="legal-body">
          <p>Our website and services are intended for adults. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>
        </div>
      </div>

      <!-- 10 -->
      <div class="legal-section">
        <div class="legal-section-title">10. External Links</div>
        <div class="legal-body">
          <p>Our website may contain links to external sites (such as our Jobber booking page or Google Business profile). These sites are operated by third parties and are subject to their own privacy policies. TrueLine Property Solutions is not responsible for the content or privacy practices of any linked external sites.</p>
        </div>
      </div>

      <!-- 11 -->
      <div class="legal-section">
        <div class="legal-section-title">11. Changes to This Policy</div>
        <div class="legal-body">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically.</p>
          <p>Continued use of our website or services after any changes to this policy constitutes your acceptance of the updated terms.</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="legal-contact-box">
        <div class="legal-contact-box-title">Privacy Questions or Requests?</div>
        <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
        <p>
          <strong>TrueLine Property Solutions</strong><br>
          The Triangle &amp; Triad — North Carolina<br>
          <a href="tel:+19199518341">(919) 951-8341</a> &nbsp;·&nbsp;
          <a href="mailto:navaslandscapenc1@gmail.com">navaslandscapenc1@gmail.com</a>
        </p>
      </div>

    </div>
  </div>

</div><!-- .legal-page -->

<?php get_footer(); ?>