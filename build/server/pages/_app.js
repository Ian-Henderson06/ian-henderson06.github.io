"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js





const LogoBox = (styled_default()).span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`;
const Logo = ()=>{
    const logoImg = `/images/logo${(0,react_.useColorModeValue)('', '-dark')}.png`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: logoImg,
                        width: 20,
                        height: 20,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
                        fontFamily: "M PLUS Rounded 1c\", sans-serif",
                        fontWeight: "bold",
                        ml: 3,
                        children: "Ian"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/theme-toggle-button.js




const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        initial: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            style: {
                display: 'inline-block'
            },
            initial: {
                y: -20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 20,
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "Toggle Theme",
                colorScheme: (0,react_.useColorModeValue)('purple', 'orange'),
                icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {}), /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {})),
                onClick: toggleColorMode
            })
        }, (0,react_.useColorModeValue)('light', 'dark'))
    }));
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/navbar.js







const LinkItem = ({ href , path , _target , children , ...props })=>{
    const active = path === href;
    const inactiveColour = (0,react_.useColorModeValue)('gray200', 'whiteAlpha.900');
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            bg: active ? 'pinkyPink' : undefined,
            color: active ? 'gray' : inactiveColour,
            _target: _target,
            ...props,
            children: children
        })
    }));
};
const Navbar = (props)=>{
    const { path  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)('#fffff40', '#20202380'),
        style: {
            backdropFilter: 'blur(10px)'
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: 'tighter',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: 'column',
                        md: 'row'
                    },
                    display: {
                        base: 'none',
                        md: 'flex'
                    },
                    width: {
                        base: 'full',
                        md: 'auto'
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        md: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/works",
                            path: path,
                            children: "Works"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/cv",
                            path: path,
                            children: "CV"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkItem, {
                            _target: "_blank",
                            href: "https://github.com/Ian-Henderson06",
                            path: path,
                            display: "inline-flex",
                            alignItems: "center",
                            style: {
                                gap: 4
                            },
                            pl: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoLogoGithub, {}),
                                "Github"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkItem, {
                            _target: "_blank",
                            href: "https://www.linkedin.com/in/ian-henderson-64516a15b/",
                            path: path,
                            display: "inline-flex",
                            alignItems: "center",
                            style: {
                                gap: 4
                            },
                            pl: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoLogoLinkedin, {}),
                                "LinkedIn"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: 'inline-block',
                                md: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                isLazy: true,
                                id: "navbar-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/works",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Works"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                as: react_.Link,
                                                href: "https://github.com/Ian-Henderson06",
                                                children: "Github"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        align: "center",
        opacity: 0.4,
        fontSize: "sm",
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Ian Henderson"
        ]
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layouts/main.js





const Main = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Ian's homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Ian"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Ian's homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Ian - Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                maxW: "container.md",
                pt: 14,
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const main = (Main);

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>jsx_runtime_.jsx((style_default()), {
        id: "4169392f81b61849",
        children: "@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');"
    })
;
/* harmony default export */ const fonts = (Fonts);

// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(7985);
;// CONCATENATED MODULE: ./pages/_app.js







const Website = ({ Component , pageProps , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fonts, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                router: router,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                    exitBeforeEnter: true,
                    initial: true,
                    children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                        ...pageProps,
                        key: router.route
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,985], () => (__webpack_exec__(7352)));
module.exports = __webpack_exports__;

})();