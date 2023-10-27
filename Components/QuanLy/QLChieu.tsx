import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTRap_idcumrap, SuaTTChieu, ThemTTChieu, XoaTTChieu, layTTChieu } from "@/service/userService";
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
const QLChieu = ({ suatchieuP, rapP, phimP, chieuP }: Props) => {
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
    const [ngaychieu, setNgaychieu] = useState(new Date());
    const [giave, setGiave] = useState('');
    const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
    const [rap, setRap] = useState<Rap[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [chieu, setChieu] = useState<Chieu[]>([]);

    const [valuePhim, setValuePhim] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [valueSuatchieu, setValueSuatchieu] = useState('');
    const [id_p, setId_p] = useState(Number);
    const [id_r, setId_r] = useState(Number);
    const [id_sc, setId_sc] = useState(Number);
    const [id_c, setId_c] = useState(Number);
    const [startDate, setStartDate] = useState(new Date());
    const [DSngaychieus, setDSngaychieus] = useState([
        {
            id: 0,
            ngaychieu: new Date(),

        },
    ])

    const handleLayTTChieu = async () => {
        try {
            const params = {
                ngaychieu: 'ALL',
                id_phim: 'ALL',
                id_rap: 'ALL'

            };
            // console.log("searchdate", params);
            const response = await layTTChieu(params);
            const res: Chieu[] = response.ttchieu;
            console.log("check api searchdate chieu: ", response);
            // console.log("length", res.length);
            setChieu(res);
            res.map((res) => {
                console.log("asdasdasdas", res.ngaychieu.getDate())
            })


        } catch (error) {
            console.log(error);
        }
    }

    const handleLayTTPhim = (value: string) => {
        setValuePhim(value)
        // setValueRap('')
        phim.map(async (item) => {
            if (value === item.tenphim) {
                setId_p(item.id)
            }
        })
    }
    const handleLayTTRap = (value: string) => {
        setValueRap(value)
        // setValueRap('')
        rap.map(async (item) => {
            if (value === item.ten_rap) {
                setId_r(item.id)
            }
        })
    }
    const handleLayTTSuatchieu = (value: string) => {
        setValueSuatchieu(value)
        // setValueRap('')
        suatchieu.map(async (item) => {
            if (value === (item.giobatdau + ' - ' + item.gioketthuc)) {
                setId_sc(item.id)
            }
        })
    }

    const handleThemTTChieu = async () => {
        console.log("ngaychieu", ngaychieu)
        console.log("giave", giave)
        console.log("id_r", id_r)
        console.log("id_p", id_p)
        console.log("id_sc", id_sc)

        let res = await ThemTTChieu(
            {
                ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                giave: Number(giave),
                idr: id_r,
                idp: id_p,
                idsc: id_sc
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setNgaychieu(new Date())
            setGiave('')
            // setId_cr()
            handleLayTTChieu()
            alert("Thêm thông tin chiếu mới thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin chiếu mới KHÔNG thành thông")

        };
    }

    const handleCapnhatTTChieu = async () => {
        console.log("ngaychieu", ngaychieu)
        console.log("giave", giave)
        console.log("id_r", id_r)
        console.log("id_p", id_p)
        console.log("id_sc", id_sc)
        let res = await SuaTTChieu(
            {
                ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                giave: Number(giave),
                idr: id_r,
                idp: id_p,
                idsc: id_sc,
                id: id_c
            });
        if (res && res.errCode === 0) {

            console.log(res)

            setNgaychieu(new Date())
            setGiave('')
            // setId_cr()
            handleLayTTChieu()
            alert("Cập nhật thông tin chiếu mới thành thông")


            // handleCloseClick();
        } else {

            console.log(res)
            alert("Cập nhật thông tin chiếu KHÔNG thành thông")

        };
    }

    const handleXoaTTChieu = async (id: number) => {
        let res = await XoaTTChieu(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            console.log(res)

            setNgaychieu(new Date())
            setGiave('')
            // setId_cr()
            handleLayTTChieu()
            alert("Xóa thông tin chiếu mới thành thông")
        } else {

            console.log(res)
            alert("Xóa thông tin chiếu KHÔNG thành thông")

        };
    }
    const handleSuaTTChieu = async (ngay: Date, gv: number, id: number, idp: number, idr: number, idsc: number) => {
        let date1 = new Date(ngay)
        setId_c(id)

        setNgaychieu(date1)
        setGiave(gv.toString())
        phim.map((item) => {
            if (idp === item.id) {
                setValuePhim(item.tenphim)
                setId_p(item.id)
            }
        })
        rap.map((item) => {
            if (idr === item.id) {
                setValueRap(item.ten_rap)
                setId_r(item.id)
            }
        })
        suatchieu.map((item) => {
            if (idsc === item.id) {
                setId_sc(item.id)
                setValueSuatchieu(item.giobatdau + ' - ' + item.gioketthuc)
            }
        })
    }



    useEffect(() => {
        DSngaychieus.map((item)=>{
            if(item.id === 0){
                DSngaychieus.splice(0, DSngaychieus.length)
            }
        })
        setSuatchieu(suatchieuP)
        setPhim(phimP)
        setRap(rapP)
        setChieu(chieuP)
        const res: Chieu[] = chieuP
        res.map((item)=>{
            DSngaychieus.push({
                id: item.id,
                ngaychieu: item.ngaychieu
            })
        })

    }, [DSngaychieus, chieuP, phimP, rapP, suatchieuP])
    return (
        <div>
            <div className="space-y-5">
                <Autocomplete
                    value={valuePhim}
                    disablePortal
                    id="combo-box-demo"
                    options={phim.map((option) => option.tenphim)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? handleLayTTPhim(newValue) : null }

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
                        { newValue ? handleLayTTRap(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Rạp" />}
                />
                <Autocomplete
                    value={valueSuatchieu}
                    disablePortal
                    id="combo-box-demo"
                    options={suatchieu.map((option) => (option.giobatdau + " - " + option.gioketthuc))}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? handleLayTTSuatchieu(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Suất chiếu" />}
                />

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Ngày chiếu</p>
                    <DatePicker
                        className=""
                        // type="datetime"
                        selected={ngaychieu}
                        // onChange={handlSearchLichkham}
                        // onChange={(date: Date) => handleLayTTChieu(date)}
                        onChange={(date: Date) => setNgaychieu(date)}
                        // onChange={(date: Date) => handlSearchDate((date))}
                        dateFormat="dd/MM/yyyy"
                    />
                    {/* <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setNgaychieu(event.target.value)}
                    ></input> */}
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Giá vé</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={giave}
                        onChange={(event) => setGiave(event.target.value)}
                    ></input>
                </div>
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleCapnhatTTChieu()}
                    >Cập nhật thông tin</button>
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleThemTTChieu()}
                    >Lưu thông tin</button>
                </div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên phim</th>
                        <th className="border border-slate-300 text-center">Tên rạp</th>
                        <th className="border border-slate-300 text-center">Thời gian chiếu</th>
                        <th className="border border-slate-300 text-center">Ngày chiếu</th>
                        <th className="border border-slate-300 text-center">Giá vé</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>

                    </tr>
                </thead>
                <tbody>
                    {chieu.map((item, index) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        phim.map((p) => p.id === item.id_phim ? p.tenphim : null)
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        rap.map((r) => r.id === item.id_rap ? r.ten_rap : null)
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        suatchieu.map((sc) => sc.id === item.id_suatchieu ? sc.giobatdau + " - " + sc.gioketthuc : null)
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        dayjs(item.ngaychieu).format("DD/MM/YYYY")
                                    }   
                                </td>
                                <td className="border border-slate-300 text-center">{item.giave} VNĐ</td>
                                {/* <td className="border border-slate-300 text-center">{item.giave }</td> */}

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                        onClick={() => handleSuaTTChieu(item.ngaychieu, item.giave, item.id, item.id_phim, item.id_rap, item.id_suatchieu)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                        onClick={() => handleXoaTTChieu(item.id)}

                                    />
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={handleLayTTChieu}>click</button> */}
        </div>
    );
};

export default QLChieu;
