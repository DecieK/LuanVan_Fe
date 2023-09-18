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
  display: 'swap',
})
const Header = () => {
  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLogin = () => {
    router.push("/login");
    console.log("ádasdasd")
    
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


    // <div className="bg-[#f2ba49]">
    //   <div className="">
    //     <div className="grid grid-cols-3 ">
    //       <div className=" col-span-1 h-[50px] w-[100px] bg-no-repeat ml-[20px]  bg-[url('../public/logoCGV1.png')]"></div>
    //       <div className="text-center grid grid-cols-3 mt-2">
    //         <div className="col-span-1 hover:text-blue-300 text-2xl">Phim</div>
    //         <div className="col-span-1 hover:text-blue-300 text-2xl">Cụm rạp</div>
    //         <div className="col-span-1 hover:text-blue-300 text-2xl">Tin tức</div>
    //       </div>
    //       <div onClick={() => setShowModal(true)} className="col-span-1 right-10 absolute top-0 h-[50px] w-[50px] bg-no-repeat bg-[url('../public/login1.jpg')]"></div>
    //     </div>
    //   </div>
    //   <hr className="mt-3" />
    //   <Dangnhap 
    //     onClose={() => setShowModal(false)}
    //     show={showModal}
    //   ></Dangnhap>
    // </div>

  );
};

export default Header;
