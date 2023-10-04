import { LayTTPhim } from '@/service/userService';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Chitietphim = () => {
    interface Phim {
        id: number;
        tenphim: string;
        dieukien: number;
        trailer: string;
        poster: string;
        dienvien: string;
        ngonngu: string;
        quocgia: string;
        tomtat: string;
        nsx: string;
        trangthai: string;
    }
    const [phim, setPhim] = useState<Phim[]>([]);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        const handleLayTTPhim = async () => {

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
                //   res.map((res) => (
                //     setGiave(res.giave),
                //     console.log("giave", res.giave)

                //   ));

            } catch (error) {
                console.log(error);
            }
        }
        setDomLoaded(true)
        handleLayTTPhim()
    }, []);
    return (
        <div>

            {
                phim.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div>
                                    {domLoaded && (
                                        <ReactPlayer
                                            height={300}
                                            width={300}
                                            // playing={true}
                                            controls={true}
                                            poster
                                            url={item.trailer} />

                                    )}
                                </div>
                                <div>
                                    <p>{item.tenphim}</p>
                                    {/* <p>MUÔN KIẾP NHÂN DUYÊN</p> */}
                                    <p>Quốc gia:{item.quocgia}</p>
                                    <p>Diễn viên:{item.dienvien}</p>
                                    <p>Nhà sản xuất:{item.nsx}</p>
                                    <p>Thể loại:</p>
                                    <p>Đạo diễn:</p>
                                    <p>Ngày khởi chiếu</p>
                                </div>
                                <button className='bg-slate-600'>Đặt vé</button>
                                <div>
                                    <div>Nội dung phim</div>
                                    <div>{item.tomtat}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>

    );
}
export default Chitietphim;