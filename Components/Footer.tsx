import React from "react";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    // <div className="grid grid-cols-4">

    <div className="mt-1">
      <hr></hr>
      <div className="flex">
        <div className="h-[135px] w-[250px] bg-no-repeat ml-[20px]  bg-[url('../public/logoFooter2.jpg')]"></div>
        <div className="text-[#636363]  ">
          <p className=" font-bold pl-20">CÔNG TY TNHH CJ CGV VIETNAM</p>
          <p className="">Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.<br></br>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.<br></br>Hotline: 1900 6017<br></br>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
        </div>
      </div>
      <img src="../public/logoFooter2.jpg"></img>
    </div>
  );
};

export default Footer;
{/* <div className="mt-1">
      <hr></hr>
      <div className="flex">
        <div className="h-[135px] w-[250px] bg-no-repeat ml-[20px]  bg-[url('../public/logoFooter2.jpg')]"></div>
        <div className="text-[#636363]  ">
          <p className=" font-bold pl-20">CÔNG TY TNHH CJ CGV VIETNAM</p>
          <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.<br></br>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.<br></br>Hotline: 1900 6017<br></br>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
        </div>
      </div>
    </div> */}