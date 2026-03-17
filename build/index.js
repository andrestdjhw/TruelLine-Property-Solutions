/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * ContactForm — componente reutilizable de formulario de contacto.
 * Se monta en cualquier div con id="cre-contact-form".
 *
 * Props (opcionales):
 *   - compact: bool  — versión sin padding exterior para embeber en tarjeta
 */

function ContactForm({
  compact = false
}) {
  // ─── DATOS — edita aquí ──────────────────────────────────────────────────
  const services = ["Landscaping", "Hardscape & Concrete", "Drainage & Erosion Control", "Tree Services", "Exterior Cleaning", "Property Preparation", "Not sure yet — I need advice"];
  // ────────────────────────────────────────────────────────────────────────

  const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = e => setFormState(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: conectar con CF7, WPForms, o endpoint propio
    setSubmitted(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cf-wrap {
          background: #fff; border-radius: 6px;
          padding: ${compact ? "28px 24px" : "44px 40px"};
          box-shadow: 0 2px 24px rgba(26,20,16,0.09);
          font-family: 'Barlow', sans-serif;
        }
        .cf-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 26px; letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1410; margin-bottom: 6px;
        }
        .cf-title span { color: #4aa050; }
        .cf-sub { color: #9a8f86; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
        .cf-rule { width: 36px; height: 3px; background: #4aa050; border-radius: 2px; margin-bottom: 28px; }

        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
        .cf-row.full { grid-template-columns: 1fr; }
        .cf-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 18px; }
        .cf-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #6b6560;
        }
        .cf-label span { color: #4aa050; }

        .cf-input, .cf-select, .cf-textarea {
          width: 100%; padding: 11px 14px;
          background: #faf8f5; border: 1.5px solid #e8e2dc;
          border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 14px; color: #1a1410;
          transition: border-color 0.2s, box-shadow 0.2s; outline: none;
          appearance: none; -webkit-appearance: none;
        }
        .cf-input:focus, .cf-select:focus, .cf-textarea:focus {
          border-color: #4aa050; box-shadow: 0 0 0 3px rgba(74,160,80,0.1);
          background: #fff;
        }
        .cf-textarea { resize: vertical; min-height: 120px; }
        .cf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234aa050' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 40px; cursor: pointer;
        }

        .cf-submit {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; padding: 14px 24px; background: #4aa050; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(74,160,80,0.38);
          transition: transform 0.2s, box-shadow 0.2s; margin-top: 6px;
          position: relative; overflow: hidden;
        }
        .cf-submit::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cf-submit:hover::before { left: 160%; }
        .cf-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(74,160,80,0.5); }

        /* Success state */
        .cf-success { text-align: center; padding: 32px 20px; }
        .cf-success-icon {
          width: 56px; height: 56px; background: rgba(74,160,80,0.1);
          border: 2px solid rgba(74,160,80,0.3); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
        }
        .cf-success h3 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 24px;
          letter-spacing: 0.04em; text-transform: uppercase; color: #1a1410; margin-bottom: 10px;
        }
        .cf-success h3 span { color: #4aa050; }
        .cf-success p { color: #9a8f86; font-size: 14px; line-height: 1.65; }

        @media (max-width: 540px) {
          .cf-row { grid-template-columns: 1fr; }
          .cf-wrap { padding: 24px 18px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-wrap",
      children: submitted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-success",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cf-success-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#4aa050",
            strokeWidth: "2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "20 6 9 17 4 12"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
          children: ["Message ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "Sent!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Thanks for reaching out. We'll review your request and get back to you within 1 business day with a free estimate."
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cf-title",
          children: ["Request a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "Free Quote"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cf-sub",
          children: "Tell us about your property and what you need \u2014 we'll get back to you within 1 business day."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cf-rule"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cf-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
                className: "cf-label",
                children: ["Full Name ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                className: "cf-input",
                type: "text",
                name: "name",
                placeholder: "Jane Smith",
                required: true,
                value: formState.name,
                onChange: handleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
                className: "cf-label",
                children: ["Email ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                className: "cf-input",
                type: "email",
                name: "email",
                placeholder: "jane@email.com",
                required: true,
                value: formState.email,
                onChange: handleChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cf-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                className: "cf-label",
                children: "Phone"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                className: "cf-input",
                type: "tel",
                name: "phone",
                placeholder: "(919) 000-0000",
                value: formState.phone,
                onChange: handleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
                className: "cf-label",
                children: ["Service Needed ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
                className: "cf-select",
                name: "service",
                required: true,
                value: formState.service,
                onChange: handleChange,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: "",
                  children: "\u2014 Select a service \u2014"
                }), services.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: s,
                  children: s
                }, s))]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cf-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
              className: "cf-label",
              children: ["Project Description ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
              className: "cf-textarea",
              name: "message",
              placeholder: "Describe your property, the work you need, and any relevant details \u2014 location, size, timeline...",
              required: true,
              value: formState.message,
              onChange: handleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "submit",
            className: "cf-submit",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                points: "22 2 15 22 11 13 2 9 22 2"
              })]
            }), "Send My Request"]
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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
    name: "TrueLine Property Solutions",
    tagline: "Exterior Property Services · North Carolina",
    description: "TrueLine Property Solutions is a full-service exterior contractor serving the Triangle and Triad of North Carolina. Landscaping, hardscape, drainage, tree services, exterior cleaning, and property preparation — one team, one standard.",
    phone: "(919) 951-8341",
    phoneHref: "tel:+19199518341",
    email: "navaslandscapenc1@gmail.com",
    emailHref: "mailto:navaslandscapenc1@gmail.com",
    location: "The Triangle & Triad — North Carolina",
    license: "Licensed & Insured",
    copyright: `© ${new Date().getFullYear()} TrueLine Property Solutions. All Rights Reserved.`
    // DEV NOTE: Update year as needed. Add BBB badge and Licensed & Insured badge in footer.
  };
  const socials = [{
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook"
  }, {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram"
  }];
  const footerLinks = [{
    title: "Services",
    items: [{
      name: "Landscaping",
      href: "/services/landscaping"
    }, {
      name: "Hardscape & Concrete",
      href: "/services/hardscape-concrete"
    }, {
      name: "Drainage & Erosion Control",
      href: "/services/drainage-erosion-control"
    }, {
      name: "Tree Services",
      href: "/services/tree-services"
    }, {
      name: "Exterior Cleaning",
      href: "/services/exterior-cleaning"
    }, {
      name: "Property Preparation",
      href: "/services/property-preparation"
    }]
  }, {
    title: "Quick Links",
    items: [{
      name: "Home",
      href: "/"
    }, {
      name: "About Us",
      href: "/about"
    }, {
      name: "Gallery",
      href: "/gallery"
    }, {
      name: "Contact Us",
      href: "/contact"
    }, {
      name: "Privacy Policy",
      href: "/privacy"
    }, {
      name: "Terms & Conditions",
      href: "/terms"
    }]
  }];
  // ────────────────────────────────────────────────────────────────────────

  const SocialIcon = ({
    icon
  }) => {
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

        .tl-footer {
          background: #080c18;
          border-top: 1px solid rgba(74,160,80,0.18);
          font-family: 'Barlow', sans-serif;
        }

        /* ── CTA BAND ── */
        .tl-footer-cta-band {
          background: linear-gradient(135deg, #0a1410 0%, #0f1e14 100%);
          border-bottom: 1px solid rgba(74,160,80,0.15);
          padding: 48px 32px;
        }
        .tl-footer-cta-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
        }
        .tl-footer-cta-text h2 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(24px, 2.8vw, 36px); letter-spacing: 0.04em;
          text-transform: uppercase; color: #fff; line-height: 1.1; margin-bottom: 8px;
        }
        .tl-footer-cta-text h2 span { color: #4aa050; }
        .tl-footer-cta-text p {
          color: rgba(190,210,235,0.5); font-size: 14px; line-height: 1.6; max-width: 480px;
        }
        .tl-footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .tl-footer-btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: #4aa050; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(74,160,80,0.4);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(74,160,80,0.55); }
        .tl-footer-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: rgba(190,210,240,0.7);
          border: 1px solid rgba(74,160,80,0.28); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-ghost:hover { border-color: #4aa050; color: #fff; background: rgba(74,160,80,0.07); }

        /* ── MAIN FOOTER ── */
        .tl-footer-main {
          max-width: 1280px; margin: 0 auto; padding: 56px 32px 40px;
          display: grid; gap: 48px;
          grid-template-columns: 1.8fr 1fr 1fr;
        }

        /* Brand column */
        .tl-footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; text-decoration: none; }
        .tl-footer-logo-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          filter: drop-shadow(0 3px 10px rgba(74,160,80,0.45));
        }
        .tl-footer-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 19px; letter-spacing: 0.05em; text-transform: uppercase; color: #fff; line-height: 1;
        }
        .tl-footer-logo-name span { color: #4aa050; }
        .tl-footer-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase; color: rgba(150,170,210,0.4); margin-top: 2px;
        }

        /* Tagline */
        .tl-footer-tagline {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(100,200,110,0.7); margin-bottom: 14px;
          border-left: 3px solid rgba(74,160,80,0.35); padding-left: 12px;
        }

        .tl-footer-desc {
          color: rgba(180,195,220,0.45); font-size: 13.5px; line-height: 1.75; margin-bottom: 24px;
        }

        /* Contact info */
        .tl-footer-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .tl-footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          color: rgba(180,195,220,0.5); font-size: 13px; line-height: 1.5;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-contact-item:hover { color: #4aa050; }
        .tl-footer-contact-icon {
          width: 28px; height: 28px; background: rgba(74,160,80,0.08);
          border: 1px solid rgba(74,160,80,0.18); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }

        /* Badges row */
        .tl-footer-badges { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .tl-footer-badge {
          display: flex; align-items: center; gap: 6px;
          background: rgba(74,160,80,0.08); border: 1px solid rgba(74,160,80,0.22);
          color: rgba(100,200,110,0.75); font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }
        .tl-footer-badge-dot { width: 5px; height: 5px; background: #4aa050; border-radius: 50%; opacity: 0.8; }
        /* DEV NOTE: Replace .tl-footer-badge-bbb with actual BBB logo image when available */
        .tl-footer-badge-bbb {
          display: flex; align-items: center; gap: 6px;
          background: rgba(74,160,80,0.05); border: 1px dashed rgba(74,160,80,0.2);
          color: rgba(100,200,110,0.45); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }

        /* Socials */
        .tl-footer-socials { display: flex; gap: 8px; }
        .tl-footer-social {
          width: 34px; height: 34px;
          background: rgba(74,160,80,0.08); border: 1px solid rgba(74,160,80,0.18);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: rgba(190,205,230,0.5); text-decoration: none; transition: all 0.2s;
        }
        .tl-footer-social:hover { background: rgba(74,160,80,0.2); border-color: #4aa050; color: #4aa050; transform: translateY(-2px); }

        /* Link columns */
        .tl-footer-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: #4aa050;
          margin-bottom: 16px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(74,160,80,0.15);
        }
        .tl-footer-col-links { display: flex; flex-direction: column; gap: 2px; }
        .tl-footer-col-link {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 4px;
          color: rgba(180,195,220,0.5); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: all 0.18s;
          border-left: 2px solid transparent;
        }
        .tl-footer-col-link:hover {
          color: #fff; background: rgba(74,160,80,0.07);
          border-left-color: #4aa050; padding-left: 12px;
        }
        .tl-footer-col-link svg { opacity: 0.4; flex-shrink: 0; transition: opacity 0.18s; }
        .tl-footer-col-link:hover svg { opacity: 1; }

        /* ── BOTTOM BAR ── */
        .tl-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 32px;
        }
        .tl-footer-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .tl-footer-copyright {
          color: rgba(150,165,190,0.35); font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
        }
        .tl-footer-license-pill {
          display: flex; align-items: center; gap: 6px;
          background: rgba(74,160,80,0.08); border: 1px solid rgba(74,160,80,0.18);
          color: rgba(100,200,110,0.65); font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px;
        }
        .tl-footer-license-dot { width: 5px; height: 5px; background: #4aa050; border-radius: 50%; opacity: 0.7; }
        .tl-footer-legal { display: flex; gap: 20px; }
        .tl-footer-legal a {
          color: rgba(150,165,190,0.35); font-size: 11.5px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-legal a:hover { color: rgba(100,200,110,0.8); }

        @media (max-width: 1024px) {
          .tl-footer-main { grid-template-columns: 1fr 1fr; }
          .tl-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .tl-footer-main { grid-template-columns: 1fr; padding: 40px 20px 28px; }
          .tl-footer-brand { grid-column: auto; }
          .tl-footer-cta-band { padding: 36px 20px; }
          .tl-footer-bottom { padding: 18px 20px; }
          .tl-footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
      className: "tl-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tl-footer-cta-band",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-footer-cta-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-cta-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
              children: ["Your Property. Held to a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "Higher Standard."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "Serving the Triangle and Triad of North Carolina \u2014 Holly Springs, Cary, Raleigh, Durham, Chapel Hill, Hillsborough, and Orange County."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-cta-btns",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "/contact",
              className: "tl-footer-btn-primary",
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
              }), "Get a Free Quote"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "/gallery",
              className: "tl-footer-btn-ghost",
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
                  width: "18",
                  height: "18",
                  rx: "2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                  cx: "8.5",
                  cy: "8.5",
                  r: "1.5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                  points: "21 15 16 10 5 21"
                })]
              }), "View Our Work"]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-footer-main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-footer-brand",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/",
            className: "tl-footer-logo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-footer-logo-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                width: "44",
                height: "44",
                viewBox: "0 0 40 40",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                  points: "20,2 38,11 38,29 20,38 2,29 2,11",
                  fill: "#4aa050",
                  opacity: ".15"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                  points: "20,2 38,11 38,29 20,38 2,29 2,11",
                  fill: "none",
                  stroke: "#4aa050",
                  strokeWidth: "1.5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  d: "M12 28 L12 18 L20 12 L28 18 L28 28",
                  fill: "none",
                  stroke: "#4aa050",
                  strokeWidth: "2",
                  strokeLinejoin: "round"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                  x1: "12",
                  y1: "28",
                  x2: "28",
                  y2: "28",
                  stroke: "#4aa050",
                  strokeWidth: "2"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "tl-footer-logo-name",
                children: ["TrueLine ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "Property"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-footer-logo-sub",
                children: "Solutions \xB7 North Carolina"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-footer-tagline",
            children: "Your Property. Held to a Higher Standard."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "tl-footer-desc",
            children: company.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-contact",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: company.phoneHref,
              className: "tl-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#4aa050",
                  strokeWidth: "2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  })
                })
              }), company.phone]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: company.emailHref,
              className: "tl-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#4aa050",
                  strokeWidth: "2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                    points: "22,6 12,13 2,6"
                  })]
                })
              }), company.email]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "tl-footer-contact-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-footer-contact-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                  width: "13",
                  height: "13",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#4aa050",
                  strokeWidth: "2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                  })]
                })
              }), company.location]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-badges",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "tl-footer-badge",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-footer-badge-dot"
              }), "Licensed & Insured"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-footer-badge-bbb",
              children: "BBB Badge \u2014 Placeholder"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-footer-socials",
            children: socials.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: s.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "tl-footer-social",
              "aria-label": s.name,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SocialIcon, {
                icon: s.icon
              })
            }, s.name))
          })]
        }), footerLinks.map((col, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-footer-col-title",
            children: col.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-footer-col-links",
            children: col.items.map((item, j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.href,
              className: "tl-footer-col-link",
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
        className: "tl-footer-bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-footer-bottom-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "tl-footer-copyright",
            children: company.copyright
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-license-pill",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-footer-license-dot"
            }), company.license]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-footer-legal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/privacy",
              children: "Privacy Policy"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/terms",
              children: "Terms & Conditions"
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
    eyebrow: "Why Homeowners Choose TrueLine?",
    headline: ["Your Property", "Held to a", "Higher Standard."],
    headlineAccent: 2,
    // índice de la línea que va en acento
    subheadline: "Complete exterior and property solutions for homeowners who expect quality, reliability, and results that last — across the Triangle and Triad of North Carolina.",
    cta1: {
      label: "Request a Free Estimate",
      href: "/contact"
    },
    cta2: {
      label: "Explore Our Services",
      href: "/services"
    }
  };
  const stats = [{
    value: "✦",
    label: "Licensed & Insured"
  }, {
    value: "✦",
    label: "BBB Accredited"
  }, {
    value: "✦",
    label: "Serving Holly Springs, Cary, Chapel Hill & Beyond"
  }, {
    value: "✦",
    label: "Continuous Training & Certified Specialists"
  }];
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .tl-hero {
          position: relative; overflow: hidden;
          background: linear-gradient(160deg, #080c18 0%, #0d1525 55%, #0a1118 100%);
          min-height: 92vh;
          display: flex; flex-direction: column;
        }

        /* Watermark */
        .tl-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between; padding: 0 6%;
        }
        .tl-hero-wm svg { width: min(240px, 26%); opacity: 0.04; filter: brightness(100) grayscale(1); }

        /* Glows */
        .tl-hero-glows { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        .tl-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: tlGlow 8s ease-in-out infinite;
        }
        .tl-glow-1 { width: 400px; height: 400px; background: rgba(74,160,80,0.1); top: -100px; left: -80px; }
        .tl-glow-2 { width: 500px; height: 500px; background: rgba(20,80,30,0.08); bottom: -100px; right: -60px; animation-delay: 3s; }
        .tl-glow-3 { width: 300px; height: 300px; background: rgba(74,160,80,0.06); bottom: 0; left: 35%; animation-delay: 5s; }
        @keyframes tlGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.15) translate(20px,-20px); opacity: 0.7; }
        }

        /* Grid */
        .tl-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Content */
        .tl-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 80px 32px 60px; text-align: center;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-hero-content.visible { opacity: 1; transform: translateY(0); }
        .tl-hero-inner { max-width: 900px; margin: 0 auto; }

        .tl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(74,160,80,0.1); border: 1px solid rgba(74,160,80,0.28);
          color: rgba(100,200,110,0.9); font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 32px; animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .tl-badge-dot { width: 6px; height: 6px; background: #4aa050; border-radius: 50%; animation: tlPulse 2s infinite; flex-shrink: 0; }
        @keyframes tlPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .tl-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(48px, 9vw, 108px); line-height: 0.82;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 28px;
        }
        .tl-hero h1 .accent {
          color: #4aa050;
          text-shadow: 0 0 60px rgba(74,160,80,0.3);
        }

        .tl-hero-sub {
          font-size: clamp(15px, 1.8vw, 18px); line-height: 1.7;
          color: rgba(200,215,240,0.5); max-width: 580px; margin: 0 auto 40px;
        }

        .tl-hero-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px;
        }
        .tl-hero-btn-main {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: #4aa050; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 24px rgba(74,160,80,0.45);
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .tl-hero-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(74,160,80,0.6); }
        .tl-hero-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 15px 30px; background: transparent; color: rgba(210,220,240,0.75);
          border: 1px solid rgba(74,160,80,0.3); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none;
        }
        .tl-hero-btn-ghost:hover { border-color: #4aa050; color: #fff; background: rgba(74,160,80,0.08); }

        /* Stats */
        .tl-hero-stats {
          display: flex; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
          max-width: 640px; margin: 0 auto;
        }
        .tl-hero-stat {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tl-hero-stat:last-child { border-right: none; }
        .tl-hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800;
          color: #4aa050; letter-spacing: 0.04em; line-height: 1;
        }
        .tl-hero-stat-label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(190,205,235,0.35); margin-top: 4px;
        }

        /* Wave */
        .tl-hero-wave { position: relative; z-index: 10; margin-top: -2px; line-height: 0; }
        .tl-hero-wave svg { display: block; width: 100%; }

        @media (max-width: 640px) {
          .tl-hero-stats { flex-direction: column; }
          .tl-hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .tl-hero-stat:last-child { border-bottom: none; }
          .tl-hero-content { padding: 60px 20px 48px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
      className: "tl-hero",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-hero-wm",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          viewBox: "0 0 40 40",
          fill: "white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
            points: "20,2 38,11 38,29 20,38 2,29 2,11"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12 28 L12 18 L20 12 L28 18 L28 28",
            stroke: "white",
            strokeWidth: "1.5",
            fill: "none",
            strokeLinejoin: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "12",
            y1: "28",
            x2: "28",
            y2: "28",
            stroke: "white",
            strokeWidth: "1.5"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          viewBox: "0 0 40 40",
          fill: "white",
          style: {
            transform: "scaleX(-1)"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
            points: "20,2 38,11 38,29 20,38 2,29 2,11"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12 28 L12 18 L20 12 L28 18 L28 28",
            stroke: "white",
            strokeWidth: "1.5",
            fill: "none",
            strokeLinejoin: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "12",
            y1: "28",
            x2: "28",
            y2: "28",
            stroke: "white",
            strokeWidth: "1.5"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-hero-glows",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-glow tl-glow-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-glow tl-glow-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-glow tl-glow-3"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tl-hero-grid"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `tl-hero-content ${visible ? "visible" : ""}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-hero-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
            children: heroData.headline.map((line, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: i === heroData.headlineAccent ? "accent" : "",
              children: [line, i < heroData.headline.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "tl-hero-sub",
            children: heroData.subheadline
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-hero-btns",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: heroData.cta1.href,
              className: "tl-hero-btn-main",
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
              className: "tl-hero-btn-ghost",
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-hero-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-badge-dot"
            }), heroData.eyebrow]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-hero-stats",
            children: stats.map((s, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "tl-hero-stat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-hero-stat-val",
                children: s.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "tl-hero-stat-label",
                children: s.label
              })]
            }, i))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tl-hero-wave",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          viewBox: "0 0 1440 100",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          style: {
            height: "clamp(40px,6vw,80px)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z",
            fill: "#f5f3ef"
          })
        })
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
    name: "About Us",
    link: "/about",
    hasDropdown: false
  }, {
    name: "Services",
    link: "/services",
    hasDropdown: true,
    columns: [{
      title: "Grounds & Hardscape",
      items: [{
        name: "Landscaping",
        link: "/services/landscaping"
      }, {
        name: "Hardscape & Concrete",
        link: "/services/hardscape-concrete"
      }, {
        name: "Drainage & Erosion Control",
        link: "/services/drainage-erosion-control"
      }]
    }, {
      title: "Property Care",
      items: [{
        name: "Tree Services",
        link: "/services/tree-services"
      }, {
        name: "Exterior Cleaning",
        link: "/services/exterior-cleaning"
      }, {
        name: "Property Preparation",
        link: "/services/property-preparation"
      }]
    }]
  }, {
    name: "Gallery",
    link: "/gallery",
    hasDropdown: false
  }, {
    name: "Service Areas",
    link: "/service-areas",
    hasDropdown: true,
    columns: [{
      title: "Areas We Serve",
      items: [{
        name: "Holly Springs",
        link: "/service-areas/holly-springs"
      }, {
        name: "Cary",
        link: "/service-areas/cary"
      }, {
        name: "Chapel Hill",
        link: "/service-areas/chapel-hill"
      }, {
        name: "Raleigh",
        link: "/service-areas/raleigh"
      }, {
        name: "Durham",
        link: "/service-areas/durham"
      }, {
        name: "Hillsborough",
        link: "/service-areas/hillsborough"
      }, {
        name: "Orange County",
        link: "/service-areas/orange-county"
      }]
    }]
  }, {
    name: "Contact Us",
    link: "/contact",
    hasDropdown: false
  }];
  // ────────────────────────────────────────────────────────────────────────

  // ─── BRANDING — reemplazar cuando 828 Marketing Solutions entregue identidad final ─
  // Accent color placeholder: #4aa050 (verde). Cambiar en todas las variables --tl-accent
  // Logo: reemplazar <LogoIcon /> y .tl-logo-name por assets finales
  // ────────────────────────────────────────────────────────────────────────

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── BRAND TOKENS (placeholder — actualizar con identidad final) ── */
        :root {
          --tl-accent: #4aa050;
          --tl-accent-hover: #5dba64;
          --tl-accent-glow: rgba(74,160,80,0.4);
          --tl-accent-soft: rgba(74,160,80,0.12);
          --tl-accent-border: rgba(74,160,80,0.2);
          --tl-accent-border-strong: rgba(74,160,80,0.28);
          --tl-dark-bg: #060a14;
          --tl-nav-bg: #0d1220;
          --tl-dropdown-bg: #0e1528;
        }

        /* ── TOP BAR ── */
        .tl-top {
          background: var(--tl-dark-bg);
          border-bottom: 1px solid var(--tl-accent-border);
          height: 36px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .tl-top-left { display: flex; align-items: center; gap: 18px; }
        .tl-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(200,210,230,0.45); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-top-item:hover { color: var(--tl-accent); }
        .tl-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.08); }
        .tl-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border-strong);
          color: var(--tl-accent); font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        .tl-dot {
          width: 5px; height: 5px;
          background: var(--tl-accent); border-radius: 50%;
          animation: tlPulse 2s infinite;
        }
        @keyframes tlPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        /* ── NAVBAR ── */
        .tl-nav {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .tl-nav.top { background: var(--tl-nav-bg); }
        .tl-nav.scrolled {
          background: rgba(8,12,22,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.6), 0 1px 0 var(--tl-accent-border);
        }
        .tl-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-inner.scrolled { height: 60px; }

        /* ── LOGO ── */
        .tl-logo { display: flex; align-items: center; gap: 11px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .tl-logo-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 3px 10px var(--tl-accent-glow));
        }
        .tl-logo:hover .tl-logo-icon { transform: scale(1.08); filter: drop-shadow(0 6px 18px var(--tl-accent-glow)); }
        .tl-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;
          color: #fff; line-height: 1;
        }
        .tl-logo-name span { color: var(--tl-accent); }
        .tl-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(150,170,210,0.45); margin-top: 2px;
        }

        /* ── DESKTOP LINKS ── */
        .tl-links { display: flex; align-items: center; list-style: none; gap: 0; flex: 1; justify-content: center; }
        .tl-link-item { position: relative; }
        .tl-link {
          display: flex; align-items: center; gap: 4px; padding: 8px 12px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 13.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(190,205,230,0.7); background: none; border: none; cursor: pointer;
          border-radius: 4px; transition: color 0.2s, background 0.2s; text-decoration: none;
        }
        .tl-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .tl-link.active { color: #fff; }
        .tl-active-line {
          position: absolute; bottom: -1px; left: 12px; right: 12px;
          height: 2px; background: linear-gradient(90deg, var(--tl-accent), var(--tl-accent-hover));
          border-radius: 2px 2px 0 0;
        }
        .tl-chevron { opacity: 0.55; transition: transform 0.25s; flex-shrink: 0; }
        .tl-chevron.open { transform: rotate(180deg); }

        /* ── MEGA DROPDOWN ── */
        .tl-mega {
          position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: var(--tl-dropdown-bg); border: 1px solid var(--tl-accent-border);
          border-radius: 6px; padding: 18px 22px; z-index: 200;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          transition: opacity 0.2s, transform 0.2s;
          min-width: 200px;
        }
        .tl-mega.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .tl-mega.closed { opacity: 0; transform: translateX(-50%) translateY(-8px); pointer-events: none; }
        .tl-mega::before {
          content: ''; position: absolute; top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px; height: 8px; background: var(--tl-dropdown-bg);
          border-left: 1px solid var(--tl-accent-border);
          border-top: 1px solid var(--tl-accent-border);
        }
        .tl-mega-grid { display: grid; gap: 20px; }
        .tl-mega-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          margin-bottom: 8px; padding-bottom: 7px;
          border-bottom: 1px solid rgba(74,160,80,0.15);
          text-decoration: none; display: block; transition: color 0.2s;
        }
        .tl-mega-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 10px; border-radius: 4px;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(190,205,230,0.7); text-decoration: none;
          transition: all 0.15s; cursor: pointer;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
        }
        .tl-mega-item:hover { color: #fff; background: rgba(74,160,80,0.1); padding-left: 14px; }
        .tl-mega-item-icon { opacity: 0.5; flex-shrink: 0; margin-left: 8px; }
        .tl-mega-item:hover .tl-mega-item-icon { opacity: 1; }

        /* ── RIGHT ACTIONS ── */
        .tl-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .tl-cta {
          display: flex; align-items: center; gap: 8px; padding: 9px 16px;
          background: var(--tl-accent); color: white; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 16px var(--tl-accent-glow), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s; white-space: nowrap;
          position: relative; overflow: hidden; text-decoration: none;
        }
        .tl-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .tl-cta:hover::before { left: 160%; }
        .tl-cta:hover { background: var(--tl-accent-hover); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(74,160,80,0.55); }

        /* ── HAMBURGER ── */
        .tl-ham {
          display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .tl-ham:hover { background: rgba(74,160,80,0.16); }
        .tl-hbar { width: 20px; height: 2px; background: var(--tl-accent); border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .tl-ham.open .tl-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .tl-ham.open .tl-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .tl-ham.open .tl-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .tl-mob {
          position: fixed; inset: 0; z-index: 500; background: #080c18;
          display: flex; flex-direction: column; overflow-y: auto;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .tl-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .tl-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--tl-accent-border); flex-shrink: 0;
        }
        .tl-mob-x {
          width: 38px; height: 38px; background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border); border-radius: 4px;
          color: var(--tl-accent); font-size: 18px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .tl-mob-body { flex: 1; padding: 16px 24px; }
        .tl-mob-item-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border-radius: 4px; background: none; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(190,210,240,0.55); transition: all 0.2s; text-align: left;
          border-left: 3px solid transparent; text-decoration: none;
        }
        .tl-mob-item-btn:hover, .tl-mob-item-btn.active { color: #fff; border-left-color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-mob-chevron { transition: transform 0.25s; opacity: 0.5; flex-shrink: 0; }
        .tl-mob-chevron.open { transform: rotate(180deg); }
        .tl-mob-submenu { padding: 4px 0 8px 16px; }
        .tl-mob-col-title {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          padding: 10px 10px 6px; opacity: 0.8;
        }
        .tl-mob-sublink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 4px; margin: 2px 0;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(190,210,240,0.6); text-decoration: none; transition: all 0.15s;
        }
        .tl-mob-sublink:hover { color: #fff; background: rgba(74,160,80,0.1); }
        .tl-mob-foot { padding: 20px 24px; border-top: 1px solid rgba(74,160,80,0.12); flex-shrink: 0; }
        .tl-mob-cta {
          width: 100%; padding: 14px; background: var(--tl-accent); color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px var(--tl-accent-glow); text-decoration: none;
        }

        @media (max-width: 1024px) {
          .tl-links, .tl-cta { display: none !important; }
          .tl-ham { display: flex !important; }
          .tl-top-left { display: none !important; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "tl-top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-top-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "tel:+18005550100",
          className: "tl-top-item",
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
          className: "tl-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "mailto:info@truelinepropertysolutions.com",
          className: "tl-top-item",
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
          }), "info@truelinepropertysolutions.com"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-top-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-dot"
          }), "Licensed & Insured"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-top-item",
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
        }), "Serving Your Area"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `tl-nav ${isScrolled ? "scrolled" : "top"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `tl-inner ${isScrolled ? "scrolled" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "tl-logo",
          href: "/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-logo-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "42",
              height: "42",
              viewBox: "0 0 40 40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                points: "20,2 38,11 38,29 20,38 2,29 2,11",
                fill: "var(--tl-accent)",
                opacity: ".15"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                points: "20,2 38,11 38,29 20,38 2,29 2,11",
                fill: "none",
                stroke: "var(--tl-accent)",
                strokeWidth: "1.5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M12 28 L12 18 L20 12 L28 18 L28 28",
                fill: "none",
                stroke: "var(--tl-accent)",
                strokeWidth: "2",
                strokeLinejoin: "round"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "12",
                y1: "28",
                x2: "28",
                y2: "28",
                stroke: "var(--tl-accent)",
                strokeWidth: "2"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "tl-logo-name",
              children: ["True Line ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "Property"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-logo-sub",
              children: "Solutions \xB7 Exterior Services"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "tl-links",
          children: navItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "tl-link-item",
            children: item.hasDropdown ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: `tl-link ${activeDropdown === item.name ? "active" : ""}`,
                onMouseEnter: () => setActiveDropdown(item.name),
                onClick: () => toggleDropdown(item.name),
                children: [item.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  className: `tl-chevron ${activeDropdown === item.name ? "open" : ""}`,
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
                className: "tl-active-line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: `tl-mega ${activeDropdown === item.name ? "open" : "closed"}`,
                style: {
                  width: `${Math.min(item.columns.length * 210, 520)}px`
                },
                onMouseEnter: () => setActiveDropdown(item.name),
                onMouseLeave: () => setActiveDropdown(null),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "tl-mega-grid",
                  style: {
                    gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`
                  },
                  children: item.columns.map((col, colIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    children: [col.link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: col.link,
                      className: "tl-mega-col-title",
                      children: col.title
                    }) : col.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "tl-mega-col-title",
                      children: col.title
                    }), col.items.map((sub, subIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                      href: sub.link,
                      target: sub.external ? "_blank" : undefined,
                      rel: sub.external ? "noopener noreferrer" : undefined,
                      className: "tl-mega-item",
                      children: [sub.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        className: "tl-mega-item-icon",
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
              className: "tl-link",
              children: item.name
            })
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/contact",
            className: "tl-cta",
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
            }), "Request a Free Estimate"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            className: `tl-ham ${menuOpen ? "open" : ""}`,
            onClick: () => setMenuOpen(true),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-hbar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-hbar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "tl-hbar"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `tl-mob ${menuOpen ? "open" : "closed"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-mob-head",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "tl-logo",
          href: "/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              width: 32,
              height: 32,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 40 40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                points: "20,2 38,11 38,29 20,38 2,29 2,11",
                fill: "var(--tl-accent)",
                opacity: ".15"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                points: "20,2 38,11 38,29 20,38 2,29 2,11",
                fill: "none",
                stroke: "var(--tl-accent)",
                strokeWidth: "1.5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M12 28 L12 18 L20 12 L28 18 L28 28",
                fill: "none",
                stroke: "var(--tl-accent)",
                strokeWidth: "2",
                strokeLinejoin: "round"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "12",
                y1: "28",
                x2: "28",
                y2: "28",
                stroke: "var(--tl-accent)",
                strokeWidth: "2"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "tl-logo-name",
            style: {
              fontSize: 17
            },
            children: ["True Line ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "Property"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "tl-mob-x",
          onClick: () => setMenuOpen(false),
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tl-mob-body",
        children: navItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: item.hasDropdown ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              className: `tl-mob-item-btn ${activeDropdown === item.name ? "active" : ""}`,
              onClick: () => toggleDropdown(item.name),
              children: [item.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: `tl-mob-chevron ${activeDropdown === item.name ? "open" : ""}`,
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
              className: "tl-mob-submenu",
              children: item.columns.map((col, colIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [col.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "tl-mob-col-title",
                  children: col.title
                }), col.items.map((sub, subIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: sub.link,
                  className: "tl-mob-sublink",
                  onClick: () => setMenuOpen(false),
                  children: sub.name
                }, subIdx))]
              }, colIdx))
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: item.link,
            className: "tl-mob-item-btn",
            onClick: () => setMenuOpen(false),
            children: item.name
          })
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tl-mob-foot",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "/contact",
          className: "tl-mob-cta",
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
          }), "Request a Free Estimate"]
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
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







// ─── NAVBAR — aparece en TODAS las páginas ───────────────────────────────

if (document.querySelector("#cre-navbar")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-navbar")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_NavbarCRE__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}

// ─── FOOTER — aparece en TODAS las páginas ───────────────────────────────
if (document.querySelector("#cre-footer")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-footer")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_FooterCRE__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}

// ─── HERO — solo en home-template.php ────────────────────────────────────
if (document.querySelector("#cre-hero")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-hero")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_HeroCRE__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}

// ─── CONTACT FORM — solo en contact-template.php ─────────────────────────
// Se puede reutilizar en cualquier página añadiendo <div id="cre-contact-form"></div>
if (document.querySelector("#cre-contact-form")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-contact-form")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map