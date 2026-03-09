/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/FooterCRE.js"
/*!**********************************!*\
  !*** ./src/scripts/FooterCRE.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FooterCRE() {
  // ─── DATOS DEL FOOTER — edita aquí ──────────────────────────────────────
  const company = {
    name: "CRE Construction Group",
    tagline: "Inc. · General Contractors",
    description: "Structural framing, heavy timber, exterior envelope, and interior finishes — delivered with precision from foundation to finish.",
    naics: "NAICS 23813 · 23839",
    phone: "(800) 555-0100",
    phoneHref: "tel:+18005550100",
    email: "info@creconstruction.com",
    address: "1234 Builder Ave, Suite 100",
    city: "Los Angeles, CA 90001",
    license: "Licensed · Bonded · Insured",
    copyright: `© ${new Date().getFullYear()} CRE Construction Group Inc. All rights reserved.`
  };
  const socials = [{
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin"
  }, {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook"
  }, {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram"
  }];
  const footerLinks = [{
    title: "Company",
    items: [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Projects / Portfolio",
      href: "/projects"
    }, {
      name: "Services Overview",
      href: "/services"
    }, {
      name: "Contact",
      href: "/contact"
    }]
  }, {
    title: "Services",
    items: [{
      name: "Structural Framing",
      href: "/services/structural-framing"
    }, {
      name: "Heavy Timber Construction",
      href: "/services/heavy-timber"
    }, {
      name: "Exterior Envelope & Siding",
      href: "/services/exterior-envelope"
    }, {
      name: "Interior Finishes & Drywall",
      href: "/services/interior-finishes"
    }, {
      name: "Residential Remodel",
      href: "/services/residential-remodel"
    }, {
      name: "Commercial (Selective)",
      href: "/services/commercial"
    }]
  }, {
    title: "For General Contractors",
    items: [{
      name: "Subcontractor Capabilities",
      href: "/for-gcs/capabilities"
    }, {
      name: "Pre-Qualification",
      href: "/for-gcs/pre-qualification"
    }, {
      name: "Insurance & Licensing",
      href: "/for-gcs/insurance"
    }, {
      name: "Request a Bid",
      href: "/for-gcs/request-bid"
    }, {
      name: "Download Capabilities Sheet",
      href: "/for-gcs/capabilities-sheet"
    }]
  }];
  // ────────────────────────────────────────────────────────────────────────

  const SocialIcon = ({
    icon
  }) => {
    if (icon === "linkedin") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: "4",
        cy: "4",
        r: "2"
      })]
    });
    if (icon === "facebook") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
      })
    });
    if (icon === "instagram") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "5",
        ry: "5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: "17.5",
        cy: "6.5",
        r: "0.5",
        fill: "currentColor",
        stroke: "none"
      })]
    });
    return null;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .cre-footer {
          background: #080c18;
          border-top: 1px solid rgba(230,100,20,0.18);
          font-family: 'Barlow', sans-serif;
        }

        /* ── CTA BAND ── */
        .cre-footer-cta-band {
          background: linear-gradient(135deg, #0d1220 0%, #111828 100%);
          border-bottom: 1px solid rgba(230,100,20,0.15);
          padding: 48px 32px;
        }
        .cre-footer-cta-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
        }
        .cre-footer-cta-text h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(26px, 3vw, 38px); letter-spacing: 0.04em;
          text-transform: uppercase; color: #fff; line-height: 1; margin-bottom: 8px;
        }
        .cre-footer-cta-text h2 span { color: #e66414; }
        .cre-footer-cta-text p {
          color: rgba(190,205,235,0.5); font-size: 14px; line-height: 1.6; max-width: 480px;
        }
        .cre-footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .cre-footer-btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(230,100,20,0.4);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
          white-space: nowrap;
        }
        .cre-footer-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }
        .cre-footer-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: rgba(190,210,240,0.7);
          border: 1px solid rgba(230,100,20,0.28); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .cre-footer-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.06); }

        /* ── MAIN FOOTER ── */
        .cre-footer-main {
          max-width: 1280px; margin: 0 auto; padding: 56px 32px 40px;
          display: grid; gap: 48px;
          grid-template-columns: 1.6fr repeat(3, 1fr);
        }

        /* Brand column */
        .cre-footer-brand {}
        .cre-footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; text-decoration: none; }
        .cre-footer-logo-hex {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          filter: drop-shadow(0 3px 10px rgba(230,100,20,0.45));
        }
        .cre-footer-logo-hex span {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 14px; color: white;
        }
        .cre-footer-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 19px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; line-height: 1;
        }
        .cre-footer-logo-name span { color: #e66414; }
        .cre-footer-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase; color: rgba(150,170,210,0.45); margin-top: 2px;
        }
        .cre-footer-desc {
          color: rgba(180,195,220,0.45); font-size: 13.5px; line-height: 1.7;
          margin-bottom: 24px;
        }
        .cre-footer-naics {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          color: rgba(230,150,80,0.8); font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 3px;
          margin-bottom: 24px; display: block; width: fit-content;
        }

        /* Contact info */
        .cre-footer-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .cre-footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          color: rgba(180,195,220,0.5); font-size: 13px; line-height: 1.5;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-footer-contact-item:hover { color: #e66414; }
        .cre-footer-contact-icon {
          width: 28px; height: 28px; background: rgba(230,100,20,0.08);
          border: 1px solid rgba(230,100,20,0.15); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }

        /* Socials */
        .cre-footer-socials { display: flex; gap: 8px; }
        .cre-footer-social {
          width: 34px; height: 34px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.18);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: rgba(190,205,230,0.5); text-decoration: none;
          transition: all 0.2s;
        }
        .cre-footer-social:hover { background: rgba(230,100,20,0.18); border-color: #e66414; color: #e66414; transform: translateY(-2px); }

        /* Link columns */
        .cre-footer-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: #e66414;
          margin-bottom: 16px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(230,100,20,0.15);
        }
        .cre-footer-col-links { display: flex; flex-direction: column; gap: 2px; }
        .cre-footer-col-link {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 4px;
          color: rgba(180,195,220,0.5); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: all 0.18s;
          border-left: 2px solid transparent;
        }
        .cre-footer-col-link:hover {
          color: #fff; background: rgba(230,100,20,0.07);
          border-left-color: #e66414; padding-left: 12px;
        }
        .cre-footer-col-link svg { opacity: 0.4; flex-shrink: 0; transition: opacity 0.18s; }
        .cre-footer-col-link:hover svg { opacity: 1; }

        /* ── BOTTOM BAR ── */
        .cre-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 32px;
        }
        .cre-footer-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .cre-footer-copyright {
          color: rgba(150,165,190,0.35); font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
        }
        .cre-footer-license {
          display: flex; align-items: center; gap: 6px;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.18);
          color: rgba(230,150,80,0.6); font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px;
        }
        .cre-footer-license-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; opacity: 0.7; }
        .cre-footer-legal { display: flex; gap: 20px; }
        .cre-footer-legal a {
          color: rgba(150,165,190,0.35); font-size: 11.5px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-footer-legal a:hover { color: rgba(230,150,80,0.8); }

        @media (max-width: 1024px) {
          .cre-footer-main { grid-template-columns: 1fr 1fr; }
          .cre-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .cre-footer-main { grid-template-columns: 1fr; padding: 40px 20px 28px; }
          .cre-footer-brand { grid-column: auto; }
          .cre-footer-cta-band { padding: 36px 20px; }
          .cre-footer-bottom { padding: 18px 20px; }
          .cre-footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
      className: "cre-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cre-footer-cta-band",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-footer-cta-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-footer-cta-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
              children: ["Ready to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "Build"
              }), "?"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "Get a free quote from our team. We partner with general contractors and homeowners across the region."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-footer-cta-btns",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "/contact",
              className: "cre-footer-btn-primary",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                })
              }), "Get a Quote"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "/projects",
              className: "cre-footer-btn-ghost",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  x: "3",
                  y: "3",
                  width: "7",
                  height: "7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  x: "14",
                  y: "3",
                  width: "7",
                  height: "7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  x: "14",
                  y: "14",
                  width: "7",
                  height: "7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  x: "3",
                  y: "14",
                  width: "7",
                  height: "7"
                })]
              }), "View Projects"]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-footer-main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-footer-brand",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/",
            className: "cre-footer-logo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-footer-logo-hex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "CRE"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cre-footer-logo-name",
                children: ["Construction ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Group"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-footer-logo-sub",
                children: "Inc. \xB7 General Contractors"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "cre-footer-desc",
            children: company.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "cre-footer-naics",
            children: company.naics
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-footer-contact",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: company.phoneHref,
              className: "cre-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#e66414",
                  strokeWidth: "2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  })
                })
              }), company.phone]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: `mailto:${company.email}`,
              className: "cre-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#e66414",
                  strokeWidth: "2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                    points: "22,6 12,13 2,6"
                  })]
                })
              }), company.email]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#e66414",
                  strokeWidth: "2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                children: [company.address, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), company.city]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-footer-socials",
            children: socials.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: s.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "cre-footer-social",
              "aria-label": s.name,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SocialIcon, {
                icon: s.icon
              })
            }, s.name))
          })]
        }), footerLinks.map((col, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-footer-col-title",
            children: col.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-footer-col-links",
            children: col.items.map((item, j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.href,
              className: "cre-footer-col-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                width: "10",
                height: "10",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                  points: "9 18 15 12 9 6"
                })
              }), item.name]
            }, j))
          })]
        }, i))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cre-footer-bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-footer-bottom-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "cre-footer-copyright",
            children: company.copyright
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-footer-license",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-footer-license-dot"
            }), company.license]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-footer-legal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/privacy",
              children: "Privacy Policy"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/terms",
              children: "Terms of Use"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/sitemap",
              children: "Sitemap"
            })]
          })]
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterCRE);

