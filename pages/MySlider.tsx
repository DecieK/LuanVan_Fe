import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import script from "next/script";



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

    const setting = {
        arrows: false,
        Infinity: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
       
    

}

return (
    <div>
        <div className="pt-10">
            <Slider className="" {...setting}>
                {data.map((el, index) => <Card key={index} imgg={el.imgg}></Card>)}

            </Slider>
        </div>

    </div>
)

}
export default MySlider;