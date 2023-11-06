"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var Slide = function () {
    var slidesPhim = [
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_5__7.jpg'
        },
    ];
    var slidesKM = [
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/e/refill_rolling_banner_980x448.jpg'
        },
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__49.jpg'
        },
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-banner_980x448-min.png'
        },
    ];
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var prevSlide = function () {
        var isFirstSlide = currentIndex === 0;
        var newIndex = isFirstSlide ? slidesPhim.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    var nextSlide = react_1.useCallback(function () {
        var isLastSlide = currentIndex === slidesPhim.length - 1;
        var isLastSlideKM = currentIndex === slidesKM.length - 1;
        var newIndex = isLastSlide ? 0 : currentIndex + 1;
        var newIndexKM = isLastSlideKM ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setCurrentIndex(newIndexKM);
    }, [currentIndex, slidesPhim.length, slidesKM.length]);
    var goToSlide = function (slideIndex) {
        setCurrentIndex(slideIndex);
    };
    react_1.useEffect(function () {
        setTimeout(nextSlide, 2000);
        // const isLastSlide = currentIndex === slides.length - 1;
        // const newIndex = isLastSlide ? 0 : currentIndex + 1;
        // setCurrentIndex(newIndex);
    }, [nextSlide]);
    // w-full max-w-[1400px]
    return (react_1["default"].createElement("div", { className: 'bg-[#818184]' },
        react_1["default"].createElement("div", { className: ' m-auto py-2 px-4 relative group h-[450px] w-full max-w-5xl ' },
            react_1["default"].createElement("div", { style: { backgroundImage: "url(" + slidesKM[currentIndex].url + ")" }, className: 'w-full h-full rounded-xl bg-center bg-cover duration-500' }),
            react_1["default"].createElement("div", { className: 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' },
                react_1["default"].createElement(bs_1.BsChevronCompactLeft, { onClick: prevSlide, size: 30 })),
            react_1["default"].createElement("div", { className: 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' },
                react_1["default"].createElement(bs_1.BsChevronCompactRight, { onClick: nextSlide, size: 30 })))));
};
exports["default"] = Slide;
