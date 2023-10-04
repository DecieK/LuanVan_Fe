import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Modal from "@/pages/Modal";
import Dangnhap from "@/Components/Dangnhap";
import { Noto_Serif } from 'next/font/google'
import { Navbar } from "@material-tailwind/react";
import Head from "next/head";
import Link from "next/link";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
const Header = () => {
  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLogin = () => {
    router.push("/login");
    
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={noto_serif.className }>
      <div className="flex w-full h-16 ">
        <div className="w-1/6">
          <div className="  h-14 w-28 bg-cover m-auto bg-[url('../public/logoCGV.png')]"></div>
        </div>

        <div className="w-4/6uppercase text-center uppercase font-semibold space-x-20 m-auto">
          <Link href=''>Phim</Link>
          <label>|</label>
          <Link href=''>Rạp CGV</Link>
          <label>|</label>
          <Link href=''>Tin tức & ưu đãi</Link>
          <label>|</label>
          <Link href=''>Quy định</Link>
        </div>

        <div className="w-1/6 ">
          <div onClick={handleLogin} className=" h-14 w-16 m-auto bg-cover bg-[url('../public/login1.jpg')] "></div>
        </div>
        
      </div>
      <hr className="w-full"/>
    </div>

  );
};

export default Header;
