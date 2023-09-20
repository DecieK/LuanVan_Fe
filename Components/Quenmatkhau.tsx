import React from "react";
import styles from "@/styles/Home.module.css";
import { Noto_Serif } from 'next/font/google'
import Link from "next/link";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Quenmatkhau = () => {
  return (
    <div className={noto_serif.className }>
        <center>
            <div className="h-60 w-96 mt-20 border-2 border-green-500">
                <p className="text-2xl pt-5">Tạo mật khẩu mới</p>
                <input className="h-8 w-64 text-sm pl-2 mt-5 border-2 border-gray-300" placeholder="Nhập mật khẩu"/>
                <input className="h-8 w-64 text-sm pl-2 mt-5 border-2 border-gray-300" placeholder="Nhập lại mật khẩu"/>
                <button className="h-8 w-36 mt-5 uppercase font-bold hover:bg-green-600">xác nhận</button>
            </div>
            <div className="h-60 w-96 mt-20 border-2 border-green-500">
                <p className="text-2xl pt-10">Bạn quên mật khẩu?</p>
                <input className="h-8 w-64 text-sm pl-2 mt-8 border-2 border-gray-300" placeholder="Nhập email hoặc số điện thoại"/>
                <button className="h-8 w-36 mt-8 uppercase font-bold hover:bg-green-600">gửi</button>
            </div>
            <div className="h-60 w-96 mt-20 border-2 border-green-500">
                <p className="text-2xl pt-10">Bạn quên mật khẩu?</p>
                <input className="h-8 w-64 text-sm pl-2 mt-8 border-2 border-gray-300" placeholder="Nhập OTP"/>
                <button className="h-8 w-36 mt-8 uppercase font-bold hover:bg-green-600">xác nhận</button>
            </div>
        </center>
    </div>
 
  );
};

export default Quenmatkhau;
