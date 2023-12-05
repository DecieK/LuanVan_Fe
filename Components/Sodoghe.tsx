//goldclass 32,64
//104,118,128,164
import { Datve, LayTTCumrap, LayTTDoan, LayTTGhe, LayTTGhe_idrap, LayTTKM, LayTTPhim, LayTTRap, LayTTchitietve, LayTTve_idchieu, layTTChieu } from '@/service/userService';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ModalBapnuoc from './ModalBapnuoc';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image'
import { ifError } from 'assert';
import Link from 'next/link';


type Props = {
  id_phimP: any;
  id_rapP: any;
  ngaychieuP: any;
  tenP: any;
  tenrapP: any;
  giobdP: any;
  gioktP: any;
  tencumrapP: any

}

const Sodoghe = ({ id_phimP, id_rapP, ngaychieuP, tenP, tenrapP, giobdP, gioktP, tencumrapP }: Props) => {
  interface Chitetve {
    id: number;
    id_ve: number;
    id_ghe: number;
    // Trangthaighe: number;
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
  interface Chieu {
    id: number;
    ngaychieu: string;
    giave: number;
    id_rap: number;
    id_phim: number;
    id_suatchieu: number;
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
    // id_DA: number;
  }
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
  interface DSDichVu {
    id: number,
    ten: string,
    anhminhhoa: string,
    loai: string,
    mota: string,
    gia: number,
    size: string,
    sl: number
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
  interface Rap {
    id: number;
    ten_rap: string;
    slghe: number;
    id_cumrap: number;
  }
  interface Cumrap {
    id: number;
    ten_tttt: string;
    diachi: string;
  }

  const [id_ve, setId_ve] = useState("")
  const [id_chieu, setId_chieu] = useState(Number)
  const [hten_KH, setHten_KH] = useState("");
  const [httt, setHttt] = useState("");
  const [tongtien, setTongtien] = useState(Number);
  // const [soluongghe, setSoluongghe] = useState(Number);
  const [ngaymuave, setNgaymuave] = useState(new Date);
  const [id_KH, setId_KH] = useState(Number);
  const [id_ghe, setId_ghe] = useState(Number);
  const [id_suatchieu, setId_suatchieu] = useState(Number);
  const [id_rap, setId_rap] = useState(Number);
  const [id_cumrap, setId_cumrap] = useState(Number);
  const [id_KM, setId_KM] = useState(Number);
  const [id_NV, setId_NV] = useState(Number);
  const [id_doan, setId_doan] = useState(Number);
  const [chitietve, setChitietve] = useState<Chitetve[]>([]);
  const [phim, setPhim] = useState<Phim[]>([]);
  const [ve, setVe] = useState<Ve[]>([]);
  const [ghe, setGhe] = useState<Ghe[]>([]);
  const [dsghe, setDsghe] = useState<DSGheDangDat[]>([]);
  const [id_phim, setId_phim] = useState(Number)
  const [chieu, setChieu] = useState<Chieu[]>([]);
  const [giave, setGiave] = useState(Number);
  const [km, setKm] = useState(false)
  const [trangthaidoan, setTrangthaidoan] = useState(false)
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);
  const [doan, setDoan] = useState<Doan[]>([]);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);
  // const [tonggiave, setTonggiave] = useState(Number)
  // const [tileKM, setTileKM] = useState(Number)
  const [rap, setRap] = useState<Rap[]>([]);
  const [diemtichluyKH, setDiemtichluyKH] = useState(11)
  const [tienDA, setTienDA] = useState(Number)
  const [tienKM, setTienKM] = useState(Number)
  // const [sumsum1, setSumsum1] = useState(Number)
  const [arrIdghe, setArrIdghe] = useState<number[]>([]);
  const [arrIdDV, setArrIdDV] = useState<number[]>([]);
  // const [arrIdghe, setArrIdghe] = useState<number[]>([]);
  const [showModalDA, setShowModalDA] = useState(false);
  const [showModalKM, setShowModalKM] = useState(false);
  const [r, setR] = useState(Number)
  const [dsdoans, setDsdoans] = useState<DSDichVu[]>([]);
  const [checked, setChecked] = React.useState(0);
  let temp: number


  // const [dsdoans, setDsdoans] = useState([
  //   {
  //     id: 0,
  //     ten: '',
  //     anhminhhoa: '',
  //     loai: '',
  //     mota: '',
  //     gia: 0,
  //     size: '',
  //     sl: 0
  //   },
  // ])



  const gheArr: number[] = []
  const chitietveArr: number[] = []
  const dsghedangdat: number[] = []
  let sumsum = 0;
  // let sumsum1 = 0;
  let sumsum2 = 0;

  // let sum = 0;

  const [dsgheDDs, setDsgheDDs] = useState([
    {
      id_ghe: 0,
      ma_ghe: "",
      gia: 0
    },
  ])
  const [DSchitietves, setDSchitietves] = useState([
    {
      id_ve: 0,
      id_ghe: 0
    },
  ])
  const [DSchitietvesBefore, setDSchitietvesBefore] = useState([
    {
      id_ve: 0,
      id_ghe: 0
    },
  ])

  const handleDatve = async () => {

    // try {
    //   const params = {
    //     amount: (sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100),
    //   };
    //   // console.log("searchdate", params);
    //   const response = await VNPay(params);
    //   console.log("check api searchdate VNPay: ", response);
    //   // console.log("length", res.length);

    // } catch (error) {
    //   console.log(error);
    // }
    // fetch(`http://localhost:8080/order/create_payment_url?keyword=${tongtien}`, {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'your-rapid-key',
    //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    //   }
    // })
    //   .then(response => response)
    // .then(vnp_Params => console.log(vnp_Params))
    // .catch(err => console.error(err));

    // console.log("hoten", hten_KH)
    // console.log("httt", httt)
    // console.log("tongtien", tongtien)
    // console.log("soluongghe", dsgheDDs.length)
    // console.log("ngaymuave", ngaymuave)
    // console.log("id_ghe", id_ghe)
    // console.log("id_suatchieu", id_suatchieu)
    // console.log("id_rap", id_rap)
    // console.log("id_cumrap", id_cumrap)
    // console.log("id_KM", id_KM)
    console.log("id_NV", id_NV)
    // console.log("id_doan", dsdoans)
    // console.log("id_KH", id_KH)
    // console.log("arrIdghe", arrIdghe)
    // console.log("dsgheDDs", dsgheDDs)
    // console.log("id_chieu", id_chieu)
    // console.log("arrId_da", arrIdDV)



    // let res = await Datve(
    let Ve = {
      TTVe: [
        {
          hten_KH: hten_KH,
          httt: httt,
          tongtien: (sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100),
          soluongghe: dsgheDDs.length,
          ngaymuave: ngaymuave,
          id_chieu: id_chieu,
          id_ghe: arrIdghe,
          id_suatchieu: id_suatchieu,
          id_rap: id_rapP,
          id_cumrap: id_cumrap,
          id_KM: id_KM,
          id_NV: 1,
          id_doan: dsdoans,
          id_KH: id_KH
        }
      ]
    }
    // let ve = ({
    //   hten_KH: hten_KH,
    //   httt: httt,
    //   tongtien: (sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100),
    //   soluongghe: dsgheDDs.length,
    //   ngaymuave: ngaymuave,
    //   id_chieu: id_chieu,
    //   id_ghe: arrIdghe,
    //   id_suatchieu: id_suatchieu,
    //   id_rap: id_rapP,
    //   id_cumrap: id_cumrap,
    //   id_KM: id_KM,
    //   id_NV: 1,
    //   id_doan: dsdoans,
    //   id_KH: 1
    // });
    localStorage.setItem('ve', JSON.stringify(Ve.TTVe));

    // console.log(">>>> check ve", ve)
    // console.log(">>>> check dsdoan", dsdoans)

    // if (res && res.errCode === 0) {

    //   console.log(res)
    //   alert("Đặt vé thành công")

    //   // handleCloseClick();
    // } else {

    //   console.log(res)
    //   alert("Đặt vé không thành công")

    // };

  }
  const handleDeleteJoke = (id: number) => {
    setDsgheDDs(dsgheDDs.filter(dsgheDDs => dsgheDDs.id_ghe !== id))
    // console.log("delete joke", id)
    setArrIdghe(arrIdghe.filter(item => item !== id))
    console.log("delete joke", arrIdghe)

  }
  const handleChonghedangdat = async (id: number, maGhe: string, loaighe: string) => {
    // const handleAddJoke = (text) => {


    if (loaighe === 'VIP') {
      const dsgheDD = {
        id_ghe: id,
        ma_ghe: maGhe,
        gia: giave + giave * 0.2
      }
      setDsgheDDs([dsgheDD, ...dsgheDDs])

    }
    else {
      const dsgheDD = {
        id_ghe: id,
        ma_ghe: maGhe,
        gia: giave
      }
      setDsgheDDs([dsgheDD, ...dsgheDDs])

    }
    (arrIdghe).push(id)

  }





  const handleSetkm = (id_km: number) => {
    if (checked === id_km) {
      setChecked(0)
      setTienKM(0)
    } else {
      setChecked(id_km)
      khuyenmai.map((item) => {
        if (item.id === id_km) {
          setId_KM(item.id)
          // kiem tra xem có nằm trong thời gian khuyến mãi hay k
          setTienKM(item.tile_KM)
        }
      })
    }

    // if (id_km === id_KM) {
    //   setId_KM(0)
    //   setTienKM(0)
    // }
    // else {
    //   setId_KM(id_km)
    //   setTienKM(tile)
    // }

    console.log("tienKM", tienKM)

  }

  const handleLayDuLieuTuModalBapNuoc = (arr: any) => {
    arrIdDV.splice(0, arrIdDV.length)
    setDsdoans(arr)
    const res1: DSDichVu[] = arr;
    console.log("res1", res1)

    res1.map((item) => {
      sumsum2 = sumsum2 + item.sl * item.gia
      if (item.sl != 0 && (arrIdDV.includes(item.id) === false)) {

        arrIdDV.push(item.id)
      }
    })
    // console.log("sumsum2", sumsum2)
    setTienDA(sumsum2)
  }

  useEffect(() => {
    const handleLayTTRap = async () => {
      try {
        const params = {
          id: id_rapP,
        };
        // console.log("searchdate", params);
        const response = await LayTTRap(params);
        const res: Rap[] = response.raps;
        // console.log("check api searchdate ve: ", response);
        // console.log("length", res.length);
        setRap(res);
        res.map(async (raps) => {
          const params = {
            key: raps.id_cumrap,
          };
          // console.log("searchdate", params);
          const response = await LayTTCumrap(params);
          const res: Cumrap[] = response.cumraps;
          // console.log("check api searchdate ve: ", response);
          // console.log("length", res.length);
          setCumrap(res);
          res.map((cr) => {
            setId_cumrap(cr.id)
          })
        })
      } catch (error) {
        console.log(error);
      }
    }

    const handleLayTTPhim = async () => {

      try {
        const params = {
          key: id_phimP

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
    dsgheDDs.map((item) => {
      if (item.id_ghe === 0) {
        dsgheDDs.splice(0, dsgheDDs.length);
      }
    })
    console.log(id_ve)
    // console.log("ipphim",ngaychieuP)
    const handleLayTTChieu = async () => {
      console.log("id_rapP", id_rapP);
      console.log("id_phimP", id_phimP);
      console.log("ngaychieuP", ngaychieuP);
      try {
        const params = {
          id_rap: id_rapP,
          id_phim: id_phimP,
          ngaychieu: ngaychieuP

        };
        // console.log("searchdate", params);
        const response = await layTTChieu(params);
        const res: Chieu[] = response.ttchieu;
        console.log("check api handleLayTTChieu: ", response);
        // console.log("length", res.length);
        setChieu(res);
        // console.log(res.length)
        res.map(async (res) => {
          setGiave(res.giave),
            setId_suatchieu(res.id_suatchieu),
            setId_chieu(res.id)
          try {
            const params = {
              id_chieu: res.id
            };
            console.log("veparams", params);
            const response = await LayTTve_idchieu(params);
            const resVe: Ve[] = response.ves;
            console.log("check api searchdate ve: ", response);
            setVe(resVe);
            resVe.map(async (itemve) => {
              try {
                const params = {
                  id_ve: itemve.id
                };
                console.log("searchdate", params);
                const response = await LayTTchitietve(params);
                const res: Chitetve[] = response.chitietves;
                console.log("check api searchdate chitietve: ", response);
                console.log("length", res.length);
                setChitietve(res);
                res.map((itemctv) => {
                  let b = DSchitietves.findIndex(DSchitietves => DSchitietves.id_ghe === itemctv.id_ghe)
                  if (b) {
                    DSchitietves.push({
                      id_ve: itemctv.id_ve,
                      id_ghe: itemctv.id_ghe
                    })
                  }
                })


              } catch (error) {
                console.log(error);
              }
            })
            // console.log(resVe.length)
          } catch (error) {
            console.log(error);
          }
        })

      } catch (error) {
        console.log(error);
      }
    }
    const handleLayTTGhe = async () => {
      try {

        const params = {
          id_rap: id_rapP,
        };
        console.log("searchdate", params);
        const response = await LayTTGhe_idrap(params);
        const res: Ghe[] = response.ghes;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setGhe(res);
        console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    // const handleLayTTchitietve = async () => {
    //   try {

    //     const params = {
    //       id_ve: 'ALL'
    //     };
    //     console.log("searchdate", params);
    //     const response = await LayTTchitietve(params);
    //     const res: Chitetve[] = response.chitietves;
    //     console.log("check api searchdate chitietve: ", response);
    //     console.log("length", res.length);
    //     setChitietve(res);


    //   } catch (error) {
    //     console.log(error);
    //   }

    // }
    const handleLayTTKM = async () => {
      try {

        const params = {
          key: "ALL",
        };
        // console.log("searchdate", params);
        const response = await LayTTKM(params);
        const res: Khuyenmai[] = response.khuyenmais;
        // console.log("check api KM: ", response);
        // console.log("length", res.length);
        setKhuyenmai(res);
        // console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    const handleLayTTDoan = async () => {
      try {

        const params = {
          key: "ALL",
        };
        // console.log("searchdate", params);
        const response = await LayTTDoan(params);
        const res: Doan[] = response.doans;
        // console.log("check api Doan: ", response);
        // console.log("length", res.length);
        setDoan(res);
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
      console.log("false");
      const res: Khachhang[] = khachhangs;
      console.log("Ád", res)

      res.map((item) => {
        setId_KH(item.id)
        setDiemtichluyKH(item.Diemtichluy_KH)
      });
    }
    handleLayTTRap()
    handleLayTTChieu();
    handleLayTTGhe();
    // handleLayTTchitietve();
    handleLayTTKM();
    // handleLayTTDoan();
    handleLayTTPhim()
    setHten_KH("Luong Vu Khoa")
    // console.log(Object.entries(dsgheDDs));
    // setId_ghe()
    setHttt("Online")
    setNgaymuave(new Date())
    // setId_suatchieu(1)
    // setId_rap(1)
    // setId_cumrap(1)
    // setId_NV(1)
    // // setId_KM(1)
    // // setId_doan()
    // setId_KH(1)


    // localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));

  }, [DSchitietves, dsgheDDs, id_phimP, id_rapP, id_ve, ngaychieuP]);
  // useEffect(() => {
  //   localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
  // }, [dsgheDDs]);


  return (
    <div>
      <div className='flex lg:flex-row flex-col mt-3'>
        <div className=' lg:w-8/12 w-full '>
          <div className='h-3 w-9/12 bg-black m-auto'></div>
          <p className='text-center text-yellow-600'>Màn hình</p>
          <div className='md:w-10/12 w-full grid grid-cols-10 pt-3 pb-3 gap-3  m-auto'>
            {
              ghe.map((ghes) => {
                let gheVIP = ghes.loaiGhe === 'VIP';
                let ghedoi = ghes.maGhe.length > 3
                // console.log("ghes.maGhe.length", ghes.maGhe.length);

                // let gheVIP = 'bg-pink-200'

                gheArr.push(ghes.id)
                // console.log("gheArr", gheArr);
                // console.log("chitietveArr", chitietveArr[1]);
                // console.log(chitietveArr.includes(ghes.id));


                // ghe da dat
                let gheDadat = chitietveArr.includes(ghes.id)
                if (gheDadat) {
                  gheVIP = false
                }
                let disabled = gheDadat === true

                //ghế đang dặt
                let ghedangdat = dsgheDDs.findIndex(dsgheDDs => ghes.id === dsgheDDs.id_ghe)
                let classGhedangdat = ghedangdat != -1
                if (gheVIP && classGhedangdat) {
                  gheVIP = false
                }
                return <>
                  <button
                    onClick={async () => {
                      if (!classGhedangdat) {
                        const params = {
                          key: ghes.id,
                        };
                        console.log("searchdate", params);
                        const response = await LayTTGhe(params);
                        const res: DSGheDangDat[] = response.ghes;
                        console.log("check api searchdate ghe: ", response);
                        console.log("length", res.length);
                        setDsghe(res);
                        console.log(res)
                        res.map((res) => (
                          handleChonghedangdat(ghes.id, res.maGhe, res.loaiGhe)

                        ));

                      } else {
                        handleDeleteJoke(ghes.id)
                      }
                      console.log("classGhedangdat", classGhedangdat);
                      console.log("ghedangdattttttttttttt1", dsgheDDs);
                      // setSoluongghe(dsgheDDs.length)
                      setId_ghe(ghes.id)
                      dsgheDDs.map((item) => {
                        let sum = 0;
                        dsgheDDs.forEach(item => {
                          sum += item.gia;
                        });
                        sumsum = sum
                        setTongtien(sum)
                      })
                    }
                    }
                    key={ghes.id}
                    className={`h-10 w-10 m-auto 
                      ${ghedoi ? 'w-20 rounded-xl h-10 border-2 border-green-700 ' : ''}           
                      ${gheVIP ? 'border-2 border-yellow-500 ' : ''}
                      ${classGhedangdat ? 'bg-blue-400' : ''}
                      ${gheDadat ? 'bg-gray-600 text-red-500' : ''}
                      // ${!gheDadat && !gheVIP && !classGhedangdat ? 'border-2 border-gray-500' : ''}
                      ${gheVIP && classGhedangdat ? 'bg-blue-500' : ''}                             
                    `}
                    disabled={disabled}
                  // onChange={handlechange}              
                  >
                    {gheDadat === true ? 'X' : ghes.maGhe}
                  </button >
                </>
              },


                DSchitietves.map((chitietves) => {
                  chitietveArr.push(chitietves.id_ghe)
                })

              )
            }


          </div>
          <div className='grid grid-cols-2 m-auto mt-6 w-9/12 justify-items-center '>
            <div className='col-span-1 space-y-2'>
              <div className='flex space-x-2'>
                <div className='h-10 w-10 border-2 border-gray-500 '></div>
                <p>Ghế bình thường trống</p>
              </div>
              <div className='flex space-x-2'>
                <div className='h-10  w-10 border-2 border-yellow-500 '></div>
                <p>Ghế VIP trống</p>
              </div>
            </div>
            <div className='col-span-1 space-y-2'>
              <div className='flex space-x-2'>
                <div className='h-10 w-10  border-2 bg-blue-400 '></div>
                <p>Ghế đang chọn</p>
              </div>
              <div className='flex space-x-2'>
                <div className='h-10 w-10  border-2 bg-gray-600 text-red-500'></div>
                <p>Ghế đã đặt</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:w-4/12 w-8/12 lg:m-0 m-auto lg:mt-5 mt-5 '>
          {phim.map((p, index) => {
            return (
              <>
                <p className='m-auto text-2xl font-bold  '>{p.tenphim}</p>
              </>
            )
          })}
          <hr />
          <div className='flex space-x-10 pt-4'>
            <Image
              className=""
              src="/poster1.jpg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            {/* <img height={100} width={100} src='poster1.jpg' /> */}
            <div>
              <p className='text-2xl'>{tencumrapP} <br /> {tenrapP}</p>
              <p className='text-lg pt-3'>{ngaychieuP} <br /> {giobdP} - {gioktP}</p>
            </div>
          </div>
          <hr className='my-4' />
          <div className='flex'>
            Danh sách ghế:
            {

              dsgheDDs.slice().reverse().map((element, index) => {

                let sum = 0;


                dsgheDDs.forEach(element => {
                  sum += element.gia;
                });
                sumsum = sum

                // setTonggiave(sum)
                return (
                  <div key={index} className='px-1'>
                    <label className='pr-1'> {element.ma_ghe} </label>
                    {/* <div>{sum}</div> */}
                  </div>
                );

              })
            }
          </div>
          <div>
            <div className='cursor-pointer space-x-2'

              onClick={() => setShowModalDA(true)}
            //  onClick={(e) => handleDoan(trangthaidoan)}
            >
              <span>Chọn dịch vụ</span>
              <AddCircleOutlineIcon />

            </div>

          </div>
          <div>
            <div className='cursor-pointer'
              //  onClick={() => handleKM(km)}
              onClick={() => setShowModalKM(!showModalKM)}

            >Khuyến mãi:</div>
            {
              showModalKM === true
                ?
                <div>
                  {
                    khuyenmai.map((khuyenmais, index) => {
                      // for (let i = 0; i < khuyenmai.length; i++) {
                      if (khuyenmais.dieukien_KM <= diemtichluyKH) {
                        temp = diemtichluyKH - khuyenmais.dieukien_KM
                        return (
                          <>
                            <div className='flex'>
                              <p key={index} className='p-2'
                              // onClick={() => handleSetkm(khuyenmais.id, khuyenmais.tile_KM)}
                              // onClick={() => setTienKM(khuyenmais.tile_KM)}
                              >{khuyenmais.ten_KM}</p>
                              <Checkbox
                                checked={khuyenmais.id === checked ? true : false}
                                // onChange={()=>setChecked(!checked)}
                                onClick={() => handleSetkm(khuyenmais.id)}
                              />
                            </div>
                            <hr />
                          </>
                        )
                      }
                      // }

                    })
                  }

                </div>
                : ""
            }

          </div>

          <div className='flex space-x-2'>
            <p className='text-2xl'>Tổng tiền:</p>
            <div className='text-2xl'>{(sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100)} VNĐ</div>

          </div>
          <Link
            href={`http://localhost:8080/order/create_payment_url?keyword=${(sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100)}`}
          >
            <button className='text-center h-12 mt-5 w-48 bg-red-500  rounded-lg text-3xl '
              onClick={() => handleDatve()}
            >
              Đặt vé
            </button>
          </Link>



          {/* </div> */}
        </div>
      </div>
      <ModalBapnuoc
        // id_phim={id_phim}
        handleLayDuLieuTuModalBapNuoc={handleLayDuLieuTuModalBapNuoc}
        onCloseDA={() => setShowModalDA(false)}
        showDA={showModalDA}
      ></ModalBapnuoc>
      {/* <ModalKhuyenmai
        // id_phim={id_phim}
        onCloseKM={() => setShowModalKM(false)}
        showKM={showModalKM}
      ></ModalKhuyenmai> */}
      {/* <button onClick={() => console.log("ádas", dsgheDDs.length)}>click</button> */}

    </div>

  );
}

export default Sodoghe;
