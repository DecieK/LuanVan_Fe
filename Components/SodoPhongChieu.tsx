import { layTTChieu } from '@/service/userService';
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
    gia: string;

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





  useEffect(() => {
    // getLocation();
    if (dsgheDDs) {
      const dsgheDD1 = JSON.parse(localStorage.getItem("dsgheDDs") || "{}");
      if (dsgheDD1) {
        setDsgheDDs(dsgheDD1);
      }
    }

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
              {/* <p>Khuyen mai</p> */}
              <button></button>
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
