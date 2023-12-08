import { useEffect, useState } from "react";
import Image from 'next/image'
import Lichsudatve from "@/Components/Lichsudatve";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { LayTTVe_idKH } from "@/service/userService";

type Props = {
  poster: any;
}

const Lichsu = ({ poster }: Props) => {
  interface Ve {
    id: number;
    Hten_KH: string;
    HTTT: string;
    Tongtien: number;
    SLghe: number;
    Ngaymuave: string;
    id_KH: number;
    id_suatchieu: number;
    id_rap: number;
    id_chieu: number;
    id_cumrap: number;
    id_KM: number;
    id_NV: number;
    maCode: string;
    MaGD: number;
    ThoigianGD: string
    createdAt: Date;
    updatedAt: Date;

    // id_DA: number;
  }
  interface Suatchieu {
    id: number;
    giobatdau: string;
    gioketthuc: string;
  }

  interface Doan {
    id: number;
    ten: string;
    loai: number;
    mota: number;
    gia: number;
    size: number;
  }
  interface Khuyenmai {
    id: number;
    ten_KM: string;
    tile_KM: number;
    mota_KM: string;
    dieukien_KM: number;
    thoigianbatdau: Date;
    thoigianketthuc: Date;
  }
  interface Chitetve {
    id: number;
    id_ve: number;
    id_ghe: number;
    // Trangthaighe: number;
  }
  interface Khachhang {
    id: number;
    Hten_KH: string;
    Sdt_KH: string;
    Email_KH: string;
    Ngaysinh_KH: Date;
    Tuoi_KH: number;
    Diachi_KH: string;
    Gioitinh_KH: string;
    Cccd_KH: string;
    Mathethanhvien_KH: number;
    Diemtichluy_KH: number;
    Taikhoan_KH: string;
    Matkhau_KH: string;
  }


  const [ve, setVe] = useState<Ve[]>([]);
  const [doan, setDoan] = useState<Doan[]>([]);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [idKh, setIdKh] = useState(Number);


  // const [prevURLIMG, setPrevURLIMG] = useState("");

  useEffect(() => {
    const handleLayTTVe = async (id: number) => {
      try {
        const params = {
          id_kh: id,
        };
        // console.log("searchdate", params);
        const response = await LayTTVe_idKH(params);
        const res: Ve[] = response.ves;
        // console.log("check api searchdate ve: ", response);
        // console.log("length", res.length);
        setVe(res);

      } catch (error) {
        console.log(error);
      }
    }



    const khachhangs = JSON.parse(
      localStorage.getItem("khachhang") || "{}"
    );
    if (Object.keys(khachhangs).length === 0) {
      // setTrangthai(true)
      console.log("true");
    } else {
      // setTrangthai(false)
      // console.log("false");
      const res: Khachhang[] = khachhangs;
      // setKhachhang(res)
      res.map((item) => {
        setIdKh(item.id)
        handleLayTTVe(item.id)
        // console.log("asdasqqqq",item.id)

      });
    }
    // handleEdit
  }, []);

  return (
    <div>
      <Header />
      {
        ve ?
          ve.reverse().map((ves, index) => {
            return (
              <>
                <Lichsudatve
                  ttve={ve[index]}
                  id={ves.id}
                  hten_KH={ves.Hten_KH}
                  hTTT={ves.HTTT}
                  tongtien={ves.Tongtien}
                  sLghe={ves.SLghe}
                  ngaymuave={ves.Ngaymuave}
                  id_kh={ves.id_KH}
                  id_sc={ves.id_suatchieu}
                  id_r={ves.id_rap}
                  id_c={ves.id_chieu}
                  id_cr={ves.id_cumrap}
                  id_km={ves.id_KM}
                  id_nv={ves.id_NV}
                  createdat={ves.createdAt}
                  updatedat={ves.updatedAt}
                  macode={ves.maCode} 
                  magd ={ves.MaGD}
                  tggd = {ves.ThoigianGD}
                  />
              </>
            )
          })
          : null
      }
      <Footer />
    </div>

  )
}
export default Lichsu;