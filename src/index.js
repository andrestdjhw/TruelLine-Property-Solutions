import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/NavbarCRE"
import FooterCRE from "./scripts/FooterCRE"
import HeroCRE from "./scripts/HeroCRE"

// ─── NAVBAR — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-navbar")) {
  ReactDOM.createRoot(document.querySelector("#cre-navbar")).render(<Navbar />)
}

// ─── FOOTER — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-footer")) {
  ReactDOM.createRoot(document.querySelector("#cre-footer")).render(<FooterCRE />)
}

// ─── HERO — aparece SOLO en la página de inicio ──────────────────────────
// El div #cre-hero solo existe en inicio-template.php
if (document.querySelector("#cre-hero")) {
  ReactDOM.createRoot(document.querySelector("#cre-hero")).render(<HeroCRE />)
}