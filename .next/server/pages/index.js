"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-sanity/"
const _namespaceObject = require("next-sanity/");
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__(791);
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/BlogHeader.jsx + 1 modules
var BlogHeader = __webpack_require__(669);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Hero.jsx


function Hero() {
    const profiles = {
        name: [
            "H",
            "e",
            "l",
            "l",
            "o",
            " ",
            "I",
            `'`,
            "m",
            " ",
            "S",
            "y",
            "e",
            "d",
            " ",
            "A",
            "d",
            "e",
            "e",
            "b", 
        ],
        desc: `A passionate Web and Graphics designer who loves turning bold ideas into impactful and memorable experiences. `,
        image: `assets/img/Me4.jpg`
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative bg-cover bg-center bg-no-repeat py-8",
            style: {
                backgroundImage: "url(/assets/img/bg-hero.jpg)"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute inset-0 z-20 bg-gradient-to-r opacity-95 bg-cover bg-center bg-no-repeat"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-center lg:flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-full border-8 border-primary shadow-xl",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: profiles.image,
                                    className: "h-28 rounded-full md:h-48",
                                    alt: "author"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pt-8 sm:pt-10 lg:pl-8 lg:pt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center space-x-4 text-yellow-400",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex text-center font-header text-2xl text-white sm:text-left sm:text-5xl md:text-6xl cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#ffb936] hover:animate-pulse text-shadow ml-4 cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[0]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#f3b137] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[1]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#fcbd47] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[2]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#ffa600ee] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[3]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#ffa600f0] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[4]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[#ffb936] hover:animate-pulse text-shadow mx-2 cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[5]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[6]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[7]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow mr-4 cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[8]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[9]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[10]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[11]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[12]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow mr-4 cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[13]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[14]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[15]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[16]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[17]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[18]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125",
                                                    children: profiles.name[19]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ",
                                                    children: profiles.name[20]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center justify-center pl-0 sm:justify-start md:pl-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-body text-lg uppercase text-white",
                                                        children: "Let's connect"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hidden sm:block",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-chevron-right text-3xl text-yellow"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center justify-center pt-5 sm:justify-start sm:pt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://instagram.com/prokximus",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-instagram text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://twitter.com/prokximus",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-twitter text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://github.com/SyedAdeebWebDesigning",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-github text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.facebook.com/s.a.abidi.9/",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-facebook-square text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_Hero = (Hero);

;// CONCATENATED MODULE: ./components/Services.jsx


function Services() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container py-16 md:py-20",
        id: "services",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl",
                children: "Here's what I'm good at"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl",
                children: "These are the services Ioffer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto h-24 w-24 text-center xl:h-28 xl:w-28",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden group-hover:block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-development-white.svg",
                                            alt: "development icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "block group-hover:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-development-black.svg",
                                            alt: "development icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl",
                                    children: "WEB DEVELOPMENT"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto h-24 w-24 text-center xl:h-28 xl:w-28",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden group-hover:block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-design-white.svg",
                                            alt: "Theme Design icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "block group-hover:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-design-black.svg",
                                            alt: "Theme Design icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl",
                                    children: "Graphic Design"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto h-24 w-24 text-center xl:h-28 xl:w-28",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden group-hover:block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-graphics-white.svg",
                                            alt: "Graphic Design icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "block group-hover:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icon-graphics-black.svg",
                                            alt: "Graphic Design icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl",
                                    children: "Web Design"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Services = (Services);

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(127);
;// CONCATENATED MODULE: ./components/Contact.jsx


function Contact() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container py-16 md:py-20",
                id: "contact",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-center font-header text-4xl font-semibold rfont-semibold text-primary uppercase sm:text-5xl lg:text-6xl",
                        children: "Contact me"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl",
                        children: "Have Any Questions?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-body text-grey-10",
                            children: "Feel free to contace me on any questions. I'll respond as soon as I find something useful to"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        className: "mx-auto w-full pt-10 sm:w-3/4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col pt-16 lg:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bx bx-phone text-2xl text-grey-40"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg",
                                                children: "My Phone"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:+917895341037",
                                        className: "pt-2 text-left font-body font-semibold text-primary-main lg:text-lg",
                                        children: "(+91) 78953 41037"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bx bx-envelope text-2xl text-grey-40"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg",
                                                children: "My Email"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:prokximus@gmail.com",
                                        className: "pt-2 text-left font-body font-semibold text-primary-main lg:text-lg",
                                        children: "prokximus@gmail.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bx bx-map text-2xl text-grey-40"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg",
                                                children: "My Address"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "pt-2 text-left font-body font-semibold text-primary-main lg:text-lg",
                                        children: "Alig Apartment Aligarh IND"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.4370945831054!2d78.06852992077035!3d27.909693962277125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f907870af7%3A0x956a9a84aecb5c13!2sAlig%20Apartments!5e0!3m2!1sen!2sin!4v1657468757491!5m2!1sen!2sin",
                            className: "pt-2 mx-auto h-[100%] w-full",
                            allowFullScreen: "",
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative bg-cover bg-center bg-no-repeat bg-blend-multiply py-5 mt-20"
            })
        ]
    });
}
/* harmony default export */ const components_Contact = (Contact);

