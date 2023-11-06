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
exports.__esModule = true;
var react_1 = require("react");
var google_1 = require("next/font/google");
var Edit_1 = require("@mui/icons-material/Edit");
var Clear_1 = require("@mui/icons-material/Clear");
// import LocationOnIcon from '@mui/icons-material/LocationOn';
var Autocomplete_1 = require("@mui/material/Autocomplete");
var TextField_1 = require("@mui/material/TextField");
var image_1 = require("next/image");
var dayjs_1 = require("dayjs");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin']
});
var QLPhim = function (_a) {
    var phimP = _a.phimP, loaiphimP = _a.loaiphimP;
    var _b = react_1.useState(''), tenTTTT = _b[0], setTenTTTT = _b[1];
    var _c = react_1.useState(''), diachi = _c[0], setDiachi = _c[1];
    var _d = react_1.useState([]), loaiphim = _d[0], setLoaiphim = _d[1];
    var _e = react_1.useState([]), phim = _e[0], setPhim = _e[1];
    var _f = react_1.useState(''), valueloaiphim = _f[0], setValueloaiphim = _f[1];
    // const handleLayttRap = (value: string) => {
    //     setValueCumrap(value)
    //     setValueRap('')
    //     cumrap.map(async (item) => {
    //         if (value === item.ten_tttt) {
    //             setId_cr(item.id)
    //             const params = {
    //                 key: item.id,
    //             };
    //             // console.log("searchdate", params);
    //             const response = await LayTTRap_idcumrap(params);
    //             const res: Rap[] = response.raps;
    //             // console.log("check api searchdate ghe: ", response);
    //             // console.log("length", res.length);
    //             setRap(res);
    //         }
    //     })
    // }
    react_1.useEffect(function () {
        setPhim(phimP);
        setLoaiphim(loaiphimP);
    }, [loaiphimP, phimP]);
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "space-y-5" },
            react_1["default"].createElement(Autocomplete_1["default"], { value: valueloaiphim, disablePortal: true, id: "combo-box-demo", options: loaiphim.map(function (option) { return option.tenloai; }), 
                // options={}
                onChange: function (event, newValue) {
                    {
                        newValue ? setValueloaiphim(newValue) : null;
                    }
                    // { newValue ? handleLayttRap(newValue) : null }
                }, sx: { width: 300 }, renderInput: function (params) { return react_1["default"].createElement(TextField_1["default"], __assign({}, params, { label: "Lo\u1EA1i phim" })); } }),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "T\u00EAn r\u1EA1p"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setTenTTTT(event.target.value); } })),
            react_1["default"].createElement("div", { className: "flex space-x-5" },
                react_1["default"].createElement("p", { className: "basis-[20%]" }, "S\u1ED1 l\u01B0\u1EE3ng gh\u1EBF"),
                react_1["default"].createElement("input", { placeholder: "", className: "w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none", onChange: function (event) { return setDiachi(event.target.value); } })),
            react_1["default"].createElement("div", { className: " w-8/12 " },
                react_1["default"].createElement("button", { className: "boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40" }, "L\u01B0u th\u00F4ng tin"))),
        react_1["default"].createElement("div", { className: "w-full overflow-x-auto" },
            react_1["default"].createElement("table", { className: " border-separate  border border-slate-400 w-full " },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center " }, "#"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center w-[100px]" }, "T\u00EAn phim"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "\u0110\u1EA1o di\u1EC5n"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Di\u1EC5n vi\u00EAn"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Nh\u00E0 s\u1EA3n xu\u1EA5t"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00F4n ng\u1EEF"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Ng\u00E0y chi\u1EBFu"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00F3m t\u1EAFt"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Th\u1EDDi l\u01B0\u1EE3ng"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Poster"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Trailer"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Tr\u1EA1ng th\u00E1i phim"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Gi\u1EDBi h\u1EA1n tu\u1ED5i"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "Qu\u1ED1c gia"),
                        react_1["default"].createElement("th", { className: "border border-slate-300 text-center" }, "T\u00E1c v\u1EE5"))),
                react_1["default"].createElement("tbody", null, phim.map(function (item) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("tr", { key: item.id },
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.id),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center w-[100px]" }, item.tenphim),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.daodien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.dienvien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.nsx),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.ngonngu),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, dayjs_1["default"](item.ngaychieu).format("DD/MM/YYYY")),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.tomtat),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.thoiluong),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, react_1["default"].createElement(image_1["default"], { src: new Buffer(item.poster, "base64").toString("binary"), width: 300, height: 300, alt: "Picture of the author" })),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.trailer),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.trangthai),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.dieukien),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" }, item.quocgia),
                        react_1["default"].createElement("td", { className: "border border-slate-300 text-center" },
                            react_1["default"].createElement(Edit_1["default"], { className: "cursor-pointer" }),
                            react_1["default"].createElement(Clear_1["default"], { className: "cursor-pointer", sx: { color: 'red' } }))))); }))))));
};
exports["default"] = QLPhim;
