import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Dangnhap from "@/Components/Dangnhap";
import { Noto_Serif } from 'next/font/google'
import { Navbar } from "@material-tailwind/react";
import Head from "next/head";
import Link from "next/link";
import { faL, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

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
    createdAt: string;
  }
  const [trangthai, setTrangthai] = useState(Boolean);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [tenKH, setTenKH] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElP, setAnchorElP] = React.useState<null | HTMLElement>(null);
  const openP = Boolean(anchorElP);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseP = () => {
    setAnchorElP(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickP = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElP(event.currentTarget);
  };


  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };
  const handleQuydinh = () => {
    router.push("/quydinh");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleProfile = () => {
    router.push("/profile");
    setAnchorEl(null);
  };

  const handleLichsu = () => {
    router.push("/lichsu");
    setAnchorEl(null);
  };
  const handlePhimdangchieu = () => {
    router.push("/phimdangchieu");
    setAnchorEl(null);
  };
  const handlePhimsapchieu = () => {
    router.push("/phimsapchieu");
    setAnchorEl(null);
  };

  const handleRomoveLocal = () => {
    localStorage.removeItem("khachhang");
    setAnchorEl(null)
    location.reload()
  }
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
      setKhachhang(res)
      res.map((item) => {
        setTenKH(item.Hten_KH)
      });
    }
  }, []);
  return (
    <div >
      <div className="flex w-full h-16 ">
        <div className="w-2/12">
          <div className="  h-14 w-28 bg-cover m-auto bg-[url('../public/logoCGV.png')] cursor-pointer"
            onClick={() => handleHomePage()}></div>
        </div>

        <div className="w-9/12  uppercase text-center font-semibold space-x-14 m-auto">
          <Button
            className=" font-semibold text-gray-800 hover:text-red-500"
            id="basic-button"

            onClick={() => handleHomePage()}
          >
            Trang chủ
          </Button>
          <label>|</label>

          <Button
            className=" font-semibold text-gray-800 hover:text-red-500"
            id="basic-button"
            aria-controls={openP ? 'basic-menuP' : undefined}
            aria-haspopup="true"
            aria-expanded={openP ? 'true' : undefined}
            onClick={handleClickP}
          >
            Phim
          </Button>
          <Menu
            id="basic-menuP"
            anchorEl={anchorElP}
            open={openP}
            onClose={handleCloseP}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handlePhimdangchieu}>Phim đang chiếu</MenuItem>
            <MenuItem onClick={handlePhimsapchieu}>Phim sắp chiếu</MenuItem>
          </Menu>
          <label>|</label>
          <Button
            className=" font-semibold text-gray-800 hover:text-red-500"
            id="basic-button"
          >
            Tin tức & ưu đãi
          </Button>
          <label>|</label>
          <Button
            className=" font-semibold text-gray-800 hover:text-red-500"
            id="basic-button"

            onClick={() => handleQuydinh()}
          >
            Quy định
          </Button>
        </div>

        <div className="w-1/12 m-auto">
          {
            trangthai === true ?
              <div onClick={handleLogin} className="  text-center bg-cover ">
                <FontAwesomeIcon icon={faUser} size="2xl" color="#adb1b8" />

              </div>
              :
              <Button
                className="text-red-500"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {tenKH}
              </Button>
          }
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleProfile}>Hồ sơ cá nhân</MenuItem>
            <MenuItem onClick={handleLichsu}>Lịch sử</MenuItem>
            <MenuItem onClick={handleRomoveLocal}>Đăng xuất</MenuItem>
          </Menu>

        </div>

      </div>
      <hr className="w-full" />
    </div>
  );
};

export default Header;
