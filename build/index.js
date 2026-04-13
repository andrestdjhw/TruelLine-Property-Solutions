/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// ─── CREDENCIALES EmailJS ────────────────────────────────────────────────────

const EMAILJS_PUBLIC_KEY = "k71YblwDfy7-d6UKH";
const EMAILJS_SERVICE_ID = "service_jv6uq6n";
const EMAILJS_TEMPLATE_ID = "template_wo6toyt";
// ────────────────────────────────────────────────────────────────────────────
const RECAPTCHA_SITE_KEY = "6LfABrQsAAAAAPI-2gxFy6270pEFxwiUNScV0eIP";
// ────────────────────────────────────────────────────────────────────────────

/**
 * ContactForm — componente reutilizable de formulario de contacto.
 * Props:
 *   - compact: bool — versión sin padding exterior para embeber en tarjeta
 */
function ContactForm({
  compact = false
}) {
  const services = ["Landscaping", "Hardscape & Concrete", "Drainage & Erosion Control", "Tree Services", "Exterior Cleaning", "Property Preparation", "Not sure yet — I need advice"];
  const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false
  });
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | sending | success | error
  const [captchaToken, setCaptchaToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleChange = e => {
    const {
      name,
      type,
      value,
      checked
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");
    const templateParams = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      service: formState.service,
      message: formState.message
    };
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY).then(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false
      });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }).catch(err => {
      console.error("EmailJS error:", err);
      setStatus("error");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cf-wrap {
          --cf-accent:        #2A5A49;
          --cf-accent-dark:   #133429;
          --cf-accent-soft:   rgba(42,90,73,0.08);
          --cf-accent-ring:   rgba(42,90,73,0.15);
          --cf-text:          #091914;
          --cf-muted:         rgba(9,25,20,0.45);
        }

        .cf-wrap {
          background: #FCF7EC;
          border-radius: 6px;
          padding: ${compact ? "28px 24px" : "44px 40px"};
          box-shadow: 0 2px 24px rgba(9,25,20,0.08);
          font-family: 'Barlow', sans-serif;
        }

        .cf-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 26px; letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--cf-text); margin-bottom: 6px;
        }
        .cf-title span { color: var(--cf-accent); }
        .cf-sub { color: var(--cf-muted); font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
        .cf-rule { width: 36px; height: 3px; background: var(--cf-accent); border-radius: 2px; margin-bottom: 28px; }

        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
        .cf-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 18px; }
        .cf-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--cf-muted);
        }
        .cf-label span { color: var(--cf-accent); }

        .cf-input, .cf-select, .cf-textarea {
          width: 100%; padding: 11px 14px;
          background: #fff; border: 1.5px solid rgba(42,90,73,0.2);
          border-radius: 4px; font-family: 'Barlow', sans-serif;
          font-size: 14px; color: var(--cf-text);
          transition: border-color 0.2s, box-shadow 0.2s; outline: none;
          appearance: none; -webkit-appearance: none;
        }
        .cf-input::placeholder, .cf-textarea::placeholder { color: rgba(9,25,20,0.28); }
        .cf-input:focus, .cf-select:focus, .cf-textarea:focus {
          border-color: var(--cf-accent);
          box-shadow: 0 0 0 3px var(--cf-accent-ring);
          background: #fff;
        }
        .cf-textarea { resize: vertical; min-height: 120px; }
        .cf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232A5A49' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 40px; cursor: pointer;
        }

        .cf-submit {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; padding: 14px 24px;
          background: var(--cf-accent); color: #FCF7EC;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(42,90,73,0.28);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          margin-top: 6px; position: relative; overflow: hidden;
        }
        .cf-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
        .cf-submit::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(252,247,236,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .cf-submit:hover:not(:disabled)::before { left: 160%; }
        .cf-submit:hover:not(:disabled) {
          background: var(--cf-accent-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(42,90,73,0.38);
        }

        .cf-error-banner {
          margin-top: 14px; padding: 12px 16px;
          background: #fff5f5; border: 1.5px solid #fca5a5;
          border-radius: 4px; color: #b91c1c;
          font-size: 13px; line-height: 1.5;
        }

        .cf-success { text-align: center; padding: 32px 20px; }
        .cf-success-icon {
          width: 56px; height: 56px;
          background: var(--cf-accent-soft);
          border: 2px solid rgba(42,90,73,0.25); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
        }
        .cf-success h3 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 24px;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--cf-text); margin-bottom: 10px;
        }
        .cf-success h3 span { color: var(--cf-accent); }
        .cf-success p { color: var(--cf-muted); font-size: 14px; line-height: 1.65; }

        /* Checkbox */
        .cf-consent { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 18px; cursor: pointer; }
        .cf-consent input[type="checkbox"] {
          appearance: none; -webkit-appearance: none;
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          border: 1.5px solid rgba(42,90,73,0.35); border-radius: 3px;
          background: #fff; cursor: pointer; position: relative;
          transition: border-color 0.2s, background 0.2s;
        }
        .cf-consent input[type="checkbox"]:checked {
          background: var(--cf-accent); border-color: var(--cf-accent);
        }
        .cf-consent input[type="checkbox"]:checked::after {
          content: ''; position: absolute; left: 4px; top: 1px;
          width: 6px; height: 10px;
          border: 2px solid #FCF7EC; border-top: none; border-left: none;
          transform: rotate(45deg);
        }
        .cf-consent input[type="checkbox"]:focus { box-shadow: 0 0 0 3px var(--cf-accent-ring); }
        .cf-consent-text { font-size: 12.5px; color: var(--cf-muted); line-height: 1.6; }
        .cf-consent-text a { color: var(--cf-accent); text-decoration: none; font-weight: 600; transition: opacity 0.2s; }
        .cf-consent-text a:hover { opacity: 0.75; }

        /* reCAPTCHA wrapper */
        .cf-captcha { margin-bottom: 18px; display: flex; justify-content: flex-start; }
        .cf-captcha > div { border-radius: 4px; overflow: hidden; }

        @media (max-width: 540px) {
          .cf-row { grid-template-columns: 1fr; }
          .cf-wrap { padding: 24px 18px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cf-wrap",
      children: status === "success" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "cf-success",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cf-success-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#2A5A49",
            strokeWidth: "2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
              points: "20 6 9 17 4 12"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
          children: ["Message ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: "Sent!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Thanks for reaching out. We'll review your request and get back to you within 1 business day with a free estimate."
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cf-title",
          children: ["Request a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: "Free Estimate"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "cf-sub",
          children: "Tell us about your property and what you need \u2014 we'll get back to you within 1 business day."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cf-rule"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cf-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                className: "cf-label",
                children: ["Full Name ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                className: "cf-input",
                type: "text",
                name: "name",
                placeholder: "Jane Smith",
                required: true,
                value: formState.name,
                onChange: handleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                className: "cf-label",
                children: ["Email ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                className: "cf-input",
                type: "email",
                name: "email",
                placeholder: "jane@email.com",
                required: true,
                value: formState.email,
                onChange: handleChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cf-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                className: "cf-label",
                children: "Phone"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                className: "cf-input",
                type: "tel",
                name: "phone",
                placeholder: "(919) 000-0000",
                value: formState.phone,
                onChange: handleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cf-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                className: "cf-label",
                children: ["Service Needed ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                className: "cf-select",
                name: "service",
                required: true,
                value: formState.service,
                onChange: handleChange,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  value: "",
                  children: "\u2014 Select a service \u2014"
                }), services.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  value: s,
                  children: s
                }, s))]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cf-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
              className: "cf-label",
              children: ["Project Description ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
              className: "cf-textarea",
              name: "message",
              placeholder: "Describe your property, the work you need, and any relevant details \u2014 location, size, timeline...",
              required: true,
              value: formState.message,
              onChange: handleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
            className: "cf-consent",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              type: "checkbox",
              name: "consent",
              required: true,
              checked: formState.consent,
              onChange: handleChange
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "cf-consent-text",
              children: ["I agree to the", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "/terms",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Terms & Conditions"
              }), " ", "and", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "/privacy",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Privacy Policy"
              }), " ", "of TrueLine Property Solutions."]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cf-captcha",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
              ref: recaptchaRef,
              sitekey: RECAPTCHA_SITE_KEY,
              onChange: token => setCaptchaToken(token),
              onExpired: () => setCaptchaToken(null),
              theme: "light"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "submit",
            className: "cf-submit",
            disabled: status === "sending" || !formState.consent || !captchaToken,
            children: status === "sending" ? "Sending…" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
                  x1: "22",
                  y1: "2",
                  x2: "11",
                  y2: "13"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polygon", {
                  points: "22 2 15 22 11 13 2 9 22 2"
                })]
              }), "Send My Request"]
            })
          }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cf-error-banner",
            children: "Something went wrong. Please try again or contact us directly at (919) 951-8341."
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

