import { Datve } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const TestDatVe = () => {

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

  useEffect(() => {
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
  });


  return (
    <div>
      <button onClick={handleDatve} className=' m-32 flex justify-center items-center border border-red-200 bg-red-500'>Dat</button>
    </div>
  );
}

export default TestDatVe;
