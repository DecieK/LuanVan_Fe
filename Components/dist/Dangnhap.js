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
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
var Dangky_1 = require("./Dangky");
var QuenMK_1 = require("./QuenMK");
var router_1 = require("next/router");
var axios_1 = require("axios");
var userService_1 = require("@/service/userService");
var Dangnhap = function (_a) {
    var onClose = _a.onClose, show = _a.show;
    var _b = react_1.useState(false), isBrowser = _b[0], setIsBrowser = _b[1];
    var _c = react_1.useState(false), showModalDangky = _c[0], setShowModalDangky = _c[1];
    var _d = react_1.useState(false), showModalQuenMk = _d[0], setShowModalQuenMK = _d[1];
    var _e = react_1.useState([]), khachhang = _e[0], setKhachhang = _e[1];
    var _f = react_1.useState([]), items = _f[0], setItems = _f[1];
    var _g = react_1.useState("password"), passwordType = _g[0], setPasswordType = _g[1];
    // const [passwordInput, setPasswordInput] = useState("");
    var _h = react_1.useState(""), username = _h[0], setUsername = _h[1];
    var _j = react_1.useState(""), password = _j[0], setPassword = _j[1];
    var _k = react_1.useState(""), loginStatus = _k[0], setLoginStatus = _k[1];
    // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setPasswordInput(e.target.value);
    // }
    var togglePassword = function () {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    var handleSignOTP = function () {
        router_1["default"].push({
            pathname: '/signOTP'
            // query: { username: username },
        });
    };
    react_1.useEffect(function () {
        setIsBrowser(true);
        // localStorage.setItem('khachhang', JSON.stringify(items));
    }, []);
    var handleCloseClick = function () {
        // window.location.reload()
        // e.preventDefault();
        onClose();
    };
    var login = function (e) {
        e.preventDefault();
        axios_1["default"].post("http://localhost:8080/api/Dangnhap", {
            Taikhoan_KH: username,
            Matkhau_KH: password
        }).then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
            var params, response_1, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!response.data.errCode) return [3 /*break*/, 1];
                        setLoginStatus(response.data.errCode);
                        console.log("không thành công", loginStatus);
                        return [3 /*break*/, 5];
                    case 1:
                        console.log("thành công");
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        params = {
                            tenTK: 'ALL'
                        };
                        return [4 /*yield*/, userService_1.LayTTKhachhang(params)];
                    case 3:
                        response_1 = _a.sent();
                        setItems(response_1);
                        res = response_1.khachhangs;
                        localStorage.setItem('khachhang', JSON.stringify(res));
                        // console.log("check api searchdate ghe: ", response);
                        // console.log("length", res.length);
                        setKhachhang(res);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    var modalContent = show ? (react_1["default"].createElement(StyledModalOverlay, null,
        react_1["default"].createElement(StyledModal, { className: "  w-[30%]  rounded-lg " },
            react_1["default"].createElement(StyledModalHeader, { className: " bg-blue-300  " },
                react_1["default"].createElement("div", { className: "flex text-xl p-2" },
                    react_1["default"].createElement("span", { className: " text-center uppercase w-full" }, "\u0110\u0103ng nh\u1EADp"),
                    react_1["default"].createElement("button", { 
                        // href="#"
                        className: "rounded-full text-center h-7 w-7 bg-gray-300", onClick: handleCloseClick }, "x"))),
            // title  && 
            (react_1["default"].createElement(StyledModal, null)),
            react_1["default"].createElement(StyledModalBody, { className: "bg-gray-300 " },
                react_1["default"].createElement("div", { className: "modal" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "t\u00E0i kho\u1EA3n", onChange: function (e) { setUsername(e.target.value); } }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "m\u1EADt kh\u1EA9u", name: "password", type: passwordType, onChange: function (e) { setPassword(e.target.value); }, value: password }),
                        react_1["default"].createElement("button", { onClick: togglePassword }, passwordType === "password"
                            ? react_1["default"].createElement("button", { className: "  h-[20px] w-[20px] bg-no-repeat bg-[url('../public/Hienps.png')]" })
                            : react_1["default"].createElement("button", { className: " h-[20px] w-[20px] bg-no-repeat bg-[url('../public/Anps.png')]" })),
                        react_1["default"].createElement("a", { className: "flex pl-2 col-span-1 hover:text-red-600 cursor-pointer italic text-xs ", onClick: handleSignOTP }, "Qu\u00EAn m\u1EADt kh\u1EA9u"),
                        react_1["default"].createElement("div", { className: "grid grid-cols-3 p-2" },
                            react_1["default"].createElement("button", { className: " col-span-1 bg-slate-600  m-1", onClick: function () { return setShowModalDangky(true); } }, "\u0110\u0103ng k\u00FD"),
                            react_1["default"].createElement("button", { className: "col-span-1 bg-slate-600 m-1", onClick: login }, "\u0110\u0103ng Nh\u1EADp"))),
                    react_1["default"].createElement(Dangky_1["default"], { onClose: function () { return setShowModalDangky(false); }, show: showModalDangky }),
                    react_1["default"].createElement(QuenMK_1["default"], { onClose: function () { return setShowModalQuenMK(false); }, show: showModalQuenMk })))))) : null;
    if (isBrowser) {
        return react_dom_1["default"].createPortal(modalContent, document.getElementById('modal-root'));
    }
    else {
        return null;
    }
};
var StyledModalBody = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // padding-top: 1px;\n"], ["\n  // padding-top: 1px;\n"])));
var StyledModalHeader = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* display: flex;\n  justify-content: flex-end;\n  font-size: 25px; */\n"], ["\n  /* display: flex;\n  justify-content: flex-end;\n  font-size: 25px; */\n"])));
var StyledModal = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px; */\n"], ["\n  /* background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px; */\n"])));
var StyledModalOverlay = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"])));
exports["default"] = Dangnhap;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
