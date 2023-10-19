import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { LayTTRap_idcumrap } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    suatchieuP: any,
    rapP: any,
    phimP: any


};
const QLChieu = ({ suatchieuP, rapP, phimP }: Props) => {
    interface Chieu {
        id: number;
        ngaychieu: string;
        giave: number;
        id_rap: number;
        id_suatchieu: number;
        id_phim: number;
    }
    interface Suatchieu {
        id: number;
        giobatdau: string;
        gioketthuc: string;
    }
    interface Rap {
        id: number;
        ten_rap: string;
        slghe: number;
        id_cumrap: number;
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
    const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
    const [rap, setRap] = useState<Rap[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [chieu, setChieu] = useState<Chieu[]>([]);

    const [valuePhim, setValuePhim] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [valueSuatchieu, setValueSuatchieu] = useState('');

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
        setSuatchieu(suatchieuP)
        setPhim(phimP)
        setRap(rapP)

    }, [phimP, rapP, suatchieuP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">
            <Autocomplete
                    value={valueRap}
                    disablePortal
                    id="combo-box-demo"
                    options={phim.map((option) => option.tenphim)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? setValuePhim(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Phim" />}
                />
                <Autocomplete
                    value={valueRap}
                    disablePortal
                    id="combo-box-demo"
                    options={rap.map((option) => option.ten_rap)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? setValueRap(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Rạp" />}
                />
                <Autocomplete
                    value={valueRap}
                    disablePortal
                    id="combo-box-demo"
                    options={suatchieu.map((option) => option.giobatdau)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? setValueSuatchieu(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Suất chiếu" />}
                />

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Ngày chiếu</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTenTTTT(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Giá vé</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setDiachi(event.target.value)}
                    ></input>
                </div>
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40">Lưu thông tin</button></div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">id phim</th>
                        <th className="border border-slate-300 text-center">id rạp</th>
                        <th className="border border-slate-300 text-center">id suất chiếu</th>
                        <th className="border border-slate-300 text-center">Giờ bắt đâu</th>
                        <th className="border border-slate-300 text-center">Giờ kết thúc</th>
                    </tr>
                </thead>
                <tbody>
                    {chieu.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.id_phim}</td>
                                <td className="border border-slate-300 text-center">{item.id_rap}</td>
                                <td className="border border-slate-300 text-center">{item.id_suatchieu}</td>
                                <td className="border border-slate-300 text-center">{item.ngaychieu}</td>
                                <td className="border border-slate-300 text-center">{item.giave}</td>
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
    );
};

export default QLChieu;
