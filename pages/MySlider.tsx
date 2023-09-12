import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import script from "next/script";


<script type="text/javascript">
var Slick = window.Slick || {};
    $(document).ready(function(){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        }),
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        }),
    
});
</script>


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
        // arrows: true,
        // Infinity: true,
        // speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 1,
       
    

}

return (
    <div>
        <div className=" relative slider-for">
            <Slider className='' {...setting}>
                {data.map((el, index) => <Card key={index} imgg={el.imgg}></Card>)}

            </Slider>
        </div>
        <div className="relative slider-nav">
            <Slider {...setting}>
                {data.map((el, index) => <Card key={index} imgg={el.imgg}></Card>)}

            </Slider>
        </div>
    </div>
)

}
export default MySlider;