import { Noto_Serif } from "next/font/google";
import Image from 'next/image'

const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
const Phim = () => {

    return (
        <div className={noto_serif.className}>
            <div className="grid grid-cols-3 gap-2 w-11/12 m-auto mt-5 ">
                <div className="col-span-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="">
                        <Image
                            className="w-11/12 h-64  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/poster11.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
                        <div className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="">Beauty</p>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div className="space-x-5  space-y-3">
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Image
                        className="w-11/12 h-64"
                        src="/poster11.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    {/* <img src='https://cdn.galaxycine.vn/media/2023/9/29/750x500_1695961597860.jpg'/> */}
                </div>
                <div className="col-span-1">
                    <Image
                        className="w-11/12 h-64"
                        src="/poster11.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    {/* <img src='https://cdn.galaxycine.vn/media/2023/9/21/750x500_1695282599311.jpg' /> */}
                </div>
                <div className="col-span-1 ">
                    <Image
                        className="w-11/12 h-64"
                        src="/poster11.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    {/* <img src='https://cdn.galaxycine.vn/media/2023/9/13/iutgh-750x500_1694588486477.jpg' /> */}
                </div>
            </div>
        </div>
    )
}
export default Phim;