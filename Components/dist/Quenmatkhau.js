"use strict";
exports.__esModule = true;
var react_1 = require("react");
var google_1 = require("next/font/google");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});
var Quenmatkhau = function () {
    return (react_1["default"].createElement("div", { className: noto_serif.className },
        react_1["default"].createElement("center", null,
            react_1["default"].createElement("div", { className: "h-60 w-96 mt-20 border-2 border-green-500" },
                react_1["default"].createElement("p", { className: "text-2xl pt-5" }, "T\u1EA1o m\u1EADt kh\u1EA9u m\u1EDBi"),
                react_1["default"].createElement("input", { className: "h-8 w-64 text-sm pl-2 mt-5 border-2 border-gray-300", placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u" }),
                react_1["default"].createElement("input", { className: "h-8 w-64 text-sm pl-2 mt-5 border-2 border-gray-300", placeholder: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u" }),
                react_1["default"].createElement("button", { className: "h-8 w-36 mt-5 uppercase font-bold hover:bg-green-600" }, "x\u00E1c nh\u1EADn")),
            react_1["default"].createElement("div", { className: "h-60 w-96 mt-20 border-2 border-green-500" },
                react_1["default"].createElement("p", { className: "text-2xl pt-10" }, "B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u?"),
                react_1["default"].createElement("input", { className: "h-8 w-64 text-sm pl-2 mt-8 border-2 border-gray-300", placeholder: "Nh\u1EADp email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" }),
                react_1["default"].createElement("button", { className: "h-8 w-36 mt-8 uppercase font-bold hover:bg-green-600" }, "g\u1EEDi")),
            react_1["default"].createElement("div", { className: "h-60 w-96 mt-20 border-2 border-green-500" },
                react_1["default"].createElement("p", { className: "text-2xl pt-10" }, "B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u?"),
                react_1["default"].createElement("input", { className: "h-8 w-64 text-sm pl-2 mt-8 border-2 border-gray-300", placeholder: "Nh\u1EADp OTP" }),
                react_1["default"].createElement("button", { className: "h-8 w-36 mt-8 uppercase font-bold hover:bg-green-600" }, "x\u00E1c nh\u1EADn")))));
};
exports["default"] = Quenmatkhau;
