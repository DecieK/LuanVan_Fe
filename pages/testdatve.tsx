import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTGhe, LayTTchitietve } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const TestDatVe = () => {
  interface Chitetve {
    id: number;
    id_ve: number;
    id_ghe: number;
    Trangthaighe: number;
  }
  interface Ghe {
    id: number;
    maGhe: string;
    loaiGhe: string;

  }

  const [id_ve, setId_ve] = useState(1)
  const [hten_KH, setHten_KH] = useState("");
  const [httt, setHttt] = useState("");
  const [tongtien, setTongtien] = useState(Number);
  const [soluongghe, setSoluongghe] = useState(Number);
  const [ngaymuave, setNgaymuave] = useState("");
  const [id_KH, setId_KH] = useState(Number);
  const [id_ghe, setId_ghe] = useState(Number);
  const [id_suatchieu, setId_suatchieu] = useState(Number);
  const [id_rap, setId_rap] = useState(Number);
  const [id_cumrap, setId_cumrap] = useState(Number);
  const [id_KM, setId_KM] = useState(Number);
  const [id_NV, setId_NV] = useState(Number);
  const [id_doan, setId_doan] = useState(Number);
  const [chitietve, setChitietve] = useState<Chitetve[]>([]);
  const [ghe, setGhe] = useState<Ghe[]>([]);



  const handleDatve = async () => {
    console.log("hoten", hten_KH)
    console.log("httt", httt)
    console.log("tongtien", tongtien)
    console.log("soluongghe", soluongghe)
    console.log("ngaymuave", ngaymuave)
    console.log("id_ghe", id_ghe)
    console.log("id_suatchieu", id_suatchieu)
    console.log("id_rap", id_rap)
    console.log("id_cumrap", id_cumrap)
    console.log("id_KM", id_KM)
    console.log("id_NV", id_NV)
    console.log("id_doan", id_doan)
    console.log("id_KH", id_KH)
    let res = await Datve(
      {
        hten_KH: hten_KH,
        httt: httt,
        tongtien: tongtien,
        soluongghe: soluongghe,
        ngaymuave: ngaymuave,
        id_KH: id_KH,
        id_ghe: id_ghe,
        id_suatchieu: id_suatchieu,
        id_rap: id_rap,
        id_cumrap: id_cumrap,
        id_KM: id_KM,
        id_NV: id_NV,
        id_doan: id_doan
      });
    if (res && res.errCode === 0) {

      console.log(res)
      alert("Đăng ký thành công")

      // handleCloseClick();
    } else {

      console.log(res)
      alert("Đăng ký không thành công")

    };
  }

  const handleLayTTchitietve = async () => {
    try {

      const params = {
        id_ve: id_ve,
      };
      console.log("searchdate", params);
      const response = await LayTTchitietve(params);
      const res: Chitetve[] = response.chitietves;
      console.log("check api searchdate chitietve: ", response);
      console.log("length", res.length);
      setChitietve(res);
      console.log(res)

      // res2.map((res2) => (
      // )
      // );


    } catch (error) {
      console.log(error);
    }
  }

  const handleLayTTGhe = async () => {
    try {

      const params = {
        key: "ALL",
      };
      console.log("searchdate", params);
      const response = await LayTTGhe(params);
      const res: Ghe[] = response.ghes;
      console.log("check api searchdate ghe: ", response);
      console.log("length", res.length);
      setGhe(res);
      console.log(res)

      // res2.map((res2) => (
      // )
      // );


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLayTTchitietve()
    handleLayTTGhe()
    setHten_KH("kjhoa")
    setHttt("onl")
    setTongtien(200000)
    setSoluongghe(2)
    setNgaymuave("8-28-2023")
    setId_KH(1)
    setId_ghe(25)
    setId_suatchieu(5)
    setId_rap(9)
    setId_cumrap(2)
    setId_KM(10)
    setId_NV(10)
    setId_doan(10)
  }, []);


  return (
    <div>
      {/* <Sodoghe /> */}

      {
        ghe.map((ghes) => (
          chitietve.map((chitietves) => {
             let gheVIP = ghes.loaiGhe === 'VIP' ? 'bg-yellow-500' : '';
            return <>

              <button
                key={ghes.id}
                // number a ={ thongtinbenhnhans.id}
                // className=' --{gheVIP} h-14 w-14 items-center m-2' 
                className={`h-14 w-14 items-center m-2 ${gheVIP ? 'bg-amber-100 text-amber-700' : 'bg-slate-500'}`}

              // onChange={handlechange}
              >
                {ghes.maGhe}
              </button>
            </>
          })

        ))

      }


      <button onClick={handleDatve} className=' m-32 flex justify-center items-center border border-red-200 bg-red-500'>Dat</button>
   
    </div>
  );
}

export default TestDatVe;
