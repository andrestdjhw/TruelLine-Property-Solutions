import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/NavbarCRE"
import FooterCRE from "./scripts/FooterCRE"
import HeroCRE from "./scripts/HeroCRE"
import ContactForm from "./scripts/ContactForm"

// ─── NAVBAR — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-navbar")) {
  ReactDOM.createRoot(document.querySelector("#cre-navbar")).render(<Navbar />)
}

// ─── FOOTER — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-footer")) {
  ReactDOM.createRoot(document.querySelector("#cre-footer")).render(<FooterCRE />)
}

// ─── HERO — solo en home-template.php ────────────────────────────────────
if (document.querySelector("#cre-hero")) {
  ReactDOM.createRoot(document.querySelector("#cre-hero")).render(<HeroCRE />)
}

// ─── CONTACT FORM — contact-template.php y cualquier página con el div ──
if (document.querySelector("#cre-contact-form")) {
  ReactDOM.createRoot(document.querySelector("#cre-contact-form")).render(<ContactForm />)
}

// ─── CONTACT FORM — services-template.php ────────────────────────────────
if (document.querySelector("#cre-contact-form-services")) {
  ReactDOM.createRoot(document.querySelector("#cre-contact-form-services")).render(<ContactForm compact={true} />)
}