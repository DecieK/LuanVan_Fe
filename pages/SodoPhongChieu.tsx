import { API_appraisePhongKham } from '@/service/userService';
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
  interface DSGheDangDat {
    id: number;
    maGhe: string;
    loaiGhe: string;
    giaGhe: number;

  }

  const [id_ve, setId_ve] = useState(Number)
  const [id_phim, setId_phim] = useState(Number)
  const [id_chieu, setId_chieu] = useState(Number)


  const [hten_KH, setHten_KH] = useState("");
  const [httt, setHttt] = useState("");
  const [tongtien, setTongtien] = useState(Number);
  const [soluongghe, setSoluongghe] = useState(Number);
  const [ngaymuave, setNgaymuave] = useState("");
  const [id_KH, setId_KH] = useState(Number);
  const [id_ghe, setId_ghe] = useState(Number);
  const [id_suatchieu, setId_suatchieu] = useState(Number);
  const [id_rap, setId_rap] = useState(Number);
  const [id_cumrap, setId_cumrap] = useState(Number);
  const [id_KM, setId_KM] = useState(Number);
  const [id_NV, setId_NV] = useState(Number);
  const [id_doan, setId_doan] = useState(Number);
  const [chitietve, setChitietve] = useState<Chitetve[]>([]);
  const [ghe, setGhe] = useState<Ghe[]>([]);
  const [dsghe, setDsghe] = useState<DSGheDangDat[]>([]);

  const [names, setNames] = useState<string[]>([]);
  const [focus, setFocus] = useState(Number);

  const gheArr: number[] = []
  const chitietveArr: number[] = []
  const dsghedangdat: number[] = []
  // let dsghedangdatTAM: string[] = []

  // let dsghedangdatTAM: string;


  const [dsgheDDs, setDsgheDDs] = useState([
    {
      id_ghe: 0,
      ma_ghe: "",
      gia: 0
    },

  ])




  const handleLayTTGhe = async () => {
    setId_rap(1)
    setId_suatchieu(1)
    setId_phim(1)
    try {
      const params = {
        id_rap: id_rap,
        id_phim: id_phim,
        id_suatchieu: id_suatchieu

      };
      console.log("searchdate", params);
      const response = await API_appraisePhongKham(id_rap,id_phim,id_suatchieu);
      const res: Ghe[] = response.ghes;
      console.log("check api searchdate ghe: ", response);
      console.log("length", res.length);
      setGhe(res);
      console.log(res)
      // res.map((res) => (
      //   gheArr.push(res.id)
      // ));
      // console.log("gheArr",gheArr);

    } catch (error) {
      console.log(error);
    }
  }




  useEffect(() => {
    handleLayTTGhe()

  }, []);


  return (
    <div>

    </div>
  );
}

export default SodoPhongChieu;
