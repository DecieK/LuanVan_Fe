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

};
const QLPhim = ({phimP}: Props) => {

    interface Ghe {
        id: number;
        maGhe: string;
        loaiGhe: string;
        id_rap: number;
    }
    interface Cumrap {
        id: number;
        ten_tttt: string;
        diachi: string;
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
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);
    const [ghe, setGhe] = useState<Ghe[]>([]);
    const [rap, setRap] = useState<Rap[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [valueCumrap, setValueCumrap] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [id_cr, setId_cr] = useState(Number);

    const handleLayttRap = (value: string) => {
        setValueCumrap(value)
        setValueRap('')
        cumrap.map(async (item) => {
            if (value === item.ten_tttt) {
                setId_cr(item.id)
                const params = {
                    key: item.id,
                };
                // console.log("searchdate", params);
                const response = await LayTTRap_idcumrap(params);
                const res: Rap[] = response.raps;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setRap(res);


            }

        })

    }

    useEffect(() => {
        setPhim(phimP)
        // const res: Cumrap[] = cumrapP;
        // console.log("ádasd",res)


    }, [phimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">
                <Autocomplete
                    value={valueCumrap}
                    disablePortal
                    id="combo-box-demo"
                    options={cumrap.map((option) => option.ten_tttt)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? handleLayttRap(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Trung tâm thương mại" />}
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
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên phim</th>
                        <th className="border border-slate-300 text-center">Đạo diễn</th>
                        <th className="border border-slate-300 text-center">Diễn viên</th>
                        {/* <th className="border border-slate-300 text-center">Rạp</th> */}
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

export default QLPhim;
