import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Modal from "@/pages/Modal";
import Dangnhap from "@/Components/Dangnhap";

const Header = () => {
  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLogin = () => {
    // router.push("/login");
    
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#f2ba49]">
      <div className="">
        <div className="grid grid-cols-3 ">
          <div className=" col-span-1 h-[50px] w-[100px] bg-no-repeat ml-[20px]  bg-[url('../public/logoCGV1.png')]"></div>
          <div className="text-center grid grid-cols-3 mt-2">
            <div className="col-span-1 hover:text-blue-300 text-2xl">Phim</div>
            <div className="col-span-1 hover:text-blue-300 text-2xl">Cụm rạp</div>
            <div className="col-span-1 hover:text-blue-300 text-2xl">Tin tức</div>
          </div>
          <div onClick={() => setShowModal(true)} className="col-span-1 right-10 absolute top-0 h-[50px] w-[50px] bg-no-repeat bg-[url('../public/login1.jpg')]"></div>
        </div>
      </div>
      <hr className="mt-3" />
      <Dangnhap 
        onClose={() => setShowModal(false)}
        show={showModal}
      ></Dangnhap>
    </div>

  );
};

export default Header;
