import { useEffect, useState } from "react";
import Image from 'next/image'
import { LayTTChieu_idc, LayTTCumrap, LayTTGhe, LayTTPhim, LayTTRap, LayTTSuatchieu, LayTTchitietve } from "@/service/userService";
import dayjs from "dayjs"

type Props = {
    ttve: any;
    id: number;
    hten_KH: string;
    hTTT: string;
    tongtien: number;
    sLghe: number;
    ngaymuave: string;
    id_kh: number;
    id_sc: number;
    id_r: number;
    id_c: number;
    id_cr: number;
    id_km: number;
    id_nv: number;
    createdat: string;
    macode: string;

}

const Lichsudatve = ({
    ttve,
    id,
    hten_KH,
    hTTT,
    tongtien,
    sLghe,
    ngaymuave,
    id_kh,
    id_sc,
    id_r,
    id_c,
    id_cr,
    id_km,
    id_nv,
    macode,
    createdat

}: Props) => {
    interface Ve {
        id: number;
        Hten_KH: string;
        HTTT: string;
        Tongtien: number;
        SLghe: number;
        Ngaymuave: string;
        id_KH: number;
        id_suatchieu: number;
        id_rap: number;
        id_chieu: number;
        id_cumrap: number;
        id_KM: number;
        id_NV: number;
        maCode: string;
        createdAt: string;
    }
    interface Rap {
        id: number;
        ten_rap: string;
        slghe: number;
        id_cumrap: number;
    }
    interface Cumrap {
        id: number;
        ten_tttt: string;
        diachi: string;
    }
    interface Chitetve {
        id: number;
        id_ve: number;
        id_ghe: number;
        // Trangthaighe: number;
    }
    interface Ghe {
        id: number;
        maGhe: string;
        loaiGhe: string;
    }
    interface Suatchieu {
        id: number;
        giobatdau: string;
        gioketthuc: string;
    }
    interface Chieu {
        id: number;
        ngaychieu: Date;
        giave: number;
        id_rap: number;
        id_phim: number;
        id_suatchieu: number;
    }
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


    const [trangthai, setTrangthai] = useState(true);
    const [ve, setVe] = useState<Ve[]>([]);
    const [slghe, setSlghe] = useState(Number);
    const [rap, setRap] = useState<Rap[]>([]);
    const [tenrap, setTenrap] = useState(String);
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);
    const [tencumrap, setTencumrap] = useState(String);
    const [diachicr, setDiachicr] = useState(String);
    const [chitietve, setChitietve] = useState<Chitetve[]>([]);
    const [magheArr, setMagheArr] = useState(Array<String>);
    const [ghe, setGhe] = useState<Ghe[]>([]);
    const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
    const [giobd, setGiobd] = useState(String);
    const [giokt, setGiokt] = useState(String);
    const [chieu, setChieu] = useState<Chieu[]>([]);
    const [ngaychieu, setNgaychieu] = useState(new Date());
    const [phim, setPhim] = useState<Phim[]>([]);
    const [tenphim, setTenphim] = useState(String);
    const [step, setStep] = useState('chitiet');




    useEffect(() => {
        const handleLayTTRap = async () => {
            try {
                const params = {
                    id: id_r,
                };
                // console.log("searchdate", params);
                const response = await LayTTRap(params);
                const res: Rap[] = response.raps;
                // console.log("check api searchdate ve: ", response);
                // console.log("length", res.length);
                setRap(res);
                res.map((raps) => {
                    setTenrap(raps.ten_rap)
                })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTCumrap = async () => {
            try {
                const params = {
                    key: id_cr,
                };
                // console.log("searchdate", params);
                const response = await LayTTCumrap(params);
                const res: Cumrap[] = response.cumraps;
                // console.log("check api searchdate ve: ", response);
                // console.log("length", res.length);
                setCumrap(res);
                res.map((cr) => {
                    setTencumrap(cr.ten_tttt),
                        setDiachicr(cr.diachi)
                })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTchitietve = async () => {
            try {
                const params = {
                    id_ve: id,
                };
                // console.log("searchdate", params);
                const response = await LayTTchitietve(params);
                const res: Chitetve[] = response.chitietves;
                // console.log("check api searchdate ve: ", response);
                // console.log("length", res.length);
                setChitietve(res);
                res.map(async (ctv) => {
                    const params = {
                        key: ctv.id_ghe,
                    };
                    // console.log("searchdate", params);
                    const response2 = await LayTTGhe(params);
                    const res2: Ghe[] = response2.ghes;
                    // console.log("check api searchdate ve: ", response);
                    // console.log("length", res.length);
                    setGhe(res2);
                    res2.map((ghes) => {
                        if (magheArr.includes(ghes.maGhe) === false) {
                            magheArr.push(ghes.maGhe)
                        }
                    })
                })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTSuatchieu = async () => {
            try {
                const params = {
                    key: id_sc,
                };
                // console.log("searchdate", params);
                const response = await LayTTSuatchieu(params);
                const res: Suatchieu[] = response.suatchieus;
                console.log("check api searchdate sc: ", response);
                // console.log("length", res.length);
                setSuatchieu(res)
                res.map((sc) => {
                    setGiobd(sc.giobatdau)
                    setGiokt(sc.gioketthuc)
                })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTChieu_idc = async () => {
            try {
                const params = {
                    id: id_c,
                };
                // console.log("searchdate", params);
                const response = await LayTTChieu_idc(params);
                const res: Chieu[] = response.chieus;
                console.log("check api searchdate sc: ", response);
                // console.log("length", res.length);
                setChieu(res)
                res.map(async (c) => {
                    setNgaychieu(c.ngaychieu)
                    const params = {
                        key: c.id_phim,
                    };
                    // console.log("searchdate", params);
                    const response2 = await LayTTPhim(params);
                    const res2: Phim[] = response2.phims;
                    console.log("check api searchdate sc: ", response);
                    // console.log("length", res.length);
                    setPhim(res2)
                    res2.map((p) => {
                        setTenphim(p.tenphim)

                    })
                })
            } catch (error) {
                console.log(error);
            }
        }






        setVe(ttve)
        const res: Ve[] = ttve
        // ve.map((item) => {
        //     setSlghe(item.SLghe)
        // });
        handleLayTTRap()
        handleLayTTCumrap()
        handleLayTTchitietve()
        handleLayTTSuatchieu()
        handleLayTTChieu_idc()


    }, [id, id_c, id_cr, id_r, id_sc, magheArr, ttve, ve]);

    return (
        <div className="">
            <div className='flex pt-10 w-6/12 m-auto h-44'>
                <div className='bg-gray-100 basis-1/5  rounded-xl'>
                    <Image
                        className="m-auto pt-[30%]"
                        src='/cgvlogo-small.png'
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className='bg-gray-200  basis-4/5  rounded-xl border-gray-300 border-l-2 border-dashed'>
                    <div className=" flex rounded-lg mx-7 my-3">
                        <div className="w-2/6 m-auto mt-[3%] ">

                            <Image
                                className="w-96 h-20"
                                src='/poster11.jpg'
                                width={3500}
                                height={3500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="w-3/6 space-y-2 pt-2  ml-[3%] ">
                            <p className="font-bold text-xl">
                                Người vợ cuối cùng
                            </p>
                            <p className="font-thin text-lg">
                                {tencumrap}
                            </p>
                            <p className="font-thin text-lg">
                                {giobd} - {dayjs(ngaychieu).format("DD/MM/YYYY")}
                            </p>

                        </div>
                        <div className="flex space-x-3  items-center" >

                            <button
                                className={`bg-green-700 text-white rounded-full h-8 w-24 
                                `}
                            // onClick={handleReceive}
                            // disabled={data.active === 1}
                            >
                                {/* {data.active === 1 ? "Đã nhận" : "Tiếp nhận"}  */}
                                Đã sử dụng
                            </button>
                            {/* <button
                                    // onClick={handleOpenModal}
                                    className="bg-blue-300 text-black rounded-full h-8 w-24"
                                >
                                    Cập nhật
                                </button> */}
                        </div>
                    </div>


                </div>
                {/* {
                trangthai === true ?
                    <div>
                        <div>
                            <div>
                                Phòng chiếu: {tenrap}
                            </div>
                            <div>
                                Số ghế: {sLghe}
                            </div>
                            <div>
                                Mã ghế:
                                {
                                    magheArr.map((ghes, index) => {
                                        return (
                                            <>
                                                <p key={index}>{ghes}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            Thức ăn kèm: sl, tên
                        </div>
                        <div>
                            Rạp chiếu
                            <div>
                                <p>tên : {tencumrap}</p>
                                <p>địa chỉ: {diachicr}</p>
                            </div>
                        </div>
                        <div>
                            Tổng tiền: {tongtien}
                            <div>
                                <p>Thời gian giao dịch : {createdat}</p>
                                <p>Mã giao dịch: {macode}</p>
                            </div>
                        </div>
                    </div>
                    : null
            } */}
            </div>

            {step === "chitiet" &&
                (
                    <div className="w-4/12 border-2 p-4 border-green-400 m-auto">
                        <div className="flex  text-gray-600">
                            <p className="w-1/3">Phòng chiếu</p>
                            <p className="w-1/3">Số vé</p>
                            <p className="w-1/3">Số ghế</p>
                        </div>
                        <div className="flex font-semibold">
                            <p className="w-1/3">{tenrap}</p>
                            <p className="w-1/3">{sLghe}</p>
                            <p className="flex w-1/3 space-x-3">{magheArr.map((ghes, index) => {
                                return (
                                    <>
                                        <p className="" key={index}>{ghes}</p>
                                    </>
                                )
                            })
                            }</p>
                        </div>
                        <hr className="my-2" />
                        <div className="">
                            <p className="text-gray-600">Thức ăn kèm</p>
                            <p className="font-semibold">1 x MY COMBO</p>
                        </div>
                        <hr className="my-2" />
                        <div className="">
                            <p className=" text-gray-600">Rạp chiếu</p>
                            <p className="font-semibold">{tencumrap}</p>
                            <p>{diachicr}</p>
                        </div>
                        <div className="flex my-3">
                            <div className="w-1/2">
                                <p>Tổng tiền</p>
                                <p>Mã giao dịch</p>
                                <p>Thời gian giao dịch</p>
                            </div>
                            <div className="w-1/2 text-right">
                                <p>{tongtien}</p>
                                <p>{createdat}</p>
                                <p>đfgfgh</p>
                            </div>

                        </div>
                    </div>

                )}
        </div>
    )
}
export default Lichsudatve;