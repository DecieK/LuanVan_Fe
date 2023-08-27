import { Datve } from '@/service/userService';
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
        // console.log("hoten", hten_KH)
        // console.log("Ngaysinh", Ngaysinh)
        // console.log("gt", gt_KH)
        // console.log("sdt_KH", sdt_KH)
        // console.log("cccd_KH", cccd_KH)
        // console.log("email_KH", email_KH)
        // console.log("diachi_KH", diachi_KH)
        // console.log("taikhoan_KH", taikhoan_KH)
        // console.log("matkhau_KH", matkhau_KH)
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

    });


    return (
        <div>
            <button className=' m-32 flex justify-center items-center border border-red-200 bg-red-500'>Dat</button>
        </div>
    );
}

export default TestDatVe;
