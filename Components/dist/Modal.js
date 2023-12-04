"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
// import "react-datepicker/dist/react-datepicker.css";
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_2 = require("react");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var react_3 = require("@material-tailwind/react");
var userService_1 = require("@/service/userService");
var router_1 = require("next/router");
// export type thongtinbenhnhan = {
//   id: number;
//   Ho: string;
//   Ten: string;
//   Dienthoai: string;
//   Gioitinh: string;
//   Diachi: string;
//   Hovaten: string;
// };
var Modal = function (_a) {
    var show = _a.show, onClose = _a.onClose, id_phim = _a.id_phim;
    var _b = react_1.useState(), Ngaysinh = _b[0], setNgaysinh = _b[1];
    var _c = react_1.useState(false), isBrowser = _c[0], setIsBrowser = _c[1];
    var _d = react_1.useState(new Date()), startDate = _d[0], setStartDate = _d[1];
    var _e = react_hook_form_1.useForm(), register = _e.register, handleSubmit = _e.handleSubmit, watch = _e.watch, errors = _e.formState.errors;
    var _f = react_1.useState([]), chieu = _f[0], setChieu = _f[1];
    var _g = react_1.useState([]), cumrap = _g[0], setCumrap = _g[1];
    var _h = react_1.useState([]), suatchieu = _h[0], setSuatchieu = _h[1];
    var _j = react_1.useState([]), rap = _j[0], setRap = _j[1];
    var _k = react_1.useState(Number), idSuatchieu = _k[0], setIdSuatchieu = _k[1];
    var _l = react_1.useState(Number), idcumrap = _l[0], setIdcumrap = _l[1];
    var _m = react_1.useState(Number), id_rap = _m[0], setIdRap = _m[1];
    var _o = react_1.useState(Date), ngaychieu = _o[0], setNgaychieu = _o[1];
    var _p = react_1.useState([]), phim = _p[0], setPhim = _p[1];
    var _q = react_1.useState(Boolean), checkdate = _q[0], setCheckdate = _q[1];
    var _r = react_1.useState([
        {
            id: 0,
            ngaychieu: "",
            giave: 0,
            id_rap: 0,
            id_suatchieu: 0,
            id_phim: 0
        },
    ]), chieus = _r[0], setDschieus = _r[1];
    var _s = react_1.useState([
        {
            id_rap: 0,
            ngaychieu: "",
            // giave: 0,
            id_phim: 0,
            id_suatchieu: 0,
            giobatdau: "",
            gioketthuc: "",
            slghe: 0,
            slghedadat: 0
        },
    ]), items = _s[0], setDsitems = _s[1];
    var _t = react_1.useState([
        {
            // id: Number,
            // giobatdau: String,
            // gioketthuc: String
            id: 0,
            giobatdau: "",
            gioketthuc: ""
        },
    ]), suatchieus = _t[0], setDssuatchieus = _t[1];
    // chieus.splice(0, chieus.length);
    // suatchieus.splice(0, suatchieus.length);
    var handlePushTTchieu = function (id, ngaychieu, giave, id_r, id_suatchieu, id_phim) { return __awaiter(void 0, void 0, void 0, function () {
        var isFound;
        return __generator(this, function (_a) {
            isFound = chieus.some(function (element) {
                if (element.id === id) {
                    return true;
                }
                return false;
            });
            if (isFound === false) {
                chieus.push({
                    id: id,
                    ngaychieu: ngaychieu,
                    giave: giave,
                    id_rap: id_r,
                    id_suatchieu: id_suatchieu,
                    id_phim: id_phim
                });
                // handleLayTTSuatchieu()
            }
            return [2 /*return*/];
        });
    }); };
    var handleLayTTChieu = function (id_rap) { return __awaiter(void 0, void 0, void 0, function () {
        var res, res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.layTTChieu({
                        id_phim: id_phim,
                        ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
                        id_rap: id_rap
                    })];
                case 1:
                    res = _a.sent();
                    console.log("Thong tin bang Chieu", res);
                    res1 = res.ttchieu;
                    setChieu(res1);
                    console.log(res1.length);
                    res1.map(function (res1) {
                        console.log("gia", res1.giave);
                        // const chieu = {
                        //   id: res1.id,
                        //   ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
                        //   giave: res1.giave,
                        //   id_rap: res1.id_rap,
                        //   id_suatchieu: res1.id_suatchieu,
                        //   id_phim: res1.id_phim
                        // }
                        // setDschieus([chieu, ...chieus])
                        handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu);
                    });
                    // } catch (error) {
                    //   console.log(error);
                    // }
                    console.log("Thong tin bang chieus", chieus);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleKiemtraNgay = function (date) {
        suatchieus.splice(0, suatchieus.length);
        setStartDate(date);
        var currdate = new Date();
        // currdate.setHours(0, 0, 0, 0)
        // date.setHours(0, 0, 0, 0)
        // if (date.getTime() === currdate.getTime()) {
        //   setCheckdate(true)
        // } else {
        //   setCheckdate(false)
        // }
    };
    var deleteAllItems = function () {
        chieus.splice(0, chieus.length);
        // setDschieus([...chieus]); // Update the state with the modified array
    };
    var handleLayTTCumRap = function (id_cumrap) { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(id_phim);
                    if (id_cumrap != idcumrap) {
                        suatchieus.splice(0, suatchieus.length);
                    }
                    setIdcumrap(id_cumrap);
                    deleteAllItems();
                    setNgaychieu(startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    params = {
                        key: id_cumrap
                    };
                    return [4 /*yield*/, userService_1.LayTTRap_idcumrap(params)];
                case 2:
                    response = _a.sent();
                    res = response.raps;
                    console.log("check api searchdate tat ca rap trong 1 cum rap: ", response);
                    // console.log("length rap", res.length);
                    setRap(res);
                    res.map(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var resChieu, res1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // setIdRap(res.id)
                                    console.log("idp", id_phim);
                                    console.log("idr", res.id);
                                    return [4 /*yield*/, userService_1.layTTChieu({
                                            id_phim: id_phim,
                                            ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
                                            id_rap: res.id
                                        })];
                                case 1:
                                    resChieu = _a.sent();
                                    res1 = resChieu.ttchieu;
                                    console.log("asdassssssssssssss", resChieu.ttchieu);
                                    console.log("res1", res1);
                                    setChieu(res1);
                                    if (res1.length === 0) {
                                        suatchieus.splice(0, suatchieus.length);
                                    }
                                    else {
                                        res1.map(function (res1) { return __awaiter(void 0, void 0, void 0, function () {
                                            var params, response, ressuatchieu;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        // setIdRap(res1.id_rap)
                                                        suatchieus.splice(0, suatchieus.length);
                                                        console.log("gia", res1.giave);
                                                        params = {
                                                            key: res1.id_suatchieu
                                                        };
                                                        console.log("suatchieuparams", params);
                                                        return [4 /*yield*/, userService_1.LayTTSuatchieu(params)];
                                                    case 1:
                                                        response = _a.sent();
                                                        ressuatchieu = response.suatchieus;
                                                        console.log("check api searchdate Suatchieu: ", response);
                                                        // console.log("length", res.length);
                                                        setSuatchieu(ressuatchieu);
                                                        ressuatchieu.map(function (res) {
                                                            suatchieus.push({
                                                                id: res.id,
                                                                giobatdau: res.giobatdau,
                                                                gioketthuc: res.gioketthuc
                                                            });
                                                        });
                                                        console.log(ressuatchieu.length);
                                                        handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log("lengasdasdasth rap");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log("chieuschieus2222", chieus);
                    return [2 /*return*/];
            }
        });
    }); };
    // const handleLayTTSuatchieu = async () => {
    //   suatchieus.splice(0, suatchieus.length);
    //   console.log("lengthchieus", chieus.length);
    //   chieus.map(async (item) => {
    //     try {
    //       const params = {
    //         // key: idSuatchieu,
    //         key: item.id
    //       };
    //       console.log("suatchieuparams", params);
    //       const response = await LayTTSuatchieu(params);
    //       const res: Suatchieu[] = response.suatchieus;
    //       console.log("check api searchdate Suatchieu: ", response);
    //       // console.log("length", res.length);
    //       setSuatchieu(res);
    //       res.map((res) => {
    //         suatchieus.push({
    //           id: res.id,
    //           giobatdau: res.giobatdau,
    //           gioketthuc: res.gioketthuc
    //         });
    //       })
    //       console.log(res.length)
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })
    // }
    var router = router_1.useRouter();
    var handleDatve = function (id_r, bd, kt) {
        var tenP;
        var tenrapP;
        var tencumrapP;
        rap.map(function (r) {
            if (r.id === id_r) {
                tenrapP = r.ten_rap;
            }
        });
        cumrap.map(function (cr) {
            if (cr.id === idcumrap) {
                tencumrapP = cr.ten_tttt;
            }
        });
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: id_phim
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
                        res.map(function (res) { return (tenP = res.tenphim); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTPhim();
        router.push({
            pathname: '/datve',
            query: {
                id_phim: id_phim,
                id_rap: id_r,
                ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
                tenP: tenP,
                tenrapP: tenrapP,
                giobdP: bd,
                gioktP: kt,
                tencumrapP: tencumrapP
            }
        });
    };
    react_1.useEffect(function () {
        var handleLayTTCumrap = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_3;
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
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTCumrap();
        setIsBrowser(true);
    }, []);
    var handleCloseClick = function () {
        onClose();
        console.log(onClose);
        console.log(show);
    };
    var modalContent = show ? (react_2["default"].createElement(StyledModalOverlay, null,
        react_2["default"].createElement(StyledModal, { className: "  w-[10/12]  rounded-lg " },
            react_2["default"].createElement(StyledModalHeader, { className: "bg-red-500 w-full h-14 uppercase pt-3 font-semibold text-2xl text-center " },
                react_2["default"].createElement("div", { className: "flex text-xl p-2" },
                    react_2["default"].createElement("span", { className: " text-center uppercase w-full" }, "L\u1ECBch chi\u1EBFu CGV C\u1EA7n Th\u01A1"),
                    react_2["default"].createElement("button", { 
                        // href="#"
                        className: "rounded-full text-center h-7 w-7 bg-gray-300", onClick: handleCloseClick }, "x"))),
            (react_2["default"].createElement(StyledModal, null)),
            react_2["default"].createElement(StyledModalBody, { className: "bg-white" },
                react_2["default"].createElement("div", { className: "modal" },
                    react_2["default"].createElement("div", { className: "flex pl-7 w-96 h-20" },
                        react_2["default"].createElement(react_datepicker_1["default"], { className: "", selected: startDate, minDate: new Date(), onChange: function (date) { return handleKiemtraNgay((date)); }, dateFormat: "dd/MM/yyyy" })),
                    react_2["default"].createElement("div", { className: 'grid sm:grid-cols-3 grid-cols-2 mt-10 place-items-center' },
                        "              ",
                        cumrap.map(function (item, index) {
                            return (react_2["default"].createElement(react_2["default"].Fragment, null,
                                react_2["default"].createElement(react_3.Button, { onClick: function () { return handleLayTTCumRap(item.id); }, key: index, className: 'col-span-1 bg-red-400 h-20 w-40 rounded-md' }, item.ten_tttt)));
                        })),
                    react_2["default"].createElement("div", { className: 'grid grid-cols-4 mt-8 gap-4 place-items-center mb-10' }, suatchieus.map(function (item, index) {
                        var datee = new Date();
                        if (checkdate === true) {
                            if (item.giobatdau !== '' && datee.getHours() < Number(item.giobatdau.slice(0, 2)) ||
                                (datee.getHours() === Number(item.giobatdau.slice(0, 2)) &&
                                    (datee.getMinutes() + 10) < Number(item.giobatdau.slice(3, 5)))) {
                                return (react_2["default"].createElement(react_2["default"].Fragment, null,
                                    react_2["default"].createElement(react_3.Button, { onClick: function () { return handleDatve(chieus[index].id_rap, item.giobatdau, item.gioketthuc); }, key: index, className: "bg-gray-300 rounded-md h-10 w-32" }, item.giobatdau + " - " + item.gioketthuc)));
                            }
                        }
                        else {
                            if (item.giobatdau !== '') {
                                return (react_2["default"].createElement(react_2["default"].Fragment, null,
                                    react_2["default"].createElement(react_3.Button, { onClick: function () { return handleDatve(chieus[index].id_rap, item.giobatdau, item.gioketthuc); }, key: index, className: "bg-gray-300 rounded-md h-10 w-32 mb-8" }, item.giobatdau + " - " + item.gioketthuc
                                    // (datee.getHours() < Number(item.giobatdau.slice(0, 2)) ||
                                    //   datee.getHours() === Number(item.giobatdau.slice(0, 2)) && (datee.getMinutes()+10) < Number(item.giobatdau.slice)
                                    //   ? item.giobatdau +" - "+ item.gioketthuc : null                            
                                    //   )
                                    )));
                            }
                        }
                    }))))))) : null;
    if (isBrowser) {
        return react_dom_1["default"].createPortal(modalContent, document.getElementById('modal-root'));
    }
    else {
        return null;
    }
};
var StyledModalBody = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 1px;\n"], ["\n  padding-top: 1px;\n"])));
var StyledModalHeader = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* display: flex;\n  justify-content: flex-end;\n  font-size: 25px; */\n"], ["\n  /* display: flex;\n  justify-content: flex-end;\n  font-size: 25px; */\n"])));
var StyledModal = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px; */\n"], ["\n  /* background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px; */\n"])));
var StyledModalOverlay = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"])));
exports["default"] = Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu
