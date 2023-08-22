import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-3 ">
          <div className=" col-span-1 h-[50px] w-[100px] bg-no-repeat ml-[20px]  bg-[url('../public/logoCGV1.png')]"></div>
          <div className="text-center grid grid-cols-3 mt-2">
            <div className="col-span-1 hover:text-blue-300 text-2xl">Phim</div>
            <div className="col-span-1 hover:text-blue-300 text-2xl">Cụm rạp</div>
            <div className="col-span-1 hover:text-blue-300 text-2xl">Tin tức</div>
          </div>
          <div className="col-span-1 right-10 absolute top-0 h-[50px] w-[50px] bg-no-repeat bg-[url('../public/login1.jpg')]"></div>
        </div>
      </div>
      <hr className="mt-3" />
    </div>

  );
};

export default Header;