;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./pages/index.jsx











function Home({ blogs , port , skills , work , expe  }) {
    const client = (0,_namespaceObject.createClient)({
        projectId: "9w7gf952",
        dataset: "production",
        useCdn: false
    });
    const profiles = {
        name: [
            "H",
            "e",
            "l",
            "l",
            "o",
            " ",
            "I",
            `'`,
            "m",
            " ",
            "S",
            "y",
            "e",
            "d",
            " ",
            "A",
            "d",
            "e",
            "e",
            "b", 
        ],
        desc: `A passionate Web and Graphics designer who loves turning bold ideas into impactful and memorable experiences. `,
        image: `assets/img/Me4.jpg`
    };
    const builder = image_url_default()(client);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "/assets/js/main.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlogHeader/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Hero, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-gray-100 text-white",
                        id: "about",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container flex flex-col items-center py-16 md:py-20 lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "font-header text-4xl uppercase text-primary sm:text-5xl lg:text-6xl",
                                            children: "Who am I?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            className: "pt-6 text-xl text-shadowfont-medium text-black sm:text-2xl lg:text-3xl",
                                            children: [
                                                "I'm ",
                                                profiles.name,
                                                ", a Web & Graphics Designer."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pt-6 font-body leading-relaxed text-grey-20",
                                            children: profiles.desc
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col justify-center pt-6 sm:flex-row lg:justify-start",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center justify-center sm:justify-start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "font-body text-lg uppercase text-grey-20",
                                                            children: "Connect with me"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-chevron-right text-2xl text-primary"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center justify-center pt-5 sm:justify-start sm:pt-0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://instagram.com/prokximus",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://twitter.com/prokximus",
                                                            className: "pl-4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-twitter text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://github.com/SyedAdeebWebDesigning",
                                                            className: "pl-4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-github text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.facebook.com/s.a.abidi.9/",
                                                            className: "pl-4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-facebook-square text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0",
                                    children: skills.map((item)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-end justify-between",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "font-body uppercase text-black",
                                                            children: item.skill
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                            className: "font-body text-3xl font-bold text-primary-main",
                                                            children: [
                                                                item.value,
                                                                "%"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 h-3 w-full rounded-full bg-lila",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "h-3 rounded-full bg-gradient-to-o",
                                                        style: {
                                                            width: `${item.value}%`
                                                        }
                                                    })
                                                })
                                            ]
                                        }, item._id);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Services, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container py-20 md:py-20 bg-gray-50",
                                id: "portfolio",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-center mb-10 font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl",
                                        children: "My Recent Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "group grid lg:grid-cols-2 xsm:flex-col space-x-4 lg:flex-row",
                                        children: port.map((item)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "my-10",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.link,
                                                        target: "1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: `${builder.image(item.image).width(2800).url()}`,
                                                            className: "hover:scale-105 transition-all duration-200 mx-auto w-[1200px] grayscale-50 cursor-pointer hover:grayscale-0 h-[50%] lg:h-[400px] bg-transparent rounded-md px-4 py-2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "p-6 md:flex items-center justify-between text-center lg:text-left lg:mx-5",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                className: "title-font text-2xl uppercase mt-3 font-medium text-gray-900 mb-3",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex items-center flex-wrap justify-center md:justify-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        id: "btn-1",
                                                                        disabled: false,
                                                                        href: item.code,
                                                                        target: "1",
                                                                        className: "text-[#ffa42c] py-2 rounded-lg hover:text-[#d78b28] transition-all duration-200 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                            className: "disabled:text-red-500 flex items-center disabled:hover:bg-white px-4 py-2 rounded-lg",
                                                                            disabled: item.cd,
                                                                            children: [
                                                                                "View Code",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                    className: "w-4 h-4 ml-2",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    fill: "none",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            d: "M5 12h14"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            d: "M12 5l7 7-7 7"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        id: "btn-2",
                                                                        href: item.link,
                                                                        target: "1",
                                                                        className: "text-[#ffa42c] py-2 rounded-lg hover:text-[#d78b28] transition-all duration-200 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                            className: "disabled:text-red-500 flex items-center disabled:hover:bg-white px-4 py-2 rounded-lg",
                                                                            disabled: item.ld,
                                                                            children: [
                                                                                "View Project",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                    className: "w-4 h-4 ml-2",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    fill: "none",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            d: "M5 12h14"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            d: "M12 5l7 7-7 7"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-evenly flex-col lg:flex-row items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "text-center text-gray-600 lg:text-left lg:mx-11 leading-relaxed",
                                                                children: [
                                                                    item.desc.slice(0, 66),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex text-center space-x-2 items-center text-gray-600 lg:text-left lg:mx-11 leading-relaxed mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                                        className: "mr-2",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsCalendar2DateFill, {}),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    " ",
                                                                    item.createdAt.slice(0, 10),
                                                                    ".",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, item._id);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container py-16 md:py-20",
                                id: "work",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl",
                                        children: "My work experience"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl",
                                        children: "Here's what I did before freelancing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative mx-auto mt-12 flex w-full flex-col lg:w-2/3",
                                        children: work.map((item)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-8 flex flex-col text-center md:flex-row md:text-left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "md:w-2/5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex justify-center md:justify-start",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "shrink-0",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: `/assets/img/${item.logo}.jpeg`,
                                                                                className: "h-auto w-12 grayscale-0",
                                                                                alt: "company logo"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "relative ml-3 hidden w-full md:block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "md:w-3/5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "relative flex md:pl-18",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block z-10 "
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "mt-1 flex",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "bx bxs-right-arrow hidden text-primary-main md:block"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "group md:-mt-1 md:pl-8",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                            className: "block font-body font-bold text-grey-40",
                                                                                            children: [
                                                                                                item.from,
                                                                                                " - ",
                                                                                                item.to
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                            className: "block cursor-pointer hover:scale-y-150 transition-all duration-200 pt-2 font-header text-xl font-bold uppercase text-primary-main",
                                                                                            children: [
                                                                                                item.title,
                                                                                                "."
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "pt-2 group",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "block truncate whitespace-normal opacity-100 font-body text-black",
                                                                                                children: item.desc
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, item._id);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24",
                                    style: {
                                        backgroundImage: "url(/assets/img/experience-wave.svg)"
                                    },
                                    id: "statistics",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mx-auto w-5/6 bg-white box-shadow py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5",
                                                children: expe.map((item)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-col items-center justify-center text-center md:flex-row md:text-left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: `/assets/img/icon-${item.icon}.svg`,
                                                                    className: "mx-auto h-12 w-auto md:h-20",
                                                                    alt: "icon project"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "pt-5 md:pl-5 md:pt-0",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                        className: "font-body text-2xl font-bold text-primary md:text-4xl",
                                                                        children: item.value
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: "text-grey-dark font-header text-base font-medium leading-loose md:text-xl",
                                                                        children: item.title
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    });
                                                })
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-grey-50",
                                id: "blog",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "container py-16 md:py-20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl",
                                            children: "I also like to write"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl",
                                            children: "Check out my latest posts!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/blogs",
                                            className: "pt-3 flex justify-center text-center w-full text-primary-main text-base font-medium uppercase cursor-pointer hover:scale-125 transition-all duration-200 sm:text-base lg:text-xl",
                                            children: "View all blogs"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10",
                                            children: blogs.map((item)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blogs/" + item.slug.current,
                                                    className: "shadow",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    backgroundImage: `url(${builder.image(item.blogimage).width(2800).url()})`
                                                                },
                                                                className: "group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer",
                                                                        children: "Read More"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "bg-white py-6 px-5 xl:py-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "block font-body text-lg font-semibold text-black",
                                                                        children: item.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "block truncate pt-2 font-body text-grey-20",
                                                                        children: item.metadesc
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, item.slug.current);
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Contact, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const client = (0,_namespaceObject.createClient)({
        projectId: "9w7gf952",
        dataset: "production",
        useCdn: false
    });
    const query = `*[_type == "blog"][0...3]`;
    const blogs = await client.fetch(query);
    const portquery = `*[_type == 'portfolio'][0...4]`;
    const port = await client.fetch(portquery);
    const skillquery = `*[_type == 'skills']`;
    const skills = await client.fetch(skillquery);
    const workquery = `*[_type == 'work'][0...3]`;
    const work = await client.fetch(workquery);
    const expequery = `*[_type == 'experience']`;
    const expe = await client.fetch(expequery);
    // console.log(expe);
    return {
        props: {
            blogs,
            port,
            skills,
            work,
            expe
        }
    };
}


/***/ }),

/***/ 791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 615:
/***/ ((module) => {

module.exports = require("react-burger-menu");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,529], () => (__webpack_exec__(737)));
module.exports = __webpack_exports__;

})();