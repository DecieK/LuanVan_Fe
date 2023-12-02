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
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var userService_1 = require("@/service/userService");
var dayjs_1 = require("dayjs");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var QLChieu = function () {
    var _a = react_1.useState(new Date()), ngaychieu = _a[0], setNgaychieu = _a[1];
    var _b = react_1.useState(''), giave = _b[0], setGiave = _b[1];
    var _c = react_1.useState([]), suatchieu = _c[0], setSuatchieu = _c[1];
    var _d = react_1.useState([]), rap = _d[0], setRap = _d[1];
    var _e = react_1.useState([]), phim = _e[0], setPhim = _e[1];
    var _f = react_1.useState([]), chieu = _f[0], setChieu = _f[1];
    var _g = react_1.useState('them'), step = _g[0], setStep = _g[1];
    var _h = react_1.useState(''), valuePhim = _h[0], setValuePhim = _h[1];
    var _j = react_1.useState(''), valueRap = _j[0], setValueRap = _j[1];
    var _k = react_1.useState(''), valueSuatchieu = _k[0], setValueSuatchieu = _k[1];
    var _l = react_1.useState(Number), id_p = _l[0], setId_p = _l[1];
    var _m = react_1.useState(Number), id_r = _m[0], setId_r = _m[1];
    var _o = react_1.useState(Number), id_sc = _o[0], setId_sc = _o[1];
    var _p = react_1.useState(Number), id_c = _p[0], setId_c = _p[1];
    var _q = react_1.useState(new Date()), startDate = _q[0], setStartDate = _q[1];
    // const [DSngaychieus, setDSngaychieus] = useState([
    //     {
    //         id: 0,
    //         ngaychieu: new Date(),
    //     },
    // ])
    var handleLayTTChieu = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = {
                        ngaychieu: 'ALL',
                        id_phim: 'ALL',
                        id_rap: 'ALL'
                    };
                    return [4 /*yield*/, userService_1.layTTChieu(params)];
                case 1:
                    response = _a.sent();
                    res = response.ttchieu;
                    console.log("check api searchdate chieu: ", response);
                    // console.log("length", res.length);
                    setChieu(res);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleLayTTPhim = function (value) {
        setValuePhim(value);
        // setValueRap('')
        phim.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (value === item.tenphim) {
                    setId_p(item.id);
                }
                return [2 /*return*/];
            });
        }); });
    };
    var handleLayTTRap = function (value) {
        setValueRap(value);
        // setValueRap('')
        rap.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (value === item.ten_rap) {
                    setId_r(item.id);
                }
                return [2 /*return*/];
            });
        }); });
    };
    var handleLayTTSuatchieu = function (value) {
        setValueSuatchieu(value);
        // setValueRap('')
        suatchieu.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (value === (item.giobatdau + ' - ' + item.gioketthuc)) {
                    setId_sc(item.id);
                }
                return [2 /*return*/];
            });
        }); });
    };
    var handleThemTTChieu = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("ngaychieu", ngaychieu);
                    console.log("giave", giave);
                    console.log("id_r", id_r);
                    console.log("id_p", id_p);
                    console.log("id_sc", id_sc);
                    return [4 /*yield*/, userService_1.ThemTTChieu({
                            ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                            giave: Number(giave),
                            idr: id_r,
                            idp: id_p,
                            idsc: id_sc
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setNgaychieu(new Date());
                        setGiave('');
                        // setId_cr()
                        handleLayTTChieu();
                        alert("Thêm thông tin chiếu mới thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Thêm thông tin chiếu mới KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCapnhatTTChieu = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("ngaychieu", ngaychieu);
                    console.log("giave", giave);
                    console.log("id_r", id_r);
                    console.log("id_p", id_p);
                    console.log("id_sc", id_sc);
                    return [4 /*yield*/, userService_1.SuaTTChieu({
                            ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                            giave: Number(giave),
                            idr: id_r,
                            idp: id_p,
                            idsc: id_sc,
                            id: id_c
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setNgaychieu(new Date());
                        setGiave('');
                        // setId_cr()
                        handleLayTTChieu();
                        alert("Cập nhật thông tin chiếu mới thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật thông tin chiếu KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTChieu = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTChieu({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setNgaychieu(new Date());
                        setGiave('');
                        // setId_cr()
                        handleLayTTChieu();
                        alert("Xóa thông tin chiếu mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin chiếu KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSuaTTChieu = function (ngay, gv, id, idp, idr, idsc) { return __awaiter(void 0, void 0, void 0, function () {
        var date1;
        return __generator(this, function (_a) {
            setStep('capnhat');
            date1 = new Date(ngay);
            setId_c(id);
            setNgaychieu(date1);
            setGiave(gv.toString());
            phim.map(function (item) {
                if (idp === item.id) {
                    setValuePhim(item.tenphim);
                    setId_p(item.id);
                }
            });
            rap.map(function (item) {
                if (idr === item.id) {
                    setValueRap(item.ten_rap);
                    setId_r(item.id);
                }
            });
            suatchieu.map(function (item) {
                if (idsc === item.id) {
                    setId_sc(item.id);
                    setValueSuatchieu(item.giobatdau + ' - ' + item.gioketthuc);
                }
            });
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTRap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
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
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTSuatchieu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTSuatchieu(params)];
                    case 1:
                        response = _a.sent();
                        res = response.suatchieus;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setSuatchieu(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTPhim(params)];
                    case 1:
                        response = _a.sent();
                        res = response.phims;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setPhim(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTChieu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            ngaychieu: 'ALL',
                            id_phim: 'ALL',
                            id_rap: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.layTTChieu(params)];
                    case 1:
                        response = _a.sent();
                        res = response.ttchieu;
                        console.log("check api searchdate chieu: ", response);
                        // console.log("length", res.length);
                        setChieu(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTRap();
        handleLayTTSuatchieu();
        handleLayTTPhim();
        handleLayTTChieu();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement("div", { className: "grid grid-cols-3 justify-items-center gap-5 " },
                react_1["default"].createElement(Autocomplete_1["default"], { value: valuePhim, disablePortal: true, id: "combo-box-demo", options: phim.map(function (option) { return option.tenphim; }), 
                    // options={}
                    onChange: function (event, newValue) {
                        // {newValue ? setValueCumrap(newValue) : null}
                        {
                            newValue ? handleLayTTPhim(newValue) : null;
                        }
                    }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Phim" })); } }),
                react_1["default"].createElement(Autocomplete_1["default"], { value: valueRap, disablePortal: true, id: "combo-box-demo", options: rap.map(function (option) { return option.ten_rap; }), 
                    // options={}
                    onChange: function (event, newValue) {
                        // {newValue ? setValueCumrap(newValue) : null}
                        {
                            newValue ? handleLayTTRap(newValue) : null;
                        }
                    }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "R\u1EA1p" })); } }),
                react_1["default"].createElement(Autocomplete_1["default"], { value: valueSuatchieu, disablePortal: true, id: "combo-box-demo", options: suatchieu.map(function (option) { return (option.giobatdau + " - " + option.gioketthuc); }), 
                    // options={}
                    onChange: function (event, newValue) {
                        // {newValue ? setValueCumrap(newValue) : null}
                        {
                            newValue ? handleLayTTSuatchieu(newValue) : null;
                        }
                    }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Su\u1EA5t chi\u1EBFu" })); } }),
                react_1["default"].createElement("div", { className: "flex space-x-2  " },
                    react_1["default"].createElement("p", { className: "basis-[40%]" }, "Ng\u00E0y chi\u1EBFu"),
                    react_1["default"].createElement(react_datepicker_1["default"], { className: "border-b-2 border-gray-300 pl-2", 
                        // type="datetime"
                        selected: ngaychieu, 
                        // onChange={handlSearchLichkham}
                        // onChange={(date: Date) => handleLayTTChieu(date)}
                        onChange: function (date) { return setNgaychieu(date); }, 
                        // onChange={(date: Date) => handlSearchDate((date))}
                        dateFormat: "dd/MM/yyyy" })),
                react_1["default"].createElement("div", { className: "flex space-x-5" },
                    react_1["default"].createElement("p", { className: "basis-[20%]" }, "Gi\u00E1 v\u00E9"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: giave, onChange: function (event) { return setGiave(event.target.value); } }))),
            react_1["default"].createElement("div", { className: " w-8/12 " },
                react_1["default"].createElement("button", { onClick: function () { return handleThemTTChieu(); }, className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40" }, "L\u01B0u th\u00F4ng tin"),
                react_1["default"].createElement("button", { onClick: function () { return handleCapnhatTTChieu(); }, className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40" }, "C\u1EADp nh\u1EADt th\u00F4ng tin"))),
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full  " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn phim"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn r\u1EA1p"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Th\u1EDDi gian chi\u1EBFu"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00E0y chi\u1EBFu"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u00E1 v\u00E9"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
            react_1["default"].createElement("tbody", null, chieu.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, phim.map(function (p) { return p.id === item.id_phim ? p.tenphim : null; })),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, rap.map(function (r) { return r.id === item.id_rap ? r.ten_rap : null; })),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, suatchieu.map(function (sc) { return sc.id === item.id_suatchieu ? sc.giobatdau + " - " + sc.gioketthuc : null; })),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.ngaychieu).format("DD/MM/YYYY")),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.giave,
                        " VN\u0110"),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer", onClick: function () { return handleSuaTTChieu(item.ngaychieu, item.giave, item.id, item.id_phim, item.id_rap, item.id_suatchieu); } }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' }, onClick: function () { return handleXoaTTChieu(item.id); } }))))); })))));
};
exports["default"] = QLChieu;
