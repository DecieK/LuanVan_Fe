// import SearchResults from "@/components/SearchResults";
import Header from "@/Components/Header";
// import Test from "./test";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Slide";
import DSPhim from "@/Components/DSPhim";
import router from "next/router";
import { useEffect, useState } from "react";
import MySlider from "../Components/MySlider";
import ThemTTphim from "@/Components/ThemTTphim";
import Blog from "@/Components/Blog";
import Phim from "@/Components/Phim";


const index = () => {


  const handleLogin = () => {
    router.push("/login");
    console.log("hello")
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModalQuenMk, setShowModalQuenMK] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // console.log("adas",_GET['vnp_ResponseCode'])
  return (

    <div>

      <Header />
      <MySlider />
      {/* <p>Phim đăng chiếu | Phim sắp chiếu</p> */}
      <Phim />
      <Blog />
      <Footer />

      <ThemTTphim />
      {/* <Sodoghe id_phimP={1} id_rapP={1} ngaychieuP={2023-10-20} /> */}
    </div>

  )
}
export default index;
