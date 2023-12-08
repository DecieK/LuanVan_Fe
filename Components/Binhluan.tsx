import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { LayTTKhachhang, Laybinhluan, handleThembinhluan } from "@/service/userService";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import dayjs from "dayjs";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    id_phim: any;
}
const Binhluan = ({ id_phim }: Props) => {
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
    interface Binhluan {
        id: number;
        sosao: number;
        id_KH: number;
        id_phim: number;
        noidung: string;
        createdAt: Date;
    }


    const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
    const [binhluan, setBinhluan] = useState<Binhluan[]>([]);
    const [value, setValue] = useState(Number);
    const [tenKH, setTenKH] = useState('');
    const [id_kh, setId_kh] = useState(Number);
    const [i, setI] = useState(3);
    const [noidung, setNoidung] = useState('');
    // const [tenKH, setTenKH] = useState('');
    // const [tenKH, setTenKH] = useState('');



    const handleLaybinhluan = async () => {
        try {
            const params = {
                key: id_phim,
            };
            console.log("binhluan", params);
            const response = await Laybinhluan(params);
            const res: Binhluan[] = response.binhluans;
            console.log("check api searchdate bl: ", response);
            // console.log("length", res.length);
            setBinhluan(res);
            // res.map((raps) => {
            //     setTenrap(raps.ten_rap)
            // })
        } catch (error) {
            console.log(error);
        }
    }
    const handleThemBinhluan = async () => {
        let res = await handleThembinhluan(
            {
                sosao: value,
                noidung: noidung,
                id_kh: id_kh,
                id_phim: id_phim,
            });
        if (res && res.errCode === 0) {
            console.log(res)
            setValue(0)
            setNoidung('')
            handleLaybinhluan()
            alert("Xóa thông tin cụm rạp thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin cụm rạp KHÔNG thành thông")

        };
    }


    useEffect(() => {
        const khachhangs = JSON.parse(
            localStorage.getItem("khachhang") || "{}"
        );
        if (Object.keys(khachhangs).length === 0) {
            // setTrangthai(true)
            // console.log("true");
        } else {
            // setTrangthai(false)
            // console.log("false");
            const res: Khachhang[] = khachhangs;
            setKhachhang(res)
            res.map((item) => {
                setTenKH(item.Hten_KH)
                setId_kh(item.id)
            });
        }
        const handleLaybinhluan = async () => {
            try {
                const params = {
                    key: id_phim,
                };
                // console.log("searchdate", params);
                const response = await Laybinhluan(params);
                const res: Binhluan[] = response.binhluans;
                // console.log("check api searchdate ve: ", response);
                // console.log("length", res.length);
                setBinhluan(res);
                // res.map((raps) => {
                //     setTenrap(raps.ten_rap)
                // })
            } catch (error) {
                console.log(error);
            }
        }
        const handleLayTTkhachhang = async () => {
            try {
                const params = {
                    Email_KH: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTKhachhang(params);
                const res: Khachhang[] = response.khachhangs;
                setKhachhang(res);
                // console.log(res.length)

            } catch (error) {
                console.log(error);
            }
        }
        handleLaybinhluan()
        handleLayTTkhachhang()
    }, [id_phim])


    return (
        <div className={noto_serif.className}>
            <div className="w-10/12  m-auto mt-10">
                <p className="uppercase font-semibold text-2xl pb-5">bình luận phim</p>
                {
                    tenKH ?
                        <div className="w-5/12 pb-6">
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                                <div className="flex space-x-3">
                                    <Typography component="legend">
                                        <Stack direction="row" spacing={2}>
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                                {tenKH.slice(0, 1)}
                                            </Avatar>
                                        </Stack>


                                    </Typography>
                                    <p className="font-semibold pt-2">{tenKH}</p>
                                    <Rating
                                        className="pt-2"
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            newValue ? setValue(newValue) : null
                                        }}
                                    />
                                </div>
                                <textarea placeholder="Nhập bình luận" className="ml-14 outline-none p-2 w-96 h-20 border-2 border-gray-300"
                                    value={noidung} onChange={(e) => setNoidung(e.target.value)}></textarea>

                            </Box>
                            <button className="float-right mr-7 mt-2 w-20 h-7 bg-green-500" onClick={() => handleThemBinhluan()}>Đăng</button>

                        </div>
                        : null
                }

                {
                    binhluan.reverse().slice(0, i).map((item, index) => {
                        return (
                            <div key={index} className=" mt-10">
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >
                                    <Typography component="legend" className="flex space-x-3 text-xl">
                                        <Stack direction="row" spacing={2}>
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                                {khachhang.map((i) => i.id === item.id_KH ? i.Hten_KH.slice(0, 1) : null)}
                                            </Avatar>
                                        </Stack>
                                        <p className="font-semibold pt-1">{khachhang.map((i) => i.id === item.id_KH ? i.Hten_KH : null)}</p>
                                    </Typography>
                                    <div className="pl-14 space-y-1">
                                        <div className="flex space-x-4">
                                            <Rating name="read-only" value={item.sosao} readOnly />
                                            <p>{dayjs(item.createdAt).format("DD/MM/YYYY hh:mm:ss")
                                            }</p>
                                        </div>
                                        <p>{item.noidung}</p>
                                    </div>
                                </Box>
                            </div>
                        )
                    })
                }
                {
                    i >= binhluan.length ? null
                        : <p className="text-blue-600 italic mt-3 cursor-pointer" onClick={() => setI(i + 3)}>Xem thêm...</p>

                }

            </div>
        </div>
    )
}
export default Binhluan;