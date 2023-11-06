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
require("react-datepicker/dist/react-datepicker.css");
var userService_1 = require("@/service/userService");
var image_1 = require("next/image");
var CommonUtils_1 = require("../CommonUtils");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var QLDichvu = function () {
    var _a = react_1.useState(new Date()), ngaychieu = _a[0], setNgaychieu = _a[1];
    var _b = react_1.useState(Number), gia = _b[0], setGia = _b[1];
    var _c = react_1.useState(''), valueSize = _c[0], setValueSize = _c[1];
    var _d = react_1.useState(Number), id_dv = _d[0], setId_dv = _d[1];
    var _e = react_1.useState(''), anhminhhoa = _e[0], setAnhminhhoa = _e[1];
    var _f = react_1.useState([]), doan = _f[0], setDoan = _f[1];
    var _g = react_1.useState(''), prevURLIMG = _g[0], setPrevURLIMG = _g[1];
    var Size = [
        'S', 'M', 'L', 'XL', '2XL'
    ];
    var _h = react_1.useState(''), tendv = _h[0], setTendv = _h[1];
    var _j = react_1.useState(''), loaidv = _j[0], setLoaidv = _j[1];
    var _k = react_1.useState(''), motadv = _k[0], setMotadv = _k[1];
    // const handleLayTTChieu = async () => {
    //     try {
    //         const params = {
    //             ngaychieu: 'ALL',
    //             id_phim: 'ALL',
    //             id_rap: 'ALL'
    //         };
    //         // console.log("searchdate", params);
    //         const response = await layTTChieu(params);
    //         const res: Chieu[] = response.ttchieu;
    //         console.log("check api searchdate chieu: ", response);
    //         // console.log("length", res.length);
    //         setChieu(res);
    //         res.map((res) => {
    //             console.log("asdasdasdas", res.ngaychieu.getDate())
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const handleLayTTPhim = (value: string) => {
    //     setValuePhim(value)
    //     // setValueRap('')
    //     phim.map(async (item) => {
    //         if (value === item.tenphim) {
    //             setId_p(item.id)
    //         }
    //     })
    // }
    // const handleLayTTRap = (value: string) => {
    //     setValueRap(value)
    //     // setValueRap('')
    //     rap.map(async (item) => {
    //         if (value === item.ten_rap) {
    //             setId_r(item.id)
    //         }
    //     })
    // }
    // const handleLayTTSuatchieu = (value: string) => {
    //     setValueSuatchieu(value)
    //     // setValueRap('')
    //     suatchieu.map(async (item) => {
    //         if (value === (item.giobatdau + ' - ' + item.gioketthuc)) {
    //             setId_sc(item.id)
    //         }
    //     })
    // }
    var handleThemTTDichvu = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.ThemTTDoan({
                        Ten: tendv,
                        Anhminhhoa: anhminhhoa,
                        Loai: loaidv,
                        Mota: motadv,
                        Gia: gia,
                        Size: valueSize
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTendv('');
                        setAnhminhhoa('');
                        setLoaidv('');
                        setMotadv('');
                        setGia(0);
                        setValueSize('');
                        handleLayTTDoan();
                        alert("Thêm thông tin dịch vụ mới thành thông");
                        // handleCloseClick();
                    }
                    else {
                        console.log(res);
                        alert("Thêm thông tin dịch vụ mới KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCapnhatTTDichvu = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.SuaTTDichvu({
                        id: id_dv,
                        Ten: tendv,
                        Anhminhhoa: anhminhhoa,
                        Loai: loaidv,
                        Mota: motadv,
                        Gia: gia,
                        Size: valueSize
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTendv('');
                        setAnhminhhoa('');
                        setLoaidv('');
                        setMotadv('');
                        setGia(0);
                        setValueSize('');
                        handleLayTTDoan();
                        alert("Cập nhật thông tin dịch vụ mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Cập nhật thông tin dịch vụ KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleXoaTTDichvu = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.XoaTTDichvu({
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        setTendv('');
                        setAnhminhhoa('');
                        setLoaidv('');
                        setMotadv('');
                        setGia(0);
                        setValueSize('');
                        handleLayTTDoan();
                        alert("Xóa thông tin dịch vụ mới thành thông");
                    }
                    else {
                        console.log(res);
                        alert("Xóa thông tin dịch vụ KHÔNG thành thông");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSuaTTDichvu = function (id, ten, anh, ldv, mtdv, size, gia) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // let date1 = new Date(ngay)
            // setId_c(id)
            setId_dv(id);
            setTendv(ten);
            setPrevURLIMG(new Buffer(anh, "base64").toString("binary"));
            setAnhminhhoa(anh);
            setLoaidv(ldv);
            setMotadv(mtdv);
            setValueSize(size);
            setGia(gia);
            return [2 /*return*/];
        });
    }); };
    var handleOnChangeImage = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var data, file, base64img, objectUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = event.target.files;
                    file = data[0];
                    if (!file) return [3 /*break*/, 2];
                    return [4 /*yield*/, CommonUtils_1["default"].getBase64(file)];
                case 1:
                    base64img = _a.sent();
                    console.log("check base64 img: ", base64img);
                    objectUrl = URL.createObjectURL(file);
                    console.log("check objectUrl img: ", objectUrl);
                    setAnhminhhoa(base64img);
                    setPrevURLIMG(objectUrl);
                    _a.label = 2;
                case 2:
                    console.log("setPrevURLIMG", prevURLIMG);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLayTTDoan = function () { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, res, error_1;
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
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var handleLayTTDoan = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
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
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTDoan();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00EAn d\u1ECBch v\u1EE5"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: tendv, onChange: function (event) { return setTendv(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "\u1EA2nh minh h\u1ECDa"),
                react_1["default"].createElement("div", { className: "preview-img-container bg-slate-500" },
                    react_1["default"].createElement("input", { className: "w-56 boder-2 bg-slate-400", id: "preview-img", type: "file", accept: ".png,.jpg", hidden: true, 
                        // onChange={(e) => setFileIMG(e.target.files?.[0])}
                        onChange: function (event) { return handleOnChangeImage(event); } }),
                    react_1["default"].createElement("label", { className: "lable-upload", htmlFor: "preview-img" },
                        "T\u1EA3i \u1EA3nh ",
                        react_1["default"].createElement("i", { className: "fas fa-upload" }))),
                react_1["default"].createElement("div", { className: "preview-img bg-contain bg-no-repeat  w-96 h-32", style: {
                        backgroundImage: "url(" + prevURLIMG + ")"
                    } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "Lo\u1EA1i d\u1ECBch v\u1EE5"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: loaidv, onChange: function (event) { return setLoaidv(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "M\u00F4 t\u1EA3"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: motadv, onChange: function (event) { return setMotadv(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "Size"),
                react_1["default"].createElement(Autocomplete_1["default"], { disablePortal: true, id: "combo-box-demo", options: Size, value: valueSize, onChange: function (event, newValue) {
                        // {newValue ? setValueCumrap(newValue) : null}
                        {
                            newValue ? setValueSize(newValue) : null;
                        }
                    }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Size" })); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "Gi\u00E1"),
                react_1["default"].createElement("input", { placeholder: "", type: "number", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", value: gia, onChange: function (event) { return setGia(event.target.valueAsNumber); } })),
            react_1["default"].createElement("div", { className: " w-8/12 " },
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleCapnhatTTDichvu(); } }, "C\u1EADp nh\u1EADt th\u00F4ng tin"),
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40", onClick: function () { return handleThemTTDichvu(); } }, "L\u01B0u th\u00F4ng tin"))),
        react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full  " },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "#"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00EAn d\u1ECBch v\u1EE5"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u1EA2nh minh h\u1ECDa"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Lo\u1EA1i d\u1ECBch v\u1EE5"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "M\u00F4 t\u1EA3"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Size"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u00E1"),
                    react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
            react_1["default"].createElement("tbody", null, doan.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("tr", { key: index },
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.ten),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, react_1["default"].createElement(image_1["default"], { src: new Buffer(item.anhminhhoa, "base64").toString("binary"), width: 300, height: 300, alt: "Picture of the author" })),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.loai),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.mota),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.size),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        item.gia,
                        " VN\u0110"),
                    react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                        react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer", onClick: function () { return handleSuaTTDichvu(item.id, item.ten, item.anhminhhoa, item.loai, item.mota, item.size, item.gia); } }),
                        react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' }, onClick: function () { return handleXoaTTDichvu(item.id); } }))))); })))));
};
exports["default"] = QLDichvu;
