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
var react_1 = require("react");
var google_1 = require("next/font/google");
var Edit_1 = require("@mui/icons-material/Edit");
var Clear_1 = require("@mui/icons-material/Clear");
require("react-datepicker/dist/react-datepicker.css");
var userService_1 = require("@/service/userService");
var dayjs_1 = require("dayjs");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
// type Props = {
//     suatchieuP: any,
//     rapP: any,
//     phimP: any,
//     chieuP: any
// };
var QLKhachhang = function () {
    var _a = react_1.useState(new Date()), ngaychieu = _a[0], setNgaychieu = _a[1];
    var _b = react_1.useState(''), giave = _b[0], setGiave = _b[1];
    var _c = react_1.useState([]), Khachhang = _c[0], setKhachhang = _c[1];
    var _d = react_1.useState(''), valuePhim = _d[0], setValuePhim = _d[1];
    var _e = react_1.useState(''), valueRap = _e[0], setValueRap = _e[1];
    var _f = react_1.useState(''), valueSuatchieu = _f[0], setValueSuatchieu = _f[1];
    var _g = react_1.useState(Number), id_p = _g[0], setId_p = _g[1];
    var _h = react_1.useState(Number), id_r = _h[0], setId_r = _h[1];
    var _j = react_1.useState(Number), id_sc = _j[0], setId_sc = _j[1];
    var _k = react_1.useState(Number), id_c = _k[0], setId_c = _k[1];
    var _l = react_1.useState(new Date()), startDate = _l[0], setStartDate = _l[1];
    var _m = react_1.useState([
        {
            id: 0,
            ngaychieu: new Date()
        },
    ]), DSngaychieus = _m[0], setDSngaychieus = _m[1];
    var handleLayTTCumrap = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = {
                        tenTK: 'ALL'
                    };
                    return [4 /*yield*/, userService_1.LayTTKhachhang(params)];
                case 1:
                    response = _a.sent();
                    res = response.khachhangs;
                    // console.log("check api searchdate ghe: ", response);
                    // console.log("length", res.length);
                    setKhachhang(res);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTKhachhang = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            tenTK: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTKhachhang(params)];
                    case 1:
                        response = _a.sent();
                        res = response.khachhangs;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setKhachhang(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTKhachhang();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full  " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "H\u1ECD t\u00EAn kh\u00E1ch h\u00E0ng"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00E0y sinh"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110\u1ECBa ch\u1EC9"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u1EDBi t\u00EDnh"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "S\u0110T"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Email"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "M\u00E3 th\u1EBB th\u00E0nh vi\u00EAn"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110i\u1EC3m t\u00EDch l\u0169y"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u1EDBi t\u00EDnh"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E0i kho\u1EA3n"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "M\u1EADt kh\u1EA9u"))),
            react_1["default"].createElement("tbody", null, Khachhang.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Hten_KH),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.Ngaysinh_KH).format("DD/MM/YYYY")),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Diachi_KH),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Gioitinh_KH),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Sdt_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Email_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Mathethanhvien_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Diemtichluy_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Taikhoan_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Matkhau_KH,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer" }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' } }))))); })))));
};
exports["default"] = QLKhachhang;
