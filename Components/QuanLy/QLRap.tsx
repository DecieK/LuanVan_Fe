import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { LayTTCumrap, LayTTRap_idcumrap, SuaTTRap, ThemTTRap, XoaTTRap } from "@/service/userService";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    cumrapP: any
    rapP: any

};
const QLRap = () => {

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
    const [tenrap, setTenrap] = useState('');
    const [slg, setSlg] = useState('');
    const [cumrap, setCumrap] = useState<Cumrap[]>([]);
    const [ghe, setGhe] = useState<Ghe[]>([]);
    const [rap, setRap] = useState<Rap[]>([]);
    const [valueCumrap, setValueCumrap] = useState('');
    const [valueRap, setValueRap] = useState('');
    const [id_rap, setId_rap] = useState(Number);
    const [id_cr, setId_cr] = useState(Number);
    const [step, setStep] = useState("them");

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
    const handleThemTTRap = async () => {
        console.log("tenTTTT", tenrap)
        console.log("diachi", slg)
        console.log("diachi", id_cr)

        let res = await ThemTTRap(
            {
                id_cr: id_cr,
                tenrap: tenrap,
                slg: Number(slg)
            });
        if (res && res.errCode === 0) {
            console.log(res)

            setSlg('')
            setTenrap('')
            // setId_cr()
            handleLayttRap(valueCumrap)
            alert("Thêm thông tin rạp mới thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin rạp mới KHÔNG thành công")

        };
    }

    const handleCapnhatTTRap = async () => {

        let res = await SuaTTRap(
            {
                id: id_rap,
                id_cr: id_cr,
                tenrap: tenrap,
                slg: Number(slg)
            });
        if (res && res.errCode === 0) {

            setSlg('')
            setTenrap('')
            // setId_cr()
            setStep('them')
            handleLayttRap(valueCumrap)
            alert("Cập nhật thông tin rạp thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Cập nhật thông tin rạp KHÔNG thành công")

        };
    }

    const handleXoaTTRap = async (id: number) => {
        let res = await XoaTTRap(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            // console.log(res)
            setSlg('')
            setTenrap('')
            // setId_cr()
            handleLayttRap(valueCumrap)
            alert("Xóa thông tin rạp thành công")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Xóa thông tin rạp KHÔNG thành công")

        };
    }
    const handleSuaTTRap = async (ten: string, slg: number, id: number, idcr : number) => {
        setTenrap(ten)
        setId_rap(id)
        setSlg(slg.toString())
       setId_cr(idcr)
       cumrap.map((cr)=>{
        if(cr.id===idcr){
            setValueCumrap(cr.ten_tttt)
        }
       })
        setStep("capnhat")
    }

    useEffect(() => {
        const handleLayTTRap = async () => {
            try {
              const params = {
                key: 'ALL',
              };
              // console.log("searchdate", params);
              const response = await LayTTRap_idcumrap(params);
              const res: Rap[] = response.raps;
              // console.log("check api searchdate ghe: ", response);
              // console.log("length", res.length);
              setRap(res);
      
            } catch (error) {
              console.log(error);
            }
          }
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
          handleLayTTRap()
          handleLayTTCumrap()

    }, [])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <div className=" flex  justify-center gap-3">
                <Autocomplete
                className=""
                    disablePortal
                    id="combo-box-demo"
                    options={cumrap.map((option) => option.ten_tttt)}
                    value={valueCumrap}
                    onChange={(event: any, newValue: string | null) => {
                        // {newValue ? setValueCumrap(newValue) : null}
                        { newValue ? handleLayttRap(newValue) : null }

                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Trung tâm thương mại" />}
                />

                <div className="flex space-x-5 basis-4/12 pt-2 ">
                    <p className="basis-[20%] pt-1">Tên rạp</p>
                    <input placeholder="" className="w-[60%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setTenrap(event.target.value)}
                        value={tenrap}
                    ></input>
                </div>
                <div className="flex space-x-5  basis-4/12 pt-2 ">
                    <p className="basis-[30%] pt-1">Số lượng ghế</p>
                    <input placeholder="" type="number" min={1} className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        onChange={(event) => setSlg(event.target.value)}
                        value={slg}
                    ></input>
                </div>
                
            </div>
            <div className="w-8/12 pt-7">
                    {step === "them" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                            onClick={() => handleThemTTRap()}
                        >Lưu thông tin</button>
                    )
                    }
                    {step === "capnhat" &&
                        (
                            <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                            onClick={()=>handleCapnhatTTRap()}
                            >Cập nhật thông tin</button>
                    )
                    }
                </div>

            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên rạp</th>
                        <th className="border border-slate-300 text-center">Số lượng ghế</th>
                        <th className="border border-slate-300 text-center">Tên cụm rạp</th>
                        {/* <th className="border border-slate-300 text-center">Rạp</th> */}
                        <th className="border border-slate-300 text-center">Tác vụ</th>



                    </tr>
                </thead>
                <tbody>
                    {rap.reverse().map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.ten_rap}</td>
                                <td className="border border-slate-300 text-center">{item.slghe}</td>
                                <td className="border border-slate-300 text-center">{

                                    cumrap.map((cr)=> cr.id === item.id_cumrap ? cr.ten_tttt : null)
                                }</td>
                                {/* <td className="border border-slate-300 text-center">{valueRap ? valueRap : }</td> */}

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                     onClick={() => handleSuaTTRap(item.ten_rap, item.slghe, item.id, item.id_cumrap)} />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }} 
                                    onClick={() => handleXoaTTRap(item.id)} 
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

export default QLRap;
