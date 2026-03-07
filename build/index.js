/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ExampleReactComponent.js"
/*!**********************************************!*\
  !*** ./src/scripts/ExampleReactComponent.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ExampleReactComponent() {
  const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-md",
    onClick: () => setClickCount(prev => prev + 1),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      className: "text-xl",
      children: "Hello from React!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: "text-sm",
      children: ["You have clicked on this component", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-yellow-200 font-bold",
        children: clickCount
      }), " times."]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleReactComponent);

/***/ },

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

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
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
  const getGridClass = columns => {
    switch (columns.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-2";
    }
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

        .cre-wrap { font-family: 'Barlow', sans-serif; background: #0b0f1a; min-height: 100vh; }

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
          position: sticky; top: 0; z-index: 100;
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
        .cre-logo-mark-text { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:14px; color:white; letter-spacing:-0.02em; }
        .cre-logo-name { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:21px; letter-spacing:0.06em; text-transform:uppercase; color:#fff; line-height:1; }
        .cre-logo-name span { color:#e66414; }
        .cre-logo-sub { font-family:'Barlow',sans-serif; font-size:9.5px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:rgba(150,170,210,0.5); margin-top:2px; }

        /* ── DESKTOP LINKS ── */
        .cre-links { display:flex; align-items:center; list-style:none; gap:0; flex:1; justify-content:center; }
        .cre-link-item { position:relative; }
        .cre-link {
          display:flex; align-items:center; gap:4px; padding:8px 14px;
          font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase;
          color:rgba(190,205,230,0.7); background:none; border:none; cursor:pointer;
          border-radius:4px; transition:color 0.2s, background 0.2s; text-decoration:none;
        }
        .cre-link:hover { color:#fff; background:rgba(255,255,255,0.05); }
        .cre-link.active { color:#fff; }
        .cre-active-line {
          position:absolute; bottom:-1px; left:14px; right:14px;
          height:2px; background:linear-gradient(90deg,#e66414,#ff8c3a);
          border-radius:2px 2px 0 0;
        }
        .cre-chevron { opacity:0.55; transition:transform 0.25s; flex-shrink:0; }
        .cre-chevron.open { transform:rotate(180deg); }

        /* ── MEGA DROPDOWN ── */
        .cre-mega {
          position:absolute; top:calc(100% + 8px); left:50%; transform:translateX(-50%);
          background:#0e1528; border:1px solid rgba(230,100,20,0.2);
          border-radius:6px; padding:20px 24px; z-index:200;
          box-shadow:0 20px 50px rgba(0,0,0,0.6);
          transition:opacity 0.2s, transform 0.2s;
          min-width:220px;
        }
        .cre-mega.open { opacity:1; transform:translateX(-50%) translateY(0); pointer-events:all; }
        .cre-mega.closed { opacity:0; transform:translateX(-50%) translateY(-8px); pointer-events:none; }
        .cre-mega::before {
          content:''; position:absolute; top:-5px; left:50%; transform:translateX(-50%) rotate(45deg);
          width:8px; height:8px; background:#0e1528;
          border-left:1px solid rgba(230,100,20,0.2); border-top:1px solid rgba(230,100,20,0.2);
        }
        .cre-mega-grid { display:grid; gap:24px; }
        .cre-mega-col-title {
          font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700;
          letter-spacing:0.16em; text-transform:uppercase; color:#e66414;
          margin-bottom:10px; padding-bottom:8px;
          border-bottom:1px solid rgba(230,100,20,0.15);
          text-decoration:none; display:block; transition:color 0.2s;
        }
        a.cre-mega-col-title:hover { color:#ff8c3a; }
        .cre-mega-item {
          display:flex; align-items:center; justify-content:space-between;
          padding:7px 10px; border-radius:4px; font-family:'Barlow',sans-serif;
          font-size:13px; font-weight:500; color:rgba(190,205,230,0.7);
          text-decoration:none; transition:all 0.15s; cursor:pointer;
          border:none; background:none; width:100%; text-align:left;
          white-space:nowrap;
        }
        .cre-mega-item:hover { color:#fff; background:rgba(230,100,20,0.1); padding-left:14px; }
        .cre-mega-item-icon { opacity:0.5; flex-shrink:0; margin-left:8px; }
        .cre-mega-item:hover .cre-mega-item-icon { opacity:1; }

        /* ── RIGHT ACTIONS ── */
        .cre-actions { display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .cre-cta {
          display:flex; align-items:center; gap:8px; padding:10px 18px;
          background:#e66414; color:white; border:none; border-radius:4px;
          cursor:pointer; font-family:'Barlow Condensed',sans-serif; font-weight:700;
          font-size:13.5px; letter-spacing:0.12em; text-transform:uppercase;
          box-shadow:0 4px 16px rgba(230,100,20,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition:transform 0.2s, box-shadow 0.2s; white-space:nowrap;
          position:relative; overflow:hidden; text-decoration:none;
        }
        .cre-cta::before {
          content:''; position:absolute; top:0; left:-100%; width:50%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
          transform:skewX(-15deg); transition:left 0.5s;
        }
        .cre-cta:hover::before { left:160%; }
        .cre-cta:hover { background:#f07020; transform:translateY(-2px); box-shadow:0 8px 24px rgba(230,100,20,0.55); }

        /* ── HAMBURGER ── */
        .cre-ham {
          display:none; flex-direction:column; gap:5px; width:40px; height:40px;
          align-items:center; justify-content:center;
          background:rgba(230,100,20,0.08); border:1px solid rgba(230,100,20,0.2);
          border-radius:4px; cursor:pointer; transition:background 0.2s;
        }
        .cre-ham:hover { background:rgba(230,100,20,0.16); }
        .cre-hbar { width:20px; height:2px; background:#e66414; border-radius:2px; transition:all 0.3s; transform-origin:center; }
        .cre-ham.open .cre-hbar:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .cre-ham.open .cre-hbar:nth-child(2) { opacity:0; transform:scaleX(0); }
        .cre-ham.open .cre-hbar:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .cre-mob {
          position:fixed; inset:0; z-index:500; background:#080c18;
          display:flex; flex-direction:column; overflow-y:auto;
          transition:opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-mob.open { opacity:1; transform:none; pointer-events:all; }
        .cre-mob.closed { opacity:0; transform:translateX(100%); pointer-events:none; }
        .cre-mob-head {
          padding:18px 24px; display:flex; align-items:center; justify-content:space-between;
          border-bottom:1px solid rgba(230,100,20,0.15); flex-shrink:0;
        }
        .cre-mob-x {
          width:38px; height:38px; background:rgba(230,100,20,0.1);
          border:1px solid rgba(230,100,20,0.2); border-radius:4px;
          color:#e66414; font-size:18px; display:flex; align-items:center; justify-content:center; cursor:pointer;
        }
        .cre-mob-body { flex:1; padding:16px 24px; }
        .cre-mob-item-btn {
          width:100%; display:flex; justify-content:space-between; align-items:center;
          padding:10px 14px; border-radius:4px; background:none; border:none; cursor:pointer;
          font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:700;
          letter-spacing:0.06em; text-transform:uppercase;
          color:rgba(190,210,240,0.55); transition:all 0.2s; text-align:left;
          border-left:3px solid transparent; text-decoration:none; display:flex;
        }
        .cre-mob-item-btn:hover, .cre-mob-item-btn.active { color:#fff; border-left-color:#e66414; background:rgba(230,100,20,0.06); }
        .cre-mob-chevron { transition:transform 0.25s; opacity:0.5; flex-shrink:0; }
        .cre-mob-chevron.open { transform:rotate(180deg); }
        .cre-mob-submenu { padding:4px 0 8px 16px; }
        .cre-mob-col-title {
          font-family:'Barlow',sans-serif; font-size:10px; font-weight:700;
          letter-spacing:0.16em; text-transform:uppercase; color:#e66414;
          padding:10px 10px 6px; opacity:0.8;
        }
        .cre-mob-sublink {
          display:flex; align-items:center; justify-content:space-between;
          padding:8px 10px; border-radius:4px; margin:2px 0;
          font-family:'Barlow',sans-serif; font-size:13px; font-weight:500;
          color:rgba(190,210,240,0.6); text-decoration:none; transition:all 0.15s;
        }
        .cre-mob-sublink:hover { color:#fff; background:rgba(230,100,20,0.1); }
        .cre-mob-foot { padding:20px 24px; border-top:1px solid rgba(230,100,20,0.12); flex-shrink:0; }
        .cre-mob-cta {
          width:100%; padding:14px; background:#e66414; color:white;
          border:none; border-radius:4px; cursor:pointer;
          font-family:'Barlow Condensed',sans-serif; font-weight:700;
          font-size:15px; letter-spacing:0.12em; text-transform:uppercase;
          display:flex; align-items:center; justify-content:center; gap:8px;
          box-shadow:0 6px 22px rgba(230,100,20,0.4); text-decoration:none;
        }

        @media (max-width: 1024px) {
          .cre-links, .cre-cta { display:none !important; }
          .cre-ham { display:flex !important; }
          .cre-top-left { display:none !important; }
        }

        /* ── HERO DEMO ── */
        .cre-hero {
          min-height: calc(100vh - 108px);
          background: linear-gradient(160deg, #0b0f1a 0%, #0f1628 50%, #0b0f1a 100%);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          text-align:center; padding:60px 24px; position:relative; overflow:hidden;
        }
        .cre-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(230,100,20,0.07) 0%, transparent 70%),
            repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.01) 60px,rgba(255,255,255,0.01) 61px),
            repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.01) 60px,rgba(255,255,255,0.01) 61px);
        }
        .cre-hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(230,100,20,0.1); border:1px solid rgba(230,100,20,0.25);
          color:#e66414; font-family:'Barlow',sans-serif;
          font-size:10.5px; font-weight:700; letter-spacing:0.18em;
          text-transform:uppercase; padding:5px 14px; border-radius:3px; margin-bottom:28px;
        }
        .cre-hero h1 {
          font-family:'Barlow Condensed',sans-serif; font-weight:800;
          font-size:clamp(42px,7.5vw,88px); line-height:0.95;
          letter-spacing:0.02em; text-transform:uppercase; color:#fff; margin-bottom:20px;
        }
        .cre-hero h1 .orange { color:#e66414; }
        .cre-hero p { color:rgba(190,205,235,0.5); font-size:16px; line-height:1.7; max-width:540px; margin-bottom:40px; }
        .cre-hero-btns { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
        .cre-btn-main {
          padding:14px 28px; background:#e66414; color:white; border:none; border-radius:4px;
          cursor:pointer; font-family:'Barlow Condensed',sans-serif; font-weight:700;
          font-size:14px; letter-spacing:0.1em; text-transform:uppercase;
          box-shadow:0 6px 20px rgba(230,100,20,0.4); transition:transform 0.2s, box-shadow 0.2s;
        }
        .cre-btn-main:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(230,100,20,0.5); }
        .cre-btn-ghost {
          padding:14px 28px; background:transparent; color:rgba(190,210,240,0.7);
          border:1px solid rgba(230,100,20,0.28); border-radius:4px; cursor:pointer;
          font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:14px;
          letter-spacing:0.1em; text-transform:uppercase; transition:all 0.2s;
        }
        .cre-btn-ghost:hover { border-color:#e66414; color:#fff; background:rgba(230,100,20,0.06); }

        .cre-demo-btn {
          position:fixed; bottom:20px; right:20px; z-index:400;
          background:rgba(230,100,20,0.12); border:1px solid rgba(230,100,20,0.3);
          color:#e66414; padding:9px 16px; border-radius:4px; cursor:pointer;
          font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase;
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cre-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
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
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: item.link,
                  target: item.external ? "_blank" : undefined,
                  rel: item.external ? "noopener noreferrer" : undefined,
                  className: "cre-link",
                  children: item.name
                })
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-hero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-hero-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M3 9.5L12 3l9 6.5V21H3V9.5z"
            })
          }), "NAICS 23813 \xB7 23839 \xB7 Licensed General Contractor"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
          children: ["Jackson's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "orange",
            children: "Most Complex Projects"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Demand More Than a Framer."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "CRE Construction Group delivers integrated structural execution \u2014 framing, heavy timber, exterior systems, and precision finishes \u2014 for premium residential and resort projects across Teton County"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-hero-btns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "cre-btn-main",
            children: "Request a Quote"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "cre-btn-ghost",
            children: "View Projects"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "cre-demo-btn",
        onClick: () => setIsScrolled(s => !s),
        children: isScrolled ? "▲ Normal" : "▼ Scroll Effect"
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./src/scripts/Person.js"
/*!*******************************!*\
  !*** ./src/scripts/Person.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Person {
  constructor(name) {
    this.name = name;
    this.greet();
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);

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
/* harmony import */ var _scripts_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Person */ "./src/scripts/Person.js");
/* harmony import */ var _scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ExampleReactComponent */ "./src/scripts/ExampleReactComponent.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_FooterCRE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/FooterCRE */ "./src/scripts/FooterCRE.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const person1 = new _scripts_Person__WEBPACK_IMPORTED_MODULE_0__["default"]("Brad");
if (document.querySelector("#render-react-example-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.querySelector("#render-react-example-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
}
if (document.querySelector("#ajs-navbar")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.querySelector("#ajs-navbar")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}
react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.querySelector("#render-footer")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_FooterCRE__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map