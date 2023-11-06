"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Card = function (_a) {
    // const [prevURLIMG, setPrevURLIMG] = useState("");
    var poster = _a.poster;
    // useEffect(() => {
    //     // const handleEdit = () => {
    //     //     let imageBase64 = "";
    //     //     if (poster) {
    //     //         imageBase64 = new Buffer(poster, "base64").toString("binary");
    //     //     }
    //     //     setPrevURLIMG(imageBase64),
    //         console.log("poster", poster)
    //     // }
    //     // handleEdit
    // }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: " m-auto shadow-xl " },
            React.createElement(image_1["default"], { className: "h-[500px] w-9/12  rounded-xl m-auto  bg-no-repeat", src: poster, width: 1500, height: 1500, alt: "Picture of the author" }))));
};
exports["default"] = Card;
