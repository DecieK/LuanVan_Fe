import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { aborted } from "util";
import { LayTTRap_idcumrap } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    phimP: any
    loaiphimP: any

};
const QLPhim = ({ phimP, loaiphimP }: Props) => {

    interface Loaiphim {
        id: number;
        tenloai: string;
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
    const [tenTTTT, setTenTTTT] = useState('');
    const [diachi, setDiachi] = useState('');
    const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [valueloaiphim, setValueloaiphim] = useState('');

    // const handleLayttRap = (value: string) => {
    //     setValueCumrap(value)
    //     setValueRap('')
    //     cumrap.map(async (item) => {
    //         if (value === item.ten_tttt) {
    //             setId_cr(item.id)
    //             const params = {
    //                 key: item.id,
    //             };
    //             // console.log("searchdate", params);
    //             const response = await LayTTRap_idcumrap(params);
    //             const res: Rap[] = response.raps;
    //             // console.log("check api searchdate ghe: ", response);
    //             // console.log("length", res.length);
    //             setRap(res);


    //         }

    //     })

    // }

    useEffect(() => {
        setPhim(phimP)
        setLoaiphim(loaiphimP)

    }, [loaiphimP, phimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">
                <Autocomplete
                    value={valueloaiphim}
                    disablePortal
                    id="combo-box-demo"
                    options={loaiphim.map((option) => option.tenloai)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        { newValue ? setValueloaiphim(newValue) : null }
                        // { newValue ? handleLayttRap(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Loại phim" />}
                />

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên rạp</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTenTTTT(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Số lượng ghế</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setDiachi(event.target.value)}
                    ></input>
                </div>
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40">Lưu thông tin</button></div>
            </div>
            <div className="w-full overflow-x-auto">
                <table className=" border-separate  border border-slate-400 w-[1500px] ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-center ">#</th>
                            <th className="border border-slate-300 text-center">Tên phim</th>
                            <th className="border border-slate-300 text-center">Đạo diễn</th>
                            <th className="border border-slate-300 text-center">Diễn viên</th>
                            <th className="border border-slate-300 text-center">Nhà sản xuất</th>
                            <th className="border border-slate-300 text-center">Ngôn ngữ</th>
                            <th className="border border-slate-300 text-center">Ngày chiếu</th>
                            <th className="border border-slate-300 text-center">Tóm tắt</th>
                            <th className="border border-slate-300 text-center">Thời lượng</th>
                            <th className="border border-slate-300 text-center">Poster</th>
                            <th className="border border-slate-300 text-center">Trailer</th>
                            <th className="border border-slate-300 text-center">Trạng thái phim</th>
                            <th className="border border-slate-300 text-center">Giới hạn tuổi</th>
                            <th className="border border-slate-300 text-center">Quốc gia</th>
                            <th className="border border-slate-300 text-center">Tác vụ</th>



                        </tr>
                    </thead>
                    <tbody>
                        {phim.map((item) => (
                            <>
                                <tr key={item.id}>
                                    <td className="border border-slate-300 text-center">{item.id}</td>
                                    <td className="border border-slate-300 text-center">{item.tenphim}</td>
                                    <td className="border border-slate-300 text-center">{item.daodien}</td>
                                    <td className="border border-slate-300 text-center">{item.dienvien}</td>
                                    <td className="border border-slate-300 text-center">{item.nsx}</td>
                                    <td className="border border-slate-300 text-center">{item.ngonngu}</td>
                                    <td className="border border-slate-300 text-center">{item.ngaychieu}</td>
                                    <td className="border border-slate-300 text-center">{item.tomtat}</td>
                                    <td className="border border-slate-300 text-center">{item.thoiluong}</td>
                                    <td className="border border-slate-300 text-center">{}</td>
                                    <td className="border border-slate-300 text-center">{item.trailer}</td>
                                    <td className="border border-slate-300 text-center">{item.trangthai}</td>
                                    <td className="border border-slate-300 text-center">{item.dieukien}</td>
                                    <td className="border border-slate-300 text-center">{item.quocgia}</td>
                                    {/* <td className="border border-slate-300 text-center">{valueRap ? valueRap : }</td> */}

                                    <td className="border border-slate-300 text-center">
                                        <EditIcon className="cursor-pointer" />
                                        <ClearIcon className="cursor-pointer" sx={{ color: 'red' }} />
                                    </td>

                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QLPhim;
