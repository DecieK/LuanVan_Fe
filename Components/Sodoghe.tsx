//goldclass 32,64
//104,118,128,164
import { Datve, LayTTDoan, LayTTGhe, LayTTGhe_idrap, LayTTKM, LayTTPhim, LayTTchitietve, LayTTve_idchieu, layTTChieu } from '@/service/userService';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ModalBapnuoc from './ModalBapnuoc';
import ModalKhuyenmai from './ModalKhuyenmai';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox';


type Props = {
  id_phimP: any;
  id_rapP: any;
  ngaychieuP: any;
}

const Sodoghe = ({ id_phimP, id_rapP, ngaychieuP }: Props) => {
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
    id_DA: number;
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
  // const [id_ghe1, setId_ghe1] = useState(Array);
  // const [tonggiave, setTonggiave] = useState(Number)
  // const [tileKM, setTileKM] = useState(Number)
  // const [giaDA, setGiaDA] = useState(Number)
  // const [sumsum1, setSumsum1] = useState(Number)
  const [tienDA, setTienDA] = useState(Number)
  const [tienKM, setTienKM] = useState(Number)
  // const [sumsum1, setSumsum1] = useState(Number)
  const [arrIdghe, setArrIdghe] = useState<number[]>([]);
  // const [arrIdghe, setArrIdghe] = useState<number[]>([]);
  const [showModalDA, setShowModalDA] = useState(false);
  const [showModalKM, setShowModalKM] = useState(false);






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
      // id: 0,
      id_ve: 0,
      id_ghe: 0
    },
  ])

  const handleDatve = async () => {
    // console.log("sumsum", sumsum)
    // setTongtien(sumsum)
    // setSoluongghe(dsgheDDs.length-1)
    // setHttt("Online")
    // console.log("alalalal", dsgheDDs.length-1)

    // dsgheDDs.map((item) => {
    //   // id_ghe1.indexOf(item.ma_ghe)
    //   if(id_ghe1.indexOf(item.ma_ghe) < 0){
    //     id_ghe1.push(item.ma_ghe)
    //   }
    // } )

    console.log("hoten", hten_KH)
    console.log("httt", httt)
    console.log("tongtien", tongtien)
    console.log("soluongghe", dsgheDDs.length)
    console.log("ngaymuave", ngaymuave)
    console.log("id_ghe", id_ghe)
    console.log("id_suatchieu", id_suatchieu)
    console.log("id_rap", id_rap)
    console.log("id_cumrap", id_cumrap)
    console.log("id_KM", id_KM)
    console.log("id_NV", id_NV)
    console.log("id_doan", id_doan)
    console.log("id_KH", id_KH)
    console.log("arrIdghe", arrIdghe)
    console.log("dsgheDDs", dsgheDDs)
    console.log("id_chieu", id_chieu)

    // Object.keys(numbers);
    let res = await Datve(
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
        // id_cumrap: id_cumrap,
        // id_KM: id_KM,
        // id_NV: id_NV,
        // id_doan: id_doan
        id_cumrap: 1,
        id_KM: 1,
        id_NV: 1,
        id_doan: 1,
        id_KH: 1
      });
    if (res && res.errCode === 0) {

      console.log(res)
      alert("Đăng ký thành công")

      // handleCloseClick();
    } else {

      console.log(res)
      alert("Đăng ký không thành công")

    };
    // console.log("arrghe", gheArr)
    // console.log("chitietveArr", chitietveArr)
    // console.log("testclick");
    // console.log("dsghedangdattttttttt", dsghedangdat);
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

  const handleDoan = (trangthai: boolean) => {
    if (trangthai === true) {
      setTrangthaidoan(false)
    }
    else setTrangthaidoan(true)

  }
  const handleKM = (trangthai: boolean) => {
    if (trangthai === true) {
      setKm(false)
    }
    else setKm(true)

  }

  const handleSetdoan = (id_da: number, giaDA: number) => {
    if (id_da === id_doan) {
      setId_doan(0)
      setTienDA(0)
    }
    else {
      setId_doan(id_da)
      setTienDA(giaDA)
    }
    console.log("tienDA", tienDA)
  }
  const handleSetkm = (id_km: number, tile: number) => {
    if (id_km === id_KM) {
      setId_KM(0)
      setTienKM(0)
    }
    else {
      setId_KM(id_km)
      setTienKM(tile)
    }

    console.log("tienKM", tienKM)

  }

  useEffect(() => {
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
                  id_ve: itemve.id + 1
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
    const handleLayTTchitietve = async () => {
      try {

        const params = {
          id_ve: 'ALL'
        };
        console.log("searchdate", params);
        const response = await LayTTchitietve(params);
        const res: Chitetve[] = response.chitietves;
        console.log("check api searchdate chitietve: ", response);
        console.log("length", res.length);
        setChitietve(res);


      } catch (error) {
        console.log(error);
      }

    }
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
        // console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
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

  }, [DSchitietves, dsgheDDs, giave, id_phim, id_phimP, id_rap, id_rapP, id_suatchieu, id_ve, ngaychieuP]);
  // useEffect(() => {
  //   localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
  // }, [dsgheDDs]);


  return (
    <div>
      <div className='flex mt-3'>
        <div className=' w-8/12'>
          <div className='h-3 w-9/12 bg-black m-auto'></div>
          <p className='text-center text-yellow-600'>Màn hình</p>
          <div className='w-8/12 m-auto'>
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
                let gheDadat = chitietveArr.includes(ghes.id)
                if (gheDadat) {
                  gheVIP = false
                }
                let disabled = gheDadat === true
                // const handleLike = (id) => {
                //   setJokes(jokes.map(joke => {
                //     if (joke.id === id) {
                //       return {...joke, likes: joke.likes + joke*t}
                //     } else {
                //       return joke
                //     }
                //   }))
                // }

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
                    className={`h-10 w-10  m-2  
                      ${ghedoi ? 'w-20 rounded-xl h-8 ' : ''}           
                      ${gheVIP ? 'border-2 border-yellow-500' : ''}
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
                // chitietve.map((chitietves) => {
                //   chitietveArr.push(chitietves.id_ghe)
                // })
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
        <div className=' w-4/12'>
          {phim.map((p, index) => {
            return (
              <>
                <p className='m-auto text-2xl font-bold  '>{p.tenphim}</p>
              </>
            )
          })}
          <hr />
          <div className='flex space-x-10 mt-5'>
            <img height={100} width={100} src='poster1.jpg' />
            <div>
              <p className='text-2xl'>Vincom Xuân khánh <br /> Rạp 01</p>
              <p className='text-xl pt-3'>30/10/2023 - 20:00</p>
            </div>
          </div>
          <hr className='my-3' />
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
            <div className='cursor-pointer'

              onClick={() => setShowModalDA(true)}
            //  onClick={(e) => handleDoan(trangthaidoan)}
            >Chọn bắp nước
              <AddCircleOutlineIcon />

            </div>
            {
              trangthaidoan === true
                ?
                <div>
                  {
                    doan.map((doans, index) => {
                      // console.log("doans.id",doans.id)

                      return (
                        <>
                          <button key={index} className='p-2 border-solid border-2 border-indigo-600 bg-teal-500'
                            onClick={() => handleSetdoan(doans.id, doans.gia)}
                          // onClick={() => setTienDA(doans.gia)}

                          >{doans.ten} size: {doans.size}</button>
                        </>
                      )
                    })
                  }
                </div>
                : ""
            }

          </div>
          <div>
            <div className='cursor-pointer'
              //  onClick={() => handleKM(km)}
              onClick={() => setShowModalKM(true)}

            >Khuyến mãi</div>
            {

              showModalKM === true
                ?
                <div>
                  {
                    khuyenmai.map((khuyenmais, index) => {
                      return (
                        <>
                         <div className='flex'>
                         <p key={index} className='p-2'
                            onClick={() => handleSetkm(khuyenmais.id, khuyenmais.tile_KM)}
                          // onClick={() => setTienKM(khuyenmais.tile_KM)}

                          >{khuyenmais.ten_KM}</p>
                          <Checkbox defaultChecked />
                         </div>

                          <hr />
                        </>
                      )
                    })
                  }

                </div>
                : ""
            }

            {/* {
              km === true
                ?
                <div>
                  {
                    khuyenmai.map((khuyenmais, index) => {
                      return (
                        <>
                          <button key={index} className='p-2 border-solid border-2 border-indigo-600 bg-teal-500'
                            onClick={() => handleSetkm(khuyenmais.id, khuyenmais.tile_KM)}
                          // onClick={() => setTienKM(khuyenmais.tile_KM)}

                          >{khuyenmais.ten_KM}</button>
                        </>
                      )
                    })
                  }

                </div>
                : ""
            } */}

          </div>

          <div>
            {/* <p>Tổng tiền</p> */}
            <div className='text-2xl'>{(sumsum + tienDA) - (sumsum + tienDA) * (tienKM / 100)} VNĐ</div>

          </div>
          {/* <div className='flex m-auto'> */}
          <button className='text-center h-14 w-48 border-green-600 border-2 bg-green-500 rounded-lg text-3xl '>Đặt vé</button>

          {/* </div> */}
        </div>
      </div>
      <ModalBapnuoc
        // id_phim={id_phim}
        onCloseDA={() => setShowModalDA(false)}
        showDA={showModalDA}
      ></ModalBapnuoc>
      {/* <ModalKhuyenmai
        // id_phim={id_phim}
        onCloseKM={() => setShowModalKM(false)}
        showKM={showModalKM}
      ></ModalKhuyenmai> */}
    </div>


  );
}

export default Sodoghe;
