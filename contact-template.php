<?php
/**
 * Template Name: Contact Template
 *
 * Página de contacto — monta el componente React ContactCRE
 * en el div #cre-contact. El navbar y footer vienen de
 * header.php y footer.php como en el resto del tema.
 *
 * Uso:
 *  1. Copia este archivo a la raíz del tema.
 *  2. En WordPress Admin → Páginas → Contact → Atributos
 *     → Plantilla: selecciona "Contact Template".
 *  3. En src/index.js asegúrate de tener el mount de ContactCRE
 *     (ver comentario al final de este archivo).
 */

get_header(); ?>

<div id="cre-contact"></div>

<?php get_footer(); ?>