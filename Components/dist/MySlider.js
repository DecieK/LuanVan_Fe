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
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var Card_1 = require("./Card");
var data = [
    { url: '/pr1.jpg' },
    { url: '/poster11.jpg' },
];
var MySlider = function () {
    // interface Phim {
    //   id: number;
    //   tenphim: string;
    //   dieukien: number;
    //   trailer: Blob;
    //   poster: string;
    //   dienvien: string;
    //   ngonngu: string;
    //   quocgia: string;
    //   tomtat: string;
    //   nsx: string;
    //   trangthai: string;
    // }
    var setting = {
        arrows: false,
        Infinity: false,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    // const [phim, setPhim] = useState<Phim[]>([]);
    // useEffect(() => {
    //   const handleLayTTPhim = async () => {
    //     let imageBase64 = "";
    //     try {
    //       const params = {
    //         key: 'ALL'
    //       };
    //       console.log("searchdate", params);
    //       const response = await LayTTPhim(params);
    //       const res: Phim[] = response.phims;
    //       console.log("check api handleLayTTChieu: ", response);
    //       // console.log("length", res.length);
    //       setPhim(res);
    //       console.log(res.length)
    //       res.map((res) => (
    //         // setGiave(res.giave),
    //         console.log("lalalal", res.poster)
    //         // imageBase64 = new Buffer(res.poster, "base64").toString("binary")
    //         // console.log("imageBase64", imageBase64)
    //       ));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   handleLayTTPhim()
    // }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: "pt-6" },
            React.createElement(react_slick_1["default"], __assign({ className: "" }, setting), data.map(function (el, index) { return React.createElement(Card_1["default"], { key: index, poster: el.url }); })))));
};
exports["default"] = MySlider;
