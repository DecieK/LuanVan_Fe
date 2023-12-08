import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Modal from "@/Components/Modal";
import { LayTTPhim } from "@/service/userService";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
const Phimsapchieu = () => {
    interface Phim {
        id: number;
        tenphim: string;
        dieukien: number;
        trailer: string;
        poster: string;
        dienvien: string;
        ngonngu: string;
        daodien: string;
        thoiluong: number;
        ngaychieu: string;
        quocgia: string;
        tomtat: string;
        nsx: string;
        trangthai: string;
    }
    const [phim, setPhim] = useState<Phim[]>([]);
    const [src, setSrc] = useState(String);
    const [option, setOption] = React.useState(1)
    const [showModal, setShowModal] = useState(false);
    const [idp, setIdp] = React.useState(Number)
    const router = useRouter();

    const handleXemchitiet = (id_phim: any) => {
        console.log(id_phim)
        router.push({
            pathname: '/xemchitiet',
            query: { id_phim: id_phim },
        })
    };
    const handleMuave = (id: number) => {
        setShowModal(true)
        setIdp(id)
    }

    useEffect(() => {
        const handleLayTTPhim = async () => {
            // let imageBase64 = "";
            try {
                const params = {
                    key: 'ALL'

                };
                console.log("searchdate", params);
                const response = await LayTTPhim(params);
                const res: Phim[] = response.phims;
                console.log("check api handleLayTTChieu: ", response);
                // console.log("length", res.length);
                setPhim(res);
                console.log(res.length)
                // res.map((res) => (
                //     // setGiave(res.giave),
                //     // imageBase64 = new Buffer(res.poster, "base64").toString("binary"),
                //     // console.log("imageBase64", imageBase64)
                //     setSrc(new Buffer(res.poster, "base64").toString("binary"))
                // ));
            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTPhim()
    }, []);
    return (
        <div>
            <Header />
            <div className={noto_serif.className}>
                <div className="flex w-10/12 m-auto mt-16 mb-10 text-3xl text-gray-500 space-x-10">
                    <button
                        className={`uppercase ${option === 1 ? 'text-red-500' : null}`}
                    >phim sắp chiếu
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-2 w-11/12 m-auto mt-5 '>
                    {
                        phim.reverse().map((item, index) => {

                            if (item.trangthai !== "Đang chiếu") {
                                return (
                                    <>
                                        <div className="col-span-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow
                                 hover:shadow-xl hover:shadow-black/30">
                                            <div className="">
                                                <Image
                                                    className="w-11/12 h-64  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                                    src={new Buffer(item.poster, "base64").toString("binary")}
                                                    width={500}
                                                    height={500}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                                {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
                                                <div className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <p className="">{item.tenphim}</p>
                                                    <p className="">{item.tomtat.slice(0, 90)}...</p>
                                                    <div className="space-x-5  space-y-3">
                                                        <button onClick={() => handleXemchitiet(item.id)} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Xem chi tiết</button>
                                                        <button onClick={() => handleMuave(item.id)} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Mua vé</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            else null
                        })
                    }
                </div>
                <Footer />

            </div>
            <Modal
                id_phim={idp}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></Modal>
        </div>
    )
}
export default Phimsapchieu;

