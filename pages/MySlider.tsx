import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import script from "next/script";
import { LayTTPhim } from "@/service/userService";
import { useEffect, useState } from "react";



const data = [
  { imgg: "/poster1.jpg" },
  { imgg: "/poster2.jpg" },
  { imgg: "/poster3.jpg" },
  { imgg: "/poster4.jpg" },
  { imgg: "/poster5.jpg" },
  { imgg: "/poster6.jpg" },
  { imgg: "/poster7.jpg" },
]

const MySlider = () => {
  interface Phim {
    id: number;
    tenphim: string;
    dieukien: number;
    trailer: Blob;
    poster: string;
    dienvien: string;
    ngonngu: string;
    quocgia: string;
    tomtat: string;
    nsx: string;
    trangthai: string;
  }
  const setting = {
    arrows: false,
    Infinity: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  }
  const [phim, setPhim] = useState<Phim[]>([]);


  useEffect(() => {
    const handleLayTTPhim = async () => {
      let imageBase64 = "";
      try {
        const params = {
          key: 'ALL'

        };
        console.log("searchdate", params);
        const response = await LayTTPhim(params);
        const res: Phim[] = response.phims;
        console.log("check api handleLayTTChieu: ", response);
        // console.log("length", res.length);
        setPhim(res);
        console.log(res.length)
        res.map((res) => (
          // setGiave(res.giave),
          // console.log("lalalal", res.poster),
          imageBase64 = new Buffer(res.poster, "base64").toString("binary")
          // console.log("imageBase64", imageBase64)

        ));

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTPhim()
  }, []);
  return (
    <div>
      <div className="pt-10">
        <Slider className="" {...setting}>
          {
                      



                phim.map((el, index) => <Card key={index} poster={new Buffer(el.poster, "base64").toString("binary")}></Card>)}

        </Slider>
      </div>

    </div>
  )

}
export default MySlider;