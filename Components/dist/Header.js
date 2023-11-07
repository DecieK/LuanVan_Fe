"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Button_1 = require("@mui/material/Button");
var MenuItem_1 = require("@mui/material/MenuItem");
var Menu_1 = require("@mui/material/Menu");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var Header = function () {
    var _a = react_1.useState(Boolean), trangthai = _a[0], setTrangthai = _a[1];
    var _b = react_1.useState([]), khachhang = _b[0], setKhachhang = _b[1];
    var _c = react_1.useState(''), tenKH = _c[0], setTenKH = _c[1];
    var _d = react_1.useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var _e = react_1["default"].useState(null), anchorElP = _e[0], setAnchorElP = _e[1];
    var openP = Boolean(anchorElP);
    var _f = react_1["default"].useState(null), anchorEl = _f[0], setAnchorEl = _f[1];
    var open = Boolean(anchorEl);
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleCloseP = function () {
        setAnchorElP(null);
    };
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClickP = function (event) {
        setAnchorElP(event.currentTarget);
    };
    var router = router_1.useRouter();
    var handleHomePage = function () {
        router.push("/");
    };
    var handleLogin = function () {
        router.push("/login");
    };
    var handleProfile = function () {
        router.push("/profile");
        setAnchorEl(null);
    };
    var handleLichsu = function () {
        router.push("/lichsu");
        setAnchorEl(null);
    };
    var handlePhimdangchieu = function () {
        router.push("/phimdangchieu");
        setAnchorEl(null);
    };
    var handlePhimsapchieu = function () {
        router.push("/phimsapchieu");
        setAnchorEl(null);
    };
    var handleRomoveLocal = function () {
        localStorage.removeItem("khachhang");
        setAnchorEl(null);
        location.reload();
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
                react_1["default"].createElement(Button_1["default"], { className: "inline-flex items-center text-black font-bold", id: "basic-button", "aria-controls": openP ? 'basic-menuP' : undefined, "aria-haspopup": "true", "aria-expanded": openP ? 'true' : undefined, onClick: handleClickP }, "Phim"),
                react_1["default"].createElement(Menu_1["default"], { id: "basic-menuP", anchorEl: anchorElP, open: openP, onClose: handleCloseP, MenuListProps: {
                        'aria-labelledby': 'basic-button'
                    } },
                    react_1["default"].createElement(MenuItem_1["default"], { onClick: handlePhimdangchieu }, "Phim \u0111ang chi\u1EBFu"),
                    react_1["default"].createElement(MenuItem_1["default"], { onClick: handlePhimsapchieu }, "Phim s\u1EAFp chi\u1EBFu")),
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
                    :
                        react_1["default"].createElement(Button_1["default"], { className: "text-red-500", id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick }, tenKH)
            // <div
            //   className="inline-flex items-center"
            //   onClick={() => setIsOpenTT(!isOpenTT)}
            // >
            //   {tenKH}
            // </div>
            ,
                react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                        'aria-labelledby': 'basic-button'
                    } },
                    react_1["default"].createElement(MenuItem_1["default"], { onClick: handleProfile }, "H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n"),
                    react_1["default"].createElement(MenuItem_1["default"], { onClick: handleLichsu }, "L\u1ECBch s\u1EED"),
                    react_1["default"].createElement(MenuItem_1["default"], { onClick: handleRomoveLocal }, "\u0110\u0103ng xu\u1EA5t")))),
        react_1["default"].createElement("hr", { className: "w-full" }))
    // </div>
    );
};
exports["default"] = Header;
