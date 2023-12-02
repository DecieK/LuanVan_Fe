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
var react_datepicker_1 = require("react-datepicker");
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
var QLKhuyenmai = function () {
    var _a = react_1.useState(''), ten = _a[0], setTen = _a[1];
    var _b = react_1.useState([]), khuyenmai = _b[0], setKhuyenmai = _b[1];
    var _c = react_1.useState(''), anhminhhoa = _c[0], setAnhminhhoa = _c[1];
    var _d = react_1.useState(Number), tile = _d[0], setTile = _d[1];
    var _e = react_1.useState(''), mota = _e[0], setMota = _e[1];
    var _f = react_1.useState(Number), dieukien = _f[0], setDieukien = _f[1];
    var _g = react_1.useState(''), size = _g[0], setSize = _g[1];
    var _h = react_1.useState(Number), id_km = _h[0], setId_km = _h[1];
    var _j = react_1.useState(), fileIMG = _j[0], setFileIMG = _j[1];
    var _k = react_1.useState(""), prevURLIMG = _k[0], setPrevURLIMG = _k[1];
    var _l = react_1.useState(new Date()), ngaybatdau = _l[0], setNgaybatdau = _l[1];
    var _m = react_1.useState(new Date()), ngayketthuc = _m[0], setNgayketthuc = _m[1];
    var handleThemTTKhuyenmai = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.ThemTTkhuyenmai({
                        ten: ten,
                        tile: tile,
                        mota: mota,
                        dieukien: dieukien,
                        thoigianbatdau: ngaybatdau,
                        thoigianketthuc: ngayketthuc
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        // setNgaychieu(new Date())
                        // setGiave('')
                        // setId_cr()
                        // handleLayTTDoan()
                        alert("Thêm khuyến mãi mới thành thông");
                        handleLayTTKM();
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Thêm khuyến mãi mới KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLayTTKM = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = {
                        key: "ALL"
                    };
                    return [4 /*yield*/, userService_1.LayTTKM(params)];
                case 1:
                    response = _a.sent();
                    res = response.khuyenmais;
                    // console.log("check api KM: ", response);
                    // console.log("length", res.length);
                    setKhuyenmai(res);
                    console.log(res);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleSuaTTKhuyemai = function (id, ten, tile, mota, dieukien, thoigianbatdau, thoigianketthuc) { return __awaiter(void 0, void 0, void 0, function () {
        var date1, date2;
        return __generator(this, function (_a) {
            date1 = new Date(ngaybatdau);
            date2 = new Date(ngayketthuc);
            // setId_c(id)
            setId_km(id);
            setTen(ten);
            setTile(tile);
            setMota(mota);
            setDieukien(dieukien);
            setNgaybatdau(date1);
            setNgayketthuc(date2);
            return [2 /*return*/];
        });
    }); };
    var handleCapnhatTTKhuyemai = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.SuaTTkhuyenmai({
                        id: id_km,
                        ten: ten,
                        tile: tile,
                        mota: mota,
                        dieukien: dieukien,
                        thoigianbatdau: ngaybatdau,
                        thoigianketthuc: ngayketthuc
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTen('');
                        setTile(0);
                        setDieukien(0);
                        setMota('');
                        setNgaybatdau(new Date());
                        setNgayketthuc(new Date());
                        handleLayTTKM();
                        alert("Cập nhật khuyến mãi mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật khuyến mãi KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTKhuyenmai = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTkhuyenmai({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTen('');
                        setTile(0);
                        setDieukien(0);
                        setMota('');
                        setNgaybatdau(new Date());
                        setNgayketthuc(new Date());
                        handleLayTTKM();
                        alert("Xóa thông tin khuyến mãi mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin khuyến mãi KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTKM = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: "ALL"
                        };
                        return [4 /*yield*/, userService_1.LayTTKM(params)];
                    case 1:
                        response = _a.sent();
                        res = response.khuyenmais;
                        // console.log("check api KM: ", response);
                        // console.log("length", res.length);
                        setKhuyenmai(res);
                        console.log(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTKM();
    }, []);
    return (react_1["default"].createElement("div", { className: "m-5" },
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00EAn khuy\u1EBFn m\u00E3i"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: ten, onChange: function (event) { return setTen(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u1EC9 l\u1EC7 (%) khuy\u1EBFn m\u00E3i"),
                react_1["default"].createElement("input", { type: "number", placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: tile, onChange: function (event) { return setTile(event.target.valueAsNumber); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "M\u00F4 t\u1EA3 khuy\u1EBFn m\u00E3i"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: mota, onChange: function (event) { return setMota(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" },
                    "\u0110i\u1EC1u khi\u1EC7n nh\u1EADn khuy\u1EBFn m\u00E3i",
                    react_1["default"].createElement("br", null),
                    "(D\u1EF1a theo \u0111i\u1EC3m t\u00EDch l\u0169y)"),
                react_1["default"].createElement("input", { type: "number", placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: dieukien, onChange: function (event) { return setDieukien(event.target.valueAsNumber); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "basis-[20%]" }, "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"),
                    react_1["default"].createElement(react_datepicker_1["default"], { className: "", 
                        // type="datetime"
                        selected: ngaybatdau, onChange: function (date) { return setNgaybatdau(date); }, dateFormat: "dd/MM/yyyy" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "basis-[20%]" }, "Th\u1EDDi gian k\u1EBFt th\u00FAc"),
                    react_1["default"].createElement(react_datepicker_1["default"], { className: "", 
                        // type="datetime"
                        selected: ngayketthuc, onChange: function (date) { return setNgayketthuc(date); }, dateFormat: "dd/MM/yyyy" })))),
        react_1["default"].createElement("div", { className: " w-8/12 " },
            react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleCapnhatTTKhuyemai(); } }, "C\u1EADp nh\u1EADt th\u00F4ng tin"),
            react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleThemTTKhuyenmai(); } }, "L\u01B0u th\u00F4ng tin")),
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn khuy\u1EBFn m\u00E3i"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u1EC9 l\u1EC7 (%) khuy\u1EBFn m\u00E3i"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110i\u1EC1u khi\u1EC7n nh\u1EADn khuy\u1EBFn m\u00E3i"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "M\u00F4 t\u1EA3 khuy\u1EBFn m\u00E3i"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Th\u1EDDi gian k\u1EBFt th\u00FAc"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
            react_1["default"].createElement("tbody", null, khuyenmai.map(function (item) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.ten_KM),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.tile_KM),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.dieukien_KM),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.mota_KM),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.thoigianbatdau).format("DD/MM/YYYY")),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.thoigianketthuc).format("DD/MM/YYYY")),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer", onClick: function () { return handleSuaTTKhuyemai(item.id, item.ten_KM, item.tile_KM, item.mota_KM, item.dieukien_KM, item.thoigianbatdau, item.thoigianketthuc); } }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' }, onClick: function () { return handleXoaTTKhuyenmai(item.id); } }))))); })))));
};
exports["default"] = QLKhuyenmai;
