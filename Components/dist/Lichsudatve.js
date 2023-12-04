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
var image_1 = require("next/image");
var userService_1 = require("@/service/userService");
var dayjs_1 = require("dayjs");
var ModalCapnhat_1 = require("./ModalCapnhat");
var KeyboardDoubleArrowUp_1 = require("@mui/icons-material/KeyboardDoubleArrowUp");
var Lichsudatve = function (_a) {
    var ttve = _a.ttve, id = _a.id, hten_KH = _a.hten_KH, hTTT = _a.hTTT, tongtien = _a.tongtien, sLghe = _a.sLghe, ngaymuave = _a.ngaymuave, id_kh = _a.id_kh, id_sc = _a.id_sc, id_r = _a.id_r, id_c = _a.id_c, id_cr = _a.id_cr, id_km = _a.id_km, id_nv = _a.id_nv, macode = _a.macode, createdat = _a.createdat, magd = _a.magd, tggd = _a.tggd;
    var _b = react_1.useState([]), ve = _b[0], setVe = _b[1];
    var _c = react_1.useState(Number), slghe = _c[0], setSlghe = _c[1];
    var _d = react_1.useState([]), rap = _d[0], setRap = _d[1];
    var _e = react_1.useState(String), tenrap = _e[0], setTenrap = _e[1];
    var _f = react_1.useState([]), cumrap = _f[0], setCumrap = _f[1];
    var _g = react_1.useState(String), tencumrap = _g[0], setTencumrap = _g[1];
    var _h = react_1.useState(String), diachicr = _h[0], setDiachicr = _h[1];
    var _j = react_1.useState([]), chitietve = _j[0], setChitietve = _j[1];
    var _k = react_1.useState(Array()), magheArr = _k[0], setMagheArr = _k[1];
    var _l = react_1.useState([]), ghe = _l[0], setGhe = _l[1];
    var _m = react_1.useState([]), suatchieu = _m[0], setSuatchieu = _m[1];
    var _o = react_1.useState(String), giobd = _o[0], setGiobd = _o[1];
    var _p = react_1.useState(String), giokt = _p[0], setGiokt = _p[1];
    var _q = react_1.useState([]), chieu = _q[0], setChieu = _q[1];
    var _r = react_1.useState(new Date()), ngaychieu = _r[0], setNgaychieu = _r[1];
    var _s = react_1.useState([]), phim = _s[0], setPhim = _s[1];
    var _t = react_1.useState(String), tenphim = _t[0], setTenphim = _t[1];
    var _u = react_1.useState(String), poster = _u[0], setPoster = _u[1];
    var _v = react_1.useState([]), chitietdoan = _v[0], setChitietdoan = _v[1];
    var _w = react_1.useState([]), doan = _w[0], setDoan = _w[1];
    var _x = react_1.useState(new Date()), tgiangiaodich = _x[0], settgiangiaodich = _x[1];
    var _y = react_1.useState([]), khuyenmai = _y[0], setKhuyenmai = _y[1];
    var _z = react_1.useState(false), showModal = _z[0], setShowModal = _z[1];
    var _0 = react_1.useState(Number), idp = _0[0], setIdp = _0[1];
    var _1 = react_1.useState(Boolean), step = _1[0], setStep = _1[1];
    var d = new Date(ngaychieu);
    var handleHuyVe1 = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.handleHuyVe({
                        id_ve: id
                    })];
                case 1:
                    res1 = _a.sent();
                    if (res1 && res1.errCode === 0) {
                        console.log(res1);
                        alert('Bạn đã hủy vé thành công.Tiền sẽ được hoàn về số tài khoản lúc đặt');
                        window.location.reload();
                    }
                    else {
                        console.log(res1);
                        alert('Lỗi hủy vé');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        // console.log("asda", checkngayUpdate)
        var handleLayTTRap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: id_r
                        };
                        return [4 /*yield*/, userService_1.LayTTRap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.raps;
                        // console.log("check api searchdate ve: ", response);
                        // console.log("length", res.length);
                        setRap(res);
                        res.map(function (raps) {
                            setTenrap(raps.ten_rap);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTDoan_idve = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id_ve: id
                        };
                        return [4 /*yield*/, userService_1.LayTTDoan_idve(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chitietdoans;
                        // console.log("check api searchdate chitietdoans: ", response);
                        // console.log("length", res.length);
                        setChitietdoan(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTCumrap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: id_cr
                        };
                        return [4 /*yield*/, userService_1.LayTTCumrap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.cumraps;
                        // console.log("check api searchdate ve: ", response);
                        // console.log("length", res.length);
                        setCumrap(res);
                        res.map(function (cr) {
                            setTencumrap(cr.ten_tttt),
                                setDiachicr(cr.diachi);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTchitietve = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id_ve: id
                        };
                        return [4 /*yield*/, userService_1.LayTTchitietve(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chitietves;
                        // console.log("check api searchdate ve: ", response);
                        // console.log("length", res.length);
                        setChitietve(res);
                        res.map(function (ctv) { return __awaiter(void 0, void 0, void 0, function () {
                            var params, response2, res2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        params = {
                                            key: ctv.id_ghe
                                        };
                                        return [4 /*yield*/, userService_1.LayTTGhe(params)];
                                    case 1:
                                        response2 = _a.sent();
                                        res2 = response2.ghes;
                                        // console.log("check api searchdate ve: ", response);
                                        // console.log("length", res.length);
                                        setGhe(res2);
                                        res2.map(function (ghes) {
                                            if (magheArr.includes(ghes.maGhe) === false) {
                                                magheArr.push(ghes.maGhe);
                                            }
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTSuatchieu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: id_sc
                        };
                        return [4 /*yield*/, userService_1.LayTTSuatchieu(params)];
                    case 1:
                        response = _a.sent();
                        res = response.suatchieus;
                        // console.log("check api searchdate sc: ", response);
                        // console.log("length", res.length);
                        setSuatchieu(res);
                        res.map(function (sc) {
                            setGiobd(sc.giobatdau);
                            setGiokt(sc.gioketthuc);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTChieu_idc = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: id_c
                        };
                        return [4 /*yield*/, userService_1.LayTTChieu_idc(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chieus;
                        // console.log("check api searchdate sc: ", response);
                        // console.log("length", res.length);
                        setChieu(res);
                        res.map(function (c) { return __awaiter(void 0, void 0, void 0, function () {
                            var d, params, response2, res2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        setNgaychieu(c.ngaychieu);
                                        d = new Date(c.ngaychieu);
                                        params = {
                                            key: c.id_phim
                                        };
                                        return [4 /*yield*/, userService_1.LayTTPhim(params)];
                                    case 1:
                                        response2 = _a.sent();
                                        res2 = response2.phims;
                                        // console.log("check api searchdate sc: ", response);
                                        // console.log("length", res.length);
                                        setPhim(res2);
                                        res2.map(function (p) {
                                            setTenphim(p.tenphim);
                                            setIdp(p.id);
                                            setPoster(new Buffer(p.poster, "base64").toString("binary"));
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTDoan = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: "ALL"
                        };
                        return [4 /*yield*/, userService_1.LayTTDoan(params)];
                    case 1:
                        response = _a.sent();
                        res = response.doans;
                        // console.log("check api Doan: ", response);
                        // console.log("length", res.length);
                        setDoan(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTKhuyenmai = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: id_km
                        };
                        return [4 /*yield*/, userService_1.LayTTKhuyenmai(params)];
                    case 1:
                        response = _a.sent();
                        res = response.khuyenmais;
                        // console.log("check api searchdate ve: ", response);
                        // console.log("length", res.length);
                        setKhuyenmai(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        setVe(ttve);
        settgiangiaodich(new Date(createdat));
        handleLayTTRap();
        handleLayTTCumrap();
        handleLayTTchitietve();
        handleLayTTSuatchieu();
        handleLayTTChieu_idc();
        handleLayTTDoan_idve();
        handleLayTTDoan();
        handleLayTTKhuyenmai();
    }, [createdat, id, id_c, id_cr, id_km, id_r, id_sc, magheArr, ttve, ve]);
    console.log("dđ", d);
    return (React.createElement("div", { className: "" },
        React.createElement("div", { className: 'flex pt-10 w-6/12 m-auto h-44' },
            React.createElement("div", { className: 'bg-gray-100 basis-1/5  rounded-xl' }),
            React.createElement("div", { className: 'bg-gray-200  basis-4/5  rounded-xl border-gray-300 border-l-2 border-dashed' },
                React.createElement("div", { className: " flex rounded-lg mx-7 my-3", onClick: function () { return setStep(!step); } },
                    React.createElement("div", { className: "w-2/6 m-auto mt-[3%] " },
                        React.createElement(image_1["default"], { className: "w-96 h-20", src: poster, width: 100, height: 100, alt: "Picture of the author" })),
                    React.createElement("div", { className: "w-3/6 space-y-2 pt-2  ml-[3%] " },
                        React.createElement("p", { className: "font-bold text-xl" }, tenphim.slice(0, 15) + '...'),
                        React.createElement("p", { className: "font-thin text-lg" }, tencumrap),
                        React.createElement("p", { className: "font-thin text-lg" },
                            giobd,
                            " - ",
                            dayjs_1["default"](ngaychieu).format("DD/MM/YYYY"))),
                    React.createElement("div", { className: "flex space-x-3  items-center" }, (new Date().getTime()) < (new Date((d.getMonth() + 1) + '/' + (d.getDate() - 1) + '/' + d.getFullYear()).getTime())
                        ?
                            React.createElement(React.Fragment, null,
                                React.createElement("button", { onClick: function () { return setShowModal(true); } }, "C\u1EADp nh\u1EADt"),
                                React.createElement("button", { onClick: function () { return handleHuyVe1(); } }, "H\u1EE7y v\u00E9"))
                        : "Quá hạn cập nhật")))),
        step === true &&
            (React.createElement("div", { className: "w-4/12 border-2 p-4 border-green-400 m-auto" },
                React.createElement(KeyboardDoubleArrowUp_1["default"], { onClick: function () { return setStep(!step); } }),
                React.createElement("p", null, tenphim),
                React.createElement("div", { className: "flex  text-gray-600" },
                    React.createElement("p", { className: "w-1/3" }, "Ph\u00F2ng chi\u1EBFu"),
                    React.createElement("p", { className: "w-1/3" }, "S\u1ED1 l\u01B0\u1EE3ng gh\u1EBF"),
                    React.createElement("p", { className: "w-1/3" }, "M\u00E3 gh\u1EBF")),
                React.createElement("div", { className: "flex font-semibold" },
                    React.createElement("p", { className: "w-1/3" }, tenrap),
                    React.createElement("p", { className: "w-1/3" }, sLghe),
                    React.createElement("p", { className: "flex w-1/3 space-x-3" }, magheArr.map(function (ghes, index) {
                        return (React.createElement(React.Fragment, null,
                            React.createElement("p", { className: "", key: index }, ghes)));
                    }))),
                React.createElement("hr", { className: "my-2" }),
                chitietdoan.map(function (ctda, index) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "" },
                            React.createElement("p", { className: "text-gray-600" }, "Th\u1EE9c \u0103n k\u00E8m"),
                            React.createElement("p", { className: "font-semibold" },
                                ctda.slda,
                                " x ",
                                doan.map(function (da) { return ctda.id_doan === da.id ? da.ten : null; })))));
                }),
                khuyenmai.map(function (km, index) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "" },
                            React.createElement("p", { className: "text-gray-600" }, "Khuy\u1EBFn m\u00E3i"),
                            React.createElement("p", { className: "font-semibold" },
                                khuyenmai.map(function (km) { return km.id === id_km ? km.ten_KM : null; }),
                                " : ",
                                km.tile_KM,
                                "%"))));
                }),
                React.createElement("hr", { className: "my-2" }),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: " text-gray-600" }, "R\u1EA1p chi\u1EBFu"),
                    React.createElement("p", { className: "font-semibold" }, tencumrap),
                    React.createElement("p", null, diachicr)),
                React.createElement("div", { className: "flex my-3" },
                    React.createElement("div", { className: "w-1/2" },
                        React.createElement("p", null, "T\u1ED5ng ti\u1EC1n"),
                        React.createElement("p", null, "M\u00E3 code"),
                        React.createElement("p", null, "M\u00E3 giao d\u1ECBch"),
                        React.createElement("p", null, "Th\u1EDDi gian giao d\u1ECBch")),
                    React.createElement("div", { className: "w-1/2 text-right" },
                        React.createElement("p", null, tongtien),
                        React.createElement("p", null, macode),
                        React.createElement("p", null, magd),
                        React.createElement("p", null, dayjs_1["default"](createdat).format("DD/MM/YYYY") + ' - ' + tgiangiaodich.getHours() + ':' + tgiangiaodich.getMinutes() + ':' + tgiangiaodich.getSeconds()))))),
        React.createElement(ModalCapnhat_1["default"], { id_ve: id, id_phim: idp, onClose: function () { return setShowModal(false); }, show: showModal })));
};
exports["default"] = Lichsudatve;
