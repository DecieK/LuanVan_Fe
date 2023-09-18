import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slide = () => {
    const slidesPhim = [
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_5__7.jpg'
        },
        // {
        //     url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__49.jpg'
        // },
        // {
        //     url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-banner_980x448-min.png'
        // },

        // {
        //     url: 'https://i.pinimg.com/736x/ca/df/04/cadf04841dde0ad23217e152eaa69487.jpg'
        //     // url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        // },
        // {
        //     url: '../public/poster2.jpg'
        //     // url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        // },
    ];
    const slidesKM= [
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/e/refill_rolling_banner_980x448.jpg'
        },
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__49.jpg'
        },
        {
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-banner_980x448-min.png'
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidesPhim.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slidesPhim.length - 1;
        const isLastSlideKM = currentIndex === slidesKM.length - 1;

        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        const newIndexKM = isLastSlideKM ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
        setCurrentIndex(newIndexKM);

    }, [currentIndex, slidesPhim.length, slidesKM.length]);
    

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
    };
    useEffect(() => {

        setTimeout(
            nextSlide, 2000)
        // const isLastSlide = currentIndex === slides.length - 1;
        // const newIndex = isLastSlide ? 0 : currentIndex + 1;
        // setCurrentIndex(newIndex);
    }, [nextSlide]);

    // w-full max-w-[1400px]
    return (
        <div className='bg-[#818184]'>
            <div className=' m-auto py-2 px-4 relative group h-[450px] w-full max-w-5xl '>
                <div
                    style={{ backgroundImage: `url(${slidesKM[currentIndex].url})` }}
                    className='w-full h-full rounded-xl bg-center bg-cover duration-500'
                >
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />

                </div>
          
                {/* <div className='flex justify-center'>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                >
                    <RxDotFilled />
                </div>
            ))}
        </div> */}
            </div>
                {/* <div className='col-span-3 '>


                    <div>
                        <div>FAST AND FURIOUS X</div>
                        <div>Đạo diễn: Louis Leterrier</div>
                        <div>Diễn viên: Vin Diesel, Jason Momoa, Brie Larson,…</div>
                        <div>Thể loại: Hành Động, Tội phạm</div>
                        <div>Khởi chiếu: 19/05/2023</div>
                        <div>Thời lượng: 141 phút</div>
                        <div>Ngôn ngữ: Tiếng Anh - Phụ đề Tiếng Việt</div>
                        <div>Rated: T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)</div>
                    </div>
                    <button className='border border-yellow-400 bg-red-400 text-white'>Đặt vé</button>
                    <button className='border border-yellow-400 bg-red-400 text-white'>Xem trailer</button>
                </div> */}

        </div>
    );
}

export default Slide;
