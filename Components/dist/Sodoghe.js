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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
//goldclass 32,64
//104,118,128,164
var userService_1 = require("@/service/userService");
var react_1 = require("react");
var ModalBapnuoc_1 = require("./ModalBapnuoc");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var Checkbox_1 = require("@mui/material/Checkbox");
var image_1 = require("next/image");
var Sodoghe = function (_a) {
    var id_phimP = _a.id_phimP, id_rapP = _a.id_rapP, ngaychieuP = _a.ngaychieuP, tenP = _a.tenP, tenrapP = _a.tenrapP, giobdP = _a.giobdP, gioktP = _a.gioktP, tencumrapP = _a.tencumrapP;
    var _b = react_1.useState(""), id_ve = _b[0], setId_ve = _b[1];
    var _c = react_1.useState(Number), id_chieu = _c[0], setId_chieu = _c[1];
    var _d = react_1.useState(""), hten_KH = _d[0], setHten_KH = _d[1];
    var _e = react_1.useState(""), httt = _e[0], setHttt = _e[1];
    var _f = react_1.useState(Number), tongtien = _f[0], setTongtien = _f[1];
    // const [soluongghe, setSoluongghe] = useState(Number);
    var _g = react_1.useState(new Date), ngaymuave = _g[0], setNgaymuave = _g[1];
    var _h = react_1.useState(Number), id_KH = _h[0], setId_KH = _h[1];
    var _j = react_1.useState(Number), id_ghe = _j[0], setId_ghe = _j[1];
    var _k = react_1.useState(Number), id_suatchieu = _k[0], setId_suatchieu = _k[1];
    var _l = react_1.useState(Number), id_rap = _l[0], setId_rap = _l[1];
    var _m = react_1.useState(Number), id_cumrap = _m[0], setId_cumrap = _m[1];
    var _o = react_1.useState(Number), id_KM = _o[0], setId_KM = _o[1];
    var _p = react_1.useState(Number), id_NV = _p[0], setId_NV = _p[1];
    var _q = react_1.useState(Number), id_doan = _q[0], setId_doan = _q[1];
    var _r = react_1.useState([]), chitietve = _r[0], setChitietve = _r[1];
    var _s = react_1.useState([]), phim = _s[0], setPhim = _s[1];
    var _t = react_1.useState([]), ve = _t[0], setVe = _t[1];
    var _u = react_1.useState([]), ghe = _u[0], setGhe = _u[1];
    var _v = react_1.useState([]), dsghe = _v[0], setDsghe = _v[1];
    var _w = react_1.useState(Number), id_phim = _w[0], setId_phim = _w[1];
    var _x = react_1.useState([]), chieu = _x[0], setChieu = _x[1];
    var _y = react_1.useState(Number), giave = _y[0], setGiave = _y[1];
    var _z = react_1.useState(false), km = _z[0], setKm = _z[1];
    var _0 = react_1.useState(false), trangthaidoan = _0[0], setTrangthaidoan = _0[1];
    var _1 = react_1.useState([]), khuyenmai = _1[0], setKhuyenmai = _1[1];
    var _2 = react_1.useState([]), doan = _2[0], setDoan = _2[1];
    // const [id_ghe1, setId_ghe1] = useState(Array);
    // const [tonggiave, setTonggiave] = useState(Number)
    // const [tileKM, setTileKM] = useState(Number)
    // const [giaDA, setGiaDA] = useState(Number)
    var _3 = react_1.useState(11), diemtichluyKH = _3[0], setDiemtichluyKH = _3[1];
    var _4 = react_1.useState(Number), tienDA = _4[0], setTienDA = _4[1];
    var _5 = react_1.useState(Number), tienKM = _5[0], setTienKM = _5[1];
    // const [sumsum1, setSumsum1] = useState(Number)
    var _6 = react_1.useState([]), arrIdghe = _6[0], setArrIdghe = _6[1];
    // const [arrIdghe, setArrIdghe] = useState<number[]>([]);
    var _7 = react_1.useState(false), showModalDA = _7[0], setShowModalDA = _7[1];
    var _8 = react_1.useState(false), showModalKM = _8[0], setShowModalKM = _8[1];
    var _9 = react_1.useState(Number), r = _9[0], setR = _9[1];
    var _10 = react_1.useState([]), dsdoans = _10[0], setDsdoans = _10[1];
    var _11 = react_1["default"].useState(0), checked = _11[0], setChecked = _11[1];
    // const [dsdoans, setDsdoans] = useState([
    //   {
    //     id: 0,
    //     ten: '',
    //     anhminhhoa: '',
    //     loai: '',
    //     mota: '',
    //     gia: 0,
    //     size: '',
    //     sl: 0
    //   },
    // ])
    var gheArr = [];
    var chitietveArr = [];
    var dsghedangdat = [];
    var sumsum = 0;
    // let sumsum1 = 0;
    var sumsum2 = 0;
    // let sum = 0;
    var _12 = react_1.useState([
        {
            id_ghe: 0,
            ma_ghe: "",
            gia: 0
        },
    ]), dsgheDDs = _12[0], setDsgheDDs = _12[1];
    var _13 = react_1.useState([
        {
            // id: 0,
            id_ve: 0,
            id_ghe: 0
        },
    ]), DSchitietves = _13[0], setDSchitietves = _13[1];
    var handleDatve = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // console.log("sumsum", sumsum)
                    // setTongtien(sumsum)
                    // setSoluongghe(dsgheDDs.length-1)
                    // setHttt("Online")
                    // console.log("alalalal", dsgheDDs.length-1)
                    // dsgheDDs.map((item) => {
                    //   // id_ghe1.indexOf(item.ma_ghe)
                    //   if(id_ghe1.indexOf(item.ma_ghe) < 0){
                    //     id_ghe1.push(item.ma_ghe)
                    //   }
                    // } )
                    console.log("hoten", hten_KH);
                    console.log("httt", httt);
                    console.log("tongtien", tongtien);
                    console.log("soluongghe", dsgheDDs.length);
                    console.log("ngaymuave", ngaymuave);
                    console.log("id_ghe", id_ghe);
                    console.log("id_suatchieu", id_suatchieu);
                    console.log("id_rap", id_rap);
                    console.log("id_cumrap", id_cumrap);
                    console.log("id_KM", id_KM);
                    console.log("id_NV", id_NV);
                    console.log("id_doan", id_doan);
                    console.log("id_KH", id_KH);
                    console.log("arrIdghe", arrIdghe);
                    console.log("dsgheDDs", dsgheDDs);
                    console.log("id_chieu", id_chieu);
                    return [4 /*yield*/, userService_1.Datve({
                            hten_KH: hten_KH,
                            httt: httt,
                            tongtien: (sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100),
                            soluongghe: dsgheDDs.length,
                            ngaymuave: ngaymuave,
                            id_chieu: id_chieu,
                            id_ghe: arrIdghe,
                            id_suatchieu: id_suatchieu,
                            id_rap: id_rapP,
                            // id_cumrap: id_cumrap,
                            // id_KM: id_KM,
                            // id_NV: id_NV,
                            // id_doan: id_doan
                            id_cumrap: 1,
                            id_KM: 1,
                            id_NV: 1,
                            id_doan: 1,
                            id_KH: 1
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        alert("Đặt vé thành công");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Đặt vé không thành công");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteJoke = function (id) {
        setDsgheDDs(dsgheDDs.filter(function (dsgheDDs) { return dsgheDDs.id_ghe !== id; }));
        // console.log("delete joke", id)
        setArrIdghe(arrIdghe.filter(function (item) { return item !== id; }));
        console.log("delete joke", arrIdghe);
    };
    var handleChonghedangdat = function (id, maGhe, loaighe) { return __awaiter(void 0, void 0, void 0, function () {
        var dsgheDD, dsgheDD;
        return __generator(this, function (_a) {
            // const handleAddJoke = (text) => {
            if (loaighe === 'VIP') {
                dsgheDD = {
                    id_ghe: id,
                    ma_ghe: maGhe,
                    gia: giave + giave * 0.2
                };
                setDsgheDDs(__spreadArrays([dsgheDD], dsgheDDs));
            }
            else {
                dsgheDD = {
                    id_ghe: id,
                    ma_ghe: maGhe,
                    gia: giave
                };
                setDsgheDDs(__spreadArrays([dsgheDD], dsgheDDs));
            }
            (arrIdghe).push(id);
            return [2 /*return*/];
        });
    }); };
    var handleSetkm = function (id_km) {
        if (checked === id_km) {
            setChecked(0);
            setTienKM(0);
        }
        else {
            setChecked(id_km);
            khuyenmai.map(function (item) {
                if (item.id === id_km) {
                    // kiem tra xem có nằm trong thời gian khuyến mãi hay k
                    setTienKM(item.tile_KM);
                }
            });
        }
        // if (id_km === id_KM) {
        //   setId_KM(0)
        //   setTienKM(0)
        // }
        // else {
        //   setId_KM(id_km)
        //   setTienKM(tile)
        // }
        console.log("tienKM", tienKM);
    };
    var handleLayDuLieuTuModalBapNuoc = function (arr) {
        // let sumDV = 0
        setDsdoans(arr);
        var res1 = arr;
        console.log("res1", res1);
        res1.map(function (item) {
            sumsum2 = sumsum2 + item.sl * item.gia;
            // console.log("item.ten", item.sl)
            // console.log("item.ten", item.sl * item.gia)
        });
        // console.log("sumsum2", sumsum2)
        setTienDA(sumsum2);
    };
    react_1.useEffect(function () {
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: id_phimP
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
        dsgheDDs.map(function (item) {
            if (item.id_ghe === 0) {
                dsgheDDs.splice(0, dsgheDDs.length);
            }
        });
        console.log(id_ve);
        // console.log("ipphim",ngaychieuP)
        var handleLayTTChieu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("id_rapP", id_rapP);
                        console.log("id_phimP", id_phimP);
                        console.log("ngaychieuP", ngaychieuP);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            id_rap: id_rapP,
                            id_phim: id_phimP,
                            ngaychieu: ngaychieuP
                        };
                        return [4 /*yield*/, userService_1.layTTChieu(params)];
                    case 2:
                        response = _a.sent();
                        res = response.ttchieu;
                        console.log("check api handleLayTTChieu: ", response);
                        // console.log("length", res.length);
                        setChieu(res);
                        // console.log(res.length)
                        res.map(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            var params_1, response_1, resVe, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        setGiave(res.giave),
                                            setId_suatchieu(res.id_suatchieu),
                                            setId_chieu(res.id);
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        params_1 = {
                                            id_chieu: res.id
                                        };
                                        console.log("veparams", params_1);
                                        return [4 /*yield*/, userService_1.LayTTve_idchieu(params_1)];
                                    case 2:
                                        response_1 = _a.sent();
                                        resVe = response_1.ves;
                                        console.log("check api searchdate ve: ", response_1);
                                        setVe(resVe);
                                        resVe.map(function (itemve) { return __awaiter(void 0, void 0, void 0, function () {
                                            var params_2, response_2, res_1, error_4;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        params_2 = {
                                                            id_ve: itemve.id + 1
                                                        };
                                                        console.log("searchdate", params_2);
                                                        return [4 /*yield*/, userService_1.LayTTchitietve(params_2)];
                                                    case 1:
                                                        response_2 = _a.sent();
                                                        res_1 = response_2.chitietves;
                                                        console.log("check api searchdate chitietve: ", response_2);
                                                        console.log("length", res_1.length);
                                                        setChitietve(res_1);
                                                        res_1.map(function (itemctv) {
                                                            var b = DSchitietves.findIndex(function (DSchitietves) { return DSchitietves.id_ghe === itemctv.id_ghe; });
                                                            if (b) {
                                                                DSchitietves.push({
                                                                    id_ve: itemctv.id_ve,
                                                                    id_ghe: itemctv.id_ghe
                                                                });
                                                            }
                                                        });
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        error_4 = _a.sent();
                                                        console.log(error_4);
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_3 = _a.sent();
                                        console.log(error_3);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTGhe = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id_rap: id_rapP
                        };
                        console.log("searchdate", params);
                        return [4 /*yield*/, userService_1.LayTTGhe_idrap(params)];
                    case 1:
                        response = _a.sent();
                        res = response.ghes;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setGhe(res);
                        console.log(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTchitietve = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id_ve: 'ALL'
                        };
                        console.log("searchdate", params);
                        return [4 /*yield*/, userService_1.LayTTchitietve(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chitietves;
                        console.log("check api searchdate chitietve: ", response);
                        console.log("length", res.length);
                        setChitietve(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTKM = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_7;
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
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTDoan = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_8;
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
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var khachhangs = JSON.parse(localStorage.getItem("khachhang") || "{}");
        if (Object.keys(khachhangs).length === 0) {
            // setTrangthai(true)
            console.log("true");
        }
        else {
            // setTrangthai(false)
            console.log("false");
            var res = khachhangs;
            console.log("Ád", res);
            res.map(function (item) {
                setDiemtichluyKH(item.Diemtichluy_KH);
            });
        }
        handleLayTTChieu();
        handleLayTTGhe();
        // handleLayTTchitietve();
        handleLayTTKM();
        // handleLayTTDoan();
        handleLayTTPhim();
        setHten_KH("Luong Vu Khoa");
        // console.log(Object.entries(dsgheDDs));
        // setId_ghe()
        setHttt("Online");
        setNgaymuave(new Date());
        // setId_suatchieu(1)
        // setId_rap(1)
        // setId_cumrap(1)
        // setId_NV(1)
        // // setId_KM(1)
        // // setId_doan()
        // setId_KH(1)
        // localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
    }, [DSchitietves, dsgheDDs, giave, id_phim, id_phimP, id_rap, id_rapP, id_suatchieu, id_ve, ngaychieuP]);
    // useEffect(() => {
    //   localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
    // }, [dsgheDDs]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'flex mt-3' },
            react_1["default"].createElement("div", { className: ' w-8/12' },
                react_1["default"].createElement("div", { className: 'h-3 w-9/12 bg-black m-auto' }),
                react_1["default"].createElement("p", { className: 'text-center text-yellow-600' }, "M\u00E0n h\u00ECnh"),
                react_1["default"].createElement("div", { className: 'w-8/12 m-auto' }, ghe.map(function (ghes) {
                    var gheVIP = ghes.loaiGhe === 'VIP';
                    var ghedoi = ghes.maGhe.length > 3;
                    // console.log("ghes.maGhe.length", ghes.maGhe.length);
                    // let gheVIP = 'bg-pink-200'
                    gheArr.push(ghes.id);
                    // console.log("gheArr", gheArr);
                    // console.log("chitietveArr", chitietveArr[1]);
                    // console.log(chitietveArr.includes(ghes.id));
                    var gheDadat = chitietveArr.includes(ghes.id);
                    if (gheDadat) {
                        gheVIP = false;
                    }
                    var disabled = gheDadat === true;
                    // const handleLike = (id) => {
                    //   setJokes(jokes.map(joke => {
                    //     if (joke.id === id) {
                    //       return {...joke, likes: joke.likes + joke*t}
                    //     } else {
                    //       return joke
                    //     }
                    //   }))
                    // }
                    //ghế đang dặt
                    var ghedangdat = dsgheDDs.findIndex(function (dsgheDDs) { return ghes.id === dsgheDDs.id_ghe; });
                    var classGhedangdat = ghedangdat != -1;
                    if (gheVIP && classGhedangdat) {
                        gheVIP = false;
                    }
                    return react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("button", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                var params, response, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!!classGhedangdat) return [3 /*break*/, 2];
                                            params = {
                                                key: ghes.id
                                            };
                                            console.log("searchdate", params);
                                            return [4 /*yield*/, userService_1.LayTTGhe(params)];
                                        case 1:
                                            response = _a.sent();
                                            res = response.ghes;
                                            console.log("check api searchdate ghe: ", response);
                                            console.log("length", res.length);
                                            setDsghe(res);
                                            console.log(res);
                                            res.map(function (res) { return (handleChonghedangdat(ghes.id, res.maGhe, res.loaiGhe)); });
                                            return [3 /*break*/, 3];
                                        case 2:
                                            handleDeleteJoke(ghes.id);
                                            _a.label = 3;
                                        case 3:
                                            console.log("classGhedangdat", classGhedangdat);
                                            console.log("ghedangdattttttttttttt1", dsgheDDs);
                                            // setSoluongghe(dsgheDDs.length)
                                            setId_ghe(ghes.id);
                                            dsgheDDs.map(function (item) {
                                                var sum = 0;
                                                dsgheDDs.forEach(function (item) {
                                                    sum += item.gia;
                                                });
                                                sumsum = sum;
                                                setTongtien(sum);
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, key: ghes.id, className: "h-10 w-10  m-2  \n                      " + (ghedoi ? 'w-20 rounded-xl h-8 ' : '') + "           \n                      " + (gheVIP ? 'border-2 border-yellow-500' : '') + "\n                      " + (classGhedangdat ? 'bg-blue-400' : '') + "\n                      " + (gheDadat ? 'bg-gray-600 text-red-500' : '') + "\n                      // " + (!gheDadat && !gheVIP && !classGhedangdat ? 'border-2 border-gray-500' : '') + "\n                      " + (gheVIP && classGhedangdat ? 'bg-blue-500' : '') + "                             \n                    ", disabled: disabled }, gheDadat === true ? 'X' : ghes.maGhe));
                }, 
                // chitietve.map((chitietves) => {
                //   chitietveArr.push(chitietves.id_ghe)
                // })
                DSchitietves.map(function (chitietves) {
                    chitietveArr.push(chitietves.id_ghe);
                }))),
                react_1["default"].createElement("div", { className: 'grid grid-cols-2 m-auto mt-6 w-9/12 justify-items-center ' },
                    react_1["default"].createElement("div", { className: 'col-span-1 space-y-2' },
                        react_1["default"].createElement("div", { className: 'flex space-x-2' },
                            react_1["default"].createElement("div", { className: 'h-10 w-10 border-2 border-gray-500 ' }),
                            react_1["default"].createElement("p", null, "Gh\u1EBF b\u00ECnh th\u01B0\u1EDDng tr\u1ED1ng")),
                        react_1["default"].createElement("div", { className: 'flex space-x-2' },
                            react_1["default"].createElement("div", { className: 'h-10  w-10 border-2 border-yellow-500 ' }),
                            react_1["default"].createElement("p", null, "Gh\u1EBF VIP tr\u1ED1ng"))),
                    react_1["default"].createElement("div", { className: 'col-span-1 space-y-2' },
                        react_1["default"].createElement("div", { className: 'flex space-x-2' },
                            react_1["default"].createElement("div", { className: 'h-10 w-10  border-2 bg-blue-400 ' }),
                            react_1["default"].createElement("p", null, "Gh\u1EBF \u0111ang ch\u1ECDn")),
                        react_1["default"].createElement("div", { className: 'flex space-x-2' },
                            react_1["default"].createElement("div", { className: 'h-10 w-10  border-2 bg-gray-600 text-red-500' }),
                            react_1["default"].createElement("p", null, "Gh\u1EBF \u0111\u00E3 \u0111\u1EB7t"))))),
            react_1["default"].createElement("div", { className: ' w-4/12' },
                phim.map(function (p, index) {
                    return (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("p", { className: 'm-auto text-2xl font-bold  ' }, p.tenphim)));
                }),
                react_1["default"].createElement("hr", null),
                react_1["default"].createElement("div", { className: 'flex space-x-10 mt-5' },
                    react_1["default"].createElement(image_1["default"], { className: "", src: "/poster1.jpg", width: 100, height: 100, alt: "Picture of the author" }),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", { className: 'text-2xl' },
                            tencumrapP,
                            " ",
                            react_1["default"].createElement("br", null),
                            " ",
                            tenrapP),
                        react_1["default"].createElement("p", { className: 'text-xl pt-3' },
                            ngaychieuP,
                            " ",
                            react_1["default"].createElement("br", null),
                            " ",
                            giobdP,
                            " - ",
                            gioktP))),
                react_1["default"].createElement("hr", { className: 'my-3' }),
                react_1["default"].createElement("div", { className: 'flex' },
                    "Danh s\u00E1ch gh\u1EBF:",
                    dsgheDDs.slice().reverse().map(function (element, index) {
                        var sum = 0;
                        dsgheDDs.forEach(function (element) {
                            sum += element.gia;
                        });
                        sumsum = sum;
                        // setTonggiave(sum)
                        return (react_1["default"].createElement("div", { key: index, className: 'px-1' },
                            react_1["default"].createElement("label", { className: 'pr-1' },
                                " ",
                                element.ma_ghe,
                                " ")));
                    })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'cursor-pointer', onClick: function () { return setShowModalDA(true); } },
                        "Ch\u1ECDn d\u1ECBch v\u1EE5",
                        react_1["default"].createElement(AddCircleOutline_1["default"], null))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'cursor-pointer', 
                        //  onClick={() => handleKM(km)}
                        onClick: function () { return setShowModalKM(!showModalKM); } }, "Khuy\u1EBFn m\u00E3i"),
                    showModalKM === true
                        ?
                            react_1["default"].createElement("div", null, khuyenmai.map(function (khuyenmais, index) {
                                if (khuyenmais.dieukien_KM < diemtichluyKH) {
                                    return (react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement("div", { className: 'flex' },
                                            react_1["default"].createElement("p", { key: index, className: 'p-2' }, khuyenmais.ten_KM),
                                            react_1["default"].createElement(Checkbox_1["default"], { checked: khuyenmais.id === checked ? true : false, 
                                                // onChange={()=>setChecked(!checked)}
                                                onClick: function () { return handleSetkm(khuyenmais.id); } })),
                                        react_1["default"].createElement("hr", null)));
                                }
                            }))
                        : ""),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'text-2xl' },
                        (sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100),
                        " VN\u0110")),
                react_1["default"].createElement("button", { className: 'text-center h-14 w-48 border-green-600 border-2 bg-green-500 rounded-lg text-3xl ', onClick: function () { return handleDatve(); } }, "\u0110\u1EB7t v\u00E9"))),
        react_1["default"].createElement(ModalBapnuoc_1["default"]
        // id_phim={id_phim}
        , { 
            // id_phim={id_phim}
            handleLayDuLieuTuModalBapNuoc: handleLayDuLieuTuModalBapNuoc, onCloseDA: function () { return setShowModalDA(false); }, showDA: showModalDA })));
};
exports["default"] = Sodoghe;
