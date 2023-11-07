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
var react_player_1 = require("react-player");
// import Modal from './Modal';
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var CalendarToday_1 = require("@mui/icons-material/CalendarToday");
var Info_1 = require("@mui/icons-material/Info");
var router_1 = require("next/router");
var userService_1 = require("@/service/userService");
var Modal_1 = require("./Modal");
var dayjs_1 = require("dayjs");
var Chitietphim = function (_a) {
    var id_phim = _a.id_phim;
    var _b = react_1.useState([]), phim = _b[0], setPhim = _b[1];
    var _c = react_1.useState([]), chitietloaiphim = _c[0], setChitietloaiphim = _c[1];
    var _d = react_1.useState([]), loaiphim = _d[0], setLoaiphim = _d[1];
    var _e = react_1.useState(false), domLoaded = _e[0], setDomLoaded = _e[1];
    var _f = react_1.useState(false), showModal = _f[0], setShowModal = _f[1];
    var router = router_1.useRouter();
    var _g = react_1.useState([
        {
            id_lp: 0,
            tenloaiphim: ""
        },
    ]), dsloaiphims = _g[0], setDsloaiphims = _g[1];
    var handleXemchitiet = function () {
        router.push("/xemchitiet");
    };
    react_1.useEffect(function () {
        dsloaiphims.map(function (item) {
            if (item.tenloaiphim === '') {
                dsloaiphims.splice(0, dsloaiphims.length);
            }
        });
        var handleLayTTPhim = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
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
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var handleLayTTCTLoaiphim_idP = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = {
                            id: id_phim
                        };
                        console.log("searchdate", params);
                        return [4 /*yield*/, userService_1.LayTTCTLoaiphim_idP(params)];
                    case 1:
                        response = _a.sent();
                        res = response.chitietloaiphims;
                        console.log("check api handleLayTTChieu: ", response);
                        // console.log("length", res.length);
                        setChitietloaiphim(res);
                        console.log(res.length);
                        res.map(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                            var params, response1, res1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        params = {
                                            id: res.id_loaiphim
                                        };
                                        return [4 /*yield*/, userService_1.LayTTLoaiphim(params)];
                                    case 1:
                                        response1 = _a.sent();
                                        res1 = response1.loaiphims;
                                        setLoaiphim(res1);
                                        res1.map(function (item) {
                                            dsloaiphims.push({
                                                id_lp: item.id,
                                                tenloaiphim: item.tenloai
                                            });
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        setDomLoaded(true);
        handleLayTTPhim();
        handleLayTTCTLoaiphim_idP();
    }, [dsloaiphims, id_phim]);
    return (React.createElement("div", { className: ' w-10/12 m-auto mt-7  ' },
        phim.map(function (item, index) {
            return (React.createElement("div", { key: index },
                React.createElement("p", { className: 'text-3xl uppercase font-normal' }, "N\u1ED9i dung phim"),
                React.createElement("hr", { className: 'mt-2 border-black' }),
                React.createElement("div", { className: 'flex mt-6' },
                    React.createElement("div", { className: 'basis-7/12  ' },
                        React.createElement(react_player_1["default"], { height: 350, width: 650, 
                            // playing={true}
                            controls: true, poster: true, url: item.trailer })),
                    React.createElement("div", { className: 'basis-5/12  space-y-2' },
                        React.createElement("p", { className: 'uppercase text-2xl font-normal mb-1 text-red-500' }, item.tenphim),
                        React.createElement("div", { className: 'flex space-x-2 mb-3' },
                            React.createElement("div", { className: 'flex ' },
                                React.createElement(AccessTime_1["default"], null),
                                React.createElement("p", { className: 'pl-2' },
                                    item.thoiluong,
                                    " ph\u00FAt")),
                            React.createElement("div", { className: 'pl-5  flex' },
                                React.createElement(CalendarToday_1["default"], null),
                                React.createElement("p", { className: 'pl-2' }, dayjs_1["default"](item.ngaychieu).format("DD/MM/YYYY")))),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }, "Qu\u1ED1c gia:"),
                            React.createElement("p", null, item.quocgia)),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }, "\u0110\u1EA1o di\u1EC5n:"),
                            React.createElement("p", null, item.daodien)),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }, "Nh\u00E0 s\u1EA3n xu\u1EA5t:"),
                            React.createElement("p", null, item.nsx)),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }, "Th\u1EC3 lo\u1EA1i:"),
                            dsloaiphims.map(function (item) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement("p", null, item.tenloaiphim)));
                            })),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }, "Di\u1EC5n vi\u00EAn:"),
                            React.createElement("p", null, item.dienvien)),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }),
                            React.createElement("p", null)),
                        React.createElement("div", { className: 'flex space-x-2' },
                            React.createElement("p", { className: 'font-semibold' }),
                            React.createElement("p", null)),
                        React.createElement("button", { onClick: function () { return setShowModal(true); }, className: 'uppercase font-semibold bg-red-400 w-36 h-8 rounded-tr-lg rounded-bl-lg ml-[18%]' }, "\u0110\u1EB7t v\u00E9"))),
                React.createElement("div", { className: 'mt-6 space-y-2' },
                    React.createElement("div", { className: 'flex space-x-2 ' },
                        React.createElement(Info_1["default"], { sx: { fontSize: 30 } }),
                        React.createElement("p", { className: 'font-semibold text-2xl' }, "Chi ti\u1EBFt")),
                    React.createElement("p", { className: 'text-justify indent-10' }, "Wolfoo and The Mysterious Island (Wolfoo v\u00E0 h\u00F2n \u0111\u1EA3o k\u1EF3 b\u00ED) - c\u00E2u chuy\u1EC7n xoanh quanh nh\u00E2n v\u1EADt ch\u00EDnh l\u00E0 ch\u00FA s\u00F3i nh\u1ECF Wolfoo 8 tu\u1ED5i - m\u1ED9t ch\u00FA b\u00E9 vui v\u1EBB, t\u1ED1t b\u1EE5ng v\u00E0 y\u00EAu th\u00EDch s\u1EF1 kh\u00E1m ph\u00E1. \u0110\u1ED3ng h\u00E0nh c\u00F9ng Wolfoo ch\u00EDnh l\u00E0 c\u00F4 em g\u00E1i Lucy 6 tu\u1ED5i tinh ngh\u1ECBch, hay l\u00E0m n\u0169ng nh\u01B0ng v\u00F4 c\u00F9ng y\u00EAu th\u01B0\u01A1ng anh trai. C\u00E2u chuy\u1EC7n b\u1EAFt \u0111\u1EA7u khi hai anh em Wolfoo v\u00E0 Lucy b\u1ECB h\u00FAt v\u00E0o m\u1ED9t chi\u1EBFc d\u00E2y chuy\u1EC1n v\u00E0 \u0111\u1EBFn v\u1EDBi Linh Gi\u1EDBi - m\u1ED9t th\u1EBF gi\u1EDBi v\u00F4 c\u00F9ng k\u1EF3 di\u1EC7u. T\u1EA1i Linh Gi\u1EDBi, m\u1ED9t s\u1EF1 c\u1ED1 b\u1EA5t ng\u1EDD \u0111\u00E3 khi\u1EBFn hai anh em b\u1ECB chia t\u00E1ch. Trong h\u00E0nh tr\u00ECnh t\u00ECm em g\u00E1i, Wolfoo \u0111\u00E3 v\u00F4 t\u00ECnh b\u1ECB cu\u1ED1n v\u00E0o cu\u1ED9c \u0111\u1EA5u tranh kh\u1ED1c li\u1EC7t ch\u1ED1ng l\u1EA1i binh \u0111o\u00E0n qu\u1EF7 d\u1EEF - \u0111\u1EE9ng \u0111\u1EA7u l\u00E0 Ch\u00FAa Qu\u1EF7 Bane - \u0111ang cai tr\u1ECB \u0110\u1EA3o Th\u1EA7n B\u00ED. Kh\u00F4ng ch\u1EC9 l\u00E0 c\u00E2u chuy\u1EC7n phi\u00EAu l\u01B0u thu\u1EA7n t\u00FAy, b\u1ED9 phim c\u00F2n mang trong m\u00ECnh nh\u1EEFng b\u00E0i h\u1ECDc qu\u00FD gi\u00E1 v\u1EC1 s\u1EF1 s\u00E1ng t\u1EA1o, s\u1EF1 can \u0111\u1EA3m v\u00E0 c\u1EA3 t\u00ECnh y\u00EAu th\u01B0\u01A1ng. T\u1EA5t c\u1EA3 nh\u1EEFng \u0111i\u1EC1u \u0111\u00F3 \u0111\u00E3 t\u1EA1o n\u00EAn m\u1ED9t b\u1ED9 phim th\u1ECFa m\u00E3n s\u1EF1 gi\u1EA3i tr\u00ED nh\u01B0ng c\u0169ng \u0111\u1EA7y t\u00EDnh gi\u00E1o d\u1EE5c."))));
        }),
        React.createElement(Modal_1["default"], { id_phim: id_phim, onClose: function () { return setShowModal(false); }, show: showModal })));
};
exports["default"] = Chitietphim;
{ /* {
                phim.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div>
                                    {domLoaded && (
                                        <ReactPlayer
                                            height={300}
                                            width={300}
                                            // playing={true}
                                            controls={true}
                                            poster
                                            url={item.trailer} />

                                    )}
                                </div>
                                <div>
                                    <p>{item.tenphim}</p>
                                    <p>Quốc gia:{item.quocgia}</p>
                                    <p>Diễn viên:{item.dienvien}</p>
                                    <p>Nhà sản xuất:{item.nsx}</p>
                                    <p>Thể loại:</p>
                                    <p>Đạo diễn:{item.daodien}</p>
                                    <p>Ngày khởi chiếu{item.ngaychieu}</p>
                                </div>
                                <button className='bg-slate-600'>Đặt vé</button>
                                <div>
                                    <div>Nội dung phim</div>
                                    <div>{item.tomtat}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            } */
}
{ /* <Modal
                id_phim={id_phim}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></Modal> */
}
