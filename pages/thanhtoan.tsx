import { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useRouter } from 'next/router'
import { Datve } from "@/service/userService";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Thanhtoan = () => {
    interface DSDichVu {
        id: number,
        ten: string,
        anhminhhoa: string,
        loai: string,
        mota: string,
        gia: number,
        size: string,
        sl: number
    }
    interface Ve {
        id: number,
        ten: string,
        anhminhhoa: string,
        loai: string,
        mota: string,
        gia: number,
        size: string,
        sl: number
    }
    interface VeDat {
        hten_KH: string,
        httt: string,
        tongtien: number,
        soluongghe: number,
        ngaymuave: Date,
        id_chieu: number,
        id_ghe: Array<number>,
        id_suatchieu: number,
        id_rap: number,
        id_cumrap: number,
        id_KM: number,
        id_NV: 1,
        id_doan: Array<any>,
        id_KH: number
    }
    interface Khachhang {
        id: number;
        Hten_KH: string;
        Sdt_KH: string;
        Email_KH: string;
        Ngaysinh_KH: Date;
        Tuoi_KH: number;
        Diachi_KH: string;
        Gioitinh_KH: string;
        Cccd_KH: string;
        Mathethanhvien_KH: number;
        Diemtichluy_KH: number;
        Taikhoan_KH: string;
        Matkhau_KH: string;
        createdAt: string;
    }


    const [hten_KH, setHten_KH] = useState("");
    const [httt, setHttt] = useState("");
    const [tongtien, setTongtien] = useState(Number);
    const [slghe, setSlghe] = useState(Number);
    const [ngaymuave, setNgaymuave] = useState(new Date);
    const [id_chieu, setId_chieu] = useState(Number)
    const [arrIdghe, setArrIdghe] = useState<number[]>([]);
    const [id_suatchieu, setId_suatchieu] = useState(Number);
    const [id_rap, setId_rap] = useState(Number);
    const [id_cumrap, setId_cumrap] = useState(Number);
    const [id_KM, setId_KM] = useState(Number);
    const [id_NV, setId_NV] = useState(Number);
    const [dsdoans, setDsdoans] = useState<DSDichVu[]>([]);
    const [id_KH, setId_KH] = useState(Number);
    const [ve, setVe] = useState<VeDat[]>([]);
    const [khachhang, setKhachhang] = useState<Khachhang[]>([]);


    const router = useRouter()

    // console.log(">>> check params", useParams())
    console.log(">>> query", router.query.vnp_ResponseCode)


    const handleDatve = async () => {

        // ve.map((item) => {
        //     console.log("asdas", item.hten_KH)
        // })

        // console.log("hoten", hten_KH)
        // console.log("httt", httt)
        // console.log("tongtien", tongtien)
        // console.log("soluongghe", dsgheDDs.length)
        // console.log("ngaymuave", ngaymuave)
        // console.log("id_ghe", id_ghe)
        // console.log("id_suatchieu", id_suatchieu)
        // console.log("id_rap", id_rap)
        // console.log("id_cumrap", id_cumrap)
        // console.log("id_KM", id_KM)
        // console.log("id_NV", id_NV)
        // console.log("id_doan", dsdoans)
        // console.log("id_KH", id_KH)
        // console.log("arrIdghe", arrIdghe)
        // console.log("dsgheDDs", dsgheDDs)
        // console.log("id_chieu", id_chieu)
        // console.log("arrId_da", arrIdDV)



        let res = await Datve({
            hten_KH: hten_KH,
            httt: httt,
            tongtien: tongtien,
            soluongghe: slghe,
            ngaymuave: ngaymuave,
            id_chieu: id_chieu,
            id_ghe: arrIdghe,
            id_suatchieu: id_suatchieu,
            id_rap: id_rap,
            id_cumrap: id_cumrap,
            id_KM: id_KM,
            id_NV: 1,
            id_doan: dsdoans,
            id_KH: 1
        });

        if (res && res.errCode === 0) {
            console.log(res)
            alert("Đặt vé thành công")
            // handleCloseClick();
        } else {
            console.log(res)
            alert("Đặt vé không thành công")

        };

    }

    useEffect(() => {
        const ves = JSON.parse(
            localStorage.getItem("ve") || "{}"
        );
        if (Object.keys(ves).length === 0) {
            // setTrangthai(true)
            console.log("true");
        } else {
            // setTrangthai(false)
            console.log("false");
            const res: VeDat[] = ves;
            console.log(" >>>> check res Ve", res)
            setVe(res)
            res.map(async (item) => {
                let res = await Datve({
                    hten_KH: item.hten_KH,
                    httt: item.httt,
                    tongtien: item.tongtien,
                    soluongghe: item.soluongghe,
                    ngaymuave: item.ngaymuave,
                    id_chieu: item.id_chieu,
                    id_ghe: item.id_ghe,
                    id_suatchieu: item.id_suatchieu,
                    id_rap: item.id_rap,
                    id_cumrap: item.id_cumrap,
                    id_KM: item.id_KM,
                    id_NV: item.id_NV,
                    id_doan: item.id_doan,
                    id_KH: item.id_KH
                });

                if (res && res.errCode === 0) {
                    console.log(res)
                    localStorage.removeItem("ve");
                    alert("Đặt vé thành công")
                    // handleCloseClick();
                } else {
                    console.log(res)
                    alert("Đặt vé không thành công")

                };
            });
        }
        // const khachhangs = JSON.parse(
        //     localStorage.getItem("khachhang") || "{}"
        //   );
        //   if (Object.keys(khachhangs).length === 0) {
        //     // setTrangthai(true)
        //     console.log("true");
        //   } else {
        //     // setTrangthai(false)
        //     console.log("false");
        //     const res: Khachhang[] = khachhangs;
        //     console.log(" >>>> check res KH", res)
        //     // setKhachhang(res)
        //     // res.map((item) => {
        //     //     console.log(">>>>> check kh", item.Hten_KH)
        //     // });
        //   }
        const params = new URLSearchParams(window.location.search) // id=123
        let id = params.get('vnp_Amount') // 123 
        console.log(">>>>check tong tien",id)
    }, [tongtien]);

    console.log(">>>>check tong tien222",tongtien)


    return (

        <div>
            <Header />
            <div className="w-4/12  m-auto mt-10 ">
                <div className="h-20 bg-gradient-to-b from-red-400 capitalize text-center text-2xl pt-5 ">kết quả giao dịch</div>
                <div className="shadow-2xl">
                    <div className="text-center space-y-1 mb-3 font-semibold text-xl border-dashed border-b-2 border-gray-400">
                        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 50, }} />
                        <p  className="">{router.query.vnp_ResponseCode === '00' ? 'Giao dịch thành công' : 'Giao dịch không thành công'}</p>
                        <p onLoad={()=>setTongtien(Number(router.query.vnp_Amount))} className="pb-3">{Number(router.query.vnp_Amount)/100} VND</p>
                    </div>
                    <div className="w-11/12 m-auto">
                        {/* <Alert severity="info">Giao dịch đang được xử lý. */}
                        {/* <br />Nếu sau 5 phút giao dịch vẫn chưa thành công, bạn nhấn <a>Liên hệ hỗ trợ</a> để được hỗ trợ ngay nha. */}
                        {/* </Alert> */}
                        <div className="flex justify-center">
                            <div className="basis-1/2 text-gray-500 space-y-1">
                                <p>Dịch vụ:</p>
                                <p>Thời gian thanh toán:</p>
                                <p>Chi tiết giao dịch:</p>
                            </div>
                            <div className="text-right space-y-1 font-semibold">
                                <p>Mua vé xem phim</p>
                                <p>{router.query.vnp_PayDate}</p>
                                <p className="text-red-400">{router.query.vnp_TxnRef}</p>
                            </div>
                        </div>
                        <button onClick={()=>router.push('/')} className=" border-2 border-gray-500 w-full mt-3 mb-5 h-9 rounded-lg">Đóng</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Thanhtoan;
