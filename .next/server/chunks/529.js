"use strict";
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(615);
;// CONCATENATED MODULE: ./components/HamBurger.jsx



const HamburgerMenu = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-2",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_burger_menu_.slide, {
            customBurgerIcon: /*#__PURE__*/ jsx_runtime_.jsx(HamburgerIcon, {}),
            width: "auto",
            className: "-left-0 top-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Links, {})
        })
    })
;
const HamburgerIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-1/2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "w-8 h-8 text-gray-100",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "3",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 6h16M4 12h16M4 18h16"
            })
        })
    })
;
const Links = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col justify-around items-center mt-4 cursor-pointer pt-0.5 font-header font-semibold uppercase text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#services",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Services"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#portfolio",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#work",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Work"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#statistics",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Statistics"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#blog",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Blog"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "font-bold py-2 px-4 hover:underline bg-transparent",
                    children: "Contact"
                })
            })
        ]
    })
;
/* harmony default export */ const HamBurger = (HamburgerMenu);

;// CONCATENATED MODULE: ./components/BlogHeader.jsx



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sm:w-full z-50 top-0 w-[100%] fixed overflow-x-hidden py-3 bg-gradient-to-r",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex items-center justify-around",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        className: "flex items-center space-x-2 text-yellow-500 font-semibold",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "font-semibold flex items-center text-3xl text-white",
                            children: "PROKXIMUS"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-full h-8 lg:h-8 flex justify-between items-center mb-4 text-white rounded-md ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex lg:hidden items-center mt-4 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HamBurger, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:flex",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Links, {})
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const BlogHeader = (Header);


/***/ }),

/***/ 127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gradient-to-r",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col justify-between py-6 sm:flex-row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center font-body text-white md:text-left",
                    children: "\xa9 Copyright 2022. All right reserved, PROKXIMUS."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center pt-5 sm:justify-start sm:pt-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://instagram.com/prokximus",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bx bxl-instagram text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://twitter.com/prokximus",
                            className: "pl-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bx bxl-twitter text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://github.com/SyedAdeebWebDesigning",
                            className: "pl-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bx bxl-github text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.facebook.com/s.a.abidi.9/",
                            className: "pl-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bx bxl-facebook-square text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;