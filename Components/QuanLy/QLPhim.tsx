import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { aborted } from "util";
import { LayTTPhim, LayTTRap_idcumrap } from "@/service/userService";
import Image from 'next/image'
import dayjs from "dayjs"


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
        const handleLayTTPhim = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTPhim(params);
                const res: Phim[] = response.phims;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setPhim(res);

            } catch (error) {
                console.log(error);
            }
        }

        handleLayTTPhim()

    }, [])
    // useEffect(() => {
    //     setPhim(phimP)
    //     setLoaiphim(loaiphimP)

    // }, [loaiphimP, phimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <p className="uppercase text-center text-2xl font-semibold">danh sách phim</p>
            <div className="w-11/12 flex m-auto mt-5 mb-5">
                <div className="basis-6/12 space-y-3 ">
                    <div className="flex">
                        <p className="basis-3/12">Tên phim:</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Đạo diễn</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Diễn viên</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Nhà sản xuất</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Ngôn ngữ</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Ngày chiếu</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Tóm tắt</p>
                        <textarea className="h-20 w-80 border-2 outline-none pl-2" />
                    </div>

                </div>
                <div className="basis-6/12 space-y-3">
                    <div className="flex">
                        <p className="basis-3/12">Thời lượng</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Poster</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Trailer</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Trạng thái phim</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Giới hạn tuổi</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Quốc gia</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2" />
                    </div>

                </div>
                {/* <div className="basis-4/12 border-2 border-green-300">

                </div> */}

            </div>
            <div className="w-full overflow-x-auto">
                <table className=" border-separate  border border-slate-400 w-full ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-center ">#</th>
                            <th className="border border-slate-300 text-center w-[100px]">Tên phim</th>
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
                                    <td className="border border-slate-300 text-center w-[100px]">{item.tenphim}</td>
                                    <td className="border border-slate-300 text-center">{item.daodien}</td>
                                    <td className="border border-slate-300 text-center">{item.dienvien}</td>
                                    <td className="border border-slate-300 text-center">{item.nsx}</td>
                                    <td className="border border-slate-300 text-center">{item.ngonngu}</td>
                                    <td className="border border-slate-300 text-center">
                                        {
                                            dayjs(item.ngaychieu).format("DD/MM/YYYY")
                                        }

                                    </td>
                                    <td className="border border-slate-300 text-center">{item.tomtat}</td>
                                    <td className="border border-slate-300 text-center">{item.thoiluong}</td>
                                    <td className="border border-slate-300 text-center">{
                                        <Image
                                            src={new Buffer(item.poster, "base64").toString("binary")}
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                        />
                                    }</td>
                                    <td className="border border-slate-300 text-center">{item.trailer}</td>
                                    <td className="border border-slate-300 text-center">{item.trangthai}</td>
                                    <td className="border border-slate-300 text-center">{item.dieukien}</td>
                                    <td className="border border-slate-300 text-center">{item.quocgia}</td>

                                    <td className="border border-slate-300 text-center">
                                        <EditIcon className="cursor-pointer" />
                                        <ClearIcon className="cursor-pointer" sx={{ color: 'red' }} />
                                    </td>

                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
                d</div>
        </div>
    );
};

export default QLPhim;
