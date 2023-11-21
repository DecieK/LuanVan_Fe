import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTKhachhang, LayTTRap_idcumrap, SuaTTChieu, ThemTTChieu, XoaTTChieu, layTTChieu } from "@/service/userService";
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
const QLKhachhang = () => {
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
    }

    const [ngaychieu, setNgaychieu] = useState(new Date());
    const [giave, setGiave] = useState('');
    const [Khachhang, setKhachhang] = useState<Khachhang[]>([]);


    const [valuePhim, setValuePhim] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [valueSuatchieu, setValueSuatchieu] = useState('');
    const [id_p, setId_p] = useState(Number);
    const [id_r, setId_r] = useState(Number);
    const [id_sc, setId_sc] = useState(Number);
    const [id_c, setId_c] = useState(Number);
    const [startDate, setStartDate] = useState(new Date());
    const [DSngaychieus, setDSngaychieus] = useState([
        {
            id: 0,
            ngaychieu: new Date(),

        },
    ])

    // const handleLayTTCumrap = async () => {
    //     try {
    //         const params = {
    //             tenTK: 'ALL',
    //         };
    //         // console.log("searchdate", params);
    //         const response = await LayTTKhachhang(params);
    //         const res: Khachhang[] = response.khachhangs;
    //         // console.log("check api searchdate ghe: ", response);
    //         // console.log("length", res.length);
    //         setKhachhang(res);
    //         // console.log(res.length)s

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    useEffect(() => {
        const handleLayTTKhachhang = async () => {
            try {
                const params = {
                    Email_KH: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTKhachhang(params);
                const res: Khachhang[] = response.khachhangs;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setKhachhang(res);
                // console.log(res.length)s

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTKhachhang()
    }, [])
    return (
        <div>

            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Họ tên khách hàng</th>
                        <th className="border border-slate-300 text-center">Ngày sinh</th>
                        <th className="border border-slate-300 text-center">Địa chỉ</th>
                        <th className="border border-slate-300 text-center">Giới tính</th>
                        <th className="border border-slate-300 text-center">SĐT</th>
                        <th className="border border-slate-300 text-center">Email</th>
                        <th className="border border-slate-300 text-center">Mã thẻ thành viên</th>
                        <th className="border border-slate-300 text-center">Điểm tích lũy</th>
                        <th className="border border-slate-300 text-center">Tài khoản</th>
                        <th className="border border-slate-300 text-center">Mật khẩu</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>

                    </tr>
                </thead>
                <tbody>
                    {Khachhang.map((item, index) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.Hten_KH
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        dayjs(item.Ngaysinh_KH).format("DD/MM/YYYY")
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.Diachi_KH
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.Gioitinh_KH
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">{item.Sdt_KH} </td>

                                <td className="border border-slate-300 text-center">{item.Email_KH} </td>
                                {/* <td className="border border-slate-300 text-center">{item.Email_KH} </td> */}
                                <td className="border border-slate-300 text-center">{item.Mathethanhvien_KH} </td>
                                <td className="border border-slate-300 text-center">{item.Diemtichluy_KH} </td>
                                <td className="border border-slate-300 text-center">{item.Taikhoan_KH} </td>
                                <td className="border border-slate-300 text-center">{item.Matkhau_KH} </td>


                                {/* <td className="border border-slate-300 text-center">{item.giave }</td> */}

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                    // onClick={() => handleSuaTTChieu(item.ngaychieu, item.giave, item.id, item.id_phim, item.id_rap, item.id_suatchieu)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                    // onClick={() => handleXoaTTChieu(item.id)}

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

export default QLKhachhang;
