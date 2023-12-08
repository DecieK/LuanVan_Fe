import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTPhim, LayTTRap_idcumrap, LayTTSuatchieu, SuaTTChieu, ThemTTChieu, Thongke_cumrap, Thongke_ngay, Thongke_phim, Thongke_thang, Thongke_tuan, XoaTTChieu, layTTChieu } from "@/service/userService";
import index from "@/pages";
import dayjs from "dayjs"


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    suatchieuP: any,
    rapP: any,
    phimP: any,
    chieuP: any

};
const QLDoanhthu = () => {
    interface Chieu {
        id: number;
        ngaychieu: Date;
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

    const [thongke_ngay, setThongke_ngay] = useState<any[]>([]);
    const [thongke_phim, setThongke_phim] = useState<any[]>([]);
    const [thongke_cumrap, setThongke_cumrap] = useState<any[]>([]);
    const [thongke_thang, setThongke_thang] = useState<any[]>([]);
    const [thongke_tuan, setThongke_tuan] = useState<any[]>([]);
    const options = ['Theo ngày', 'Theo tuần', 'Theo tháng', 'Theo phim', 'Theo TTTT'];
    const [valueCBB, setValueCBB] = useState('')
    let d
    let d2

    const handleCombobox = (value: string) => {
        setValueCBB(value)
    }

    useEffect(() => {

        const handleThongKe_Ngay = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await Thongke_ngay(params);
                setThongke_ngay(response.thongke)
                // console.log("check api searchdate ghe: ", response);

            } catch (error) {
                console.log(error);
            }
        }
        const handleThongke_Phim = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await Thongke_phim(params);
                setThongke_phim(response.thongke_phim)
                // console.log("check api searchdate setThongke_phim: ", response);

            } catch (error) {
                console.log(error);
            }
        }
        const handleThongke_Cumrap = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await Thongke_cumrap(params);
                setThongke_cumrap(response.thongke_cumrap)
                // console.log("check api searchdate setThongke_cumrap: ", response);

            } catch (error) {
                console.log(error);
            }
        }
        const handleThongke_Thang = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await Thongke_thang(params);
                setThongke_thang(response.thongke)
                // console.log("check api searchdate handleThongke_Thang: ", response);

            } catch (error) {
                console.log(error);
            }
        }
        const handleThongke_Tuan = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await Thongke_tuan(params);
                setThongke_tuan(response.thongke)
                console.log("check api searchdate handleThongke_Tuan: ", response);

            } catch (error) {
                console.log(error);
            }
        }
        handleThongKe_Ngay()
        handleThongke_Phim()
        handleThongke_Cumrap()
        handleThongke_Thang()
        handleThongke_Tuan()
    }, [])
    return (
        <div>
            <Autocomplete
                value={valueCBB}
                disablePortal
                id="combo-box-demo"
                options={options}
                // options={}
                onChange={(event: any, newValue: string | null) => {
                    // {newValue ? setValueCumrap(newValue) : null}
                    { newValue ? handleCombobox(newValue) : null }

                }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Thống kê danh thu" />}
            />

            {
                valueCBB === 'Theo ngày' ?
                    <div className="w-full overflow-x-auto">
                        <table className=" border-separate  border border-slate-400 w-full ">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 text-center ">#</th>
                                    <th className="border border-slate-300 text-center">Ngày chiếu</th>
                                    <th className="border border-slate-300 text-center">Tổng tiền</th>




                                </tr>
                            </thead>
                            <tbody>
                                {thongke_ngay.reverse().map((item, index) => (
                                    <>
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">#</td>
                                            <td className="border border-slate-300 text-center ">
                                                {
                                                    dayjs(item.chieu.ngaychieu).format("DD/MM/YYYY")

                                                }</td>
                                            <td className="border border-slate-300 text-center">{item.total_amount} VNĐ</td>



                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    : null
            }
            {valueCBB === 'Theo phim' ?
                <div className="w-full overflow-x-auto">
                    <table className=" border-separate  border border-slate-400 w-full ">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 text-center ">#</th>
                                <th className="border border-slate-300 text-center ">Phim</th>
                                <th className="border border-slate-300 text-center">Tổng tiền</th>




                            </tr>
                        </thead>
                        <tbody>
                            {thongke_phim.reverse().map((item2, index2) => (
                                <>
                                    <tr key={index2}>
                                        <td className="border border-slate-300 text-center">#</td>
                                        <td className="border border-slate-300 text-center ">
                                            {
                                                item2.chieu.phim.tenphim

                                            }</td>
                                        <td className="border border-slate-300 text-center">{item2.total_amount} VNĐ</td>



                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
                : null
            }
            {valueCBB === 'Theo TTTT' ?
                <div className="w-full overflow-x-auto">
                    <table className=" border-separate  border border-slate-400 w-full ">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 text-center ">#</th>
                                <th className="border border-slate-300 text-center ">Trung tâm thương mại</th>
                                <th className="border border-slate-300 text-center">Tổng tiền</th>




                            </tr>
                        </thead>
                        <tbody>
                            {thongke_cumrap.reverse().map((item3, index3) => (
                                <>
                                    <tr key={index3}>
                                        <td className="border border-slate-300 text-center">#</td>
                                        <td className="border border-slate-300 text-center ">
                                            {
                                                item3.qlcumrap.ten_tttt

                                            }</td>
                                        <td className="border border-slate-300 text-center">{item3.total_amount} VNĐ</td>



                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
                : null
            }
            {
                valueCBB === 'Theo tháng' ?
                    <div className="w-full overflow-x-auto">
                        <table className=" border-separate  border border-slate-400 w-full ">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 text-center ">#</th>
                                    <th className="border border-slate-300 text-center">Tháng chiếu</th>
                                    <th className="border border-slate-300 text-center">Tổng tiền</th>




                                </tr>
                            </thead>
                            <tbody>
                                {thongke_thang.reverse().map((item4, index4) => (
                                    <>
                                        <tr key={index4}>
                                            <td className="border border-slate-300 text-center">#</td>
                                            <td className="border border-slate-300 text-center ">{item4.month}</td>
                                            <td className="border border-slate-300 text-center">{item4.total_amount} VNĐ</td>



                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    : null
            }
            {
                valueCBB === 'Theo tuần' ?
                    <div className="w-full overflow-x-auto">
                        <table className=" border-separate  border border-slate-400 w-full ">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 text-center ">#</th>
                                    <th className="border border-slate-300 text-center">Tuần</th>
                                    <th className="border border-slate-300 text-center">Tổng tiền</th>




                                </tr>
                            </thead>
                            <tbody>
                                {thongke_tuan.reverse().map((item5, index5) => {
                                    d = new Date(item5.chieu.ngaychieu)
                                    d2 = new Date(d.getFullYear(),0,(2+(item5.week-1)*7))
                                    return (
                                        <>
                                            <tr key={index5}>
                                                <td className="border border-slate-300 text-center">#</td>
                                                <td className="border border-slate-300 text-center ">
                                                    {dayjs(d2).format('DD/MM/YYYY')}
                                                </td>
                                                <td className="border border-slate-300 text-center">{item5.total_amount} VNĐ</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    : null
            }
        </div >
    );
};


export default QLDoanhthu;