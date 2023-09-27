/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Props = {
    poster: any;
}

const Card = ({ poster }: Props) => {
    // const [prevURLIMG, setPrevURLIMG] = useState("");

    useEffect(() => {
        // const handleEdit = () => {
        //     let imageBase64 = "";
        //     if (poster) {
        //         imageBase64 = new Buffer(poster, "base64").toString("binary");
        //     }
        //     setPrevURLIMG(imageBase64),
        //     console.log("setPrevURLIMG", prevURLIMG)

        // }
        // handleEdit
    }, []);

    return (
        <div>
            <div className="w-11/12 m-auto shadow-xl">
                <div className=" h-96 w-64 object-cover m-auto" style={{
                    backgroundImage: `url(${poster})`,
                }} >

                </div>
            </div>
        </div>
    )
}
export default Card;