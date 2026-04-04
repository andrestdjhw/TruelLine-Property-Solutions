<?php
/**
 * Template Name: Terms & Conditions Template
 *
 * Página: Terms & Conditions — TrueLine Property Solutions.
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

  /* Effective date bar */
  .legal-meta {
    display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    padding: 16px 22px; background: #fff;
    border: 1px solid rgba(42,90,73,0.15); border-radius: 6px;
    margin-bottom: 52px;
    font-size: 13px; color: var(--muted);
  }
  .legal-meta strong { color: var(--dark); font-weight: 600; }
  .legal-meta-sep { width: 1px; height: 16px; background: rgba(42,90,73,0.15); }

  /* Section */
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

  /* Contact box */
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
      <h1>Terms &amp; <em>Conditions</em></h1>
      <p class="legal-header-sub">Please read these terms carefully before requesting services or using our website.</p>
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

      <!-- 1 -->
      <div class="legal-section">
        <div class="legal-section-title">1. Acceptance of Terms</div>
        <div class="legal-body">
          <p>By accessing our website, requesting an estimate, or engaging TrueLine Property Solutions ("TrueLine," "we," "us," or "our") for any service, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website or services.</p>
          <p>These terms apply to all visitors, clients, and others who access or use our services in the Triangle and Triad regions of North Carolina and any other areas we serve.</p>
        </div>
      </div>

      <!-- 2 -->
      <div class="legal-section">
        <div class="legal-section-title">2. Services</div>
        <div class="legal-body">
          <p>TrueLine Property Solutions provides residential and commercial exterior property services, including but not limited to:</p>
          <ul>
            <li>Landscaping design, installation, and maintenance</li>
            <li>Hardscape and concrete construction (patios, walkways, retaining walls, driveways)</li>
            <li>Drainage and erosion control</li>
            <li>Tree services (trimming, removal, storm cleanup)</li>
            <li>Exterior cleaning (pressure washing, roof cleaning, gutter maintenance)</li>
            <li>Property preparation for sale, renovation, or occupancy</li>
          </ul>
          <p>All services are subject to availability, scheduling, and a signed proposal or work agreement. TrueLine reserves the right to decline any project at its discretion.</p>
        </div>
      </div>

      <!-- 3 -->
      <div class="legal-section">
        <div class="legal-section-title">3. Estimates & Proposals</div>
        <div class="legal-body">
          <p>All estimates provided by TrueLine are free of charge and non-binding until a written proposal is signed by both parties. Estimates are based on a site assessment and the information provided at the time of review.</p>
          <p><strong>Prices may change</strong> if the scope of work changes, unforeseen conditions are discovered on-site, or material costs change significantly between estimate and project start. Any changes to scope or pricing will be communicated and agreed upon in writing before proceeding.</p>
        </div>
      </div>

      <!-- 4 -->
      <div class="legal-section">
        <div class="legal-section-title">4. Payment Terms</div>
        <div class="legal-body">
          <p>Payment terms are outlined in each individual project proposal. General terms include:</p>
          <ul>
            <li>A deposit may be required before work begins on larger projects</li>
            <li>Final payment is due upon project completion unless otherwise agreed in writing</li>
            <li>TrueLine accepts payment via check, bank transfer, or other methods specified in the proposal</li>
            <li>Late payments may be subject to a fee as specified in the signed proposal</li>
          </ul>
          <p>Failure to pay on agreed terms may result in suspension of services and may be subject to collection proceedings.</p>
        </div>
      </div>

      <!-- 5 -->
      <div class="legal-section">
        <div class="legal-section-title">5. Client Responsibilities</div>
        <div class="legal-body">
          <p>To ensure safe and efficient project execution, clients are responsible for:</p>
          <ul>
            <li>Providing accurate property access and information at the time of estimate and during the project</li>
            <li>Ensuring the work area is free of vehicles, equipment, pets, and other obstructions unless otherwise arranged</li>
            <li>Notifying TrueLine of any known underground utilities, irrigation systems, or hazardous conditions</li>
            <li>Obtaining any permits required by local ordinances, unless TrueLine has agreed in writing to handle permitting</li>
          </ul>
          <p>TrueLine is not liable for damages resulting from inaccurate or incomplete information provided by the client.</p>
        </div>
      </div>

      <!-- 6 -->
      <div class="legal-section">
        <div class="legal-section-title">6. Cancellation & Rescheduling</div>
        <div class="legal-body">
          <p>Clients may cancel or reschedule a confirmed project by providing at least <strong>48 hours written notice</strong> prior to the scheduled start date. Cancellations with less than 48 hours notice may result in a cancellation fee to cover scheduling and mobilization costs.</p>
          <p>TrueLine reserves the right to reschedule work due to weather conditions, equipment availability, or other circumstances beyond our control. We will provide reasonable advance notice in such cases.</p>
        </div>
      </div>

      <!-- 7 -->
      <div class="legal-section">
        <div class="legal-section-title">7. Warranty & Workmanship</div>
        <div class="legal-body">
          <p>TrueLine stands behind the quality of its work. Any warranty terms specific to your project will be outlined in the signed proposal. General terms include:</p>
          <ul>
            <li>Hardscape and concrete work is warranted against defects in workmanship for <strong>one (1) year</strong> from the date of project completion</li>
            <li>Plant material is warranted for <strong>30 days</strong> from installation, subject to proper watering and care by the client</li>
            <li>Warranty does not cover damage caused by Acts of God, third-party interference, client negligence, or conditions outside the scope of our work</li>
          </ul>
          <p>Warranty claims must be submitted in writing to <a href="mailto:navaslandscapenc1@gmail.com">navaslandscapenc1@gmail.com</a> within the warranty period.</p>
        </div>
      </div>

      <!-- 8 -->
      <div class="legal-section">
        <div class="legal-section-title">8. Limitation of Liability</div>
        <div class="legal-body">
          <p>To the fullest extent permitted by applicable law, TrueLine Property Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website, including but not limited to loss of property value, loss of income, or costs of substitute services.</p>
          <p>Our total liability for any claim arising from a project shall not exceed the total amount paid by the client for that specific project.</p>
        </div>
      </div>

      <!-- 9 -->
      <div class="legal-section">
        <div class="legal-section-title">9. Intellectual Property</div>
        <div class="legal-body">
          <p>All content on the TrueLine Property Solutions website — including text, images, logos, graphics, and design — is the property of TrueLine Property Solutions and is protected under applicable copyright and trademark laws.</p>
          <p>You may not reproduce, distribute, or use any content from this website without prior written consent from TrueLine Property Solutions.</p>
        </div>
      </div>

      <!-- 10 -->
      <div class="legal-section">
        <div class="legal-section-title">10. Website Use</div>
        <div class="legal-body">
          <p>This website is provided for informational purposes only. TrueLine makes no warranties regarding the accuracy, completeness, or reliability of any information on this site. Content is subject to change without notice.</p>
          <p>You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the site or interfere with any other party's use of it.</p>
        </div>
      </div>

      <!-- 11 -->
      <div class="legal-section">
        <div class="legal-section-title">11. Governing Law</div>
        <div class="legal-body">
          <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of the State of <strong>North Carolina</strong>, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Wake County, North Carolina.</p>
        </div>
      </div>

      <!-- 12 -->
      <div class="legal-section">
        <div class="legal-section-title">12. Changes to These Terms</div>
        <div class="legal-body">
          <p>TrueLine Property Solutions reserves the right to update or modify these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="legal-contact-box">
        <div class="legal-contact-box-title">Questions About These Terms?</div>
        <p>If you have any questions regarding these Terms &amp; Conditions, please contact us:</p>
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