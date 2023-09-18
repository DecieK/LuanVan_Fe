import { layTTChieu } from '@/service/userService';
import { Console } from 'console';
import React, { useCallback, useEffect, useState } from 'react';


const SodoPhongChieu = () => {
  interface Chitetve {
    id: number;
    id_ve: number;
    id_ghe: number;
    Trangthaighe: number;
  }
  interface DSGgheDD {
    id_ghe: number;
    ma_ghe: string;
    gia: number;

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
  // const [isInitialRender, setIsInitialRender] = useState(true);


  const [dsgheDDs, setDsgheDDs] = useState([
    {
      id_ghe: 0,
      ma_ghe: "",
      gia: 0
    },

  ])
  console.log("dsgheDDs", dsgheDDs)
  





  useEffect(() => {

    // if () {
      const dsgheDD1 = JSON.parse(localStorage.getItem("dsgheDDs") || "{}");

      setDsgheDDs(dsgheDD1);
      // setIsInitialRender(false);

    // }
    console.log("jokesjokesjokes", dsgheDDs)

  }, [dsgheDDs]);

  return (
    <div>
      <div className='flex p-1 m-1'>
        danh sách ghế đã chọn:
        {
          dsgheDDs.map((element, index) => {
            return (
              <div key={index} className=''>

                <label className=''> {element.ma_ghe} </label>
                {/* <label className=''> {element.gia} </label> */}

                {/* <p>Khuyen mai</p> */}
              </div>
            );
          })
        }

      </div>
      <button className='bg-slate-500' >Click</button>
    </div>
  );
}

export default SodoPhongChieu;
