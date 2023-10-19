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
    suatchieuP: any

};
const QLSuatchieu = ({suatchieuP }: Props) => {

    interface Suatchieu {
        id: number;
        giobatdau: string;
        gioketthuc: string;
      }
    const [tenTTTT, setTenTTTT] = useState('');
    const [diachi, setDiachi] = useState('');
    const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
    const [valueCumrap, setValueCumrap] = useState('');
    const [valueRap, setValueRap] = useState('');

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
        // const res: Cumrap[] = cumrapP;
        // console.log("ádasd",res)


    }, [suatchieuP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">
               

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
                        <th className="border border-slate-300 text-center">Giờ bắt đâu</th>
                        <th className="border border-slate-300 text-center">Giờ kết thúc</th>




                    </tr>
                </thead>
                <tbody>
                    {suatchieu.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.giobatdau}</td>
                                <td className="border border-slate-300 text-center">{item.gioketthuc}</td>
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

export default QLSuatchieu;
