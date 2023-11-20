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
    }
    interface Loaiphim {
        id: number;
        tenloai: string;
    }
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
                                    <p className='font-semibold'>Thể loại:</p>
                                    {
                                        dsloaiphims.map((item) => {
                                            return (
                                                <>
                                                    <p>
                                                        {item.tenloaiphim}
                                                    </p>
                                                </>
                                            )

                                        })
                                    }
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'>Diễn viên:</p>
                                    <p>{item.dienvien}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'></p>
                                    <p></p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className='font-semibold'></p>
                                    <p></p>
                                </div>

                                {/* <button className='uppercase font-semibold bg-red-400 w-36 h-8 rounded-tr-lg rounded-bl-lg ml-[18%]'>đặt vé</button> */}
                                <button onClick={() => setShowModal(true)} className='uppercase font-semibold bg-red-400 w-36 h-8 rounded-tr-lg rounded-bl-lg ml-[18%]'>Đặt vé</button>
                            </div>

                        </div>
                        <div className='mt-6 space-y-2'>
                            <div className='flex space-x-2 '>
                                <InfoIcon sx={{ fontSize: 30 }} />
                                <p className='font-semibold text-2xl'>Chi tiết</p>
                            </div>
                            <p className='text-justify indent-10'>Wolfoo and The Mysterious Island (Wolfoo và hòn đảo kỳ bí) - câu chuyện xoanh quanh nhân vật chính là chú sói nhỏ Wolfoo 8 tuổi - một chú bé vui vẻ, tốt bụng và yêu thích sự khám phá. Đồng hành cùng Wolfoo chính là cô em gái Lucy 6 tuổi tinh nghịch, hay làm nũng nhưng vô cùng yêu thương anh trai. Câu chuyện bắt đầu khi hai anh em Wolfoo và Lucy bị hút vào một chiếc dây chuyền và đến với Linh Giới - một thế giới vô cùng kỳ diệu. Tại Linh Giới, một sự cố bất ngờ đã khiến hai anh em bị chia tách. Trong hành trình tìm em gái, Wolfoo đã vô tình bị cuốn vào cuộc đấu tranh khốc liệt chống lại binh đoàn quỷ dữ - đứng đầu là Chúa Quỷ Bane - đang cai trị Đảo Thần Bí. Không chỉ là câu chuyện phiêu lưu thuần túy, bộ phim còn mang trong mình những bài học quý giá về sự sáng tạo, sự can đảm và cả tình yêu thương. Tất cả những điều đó đã tạo nên một bộ phim thỏa mãn sự giải trí nhưng cũng đầy tính giáo dục.</p>
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

{/* {
                phim.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div>
                                    {domLoaded && (
                                        <ReactPlayer
                                            height={300}
                                            width={300}
                                            // playing={true}
                                            controls={true}
                                            poster
                                            url={item.trailer} />

                                    )}
                                </div>
                                <div>
                                    <p>{item.tenphim}</p>
                                    <p>Quốc gia:{item.quocgia}</p>
                                    <p>Diễn viên:{item.dienvien}</p>
                                    <p>Nhà sản xuất:{item.nsx}</p>
                                    <p>Thể loại:</p>
                                    <p>Đạo diễn:{item.daodien}</p>
                                    <p>Ngày khởi chiếu{item.ngaychieu}</p>
                                </div>
                                <button className='bg-slate-600'>Đặt vé</button>
                                <div>
                                    <div>Nội dung phim</div>
                                    <div>{item.tomtat}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            } */}
{/* <Modal
                id_phim={id_phim}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></Modal> */}