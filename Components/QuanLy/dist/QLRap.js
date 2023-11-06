"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Autocomplete_1 = require("@mui/material/Autocomplete");
var TextField_1 = require("@mui/material/TextField");
var userService_1 = require("@/service/userService");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var QLRap = function () {
    var _a = react_1.useState(''), tenrap = _a[0], setTenrap = _a[1];
    var _b = react_1.useState(''), slg = _b[0], setSlg = _b[1];
    var _c = react_1.useState([]), cumrap = _c[0], setCumrap = _c[1];
    var _d = react_1.useState([]), ghe = _d[0], setGhe = _d[1];
    var _e = react_1.useState([]), rap = _e[0], setRap = _e[1];
    var _f = react_1.useState(''), valueCumrap = _f[0], setValueCumrap = _f[1];
    var _g = react_1.useState(''), valueRap = _g[0], setValueRap = _g[1];
    var _h = react_1.useState(Number), id_rap = _h[0], setId_rap = _h[1];
    var _j = react_1.useState(Number), id_cr = _j[0], setId_cr = _j[1];
    var handleLayttRap = function (value) {
        setValueCumrap(value);
        setValueRap('');
        cumrap.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value === item.ten_tttt)) return [3 /*break*/, 2];
                        setId_cr(item.id);
                        params = {
                            key: item.id
                        };
                        return [4 /*yield*/, userService_1.LayTTRap_idcumrap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.raps;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setRap(res);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    var handleThemTTRap = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("tenTTTT", tenrap);
                    console.log("diachi", slg);
                    console.log("diachi", id_cr);
                    return [4 /*yield*/, userService_1.ThemTTRap({
                            id_cr: id_cr,
                            tenrap: tenrap,
                            slg: Number(slg)
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setSlg('');
                        setTenrap('');
                        // setId_cr()
                        handleLayttRap(valueCumrap);
                        alert("Thêm thông tin rạp mới thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Thêm thông tin rạp mới KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCapnhatTTRap = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.SuaTTRap({
                        id: id_rap,
                        id_cr: id_cr,
                        tenrap: tenrap,
                        slg: Number(slg)
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        setSlg('');
                        setTenrap('');
                        // setId_cr()
                        handleLayttRap(valueCumrap);
                        alert("Cập nhật thông tin rạp thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật thông tin rạp KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTRap = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTRap({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        // console.log(res)
                        setSlg('');
                        setTenrap('');
                        // setId_cr()
                        handleLayttRap(valueCumrap);
                        alert("Xóa thông tin rạp thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin rạp KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSuaTTRap = function (ten, slg, id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTenrap(ten);
            setId_rap(id);
            setSlg(slg.toString());
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTRap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTRap_idcumrap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.raps;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setRap(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTCumrap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTCumrap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.cumraps;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setCumrap(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTRap();
        handleLayTTCumrap();
    }, []);
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement(Autocomplete_1["default"], { disablePortal: true, id: "combo-box-demo", options: cumrap.map(function (option) { return option.ten_tttt; }), value: valueCumrap, onChange: function (event, newValue) {
                    // {newValue ? setValueCumrap(newValue) : null}
                    {
                        newValue ? handleLayttRap(newValue) : null;
                    }
                }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Trung t\u00E2m th\u01B0\u01A1ng m\u1EA1i" })); } }),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00EAn r\u1EA1p"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setTenrap(event.target.value); }, value: tenrap })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "S\u1ED1 l\u01B0\u1EE3ng gh\u1EBF"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setSlg(event.target.value); }, value: slg })),
            react_1["default"].createElement("div", { className: " w-8/12 " },
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleCapnhatTTRap(); } }, "C\u1EADp nh\u1EADt th\u00F4ng tin"),
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleThemTTRap(); } }, "L\u01B0u th\u00F4ng tin"))),
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full  " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn r\u1EA1p"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "S\u1ED1 l\u01B0\u1EE3ng gh\u1EBF"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn c\u1EE5m r\u1EA1p"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
            react_1["default"].createElement("tbody", null, rap.map(function (item) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.ten_rap),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.slghe),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, cumrap.map(function (cr) { return cr.id === item.id_cumrap ? cr.ten_tttt : null; })),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer", onClick: function () { return handleSuaTTRap(item.ten_rap, item.slghe, item.id); } }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' }, onClick: function () { return handleXoaTTRap(item.id); } }))))); })))));
};
exports["default"] = QLRap;
