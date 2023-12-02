import { Noto_Serif } from 'next/font/google'
import Combobox from "react-widgets/Combobox";
import { Checkbox } from "@nextui-org/react";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { DangKy_KH, Kiemtrataikhoan } from '@/service/userService';
import { useRouter } from 'next/router';
import auth from "./firebase";
import firebase from "firebase";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Register = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [hten_KH, setHten_KH] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");
  const [gt_KH, setGT_KH] = useState("");
  const [sdt_KH, setSdt_KH] = useState("");
  const [cccd_KH, setCccd_KH] = useState("");
  const [email_KH, setEmail_KH] = useState("");
  const [diachi_KH, setDiachi_KH] = useState("");
  // const [email_KH, setTaikhoan_KH] = useState("");
  const [matkhau_KH, setMatkhau_KH] = useState("");




  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const onChangeGT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGT_KH(e.target.value)
  }

  const handleDangKy = async () => {

    console.log("hoten", hten_KH)
    console.log("Ngaysinh", Ngaysinh)
    console.log("gt", gt_KH)
    console.log("sdt_KH", sdt_KH)
    console.log("cccd_KH", cccd_KH)
    console.log("email_KH", email_KH)
    console.log("diachi_KH", diachi_KH)
    // console.log("taikhoan_KH", taikhoan_KH)
    console.log("matkhau_KH", matkhau_KH)
    try {
      const params = {
        key: email_KH,
      };
      // console.log("searchdate", params);
      const response = await Kiemtrataikhoan(params);
      // setThongke_tuan(response.thongke)
      console.log("check api searchdate handleThongke_Tuan: ", response.check);
      if (response.check.errCode === 0) {
        let dangkykh = {
          TTdangkykh: [
            {
              hten_KH: hten_KH,
              Ngaysinh: Ngaysinh,
              gt_KH: gt_KH,
              sdt_KH: sdt_KH,
              cccd_KH: cccd_KH,
              email_KH: email_KH,
              diachi_KH: diachi_KH,
              // taikhoan_KH: taikhoan_KH,
              matkhau_KH: matkhau_KH

            }
          ]
        }
        localStorage.setItem('dangkykh', JSON.stringify(dangkykh.TTdangkykh)); 
        alert('Vui lòng xác nhận email để tạo tài khoản')
      }else(
        alert(response.check.errMessage)
      )
    } catch (error) {
      console.log(error);
    }


    // let res = await DangKy_KH(
    //   {
    //     hten_KH: hten_KH,
    //     Ngaysinh: Ngaysinh,
    //     gt_KH: gt_KH,
    //     sdt_KH: sdt_KH,
    //     cccd_KH: cccd_KH,
    //     email_KH: email_KH,
    //     diachi_KH: diachi_KH,
    //     // taikhoan_KH: taikhoan_KH,
    //     matkhau_KH: matkhau_KH

    //   });
    // if (res && res.errCode === 0) {
    //   console.log(res)
    //   alert("Đăng ký thành công")

    // } else {
    //   console.log(res)
    //   alert("Đăng ký không thành công")

    // };
  }


  const router = useRouter();
  const handleBackPage = () => {
    router.push("/");
    console.log("asdasd")
    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  };
  return (
    <div className={noto_serif.className}>
      <div className="pt-5 w-full h-screen">
        <form className="text-white m-auto text-sm  w-[450px]   bg-gray-500 rounded-xl">
          <h1 className="text-center uppercase text-3xl pt-6 ">Register</h1>
          <div className='w-11/12 m-auto'>
            <div className='flex pb-8'>
              <p className='w-3/12'>Email:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setEmail_KH(event.target.value)}
              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>Mật khẩu:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setMatkhau_KH(event.target.value)}

              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>Họ và tên:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setHten_KH(event.target.value)}

              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>Ngày sinh:</p>
              <input type="Date" placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setNgaysinh(event.target.value)}

              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>Giới tính:</p>
              <input onChange={onChangeGT} type="radio" value="Nam" name='gt' checked={gt_KH === "Nam"} className="ml-5" />Nam
              <input onChange={onChangeGT} type="radio" value="Nu" name='gt' checked={gt_KH === "Nu"} className="ml-5" />Nữ
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>Địa chỉ:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setDiachi_KH(event.target.value)}

              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-3/12'>CCCD:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setCccd_KH(event.target.value)}

              ></input>
            </div>
            <div className='flex pb-8'>
              <p className='w-4/12'>Số điện thoại:</p>
              <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white outline-none"
                onChange={(event) => setSdt_KH(event.target.value)}

              ></input>
            </div>
            <button type='button' className="uppercase w-full h-8 mt-6 bg-green-600"
              onClick={handleDangKy}

            >Đăng kí</button>
            <div className='flex pt-5 pb-6'>
              <ArrowBackIcon />
              <button onClick={handleBackPage} className="text-left  ">Trở về</button>
            </div>

          </div>

        </form>
      </div>
    </div>

  );
};

export default Register;
