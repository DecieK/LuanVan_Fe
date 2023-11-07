"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
var Dangky_1 = require("./Dangky");
var QuenMk = function (_a) {
    var onClose = _a.onClose, show = _a.show;
    var _b = react_1.useState(false), isBrowser = _b[0], setIsBrowser = _b[1];
    var _c = react_1.useState(false), showModalDangky = _c[0], setShowModalDangky = _c[1];
    var _d = react_1.useState("password"), passwordType = _d[0], setPasswordType = _d[1];
    var _e = react_1.useState(""), passwordInput = _e[0], setPasswordInput = _e[1];
    var handlePasswordChange = function (e) {
        setPasswordInput(e.target.value);
    };
    var togglePassword = function () {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    react_1.useEffect(function () {
        setIsBrowser(true);
    }, []);
    var handleCloseClick = function () {
        // window.location.reload()
        // e.preventDefault();
        onClose();
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
                react_1["default"].createElement("div", { className: "modal " },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "t\u00E0i kho\u1EA3n" }),
                        react_1["default"].createElement("input", { className: "w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none", placeholder: "m\u1EADt kh\u1EA9u", name: "password", type: passwordType, onChange: handlePasswordChange, value: passwordInput }),
                        react_1["default"].createElement("button", { onClick: togglePassword })),
                    react_1["default"].createElement(Dangky_1["default"], { onClose: function () { return setShowModalDangky(false); }, show: showModalDangky })))))) : null;
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
exports["default"] = QuenMk;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