/***/ },

/***/ "./src/scripts/HeroCRE.js"
/*!********************************!*\
  !*** ./src/scripts/HeroCRE.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HeroCRE() {
  // ─── DATOS — edita aquí ───────────────────────────────────────────────
  const heroData = {
    eyebrow: "NAICS 23813 · 23839 · Licensed General Contractor",
    headline: ["Built to", "Perform.", "Built to Last."],
    headlineAccent: 1,
    // índice de la línea que va en naranja
    subheadline: "Structural framing, heavy timber, exterior envelope, and interior finishes — delivered with precision from foundation to finish.",
    cta1: {
      label: "Request a Quote",
      href: "/contact"
    },
    cta2: {
      label: "Our Services",
      href: "#services"
    }
  };
  const stats = [{
    value: "20+",
    label: "Years Active"
  }, {
    value: "500+",
    label: "Projects Completed"
  }, {
    value: "NAICS",
    label: "Certified"
  }, {
    value: "24/7",
    label: "GC Support"
  }];
  const services = [{
    href: "/services/structural-framing",
    title: "Structural Framing",
    desc: "Precision wood and steel framing for residential and commercial builds, from foundations to roof.",
    icon: "framing"
  }, {
    href: "/services/heavy-timber",
    title: "Heavy Timber Construction",
    desc: "Exposed timber structures built with craftsmanship — ideal for commercial, hospitality, and custom homes.",
    icon: "timber"
  }, {
    href: "/services/exterior-envelope",
    title: "Exterior Envelope & Siding",
    desc: "Weather-tight building envelopes with fiber cement, composite, and specialty siding systems.",
    icon: "envelope"
  }, {
    href: "/services/interior-finishes",
    title: "Interior Finishes & Drywall",
    desc: "Complete interior finishing from drywall and taping to flooring, trim, and paint-ready surfaces.",
    icon: "interior"
  }, {
    href: "/services/residential-remodel",
    title: "Residential Remodel",
    desc: "Full-scope home renovations: kitchen, bath, additions, and whole-home transformations.",
    icon: "remodel"
  }, {
    href: "/services/commercial",
    title: "Commercial (Selective)",
    desc: "Selective commercial tenant improvements and light commercial builds for the right partners.",
    icon: "commercial"
  }];
  const whyItems = [{
    title: "Licensed & Insured",
    desc: "Fully licensed in all jurisdictions we operate. Comprehensive liability and workers' comp coverage on every job."
  }, {
    title: "GC-Ready",
    desc: "We understand GC workflows. Pre-qualified, documented, and ready to integrate into your project schedule."
  }, {
    title: "On-Time Delivery",
    desc: "We track milestones rigorously and communicate proactively — no surprises on your critical path."
  }, {
    title: "Quality Guarantee",
    desc: "Every project is backed by our workmanship warranty. We stand behind what we build."
  }];
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const servicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Entrada animada al cargar
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Intersection Observer para animaciones al hacer scroll
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cre-in-view");
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    });
    document.querySelectorAll(".cre-reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const ServiceIcon = ({
    type
  }) => {
    const icons = {
      framing: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10"
      }),
      timber: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M17 8h1a4 4 0 010 8h-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
          x1: "6",
          y1: "2",
          x2: "6",
          y2: "4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
          x1: "10",
          y1: "2",
          x2: "10",
          y2: "4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
          x1: "14",
          y1: "2",
          x2: "14",
          y2: "4"
        })]
      }),
      envelope: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "7",
          width: "20",
          height: "14",
          rx: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
        })]
      }),
      interior: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
        })]
      }),
      remodel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
          points: "9 22 9 12 15 12 15 22"
        })]
      }),
      commercial: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "7",
          width: "20",
          height: "14",
          rx: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
          x1: "12",
          y1: "12",
          x2: "12",
          y2: "12"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
          x1: "12",
          y1: "16",
          x2: "12",
          y2: "16"
        })]
      })
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: icons[type]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cre-page { font-family: 'Barlow', sans-serif; background: #f5f3ef; }

        /* ── SCROLL REVEAL ── */
        .cre-reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-reveal.cre-in-view { opacity: 1; transform: translateY(0); }
        .cre-reveal:nth-child(1) { transition-delay: 0s; }
        .cre-reveal:nth-child(2) { transition-delay: 0.1s; }
        .cre-reveal:nth-child(3) { transition-delay: 0.2s; }
        .cre-reveal:nth-child(4) { transition-delay: 0.3s; }
        .cre-reveal:nth-child(5) { transition-delay: 0.4s; }
        .cre-reveal:nth-child(6) { transition-delay: 0.5s; }

        /* ══════════════════════════════════════════
           HERO
        ══════════════════════════════════════════ */
        .cre-hero {
          position: relative; overflow: hidden;
          background: linear-gradient(160deg, #080c18 0%, #0d1525 55%, #0b1020 100%);
          min-height: 92vh;
          display: flex; flex-direction: column;
        }

        /* Watermark logo — igual que SERNA */
        .cre-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%;
        }
        .cre-hero-wm-hex {
          width: min(260px, 28%); opacity: 0.04;
          filter: brightness(100) grayscale(1);
        }

        /* Glows animados */
        .cre-hero-glows {
          position: absolute; inset: 0; z-index: 2; opacity: 1; pointer-events: none;
        }
        .cre-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: creGlow 8s ease-in-out infinite;
        }
        .cre-glow-1 { width: 400px; height: 400px; background: rgba(230,100,20,0.12); top: -100px; left: -100px; }
        .cre-glow-2 { width: 500px; height: 500px; background: rgba(20,60,180,0.1); bottom: -100px; right: -50px; animation-delay: 3s; }
        .cre-glow-3 { width: 300px; height: 300px; background: rgba(230,100,20,0.07); bottom: 0; left: 30%; animation-delay: 5s; }
        @keyframes creGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.15) translate(20px, -20px); opacity: 0.7; }
        }

        /* Grid pattern */
        .cre-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Hero content */
        .cre-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 80px 32px 60px;
          text-align: center;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-hero-content.visible { opacity: 1; transform: translateY(0); }

        .cre-hero-inner { max-width: 900px; margin: 0 auto; }

        .cre-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.28);
          color: #e88040; font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 32px; animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .cre-badge-dot { width: 6px; height: 6px; background: #e66414; border-radius: 50%; animation: crePulse 2s infinite; }
        @keyframes crePulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .cre-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(52px, 9vw, 110px); line-height: 0.92;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 28px;
        }
        .cre-hero h1 .accent {
          color: #e66414;
          text-shadow: 0 0 60px rgba(230,100,20,0.3);
        }

        .cre-hero-sub {
          font-size: clamp(15px, 1.8vw, 18px); line-height: 1.7;
          color: rgba(200,215,240,0.5); max-width: 580px; margin: 0 auto 40px;
        }

        .cre-hero-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px;
        }
        .cre-hero-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 24px rgba(230,100,20,0.45);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .cre-hero-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(230,100,20,0.6); }
        .cre-hero-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: transparent; color: rgba(210,220,240,0.75);
          border: 1px solid rgba(230,100,20,0.3); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .cre-hero-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.07); }

        /* Stats bar */
        .cre-hero-stats {
          display: flex; gap: 0; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
          max-width: 640px; margin: 0 auto;
        }
        .cre-hero-stat {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .cre-hero-stat:last-child { border-right: none; }
        .cre-hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800;
          color: #e66414; letter-spacing: 0.04em; line-height: 1;
        }
        .cre-hero-stat-label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(190,205,235,0.35); margin-top: 4px;
        }

        /* Wave SVG — igual estructura que SERNA */
        .cre-hero-wave {
          position: relative; z-index: 10; margin-top: -2px; line-height: 0;
        }
        .cre-hero-wave svg { display: block; width: 100%; }

        /* ══════════════════════════════════════════
           MAIN CONTENT
        ══════════════════════════════════════════ */
        .cre-main { background: #f5f3ef; }
        .cre-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        /* Section header */
        .cre-section-head { text-align: center; margin-bottom: 52px; }
        .cre-section-label {
          display: inline-block; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase; color: #e66414;
          margin-bottom: 12px;
        }
        .cre-section-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(28px, 4vw, 44px); letter-spacing: 0.02em; text-transform: uppercase;
          color: #1a1410; line-height: 1.05; margin-bottom: 14px;
        }
        .cre-section-title span { color: #e66414; }
        .cre-section-desc { color: #6b6560; font-size: 16px; line-height: 1.7; max-width: 560px; margin: 0 auto; }
        .cre-section-rule {
          width: 48px; height: 3px; background: #e66414; border-radius: 2px; margin: 18px auto 0;
        }

        /* ── SERVICES ── */
        .cre-services-section { padding: 88px 0; }
        .cre-services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .cre-service-card {
          background: #fff; border-radius: 6px;
          box-shadow: 0 2px 20px rgba(26,20,16,0.08), 0 1px 3px rgba(26,20,16,0.05);
          overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .cre-service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,20,16,0.14); }
        .cre-service-card-top {
          height: 160px;
          background: linear-gradient(135deg, #0d1525 0%, #162040 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .cre-service-card-top::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(230,100,20,0.12), transparent 60%);
        }
        .cre-service-card-top svg { color: rgba(230,150,80,0.85); position: relative; z-index: 1; }
        .cre-service-card-body { padding: 24px; }
        /* Watermark en cards — igual que SERNA .card-watermark::after */
        .cre-service-card::after {
          content: ''; position: absolute; bottom: 12px; right: 12px;
          width: 70px; height: 70px; pointer-events: none; z-index: 0;
          background: url('/wp-content/uploads/2026/02/logo-cre-watermark.png') no-repeat center/contain;
          opacity: 0.04; filter: grayscale(100%) brightness(0);
        }
        .cre-service-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 20px; letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 10px; position: relative; z-index: 1;
        }
        .cre-service-card-desc {
          color: #6b6560; font-size: 13.5px; line-height: 1.65; margin-bottom: 18px;
          position: relative; z-index: 1;
        }
        .cre-service-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #e66414; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s; position: relative; z-index: 1;
        }
        .cre-service-link:hover { gap: 10px; }
        .cre-service-link svg { transition: transform 0.2s; }
        .cre-service-link:hover svg { transform: translateX(3px); }

        /* ── WHY US ── */
        .cre-why-section {
          padding: 88px 0;
          background: linear-gradient(160deg, #0d1525 0%, #111e35 100%);
          position: relative; overflow: hidden;
        }
        .cre-why-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(230,100,20,0.07) 0%, transparent 65%),
            repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),
            repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px);
        }
        .cre-why-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px; position: relative; z-index: 1;
        }
        .cre-why-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; padding: 28px 28px 28px 24px;
          border-left: 3px solid #e66414;
          transition: background 0.2s, border-color 0.2s;
        }
        .cre-why-card:hover { background: rgba(230,100,20,0.05); border-left-color: #ff8c3a; }
        .cre-why-card-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 18px;
          letter-spacing: 0.06em; text-transform: uppercase; color: #e8ddd0; margin-bottom: 10px;
        }
        .cre-why-card-desc { color: rgba(200,215,240,0.45); font-size: 14px; line-height: 1.65; }
        .cre-why-section .cre-section-title { color: #e8ddd0; }
        .cre-why-section .cre-section-desc { color: rgba(200,215,240,0.45); }
        .cre-why-section .cre-section-label { color: #e88040; }

        /* ── CTA SECTION ── */
        .cre-cta-section {
          padding: 88px 0;
          background: #f5f3ef;
        }
        .cre-cta-box {
          background: #fff; border-radius: 8px;
          box-shadow: 0 4px 40px rgba(26,20,16,0.1);
          padding: 64px 48px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cre-cta-box::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(230,100,20,0.04) 0%, transparent 70%);
        }
        .cre-cta-box h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(30px, 4vw, 48px); letter-spacing: 0.03em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 14px; position: relative; z-index: 1;
        }
        .cre-cta-box h2 span { color: #e66414; }
        .cre-cta-box p {
          color: #6b6560; font-size: 16px; line-height: 1.7;
          max-width: 520px; margin: 0 auto 36px; position: relative; z-index: 1;
        }
        .cre-cta-box-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .cre-cta-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(230,100,20,0.38); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .cre-cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.5); }
        .cre-cta-btn-ghost {
          padding: 14px 28px; background: transparent; color: #1a1410;
          border: 2px solid rgba(26,20,16,0.2); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .cre-cta-btn-ghost:hover { border-color: #e66414; color: #e66414; }

        /* ── MAP ── */
        .cre-map-section { padding: 0 0 88px; }
        .cre-map-wrap {
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 4px 30px rgba(26,20,16,0.12);
        }
        .cre-map-wrap iframe { display: block; }

        @media (max-width: 1024px) {
          .cre-services-grid { grid-template-columns: repeat(2, 1fr); }
          .cre-why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .cre-services-grid { grid-template-columns: 1fr; }
          .cre-hero-stats { flex-direction: column; }
          .cre-hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .cre-hero-stat:last-child { border-bottom: none; }
          .cre-container { padding: 0 20px; }
          .cre-cta-box { padding: 40px 24px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cre-page",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
        className: "cre-hero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-hero-wm",
          "aria-hidden": "true",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            className: "cre-hero-wm-hex",
            viewBox: "0 0 46 50",
            fill: "white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M10 19L23 12L36 19",
              stroke: "white",
              strokeWidth: "2",
              fill: "none"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M10 19L10 30L23 24L36 30L36 19",
              fill: "rgba(255,255,255,0.3)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M19 24H27V33H19z",
              fill: "rgba(255,255,255,0.4)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            className: "cre-hero-wm-hex",
            viewBox: "0 0 46 50",
            fill: "white",
            style: {
              transform: "scaleX(-1)"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M23 2L42 10V26C42 36 34 44 23 48C12 44 4 36 4 26V10L23 2Z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M10 19L23 12L36 19",
              stroke: "white",
              strokeWidth: "2",
              fill: "none"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M10 19L10 30L23 24L36 30L36 19",
              fill: "rgba(255,255,255,0.3)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M19 24H27V33H19z",
              fill: "rgba(255,255,255,0.4)"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-hero-glows",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-glow cre-glow-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-glow cre-glow-2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-glow cre-glow-3"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-hero-grid"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: `cre-hero-content ${visible ? "visible" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-hero-inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-hero-badge",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-badge-dot"
              }), heroData.eyebrow]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
              children: heroData.headline.map((line, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                className: i === heroData.headlineAccent ? "accent" : "",
                children: [line, i < heroData.headline.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
              }, i))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "cre-hero-sub",
              children: heroData.subheadline
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-hero-btns",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: heroData.cta1.href,
                className: "cre-hero-btn-main",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  })
                }), heroData.cta1.label]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: heroData.cta2.href,
                className: "cre-hero-btn-ghost",
                children: [heroData.cta2.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                    points: "9 18 15 12 9 6"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-hero-stats",
              children: stats.map((s, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cre-hero-stat",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-hero-stat-val",
                  children: s.value
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-hero-stat-label",
                  children: s.label
                })]
              }, i))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-hero-wave",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            viewBox: "0 0 1440 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "none",
            style: {
              height: "clamp(40px, 6vw, 80px)"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z",
              fill: "#f5f3ef"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
          id: "services",
          className: "cre-services-section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-section-head cre-reveal",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cre-section-label",
                children: "What We Build"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                className: "cre-section-title",
                children: ["Our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Services"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "cre-section-desc",
                children: "From structural framing to interior finishes \u2014 complete construction capabilities under one reliable partner."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-section-rule"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-services-grid",
              children: services.map((s, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cre-service-card cre-reveal",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-service-card-top",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ServiceIcon, {
                    type: s.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cre-service-card-body",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "cre-service-card-title",
                    children: s.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    className: "cre-service-card-desc",
                    children: s.desc
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                    href: s.href,
                    className: "cre-service-link",
                    children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                        points: "9 18 15 12 9 6"
                      })
                    })]
                  })]
                })]
              }, i))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
          className: "cre-why-section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-section-head cre-reveal",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cre-section-label",
                children: "Why CRE"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                className: "cre-section-title",
                style: {
                  color: "#e8ddd0"
                },
                children: ["Built on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Trust"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "cre-section-desc",
                style: {
                  color: "rgba(200,215,240,0.45)"
                },
                children: "We don't just build structures \u2014 we build partnerships with general contractors and homeowners who demand more."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-section-rule"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-why-grid",
              children: whyItems.map((w, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cre-why-card cre-reveal",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-why-card-title",
                  children: w.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "cre-why-card-desc",
                  children: w.desc
                })]
              }, i))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
          className: "cre-cta-section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-cta-box cre-reveal",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                children: ["Ready to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Start"
                }), " Your Project?"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "Tell us about your build. We'll review your plans and get back to you with a clear, competitive proposal."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cre-cta-box-btns",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                  href: "/contact",
                  className: "cre-cta-btn-main",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                      d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    })
                  }), "Request a Quote"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "/for-gcs",
                  className: "cre-cta-btn-ghost",
                  children: "General Contractor Portal"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "/projects",
                  className: "cre-cta-btn-ghost",
                  children: "View Projects"
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
          className: "cre-map-section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-section-head cre-reveal",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cre-section-label",
                children: "Find Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                className: "cre-section-title",
                children: ["Our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Location"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-section-rule"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-map-wrap cre-reveal",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405069536!2d-118.69192!3d34.02016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fefa34c8f2cbc!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1234567890",
                width: "100%",
                height: "480",
                style: {
                  border: 0
                },
                allowFullScreen: "",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: "CRE Construction Group Location"
              })
            })]
          })
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCRE);

/***/ },

/***/ "./src/scripts/NavbarCRE.js"
/*!**********************************!*\
  !*** ./src/scripts/NavbarCRE.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Navbar() {
  const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [activeDropdown, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleDropdown = name => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  // ─── DATOS DEL NAVBAR — edita aquí para cambiar links ───────────────────
  const navItems = [{
    name: "Home",
    link: "/",
    hasDropdown: false
  }, {
    name: "About",
    link: "/about",
    hasDropdown: false
  }, {
    name: "Services",
    link: "/services",
    hasDropdown: true,
    columns: [{
      title: "Structural",
      items: [{
        name: "Structural Framing",
        link: "/services/structural-framing"
      }, {
        name: "Heavy Timber Construction",
        link: "/services/heavy-timber"
      }]
    }, {
      title: "Exterior",
      items: [{
        name: "Exterior Envelope & Siding",
        link: "/services/exterior-envelope"
      }]
    }, {
      title: "Interior & Remodel",
      items: [{
        name: "Interior Finishes & Drywall",
        link: "/services/interior-finishes"
      }, {
        name: "Residential Remodel",
        link: "/services/residential-remodel"
      }, {
        name: "Commercial (Selective)",
        link: "/services/commercial"
      }]
    }]
  }, {
    name: "Projects",
    link: "/projects",
    hasDropdown: false
  }, {
    name: "For GCs",
    link: "/for-gcs",
    hasDropdown: true,
    columns: [{
      title: "General Contractors",
      items: [{
        name: "Subcontractor Capabilities",
        link: "/for-gcs/capabilities"
      }, {
        name: "Pre-Qualification",
        link: "/for-gcs/pre-qualification"
      }, {
        name: "Insurance & Licensing",
        link: "/for-gcs/insurance"
      }, {
        name: "Safety Standards",
        link: "/for-gcs/safety"
      }]
    }, {
      title: "Resources",
      items: [{
        name: "Request a Bid",
        link: "/for-gcs/request-bid"
      }, {
        name: "Download Capabilities Sheet",
        link: "/for-gcs/capabilities-sheet"
      }]
    }]
  }, {
    name: "Contact",
    link: "/contact",
    hasDropdown: false
  }];
  // ────────────────────────────────────────────────────────────────────────

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── TOP BAR ── */
        .cre-top {
          background: #060a14;
          border-bottom: 1px solid rgba(230,100,20,0.18);
          height: 36px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .cre-top-left { display: flex; align-items: center; gap: 18px; }
        .cre-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(200,210,230,0.45); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .cre-top-item:hover { color: #e66414; }
        .cre-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.08); }
        .cre-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(230,100,20,0.12); border: 1px solid rgba(230,100,20,0.28);
          color: #e66414; font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        .cre-dot { width: 5px; height: 5px; background: #e66414; border-radius: 50%; animation: crePulse 2s infinite; }
        @keyframes crePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        /* ── NAVBAR ── */
        .cre-nav {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cre-nav.top { background: #0d1220; }
        .cre-nav.scrolled {
          background: rgba(8,12,22,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(230,100,20,0.2);
        }
        .cre-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-inner.scrolled { height: 60px; }

        /* ── LOGO ── */
        .cre-logo { display: flex; align-items: center; gap: 13px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .cre-logo-mark {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 4px 12px rgba(230,100,20,0.5));
        }
        .cre-logo:hover .cre-logo-mark { transform: rotate(30deg) scale(1.08); filter: drop-shadow(0 6px 18px rgba(230,100,20,0.7)); }
        .cre-logo-mark-text { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 14px; color: white; letter-spacing: -0.02em; }
        .cre-logo-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 21px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; line-height: 1; }
        .cre-logo-name span { color: #e66414; }
        .cre-logo-sub { font-family: 'Barlow', sans-serif; font-size: 9.5px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(150,170,210,0.5); margin-top: 2px; }

        /* ── DESKTOP LINKS ── */
        .cre-links { display: flex; align-items: center; list-style: none; gap: 0; flex: 1; justify-content: center; }
        .cre-link-item { position: relative; }
        .cre-link {
          display: flex; align-items: center; gap: 4px; padding: 8px 14px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(190,205,230,0.7); background: none; border: none; cursor: pointer;
          border-radius: 4px; transition: color 0.2s, background 0.2s; text-decoration: none;
        }
        .cre-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .cre-link.active { color: #fff; }
        .cre-active-line {
          position: absolute; bottom: -1px; left: 14px; right: 14px;
          height: 2px; background: linear-gradient(90deg, #e66414, #ff8c3a);
          border-radius: 2px 2px 0 0;
        }
        .cre-chevron { opacity: 0.55; transition: transform 0.25s; flex-shrink: 0; }
        .cre-chevron.open { transform: rotate(180deg); }

        /* ── MEGA DROPDOWN ── */
        .cre-mega {
          position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: #0e1528; border: 1px solid rgba(230,100,20,0.2);
          border-radius: 6px; padding: 20px 24px; z-index: 200;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          transition: opacity 0.2s, transform 0.2s;
          min-width: 220px;
        }
        .cre-mega.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .cre-mega.closed { opacity: 0; transform: translateX(-50%) translateY(-8px); pointer-events: none; }
        .cre-mega::before {
          content: ''; position: absolute; top: -5px; left: 50%; transform: translateX(-50%) rotate(45deg);
          width: 8px; height: 8px; background: #0e1528;
          border-left: 1px solid rgba(230,100,20,0.2); border-top: 1px solid rgba(230,100,20,0.2);
        }
        .cre-mega-grid { display: grid; gap: 24px; }
        .cre-mega-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: #e66414;
          margin-bottom: 10px; padding-bottom: 8px;
          border-bottom: 1px solid rgba(230,100,20,0.15);
          text-decoration: none; display: block; transition: color 0.2s;
        }
        a.cre-mega-col-title:hover { color: #ff8c3a; }
        .cre-mega-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 7px 10px; border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; color: rgba(190,205,230,0.7);
          text-decoration: none; transition: all 0.15s; cursor: pointer;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
        }
        .cre-mega-item:hover { color: #fff; background: rgba(230,100,20,0.1); padding-left: 14px; }
        .cre-mega-item-icon { opacity: 0.5; flex-shrink: 0; margin-left: 8px; }
        .cre-mega-item:hover .cre-mega-item-icon { opacity: 1; }

        /* ── RIGHT ACTIONS ── */
        .cre-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .cre-cta {
          display: flex; align-items: center; gap: 8px; padding: 10px 18px;
          background: #e66414; color: white; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13.5px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(230,100,20,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s; white-space: nowrap;
          position: relative; overflow: hidden; text-decoration: none;
        }
        .cre-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cre-cta:hover::before { left: 160%; }
        .cre-cta:hover { background: #f07020; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }

        /* ── HAMBURGER ── */
        .cre-ham {
          display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .cre-ham:hover { background: rgba(230,100,20,0.16); }
        .cre-hbar { width: 20px; height: 2px; background: #e66414; border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .cre-ham.open .cre-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .cre-ham.open .cre-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .cre-ham.open .cre-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .cre-mob {
          position: fixed; inset: 0; z-index: 500; background: #080c18;
          display: flex; flex-direction: column; overflow-y: auto;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .cre-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .cre-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(230,100,20,0.15); flex-shrink: 0;
        }
        .cre-mob-x {
          width: 38px; height: 38px; background: rgba(230,100,20,0.1);
          border: 1px solid rgba(230,100,20,0.2); border-radius: 4px;
          color: #e66414; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cre-mob-body { flex: 1; padding: 16px 24px; }
        .cre-mob-item-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border-radius: 4px; background: none; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(190,210,240,0.55); transition: all 0.2s; text-align: left;
          border-left: 3px solid transparent; text-decoration: none;
        }
        .cre-mob-item-btn:hover, .cre-mob-item-btn.active { color: #fff; border-left-color: #e66414; background: rgba(230,100,20,0.06); }
        .cre-mob-chevron { transition: transform 0.25s; opacity: 0.5; flex-shrink: 0; }
        .cre-mob-chevron.open { transform: rotate(180deg); }
        .cre-mob-submenu { padding: 4px 0 8px 16px; }
        .cre-mob-col-title {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: #e66414;
          padding: 10px 10px 6px; opacity: 0.8;
        }
        .cre-mob-sublink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 4px; margin: 2px 0;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(190,210,240,0.6); text-decoration: none; transition: all 0.15s;
        }
        .cre-mob-sublink:hover { color: #fff; background: rgba(230,100,20,0.1); }
        .cre-mob-foot { padding: 20px 24px; border-top: 1px solid rgba(230,100,20,0.12); flex-shrink: 0; }
        .cre-mob-cta {
          width: 100%; padding: 14px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px rgba(230,100,20,0.4); text-decoration: none;
        }

        @media (max-width: 1024px) {
          .cre-links, .cre-cta { display: none !important; }
          .cre-ham { display: flex !important; }
          .cre-top-left { display: none !important; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cre-top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-top-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "tel:+18005550100",
          className: "cre-top-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            })
          }), "(800) 555-0100"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "mailto:info@creconstruction.com",
          className: "cre-top-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "22,6 12,13 2,6"
            })]
          }), "info@creconstruction.com"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-top-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-dot"
          }), "Licensed & Insured"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-top-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
            cx: "12",
            cy: "10",
            r: "3"
          })]
        }), "NAICS 23813 \xB7 23839"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `cre-nav ${isScrolled ? "scrolled" : "top"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `cre-inner ${isScrolled ? "scrolled" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "cre-logo",
          href: "/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-logo-mark",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "cre-logo-mark-text",
              children: "CRE"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cre-logo-name",
              children: ["Construction ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "Group"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-logo-sub",
              children: "Inc. \xB7 General Contractors"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "cre-links",
          children: navItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "cre-link-item",
            children: item.hasDropdown ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: `cre-link ${activeDropdown === item.name ? "active" : ""}`,
                onMouseEnter: () => setActiveDropdown(item.name),
                onClick: () => toggleDropdown(item.name),
                children: [item.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  className: `cre-chevron ${activeDropdown === item.name ? "open" : ""}`,
                  width: "11",
                  height: "11",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                    points: "6 9 12 15 18 9"
                  })
                })]
              }), activeDropdown === item.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-active-line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: `cre-mega ${activeDropdown === item.name ? "open" : "closed"}`,
                style: {
                  width: `${Math.min(item.columns.length * 220, 700)}px`
                },
                onMouseEnter: () => setActiveDropdown(item.name),
                onMouseLeave: () => setActiveDropdown(null),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-mega-grid",
                  style: {
                    gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`
                  },
                  children: item.columns.map((col, colIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    children: [col.link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: col.link,
                      className: "cre-mega-col-title",
                      children: col.title
                    }) : col.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "cre-mega-col-title",
                      children: col.title
                    }), col.items.map((sub, subIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                      href: sub.link,
                      target: sub.external ? "_blank" : undefined,
                      rel: sub.external ? "noopener noreferrer" : undefined,
                      className: "cre-mega-item",
                      children: [sub.name, sub.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                        className: "cre-mega-item-icon",
                        width: "11",
                        height: "11",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                          points: "15 3 21 3 21 9"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                          x1: "10",
                          y1: "14",
                          x2: "21",
                          y2: "3"
                        })]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        className: "cre-mega-item-icon",
                        width: "11",
                        height: "11",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                          points: "9 18 15 12 9 6"
                        })
                      })]
                    }, subIdx))]
                  }, colIdx))
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: item.link,
              target: item.external ? "_blank" : undefined,
              rel: item.external ? "noopener noreferrer" : undefined,
              className: "cre-link",
              children: item.name
            })
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "tel:+18005550100",
            className: "cre-cta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              width: "13",
              height: "13",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              })
            }), "Get a Quote"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            className: `cre-ham ${menuOpen ? "open" : ""}`,
            onClick: () => setMenuOpen(true),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-hbar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-hbar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-hbar"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `cre-mob ${menuOpen ? "open" : "closed"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-mob-head",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "cre-logo",
          href: "/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              width: 34,
              height: 34,
              background: "#e66414",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              style: {
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 12,
                color: "white"
              },
              children: "CRE"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-logo-name",
            style: {
              fontSize: 18
            },
            children: ["Construction ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "Group"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "cre-mob-x",
          onClick: () => setMenuOpen(false),
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cre-mob-body",
        children: navItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: item.hasDropdown ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              className: `cre-mob-item-btn ${activeDropdown === item.name ? "active" : ""}`,
              onClick: () => toggleDropdown(item.name),
              children: [item.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: `cre-mob-chevron ${activeDropdown === item.name ? "open" : ""}`,
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                  points: "6 9 12 15 18 9"
                })
              })]
            }), activeDropdown === item.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cre-mob-submenu",
              children: item.columns.map((col, colIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [col.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cre-mob-col-title",
                  children: col.title
                }), col.items.map((sub, subIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                  href: sub.link,
                  target: sub.external ? "_blank" : undefined,
                  rel: sub.external ? "noopener noreferrer" : undefined,
                  className: "cre-mob-sublink",
                  onClick: () => setMenuOpen(false),
                  children: [sub.name, sub.external && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                    width: "11",
                    height: "11",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                      points: "15 3 21 3 21 9"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                      x1: "10",
                      y1: "14",
                      x2: "21",
                      y2: "3"
                    })]
                  })]
                }, subIdx))]
              }, colIdx))
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: item.link,
            target: item.external ? "_blank" : undefined,
            rel: item.external ? "noopener noreferrer" : undefined,
            className: "cre-mob-item-btn",
            onClick: () => setMenuOpen(false),
            children: item.name
          })
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cre-mob-foot",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "tel:+18005550100",
          className: "cre-mob-cta",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            })
          }), "Get a Quote"]
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./node_modules/react-dom/client.js"
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _scripts_NavbarCRE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/NavbarCRE */ "./src/scripts/NavbarCRE.js");
/* harmony import */ var _scripts_FooterCRE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/FooterCRE */ "./src/scripts/FooterCRE.js");
/* harmony import */ var _scripts_HeroCRE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/HeroCRE */ "./src/scripts/HeroCRE.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ─── NAVBAR — aparece en TODAS las páginas ───────────────────────────────

if (document.querySelector("#cre-navbar")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-navbar")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_NavbarCRE__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}

// ─── FOOTER — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-footer")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-footer")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_FooterCRE__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}

// ─── HERO — aparece SOLO en la página de inicio ──────────────────────────
// El div #cre-hero solo existe en inicio-template.php
if (document.querySelector("#cre-hero")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-hero")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_HeroCRE__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map