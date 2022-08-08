"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_SignUp_jsx"],{

/***/ "./resources/js/Pages/Auth/SignUp.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Auth/SignUp.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SignUp(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    email: '',
    password: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  function signUp(e) {
    e.preventDefault();
    post('/sign-up');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-blue-300",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "App - Sign Up"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
      "class": "grid place-items-center min-h-screen",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "bg-white p-8 rounded-xl max-w-md mx-auto border",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-3xl",
          children: "Create your account"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
          onSubmit: signUp,
          method: "POST",
          className: "max-w-md mx-auto mt-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "name",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "text",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "name",
              id: "name",
              value: data.name,
              onChange: function onChange(e) {
                return setData('name', e.target.value);
              }
            }), errors.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-red-500 text-xm mt-1",
              children: errors.name
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "surname",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Surname"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "text",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "surname",
              id: "surname",
              value: data.surname,
              onChange: function onChange(e) {
                return setData('surname', e.target.value);
              }
            }), errors.surname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-red-500 text-xm mt-1",
              children: errors.surname
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "email",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "email",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "email",
              id: "email",
              value: data.email,
              onChange: function onChange(e) {
                return setData('email', e.target.value);
              }
            }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: errors.email
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "email_confirmation",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Email Confirm"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "email",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "email_confirmation",
              id: "email_confirmation",
              value: data.email_confirmation,
              onChange: function onChange(e) {
                return setData('email_confirmation', e.target.value);
              }
            }), errors.email_confirmation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-red-500 text-xm mt-1",
              children: errors.email_confirmation
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "password",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "password",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "password",
              id: "password",
              value: data.password,
              onChange: function onChange(e) {
                return setData('password', e.target.value);
              }
            }), errors.password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-red-500 text-xm mt-1",
              children: errors.password
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "password_confirmation",
              className: "block mb-2 uppercase font-bold text-xs test-gray-700",
              children: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "password",
              className: "w-full border rounded border-gray-400 p-2 ml-1",
              name: "password_confirmation",
              id: "password_confirmation",
              value: data.password_confirmation,
              onChange: function onChange(e) {
                return setData('password_confirmation', e.target.value);
              }
            }), errors.password_confirmation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-red-600 text-xm mt-1",
              children: errors.password_confirmation
            })]
          }), props.recaptchaKey ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "g-recaptcha p-2 ",
            "data-sitekey": props.recaptchaKey
          }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "w-full bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 btn-lg",
              children: "Create Account"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            className: "text-blue-600",
            href: "/login",
            children: "Login here."
          })]
        })]
      })
    })]
  });
}

/***/ })

}]);