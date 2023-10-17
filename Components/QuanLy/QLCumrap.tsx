import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    cumrapP: any
};
const QLCumrap = ({ cumrapP }: Props) => {
    interface Cumrap {
        id: number;
        ten_tttt: string;
        diachi: string;
    }
    const [tenTTTT, setTenTTTT] = useState('');
    const [diachi, setDiachi] = useState('');
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);

    // const [showModal, setShowModal] = useState(false);


    const router = useRouter();

    const handleZaloLogin = () => {
        router.push("/zalo-login");
    };

    const handleLogin = () => {
        router.push("/login");

    };

    useEffect(() => {
        setCumrap(cumrapP)
    }, [cumrap, cumrapP])

    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên trung tâm thương mại</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTenTTTT(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Địa chỉ</p>
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
                        {/* <th className="border border-slate-300">#</th> */}
                        <th className="border border-slate-300">#</th>
                        {/* <th className="border border-slate-300">ID</th> */}
                        <th className="border border-slate-300">Tên trung tâm thương mại</th>
                        <th className="border border-slate-300">Địa chỉ</th>
                        <th className="border border-slate-300">Tác vụ</th>
                        {/* <th className="border border-slate-300">Đơn thuốc</th> */}
                        {/* <th className="border border-slate-300">Kết quả CLS</th> */}
                        {/* <th className="border border-slate-300">{sdt}</th> */}

                    </tr>
                </thead>
                <tbody>
                    {cumrap.map((item) => (
                        <>
                            <tr key={item.id}>
                                {/* <td className="border border-slate-300 text-center">{item.id}</td> */}
                                <td className="border border-slate-300 pl-5">{item.id}</td>
                                <td className="border border-slate-300 pl-5">{item.ten_tttt}</td>
                                <td className="border border-slate-300 pl-5">{item.diachi}</td>
                                <td className="border border-slate-300 pl-5">
                                    <EditIcon className="cursor-pointer" />
                                    <ClearIcon className="cursor-pointer " sx={{ color: 'red' }} />
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QLCumrap;
