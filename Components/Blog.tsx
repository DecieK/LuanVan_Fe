import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif } from "next/font/google";
import Image from 'next/image'

const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
const Blog = () => {

    return (
        <div className={noto_serif.className}>
            <div className="grid grid-cols-2 gap-2 w-9/12 mt-20 m-auto ">
                <div className="col-span-1 space-y-5">
                    <p className="uppercase text-2xl">Bình luận phim</p>

                    <div className="flex space-x-3 ">
                        <Image
                            className="w-52 h-36 "
                            src='/poster1.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        {/* <img src='https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2F750_1696858166057.jpg&w=256&q=75' className="w-52 h-36 " /> */}
                        <div className="">
                            <p className="font-semibold ">[Review] Past Lives: Nếu Hiện Tại Là Kiếp Trước, Vậy Kiếp Sau Đã Đủ 8000 Lớp Nhân Duyên?</p>
                            <p className="text-xs">Yêu nhau nhưng chưa chắc đến được với nhau. Đã từng ở cạnh nhau cũng chưa hẳn sẽ dừng chân bên nhau mãi.</p>
                            <div className="flex space-x-5">
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faHeart} /></div>
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faEye} />1612</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3 ">
                        <Image
                            className="w-52 h-36 "
                            src='/poster1.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        {/* <img src='https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2F750_1696858166057.jpg&w=256&q=75' className="w-52 h-36 " /> */}
                        <div className="">
                            <p className="font-semibold ">[Review] Past Lives: Nếu Hiện Tại Là Kiếp Trước, Vậy Kiếp Sau Đã Đủ 8000 Lớp Nhân Duyên?</p>
                            <p className="text-xs">Yêu nhau nhưng chưa chắc đến được với nhau. Đã từng ở cạnh nhau cũng chưa hẳn sẽ dừng chân bên nhau mãi.</p>
                            <div className="flex space-x-5">
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faHeart} /></div>
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faEye} />1612</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-span-1 space-y-5 ">
                    <p className="uppercase text-2xl">blog điện ảnh</p>
                    <div className="flex space-x-3 ">
                        <Image
                            className="w-52 h-36 "
                            src='/poster1.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        {/* <img src='https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2F750_1696858166057.jpg&w=256&q=75' className="w-52 h-36 " /> */}
                        <div className="">
                            <p className="font-semibold ">[Review] Past Lives: Nếu Hiện Tại Là Kiếp Trước, Vậy Kiếp Sau Đã Đủ 8000 Lớp Nhân Duyên?</p>
                            <p className="text-xs">Yêu nhau nhưng chưa chắc đến được với nhau. Đã từng ở cạnh nhau cũng chưa hẳn sẽ dừng chân bên nhau mãi.</p>
                            <div className="flex space-x-5">
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faHeart} /></div>
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faEye} />1612</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3 ">
                        <Image
                            className="w-52 h-36 "
                            src='/poster1.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        {/* <img src='https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2F750_1696858166057.jpg&w=256&q=75' className="w-52 h-36 " /> */}
                        <div className="">
                            <p className="font-semibold ">[Review] Past Lives: Nếu Hiện Tại Là Kiếp Trước, Vậy Kiếp Sau Đã Đủ 8000 Lớp Nhân Duyên?</p>
                            <p className="text-xs">Yêu nhau nhưng chưa chắc đến được với nhau. Đã từng ở cạnh nhau cũng chưa hẳn sẽ dừng chân bên nhau mãi.</p>
                            <div className="flex space-x-5">
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faHeart} /></div>
                                <div className="text-xs mt-2 h-6 w-16 text-center rounded-md pt-1 bg-gray-400"><FontAwesomeIcon icon={faEye} />1612</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;