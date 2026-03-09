<?php
/**
 * Template Name: Home Template
 * Template Post Type: page
 *
 * Estructura:
 *   header.php  →  monta #cre-navbar  (sticky, todas las páginas)
 *   #cre-hero   →  HeroCRE.jsx        (hero + servicios + CTA, solo inicio)
 *   footer.php  →  monta #cre-footer  (todas las páginas)
 */

get_header(); ?>

<!-- Hero + Homepage Content (React) -->
<div id="cre-hero"></div>

<?php get_footer(); ?>