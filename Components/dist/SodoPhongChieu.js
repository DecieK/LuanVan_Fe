"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SodoPhongChieu = function () {
    var _a = react_1.useState(Number), id_rap = _a[0], setId_rap = _a[1];
    var _b = react_1.useState(Number), id_phim = _b[0], setId_phim = _b[1];
    var _c = react_1.useState(Number), id_suatchieu = _c[0], setId_suatchieu = _c[1];
    var _d = react_1.useState([]), chieu = _d[0], setChieu = _d[1];
    // const [isInitialRender, setIsInitialRender] = useState(true);
    var _e = react_1.useState(true), isInitialRender = _e[0], setIsInitialRender = _e[1];
    var _f = react_1.useState([
        {
            id_ghe: 0,
            ma_ghe: "",
            gia: 0
        },
    ]), dsgheDDs = _f[0], setDsgheDDs = _f[1];
    var handleTesst = function () {
        var todoLocal = JSON.parse(localStorage.getItem("dsgheDDs") || "{}");
        setDsgheDDs(todoLocal);
        console.log("dsgheDDs", dsgheDDs);
    };
    // useEffect(() => {
    //   const getLocalTodo = () => {
    //     if (localStorage.getItem("dsgheDDs") === null) {
    //       localStorage.setItem("dsgheDDs", JSON.stringify([]));
    //     } else {
    //       let todoLocal = JSON.parse(localStorage.getItem("dsgheDDs") || "{}");
    //       setDsgheDDs(todoLocal);
    //     }
    //   };
    //   getLocalTodo()
    // }, []);
    console.log(dsgheDDs);
    react_1.useEffect(function () {
        if (isInitialRender) {
            var dsgheDD1 = JSON.parse(localStorage.getItem("dsgheDDs") || "{}");
            setDsgheDDs(dsgheDD1);
        }
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'flex p-1 m-1' },
            "danh s\u00E1ch gh\u1EBF \u0111\u00E3 ch\u1ECDn:",
            dsgheDDs.map(function (element, index) {
                return (react_1["default"].createElement("div", { key: index, className: '' },
                    react_1["default"].createElement("label", { className: '' },
                        " ",
                        element.ma_ghe,
                        " ")));
            })),
        react_1["default"].createElement("button", { onClick: handleTesst, className: 'bg-slate-500 hover:focus:bg-yellow-600' }, "Click")));
};
exports["default"] = SodoPhongChieu;
