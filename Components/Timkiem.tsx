import { Search } from '@/service/userService';
import SearchIcon from '@mui/icons-material/Search';
import { Ruthie } from 'next/font/google';
import { useState } from 'react';



const Timkiem = () => {
    interface Phim {
        id: number;
        tenphim: string;
        dieukien: number;
        trailer: string;
        poster: string;
        dienvien: string;
        ngonngu: string;
        daodien: string;
        thoiluong: number;
        ngaychieu: string;
        quocgia: string;
        tomtat: string;
        nsx: string;
        trangthai: string;
    }

    const [phim, setPhim] = useState<Phim[]>([]);
    const [keyword, setKeyword] = useState('');

    const handleLayTTPhim = async (keyword1: string) => {
        setKeyword(keyword1)
        if (keyword1) {
            try {
                const params = {
                    key: keyword1

                };
                console.log("searchdate", params);
                const response = await Search(params);
                const res: Phim[] = response.timkiem;
                console.log("check api handleLayTTChieu: ", res);
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
    }
    return (
        <center>
            <div className=" relative w-5/12">

                <input onChange={(e) => handleLayTTPhim(e.target.value)} className=" w-full h-10 mt-3 rounded-lg border-black border-2 pl-1" placeholder="Nhập thông tin bạn cần tìm kiếm" />
                <SearchIcon className='absolute right-5 mt-5' />


                {keyword != '' ?
                    phim.map((phim) => {

                        return (
                            <>
                                <p>
                                    {phim.tenphim}
                                </p>
                            </>
                        )


                    })
                    : null
                }



            </div>
        </center>
    )
}
export default Timkiem;