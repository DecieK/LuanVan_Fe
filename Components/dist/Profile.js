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
var userService_1 = require("@/service/userService");
var google_1 = require("next/font/google");
var react_1 = require("react");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var Profile = function () {
    var _a = react_1.useState([]), khachhang = _a[0], setKhachhang = _a[1];
    var _b = react_1.useState(''), tenKH = _b[0], setTenKH = _b[1];
    var _c = react_1.useState(''), sdt = _c[0], setSdt = _c[1];
    var _d = react_1.useState(''), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(new Date()), ngaysinh = _e[0], setNgaysinh = _e[1];
    // const [ngaysinh, setNgaysinh] = useState('');
    var _f = react_1.useState(''), tuoi = _f[0], setTuoi = _f[1];
    var _g = react_1.useState(''), diachi = _g[0], setDiachi = _g[1];
    var _h = react_1.useState(''), gt = _h[0], setGt = _h[1];
    var _j = react_1.useState(''), cccd = _j[0], setCccd = _j[1];
    var _k = react_1.useState(''), mathe = _k[0], setMathe = _k[1];
    var _l = react_1.useState(Number), dtl = _l[0], setDtl = _l[1];
    var _m = react_1.useState(Number), id = _m[0], setId = _m[1];
    var _o = react_1.useState(''), matkhau = _o[0], setMatkhau = _o[1];
    var _p = react_1.useState(Boolean), capnhat = _p[0], setCapnhat = _p[1];
    var handleHuy = function () {
        setCapnhat(false);
        setTenKH('');
        // d = new Date(item.Ngaysinh_KH)
        // setEmail('')
        setSdt('');
        setCccd('');
        setDiachi('');
        setMathe('');
        // setDtl('')
        setGt('');
        setNgaysinh(new Date());
    };
    var handleUpdate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, params, response, res_1, khachhangs, res_2, d_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService_1.handleCapnhatTTKhachhang({
                        // email_kh: email,
                        hten_kh: tenKH,
                        sdt_kh: sdt,
                        ngaysinh_kh: ngaysinh,
                        diachi_kh: diachi,
                        gioitinh_kh: gt,
                        cccd_kh: cccd,
                        id: id
                    })];
                case 1:
                    res = _a.sent();
                    if (!(res && res.errCode === 0)) return [3 /*break*/, 3];
                    // console.log(res)
                    setTenKH('');
                    // d = new Date(item.Ngaysinh_KH)
                    // setEmail('')
                    setSdt('');
                    setCccd('');
                    setDiachi('');
                    setMathe('');
                    // setDtl('')
                    setGt('');
                    setNgaysinh(new Date());
                    alert("Cập nhật thông tin thành thông");
                    localStorage.removeItem("khachhang");
                    params = {
                        Email_KH: email
                    };
                    return [4 /*yield*/, userService_1.LayTTKhachhang(params)];
                case 2:
                    response = _a.sent();
                    res_1 = response.khachhangs;
                    console.log(res_1);
                    localStorage.setItem('khachhang', JSON.stringify(res_1));
                    khachhangs = JSON.parse(localStorage.getItem("khachhang") || "{}");
                    if (Object.keys(khachhangs).length === 0) {
                        // setTrangthai(true)
                        console.log("true");
                    }
                    else {
                        // setTrangthai(false)
                        console.log("false");
                        res_2 = khachhangs;
                        setKhachhang(res_2);
                        res_2.map(function (item) {
                            setTenKH(item.Hten_KH);
                            d_1 = new Date(item.Ngaysinh_KH);
                            setEmail(item.Email_KH);
                            setSdt(item.Sdt_KH);
                            setCccd(item.Cccd_KH);
                            setDiachi(item.Diachi_KH);
                            setMathe(item.Mathethanhvien_KH);
                            setDtl(item.Diemtichluy_KH);
                            setGt(item.Gioitinh_KH);
                            setNgaysinh(d_1);
                            setId(item.id);
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    console.log(res);
                    alert("Cập nhật thông tin KHÔNG thành thông");
                    _a.label = 4;
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var khachhangs = JSON.parse(localStorage.getItem("khachhang") || "{}");
        if (Object.keys(khachhangs).length === 0) {
            // setTrangthai(true)
            console.log("true");
        }
        else {
            // setTrangthai(false)
            console.log("false");
            var res = khachhangs;
            setKhachhang(res);
            var d_2;
            res.map(function (item) {
                setTenKH(item.Hten_KH);
                d_2 = new Date(item.Ngaysinh_KH);
                setEmail(item.Email_KH);
                setSdt(item.Sdt_KH);
                setCccd(item.Cccd_KH);
                setDiachi(item.Diachi_KH);
                setMathe(item.Mathethanhvien_KH);
                setDtl(item.Diemtichluy_KH);
                setGt(item.Gioitinh_KH);
                setNgaysinh(d_2);
                setId(item.id);
            });
        }
    }, []);
    // const handleChinhsuathongtin
    return (React.createElement("div", { className: noto_serif.className },
        React.createElement("div", { className: 'w-5/12 shadow-lg m-auto mt-10 space-y-5 pb-10' },
            React.createElement("p", { className: 'uppercase text-2xl text-center font-semibold' }, "th\u00F4ng tin kh\u00E1ch h\u00E0ng"),
            khachhang.map(function (item, index) {
                return (React.createElement(React.Fragment, null, capnhat ?
                    React.createElement("div", { className: 'w-11/12  m-auto space-y-3 pl-[3%]' },
                        React.createElement("div", { className: 'flex space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "H\u1ECD t\u00EAn kh\u00E1ch h\u00E0ng:"),
                            React.createElement("input", { onChange: function (e) { return setTenKH(e.target.value); }, value: tenKH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        React.createElement("div", { className: 'flex space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "Gi\u1EDBi t\u00EDnh:"),
                            React.createElement("input", { onChange: function (e) { return setGt(e.target.value); }, value: gt, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        capnhat ?
                            React.createElement("div", { className: "flex space-x-3" },
                                React.createElement("p", { className: "basis-3/12" }, "Ng\u00E0y sinh"),
                                React.createElement(react_datepicker_1["default"], { className: "border-dotted outline-none border-b-2 border-gray-400 w-3/5", 
                                    // type="datetime"
                                    selected: ngaysinh, 
                                    // minDate={new Date()}
                                    // maxDate={new Date("10-30-2023")}
                                    // onChange={(date: Date) => setStartDate(date)}
                                    onChange: function (date) { return setNgaysinh((date)); }, dateFormat: "dd/MM/yyyy" }))
                            : null,
                        React.createElement("div", { className: 'flex space-x-3 ' },
                            React.createElement("p", { className: 'basis-3/12' }, "Email:"),
                            React.createElement("input", { value: email, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        React.createElement("div", { className: 'flex  space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"),
                            React.createElement("input", { onChange: function (e) { return setSdt(e.target.value); }, value: sdt, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        React.createElement("div", { className: 'flex  space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "s\u1ED1 CCCD:"),
                            React.createElement("input", { onChange: function (e) { return setCccd(e.target.value); }, value: cccd, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        React.createElement("div", { className: 'flex space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "\u0110\u1ECBa ch\u1EC9:"),
                            React.createElement("input", { onChange: function (e) { return setDiachi(e.target.value); }, value: diachi, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                        React.createElement("div", { className: 'flex space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "M\u00E3 th\u1EBB th\u00E0nh vi\u00EAn:"),
                            React.createElement("p", { className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' }, item.Mathethanhvien_KH)),
                        React.createElement("div", { className: 'flex space-x-3' },
                            React.createElement("p", { className: 'basis-3/12' }, "\u0110i\u1EC3m t\u00EDch l\u0169y:"),
                            React.createElement("p", { className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' }, item.Diemtichluy_KH)))
                    :
                        React.createElement("div", { className: 'w-11/12  m-auto space-y-3 pl-[3%]' },
                            React.createElement("div", { className: 'flex space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "H\u1ECD t\u00EAn kh\u00E1ch h\u00E0ng:"),
                                React.createElement("input", { 
                                    // onChange={}
                                    value: item.Hten_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "Gi\u1EDBi t\u00EDnh:"),
                                React.createElement("input", { value: item.Gioitinh_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex  space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "Ng\u00E0y sinh:"),
                                React.createElement("input", { value: String(item.Ngaysinh_KH), type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex space-x-3 ' },
                                React.createElement("p", { className: 'basis-3/12' }, "Email:"),
                                React.createElement("input", { value: item.Email_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex  space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"),
                                React.createElement("input", { value: item.Sdt_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex  space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "s\u1ED1 CCCD:"),
                                React.createElement("input", { value: item.Cccd_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "\u0110\u1ECBa ch\u1EC9:"),
                                React.createElement("input", { value: item.Diachi_KH, type: 'text', className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' })),
                            React.createElement("div", { className: 'flex space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "M\u00E3 th\u1EBB th\u00E0nh vi\u00EAn:"),
                                React.createElement("p", { className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' }, item.Mathethanhvien_KH)),
                            React.createElement("div", { className: 'flex space-x-3' },
                                React.createElement("p", { className: 'basis-3/12' }, "\u0110i\u1EC3m t\u00EDch l\u0169y:"),
                                React.createElement("p", { className: 'border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' }, item.Diemtichluy_KH)))));
            }),
            React.createElement("div", { className: 'hover:text-blue-600 text-sm pl-[5%] pt-4 text-blue-600 italic', onClick: function () { return setCapnhat(true); } }, "Ch\u1EC9nh s\u1EEDa th\u00F4ng tin?"),
            React.createElement("div", { className: 'text-end space-x-5 pr-[10%]' },
                React.createElement("button", { className: 'hover:text-blue-600', onClick: function () { return handleHuy(); } }, "H\u1EE7y"),
                React.createElement("button", { className: 'bg-red-400 hover:bg-red-500 h-8 w-36 rounded-md', onClick: function () { return handleUpdate(); } }, "C\u1EADp nh\u1EADt th\u00F4ng tin")))));
};
exports["default"] = Profile;
