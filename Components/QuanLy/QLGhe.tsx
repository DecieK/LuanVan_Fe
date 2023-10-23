import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { aborted } from "util";
import { LayTTGhe, LayTTGhe_idrap, LayTTRap_idcumrap, SuaTTGhe, SuaTTRap, ThemTTGhe, XoaTTGhe } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    gheP: any,
    cumrapP: any

};
const QLGhe = ({ gheP, cumrapP }: Props) => {

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
    const [maghe, setMaghe] = useState('');
    const [loaighe, setLoaighe] = useState('');
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);
    const [ghe, setGhe] = useState<Ghe[]>([]);
    const [rap, setRap] = useState<Rap[]>([]);
    const [valueCumrap, setValueCumrap] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [id_cr, setId_cr] = useState(Number);
    const [id_r, setId_r] = useState(Number);
    const [id_g, setId_g] = useState(Number);



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
    const handleLayTTGhe = async (value: string) => {

        setValueRap(value)
        rap.map(async (item) => {
            if (value === item.ten_rap) {
                setId_r(item.id)
                const params = {
                    id_rap: item.id,
                };
                // console.log("searchdate", params);
                const response = await LayTTGhe_idrap(params);
                const res: Ghe[] = response.ghes;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setGhe(res);
            }

        })

    }
    const handleLayTTGheALL = async () => {
        try {
          const params = {
            key: 'ALL',
          };
          // console.log("searchdate", params);
          const response = await LayTTGhe(params);
          const res: Ghe[] = response.ghes;
          // console.log("check api searchdate ghe: ", response);
          // console.log("length", res.length);
          setGhe(res);
          // console.log(res.length)
  
        } catch (error) {
          console.log(error);
        }
      }
    const handleThemTTGhe = async () => {
        console.log("maghe", maghe)
        console.log("loaighe", loaighe)
        console.log("id_r", id_r)

        let res = await ThemTTGhe(
            {
                idr: id_r,
                maghe: maghe,
                loaighe: loaighe
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setMaghe('')
            setLoaighe('')
            // setId_cr()
            handleLayTTGheALL()
            alert("Thêm thông tin ghể mới thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin ghế mới KHÔNG thành thông")

        };
    }
    const handleSuaTTGhe = async (mg: string, lg: string, id: number) => {
        setMaghe(mg)
        setId_g(id)
        setLoaighe(lg)
    }

    const handleCapnhatTTGhe = async () => {

        let res = await SuaTTGhe(
            {
                id: id_g,
                idr: id_r,
                maghe: maghe,
                loaighe: loaighe
            });
        if (res && res.errCode === 0) {

            console.log(res)

            setMaghe('')
            setLoaighe('')
            // setId_cr()
            handleLayTTGheALL()
            alert("Cập nhật thông tin ghể thành thông")


            // handleCloseClick();
        } else {

            console.log(res)
            alert("Cập nhật thông tin ghể KHÔNG thành thông")

        };
    }

    const handleXoaTTGhe = async (id: number) => {
        let res = await XoaTTGhe(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setMaghe('')
            setLoaighe('')
            // setId_cr()
            handleLayTTGheALL()
            alert("Xóa thông tin ghế thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin ghế KHÔNG thành thông")

        };
    }

    useEffect(() => {
        setGhe(gheP)
        setCumrap(cumrapP)
        // const res: Cumrap[] = cumrapP;
        // console.log("ádasd",res)


    }, [cumrapP, gheP])
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
                <Autocomplete
                    value={valueRap}
                    disablePortal
                    id="combo-box-demo"
                    options={rap.map((option) => option.ten_rap)}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? handleLayTTGhe(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Rạp" />}
                />
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Mã ghế</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={maghe}
                        onChange={(event) => setMaghe(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Loại ghế</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={loaighe}
                        onChange={(event) => setLoaighe(event.target.value)}
                    ></input>
                </div>
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                                onClick={() => handleCapnhatTTGhe()}

                    >Cập nhật thông tin</button>
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleThemTTGhe()}
                    >Lưu thông tin</button>
                </div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Mã ghế</th>
                        <th className="border border-slate-300 text-center">Loại ghế</th>
                        <th className="border border-slate-300 text-center">Tên cụm rạp</th>
                        <th className="border border-slate-300 text-center">Rạp</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>



                    </tr>
                </thead>
                <tbody>
                    {ghe.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.maGhe}</td>
                                <td className="border border-slate-300 text-center">{item.loaiGhe}</td>
                                {/* <td className="border border-slate-300 text-center">{valueCumrap}</td> */}
                                <td className="border border-slate-300 text-center">{item.id_rap}</td>

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                        onClick={() => handleSuaTTGhe(item.maGhe, item.loaiGhe, item.id)} />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                    onClick={() => handleXoaTTGhe(item.id)} 
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

export default QLGhe;
