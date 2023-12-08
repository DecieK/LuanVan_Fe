import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
// import Modal from './Modal';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router';
import { LayTTCTLoaiphim_idP, LayTTLoaiphim, LayTTPhim } from '@/service/userService';
import Modal from './Modal';
import dayjs from "dayjs"

type Props = {
    id_phim: any;
}
const Chitietphim = ({ id_phim }: Props) => {
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
    interface Chitietloaiphim {
        id: number;
        id_phim: number;
        id_loaiphim: number;
        loaiphim: Loaiphim;
    }
    interface Loaiphim {
        id: number;
        tenloai: string;
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
    const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [chitietloaiphim, setChitietloaiphim] = useState<Chitietloaiphim[]>([]);
    const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
    const [domLoaded, setDomLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const [dsloaiphims, setDsloaiphims] = useState([
        {
            id_lp: 0,
            tenloaiphim: ""
        },
    ])
    const handleXemchitiet = () => {
        router.push("/xemchitiet");

    };
    useEffect(() => {
        dsloaiphims.map((item) => {
            if (item.tenloaiphim === '') {
                dsloaiphims.splice(0, dsloaiphims.length)
            }
        })
        const handleLayTTPhim = async () => {

            try {
                const params = {
                    key: id_phim

                };
                console.log("searchdate", params);
                const response = await LayTTPhim(params);
                const res: Phim[] = response.phims;
                console.log("check api handleLayTTChieu: ", response);
                // console.log("length", res.length);
                setPhim(res);
                console.log(res.length)
                //   res.map((res) => (
                //     setGiave(res.giave),
                //     console.log("giave", res.giave)

                //   ));

            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTCTLoaiphim_idP = async () => {

            try {
                const params = {
                    id: id_phim

                };
                console.log("searchdate", params);
                const response = await LayTTCTLoaiphim_idP(params);
                const res: Chitietloaiphim[] = response.chitietloaiphims;
                console.log("check api handleLayTTChieu: ", response);
                // console.log("length", res.length);
                setChitietloaiphim(res);
                console.log(res.length)
                res.map(async (res) => {
                    const params = {
                        id: res.id_loaiphim,
                    };
                    const response1 = await LayTTLoaiphim(params);
                    const res1: Loaiphim[] = response1.loaiphims;
                    setLoaiphim(res1);
                    res1.map((item) => {
                        dsloaiphims.push({
                            id_lp: item.id,
                            tenloaiphim: item.tenloai
                        })
                    })
                });

            } catch (error) {
                console.log(error);
            }
        }
        const khachhangs = JSON.parse(
            localStorage.getItem("khachhang") || "{}"
        );
        if (Object.keys(khachhangs).length === 0) {
            // setTrangthai(true)
            // console.log("true");
        } else {
            // setTrangthai(false)
            console.log("false");
            const res: Khachhang[] = khachhangs;
            setKhachhang(res)
            // res.map((item) => {
            //     setTenKH(item.Hten_KH)
            //     setId_kh(item.id)
            // });
        }
        setDomLoaded(true)
        handleLayTTPhim()
        handleLayTTCTLoaiphim_idP()
    }, [dsloaiphims, id_phim]);
    return (
        <div className=' w-10/12 m-auto mt-7  '>
            {phim.map((item, index) => {
                return (
                    <div key={index}>
                        <p className='text-3xl uppercase font-normal'>Nội dung phim</p>
                        <hr className='mt-2 border-black' />
                        <div className='flex lg:flex-row flex-col mt-6'>
                            <div className='basis-6/12 m-auto  '>
                                <ReactPlayer

                                    height={350}
                                    width={550}
                                    // playing={true}
                                    controls={true}
                                    poster
                                    url={item.trailer}></ReactPlayer>
                            </div>
                            <div className='basis-6/12  space-y-2 p-4'>
                                <p className='uppercase text-2xl font-normal mb-1 text-red-500'>{item.tenphim}</p>
                                <div className='flex space-x-2 mb-3'>
                                    <div className='flex '>
                                        <AccessTimeIcon />
                                        <p className='pl-2'>{item.thoiluong} phút</p>
                                    </div>
                                    <div className='pl-5  flex'>
                                        <CalendarTodayIcon />
                                        <p className='pl-2'>
                                            {dayjs(item.ngaychieu).format("DD/MM/YYYY")
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'>Quốc gia:</p>
                                    <p>{item.quocgia}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'>Đạo diễn:</p>
                                    <p>{item.daodien}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'>Nhà sản xuất:</p>
                                    <p>{item.nsx}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'>Thể loại: </p>
                                    {/* <p>Gia đình, Phiêu Lưu</p> */}
                                    <p>
                                        {
                                            chitietloaiphim.map((ctlp) => ctlp.id_phim === Number(id_phim) ? ctlp.loaiphim.tenloai + ' ' : null)
                                        }
                                    </p>

                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold w-2/12'>Diễn viên:</p>
                                    <p>{item.dienvien}</p>
                                </div>


                                {/* <button className='uppercase font-semibold bg-red-400 w-36 h-8 rounded-tr-lg rounded-bl-lg ml-[18%]'>đặt vé</button> */}
                                <div className='pt-7'>
                                    <button disabled={khachhang.length === 0} onClick={() => setShowModal(true)}
                                        className='uppercase font-semibold bg-red-400 w-36 h-8  rounded-tr-lg rounded-bl-lg ml-[18%]'>
                                        Đặt vé
                                    </button>
                                    <p className='text-red-600 italic'>{khachhang.length === 0 ? 'Vui lòng đăng nhập để đặt vé' : null}</p>
                                </div>
                            </div>

                        </div>
                        <div className='mt-6 space-y-2'>
                            <div className='flex space-x-2 '>
                                <InfoIcon sx={{ fontSize: 30 }} />
                                <p className='font-semibold text-2xl'>Chi tiết</p>
                            </div>
                            <p className='text-justify indent-10'>
                                {item.tomtat}
                                </p>
                        </div>
                    </div>


                )
            })}
            <Modal
                id_phim={id_phim}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></Modal>
        </div>



    );
}

export default Chitietphim;

