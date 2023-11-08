import { useEffect, useState } from "react";
import Image from 'next/image'
import { LayTTChieu_idc, LayTTCumrap, LayTTDoan, LayTTDoan_idve, LayTTGhe, LayTTKhuyenmai, LayTTPhim, LayTTRap, LayTTSuatchieu, LayTTchitietve } from "@/service/userService";
import dayjs from "dayjs"
import ModalCapnhat from "./ModalCapnhat";

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
    createdat: Date;
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
        createdAt: Date;
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
    interface Chitietdoan {
        id: number,
        slda: number,
        id_ve: number,
        id_doan: number
    }
    interface Doan {
        id: number;
        ten: string;
        anhminhhoa: string;
        loai: string;
        mota: string;
        gia: number;
        size: string;
        sl: number;
    }
    interface Khuyenmai {
        id: number;
        ten_KM: string;
        tile_KM: number;
        mota_KM: string;
        dieukien_KM: number;
        thoigianbatdau: Date;
        thoigianketthuc: Date;
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
    const [chitietdoan, setChitietdoan] = useState<Chitietdoan[]>([]);
    const [doan, setDoan] = useState<Doan[]>([]);
    const [tgiangiaodich, settgiangiaodich] = useState(new Date());
    const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [idp, setIdp] = useState(Number);


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
        const handleLayTTDoan_idve = async () => {
            try {
                const params = {
                    id_ve: id,
                };
                // console.log("searchdate", params);
                const response = await LayTTDoan_idve(params);
                const res: Chitietdoan[] = response.chitietdoans;
                console.log("check api searchdate chitietdoans: ", response);
                // console.log("length", res.length);
                setChitietdoan(res);
                // res.map((raps) => {
                // })
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
                        setIdp(p.id)
                    })
                })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTDoan = async () => {
            try {

                const params = {
                    key: "ALL",
                };
                // console.log("searchdate", params);
                const response = await LayTTDoan(params);
                const res: Doan[] = response.doans;
                // console.log("check api Doan: ", response);
                // console.log("length", res.length);
                setDoan(res);
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTKhuyenmai = async () => {
            try {
                const params = {
                    id: id_r,
                };
                // console.log("searchdate", params);
                const response = await LayTTKhuyenmai(params);
                const res: Khuyenmai[] = response.khuyenmais;
                // console.log("check api searchdate ve: ", response);
                // console.log("length", res.length);
                setKhuyenmai(res);

            } catch (error) {
                console.log(error);
            }
        }








        setVe(ttve)
        const res: Ve[] = ttve
        settgiangiaodich(new Date(createdat))
        handleLayTTRap()
        handleLayTTCumrap()
        handleLayTTchitietve()
        handleLayTTSuatchieu()
        handleLayTTChieu_idc()
        handleLayTTDoan_idve()
        handleLayTTDoan()
        handleLayTTKhuyenmai()


    }, [createdat, id, id_c, id_cr, id_r, id_sc, magheArr, ttve, ve]);

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
                                onClick={() => setShowModal(true)}
                            >
                                Thay đổi suất chiếu
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
                        {
                            chitietdoan.map((ctda, index) => {
                                return (
                                    <>
                                        <div className="">
                                            <p className="text-gray-600">Thức ăn kèm</p>
                                            <p className="font-semibold">{ctda.slda} x {doan.map((da) => ctda.id_doan === da.id ? da.ten : null)}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                        {
                            khuyenmai.map((km, index) => {
                                return (
                                    <>
                                        <div className="">
                                            <p className="text-gray-600">Khuyến mãi</p>
                                            <p className="font-semibold">{doan.map((da) => km.id === id_km ? km.ten_KM : null)} : {km.tile_KM}%</p>
                                        </div>
                                    </>
                                )
                            })
                        }
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
                                <p>qwrerr</p>
                                <p>
                                    {dayjs(createdat).format("DD/MM/YYYY") + ' - ' + tgiangiaodich.getHours() + ':' + tgiangiaodich.getMinutes() + ':' + tgiangiaodich.getSeconds()
                                    }
                                </p>
                            </div>

                        </div>
                    </div>

                )}
            <ModalCapnhat
                id_phim={idp}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></ModalCapnhat>
        </div>
    )
}
export default Lichsudatve;