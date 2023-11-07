"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
//làm lại csdl đồ ăn có ảnh, làm xong chức năng đặt có chọn nhiều đồ ăn( chọn sl xong push vào ds tính tổng giá và truyền lại sodoghe)
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
// import "react-datepicker/dist/react-datepicker.css";
var react_1 = require("react");
var react_2 = require("react");
require("react-datepicker/dist/react-datepicker.css");
var userService_1 = require("@/service/userService");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var RemoveCircleOutline_1 = require("@mui/icons-material/RemoveCircleOutline");
var image_1 = require("next/image");
var ModalBapnuoc = function (_a) {
    var showDA = _a.showDA, onCloseDA = _a.onCloseDA, handleLayDuLieuTuModalBapNuoc = _a.handleLayDuLieuTuModalBapNuoc;
    var _b = react_1.useState(false), isBrowser = _b[0], setIsBrowser = _b[1];
    var _c = react_1.useState([]), doan = _c[0], setDoan = _c[1];
    var _d = react_1.useState(Number), sl = _d[0], setSl = _d[1];
    var _e = react_1.useState([
        {
            id: 0,
            ten: '',
            anhminhhoa: '',
            loai: '',
            mota: '',
            gia: 0,
            size: '',
            sl: 0
        },
    ]), dsdoans = _e[0], setDsdoans = _e[1];
    var handelesubtractionDoan = function (id, sl) {
        console.log("id", id);
        setDsdoans(dsdoans.map(function (item) {
            if (item.id === id && item.sl > 0) {
                return __assign(__assign({}, item), { sl: item.sl - 1 });
            }
            else {
                return item;
            }
        }));
        // console.log("dsdoans", dsdoans)
    };
    var handeleAddDoan = function (id, sl) {
        console.log("id", id);
        setDsdoans(dsdoans.map(function (item) {
            if (item.id === id) {
                return __assign(__assign({}, item), { sl: item.sl + 1 });
            }
            else {
                return item;
            }
        }));
        // console.log("dsdoans", dsdoans)
    };
    react_1.useEffect(function () {
        var handleLayTTDoan = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, response, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dsdoans.map(function (da) {
                            if (da.ten === "") {
                                dsdoans.splice(0, dsdoans.length);
                            }
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            key: "ALL"
                        };
                        return [4 /*yield*/, userService_1.LayTTDoan(params)];
                    case 2:
                        response = _a.sent();
                        res = response.doans;
                        // console.log("check api Doan: ", response);
                        // console.log("length", res.length);
                        setDoan(res);
                        console.log(res);
                        res.map(function (res) { return (dsdoans.push({
                            id: res.id,
                            ten: res.ten,
                            anhminhhoa: res.anhminhhoa,
                            loai: res.loai,
                            mota: res.mota,
                            gia: res.gia,
                            size: res.size,
                            sl: 0
                        })); });
                        console.log("res", res);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        handleLayTTDoan();
        setIsBrowser(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleCloseClick = function () {
        onCloseDA();
        console.log(onCloseDA);
        console.log(showDA);
    };
    var handleTruyenduLieuveSodoghe = function () {
        handleCloseClick();
        handleLayDuLieuTuModalBapNuoc(dsdoans);
    };
    var modalContent = showDA ? (react_2["default"].createElement(StyledModalOverlay, null,
        react_2["default"].createElement(StyledModal, { className: " w-80/12  rounded-lg " },
            react_2["default"].createElement(StyledModalHeader, { className: " bg-red-500  " },
                react_2["default"].createElement("div", { className: "flex text-xl p-2" },
                    react_2["default"].createElement("span", { className: " text-center uppercase w-full" }, "D\u1ECBch v\u1EE5"),
                    react_2["default"].createElement("button", { 
                        // href="#"
                        className: "rounded-full text-center h-7 w-7 bg-gray-300", onClick: handleCloseClick }, "x"))),
            // title  && 
            (react_2["default"].createElement(StyledModal, null)),
            react_2["default"].createElement(StyledModalBody, { className: "bg-gray-300 " },
                react_2["default"].createElement("div", { className: "modal" },
                    react_2["default"].createElement("div", { className: "grid grid-cols-2 m-3 gap-3 " }, dsdoans.map(function (item, index) {
                        var i = 0;
                        return (react_2["default"].createElement("div", { key: index, className: "col-span-1" },
                            react_2["default"].createElement("div", { className: "flex space-x-4" },
                                react_2["default"].createElement(image_1["default"], { className: "h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 ", src: new Buffer(item.anhminhhoa, "base64").toString("binary"), width: 150, height: 100, alt: "Picture of the author" }),
                                react_2["default"].createElement("div", { className: '' },
                                    react_2["default"].createElement("p", { className: 'uppercase font-semibold text-xl' }, item.ten),
                                    react_2["default"].createElement("div", { className: 'list-inside text-gray-600' },
                                        react_2["default"].createElement("li", { className: '' }, item.mota),
                                        react_2["default"].createElement("li", { className: '' },
                                            "Gi\u00E1: ",
                                            item.gia,
                                            " \u20AB"),
                                        react_2["default"].createElement("div", { className: "flex" },
                                            react_2["default"].createElement(RemoveCircleOutline_1["default"], { onClick: function () { return handelesubtractionDoan(item.id, item.sl); } }),
                                            react_2["default"].createElement("div", null, item.sl),
                                            react_2["default"].createElement(AddCircleOutline_1["default"], { onClick: function () { return handeleAddDoan(item.id, item.sl); } })))))));
                    }))),
                react_2["default"].createElement("div", { className: 'text-center mt-7' },
                    react_2["default"].createElement("button", { onClick: function () { return handleTruyenduLieuveSodoghe(); }, className: 'bg-red-400 uppercase w-32 mb-5 h-10 hover:bg-red-500 rounded-md' }, "x\u00E1c nh\u1EADn")))))) : null;
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
exports["default"] = ModalBapnuoc;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu
