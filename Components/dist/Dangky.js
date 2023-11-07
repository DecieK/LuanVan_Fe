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
var userService_1 = require("@/service/userService");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
var Dangky = function (_a) {
    var onClose = _a.onClose, show = _a.show;
    var _b = react_1.useState(false), isBrowser = _b[0], setIsBrowser = _b[1];
    var _c = react_1.useState(""), hten_KH = _c[0], setHten_KH = _c[1];
    var _d = react_1.useState(""), Ngaysinh = _d[0], setNgaysinh = _d[1];
    var _e = react_1.useState(""), gt_KH = _e[0], setGT_KH = _e[1];
    var _f = react_1.useState(""), sdt_KH = _f[0], setSdt_KH = _f[1];
    var _g = react_1.useState(""), cccd_KH = _g[0], setCccd_KH = _g[1];
    var _h = react_1.useState(""), email_KH = _h[0], setEmail_KH = _h[1];
    var _j = react_1.useState(""), diachi_KH = _j[0], setDiachi_KH = _j[1];
    var _k = react_1.useState(""), taikhoan_KH = _k[0], setTaikhoan_KH = _k[1];
    var _l = react_1.useState(""), matkhau_KH = _l[0], setMatkhau_KH = _l[1];
    react_1.useEffect(function () {
        setIsBrowser(true);
    }, []);
    var onChangeGT = function (e) {
        setGT_KH(e.target.value);
    };
    var handleDangKy = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("hoten", hten_KH);
                    console.log("Ngaysinh", Ngaysinh);
                    console.log("gt", gt_KH);
                    console.log("sdt_KH", sdt_KH);
                    console.log("cccd_KH", cccd_KH);
                    console.log("email_KH", email_KH);
                    console.log("diachi_KH", diachi_KH);
                    console.log("taikhoan_KH", taikhoan_KH);
                    console.log("matkhau_KH", matkhau_KH);
                    return [4 /*yield*/, userService_1.DangKy_KH({
                            hten_KH: hten_KH,
                            Ngaysinh: Ngaysinh,
                            gt_KH: gt_KH,
                            sdt_KH: sdt_KH,
                            cccd_KH: cccd_KH,
                            email_KH: email_KH,
                            diachi_KH: diachi_KH,
                            taikhoan_KH: taikhoan_KH,
                            matkhau_KH: matkhau_KH
                        })];
                case 1:
                    res = _a.sent();
                    if (res && res.errCode === 0) {
                        console.log(res);
                        alert("Đăng ký thành công");
                        handleCloseClick();
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
    var handleCloseClick = function () {
        // window.location.reload()
        // e.preventDefault();
        onClose();
    };
    var modalContent = show ? (react_1["default"].createElement(StyledModalOverlay, null,
        react_1["default"].createElement(StyledModal, { className: "  w-[500px]  rounded-lg " },
            react_1["default"].createElement(StyledModalHeader, { className: " bg-blue-300  " },
                react_1["default"].createElement("div", { className: "flex text-xl p-2" },
                    react_1["default"].createElement("span", { className: " text-center uppercase w-full" }, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n"),
                    react_1["default"].createElement("button", { 
                        // href="#"
                        className: "rounded-full text-center h-7 w-7 bg-gray-300", onClick: handleCloseClick }, "x"))),
            // title  && 
            (react_1["default"].createElement(StyledModal, null)),
            react_1["default"].createElement(StyledModalBody, { className: "bg-gray-300 " },
                react_1["default"].createElement("div", { className: "modal " },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "t\u00E0i kho\u1EA3n", onChange: function (event) { return setTaikhoan_KH(event.target.value); }, type: "text" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "m\u1EADt kh\u1EA9u", onChange: function (event) { return setMatkhau_KH(event.target.value); }, type: "password" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "NH\u1EACP CH\u00CDNH X\u00C1C H\u1ECC T\u00CAN", onChange: function (event) { return setHten_KH(event.target.value); }, type: "text" }),
                        react_1["default"].createElement("input", { id: "ngaysinh", className: " w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", "data-date-format": "dd-MM-yy", type: "date", "data-inputmask-alias": "date", "data-inputmask-inputformat": "dd-mm-yyyy", "data-mask": "", "im-insert": "false", value: Ngaysinh, 
                            // onChange={(Ngaysinh: Date) => handleOnchangeDate((Ngaysinh))}
                            onChange: function (event) { return setNgaysinh(event.target.value); } }),
                        react_1["default"].createElement("div", { className: "col-span-4 mx-10 " },
                            react_1["default"].createElement("input", { onChange: onChangeGT, type: "radio", value: "Nam", name: 'gt', checked: gt_KH === "Nam" }),
                            " Nam",
                            react_1["default"].createElement("input", { className: "ml-9", onChange: onChangeGT, type: "radio", value: "Nu", name: 'gt', checked: gt_KH === "Nu" }),
                            " N\u1EEF"),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "SDT", onChange: function (event) { return setSdt_KH(event.target.value); }, type: "text" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "CCCD", onChange: function (event) { return setCccd_KH(event.target.value); }, type: "text" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "email", onChange: function (event) { return setEmail_KH(event.target.value); }, type: "email" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "\u0110\u1ECBa ch\u1EC9", onChange: function (event) { return setDiachi_KH(event.target.value); }, type: "text" }),
                        react_1["default"].createElement("button", { className: "bg-slate-600 flex", onClick: handleDangKy }, "\u0110\u0103ng k\u00FD"))))))) : null;
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
exports["default"] = Dangky;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
