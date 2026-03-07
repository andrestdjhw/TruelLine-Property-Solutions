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
  const [activeLink, setActiveLink] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Home");
  const [servicesOpen, setServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const services = ["Structural Framing", "Heavy Timber Construction", "Exterior Envelope & Siding", "Interior Finishes & Drywall", "Residential Remodel", "Commercial (Selective)"];
  const links = ["Home", "About", "Services", "Projects", "For GCs", "Contact"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      background: "#0b0f1a",
      minHeight: "100vh"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* TOP BAR */
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

        /* NAVBAR */
        .cre-nav {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cre-nav.top {
          background: #0d1220;
          box-shadow: none;
        }
        .cre-nav.scrolled {
          background: rgba(8,12,22,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(230,100,20,0.2);
        }
        .cre-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
          height: 72px;
        }
        .cre-inner.scrolled { height: 60px; }

        /* LOGO */
        .cre-logo { display: flex; align-items: center; gap: 13px; cursor: pointer; text-decoration: none; flex-shrink: 0; }
        .cre-logo-mark {
          width: 44px; height: 44px; background: #e66414;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform 0.3s, filter 0.3s;
          filter: drop-shadow(0 4px 12px rgba(230,100,20,0.5));
        }
        .cre-logo:hover .cre-logo-mark {
          transform: rotate(30deg) scale(1.08);
          filter: drop-shadow(0 6px 18px rgba(230,100,20,0.7));
        }
        .cre-logo-mark span {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 17px; color: white; letter-spacing: -0.02em;
          transform: rotate(0deg);
        }
        .cre-logo-text { display: flex; flex-direction: column; }
        .cre-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 21px; letter-spacing: 0.06em; text-transform: uppercase;
          color: #ffffff; line-height: 1;
        }
        .cre-logo-name span { color: #e66414; }
        .cre-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(150,170,210,0.5); margin-top: 2px;
        }

        /* NAV LINKS */
        .cre-links { display: flex; align-items: center; list-style: none; gap: 0; }
        .cre-link-item { position: relative; }
        .cre-link {
          display: flex; align-items: center; gap: 4px;
          padding: 8px 15px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(190,205,230,0.6);
          background: none; border: none; cursor: pointer; border-radius: 4px;
          transition: color 0.2s, background 0.2s;
        }
        .cre-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .cre-link.active { color: #fff; }
        .cre-active-line {
          position: absolute; bottom: -1px; left: 15px; right: 15px;
          height: 2px; background: linear-gradient(90deg, #e66414, #ff8c3a);
          border-radius: 2px 2px 0 0;
        }
        .cre-chevron { opacity: 0.55; transition: transform 0.25s; }
        .cre-chevron.open { transform: rotate(180deg); }

        /* DROPDOWN */
        .cre-dropdown {
          position: absolute; top: calc(100% + 10px); left: 0;
          background: #0e1528; border: 1px solid rgba(230,100,20,0.22);
          border-radius: 6px; padding: 6px; min-width: 230px; z-index: 200;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55);
          transition: opacity 0.2s, transform 0.2s;
        }
        .cre-dropdown.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        .cre-dropdown.closed { opacity: 0; transform: translateY(-8px); pointer-events: none; }
        .cre-dropdown::before {
          content: ''; position: absolute; top: -5px; left: 18px;
          width: 8px; height: 8px; background: #0e1528;
          border-left: 1px solid rgba(230,100,20,0.22); border-top: 1px solid rgba(230,100,20,0.22);
          transform: rotate(45deg);
        }
        .cre-drop-item {
          display: flex; align-items: center; gap: 10px; padding: 9px 12px;
          color: rgba(190,205,230,0.65); font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; cursor: pointer; border-radius: 4px;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
          transition: all 0.15s;
        }
        .cre-drop-item:hover { color: #fff; background: rgba(230,100,20,0.1); }
        .cre-drop-icon {
          width: 22px; height: 22px; background: rgba(230,100,20,0.1);
          border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .cre-drop-item:hover .cre-drop-icon { background: rgba(230,100,20,0.2); }

        /* CTA */
        .cre-cta {
          display: flex; align-items: center; gap: 8px; padding: 10px 20px;
          background: #e66414; color: white; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 13.5px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(230,100,20,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          white-space: nowrap; position: relative; overflow: hidden; text-decoration: none;
        }
        .cre-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cre-cta:hover::before { left: 160%; }
        .cre-cta:hover { background: #f07020; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,100,20,0.55); }
        .cre-cta:active { transform: translateY(0); }

        /* GC PILL */
        .cre-gc {
          display: flex; align-items: center; gap: 6px; padding: 8px 14px;
          background: transparent; border: 1px solid rgba(230,100,20,0.3);
          color: rgba(230,150,80,0.85); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; white-space: nowrap;
        }
        .cre-gc:hover { border-color: #e66414; color: #e66414; background: rgba(230,100,20,0.06); }

        /* HAMBURGER */
        .cre-ham {
          display: none; flex-direction: column; gap: 5px;
          width: 40px; height: 40px; align-items: center; justify-content: center;
          background: rgba(230,100,20,0.08); border: 1px solid rgba(230,100,20,0.2);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .cre-ham:hover { background: rgba(230,100,20,0.16); }
        .cre-hbar { width: 20px; height: 2px; background: #e66414; border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .cre-ham.open .cre-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .cre-ham.open .cre-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .cre-ham.open .cre-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* MOBILE MENU */
        .cre-mob {
          position: fixed; inset: 0; z-index: 500; background: #080c18;
          display: flex; flex-direction: column;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cre-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .cre-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .cre-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(230,100,20,0.15);
        }
        .cre-mob-x {
          width: 38px; height: 38px; background: rgba(230,100,20,0.1);
          border: 1px solid rgba(230,100,20,0.2); border-radius: 4px;
          color: #e66414; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cre-mob-links { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 24px 32px; gap: 2px; }
        .cre-mob-link {
          font-family: 'Barlow Condensed', sans-serif; font-size: 34px; font-weight: 800;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: rgba(190,210,240,0.45); background: none; border: none; cursor: pointer;
          text-align: left; padding: 7px 16px; border-radius: 4px; transition: all 0.2s;
          border-left: 3px solid transparent;
        }
        .cre-mob-link:hover, .cre-mob-link.active { color: #fff; border-left-color: #e66414; background: rgba(230,100,20,0.05); }
        .cre-mob-foot { padding: 24px 32px; border-top: 1px solid rgba(230,100,20,0.12); display: flex; flex-direction: column; gap: 10px; }
        .cre-mob-cta {
          width: 100%; padding: 15px; background: #e66414; color: white;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px rgba(230,100,20,0.4);
        }
        .cre-mob-gc {
          width: 100%; padding: 13px; background: transparent;
          color: rgba(230,150,80,0.8); border: 1px solid rgba(230,100,20,0.25);
          border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }

        @media (max-width: 960px) {
          .cre-links, .cre-cta, .cre-gc { display: none !important; }
          .cre-ham { display: flex !important; }
          .cre-top-left { display: none !important; }
        }

        /* HERO DEMO */
        .cre-hero {
          min-height: calc(100vh - 108px);
          background: linear-gradient(160deg, #0b0f1a 0%, #0f1628 50%, #0b0f1a 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 60px 24px; position: relative; overflow: hidden;
        }
        .cre-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(230,100,20,0.07) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px);
        }
        .cre-hero-naics {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(230,100,20,0.1); border: 1px solid rgba(230,100,20,0.25);
          color: #e66414; font-family: 'Barlow', sans-serif;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 3px; margin-bottom: 28px;
        }
        .cre-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(42px, 7.5vw, 88px); line-height: 0.95;
          letter-spacing: 0.02em; text-transform: uppercase; color: #ffffff; margin-bottom: 20px;
        }
        .cre-hero h1 .orange { color: #e66414; }
        .cre-hero p {
          color: rgba(190,205,235,0.5); font-family: 'Barlow', sans-serif;
          font-size: 16px; line-height: 1.7; max-width: 540px; margin-bottom: 40px;
        }
        .cre-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .cre-btn-main {
          padding: 14px 28px; background: #e66414; color: white; border: none;
          border-radius: 4px; cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(230,100,20,0.4); transition: transform 0.2s, box-shadow 0.2s;
        }
        .cre-btn-main:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(230,100,20,0.5); }
        .cre-btn-ghost {
          padding: 14px 28px; background: transparent; color: rgba(190,210,240,0.7);
          border: 1px solid rgba(230,100,20,0.28); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s;
        }
        .cre-btn-ghost:hover { border-color: #e66414; color: #fff; background: rgba(230,100,20,0.06); }
        .cre-stats {
          display: flex; gap: 36px; margin-top: 56px; flex-wrap: wrap; justify-content: center;
        }
        .cre-stat { text-align: center; }
        .cre-stat-n { font-family: 'Barlow Condensed', sans-serif; font-size: 30px; font-weight: 800; color: #e66414; letter-spacing: 0.04em; }
        .cre-stat-l { font-family: 'Barlow', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(190,205,235,0.35); margin-top: 4px; }
        .cre-stat-sep { width: 1px; background: rgba(230,100,20,0.18); align-self: stretch; }

        .cre-demo-btn {
          position: fixed; bottom: 20px; right: 20px; z-index: 400;
          background: rgba(230,100,20,0.12); border: 1px solid rgba(230,100,20,0.3);
          color: #e66414; padding: 9px 16px; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
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
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-logo-mark",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "CRE"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cre-logo-text",
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
          children: links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "cre-link-item",
            children: link === "Services" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: `cre-link ${activeLink === link ? "active" : ""}`,
                onClick: () => {
                  setActiveLink(link);
                  setServicesOpen(o => !o);
                },
                onBlur: () => setTimeout(() => setServicesOpen(false), 160),
                children: [link, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  className: `cre-chevron ${servicesOpen ? "open" : ""}`,
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
              }), activeLink === link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-active-line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: `cre-dropdown ${servicesOpen ? "open" : "closed"}`,
                children: services.map((s, i) => {
                  const icons = ["◈", "◉", "▣", "◧", "⬡", "◈"];
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                    className: "cre-drop-item",
                    onClick: () => setServicesOpen(false),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      className: "cre-drop-icon",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        width: "11",
                        height: "11",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#e66414",
                        strokeWidth: "2.5",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                          points: "9 18 15 12 9 6"
                        })
                      })
                    }), s]
                  }, s);
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                className: `cre-link ${activeLink === link ? "active" : ""}`,
                onClick: () => setActiveLink(link),
                children: link
              }), activeLink === link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "cre-active-line"
              })]
            })
          }, link))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            className: "cre-gc",
            onClick: () => setActiveLink("For GCs"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "13",
              height: "13",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                cx: "9",
                cy: "7",
                r: "4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M23 21v-2a4 4 0 00-3-3.87"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M16 3.13a4 4 0 010 7.75"
              })]
            }), "For GCs"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-logo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              width: 36,
              height: 36,
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
                fontSize: 13,
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
        className: "cre-mob-links",
        children: links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `cre-mob-link ${activeLink === link ? "active" : ""}`,
          onClick: () => {
            setActiveLink(link);
            setMenuOpen(false);
          },
          children: link
        }, link))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-mob-foot",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          className: "cre-mob-gc",
          onClick: () => {
            setActiveLink("For GCs");
            setMenuOpen(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
              cx: "9",
              cy: "7",
              r: "4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M23 21v-2a4 4 0 00-3-3.87"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M16 3.13a4 4 0 010 7.75"
            })]
          }), "General Contractor Portal"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cre-hero",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-hero-naics",
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
        children: ["Built to", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "orange",
          children: "Perform."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Built to Last."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: "Structural framing, heavy timber, exterior envelope, and interior finishes \u2014 delivered with precision from foundation to finish."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-hero-btns",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "cre-btn-main",
          children: "Request a Quote"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "cre-btn-ghost",
          children: "View Projects"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cre-stats",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-n",
            children: "20+"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-l",
            children: "Years Active"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-stat-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-n",
            children: "500+"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-l",
            children: "Projects"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-stat-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-n",
            children: "NAICS"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-l",
            children: "Certified"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cre-stat-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cre-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-n",
            children: "GC"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cre-stat-l",
            children: "Ready"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "cre-demo-btn",
      onClick: () => setIsScrolled(s => !s),
      children: isScrolled ? "▲ Normal" : "▼ Scroll Effect"
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const person1 = new _scripts_Person__WEBPACK_IMPORTED_MODULE_0__["default"]("Brad");
if (document.querySelector("#render-react-example-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.querySelector("#render-react-example-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
}
if (document.querySelector("#ajs-navbar")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.querySelector("#ajs-navbar")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map