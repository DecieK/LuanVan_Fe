import { useEffect, useState } from "react";
import Image from 'next/image'

type Props = {
    poster: any;
}

const Card = ({ poster }: Props) => {
    // const [prevURLIMG, setPrevURLIMG] = useState("");

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

    return (
        <div>
            <div className=" m-auto  ">
                <Image
                    className="h-[700px] w-10/12  rounded-xl m-auto  bg-no-repeat"
                    src={poster}
                    width={1500}
                    height={1500}
                    alt="Picture of the author"
                />
                {/* <div className="border-2 border-green-600 h-[700px] w-10/12  rounded-xl m-auto  bg-no-repeat" style={{
                    backgroundImage: `url(${poster})`,
                }} > */}
                    {/* <img className=" h-[500px] w-10/12 rounded-xl m-auto" src={poster}></img> */}
                {/* </div> */}
            </div>
        </div>

    )
}
export default Card;