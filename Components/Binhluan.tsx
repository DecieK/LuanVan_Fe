import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";



const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
const Binhluan = () => {
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
    const [value, setValue] = useState(Number);
    const [tenKH, setTenKH] = useState('');



    useEffect(() => {
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
            res.map((item) => {
                setTenKH(item.Hten_KH)
            });
        }
    }, [])


    return (
        <div className={noto_serif.className}>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">{tenKH}</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        newValue ? setValue(newValue) : null
                    }}
                />
                {/* <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
            </Box>
            <input className="border-2 border-red-500" placeholder="Nhập bình luận" />
<button className="">Đăng</button>
        </div>
    )
}
export default Binhluan;