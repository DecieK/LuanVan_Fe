"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var userService_1 = require("@/service/userService");
var google_1 = require("next/font/google");
var image_1 = require("next/image");
var router_1 = require("next/router");
var react_1 = require("react");
var react_2 = require("react");
var Modal_1 = require("./Modal");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var Phim = function () {
    var _a = react_2.useState([]), phim = _a[0], setPhim = _a[1];
    var _b = react_2.useState(String), src = _b[0], setSrc = _b[1];
    var _c = react_1["default"].useState(1), option = _c[0], setOption = _c[1];
    var _d = react_1["default"].useState(Number), idp = _d[0], setIdp = _d[1];
    var _e = react_2.useState(false), showModal = _e[0], setShowModal = _e[1];
    var router = router_1.useRouter();
    var handleXemchitiet = function (id_phim) {
        console.log(id_phim);
        router.push({
            pathname: '/xemchitiet',
            query: { id_phim: id_phim }
        });
    };
    var handleMuave = function (id) {
        setShowModal(true);
        setIdp(id);
    };
    react_2.useEffect(function () {
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
                        };
                        console.log("searchdate", params);
                        return [4 /*yield*/, userService_1.LayTTPhim(params)];
                    case 1:
                        response = _a.sent();
                        res = response.phims;
                        console.log("check api handleLayTTChieu: ", response);
                        // console.log("length", res.length);
                        setPhim(res);
                        console.log(res.length);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTPhim();
    }, []);
    return (react_1["default"].createElement("div", { className: noto_serif.className },
        react_1["default"].createElement("div", { className: "flex w-10/12 m-auto mt-16 mb-10 text-3xl text-gray-500 space-x-10" },
            react_1["default"].createElement("button", { className: "uppercase " + (option === 1 ? 'text-red-500' : null), onClick: function () { return setOption(1); } }, "phim \u0111ang chi\u1EBFu"),
            react_1["default"].createElement("p", { className: '' }, "|"),
            react_1["default"].createElement("button", { className: "uppercase " + (option === 2 ? 'text-red-500' : null), onClick: function () { return setOption(2); } }, "phim s\u1EAFp chi\u1EBFu")),
        option == 1 ? (react_1["default"].createElement("div", { className: 'grid grid-cols-3 gap-2 w-11/12 m-auto mt-5 ' }, phim.map(function (item, index) {
            if (item.trangthai === "Đang chiếu") {
                return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "col-span-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow\r\n                                 hover:shadow-xl hover:shadow-black/30" },
                        react_1["default"].createElement("div", { className: "" },
                            react_1["default"].createElement(image_1["default"], { className: "w-11/12 h-64  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125", src: new Buffer(item.poster, "base64").toString("binary"), width: 500, height: 500, alt: "Picture of the author" })),
                        react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-b  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" }),
                        react_1["default"].createElement("div", { className: "absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0" },
                            react_1["default"].createElement("div", { className: "mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" },
                                react_1["default"].createElement("p", { className: "" }, item.tenphim),
                                react_1["default"].createElement("p", { className: "" },
                                    item.tomtat.slice(0, 90),
                                    "..."),
                                react_1["default"].createElement("div", { className: "space-x-5  space-y-3" },
                                    react_1["default"].createElement("button", { onClick: function () { return handleXemchitiet(item.id); }, className: "rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" }, "Xem chi ti\u1EBFt"),
                                    react_1["default"].createElement("button", { className: "rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60", onClick: function () { return handleMuave(item.id); } }, "Mua v\u00E9")))),
                        react_1["default"].createElement(Modal_1["default"], { id_phim: idp, onClose: function () { return setShowModal(false); }, show: showModal }))));
            }
            else
                null;
        }))) : null,
        option == 2 ? (react_1["default"].createElement("div", { className: "grid grid-cols-3 gap-2 w-11/12 m-auto mt-5 " }, phim.map(function (item, index) {
            if (item.trangthai === "Sắp chiếu") {
                return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "col-span-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow\r\n                                 hover:shadow-xl hover:shadow-black/30" },
                        react_1["default"].createElement("div", { className: "" },
                            react_1["default"].createElement(image_1["default"], { className: "w-11/12 h-64  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125", src: new Buffer(item.poster, "base64").toString("binary"), width: 500, height: 500, alt: "Picture of the author" })),
                        react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-b  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" }),
                        react_1["default"].createElement("div", { className: "absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0" },
                            react_1["default"].createElement("div", { className: "mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" },
                                react_1["default"].createElement("p", { className: "" }, item.tenphim),
                                react_1["default"].createElement("p", { className: "" },
                                    item.tomtat.slice(0, 90),
                                    "..."),
                                react_1["default"].createElement("div", { className: "space-x-5  space-y-3" },
                                    react_1["default"].createElement("button", { onClick: function () { return handleXemchitiet(item.id); }, className: "rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" }, "Xem chi ti\u1EBFt"),
                                    react_1["default"].createElement("button", { className: "rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" }, "Mua v\u00E9")))))));
            }
            else
                null;
        }))) : null));
};
exports["default"] = Phim;
