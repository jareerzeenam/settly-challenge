"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Create_jsx"],{

/***/ "./resources/js/Pages/Auth/Create.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Auth/Create.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Login(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    email: '',
    password: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  function login(e) {
    e.preventDefault();
    post('/sigh-up');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "App - Login"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
        className: "grid place-item-center ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
          className: "bg-white p-8 rounded-xl max-w-md mx-auto border",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
            className: "text-3xl",
            children: "Login"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            onSubmit: login,
            method: "POST",
            className: "max-w-md mx-auto mt-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                htmlFor: "email",
                className: "block mb-2 uppercase font-bold text-xs test-gray-700",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                type: "email",
                className: "border rounded border-gray-400 p-2 ml-1",
                name: "email",
                id: "email",
                value: data.email,
                onChange: function onChange(e) {
                  return setData('email', e.target.value);
                }
              }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                children: errors.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                htmlFor: "password",
                className: "block mb-2 uppercase font-bold text-xs test-gray-700",
                children: "Password"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                type: "password",
                className: "border rounded border-gray-400 p-2 ml-1",
                name: "password",
                id: "password",
                value: data.password,
                onChange: function onChange(e) {
                  return setData('password', e.target.value);
                }
              }), errors.password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-red-500 text-xm mt-1",
                children: errors.password
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500",
                children: "Log In"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: ["No account yet? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              className: "text-blue-600",
              href: "/sign-up",
              children: "Create one here."
            })]
          })]
        })
      })
    })]
  });
}

/***/ })

}]);