"use strict";
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
    email: "info@truelinesolutionsus.com",
    emailHref: "mailto:info@truelinesolutionsus.com",
    location: "The Triangle & Triad — North Carolina",
    license: "Licensed & Insured",
    copyright: `© ${new Date().getFullYear()} TrueLine Property Solutions. All Rights Reserved.`
    // DEV NOTE: Update year as needed. Add BBB badge and Licensed & Insured badge in footer.
  };
  const socials = [{
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100084989864880&rdid=VlAsIHcPapOvNQSx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XcvxTFnsn%2F#",
    icon: "facebook"
  }, {
    name: "Jobber",
    href: "https://navaslandscapeservicesandmore.jobbersites.com/",
    icon: "jobber"
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
      href: "/privacy-policy"
    }, {
      name: "Terms & Conditions",
      href: "/terms-conditions"
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
    if (icon === "jobber") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
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
    });
    return null;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        /* ── BRAND TOKENS ── */
        .tl-footer {
          --f-accent:       #2A5A49;
          --f-accent-dark:  #133429;
          --f-accent-soft:  rgba(42,90,73,0.08);
          --f-accent-mid:   rgba(42,90,73,0.15);
          --f-accent-border:rgba(42,90,73,0.18);
          --f-onyx:         #091914;
          --f-white:        #FCF7EC;
          --f-lemon:        #ECEBC3;
          --f-text:         #091914;
          --f-muted:        rgba(9,25,20,0.5);
          --f-muted-light:  rgba(9,25,20,0.38);
        }

        .tl-footer {
          background: var(--f-white);
          border-top: 3px solid var(--f-accent);
          font-family: 'Barlow', sans-serif;
        }

        /* ── CTA BAND — Onyx oscuro ── */
        .tl-footer-cta-band {
          background: var(--f-onyx);
          border-bottom: 1px solid rgba(42,90,73,0.25);
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
          text-transform: uppercase; color: var(--f-white); line-height: 1.1; margin-bottom: 8px;
        }
        .tl-footer-cta-text h2 span { color: var(--f-lemon); }
        .tl-footer-cta-text p {
          color: rgba(236,235,195,0.45); font-size: 14px; line-height: 1.6; max-width: 480px;
        }
        .tl-footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .tl-footer-btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: var(--f-accent); color: var(--f-white);
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(42,90,73,0.4);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-primary:hover { background: var(--f-accent-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(42,90,73,0.5); }
        .tl-footer-btn-ghost {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: rgba(236,235,195,0.65);
          border: 1px solid rgba(236,235,195,0.25); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .tl-footer-btn-ghost:hover { border-color: var(--f-lemon); color: var(--f-lemon); background: rgba(236,235,195,0.06); }

        /* ── MAIN FOOTER — Floral White ── */
        .tl-footer-main {
          max-width: 1280px; margin: 0 auto; padding: 52px 32px 36px;
          display: grid; gap: 48px;
          grid-template-columns: 1.8fr 1fr 1fr;
        }

        /* Brand column */
        .tl-footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; text-decoration: none; }
        .tl-footer-logo-icon {
          width: 60px; height: 60px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          filter: drop-shadow(0 2px 8px rgba(42,90,73,0.25));
        }
        .tl-footer-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 19px; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--f-text); line-height: 1;
        }
        .tl-footer-logo-name span { color: var(--f-accent); }
        .tl-footer-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--f-muted-light); margin-top: 2px;
        }

        /* Tagline */
        .tl-footer-tagline {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--f-accent); margin-bottom: 14px;
          border-left: 3px solid var(--f-accent); padding-left: 12px;
        }

        .tl-footer-desc {
          color: var(--f-muted); font-size: 13.5px; line-height: 1.75; margin-bottom: 24px;
        }

        /* Contact info */
        .tl-footer-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .tl-footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          color: var(--f-muted); font-size: 13px; line-height: 1.5;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-contact-item:hover { color: var(--f-accent); }
        .tl-footer-contact-icon {
          width: 28px; height: 28px; background: var(--f-accent-soft);
          border: 1px solid var(--f-accent-border); border-radius: 4px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }

        /* Badges row */
        .tl-footer-badges { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .tl-footer-badge {
          display: flex; align-items: center; gap: 6px;
          background: var(--f-accent-soft); border: 1px solid var(--f-accent-border);
          color: var(--f-accent); font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }
        .tl-footer-badge-dot { width: 5px; height: 5px; background: var(--f-accent); border-radius: 50%; }
        /* DEV NOTE: Replace .tl-footer-badge-bbb with actual BBB logo image when available */
        .tl-footer-badge-bbb {
          display: flex; align-items: center; gap: 6px;
          background: transparent; border: 1px dashed var(--f-accent-border);
          color: var(--f-muted-light); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
        }

        /* Socials */
        .tl-footer-socials { display: flex; gap: 8px; }
        .tl-footer-social {
          width: 34px; height: 34px;
          background: var(--f-accent-soft); border: 1px solid var(--f-accent-border);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: var(--f-accent); text-decoration: none; transition: all 0.2s;
        }
        .tl-footer-social:hover { background: var(--f-accent); color: var(--f-white); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(42,90,73,0.3); }

        /* Link columns */
        .tl-footer-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--f-accent);
          margin-bottom: 16px; padding-bottom: 10px;
          border-bottom: 1px solid var(--f-accent-border);
        }
        .tl-footer-col-links { display: flex; flex-direction: column; gap: 2px; }
        .tl-footer-col-link {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 4px;
          color: var(--f-muted); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: all 0.18s;
          border-left: 2px solid transparent;
        }
        .tl-footer-col-link:hover {
          color: var(--f-accent); background: var(--f-accent-soft);
          border-left-color: var(--f-accent); padding-left: 12px;
        }
        .tl-footer-col-link svg { opacity: 0.35; flex-shrink: 0; transition: opacity 0.18s; }
        .tl-footer-col-link:hover svg { opacity: 1; }

        /* ── BOTTOM BAR — Lemon Chiffon ── */
        .tl-footer-bottom {
          background: var(--f-lemon);
          border-top: 1px solid rgba(42,90,73,0.15);
          padding: 18px 32px;
        }
        .tl-footer-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .tl-footer-copyright {
          color: var(--f-muted); font-size: 12px; font-weight: 500; letter-spacing: 0.04em;
        }
        .tl-footer-license-pill {
          display: flex; align-items: center; gap: 6px;
          background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.25);
          color: var(--f-accent); font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px;
        }
        .tl-footer-license-dot { width: 5px; height: 5px; background: var(--f-accent); border-radius: 50%; }
        .tl-footer-legal { display: flex; gap: 20px; }
        .tl-footer-legal a {
          color: var(--f-muted); font-size: 11.5px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-footer-legal a:hover { color: var(--f-accent); }

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
              }), "Request a Free Estimate"]
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/",
            className: "tl-footer-logo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/wp-content/uploads/2026/03/Imagotipo_Variante-scaled.png",
              alt: "TrueLine Property Solutions",
              style: {
                height: "52px",
                width: "auto",
                objectFit: "contain",
                display: "block"
              }
            })
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
                  stroke: "#2A5A49",
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
                  stroke: "#2A5A49",
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
                  stroke: "#2A5A49",
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
              href: "/privacy-policy",
              children: "Privacy Policy"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/terms-conditions",
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HeroCRE() {
  // ─── DATOS — edita aquí ───────────────────────────────────────────────
  const heroData = {
    eyebrow: "Holly Springs · Cary · Raleigh · Durham · Chapel Hill",
    headline: ["Your Property", "Held to a", "Higher Standard."],
    headlineAccent: 2,
    subheadline: "Complete exterior and property solutions for homeowners who expect quality, reliability, and results that last across the Triangle and Triad of North Carolina.",
    cta2: {
      label: "Explore Our Services",
      href: "#services"
    }
  };
  const stats = [{
    value: "Licensed &\nInsured",
    label: "Fully Covered"
  }, {
    value: "BBB",
    label: "Accredited"
  }, {
    value: "Serving Holly Springs,\nCary, Chapel Hill & Beyond",
    label: "Service Area"
  }, {
    value: "Continuous\nTraining",
    label: "Certified Specialists"
  }];
  // ─────────────────────────────────────────────────────────────────────

  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // ─── IMÁGENES DEL SLIDESHOW ────────────────────────────────────────
  // Actualizar con las URLs finales de WordPress Media
  const slides = ['/wp-content/uploads/2026/04/TruelineHeroSlide1-scaled.jpg', '/wp-content/uploads/2026/04/TruelineHeroSlide2-scaled.jpeg',
  // DEV: reemplazar con imagen real
  '/wp-content/uploads/2026/04/TruelineHeroSlide3-scaled.jpg' // DEV: reemplazar con imagen real
  ];
  // ──────────────────────────────────────────────────────────────────

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000); // cambia cada 6 segundos
    return () => clearInterval(interval);
  }, [slides.length]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .tl-hero {
          position: relative; overflow: hidden;
          min-height: 100vh;
          display: flex; flex-direction: column;
          background: #091914;
        }

        /* ── SLIDESHOW LAYERS ── */
        .tl-slide {
          position: absolute; inset: 0; z-index: 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        .tl-slide.active { opacity: 1; }
        .tl-slide-overlay {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(160deg, rgba(9,25,20,0.88) 0%, rgba(15,32,21,0.82) 55%, rgba(19,52,41,0.80) 100%);
        }

        /* Watermark */
        .tl-hero-wm {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          display: flex; align-items: center; justify-content: space-between; padding: 0 4%;
        }
        .tl-hero-wm svg { width: min(200px, 18%); opacity: 0.03; filter: brightness(100) grayscale(1); }

        /* Glows */
        .tl-hero-glows { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        .tl-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); animation: tlGlow 8s ease-in-out infinite;
        }
        .tl-glow-1 { width: 500px; height: 500px; background: rgba(42,90,73,0.12); top: -120px; left: -100px; }
        .tl-glow-2 { width: 400px; height: 400px; background: rgba(19,52,41,0.1); bottom: -80px; right: 40%; animation-delay: 3s; }
        .tl-glow-3 { width: 350px; height: 350px; background: rgba(42,90,73,0.08); top: 20%; right: -60px; animation-delay: 5s; }
        @keyframes tlGlow {
          0%,100% { transform: scale(1) translate(0,0); opacity: 1; }
          50% { transform: scale(1.12) translate(15px,-15px); opacity: 0.7; }
        }

        /* Grid */
        .tl-hero-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── CONTENT — two column layout ── */
        .tl-hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 100px 4% 72px;
          max-width: 1600px; margin: 0 auto; width: 100%;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
          gap: 64px;
        }
        .tl-hero-content.visible { opacity: 1; transform: translateY(0); }

        /* Left column */
        .tl-hero-left {
          flex: 1; min-width: 0; max-width: 680px;
          display: flex; flex-direction: column; gap: 0;
        }

        /* Right column */
        .tl-hero-right {
          width: 420px; flex-shrink: 0;
        }

        .tl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(42,90,73,0.1); border: 1px solid rgba(42,90,73,0.3);
          color: rgba(42,160,90,0.9); font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 3px;
          margin-bottom: 28px; width: fit-content;
          animation: badgeFade 0.6s 0.2s both;
        }
        @keyframes badgeFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
        .tl-badge-dot { width: 6px; height: 6px; background: #2A5A49; border-radius: 50%; animation: tlPulse 2s infinite; flex-shrink: 0; }
        @keyframes tlPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .tl-hero h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
          font-size: clamp(52px, 7vw, 108px); line-height: 0.92;
          letter-spacing: 0.01em; text-transform: uppercase;
          color: #e8e0d5; margin-bottom: 24px;
        }
        .tl-hero h1 .accent {
          color: #ECEBC3;
          text-shadow: 0 0 60px rgba(42,90,73,0.4);
        }

        .tl-hero-sub {
          font-size: clamp(24px, 1.4vw, 16px); line-height: 1.75;
          color: rgba(200,215,240,0.5); max-width: 520px;
          margin-bottom: 36px;
        }

        .tl-hero-ghost-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; background: transparent; color: rgba(210,220,240,0.65);
          border: 1px solid rgba(42,90,73,0.35); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s; text-decoration: none; width: fit-content;
          margin-bottom: 48px;
        }
        .tl-hero-ghost-btn:hover { border-color: #ECEBC3; color: #FCF7EC; background: rgba(42,90,73,0.1); }

        /* Trust stats row */
        .tl-hero-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
        }
        .tl-hero-stat {
          padding: 16px 14px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tl-hero-stat:last-child { border-right: none; }
        .tl-hero-stat-icon {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px;
        }
        .tl-hero-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(190,205,235,0.5);
          line-height: 1.3;
        }

        /* Form wrapper — override cf-wrap shadow para integrarlo mejor */
        .tl-hero-form-wrap .cf-wrap {
          background: rgba(13,22,16,0.92) !important;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(42,90,73,0.25);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5) !important;
        }
        .tl-hero-form-wrap .cf-title { color: #e8e0d5 !important; }
        .tl-hero-form-wrap .cf-sub { color: rgba(200,215,240,0.45) !important; }
        .tl-hero-form-wrap .cf-label { color: rgba(190,210,240,0.55) !important; }
        .tl-hero-form-wrap .cf-input,
        .tl-hero-form-wrap .cf-select,
        .tl-hero-form-wrap .cf-textarea {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(42,90,73,0.25) !important;
          color: #e8e0d5 !important;
        }
        .tl-hero-form-wrap .cf-input::placeholder,
        .tl-hero-form-wrap .cf-textarea::placeholder {
          color: rgba(200,215,240,0.25) !important;
        }
        .tl-hero-form-wrap .cf-input:focus,
        .tl-hero-form-wrap .cf-select:focus,
        .tl-hero-form-wrap .cf-textarea:focus {
          background: rgba(255,255,255,0.08) !important;
          border-color: #2A5A49 !important;
        }
        .tl-hero-form-wrap .cf-success h3 { color: #e8e0d5 !important; }
        .tl-hero-form-wrap .cf-success p { color: rgba(200,215,240,0.5) !important; }

        /* Wave */
        .tl-hero-wave { position: relative; z-index: 10; margin-top: -2px; line-height: 0; }
        .tl-hero-wave svg { display: block; width: 100%; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .tl-hero-right { width: 360px; }
          .tl-hero h1 { font-size: clamp(44px, 6vw, 84px); }
        }
        @media (max-width: 900px) {
          .tl-hero-content {
            flex-direction: column; align-items: stretch;
            padding: 80px 24px 56px; gap: 40px;
          }
          .tl-hero-right { width: 100%; }
          .tl-hero h1 { font-size: clamp(44px, 10vw, 72px); }
          .tl-hero-sub { max-width: 100%; }
          .tl-hero-badge { margin-bottom: 20px; }
          .tl-hero-ghost-btn { margin-bottom: 32px; }
        }
        @media (max-width: 540px) {
          .tl-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .tl-hero-stat:nth-child(2) { border-right: none; }
          .tl-hero-stat:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.06); }
          .tl-hero-stat:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.06); }
        }
       @media (min-width: 1600px) {
          .tl-hero-content { padding: 100px 6% 72px; max-width: 1800px; }
          .tl-hero-left { max-width: 780px; }
          .tl-hero-right { width: 480px; }
        } 
        
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
      className: "tl-hero",
      children: [slides.map((src, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: `tl-slide ${i === currentSlide ? 'active' : ''}`,
        style: {
          backgroundImage: `url('${src}')`
        }
      }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "tl-slide-overlay"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "tl-hero-wm",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
          viewBox: "0 0 40 40",
          fill: "white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
            points: "20,2 38,11 38,29 20,38 2,29 2,11"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M12 28 L12 18 L20 12 L28 18 L28 28",
            stroke: "white",
            strokeWidth: "1.5",
            fill: "none",
            strokeLinejoin: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
            x1: "12",
            y1: "28",
            x2: "28",
            y2: "28",
            stroke: "white",
            strokeWidth: "1.5"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
          viewBox: "0 0 40 40",
          fill: "white",
          style: {
            transform: "scaleX(-1)"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
            points: "20,2 38,11 38,29 20,38 2,29 2,11"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M12 28 L12 18 L20 12 L28 18 L28 28",
            stroke: "white",
            strokeWidth: "1.5",
            fill: "none",
            strokeLinejoin: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
            x1: "12",
            y1: "28",
            x2: "28",
            y2: "28",
            stroke: "white",
            strokeWidth: "1.5"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "tl-hero-glows",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "tl-glow tl-glow-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "tl-glow tl-glow-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "tl-glow tl-glow-3"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "tl-hero-grid"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `tl-hero-content ${visible ? "visible" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "tl-hero-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "tl-hero-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "tl-badge-dot"
            }), heroData.eyebrow]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            children: heroData.headline.map((line, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: i === heroData.headlineAccent ? "accent" : "",
              children: [line, i < heroData.headline.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "tl-hero-sub",
            children: heroData.subheadline
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: heroData.cta2.href,
            className: "tl-hero-ghost-btn",
            children: [heroData.cta2.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              width: "13",
              height: "13",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
                points: "9 18 15 12 9 6"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "tl-hero-stats",
            children: [{
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#2A5A49",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                })
              }),
              label: "Licensed &\nInsured"
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#2A5A49",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                  cx: "12",
                  cy: "8",
                  r: "6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
                })]
              }),
              label: "BBB\nAccredited"
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#2A5A49",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                  cx: "12",
                  cy: "10",
                  r: "3"
                })]
              }),
              label: "Serving Holly Springs,\nCary & Beyond"
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#2A5A49",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
                })]
              }),
              label: "Continuous\nTraining"
            }].map((s, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "tl-hero-stat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "tl-hero-stat-icon",
                children: s.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "tl-hero-stat-label",
                children: s.label
              })]
            }, i))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "tl-hero-right tl-hero-form-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ContactForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
            compact: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "tl-hero-wave",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
          viewBox: "0 0 1440 100",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          style: {
            height: "clamp(40px,6vw,80px)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 36C840 32 960 32 1080 36C1200 40 1320 46 1380 49L1440 52V100H0V0Z",
            fill: "#FCF7EC"
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

"use strict";
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
    hasDropdown: false
  }, {
    name: "Contact Us",
    link: "/contact",
    hasDropdown: false
  }];
  // ────────────────────────────────────────────────────────────────────────

  // ─── BRANDING — Paleta final TrueLine Property Solutions ────────────────
  // Accent: #2A5A49 Pine Teal · Hover: #133429 Evergreen · Dark bg: #091914 Onyx
  // Logo: reemplazar SVG placeholder con asset final de 828 Marketing Solutions
  // ────────────────────────────────────────────────────────────────────────

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── BRAND TOKENS — TrueLine Property Solutions ── */
        :root {
          --tl-accent:              #2A5A49;
          --tl-accent-hover:        #133429;
          --tl-accent-glow:         rgba(42,90,73,0.3);
          --tl-accent-soft:         rgba(42,90,73,0.08);
          --tl-accent-border:       rgba(42,90,73,0.2);
          --tl-accent-border-strong:rgba(42,90,73,0.4);
          --tl-dark-bg:             #091914;
          --tl-nav-bg:              #FCF7EC;
          --tl-nav-scrolled:        rgba(252,247,236,0.97);
          --tl-dropdown-bg:         #FCF7EC;
          --tl-text:                #091914;
          --tl-text-muted:          rgba(9,25,20,0.5);
          --tl-lemon:               #ECEBC3;
        }

        /* ── TOP BAR ── */
        .tl-top {
          background: var(--tl-dark-bg);
          border-bottom: 1px solid rgba(42,90,73,0.3);
          height: 36px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
        }
        .tl-top-left { display: flex; align-items: center; gap: 18px; flex: 1; }
        .tl-top-center { flex-shrink: 0; }
        .tl-top-item {
          display: flex; align-items: center; gap: 5px;
          color: rgba(236,235,195,0.6); font-family: 'Barlow', sans-serif;
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; transition: color 0.2s;
        }
        .tl-top-item:hover { color: var(--tl-lemon); }
        .tl-top-sep { width: 1px; height: 14px; background: rgba(255,255,255,0.1); flex-shrink: 0; }
        .tl-top-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(42,90,73,0.25);
          border: 1px solid rgba(42,90,73,0.5);
          color: var(--tl-lemon); font-family: 'Barlow', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 2px 10px; border-radius: 2px;
        }
        /* Social icons */
        .tl-top-social { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .tl-top-social-icon {
          display: flex; align-items: center; justify-content: center;
          color: rgba(236,235,195,0.5); transition: color 0.2s; text-decoration: none;
        }
        .tl-top-social-icon:hover { color: var(--tl-lemon); }
        .tl-top-social-text {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em;
        }
        .tl-dot {
          width: 5px; height: 5px;
          background: #ECEBC3; border-radius: 50%;
          animation: tlPulse 2s infinite;
        }
        @keyframes tlPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        /* ── NAVBAR ── */
        .tl-nav {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(42,90,73,0.12);
        }
        .tl-nav.top { background: var(--tl-nav-bg); }
        .tl-nav.scrolled {
          background: var(--tl-nav-scrolled);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 24px rgba(9,25,20,0.1), 0 1px 0 rgba(42,90,73,0.12);
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
          filter: drop-shadow(0 2px 8px var(--tl-accent-glow));
        }
        .tl-logo:hover .tl-logo-icon { transform: scale(1.08); filter: drop-shadow(0 4px 14px var(--tl-accent-glow)); }
        .tl-logo-name {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--tl-text); line-height: 1;
        }
        .tl-logo-name span { color: var(--tl-accent); }
        .tl-logo-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--tl-text-muted); margin-top: 2px;
        }

        /* ── DESKTOP LINKS ── */
        .tl-links { display: flex; align-items: center; list-style: none; gap: 0; flex: 1; justify-content: center; }
        .tl-link-item { position: relative; }
        .tl-link {
          display: flex; align-items: center; gap: 4px; padding: 8px 12px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 13.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--tl-text-muted); background: none; border: none; cursor: pointer;
          border-radius: 4px; transition: color 0.2s, background 0.2s; text-decoration: none;
        }
        .tl-link:hover { color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-link.active { color: var(--tl-accent); }
        .tl-active-line {
          position: absolute; bottom: -1px; left: 12px; right: 12px;
          height: 2px; background: linear-gradient(90deg, var(--tl-accent), var(--tl-accent-hover));
          border-radius: 2px 2px 0 0;
        }
        .tl-chevron { opacity: 0.45; transition: transform 0.25s; flex-shrink: 0; }
        .tl-chevron.open { transform: rotate(180deg); opacity: 0.8; }

        /* ── MEGA DROPDOWN ── */
        .tl-mega {
          position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: var(--tl-dropdown-bg); border: 1px solid rgba(42,90,73,0.15);
          border-radius: 6px; padding: 18px 22px; z-index: 200;
          box-shadow: 0 12px 40px rgba(9,25,20,0.12), 0 2px 8px rgba(9,25,20,0.08);
          transition: opacity 0.2s, transform 0.2s;
          min-width: 200px;
        }
        .tl-mega.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .tl-mega.closed { opacity: 0; transform: translateX(-50%) translateY(-8px); pointer-events: none; }
        .tl-mega::before {
          content: ''; position: absolute; top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px; height: 8px; background: var(--tl-dropdown-bg);
          border-left: 1px solid rgba(42,90,73,0.15);
          border-top: 1px solid rgba(42,90,73,0.15);
        }
        .tl-mega-grid { display: grid; gap: 20px; }
        .tl-mega-col-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          margin-bottom: 8px; padding-bottom: 7px;
          border-bottom: 1px solid rgba(42,90,73,0.15);
          text-decoration: none; display: block; transition: color 0.2s;
        }
        .tl-mega-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 10px; border-radius: 4px;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: var(--tl-text-muted); text-decoration: none;
          transition: all 0.15s; cursor: pointer;
          border: none; background: none; width: 100%; text-align: left; white-space: nowrap;
        }
        .tl-mega-item:hover { color: var(--tl-accent); background: var(--tl-accent-soft); padding-left: 14px; }
        .tl-mega-item-icon { opacity: 0.35; flex-shrink: 0; margin-left: 8px; }
        .tl-mega-item:hover .tl-mega-item-icon { opacity: 0.8; }

        /* ── RIGHT ACTIONS ── */
        .tl-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .tl-cta {
          display: flex; align-items: center; gap: 8px; padding: 9px 18px;
          background: var(--tl-accent); color: #FCF7EC; border: none; border-radius: 4px;
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          box-shadow: 0 4px 14px var(--tl-accent-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s; white-space: nowrap;
          position: relative; overflow: hidden; text-decoration: none;
        }
        .tl-cta::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(252,247,236,0.15), transparent);
          transform: skewX(-15deg); transition: left 0.5s;
        }
        .tl-cta:hover::before { left: 160%; }
        .tl-cta:hover { background: var(--tl-accent-hover); transform: translateY(-2px); box-shadow: 0 8px 22px rgba(42,90,73,0.4); }

        /* ── HAMBURGER ── */
        .tl-ham {
          display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border);
          border-radius: 4px; cursor: pointer; transition: background 0.2s;
        }
        .tl-ham:hover { background: rgba(42,90,73,0.14); }
        .tl-hbar { width: 20px; height: 2px; background: var(--tl-accent); border-radius: 2px; transition: all 0.3s; transform-origin: center; }
        .tl-ham.open .tl-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .tl-ham.open .tl-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .tl-ham.open .tl-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .tl-mob {
          position: fixed; inset: 0; z-index: 1100; background: #FCF7EC;
          display: flex; flex-direction: column; overflow-y: auto;
          transition: opacity 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .tl-mob.open { opacity: 1; transform: none; pointer-events: all; }
        .tl-mob.closed { opacity: 0; transform: translateX(100%); pointer-events: none; }
        .tl-mob-head {
          padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(42,90,73,0.12); flex-shrink: 0;
          background: #FCF7EC;
        }
        .tl-mob-x {
          width: 38px; height: 38px; background: var(--tl-accent-soft);
          border: 1px solid var(--tl-accent-border); border-radius: 4px;
          color: var(--tl-accent); font-size: 18px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .tl-mob-body { flex: 1; padding: 16px 24px; background: #FCF7EC; }
        .tl-mob-item-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border-radius: 4px; background: none; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--tl-text-muted); transition: all 0.2s; text-align: left;
          border-left: 3px solid transparent; text-decoration: none;
        }
        .tl-mob-item-btn:hover, .tl-mob-item-btn.active { color: var(--tl-accent); border-left-color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-mob-chevron { transition: transform 0.25s; opacity: 0.4; flex-shrink: 0; }
        .tl-mob-chevron.open { transform: rotate(180deg); opacity: 1; }
        .tl-mob-submenu { padding: 4px 0 8px 16px; }
        .tl-mob-col-title {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--tl-accent);
          padding: 10px 10px 6px; opacity: 0.7;
        }
        .tl-mob-sublink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 4px; margin: 2px 0;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          color: var(--tl-text-muted); text-decoration: none; transition: all 0.15s;
        }
        .tl-mob-sublink:hover { color: var(--tl-accent); background: var(--tl-accent-soft); }
        .tl-mob-foot {
          padding: 20px 24px; border-top: 1px solid rgba(42,90,73,0.12); flex-shrink: 0;
          background: #ECEBC3;
        }
        .tl-mob-cta {
          width: 100%; padding: 14px; background: var(--tl-accent); color: #FCF7EC;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 20px var(--tl-accent-glow); text-decoration: none;
        }

        /* ── MOBILE CONTACT BLOCK ── */
        .tl-mob-contact {
          padding: 16px 24px;
          border-top: 1px solid rgba(42,90,73,0.12);
          background: #FCF7EC;
          display: flex; flex-direction: column; gap: 10px;
        }
        .tl-mob-contact-item {
          display: flex; align-items: center; gap: 8px;
          color: rgba(9,25,20,0.5); font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: color 0.2s;
        }
        .tl-mob-contact-item:hover { color: var(--tl-accent); }
        .tl-mob-social-row {
          display: flex; align-items: center; gap: 14px;
          padding-top: 8px; border-top: 1px solid rgba(42,90,73,0.08);
        }
        .tl-mob-social-icon {
          display: flex; align-items: center; justify-content: center;
          color: rgba(9,25,20,0.4); transition: color 0.2s; text-decoration: none;
        }
        .tl-mob-social-icon:hover { color: var(--tl-accent); }
        .tl-mob-social-text {
          font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .tl-links, .tl-cta { display: none !important; }
          .tl-ham { display: flex !important; }
          /* Top bar mobile — simplified */
          .tl-top { height: auto; padding: 6px 20px; flex-wrap: wrap; gap: 6px; }
          .tl-top-center { display: none !important; }
          /* Left — keep only phone, hide email & badge */
          .tl-top-left { gap: 10px; flex: 1; min-width: 0; }
          .tl-top-left .tl-top-sep { display: none; }
          .tl-top-left .tl-top-badge { display: none; }
          .tl-top-left a:last-of-type { display: none; } /* hide email */
          /* Social — keep visible */
          .tl-top-social { display: flex !important; gap: 12px; }
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "tl-top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-top-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "tel:+19199518341",
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
          }), "(919) 951-8341"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "mailto:navaslandscapenc1@gmail.com",
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
          }), "info@truelinesolutionsus.com"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-top-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "tl-dot"
          }), "Licensed & Insured"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
        href: "/service-areas",
        className: "tl-top-item tl-top-center",
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
        }), "Serving North Carolina"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-top-social",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://facebook.com/truelinepropertysolutions",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tl-top-social-icon",
          "aria-label": "Facebook",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://instagram.com/truelinepropertysolutions",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tl-top-social-icon",
          "aria-label": "Instagram",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
              x: "2",
              y: "2",
              width: "20",
              height: "20",
              rx: "5"
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
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://linkedin.com/company/truelinepropertysolutions",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tl-top-social-icon",
          "aria-label": "LinkedIn",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
              x: "2",
              y: "9",
              width: "4",
              height: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
              cx: "4",
              cy: "4",
              r: "2"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "tl-top-sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://www.bbb.org/us/nc/chapel-hill/profile/landscape-contractors/navas-landscape-services-llc-0593-90339816",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tl-top-social-icon tl-top-social-text",
          "aria-label": "BBB",
          children: "BBB"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://www.google.com/search?kgmid=/g/11s4gclddv&q=Nava%27s+Landscape+Services+and+More",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tl-top-social-icon",
          "aria-label": "Google Reviews",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
              opacity: "0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M21.35 11.1h-9.17v2.73h5.51c-.56 2.37-2.67 3.98-5.51 3.98-3.36 0-6.08-2.72-6.08-6.08s2.72-6.08 6.08-6.08c1.56 0 2.97.59 4.04 1.55l2.06-2.06C16.56 3.67 14.41 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.56 0 9.25-3.91 9.25-9.41 0-.63-.07-1.24-.15-1.74z"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `tl-nav ${isScrolled ? "scrolled" : "top"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `tl-inner ${isScrolled ? "scrolled" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          className: "tl-logo",
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: "/wp-content/uploads/2026/03/Imagotipo_Principal-scaled.png",
            alt: "TrueLine Property Solutions",
            style: {
              height: "48px",
              width: "auto",
              objectFit: "contain",
              display: "block"
            }
          })
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          className: "tl-logo",
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: "/wp-content/uploads/2026/03/Imagotipo_Principal-scaled.png",
            alt: "TrueLine Property Solutions",
            style: {
              height: "36px",
              width: "auto",
              objectFit: "contain",
              display: "block"
            }
          })
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tl-mob-contact",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "tel:+19199518341",
          className: "tl-mob-contact-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.006 1.22 2 2 0 012 .002h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            })
          }), "(919) 951-8341"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "mailto:info@truelinesolutionsus.com",
          className: "tl-mob-contact-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "22,6 12,13 2,6"
            })]
          }), "info@truelinesolutionsus.com"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "tl-mob-social-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://facebook.com/truelinepropertysolutions",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "tl-mob-social-icon",
            "aria-label": "Facebook",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://instagram.com/truelinepropertysolutions",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "tl-mob-social-icon",
            "aria-label": "Instagram",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
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
                rx: "5"
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
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://linkedin.com/company/truelinepropertysolutions",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "tl-mob-social-icon",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                x: "2",
                y: "9",
                width: "4",
                height: "12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                cx: "4",
                cy: "4",
                r: "2"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.bbb.org/us/nc/chapel-hill/profile/landscape-contractors/navas-landscape-services-llc-0593-90339816",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "tl-mob-social-icon tl-mob-social-text",
            "aria-label": "BBB",
            children: "BBB"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.google.com/search?kgmid=/g/11s4gclddv&q=Nava%27s+Landscape+Services+and+More",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "tl-mob-social-icon",
            "aria-label": "Google Reviews",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M21.35 11.1h-9.17v2.73h5.51c-.56 2.37-2.67 3.98-5.51 3.98-3.36 0-6.08-2.72-6.08-6.08s2.72-6.08 6.08-6.08c1.56 0 2.97.59 4.04 1.55l2.06-2.06C16.56 3.67 14.41 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.56 0 9.25-3.91 9.25-9.41 0-.63-.07-1.24-.15-1.74z"
              })
            })
          })]
        })]
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

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ },

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ },

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ },

/***/ "./node_modules/object-assign/index.js"
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ },

/***/ "./node_modules/prop-types/checkPropTypes.js"
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ },

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js"
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ },

/***/ "./node_modules/prop-types/index.js"
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else // removed by dead control flow
{}


/***/ },

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ },

/***/ "./node_modules/prop-types/lib/has.js"
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/index.js"
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ },

/***/ "./node_modules/react-async-script/lib/esm/async-script-loader.js"
/*!************************************************************************!*\
  !*** ./node_modules/react-async-script/lib/esm/async-script-loader.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeAsyncScript)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;
function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      var _proto = AsyncScriptLoader.prototype;

      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }

        return this.__scriptLoaderID;
      };

      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];

        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }

        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }

        delete window[options.callbackName];
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already


        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue


          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };

          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */


        var observers = {};

        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };

        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;

        for (var attribute in options.attributes) {
          script.setAttribute(attribute, options.attributes[attribute]);
        }

        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }

              observer(mapEntry);
              return true;
            });
          }
        };

        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;

        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");

          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry


        var mapEntry = SCRIPT_MAP[scriptURL];

        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];

          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props,
            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,
            forwardedRef = _this$props.forwardedRef,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }

        childProps.ref = forwardedRef;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
    };
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(ForwardedComponent, WrappedComponent);
  };
}

/***/ },

/***/ "./node_modules/react-dom/client.js"
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


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

/***/ "./node_modules/react-google-recaptcha/lib/esm/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/index.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReCAPTCHA: () => (/* reexport safe */ _recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha-wrapper */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js");
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js"
/*!**************************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");
/* harmony import */ var react_async_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-async-script */ "./node_modules/react-async-script/lib/esm/async-script-loader.js");


var callbackName = "onloadcallback";
var globalName = "grecaptcha";
function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}
function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  if (dynamicOptions.enterprise) {
    return "https://" + hostname + "/recaptcha/enterprise.js?onload=" + callbackName + "&render=explicit";
  }
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_async_script__WEBPACK_IMPORTED_MODULE_1__["default"])(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  attributes: getOptions().nonce ? {
    nonce: getOptions().nonce
  } : {}
})(_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ },

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js"
/*!******************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReCAPTCHA)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl", "isolated"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ReCAPTCHA = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReCAPTCHA, _React$Component);
  function ReCAPTCHA() {
    var _this;
    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = ReCAPTCHA.prototype;
  _proto.getCaptchaFunction = function getCaptchaFunction(fnName) {
    if (this.props.grecaptcha) {
      if (this.props.grecaptcha.enterprise) {
        return this.props.grecaptcha.enterprise[fnName];
      }
      return this.props.grecaptcha[fnName];
    }
    return null;
  };
  _proto.getValue = function getValue() {
    var getResponse = this.getCaptchaFunction("getResponse");
    if (getResponse && this._widgetId !== undefined) {
      return getResponse(this._widgetId);
    }
    return null;
  };
  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }
    return null;
  };
  _proto.execute = function execute() {
    var execute = this.getCaptchaFunction("execute");
    if (execute && this._widgetId !== undefined) {
      return execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };
  _proto.executeAsync = function executeAsync() {
    var _this2 = this;
    return new Promise(function (resolve, reject) {
      _this2.executionResolve = resolve;
      _this2.executionReject = reject;
      _this2.execute();
    });
  };
  _proto.reset = function reset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter && this._widgetId !== undefined) {
      resetter(this._widgetId);
    }
  };
  _proto.forceReset = function forceReset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter) {
      resetter();
    }
  };
  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };
  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) {
      this.props.onErrored();
    }
    if (this.executionReject) {
      this.executionReject();
      delete this.executionResolve;
      delete this.executionReject;
    }
  };
  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) {
      this.props.onChange(token);
    }
    if (this.executionResolve) {
      this.executionResolve(token);
      delete this.executionReject;
      delete this.executionResolve;
    }
  };
  _proto.explicitRender = function explicitRender() {
    var render = this.getCaptchaFunction("render");
    if (render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge,
        isolated: this.props.isolated
      });
      this.captcha.appendChild(wrapper);
    }
    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };
  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };
  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
    /* eslint-disable no-unused-vars */
    var _this$props = this.props,
      sitekey = _this$props.sitekey,
      onChange = _this$props.onChange,
      theme = _this$props.theme,
      type = _this$props.type,
      tabindex = _this$props.tabindex,
      onExpired = _this$props.onExpired,
      onErrored = _this$props.onErrored,
      size = _this$props.size,
      stoken = _this$props.stoken,
      grecaptcha = _this$props.grecaptcha,
      badge = _this$props.badge,
      hl = _this$props.hl,
      isolated = _this$props.isolated,
      childProps = _objectWithoutPropertiesLoose(_this$props, _excluded);
    /* eslint-enable no-unused-vars */
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };
  return ReCAPTCHA;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  grecaptcha: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["dark", "light"]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["image", "audio"]),
  tabindex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onExpired: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onErrored: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["compact", "normal", "invisible"]),
  stoken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  badge: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
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

// ─── CONTACT FORM — contact-template.php y cualquier página con el div ──
if (document.querySelector("#cre-contact-form")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-contact-form")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
}

// ─── CONTACT FORM — services-template.php ────────────────────────────────
if (document.querySelector("#cre-contact-form-services")) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#cre-contact-form-services")).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    compact: true
  }));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map