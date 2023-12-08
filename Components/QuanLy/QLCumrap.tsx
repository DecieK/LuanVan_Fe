import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LayTTCumrap, SuaTTCumrap, ThemTTCumrap, XoaTTCumrap } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const QLCumrap = () => {
    interface Cumrap {
        id: number;
        ten_tttt: string;
        diachi: string;
    }
    const [tenTTTT, setTenTTTT] = useState('');
    const [diachi, setDiachi] = useState('');
    const [idcr, setIdcr] = useState(Number);
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);
    const [step, setStep] = useState("them");
    // const [showModal, setShowModal] = useState(false);
    const handleLayTTCumrap = async () => {
        try {
            const params = {
                key: 'ALL',
            };
            // console.log("searchdate", params);
            const response = await LayTTCumrap(params);
            const res: Cumrap[] = response.cumraps;
            // console.log("check api searchdate ghe: ", response);
            // console.log("length", res.length);
            setCumrap(res);
            // console.log(res.length)

        } catch (error) {
            console.log(error);
        }
    }

    const handleSuaTTCumrap = async (ten: string, dc: string, id: number) => {
        setTenTTTT(ten)
        setDiachi(dc)
        setIdcr(id)
        setStep("capnhat")
    }
    const handleXoaTTCumrap = async (id: number) => {
        let res = await XoaTTCumrap(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setTenTTTT('')
            setDiachi('')
            handleLayTTCumrap()
            alert("Xóa thông tin cụm rạp thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin cụm rạp KHÔNG thành công")

        };
    }


    const handleCapnhatTTCumrap = async () => {
        console.log("tenTTTT", tenTTTT)
        console.log("diachi", diachi)
        let res = await SuaTTCumrap(
            {
                id: idcr,
                tentttt: tenTTTT,
                diachi: diachi
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setTenTTTT('')
            setDiachi('')
            setStep('them')
            handleLayTTCumrap()
            alert("Cập nhật thông tin cụm rạp mới thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Cập nhật thông tin cụm rạp mới KHÔNG thành công")

        };
    }
    const handleThemTTCumrap = async () => {
        console.log("tenTTTT", tenTTTT)
        console.log("diachi", diachi)
        let res = await ThemTTCumrap(
            {
                tentttt: tenTTTT,
                diachi: diachi,
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setTenTTTT('')
            setDiachi('')
            handleLayTTCumrap()
            alert("Thêm thông tin cụm rạp mới thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin cụm rạp mới KHÔNG thành công")

        };
    }

    useEffect(() => {
        // setCumrap(cumrapP)
        const handleLayTTCumrap = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTCumrap(params);
                const res: Cumrap[] = response.cumraps;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setCumrap(res);
                // console.log(res.length)

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTCumrap()
    }, [])

    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên trung tâm thương mại</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={tenTTTT}
                        onChange={(event) => setTenTTTT(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Địa chỉ</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={diachi}
                        onChange={(event) => setDiachi(event.target.value)}
                    ></input>
                </div>

                <div className="w-8/12 ">
                    {step === "them" &&
                        (
                            <button
                                className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleThemTTCumrap()}
                            >
                                Lưu thông tin
                            </button>
                        )
                    }
                    {step === "capnhat" &&
                        (
                            <button
                                className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleCapnhatTTCumrap()}
                            >
                                Cập nhật thông tin
                            </button>
                        )
                    }
                </div>

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
                    {cumrap.reverse().map((item) => (
                        <>
                            <tr key={item.id}>
                                {/* <td className="border border-slate-300 text-center">{item.id}</td> */}
                                <td className="border border-slate-300 pl-5">{item.id}</td>
                                <td className="border border-slate-300 pl-5">{item.ten_tttt}</td>
                                <td className="border border-slate-300 pl-5">{item.diachi}</td>
                                <td className="border border-slate-300 pl-5">
                                    {/* <div className="flex" onClick={()=>handleSuaTTCumrap(item.ten_tttt,item.diachi)}> */}
                                    <EditIcon className="cursor-pointer" onClick={() => handleSuaTTCumrap(item.ten_tttt, item.diachi, item.id)} />
                                    {/* </div> */}
                                    {/* <div className="flex"> */}
                                    <ClearIcon className="cursor-pointer " sx={{ color: 'red' }} onClick={() => handleXoaTTCumrap(item.id)} />
                                    {/* </div> */}
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
