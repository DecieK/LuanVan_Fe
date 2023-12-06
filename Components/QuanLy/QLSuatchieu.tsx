import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { LayTTRap_idcumrap, LayTTSuatchieu, SuaTTSuatchieu, ThemTTSuatchieu, XoaTTSuatchieu } from "@/service/userService";
import { it } from "node:test";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    suatchieuP: any

};
const QLSuatchieu = () => {

    interface Suatchieu {
        id: number;
        giobatdau: string;
        gioketthuc: string;
    }
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [id_sc, setId_sc] = useState(Number);
    const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
    const [step, setStep] = useState("them");
    const handleLayTTSuatchieu = async () => {
        try {
            const params = {
                key: 'ALL',
            };
            // console.log("searchdate", params);
            const response = await LayTTSuatchieu(params);
            const res: Suatchieu[] = response.suatchieus;
            // console.log("check api searchdate ghe: ", response);
            // console.log("length", res.length);
            setSuatchieu(res);

        } catch (error) {
            console.log(error);
        }
    }

    const handleThemTTSuatchieu = async () => {
        console.log("starttime", starttime)
        console.log("endtime", endtime)
        let res = await ThemTTSuatchieu(
            {
                giobd: starttime,
                giokt: endtime
            });
        if (res && res.errCode === 0) {
            console.log(res)
            setStarttime('')
            setEndtime('')
            handleLayTTSuatchieu()
            alert("Thêm thông tin suất chiếu mới thành công")
        } else {
            console.log(res)
            alert("Thêm thông tin suất chiếu mới KHÔNG thành công")
        };
    }
    const handleSuaTTSuatchieu = async (bd: string, kt: string, id: number) => {
        setStarttime(bd)
        setEndtime(kt)
        setId_sc(id)
        setStep("capnhat")
    }

    const handleCapnhatTTSuatchieu = async () => {

        let res = await SuaTTSuatchieu(
            {
                id: id_sc,
                giobd: starttime,
                giokt: endtime

            });
        if (res && res.errCode === 0) {
            console.log(res)
            setStarttime('')
            setEndtime('')
            setStep('them')
            handleLayTTSuatchieu()
            alert("Cập nhật thông tin suất chiếu thành công")
        } else {
            console.log(res)
            alert("Cập nhật thông tin suất chiếu KHÔNG thành công")
        };
    }

    const handleXoaTTSuatchieu = async (id: number) => {
        let res = await XoaTTSuatchieu(
            {
                id: id
            });
        if (res && res.errCode === 0) {
            console.log(res)
            setStarttime('')
            setEndtime('')
            handleLayTTSuatchieu()
            alert("Xóa thông tin suất chiếu thành công")
        } else {
            console.log(res)
            alert("Xóa thông tin suất chiếu KHÔNG thành công")
        };
    }

    useEffect(() => {
        const handleLayTTSuatchieu = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTSuatchieu(params);
                const res: Suatchieu[] = response.suatchieus;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setSuatchieu(res);

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTSuatchieu()
    }, [])
    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Thời gian bắt đầu</p>
                    <input className="border-2 border-gray-500 outline-none" type="time" id="appt" name="appt"
                        value={starttime}
                        onChange={(event) => setStarttime(event.target.value)} />
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Thời gian kết thúc</p>
                    <input className="border-2 border-gray-500 outline-none" type="time" id="appt" name="appt"
                        value={endtime}
                        onChange={(event) => setEndtime(event.target.value)} />
                </div>



                <div className="w-8/12 pt-7">
                    {step === "them" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleThemTTSuatchieu()}
                            >Lưu thông tin</button>
                        )
                    }
                    {step === "capnhat" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleCapnhatTTSuatchieu()}
                            >Cập nhật thông tin</button>
                        )
                    }
                </div>

            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Giờ bắt đâu</th>
                        <th className="border border-slate-300 text-center">Giờ kết thúc</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>

                    </tr>
                </thead>
                <tbody>
                    {suatchieu.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.giobatdau}</td>
                                <td className="border border-slate-300 text-center">{item.gioketthuc}</td>
                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                        onClick={() => handleSuaTTSuatchieu(item.giobatdau, item.gioketthuc, item.id)}
                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                        onClick={() => handleXoaTTSuatchieu(item.id)}
                                    />
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
