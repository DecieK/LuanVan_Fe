import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Modal from "@/pages/Modal";
import Dangnhap from "@/Components/Dangnhap";
import { Noto_Serif } from 'next/font/google'
import { Navbar } from "@material-tailwind/react";
import Head from "next/head";
import Link from "next/link";
import { faL, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
const Header = () => {

  interface Khachhang {
    id: number;
    Hten_KH: string;
    Sdt_KH: string;
    Email_KH: string;
    Ngaysinh_KH: Date;
    Tuoi_KH: number;
    Diachi_KH: string;
    Gioitinh_KH: string;
    Cccd_KH: string;
    Mathethanhvien_KH: number;
    Diemtichluy_KH: number;
    Taikhoan_KH: string;
    Matkhau_KH: string;
  }
  const [trangthai, setTrangthai] = useState(Boolean);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [tenKH, setTenKH] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };



  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLogin = () => {
    router.push("/login");

  };
  useEffect(() => {
    const khachhangs = JSON.parse(
      localStorage.getItem("khachhang") || "{}"
    );
    if (Object.keys(khachhangs).length === 0) {
      setTrangthai(true)
      console.log("true");
    } else {
      setTrangthai(false)
      console.log("false");
      const res: Khachhang[] = khachhangs;
      res.map((item) => {
        setTenKH(item.Hten_KH)
      });
    }
  }, []);
  return (
    <div className={noto_serif.className}>
      <div className="flex w-full h-16 ">
        <div className="w-1/6">
          <div className="  h-14 w-28 bg-cover m-auto bg-[url('../public/logoCGV.png')]"></div>
        </div>

        {/* <div className="w-4/6uppercase text-center uppercase font-semibold space-x-20 m-auto"> */}
        <div className="w-4/6 uppercase text-center font-semibold space-x-20 m-auto">
          <Link href=''
            className="inline-flex items-center"
            onClick={toggleDropdown}
          >
            phim
            <svg className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </Link>

          {isOpen && (
            <div className="origin-top-right absolute mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <li>
                  <Link
                    href="/phimdangchieu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Phim đang chiếu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phimsapchieu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Phim sắp chiếu
                  </Link>
                </li>

              </ul>
            </div>
          )}
          <label>|</label>
          <Link href=''>Rạp CGV</Link>
          <label>|</label>
          <Link href=''>Tin tức & ưu đãi</Link>
          <label>|</label>
          <Link href=''>Quy định</Link>
        </div>

        <div className="w-1/6 m-auto ">
          {
            trangthai === true ?
              <div onClick={handleLogin} className="  text-center bg-cover ">
                <FontAwesomeIcon icon={faUser} size="2xl" color="#adb1b8" />

              </div>
              : tenKH
          }
        </div>

      </div>
      <hr className="w-full" />
    </div>
    // </div>
  );
};

export default Header;
