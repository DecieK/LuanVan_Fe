import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'
import { useEffect, useState } from "react";

const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const Profile = () => {
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
    const [tenKH, setTenKH] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [ngaysinh, setNgaysinh] = useState('');
    const [tuoi, setTuoi] = useState('');
    const [diachi, setDiachi] = useState('');
    const [gt, setGt] = useState('');
    const [cccd, setCccd] = useState('');
    const [mathe, setMathe] = useState('');
    const [dtl, setDtl] = useState('');
    // const [tenKH, setTenKH] = useState('');
    const [matkhau, setMatkhau] = useState('');


    useEffect(() => {
        const khachhangs = JSON.parse(
            localStorage.getItem("khachhang") || "{}"
        );
        if (Object.keys(khachhangs).length === 0) {
            // setTrangthai(true)
            console.log("true");
        } else {
            // setTrangthai(false)
            console.log("false");
            const res: Khachhang[] = khachhangs;
            setKhachhang(res)
            res.map((item) => {
                setTenKH(item.Hten_KH)
            });
        }
    }, []);
    return (
        <div className={noto_serif.className}>
            <div className='w-5/12 shadow-lg m-auto mt-10 space-y-5 pb-10'>
                <p className='uppercase text-2xl text-center font-semibold'>thông tin khách hàng</p>
                <div className='w-11/12  m-auto space-y-3 pl-[3%]'>
                    <div className='flex space-x-3'>
                        <p className='basis-3/12'>Họ tên khách hàng:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex space-x-3'>
                        <p className='basis-3/12'>Giới tính:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex  space-x-3'>
                        <p className='basis-3/12'>Ngày sinh:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex space-x-3 '>
                        <p className='basis-3/12'>Email:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex  space-x-3'>
                        <p className='basis-3/12'>Số điện thoại:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex space-x-3'>
                        <p className='basis-3/12'>Địa chỉ:</p>
                        <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex space-x-3'>
                        <p className='basis-3/12'>Mã thẻ thành viên:</p>
                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                    <div className='flex space-x-3'>
                        <p className='basis-3/12'>Điểm tích lũy:</p>
                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                    </div>
                </div>

                <div className='hover:text-blue-600 text-sm pl-[5%] pt-4 text-blue-600 italic'>Chỉnh sửa thông tin?</div>
                <div className='text-end space-x-5 pr-[10%]'>
                    <button className='hover:text-blue-600'>Hủy</button>
                    <button className='bg-red-400 hover:bg-red-500 h-8 w-36 rounded-md'>Cập nhật thông tin</button>

                </div>
            </div>
        </div>
    )
}
export default Profile;