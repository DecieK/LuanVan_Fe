import React from "react";
import styles from "@/styles/Home.module.css";
import { Noto_Serif } from 'next/font/google'
import Link from "next/link";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Footer = () => {
  return (
    <div className={noto_serif.className }>
      <hr className="border-1 border-black mt-12"/>
      <div className="grid lg:grid-cols-4 grid-cols-2 w-4/5 gap-3 m-auto  mt-3 text-sm text-gray-700">
        <div className="col-span-1   list-none capitalize space-y-2">
          <p className="font-bold">CGV Việt Nam</p>
          <li><Link href=''>Giới thiệu</Link></li>
          <li><Link href=''>tiện ích online</Link></li>
          <li><Link href=''>thẻ quà tặng</Link></li>
          <li><Link href=''>tuyển dụng</Link></li>
          <li><Link href=''>liên hệ quảng cáo CGV</Link></li>
        </div>
        <div className="col-span-1  list-none capitalize space-y-2">
          <p className="font-bold">điều khoản sử dụng</p>
          <li><Link href=''>điều khoản chung</Link></li>
          <li><Link href=''>điều khoản giao dịch</Link></li>
          <li><Link href=''>chính sách thanh toán</Link></li>
          <li><Link href=''>chính sách bảo mật</Link></li>
          <li><Link href=''>câu hỏi thường gặp</Link></li>
        </div>
        <div className="col-span-1">
          <p className="font-bold">Kết nối với chúng tôi</p>
        </div>
        <div className="col-span-1 space-y-2">
          <p className="font-bold">Chăm sóc khách hàng</p>
          <p>Hotline: 19006017</p>
          <p>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
          <p>Email hỗ trợ: hoidap@cgv.vn</p>
        </div>
      </div>
      <hr className="border-1 border-black"/>
      <div className="w-4/5  m-auto flex items-center text-xs text-gray-700">
        <div className="h-[120px] w-[300px] bg-cover  bg-[url('../public/logoFooter2.jpg')]"></div>
        <div className="pl-5 space-y-2">
          <p className="uppercase font-bold">công ty tnhh cj cgv vietnam</p>
          <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/07/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT Thành Phố Hồ Chí Minh</p>
          <p>Địa chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM</p>
          <p>Hotline: 19006017</p>
          <p className="uppercase">copyright 2017 cj cgv. all rights reserved.</p> 
        </div>
        
      </div>
    </div>
    // <div className="grid grid-cols-4">

    // <div className="mt-1">
    //   <hr></hr>
    //   <div className="flex">
    //     <div className="h-[135px] w-[250px] bg-no-repeat ml-[20px]  bg-[url('../public/logoFooter2.jpg')]"></div>
    //     <div className="text-[#636363]  ">
    //       <p className=" font-bold pl-20">CÔNG TY TNHH CJ CGV VIETNAM</p>
    //       <p className="">Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.<br></br>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.<br></br>Hotline: 1900 6017<br></br>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
    //     </div>
    //   </div>
    // </div>
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