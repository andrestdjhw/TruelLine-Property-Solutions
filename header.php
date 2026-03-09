<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <!-- Navbar React — aparece en TODAS las páginas -->
    <div id="cre-navbar"></div>

    <!-- El hero (#cre-hero) se monta SOLO en inicio-template.php -->