"use strict";
exports.__esModule = true;
var react_1 = require("react");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
var noto_serif = google_1.Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});
var Footer = function () {
    return (react_1["default"].createElement("div", { className: noto_serif.className },
        react_1["default"].createElement("hr", { className: "border-1 border-black mt-12" }),
        react_1["default"].createElement("div", { className: "grid grid-cols-4 w-4/5  m-auto h-48 mt-3 text-sm text-gray-700" },
            react_1["default"].createElement("div", { className: "col-span-1   list-none capitalize space-y-2" },
                react_1["default"].createElement("p", { className: "font-bold" }, "CGV Vi\u1EC7t Nam"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "Gi\u1EDBi thi\u1EC7u")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "ti\u1EC7n \u00EDch online")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "th\u1EBB qu\u00E0 t\u1EB7ng")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "tuy\u1EC3n d\u1EE5ng")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "li\u00EAn h\u1EC7 qu\u1EA3ng c\u00E1o CGV"))),
            react_1["default"].createElement("div", { className: "col-span-1  list-none capitalize space-y-2" },
                react_1["default"].createElement("p", { className: "font-bold" }, "\u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "\u0111i\u1EC1u kho\u1EA3n chung")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "\u0111i\u1EC1u kho\u1EA3n giao d\u1ECBch")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "ch\u00EDnh s\u00E1ch thanh to\u00E1n")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(link_1["default"], { href: '' }, "c\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p"))),
            react_1["default"].createElement("div", { className: "col-span-1" },
                react_1["default"].createElement("p", { className: "font-bold" }, "K\u1EBFt n\u1ED1i v\u1EDBi ch\u00FAng t\u00F4i")),
            react_1["default"].createElement("div", { className: "col-span-1 space-y-2" },
                react_1["default"].createElement("p", { className: "font-bold" }, "Ch\u0103m s\u00F3c kh\u00E1ch h\u00E0ng"),
                react_1["default"].createElement("p", null, "Hotline: 19006017"),
                react_1["default"].createElement("p", null, "Gi\u1EDD l\u00E0m vi\u1EC7c: 8:00 - 22:00 (T\u1EA5t c\u1EA3 c\u00E1c ng\u00E0y bao g\u1ED3m c\u1EA3 L\u1EC5 T\u1EBFt)"),
                react_1["default"].createElement("p", null, "Email h\u1ED7 tr\u1EE3: hoidap@cgv.vn"))),
        react_1["default"].createElement("hr", { className: "border-1 border-black" }),
        react_1["default"].createElement("div", { className: "w-4/5 h-44  m-auto flex items-center text-xs text-gray-700" },
            react_1["default"].createElement("div", { className: "h-[120px] w-[300px] bg-cover  bg-[url('../public/logoFooter2.jpg')]" }),
            react_1["default"].createElement("div", { className: "pl-5 space-y-2" },
                react_1["default"].createElement("p", { className: "uppercase font-bold" }, "c\u00F4ng ty tnhh cj cgv vietnam"),
                react_1["default"].createElement("p", null, "Gi\u1EA5y CN\u0110KDN: 0303675393, \u0111\u0103ng k\u00FD l\u1EA7n \u0111\u1EA7u ng\u00E0y 31/07/2008, \u0111\u0103ng k\u00FD thay \u0111\u1ED5i l\u1EA7n th\u1EE9 5 ng\u00E0y 14/10/2015, c\u1EA5p b\u1EDFi S\u1EDF KH\u0110T Th\u00E0nh Ph\u1ED1 H\u1ED3 Ch\u00ED Minh"),
                react_1["default"].createElement("p", null, "\u0110\u1ECBa ch\u1EC9: T\u1EA7ng 2, Rivera Park Saigon - S\u1ED1 7/28 Th\u00E0nh Th\u00E1i, P.14, Q.10, TPHCM"),
                react_1["default"].createElement("p", null, "Hotline: 19006017"),
                react_1["default"].createElement("p", { className: "uppercase" }, "copyright 2017 cj cgv. all rights reserved."))))
    // <div className="grid grid-cols-4">
    // <div className="mt-1">
    //   <hr></hr>
    //   <div className="flex">
    //     <div className="h-[135px] w-[250px] bg-no-repeat ml-[20px]  bg-[url('../public/logoFooter2.jpg')]"></div>
    //     <div className="text-[#636363]  ">
    //       <p className=" font-bold pl-20">CÔNG TY TNHH CJ CGV VIETNAM</p>
    //       <p className="">Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.<br></br>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.<br></br>Hotline: 1900 6017<br></br>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
    //     </div>
    //   </div>
    // </div>
    );
};
exports["default"] = Footer;
{ /* <div className="mt-1">
      <hr></hr>
      <div className="flex">
        <div className="h-[135px] w-[250px] bg-no-repeat ml-[20px]  bg-[url('../public/logoFooter2.jpg')]"></div>
        <div className="text-[#636363]  ">
          <p className=" font-bold pl-20">CÔNG TY TNHH CJ CGV VIETNAM</p>
          <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.<br></br>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.<br></br>Hotline: 1900 6017<br></br>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
        </div>
      </div>
    </div> */
}
