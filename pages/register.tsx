import { Noto_Serif } from 'next/font/google'
import Combobox from "react-widgets/Combobox";
import { Checkbox } from "@nextui-org/react";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { DangKy_KH } from '@/service/userService';
import { useRouter } from 'next/router';
import auth from "./firebase";
import firebase from "firebase";


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
    let res = await DangKy_KH(
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

      });
    if (res && res.errCode === 0) {
      console.log(res)
      alert("Đăng ký thành công")

    } else {
      console.log(res)
      alert("Đăng ký không thành công")

    };
  }
  // const signup = () => {
  //   auth.createUserWithEmailAndPassword(email_KH, matkhau_KH)
  //     .then((userCredential) => {
  //       // send verification mail.
  //       if (userCredential.user) {
  //         handleDangKy()
  //         userCredential.user.sendEmailVerification()
  //           .then(function (response) {
  //             console.log(response);
  //             console.log("Successfully logged in.")
  //             // router.push("/");
  //           })
  //           .catch(function (error) {
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             console.log(errorCode);
  //             console.log(errorMessage);
  //           });
  //       }
  //       auth.signOut();
  //       alert("Email sent");
  //       // console.log('>>> 11')
  //     })
  //     .catch(alert);

  // };


  const router = useRouter();
  const handleBackPage = () => {
    router.push("/");
    console.log("asdasd")

  };
  return (
    <div className={noto_serif.className}>
      <div className="pt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
        <form className="text-black m-auto text-sm h-auto w-[450px] bg-yellow-900 bg-opacity-20 rounded-xl leading-normal">
          <h1 className="text-center uppercase text-3xl pt-6 ">Register</h1>
          <div className="pl-6">
            <p>Email:</p>
            <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white"
              onChange={(event) => setEmail_KH(event.target.value)}
            ></input>

            <p>Mật khẩu:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setMatkhau_KH(event.target.value)}

            ></input>

            {/* <p>Xác nhận lại mật khẩu:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input> */}

            <p>Họ và tên:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setHten_KH(event.target.value)}

            ></input>

            <p>Ngày sinh:</p>
            <input type="Date" placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setNgaysinh(event.target.value)}

            ></input>
            <div className="flex">
              <p>Giới tính:</p>
              <input onChange={onChangeGT} type="radio" value="Nam" name='gt' checked={gt_KH === "Nam"} className="ml-5" />Nam
              <input onChange={onChangeGT} type="radio" value="Nu" name='gt' checked={gt_KH === "Nu"} className="ml-5" />Nữ
            </div>

            {/* <p>Địa chỉ:</p>
            <div className="flex">
              <Combobox placeholder="Tỉnh/Thành Phố" className="mr-5"
              />
              <Combobox placeholder="Quận/Huyện" />
            </div> */}
            <p>Địa chỉ:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setDiachi_KH(event.target.value)}

            ></input>

            {/* <p>Email:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setEmail_KH(event.target.value)}

            ></input> */}

            <p>Căn cước công dân:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setCccd_KH(event.target.value)}

            ></input>

            <p>Số điện thoại:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300"
              onChange={(event) => setSdt_KH(event.target.value)}

            ></input>

            <button type='button' className="uppercase w-[90%] h-8 mt-6 mb-6 bg-green-600"
              onClick={handleDangKy}

            >Đăng kí</button>
            <button onClick={handleBackPage} className="text-left pt-3 "
            >Trở về</button>
            {/* <button onClick={() => Router.back()} className="text-left pt-3 ">Trở về</button> */}
          </div>

        </form>
      </div>
    </div>

  );
};

export default Register;
