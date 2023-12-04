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
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var Edit_1 = require("@mui/icons-material/Edit");
var Clear_1 = require("@mui/icons-material/Clear");
var userService_1 = require("@/service/userService");
var image_1 = require("next/image");
var dayjs_1 = require("dayjs");
var CommonUtils_1 = require("../CommonUtils");
var Checkbox_1 = require("@mui/material/Checkbox");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var QLPhim = function () {
    var _a = react_1.useState([]), chitietloaiphim = _a[0], setChitietloaiphim = _a[1];
    var _b = react_1.useState(Number), id = _b[0], setId = _b[1];
    var _c = react_1.useState([]), loaiphim = _c[0], setLoaiphim = _c[1];
    var _d = react_1.useState([]), phim = _d[0], setPhim = _d[1];
    var _e = react_1.useState(''), valueloaiphim = _e[0], setValueloaiphim = _e[1];
    var _f = react_1.useState(""), tenphim = _f[0], setTenphim = _f[1];
    var _g = react_1.useState(Number), dieukien = _g[0], setDieukien = _g[1];
    var _h = react_1.useState(""), trailer = _h[0], setTrailer = _h[1];
    var _j = react_1.useState(""), dienvien = _j[0], setDienvien = _j[1];
    var _k = react_1.useState(""), ngonngu = _k[0], setNgonngu = _k[1];
    var _l = react_1.useState(""), quocgia = _l[0], setQuocgia = _l[1];
    var _m = react_1.useState(""), daodien = _m[0], setDaodien = _m[1];
    var _o = react_1["default"].useState(''), thoiluong = _o[0], setThoiluong = _o[1];
    var _p = react_1.useState(new Date()), ngaychieu = _p[0], setNgaychieu = _p[1];
    var _q = react_1.useState(""), tomtat = _q[0], setTomtat = _q[1];
    var _r = react_1.useState(""), nsx = _r[0], setNsx = _r[1];
    var _s = react_1.useState(""), trangthai = _s[0], setTrangthai = _s[1];
    var _t = react_1.useState(""), prevURLIMG = _t[0], setPrevURLIMG = _t[1];
    var _u = react_1.useState(), poster = _u[0], setPoster = _u[1];
    var _v = react_1.useState(), fileIMG = _v[0], setFileIMG = _v[1];
    var _w = react_1.useState(Boolean), open = _w[0], setOpen = _w[1];
    var label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    var arrLP = [];
    var handleLoaiphim = function (idlp) {
        console.log('checkk');
        if (arrLP.indexOf(idlp) === -1) {
            arrLP.push(idlp);
        }
        else {
            arrLP.splice(arrLP.indexOf(idlp), arrLP.indexOf(idlp) + 1);
            // arrLP = arrLP1
        }
        console.log('checkk', arrLP);
    };
    var handleSuaTTPhim = function (id, tenphim, daodien, dienvien, nsx, ngonngu, ngaychieu, tomtat, thoiluong, poster, trailer, trangthai, dieukien, quocgia) {
        setTenphim(tenphim);
        setDaodien(daodien);
        setDienvien(dienvien);
        setNsx(nsx);
        setNgonngu(ngonngu);
        var d = new Date(ngaychieu);
        setNgaychieu(d);
        setTomtat(tomtat);
        setThoiluong(String(thoiluong));
        setPrevURLIMG(new Buffer(poster, "base64").toString("binary"));
        setPoster(poster);
        setTrailer(trailer);
        setTrangthai(trangthai);
        setDieukien(dieukien);
        setQuocgia(quocgia);
        setId(id);
    };
    var handleCapnhatTTphim = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("poster", poster);
                    return [4 /*yield*/, userService_1.SuaTTPhim({
                            id: id,
                            Tenphim: tenphim,
                            Dieukien: dieukien,
                            Poster: prevURLIMG,
                            Trailer: trailer,
                            Dienvien: dienvien,
                            Ngonngu: ngonngu,
                            Quocgia: quocgia,
                            Tomtat: tomtat,
                            Daodien: daodien,
                            Thoiluong: thoiluong,
                            Ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                            Nsx: nsx,
                            Trangthai: trangthai,
                            ArrCTLP: arrLP
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        handleLayTTPhim();
                        setDaodien('');
                        setDienvien('');
                        setDieukien(0);
                        setNgaychieu(new Date());
                        setNgonngu('');
                        setNsx('');
                        setQuocgia('');
                        setTenphim('');
                        setTrangthai('');
                        setThoiluong('');
                        setTomtat('');
                        setTrailer('');
                        alert("Cập nhật thông tin phim thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật thông tin phim KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTphim = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTPhim({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        handleLayTTPhim();
                        setDaodien('');
                        setDienvien('');
                        setDieukien(0);
                        setNgaychieu(new Date());
                        setNgonngu('');
                        setNsx('');
                        setQuocgia('');
                        setTenphim('');
                        setTrangthai('');
                        setThoiluong('');
                        setTomtat('');
                        setTrailer('');
                        alert("Xóa thông tin phim thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin phim KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var openPreviewImg = function () {
        if (!prevURLIMG)
            return;
        setOpen(true);
    };
    var handleOnChangeImage = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var data, file, base64img, objectUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("img");
                    setFileIMG(event.target.files[0]);
                    data = event.target.files;
                    file = data[0];
                    if (!file) return [3 /*break*/, 2];
                    return [4 /*yield*/, CommonUtils_1["default"].getBase64(file)];
                case 1:
                    base64img = _a.sent();
                    console.log("check base64 img: ", base64img);
                    objectUrl = URL.createObjectURL(file);
                    console.log("check objectUrl img: ", objectUrl);
                    setPoster(base64img);
                    setPrevURLIMG(objectUrl);
                    _a.label = 2;
                case 2:
                    console.log("setPrevURLIMG", prevURLIMG);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
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
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleThemTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("tenphim", tenphim);
                    console.log("dieukien", dieukien);
                    console.log("trailer", trailer);
                    console.log("dienvien", dienvien);
                    console.log("ngonngu", ngonngu);
                    console.log("quocgia", quocgia);
                    console.log("daodien", daodien);
                    console.log("tomtat", tomtat);
                    console.log("nsx", nsx);
                    console.log("trangthai", trangthai);
                    console.log("thoiluong", thoiluong);
                    console.log("ngaychieu", ngaychieu);
                    return [4 /*yield*/, userService_1.Themttphim({
                            Tenphim: tenphim,
                            Dieukien: dieukien,
                            Poster: poster,
                            Trailer: trailer,
                            Dienvien: dienvien,
                            Ngonngu: ngonngu,
                            Quocgia: quocgia,
                            Tomtat: tomtat,
                            Daodien: daodien,
                            Thoiluong: thoiluong,
                            Ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                            Nsx: nsx,
                            Trangthai: trangthai,
                            arridLP: arrLP
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        handleLayTTPhim();
                        setDaodien('');
                        setDienvien('');
                        setDieukien(0);
                        setNgaychieu(new Date());
                        setNgonngu('');
                        setNsx('');
                        setQuocgia('');
                        setTenphim('');
                        setTrangthai('');
                        setThoiluong('');
                        setTomtat('');
                        setTrailer('');
                        alert("Thêm thành công");
                    }
                    else {
                        console.log(res);
                        alert("Thêm không thành công");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCatchuoi = function (str) {
        str.slice(0, str.length - 2);
    };
    react_1.useEffect(function () {
        var handleLayTTCTLoaiphim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTCTLoaiphim_idP(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chitietloaiphims;
                        console.log("check api searchdate ghe: ", response);
                        console.log("length", res);
                        setChitietloaiphim(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTLoaiphim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTLoaiphim(params)];
                    case 1:
                        response = _a.sent();
                        res = response.loaiphims;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setLoaiphim(res);
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
        handleLayTTCTLoaiphim();
        handleLayTTLoaiphim();
        handleLayTTPhim();
    }, []);
    // useEffect(() => {
    //     setPhim(phimP)
    //     setLoaiphim(loaiphimP)
    // }, [loaiphimP, phimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "uppercase text-center text-2xl font-semibold" }, "danh s\u00E1ch phim"),
        react_1["default"].createElement("div", { className: "w-11/12 flex m-auto mt-5 mb-5" },
            react_1["default"].createElement("div", { className: "basis-6/12 space-y-3 " },
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "T\u00EAn phim:"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: tenphim, onChange: function (event) { return setTenphim(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "\u0110\u1EA1o di\u1EC5n"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: daodien, onChange: function (event) { return setDaodien(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Di\u1EC5n vi\u00EAn"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: dienvien, onChange: function (event) { return setDienvien(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Nh\u00E0 s\u1EA3n xu\u1EA5t"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: nsx, onChange: function (event) { return setNsx(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Ng\u00F4n ng\u1EEF"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: ngonngu, onChange: function (event) { return setNgonngu(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Ng\u00E0y chi\u1EBFu"),
                    react_1["default"].createElement(react_datepicker_1["default"], { className: "", 
                        // type="datetime"
                        selected: ngaychieu, 
                        // onChange={handlSearchLichkham}
                        // onChange={(date: Date) => handleLayTTChieu(date)}
                        onChange: function (date) { return setNgaychieu(date); }, 
                        // onChange={(date: Date) => handlSearchDate((date))}
                        dateFormat: "dd/MM/yyyy" })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "T\u00F3m t\u1EAFt"),
                    react_1["default"].createElement("textarea", { className: "h-20 w-80 border-2 outline-none pl-2", value: tomtat, onChange: function (event) { return setTomtat(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Lo\u1EA1i phim"),
                    react_1["default"].createElement("div", { className: "grid grid-cols-2" }, loaiphim.map(function (lp, index) {
                        return (react_1["default"].createElement("div", { key: index, className: "flex" },
                            react_1["default"].createElement(Checkbox_1["default"], __assign({ onClick: function () { return handleLoaiphim(lp.id); } }, label)),
                            react_1["default"].createElement("p", { className: "pt-2" }, lp.tenloai)));
                    })))),
            react_1["default"].createElement("div", { className: "basis-6/12 space-y-3" },
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Th\u1EDDi l\u01B0\u1EE3ng"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", onChange: function (event) { return setThoiluong(event.target.value); }, value: thoiluong })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Poster"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2" })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Trailer"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: trailer, onChange: function (event) { return setTrailer(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Tr\u1EA1ng th\u00E1i phim"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: trangthai, onChange: function (event) { return setTrangthai(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Gi\u1EDBi h\u1EA1n tu\u1ED5i"),
                    react_1["default"].createElement("input", { type: "number", className: "h-9 w-80 border-2 outline-none pl-2", value: dieukien, onChange: function (event) { return setDieukien(event.target.valueAsNumber); } })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("p", { className: "basis-3/12" }, "Qu\u1ED1c gia"),
                    react_1["default"].createElement("input", { className: "h-9 w-80 border-2 outline-none pl-2", value: quocgia, onChange: function (event) { return setQuocgia(event.target.value); } })),
                react_1["default"].createElement("div", { className: "flex space-x-6" },
                    react_1["default"].createElement("div", { className: "basis-3/12 flex pb-20 space-x-6" },
                        react_1["default"].createElement("p", { className: "" }, "Poster"),
                        react_1["default"].createElement("div", { className: "preview-img-container " },
                            react_1["default"].createElement("input", { className: "w-56 boder-2 bg-slate-400", id: "preview-img", type: "file", accept: ".png,.jpg", hidden: true, 
                                // onChange={(e) => setFileIMG(e.target.files?.[0])}
                                onChange: function (event) { return handleOnChangeImage(event); } }),
                            react_1["default"].createElement("label", { className: "lable-upload", htmlFor: "preview-img" },
                                "T\u1EA3i \u1EA3nh ",
                                react_1["default"].createElement("i", { className: "fas fa-upload" })))),
                    react_1["default"].createElement("div", { className: "preview-img bg-no-repeat h-32 w-32 bg-contain", style: {
                            backgroundImage: "url(" + prevURLIMG + ")"
                        }, onClick: function () { return openPreviewImg(); } })))),
        react_1["default"].createElement("div", { className: " w-8/12 " },
            react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: handleThemTTPhim }, "Th\u00EAm phim"),
            react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: handleCapnhatTTphim }, "C\u1EADp nh\u1EADt phim")),
        react_1["default"].createElement("div", { className: "w-full overflow-x-auto" },
            react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full " },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center " }, "#"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center w-[100px]" }, "T\u00EAn phim"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center w-[100px]" }, "Lo\u1EA1i phim"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110\u1EA1o di\u1EC5n"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Di\u1EC5n vi\u00EAn"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Nh\u00E0 s\u1EA3n xu\u1EA5t"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00F4n ng\u1EEF"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00E0y chi\u1EBFu"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00F3m t\u1EAFt"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Th\u1EDDi l\u01B0\u1EE3ng"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center w-96" }, "Poster"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Trailer"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Tr\u1EA1ng th\u00E1i phim"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u1EDBi h\u1EA1n tu\u1ED5i"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Qu\u1ED1c gia"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
                react_1["default"].createElement("tbody", null, phim.map(function (item) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("tr", { key: item.id },
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center w-[100px]" }, item.tenphim),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center w-[1000px]" }, chitietloaiphim.map(function (ctlp) {
                            if (ctlp.id_phim === item.id) {
                                return (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement("p", null,
                                        ctlp.loaiphim.tenloai,
                                        " ",
                                        react_1["default"].createElement("br", null))));
                            }
                        })),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.daodien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.dienvien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.nsx),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.ngonngu),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.ngaychieu).format("DD/MM/YYYY")),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center w-[2000px]" }, item.tomtat),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.thoiluong),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, react_1["default"].createElement(image_1["default"], { src: new Buffer(item.poster, "base64").toString("binary"), width: 300, height: 300, alt: "Picture of the author" })),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center w-[100px]" }, item.trailer),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.trangthai),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.dieukien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.quocgia),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                            react_1["default"].createElement(Edit_1["default"], { onClick: function () { return handleSuaTTPhim(item.id, item.tenphim, item.daodien, item.dienvien, item.nsx, item.ngonngu, item.ngaychieu, item.tomtat, item.thoiluong, item.poster, item.trailer, item.trangthai, item.dieukien, item.quocgia); }, className: "cursor-pointer" }),
                            react_1["default"].createElement(Clear_1["default"], { onClick: function () { return handleXoaTTphim(item.id); }, className: "cursor-pointer", sx: { color: 'red' } }))))); }))))));
};
exports["default"] = QLPhim;
