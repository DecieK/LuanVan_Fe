// import SearchResults from "@/components/SearchResults";
import Header from "@/Components/Header";
// import Test from "./test";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Slide";
import DSPhim from "@/Components/DSPhim";
import router from "next/router";

const index = () => {
  const handleLogin = () => {
    router.push("/login");
    console.log("hello")
  };
  return (

    <div>
      {/* <Image
        src="/logo.png"
        alt="Picture of the author"
        width={200 }
        height={500}
      /> */}

      {/* <div className=" fill bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div>
      <div className="object-fill bg-no-repeat bg-[url('https://i.pinimg.com/564x/d2/0f/27/d20f27b5f6835a2936755850e4e8e69d.jpg')]"> </div> */}
      {/* <div className=" h-[300px] w-[564px] bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div>
      <div className=" h-[864px] w-[564px] bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div>
      <div className=" h-[864px] w-[564px] bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div>
      <div className=" h-[864px] w-[564px] bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div>
      <div className=" h-[864px] w-[564px] bg-no-repeat bg-[url('https://i.pinimg.com/564x/d1/b8/71/d1b871cfa171334d1d20bf9c9bf357c5.jpg')]"> </div> */}
      <Header />
      {/* <div className="flex">
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster2.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster3.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster4.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster5.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/p.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster6.jpg')]"> </div>
        <div className=" h-[518px] w-[350px] object-cover bg-no-repeat bg-[url('../public/poster7.jpg')]"> </div>





      </div> */}
      <Slide />
      <DSPhim />
      <Footer />
      <div onClick={handleLogin}>click</div>

    </div>

  )
}
export default index;
