import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import router, { useRouter } from "next/router";
import Modal from "@/pages/Modal";
import Dangnhap from "@/Components/Dangnhap";
import { Noto_Serif } from 'next/font/google'
import { Navbar } from "@material-tailwind/react";
import Head from "next/head";
import Link from "next/link";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Header = () => {
  // const router = useRouter();



  const handleLogin = () => {
    router.push("/login");
    // console.log("ádasdasd")
    
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={noto_serif.className }>
      <div>
        <div className="flex bg-[#ffe4d5] h-16 w-full">
          <div className="  h-16 w-28 bg-cover  bg-[url('../public/logoCGV.png')]"></div>
          <div className="uppercase flex w-5/6 justify-center items-center space-x-5">
            <Link href=''>Phim</Link>
            <Link href=''>Rạp CGV</Link>
            <Link href=''>Tin tức & ưu đãi</Link>
            <Link href=''>Quy định</Link>
          </div>
          <div onClick={handleLogin} className="h-16 w-16 bg-cover bg-[url('../public/login1.jpg')] float-right"></div>
          
        </div>
      </div>
    </div>

  );
};

export default Header;
