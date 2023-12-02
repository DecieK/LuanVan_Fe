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
// type Props = {
//     suatchieuP: any,
//     rapP: any,
//     phimP: any,
//     chieuP: any
// };
var QLNhanvien = function () {
    var _a = react_1.useState([]), nhanvien = _a[0], setNhanvien = _a[1];
    var _b = react_1.useState(''), valueChucvu = _b[0], setValueChucvu = _b[1];
    var _c = react_1.useState(''), tennv = _c[0], setTennv = _c[1];
    var _d = react_1.useState(new Date()), ngaysinh = _d[0], setNgaysinh = _d[1];
    var _e = react_1.useState(Number), id_nv = _e[0], setId_nv = _e[1];
    var _f = react_1.useState(Number), tuoi = _f[0], setTuoi = _f[1];
    var _g = react_1.useState(''), sdt = _g[0], setSdt = _g[1];
    var _h = react_1.useState(''), diachi = _h[0], setDiachi = _h[1];
    var _j = react_1.useState(''), cccd = _j[0], setCccd = _j[1];
    var _k = react_1.useState(""), gt_NV = _k[0], setGT_NV = _k[1];
    var _l = react_1.useState(''), taikhoan = _l[0], setTaikhoan = _l[1];
    var _m = react_1.useState(''), matkhau = _m[0], setMatkhau = _m[1];
    var handleLayTTNhanvien = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = {
                        tenTK: 'ALL'
                    };
                    return [4 /*yield*/, userService_1.LayTTNhanvien(params)];
                case 1:
                    response = _a.sent();
                    res = response.nhanviens;
                    // console.log("check api searchdate ghe: ", response);
                    // console.log("length", res.length);
                    setNhanvien(res);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleThemTTNhanvien = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("tennv", tennv);
                    console.log("sdt", sdt);
                    console.log("ngaysinh", ngaysinh);
                    console.log("tuoi", tuoi);
                    console.log("diachi", diachi);
                    console.log("gt_NV", gt_NV);
                    console.log("cccd", cccd);
                    console.log("valueChucvu", valueChucvu);
                    console.log("taikhoan", taikhoan);
                    console.log("matkhau", matkhau);
                    return [4 /*yield*/, userService_1.ThemTTNhanvien({
                            hten_nv: tennv,
                            sdt_nv: sdt,
                            ngaysinh_nv: ngaysinh,
                            tuoi_nv: tuoi,
                            diachi_nv: diachi,
                            gioitinh_nv: gt_NV,
                            cccd_nv: cccd,
                            chucvu_nv: valueChucvu,
                            taikhoan_nv: taikhoan,
                            matkhau_nv: matkhau
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTennv('');
                        setSdt('');
                        setNgaysinh(new Date());
                        setTuoi(0);
                        setDiachi('');
                        setGT_NV('');
                        setCccd('');
                        setValueChucvu('');
                        setTaikhoan('');
                        setMatkhau('');
                        handleLayTTNhanvien();
                        alert("Thêm thông tin nhân viên mới thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Thêm thông tin nhân viên mới KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSuaTTNhanvien = function (id, ten, sdt, ngaysinh, tuoi, diachi, gt, cccd, cv, tk, mk) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setId_nv(id);
            setTennv(ten);
            setSdt(sdt);
            setNgaysinh(new Date(ngaysinh));
            setTuoi(tuoi);
            setDiachi(diachi);
            setGT_NV(gt);
            setCccd(cccd);
            setValueChucvu(cv);
            setTaikhoan(tk);
            setMatkhau(mk);
            return [2 /*return*/];
        });
    }); };
    var handleCapnhatTTNhanvien = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("id", id_nv);
                    console.log("tennv", tennv);
                    console.log("sdt", sdt);
                    console.log("ngaysinh", ngaysinh);
                    console.log("tuoi", tuoi);
                    console.log("diachi", diachi);
                    console.log("gt_NV", gt_NV);
                    console.log("cccd", cccd);
                    console.log("valueChucvu", valueChucvu);
                    console.log("taikhoan", taikhoan);
                    console.log("matkhau", matkhau);
                    return [4 /*yield*/, userService_1.SuaTTNhanvien({
                            id: id_nv,
                            hten_nv: tennv,
                            sdt_nv: sdt,
                            ngaysinh_nv: ngaysinh,
                            tuoi_nv: tuoi,
                            diachi_nv: diachi,
                            gioitinh_nv: gt_NV,
                            cccd_nv: cccd,
                            chucvu_nv: valueChucvu,
                            taikhoan_nv: taikhoan,
                            matkhau_nv: matkhau
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTennv('');
                        setSdt('');
                        setNgaysinh(new Date());
                        setTuoi(0);
                        setDiachi('');
                        setGT_NV('');
                        setCccd('');
                        setValueChucvu('');
                        setTaikhoan('');
                        setMatkhau('');
                        handleLayTTNhanvien();
                        alert("Cập nhật thông tin nhân viên mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật thông tin nhân viên KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTNhanvien = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTNhanvien({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTennv('');
                        setSdt('');
                        setNgaysinh(new Date());
                        setTuoi(0);
                        setDiachi('');
                        setGT_NV('');
                        setCccd('');
                        setValueChucvu('');
                        setTaikhoan('');
                        setMatkhau('');
                        handleLayTTNhanvien();
                        alert("Xóa thông tin nhân viên thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin nhân viên KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTNhanvien = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            tenTK: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTNhanvien(params)];
                    case 1:
                        response = _a.sent();
                        res = response.nhanviens;
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setNhanvien(res);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTNhanvien();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement("div", { className: "flex m-auto w-10/12" },
                react_1["default"].createElement("div", { className: "basis-6/12  space-y-5" },
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00EAn nh\u00E2n vi\u00EAn"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setTennv(event.target.value); }, value: tennv })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "Ng\u00E0y sinh"),
                        react_1["default"].createElement(react_datepicker_1["default"], { className: "", 
                            // type="datetime"
                            selected: ngaysinh, 
                            // minDate={new Date()}
                            // maxDate={new Date("10-30-2023")}
                            // onChange={(date: Date) => setStartDate(date)}
                            onChange: function (date) { return setNgaysinh((date)); }, dateFormat: "dd/MM/yyyy" })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "Tu\u1ED5i"),
                        react_1["default"].createElement("input", { type: "number", placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setTuoi(event.target.valueAsNumber); }, value: tuoi })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setSdt(event.target.value); }, value: sdt })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "Gi\u1EDBi t\u00EDnh"),
                        react_1["default"].createElement("div", { className: "col-span-4 mx-10 " },
                            react_1["default"].createElement("input", { onChange: function (e) { return setGT_NV(e.target.value); }, type: "radio", value: "Nam", name: 'gt', checked: gt_NV === "Nam" }),
                            " Nam",
                            react_1["default"].createElement("input", { className: "ml-9", onChange: function (e) { return setGT_NV(e.target.value); }, type: "radio", value: "Nu", name: 'gt', checked: gt_NV === "Nu" }),
                            " N\u1EEF"))),
                react_1["default"].createElement("div", { className: "basis-6/12 space-y-5" },
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "\u0110\u1ECBa ch\u1EC9"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setDiachi(event.target.value); }, value: diachi })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "CCCD/CMND"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setCccd(event.target.value); }, value: cccd })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "Ch\u1EE9c v\u1EE5"),
                        react_1["default"].createElement(Autocomplete_1["default"], { disablePortal: true, id: "combo-box-demo", options: ['Quản lý', 'Nhân viên'], value: valueChucvu, onChange: function (event, newValue) {
                                {
                                    newValue ? setValueChucvu(newValue) : null;
                                }
                                // { newValue ? handleLayttRap(newValue) : null }
                            }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Ch\u1EE9c v\u1EE5" })); } })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00E0i kho\u1EA3n"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setTaikhoan(event.target.value); }, value: taikhoan })),
                    react_1["default"].createElement("div", { className: "flex space-x-5" },
                        react_1["default"].createElement("p", { className: "basis-[20%]" }, "M\u1EADt kh\u1EA9u"),
                        react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setMatkhau(event.target.value); }, value: matkhau })))),
            react_1["default"].createElement("div", { className: " w-8/12 " },
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleCapnhatTTNhanvien(); } }, "C\u1EADp nh\u1EADt th\u00F4ng tin"),
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleThemTTNhanvien(); } }, "L\u01B0u th\u00F4ng tin"))),
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full  " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "H\u1ECD t\u00EAn nh\u00E2n vi\u00EAn"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00E0y sinh"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Tu\u1ED5i"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "S\u0110T"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u1EDBi t\u00EDnh"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110\u1ECBa ch\u1EC9"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "CCCD/CMND"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ch\u1EE9c v\u1EE5"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E0i kho\u1EA3n"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "M\u1EADt kh\u1EA9u"))),
            react_1["default"].createElement("tbody", null, nhanvien.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Hten_NV),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.Ngaysinh_NV).format("DD/MM/YYYY")),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Tuoi_NV),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.Sdt_NV),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Gioitinh_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Diachi_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Cccd_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Chucvu_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Email_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.Matkhau_NV,
                        " "),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer", onClick: function () { return handleSuaTTNhanvien(item.id, item.Hten_NV, item.Sdt_NV, item.Ngaysinh_NV, item.Tuoi_NV, item.Diachi_NV, item.Gioitinh_NV, item.Cccd_NV, item.Chucvu_NV, item.Email_NV, item.Matkhau_NV); } }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' }, onClick: function () { return handleXoaTTNhanvien(item.id); } }))))); })))));
};
exports["default"] = QLNhanvien;
