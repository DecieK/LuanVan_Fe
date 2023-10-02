/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Props = {
    poster: any;
}

const Card = ({ poster }: Props) => {
    // const [prevURLIMG, setPrevURLIMG] = useState("");
    // const [hide, setHide] = useState(false);

    useEffect(() => {
        // const handleEdit = () => {
        //     let imageBase64 = "";
        //     if (poster) {
        //         imageBase64 = new Buffer(poster, "base64").toString("binary");
        //     }
        //     setPrevURLIMG(imageBase64),
            // console.log("poster", poster)

        // }
        // handleEdit
    }, []);
    
    return (
        <div>
            
            <div className="w-11/12 m-auto shadow-xl hover:bg-slate-600"
            // onFocus={test}
            
            >
                <div className=" h-96 w-64 object-cover m-auto" style={{
                    backgroundImage: `url(${poster})`,
                }} >
                   
                </div>
            </div>
            {/* <button onClick={()=>console.log(hide)}>click</button> */}
            
        </div>
    )
}
export default Card;