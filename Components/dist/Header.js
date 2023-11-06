"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var Header = function () {
    var _a = react_1.useState(Boolean), trangthai = _a[0], setTrangthai = _a[1];
    var _b = react_1.useState([]), khachhang = _b[0], setKhachhang = _b[1];
    var _c = react_1.useState(''), tenKH = _c[0], setTenKH = _c[1];
    var _d = react_1.useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var _e = react_1.useState(false), isOpenTT = _e[0], setIsOpenTT = _e[1];
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
        // router.push("/phim");
    };
    var closeDropdown = function () {
        setIsOpen(false);
    };
    var router = router_1.useRouter();
    var handleHomePage = function () {
        router.push("/");
    };
    var handleLogin = function () {
        router.push("/login");
    };
    react_1.useEffect(function () {
        var khachhangs = JSON.parse(localStorage.getItem("khachhang") || "{}");
        if (Object.keys(khachhangs).length === 0) {
            setTrangthai(true);
            console.log("true");
        }
        else {
            setTrangthai(false);
            console.log("false");
            var res = khachhangs;
            setKhachhang(res);
            res.map(function (item) {
                setTenKH(item.Hten_KH);
            });
        }
    }, []);
    return (react_1["default"].createElement("div", { className: noto_serif.className },
        react_1["default"].createElement("div", { className: "flex w-full h-16 " },
            react_1["default"].createElement("div", { className: "w-1/6" },
                react_1["default"].createElement("div", { className: "  h-14 w-28 bg-cover m-auto bg-[url('../public/logoCGV.png')] cursor-pointer", onClick: function () { return handleHomePage(); } })),
            react_1["default"].createElement("div", { className: "w-4/6 uppercase text-center font-semibold space-x-20 m-auto" },
                react_1["default"].createElement("div", { className: "inline-flex items-center", onClick: toggleDropdown },
                    "phim",
                    react_1["default"].createElement("svg", { className: "w-2.5 h-2.5 ml-2.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 6" },
                        react_1["default"].createElement("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m1 1 4 4 4-4" }))),
                isOpen && (react_1["default"].createElement("div", { className: "origin-top-right absolute mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" },
                    react_1["default"].createElement("ul", { role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/phimdangchieu", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", onClick: closeDropdown }, "Phim \u0111ang chi\u1EBFu")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/phimsapchieu", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", onClick: closeDropdown }, "Phim s\u1EAFp chi\u1EBFu"))))),
                react_1["default"].createElement("label", null, "|"),
                react_1["default"].createElement(link_1["default"], { href: '' }, "R\u1EA1p CGV"),
                react_1["default"].createElement("label", null, "|"),
                react_1["default"].createElement(link_1["default"], { href: '' }, "Tin t\u1EE9c & \u01B0u \u0111\u00E3i"),
                react_1["default"].createElement("label", null, "|"),
                react_1["default"].createElement(link_1["default"], { href: '' }, "Quy \u0111\u1ECBnh")),
            react_1["default"].createElement("div", { className: "w-1/6 m-auto " },
                trangthai === true ?
                    react_1["default"].createElement("div", { onClick: handleLogin, className: "  text-center bg-cover " },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser, size: "2xl", color: "#adb1b8" }))
                    : react_1["default"].createElement("div", { className: "inline-flex items-center", onClick: function () { return setIsOpenTT(!isOpenTT); } }, tenKH),
                isOpenTT && (react_1["default"].createElement("div", { className: "origin-top-right absolute mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" },
                    react_1["default"].createElement("ul", { role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/phimdangchieu", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", onClick: function () { return setIsOpenTT(false); } }, "Th\u00F4ng tin c\u00E1 nh\u00E2n")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/phimsapchieu", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", onClick: function () { return setIsOpenTT(false); } }, "L\u1ECBch s\u1EED \u0111\u1EB7t v\u00E9"))))))),
        react_1["default"].createElement("hr", { className: "w-full" }))
    // </div>
    );
};
exports["default"] = Header;
