// import SearchResults from "@/components/SearchResults";
import Header from "@/Components/Header";
// import Test from "./test";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Slide";
import DSPhim from "@/Components/DSPhim";
import router from "next/router";
import QuenMk from "@/Components/QuenMK";
import { useEffect, useState } from "react";
import Dangnhap from "@/Components/Dangnhap";
import Quenmatkhau from "@/Components/Quenmatkhau";
import MySlider from "./MySlider";
import ThemTTphim from "@/Components/ThemTTphim";
import UploadVideos from "@/Components/UpLoadVideos";
import { LayTTPhim } from "@/service/userService";

const index = () => {
  const handleLogin = () => {
    router.push("/login");
    console.log("hello")
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModalQuenMk, setShowModalQuenMK] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks


  return (

    <div>

      <Header />

      <Slide />
      <MySlider/>
      <MySlider/>
      {/* <Slide /> */}
      
      {/* <ThemTTphim /> */}

      <Footer />
 </div>

  )
}
export default index;
