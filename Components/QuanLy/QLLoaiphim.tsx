import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from "@mui/material/TextField";
import { LayTTLoaiphim, LayTTRap_idcumrap, SuaTTLoaiphim, ThemTTLoaiphim, XoaTTLoaiphim } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})


const QLLoaiphim = () => {

    interface Loaiphim {
        id: number;
        tenloai: string;
    }

    const [tenLP, setTenLP] = useState('');
    const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
    const [id_lp, setId_lp] = useState(Number);
    const [step, setStep] = useState("them");
    const handleLayTTLoaiphim = async () => {
        try {
            const params = {
                id: 'ALL',
            };
            // console.log("searchdate", params);
            const response = await LayTTLoaiphim(params);
            const res: Loaiphim[] = response.loaiphims;
            // console.log("check api searchdate ghe: ", response);
            // console.log("length", res.length);
            setLoaiphim(res);
            // console.log(res.length)

        } catch (error) {
            console.log(error);
        }
    }
    const handleThemTTLoaiphim = async () => {
        console.log("tenLP", tenLP)


        let res = await ThemTTLoaiphim(
            {
                tenloai: tenLP
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setTenLP('')

            handleLayTTLoaiphim()
            alert("Thêm thông tin loại phim mới thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin ghế mới KHÔNG thành công")

        };
    }
    const handleSuaTTGhe = async (ten: string, id: number) => {
        setTenLP(ten)
        setId_lp(id)
        setStep("capnhat")
    }

    const handleCapnhatTTLoaiphim = async () => {

        let res = await SuaTTLoaiphim(
            {
                id: id_lp,
                tenloai: tenLP

            });
        if (res && res.errCode === 0) {

            console.log(res)

            setTenLP('')
            setStep('them')
            handleLayTTLoaiphim()
            alert("Cập nhật thông tin loại phim mới thành công")



            // handleCloseClick();
        } else {

            console.log(res)
            alert("Cập nhật thông tin loại phim mới KHÔNG thành công")

        };
    }

    const handleXoaTTLoaiphim = async (id: number) => {
        let res = await XoaTTLoaiphim(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            console.log(res)
            setTenLP('')
            handleLayTTLoaiphim()
            alert("Xóa thông tin loại phim thành công")
            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin loại phim KHÔNG thành công")

        };
    }

    useEffect(() => {
        const handleLayTTLoaiphim = async () => {
            try {
                const params = {
                    id: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTLoaiphim(params);
                const res: Loaiphim[] = response.loaiphims;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setLoaiphim(res);
                // console.log(res.length)

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTLoaiphim()
    }, [])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className="space-y-5">


                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên loại phim</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={(tenLP)}
                        onChange={(event) => setTenLP(event.target.value)}
                    ></input>
                </div>
                {/* <div className="flex space-x-5">
                    <p className="basis-[20%]">Số lượng ghế</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setDiachi(event.target.value)}
                    ></input>
                </div> */}

                <div className="w-8/12 pt-7">
                    {step === "them" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleThemTTLoaiphim()}
                            >Lưu thông tin</button>
                        )
                    }
                    {step === "capnhat" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleCapnhatTTLoaiphim()}
                            >Cập nhật thông tin</button>
                        )
                    }
                </div>


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
                                    <EditIcon className="cursor-pointer"
                                        onClick={() => handleSuaTTGhe(item.tenloai, item.id)} />

                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                        onClick={() => handleXoaTTLoaiphim(item.id)} />

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
