import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import script from "next/script";
// import { LayTTPhim } from "@/service/userService";
import { useEffect, useState } from "react";
import Card from "./Card";





const data = [
  { url: '/pr1.jpg'},
  { url: '/poster11.jpg' },
  // { url:  'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__49.jpg'},
  // { url: '	https://cdn.galaxycine.vn/media/2023/9/21/750x500_1695282599311.jpg'  },
  // { url: 'https://cdn.galaxycine.vn/media/2023/9/19/750x500_1695095393060.jpg' },
  // { url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-banner_980x448-min.png'  },
  // { url: 'https://cdn.galaxycine.vn/media/2023/9/13/iutgh-750x500_1694588486477.jpg' },
]

const MySlider = () => {
  // interface Phim {
  //   id: number;
  //   tenphim: string;
  //   dieukien: number;
  //   trailer: Blob;
  //   poster: string;
  //   dienvien: string;
  //   ngonngu: string;
  //   quocgia: string;
  //   tomtat: string;
  //   nsx: string;
  //   trangthai: string;
  // }
  const setting = {
    arrows: false,
    Infinity: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  // const [phim, setPhim] = useState<Phim[]>([]);


  // useEffect(() => {
  //   const handleLayTTPhim = async () => {
  //     let imageBase64 = "";
  //     try {
  //       const params = {
  //         key: 'ALL'

  //       };
  //       console.log("searchdate", params);
  //       const response = await LayTTPhim(params);
  //       const res: Phim[] = response.phims;
  //       console.log("check api handleLayTTChieu: ", response);
  //       // console.log("length", res.length);
  //       setPhim(res);
  //       console.log(res.length)
  //       res.map((res) => (
  //         // setGiave(res.giave),
  //         console.log("lalalal", res.poster)
  //         // imageBase64 = new Buffer(res.poster, "base64").toString("binary")
  //         // console.log("imageBase64", imageBase64)

  //       ));

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   handleLayTTPhim()
  // }, []);
  return (
    <div>
      <div className="pt-6">

        <Slider className="" {...setting}>

          {
            data.map((el, index) => <Card key={index} poster={el.url} ></Card>)}

        </Slider>
      </div>

    </div>
  )

}
export default MySlider;