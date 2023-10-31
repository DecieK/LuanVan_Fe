import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTKhachhang, LayTTNhanvien, LayTTRap_idcumrap, SuaTTChieu, SuaTTNhanvien, ThemTTChieu, ThemTTNhanvien, XoaTTChieu, XoaTTNhanvien, layTTChieu } from "@/service/userService";
import index from "@/pages";
import dayjs from "dayjs"


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
// type Props = {
//     suatchieuP: any,
//     rapP: any,
//     phimP: any,
//     chieuP: any

// };
const QLNhanvien = () => {
    interface Nhanvien {
        id: number;
        Hten_NV: string;
        Sdt_NV: string;
        Ngaysinh_NV: Date;
        Tuoi_NV: number;
        Diachi_NV: string;
        Gioitinh_NV: string;
        Cccd_NV: string;
        Chucvu_NV: string;
        Taikhoan_NV: string;
        Matkhau_NV: string;
    }


    const [nhanvien, setNhanvien] = useState<Nhanvien[]>([]);


    const [valueChucvu, setValueChucvu] = useState('');
    const [tennv, setTennv] = useState('');
    const [ngaysinh, setNgaysinh] = useState(new Date());
    const [id_nv, setId_nv] = useState(Number);
    const [tuoi, setTuoi] = useState(Number);
    const [sdt, setSdt] = useState('');
    const [diachi, setDiachi] = useState('');
    const [cccd, setCccd] = useState('');
    const [gt_NV, setGT_NV] = useState("");
    const [taikhoan, setTaikhoan] = useState('');
    const [matkhau, setMatkhau] = useState('');

    const handleLayTTNhanvien = async () => {
        try {
            const params = {
                tenTK: 'ALL',
            };
            // console.log("searchdate", params);
            const response = await LayTTNhanvien(params);
            const res: Nhanvien[] = response.nhanviens;
            // console.log("check api searchdate ghe: ", response);
            // console.log("length", res.length);
            setNhanvien(res);
            // console.log(res.length)s

        } catch (error) {
            console.log(error);
        }
    }

    const handleThemTTNhanvien = async () => {
        console.log("tennv", tennv)
        console.log("sdt", sdt)
        console.log("ngaysinh", ngaysinh)
        console.log("tuoi", tuoi)
        console.log("diachi", diachi)
        console.log("gt_NV", gt_NV)
        console.log("cccd", cccd)
        console.log("valueChucvu", valueChucvu)
        console.log("taikhoan", taikhoan)
        console.log("matkhau", matkhau)

        let res = await ThemTTNhanvien(
            {
                hten_nv: tennv,
                sdt_nv: sdt,
                ngaysinh_nv: ngaysinh,
                tuoi_nv: tuoi,
                diachi_nv: diachi,
                gioitinh_nv: gt_NV,
                cccd_nv: cccd,
                chucvu_nv: valueChucvu,
                taikhoan_nv: taikhoan,
                matkhau_nv: matkhau

            });
        if (res && res.errCode === 0) {
            console.log(res)

            setTennv('')
            setSdt('')
            setNgaysinh(new Date())
            setTuoi(0)
            setDiachi('')
            setGT_NV('')
            setCccd('')
            setValueChucvu('')
            setTaikhoan('')
            setMatkhau('')
            handleLayTTNhanvien()
            alert("Thêm thông tin nhân viên mới thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin nhân viên mới KHÔNG thành thông")

        };
    }
    const handleSuaTTNhanvien = async (id: number, ten: string, sdt: string, ngaysinh: Date, tuoi: number, diachi: string, gt: string, cccd: string, cv: string, tk: string, mk: string) => {
        setId_nv(id)
        setTennv(ten)
        setSdt(sdt)
        setNgaysinh(new Date(ngaysinh))
        setTuoi(tuoi)
        setDiachi(diachi)
        setGT_NV(gt)
        setCccd(cccd)
        setValueChucvu(cv)
        setTaikhoan(tk)
        setMatkhau(mk)
    }
    const handleCapnhatTTNhanvien = async () => {
        console.log("id", id_nv)
        console.log("tennv", tennv)
        console.log("sdt", sdt)
        console.log("ngaysinh", ngaysinh)
        console.log("tuoi", tuoi)
        console.log("diachi", diachi)
        console.log("gt_NV", gt_NV)
        console.log("cccd", cccd)
        console.log("valueChucvu", valueChucvu)
        console.log("taikhoan", taikhoan)
        console.log("matkhau", matkhau)
        let res = await SuaTTNhanvien(
            {
                id: id_nv,
                hten_nv: tennv,
                sdt_nv: sdt,
                ngaysinh_nv: ngaysinh,
                tuoi_nv: tuoi,
                diachi_nv: diachi,
                gioitinh_nv: gt_NV,
                cccd_nv: cccd,
                chucvu_nv: valueChucvu,
                taikhoan_nv: taikhoan,
                matkhau_nv: matkhau
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setTennv('')
            setSdt('')
            setNgaysinh(new Date())
            setTuoi(0)
            setDiachi('')
            setGT_NV('')
            setCccd('')
            setValueChucvu('')
            setTaikhoan('')
            setMatkhau('')
            handleLayTTNhanvien()
            alert("Cập nhật thông tin nhân viên mới thành thông")

        } else {
            console.log(res)
            alert("Cập nhật thông tin nhân viên KHÔNG thành thông")

        };
    }
    const handleXoaTTNhanvien = async (id: number) => {
        let res = await XoaTTNhanvien(
            {
                id: id
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setTennv('')
            setSdt('')
            setNgaysinh(new Date())
            setTuoi(0)
            setDiachi('')
            setGT_NV('')
            setCccd('')
            setValueChucvu('')
            setTaikhoan('')
            setMatkhau('')
            handleLayTTNhanvien()
            alert("Xóa thông tin nhân viên thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin nhân viên KHÔNG thành thông")

        };
    }


    useEffect(() => {
        const handleLayTTNhanvien = async () => {
            try {
                const params = {
                    tenTK: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTNhanvien(params);
                const res: Nhanvien[] = response.nhanviens;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setNhanvien(res);
                // console.log(res.length)s

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTNhanvien()
    }, [])
    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên nhân viên</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTennv(event.target.value)}
                        value={tennv}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Ngày sinh</p>
                    <DatePicker
                        className=""
                        // type="datetime"
                        selected={ngaysinh}
                        // minDate={new Date()}
                        // maxDate={new Date("10-30-2023")}
                        // onChange={(date: Date) => setStartDate(date)}
                        onChange={(date: Date) => setNgaysinh((date))}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tuổi</p>
                    <input type="number" placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTuoi(event.target.valueAsNumber)}
                        value={tuoi}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Số điện thoại</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setSdt(event.target.value)}
                        value={sdt}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Giới tính</p>
                    <div className="col-span-4 mx-10 ">
                        <input onChange={(e) => setGT_NV(e.target.value)} type="radio" value="Nam" name='gt' checked={gt_NV === "Nam"} /> Nam
                        <input className="ml-9" onChange={(e) => setGT_NV(e.target.value)} type="radio" value="Nu" name='gt' checked={gt_NV === "Nu"} /> Nữ
                    </div>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Địa chỉ</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setDiachi(event.target.value)}
                        value={diachi}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">CCCD/CMND</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setCccd(event.target.value)}
                        value={cccd}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Chức vụ</p>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={['Quản lý', 'Nhân viên']}
                        value={valueChucvu}
                        onChange={(event: any, newValue: string | null) => {
                            { newValue ? setValueChucvu(newValue) : null }
                            // { newValue ? handleLayttRap(newValue) : null }

                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Chức vụ" />}
                    />
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tài khoản</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTaikhoan(event.target.value)}
                        value={taikhoan}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Mật khẩu</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setMatkhau(event.target.value)}
                        value={matkhau}
                    ></input>
                </div>

                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleCapnhatTTNhanvien()}
                    >Cập nhật thông tin</button>

                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleThemTTNhanvien()}
                    >Lưu thông tin</button>
                </div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Họ tên nhân viên</th>
                        <th className="border border-slate-300 text-center">Ngày sinh</th>
                        <th className="border border-slate-300 text-center">Tuổi</th>
                        <th className="border border-slate-300 text-center">SĐT</th>
                        <th className="border border-slate-300 text-center">Giới tính</th>
                        <th className="border border-slate-300 text-center">Địa chỉ</th>
                        <th className="border border-slate-300 text-center">CCCD/CMND</th>
                        <th className="border border-slate-300 text-center">Chức vụ</th>
                        <th className="border border-slate-300 text-center">Tài khoản</th>
                        <th className="border border-slate-300 text-center">Mật khẩu</th>
                    </tr>
                </thead>
                <tbody>
                    {nhanvien.map((item, index) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.Hten_NV
                                    }
                                </td>

                                <td className="border border-slate-300 text-center">
                                    {
                                        dayjs(item.Ngaysinh_NV).format("DD/MM/YYYY")
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.Tuoi_NV
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {item.Sdt_NV}
                                </td>
                                <td className="border border-slate-300 text-center">{item.Gioitinh_NV} </td>
                                <td className="border border-slate-300 text-center">{item.Diachi_NV} </td>
                                {/* <td className="border border-slate-300 text-center">{item.Email_KH} </td> */}
                                <td className="border border-slate-300 text-center">{item.Cccd_NV} </td>
                                <td className="border border-slate-300 text-center">{item.Chucvu_NV} </td>
                                <td className="border border-slate-300 text-center">{item.Taikhoan_NV} </td>
                                <td className="border border-slate-300 text-center">{item.Matkhau_NV} </td>
                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                        onClick={() => handleSuaTTNhanvien(item.id, item.Hten_NV, item.Sdt_NV, item.Ngaysinh_NV, item.Tuoi_NV, item.Diachi_NV, item.Gioitinh_NV, item.Cccd_NV, item.Chucvu_NV, item.Taikhoan_NV, item.Matkhau_NV)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                        onClick={() => handleXoaTTNhanvien(item.id)}

                                    />
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={handleLayTTChieu}>click</button> */}
        </div>
    );
};

export default QLNhanvien;
