"use strict";
(() => {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-sanity"
var external_next_sanity_ = __webpack_require__(879);
;// CONCATENATED MODULE: external "react-portable-text"
const external_react_portable_text_namespaceObject = require("react-portable-text");
var external_react_portable_text_default = /*#__PURE__*/__webpack_require__.n(external_react_portable_text_namespaceObject);
// EXTERNAL MODULE: ./components/BlogHeader.jsx + 1 modules
var BlogHeader = __webpack_require__(669);
// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__(791);
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(127);
;// CONCATENATED MODULE: ./pages/blogs/[slug].jsx









// import Blogs from "../blogs";
const Post = ({ blog , blogs , author  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { slug  } = router.query;
    const client = (0,external_next_sanity_.createClient)({
        projectId: "9w7gf952",
        dataset: "production",
        useCdn: false
    });
    const builder = image_url_default()(client);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charset: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            content: "IE=edge,chrome=1",
                            "http-equiv": "X-UA-Compatible"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                            name: "viewport"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: slug
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: "How to become a frontend developer | Atom Template"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:locale",
                            content: "en_US"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "canonical",
                            href: "//post"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:url",
                            content: "//post"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#5540af"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:site_name",
                            content: "Atom Template"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: "//assets/img/social.jpg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:site",
                            content: "@tailwindmade"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            crossorigin: "crossorigin",
                            href: "https://fonts.gstatic.com",
                            rel: "preconnect"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            as: "style",
                            href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap",
                            rel: "preload"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            crossorigin: "anonymous",
                            href: "/assets/styles/main.min.css",
                            media: "screen",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            defer: true,
                            src: "https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            defer: true,
                            src: "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlogHeader/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container w-full mx-auto text-xl md:text-2xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container w-full py-6 md:py-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-auto max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "pt-5 pb-10 font-body text-3xl font-semibold text-primary sm:text-xl md:text-2xl xl:text-4xl",
                                            children: blog.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sm:block hidden ",
                                            children: author.map((item)=>{
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "shadow flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                style: {
                                                                    "backgroundImage": `url(${builder.image(item.image).width(1000).url() || "/assets/img/post-01.png"})`
                                                                },
                                                                className: "group relative rounded-full bg-cover bg-center bg-no-repeat h-24 w-24"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "bg-white py-6 px-5 xl:py-8 items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "block pt-2 font-body text-grey-20",
                                                                    children: " Uploaded by "
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "block font-body text-lg font-semibold text-black my-auto",
                                                                    children: item.title
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, item.id);
                                            })
                                        })
                                    ]
                                }),
                                blogs.map((item)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        href: "/blogs/" + item.slug.current,
                                        className: "shadow w-full ",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        backgroundImage: `url(${builder.image(item.blogimage).width(1000).url() || "/assets/img/post-01.png"})`
                                                    },
                                                    layout: "fill",
                                                    className: "group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 hidden md:block"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white py-6 px-5 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "block font-body text-lg font-semibold text-black",
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "home flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "bg-white py-6 pt-2 font-body text-grey-20",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_portable_text_default()), {
                                                                        // Pass in block content straight from Sanity.io
                                                                        content: item.content,
                                                                        projectId: "9w7gf952",
                                                                        dataset: "production",
                                                                        // Optionally override marks, decorators, blocks, etc. in a flat
                                                                        // structure without doing any gymnastics
                                                                        serializers: {
                                                                            h1: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                                    style: {
                                                                                        color: "red"
                                                                                    },
                                                                                    ...props
                                                                                })
                                                                            ,
                                                                            li: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    className: "special-list-item",
                                                                                    children: children
                                                                                })
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, item.slug.current);
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        })
    });
};
/* harmony default export */ const _slug_ = (Post);
const getServerSideProps = async (context)=>{
    const { slug  } = context.query;
    // console.log(slug);
    const client = (0,external_next_sanity_.createClient)({
        projectId: "9w7gf952",
        dataset: "production",
        useCdn: false
    });
    // All queries   
    const query = `*[_type == 'blog' && slug.current == '${slug}'][0]`;
    const blog = await client.fetch(query);
    const Blogquery = `*[_type == "blog" && slug.current == '${slug}']`;
    const blogs = await client.fetch(Blogquery);
    const Authorquery = `*[_type == "author"]`;
    const author = await client.fetch(Authorquery);
    console.log(blogs);
    // //console.log(author)
    return {
        props: {
            blog,
            blogs,
            author
        }
    };
};


/***/ }),

/***/ 791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("next-sanity");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,529], () => (__webpack_exec__(219)));
module.exports = __webpack_exports__;

})();