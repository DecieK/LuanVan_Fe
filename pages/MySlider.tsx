import  Slider  from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
    {imgg: "/poster1.jpg"},
    {imgg: "/poster2.jpg"},
    {imgg: "/poster3.jpg"},
    {imgg: "/poster4.jpg"},
    {imgg: "/poster5.jpg"},
    {imgg: "/poster6.jpg"},
    {imgg: "/poster7.jpg"},
]

const MySlider = () =>{

    const setting = {
        arrows: true,
        Infinity: true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        // nextArrow:<NextArrow />,
        // Responsive:[
        //     breakpoint:1200,

        // ]

    }

    return (
        <div className="relative">
            <Slider {...setting}>
            {data.map((el, index) => <Card key={index} imgg={el.imgg}></Card>)}

            </Slider>
        </div>
    )

}
export default MySlider;