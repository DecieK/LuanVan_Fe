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
var google_1 = require("next/font/google");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var router_1 = require("next/router");
var userService_1 = require("@/service/userService");
var CommonUtils_1 = require("@/Components/CommonUtils");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});
var Upload = function () {
    var _a = react_1.useState(false), isBrowser = _a[0], setIsBrowser = _a[1];
    var _b = react_1.useState(""), tenphim = _b[0], setTenphim = _b[1];
    var _c = react_1.useState(Number), dieukien = _c[0], setDieukien = _c[1];
    var _d = react_1.useState(""), trailer = _d[0], setTrailer = _d[1];
    var _e = react_1.useState(""), dienvien = _e[0], setDienvien = _e[1];
    var _f = react_1.useState(""), ngonngu = _f[0], setNgonngu = _f[1];
    var _g = react_1.useState(""), quocgia = _g[0], setQuocgia = _g[1];
    var _h = react_1.useState(""), daodien = _h[0], setDaodien = _h[1];
    var _j = react_1["default"].useState(''), thoiluong = _j[0], setThoiluong = _j[1];
    var _k = react_1.useState(new Date()), ngaychieu = _k[0], setNgaychieu = _k[1];
    var _l = react_1.useState(""), tomtat = _l[0], setTomtat = _l[1];
    var _m = react_1.useState(""), nsx = _m[0], setNsx = _m[1];
    var _o = react_1.useState(""), trangthai = _o[0], setTrangthai = _o[1];
    // const [base64Img, setBase64Img] = useState("");
    var _p = react_1.useState(""), prevURLIMG = _p[0], setPrevURLIMG = _p[1];
    var _q = react_1.useState(""), poster = _q[0], setPoster = _q[1];
    var _r = react_1.useState(""), prevURLVideo = _r[0], setPrevURLVideo = _r[1];
    var _s = react_1.useState(), fileIMG = _s[0], setFileIMG = _s[1];
    var _t = react_1.useState(), fileVD = _t[0], setFileVD = _t[1];
    var _u = react_1.useState([]), phim = _u[0], setPhim = _u[1];
    var _v = react_1.useState(Boolean), open = _v[0], setOpen = _v[1];
    // const [trailer, setTrailer] = useState("");
    react_1.useEffect(function () {
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            key: 'ALL'
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
        handleLayTTPhim();
    }, []);
    // const onChangeGT = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setGT_KH(e.target.value)
    // }
    var handleEdit = function () {
        console.log("pposter", poster);
        var imageBase64 = "";
        if (poster) {
            imageBase64 = new Buffer(poster, "base64").toString("binary");
            // const decoded = poster.content.toString().replace("data:image/png;base64,", "");
            // const imageResp = new Buffer(decoded, "base64");
        }
        setPrevURLIMG(poster);
        console.log("setPrevURLIMG", prevURLIMG);
        // console.log("imageBase64", imageBase64)
    };
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
    var handleOnChangeVideos = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, file, base64, objectUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setFileVD(e.target.files[1]);
                    console.log("video");
                    data = e.target.files;
                    file = data[0];
                    if (!file) return [3 /*break*/, 2];
                    return [4 /*yield*/, CommonUtils_1["default"].getBase64(file)];
                case 1:
                    base64 = _a.sent();
                    console.log("check base64 video: ", base64);
                    objectUrl = URL.createObjectURL(file);
                    console.log("check objectUrl video: ", objectUrl);
                    setTrailer(base64);
                    setPrevURLVideo(objectUrl);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleDangKy = function () { return __awaiter(void 0, void 0, void 0, function () {
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
                    console.log("tomtat", tomtat);
                    console.log("nsx", nsx);
                    console.log("trangthai", trangthai);
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
                            Trangthai: trangthai
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        alert("Đăng ký thành công");
                    }
                    else {
                        console.log(res);
                        alert("Đăng ký không thành công");
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var router = router_1.useRouter();
    var handleBackPage = function () {
        router.push("/");
        console.log("asdasd");
    };
    return (react_1["default"].createElement("div", { className: noto_serif.className },
        react_1["default"].createElement("div", { className: "pt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen" },
            react_1["default"].createElement("form", { className: "text-black m-auto text-sm h-auto w-[450px] bg-yellow-900 bg-opacity-20 rounded-xl leading-normal" },
                react_1["default"].createElement("h1", { className: "text-center uppercase text-3xl pt-6 " }, "Th\u00EAm phim m\u1EDBi"),
                react_1["default"].createElement("div", { className: "pl-6" },
                    react_1["default"].createElement("p", null, "T\u00EAn phim:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-b-2 bg-black bg-opacity-0 border-white", onChange: function (event) { return setTenphim(event.target.value); } }),
                    react_1["default"].createElement("p", null, "\u0110i\u1EC1u ki\u1EC7n (tu\u1ED5i):"),
                    react_1["default"].createElement("input", { type: "number", placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setDieukien(event.target.valueAsNumber); } }),
                    react_1["default"].createElement("p", null, "Trailer:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setTrailer(event.target.value); } }),
                    react_1["default"].createElement("p", null, "Di\u1EC5n vi\u00EAn:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setDienvien(event.target.value); } }),
                    react_1["default"].createElement("p", null, "\u0110\u1EA1o di\u1EC5n:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setDaodien(event.target.value); } }),
                    react_1["default"].createElement("p", null, "Th\u1EDDi l\u01B0\u1EE3ng phim:"),
                    react_1["default"].createElement("input", { placeholder: "", type: "number", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setThoiluong(event.target.value); } }),
                    react_1["default"].createElement("p", null, "Ng\u00E0y chi\u1EBFu:"),
                    react_1["default"].createElement(react_datepicker_1["default"], { className: "", 
                        // type="datetime"
                        selected: ngaychieu, 
                        // onChange={handlSearchLichkham}
                        // onChange={(date: Date) => handleLayTTChieu(date)}
                        onChange: function (date) { return setNgaychieu(date); }, 
                        // onChange={(date: Date) => handlSearchDate((date))}
                        dateFormat: "dd/MM/yyyy" }),
                    react_1["default"].createElement("p", null, "Ng\u00F4n ng\u1EEF:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setNgonngu(event.target.value); } }),
                    react_1["default"].createElement("p", null, "Qu\u1ED1c gia:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setQuocgia(event.target.value); } }),
                    react_1["default"].createElement("p", null, "T\u00F3m t\u1EAFt:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setTomtat(event.target.value); } }),
                    react_1["default"].createElement("p", null, "NSX:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setNsx(event.target.value); } }),
                    react_1["default"].createElement("p", null, "Tr\u1EA1ng th\u00E1i:"),
                    react_1["default"].createElement("input", { placeholder: "", className: "w-[90%] border-2 border-gray-300", onChange: function (event) { return setTrangthai(event.target.value); } }))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "  pb-20" },
                        react_1["default"].createElement("label", null),
                        react_1["default"].createElement("div", { className: "preview-img-container bg-slate-500" },
                            react_1["default"].createElement("input", { className: "w-56 boder-2 bg-slate-400", id: "preview-img", type: "file", accept: ".png,.jpg", hidden: true, 
                                // onChange={(e) => setFileIMG(e.target.files?.[0])}
                                onChange: function (event) { return handleOnChangeImage(event); } }),
                            react_1["default"].createElement("label", { className: "lable-upload", htmlFor: "preview-img" },
                                "T\u1EA3i \u1EA3nh ",
                                react_1["default"].createElement("i", { className: "fas fa-upload" })))),
                    react_1["default"].createElement("div", { className: "preview-img bg-no-repeat ", style: {
                            backgroundImage: "url(" + prevURLIMG + ")"
                        }, onClick: function () { return openPreviewImg(); } }, "review image:"))),
            react_1["default"].createElement("button", { className: "uppercase w-[90%] h-8 mt-6 mb-6 bg-green-600", onClick: handleDangKy }, "\u0110\u0103ng k\u00ED"))));
};
exports["default"] = Upload;
{ /* <div>
<div className="">
    <label>
    </label>
    <div className="preview-img-container">
        <input
            id="preview-video"

            type="file"
            accept=".mp4,.flv"
            hidden
            onChange={(event) => handleOnChangeVideos(event)}
        />
        <label className="lable-upload" htmlFor="preview-video">
            Tải video <i className="fas fa-upload"></i>
        </label>
    </div>
</div>
<div>
    <video autoPlay controls
        style={{ width: '500px', height: '500px' }}
        src={prevURLVideo}
    >
    </video>
</div>
</div> */
}
