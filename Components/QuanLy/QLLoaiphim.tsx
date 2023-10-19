import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from "@mui/material/TextField";
import { LayTTRap_idcumrap } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    loaiphimP: any
};

const QLLoaiphim = ({ loaiphimP }: Props) => {

    interface Loaiphim {
        id: number;
        tenloai: string;
    }

    const [tenTTTT, setTenTTTT] = useState('');
    const [diachi, setDiachi] = useState('');
    const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
    const [valueCumrap, setValueCumrap] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [id_cr, setId_cr] = useState(Number);



    useEffect(() => {
        setLoaiphim(loaiphimP)

        // const res: Cumrap[] = cumrapP;
        // console.log("ádasd",res)


    }, [loaiphimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">


                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên loại phim</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTenTTTT(event.target.value)}
                    ></input>
                </div>
                {/* <div className="flex space-x-5">
                    <p className="basis-[20%]">Số lượng ghế</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setDiachi(event.target.value)}
                    ></input>
                </div> */}
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40">Lưu thông tin</button></div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên loại phim</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>



                    </tr>
                </thead>
                <tbody>
                    {loaiphim.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.tenloai}</td>

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

export default QLLoaiphim;
