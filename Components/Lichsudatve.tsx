import { useEffect, useState } from "react";
import Image from 'next/image'
import {
    LayTTChieu_idc, LayTTCumrap, LayTTDoan, LayTTDoan_idve, LayTTGhe,
    LayTTKhuyenmai, LayTTPhim, LayTTRap, LayTTSuatchieu, LayTTchitietve, VNPayRefund, handleHuyVe
} from "@/service/userService";
import dayjs from "dayjs"
import ModalCapnhat from "./ModalCapnhat";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



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
    magd: number;
    tggd: string

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
    createdat,
    magd,
    tggd

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
        MaGD: number;
        ThoigianGD: string
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
    const [poster, setPoster] = useState(String);
    const [chitietdoan, setChitietdoan] = useState<Chitietdoan[]>([]);
    const [doan, setDoan] = useState<Doan[]>([]);
    const [tgiangiaodich, settgiangiaodich] = useState(new Date());
    const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [idp, setIdp] = useState(Number);
    const [step, setStep] = useState(Boolean);
    let d = new Date(ngaychieu)




    const handleHuyVe1 = async () => {
        // let res = await VNPayRefund(
        //     {
        //         orderId: (magd),
        //         transDate: tggd,
        //         amount: tongtien,
        //         transType: '02',
        //         user: hten_KH
        //     });
        // if (res && res.response.body.vnp_ResponseCode === '00') {
        let res1 = await handleHuyVe(
            {
                id_ve: id
            });
        if (res1 && res1.errCode === 0) {
            console.log(res1)
            alert('Bạn đã hủy vé thành công.Tiền sẽ được hoàn về số tài khoản lúc đặt')
            window.location.reload();

        }
        else {
            console.log(res1)
            alert('Lỗi hủy vé')
        }
        // } else {
        //     console.log(res)

        //     alert('Lỗi hoàn tiền vé')
        // }

    }


    useEffect(() => {
        // console.log("asda", checkngayUpdate)
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
                // console.log("check api searchdate chitietdoans: ", response);
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
                // console.log("check api searchdate sc: ", response);
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
                // console.log("check api searchdate sc: ", response);
                // console.log("length", res.length);
                setChieu(res)
                res.map(async (c) => {
                    setNgaychieu(c.ngaychieu)
                    let d = new Date(c.ngaychieu)
                    const params = {
                        key: c.id_phim,
                    };
                    // console.log("searchdate", params);
                    const response2 = await LayTTPhim(params);
                    const res2: Phim[] = response2.phims;
                    // console.log("check api searchdate sc: ", response);
                    // console.log("length", res.length);
                    setPhim(res2)
                    res2.map((p) => {
                        setTenphim(p.tenphim)
                        setIdp(p.id)
                        setPoster(new Buffer(p.poster, "base64").toString("binary"))

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
                    id: id_km,
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
        settgiangiaodich(new Date(createdat))
        handleLayTTRap()
        handleLayTTCumrap()
        handleLayTTchitietve()
        handleLayTTSuatchieu()
        handleLayTTChieu_idc()
        handleLayTTDoan_idve()
        handleLayTTDoan()
        handleLayTTKhuyenmai()


    }, [createdat, id, id_c, id_cr, id_km, id_r, id_sc, magheArr, ttve, ve]);
    console.log("dđ", d)
    return (
        <div className="">
            <div className='flex pt-10 w-6/12 m-auto h-44'>
                <div className='bg-gray-100 basis-1/5  rounded-xl'>
                    {/* <Image
                        className="m-auto pt-[30%]"
                        src={poster}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    /> */}
                </div>
                <div className='bg-gray-200  basis-4/5  rounded-xl border-gray-300 border-l-2 border-dashed'>
                    <div className=" flex rounded-lg mx-7 my-3" onClick={() => setStep(!step)}>
                        <div className="w-2/6 m-auto mt-[3%] ">

                            <Image
                                className="w-96 h-20"
                                src={poster}
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="w-3/6 space-y-2 pt-2  ml-[3%] ">
                            <p className="font-bold text-xl">
                                {tenphim.slice(0, 15) + '...'}
                                {/* Người vợ cuối cùng */}
                            </p>
                            <p className="font-thin text-lg">
                                {tencumrap}
                            </p>
                            <p className="font-thin text-lg">
                                {giobd} - {dayjs(ngaychieu).format("DD/MM/YYYY")}
                            </p>

                        </div>
                        <div className="flex space-x-3  items-center" >

                            {
                                (new Date().getTime()) < (new Date((d.getMonth() + 1) + '/' + (d.getDate() - 1) + '/' + d.getFullYear()).getTime())

                                    ?
                                    <>
                                        <button onClick={() => setShowModal(true)}>Cập nhật</button>
                                        <button onClick={() => handleHuyVe1()}>Hủy vé</button>
                                    </>

                                    : "Quá hạn cập nhật"

                            }


                        </div>
                        {/* {
                            step === 'chung' ?
                                <KeyboardDoubleArrowDownIcon onClick={() => setStep('chitiet')} />
                                : null
                        } */}
                    </div>


                </div>

            </div>

            {step === true &&
                (
                    <div className="w-4/12 border-2 p-4 border-green-400 m-auto">
                        <KeyboardDoubleArrowUpIcon onClick={() => setStep(!step)} />
                        <p>{tenphim}</p>
                        <div className="flex  text-gray-600">
                            <p className="w-1/3">Phòng chiếu</p>
                            <p className="w-1/3">Số lượng ghế</p>
                            <p className="w-1/3">Mã ghế</p>
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
                                            <p className="font-semibold">{khuyenmai.map((km) => km.id === id_km ? km.ten_KM : null)} : {km.tile_KM}%</p>
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
                                <p>Mã code</p>
                                <p>Mã giao dịch</p>
                                <p>Thời gian giao dịch</p>
                            </div>
                            <div className="w-1/2 text-right">
                                <p>{tongtien}</p>
                                <p>{macode}</p>
                                <p>{magd}</p>
                                <p>
                                    {dayjs(createdat).format("DD/MM/YYYY") + ' - ' + tgiangiaodich.getHours() + ':' + tgiangiaodich.getMinutes() + ':' + tgiangiaodich.getSeconds()
                                    }
                                </p>
                            </div>

                        </div>
                    </div>

                )}
            <ModalCapnhat
                id_ve={id}
                id_phim={idp}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></ModalCapnhat>
        </div>
    )
}
export default Lichsudatve;