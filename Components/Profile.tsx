import { LayTTKhachhang, handleCapnhatTTKhachhang } from "@/service/userService";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'
import { it } from "node:test";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        Mathethanhvien_KH: string;
        Diemtichluy_KH: number;
        Taikhoan_KH: string;
        Matkhau_KH: string;
        createdAt: string;
    }
    const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
    const [tenKH, setTenKH] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [ngaysinh, setNgaysinh] = useState(new Date());
    // const [ngaysinh, setNgaysinh] = useState('');
    const [step, setStep] = useState('xem');

    const [tuoi, setTuoi] = useState('');
    const [diachi, setDiachi] = useState('');
    const [gt, setGt] = useState('');
    const [cccd, setCccd] = useState('');
    const [mathe, setMathe] = useState('');
    const [dtl, setDtl] = useState(Number);
    const [id, setId] = useState(Number);
    const [matkhau, setMatkhau] = useState('');
    const [capnhat, setCapnhat] = useState(Boolean);
    const [errorSDT, setErrorSDT] = useState(false)
    const [errorCCCD, setErrorCCCD] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const handleErrorEmail = (val: string) => {
        setEmail(val)
        if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            setErrorEmail(false)
        } else {
            setErrorEmail(true)
        }
    }
    const handleErrorSDT = (val: string) => {
        setSdt(val)
        if (val.match(/(0[3|5|7|8|9])+([0-9]{8})\b/g)) {
            setErrorSDT(false)
        } else {
            setErrorSDT(true)
        }
    }
    const handleErrorCCCD = (val1: string) => {
        setCccd(val1)
        if (val1.match(/^([0-9]{12})+$/)) {
            setErrorCCCD(false)
        } else {
            setErrorCCCD(true)
        }
    }
    const handleHuy = () => {
        setCapnhat(false)
        // setTenKH('')
        // // d = new Date(item.Ngaysinh_KH)
        // // setEmail('')
        // setSdt('')
        // setCccd('')
        // setDiachi('')
        // setMathe('')
        // // setDtl('')
        // setGt('')
        // setNgaysinh(new Date())
    }

    const handleUpdate = async () => {
        let res = await handleCapnhatTTKhachhang(
            {
                // email_kh: email,
                hten_kh: tenKH,
                sdt_kh: sdt,
                ngaysinh_kh: ngaysinh,
                diachi_kh: diachi,
                gioitinh_kh: gt,
                cccd_kh: cccd,
                id: id
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setTenKH('')
            // d = new Date(item.Ngaysinh_KH)
            // setEmail('')
            setSdt('')
            setCccd('')
            setDiachi('')
            setMathe('')
            setCapnhat(false)
            setGt('')
            setNgaysinh(new Date())
            alert("Cập nhật thông tin thành công")
            localStorage.removeItem("khachhang");
            const params = {
                Email_KH: email,
            };
            const response = await LayTTKhachhang(params);
            const res: Khachhang[] = response.khachhangs;
            console.log(res)
            localStorage.setItem('khachhang', JSON.stringify(res));

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
                let d
                res.map((item) => {
                    setTenKH(item.Hten_KH)
                    d = new Date(item.Ngaysinh_KH)
                    setEmail(item.Email_KH)
                    setSdt(item.Sdt_KH)
                    setCccd(item.Cccd_KH)
                    setDiachi(item.Diachi_KH)
                    setMathe(item.Mathethanhvien_KH)
                    setDtl(item.Diemtichluy_KH)
                    setGt(item.Gioitinh_KH)
                    setNgaysinh(d)
                    setId(item.id)
                });
            }

        } else {

            console.log(res)
            alert("Cập nhật thông tin KHÔNG thành công")

        };
    }
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
            console.log("false", res);

            let d
            res.map((item) => {
                setTenKH(item.Hten_KH)
                d = new Date(item.Ngaysinh_KH)
                setEmail(item.Email_KH)
                setSdt(item.Sdt_KH)
                setCccd(item.Cccd_KH)
                setDiachi(item.Diachi_KH)
                setMathe(item.Mathethanhvien_KH)
                setDtl(item.Diemtichluy_KH)
                setGt(item.Gioitinh_KH)
                setNgaysinh(d)
                setId(item.id)
            });
        }
    }, []);
    // const handleChinhsuathongtin
    return (
        <div className={noto_serif.className}>
            <div className='w-5/12 shadow-lg m-auto mt-10 space-y-5 pb-10'>
                <p className='uppercase text-2xl text-center font-semibold'>thông tin khách hàng</p>
                {khachhang.map((item, index) => {
                    return (
                        <>
                            {capnhat ?
                                <div className='w-11/12  m-auto space-y-3 pl-[3%]'>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Họ tên khách hàng:</p>
                                        <input
                                            onChange={(e) => setTenKH(e.target.value)}
                                            value={tenKH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Giới tính:</p>
                                        <input
                                            onChange={(e) => setGt(e.target.value)}
                                            value={gt} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>

                                    {capnhat ?
                                        <div className="flex space-x-3">
                                            <p className="basis-4/12">Ngày sinh</p>
                                            <DatePicker
                                                className="border-dotted outline-none border-b-2 border-gray-400 w-3/5"
                                                // type="datetime"
                                                selected={ngaysinh}
                                                // minDate={new Date()}
                                                // maxDate={new Date("10-30-2023")}
                                                // onChange={(date: Date) => setStartDate(date)}
                                                onChange={(date: Date) => setNgaysinh((date))}
                                                dateFormat="dd/MM/yyyy"
                                            />
                                        </div>
                                        : null

                                    }
                                    <div className='flex space-x-3 '>
                                        <p className='basis-4/12'>Email:</p>
                                        <input value={email} type='email'
                                            onChange={(e) => handleErrorEmail(e.target.value)}
                                            className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    {errorEmail ? <p className="text-red-500  text-xs">Lỗi Email không đúng định dạng</p> : ''}

                                    <div className='flex  space-x-3'>
                                        <p className='basis-4/12'>Số điện thoại:</p>
                                        <input maxLength={10} minLength={10} onChange={(e) => handleErrorSDT(e.target.value)} value={sdt} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    {errorSDT ? <p className="text-red-500  text-xs">Vui lòng nhập đúng số điện thoại</p> : ''}

                                    <div className='flex  space-x-3'>
                                        <p className='basis-4/12'>số CCCD:</p>
                                        <input maxLength={12} minLength={12} onChange={(e) => handleErrorCCCD(e.target.value)} value={cccd} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    {errorCCCD ? <p className="text-red-500  text-xs">Vui lòng nhập đúng CCCD</p> : ''}

                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Địa chỉ:</p>
                                        <input onChange={(e) => setDiachi(e.target.value)} value={diachi} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Mã thẻ thành viên:</p>
                                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' >{item.Mathethanhvien_KH}</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Điểm tích lũy:</p>
                                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' >{item.Diemtichluy_KH}</p>
                                    </div>
                                </div>
                                :
                                <div className='w-11/12  m-auto space-y-3 pl-[3%]'>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Họ tên khách hàng:</p>
                                        <input
                                            // onChange={}
                                            value={item.Hten_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Giới tính:</p>
                                        <input value={item.Gioitinh_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex  space-x-3'>
                                        <p className='basis-4/12'>Ngày sinh:</p>
                                        <input value={String(item.Ngaysinh_KH)} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>

                                    <div className='flex space-x-3 '>
                                        <p className='basis-4/12'>Email:</p>
                                        <input value={item.Email_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex  space-x-3'>
                                        <p className='basis-4/12'>Số điện thoại:</p>
                                        <input value={item.Sdt_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex  space-x-3'>
                                        <p className='basis-4/12'>số CCCD:</p>
                                        <input value={item.Cccd_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Địa chỉ:</p>
                                        <input value={item.Diachi_KH} type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Mã thẻ thành viên:</p>
                                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' >{item.Mathethanhvien_KH}</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <p className='basis-4/12'>Điểm tích lũy:</p>
                                        <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' >{item.Diemtichluy_KH}</p>
                                    </div>
                                </div>
                            }

                        </>
                    )
                })}
                {step === "xem" && (
                    <div className='hover:text-blue-600 text-sm pl-[5%] pt-4 text-blue-600 italic' onClick={() => setCapnhat(true)}>Chỉnh sửa thông tin?</div>

                )}
                {capnhat && (
                    <div className='text-end space-x-5 pr-[10%]'>
                        <button className='hover:text-blue-600' onClick={() => handleHuy()}>Hủy</button>
                        <button className='bg-red-400 hover:bg-red-500 h-8 w-36 rounded-md' onClick={() => handleUpdate()}>Cập nhật thông tin</button>

                    </div>
                )}

            </div >
        </div>
    )
}
export default Profile;