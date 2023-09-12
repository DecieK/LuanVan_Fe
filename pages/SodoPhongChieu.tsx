import {layTTChieu } from '@/service/userService';
import React, { useCallback, useEffect, useState } from 'react';


const SodoPhongChieu = () => {
  interface Chitetve {
    id: number;
    id_ve: number;
    id_ghe: number;
    Trangthaighe: number;
  }
  interface Ghe {
    id: number;
    maGhe: string;
    loaiGhe: string;

  }
  interface Chieu {
    id: number;
    ngaychieu: string;
    giave: string;
    id_rap: number;
    id_phim: number;
    id_suatchieu: number;


  }

  const [id_rap, setId_rap] = useState(Number)
  const [id_phim, setId_phim] = useState(Number)
  const [id_suatchieu, setId_suatchieu] = useState(Number)
  const [chieu, setChieu] = useState<Chieu[]>([]);


  const [dsgheDDs, setDsgheDDs] = useState([
    {
      id_ghe: 0,
      ma_ghe: "",
      gia: 0
    },

  ])




  const handleLayTTChieu = async () => {

    setId_rap(1)
    setId_phim(1)
    setId_suatchieu(1)


    console.log("id_rap", id_rap);
    console.log("id_phim", id_phim);
    console.log("id_suatchieu", id_suatchieu);

    try {
      const params = {
        id_rap: 1,
        id_phim: 1,
        id_suatchieu: 1

      };
      console.log("searchdate", params);
      const response = await layTTChieu(params);
      const res: Chieu[] = response.ghes;
      console.log("check api searchdate ghe: ", response);
      console.log("length", res.length);
      setChieu(res);
      // console.log(res)
      // res.map((res) => (
      //   gheArr.push(res.id)
      // ));
      // console.log("gheArr",gheArr);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
 
  }, []);


  return (
    <div>
        <button className='bg-slate-500' onClick={handleLayTTChieu}>Click</button>
    </div>
  );
}

export default SodoPhongChieu;
