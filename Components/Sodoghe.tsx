/* eslint-disable react-hooks/exhaustive-deps */
// import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTDoan, LayTTGhe, LayTTKM, LayTTchitietve, layTTChieu } from '@/service/userService';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Sodoghe = () => {
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


  const [id_ve, setId_ve] = useState(1)
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
  const [id_phim, setId_phim] = useState(Number)
  const [chieu, setChieu] = useState<Chieu[]>([]);
  const [giave, setGiave] = useState(Number);
  const [tonggiave, setTonggiave] = useState(Number)
  const [km, setKm] = useState(false)
  const [trangthaidoan, setTrangthaidoan] = useState(false)
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);
  const [doan, setDoan] = useState<Doan[]>([]);






  const gheArr: number[] = []
  const chitietveArr: number[] = []
  const dsghedangdat: number[] = []
  let sumsum = 0;


  const [dsgheDDs, setDsgheDDs] = useState([
    {
      id_ghe: 0,
      ma_ghe: "",
      gia: 0
    },

  ])



  const handleDatve = async () => {
    console.log("hoten", hten_KH)
    console.log("httt", httt)
    console.log("tongtien", tongtien)
    console.log("soluongghe", soluongghe)
    console.log("ngaymuave", ngaymuave)
    console.log("id_ghe", id_ghe)
    console.log("id_suatchieu", id_suatchieu)
    console.log("id_rap", id_rap)
    console.log("id_cumrap", id_cumrap)
    console.log("id_KM", id_KM)
    console.log("id_NV", id_NV)
    console.log("id_doan", id_doan)
    console.log("id_KH", id_KH)


    let res = await Datve(
      {
        hten_KH: hten_KH,
        httt: httt,
        tongtien: tongtien,
        soluongghe: soluongghe,
        ngaymuave: ngaymuave,
        id_KH: id_KH,
        id_ghe: id_ghe,
        id_suatchieu: id_suatchieu,
        id_rap: id_rap,
        id_cumrap: id_cumrap,
        id_KM: id_KM,
        id_NV: id_NV,
        id_doan: id_doan
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
    console.log("delete joke", id)
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
  }

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
      const res: Chieu[] = response.ttchieu;
      console.log("check api searchdate ghe: ", response);
      // console.log("length", res.length);
      setChieu(res);
      console.log(res.length)
      res.map((res) => (
        setGiave(res.giave)
      ));
      console.log("giave", giave);

    } catch (error) {
      console.log(error);
    }
  }


  const handleLayTTchitietve = async () => {
    try {

      const params = {
        id_ve: id_ve,
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

  const handleLayTTGhe = async () => {
    try {

      const params = {
        key: "ALL",
      };
      console.log("searchdate", params);
      const response = await LayTTGhe(params);
      const res: Ghe[] = response.ghes;
      console.log("check api searchdate ghe: ", response);
      console.log("length", res.length);
      setGhe(res);
      console.log(res)
      // res.map((res) => (

      // ));
      // console.log("gheArr",gheArr);

    } catch (error) {
      console.log(error);
    }
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



  useEffect(() => {
    const handleLayTTChieu = async () => {
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
        const res: Chieu[] = response.ttchieu;
        console.log("check api handleLayTTChieu: ", response);
        // console.log("length", res.length);
        setChieu(res);
        console.log(res.length)
        res.map((res) => (
          setGiave(res.giave),
          console.log("giave", res.giave)

        ));
        console.log("giave", giave);

      } catch (error) {
        console.log(error);
      }
    }
    const handleLayTTGhe = async () => {
      try {

        const params = {
          key: "ALL",
        };
        console.log("searchdate", params);
        const response = await LayTTGhe(params);
        const res: Ghe[] = response.ghes;
        console.log("check api searchdate ghe: ", response);
        console.log("length", res.length);
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
          id_ve: id_ve,
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
        console.log("searchdate", params);
        const response = await LayTTKM(params);
        const res: Khuyenmai[] = response.khuyenmais;
        console.log("check api KM: ", response);
        console.log("length", res.length);
        setKhuyenmai(res);
        console.log(res)
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
        console.log("searchdate", params);
        const response = await LayTTDoan(params);
        const res: Doan[] = response.doans;
        console.log("check api Doan: ", response);
        console.log("length", res.length);
        setDoan(res);
        console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTChieu();
    handleLayTTGhe();
    handleLayTTchitietve();
    handleLayTTKM();
    handleLayTTDoan();
    // localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));

  }, []);
  // useEffect(() => {
  //   localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
  // }, [dsgheDDs]);
  let temp: number


  return (
    <div>
      {
        ghe.map((ghes) => {
          let gheVIP = ghes.loaiGhe === 'VIP';
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

                // handleUpdateDSghe(ghes.id)
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
                    //lay gia ghe từ useeff, 
                    //xong chổ này nếu loai ghe vip thì truyền dô giá nhân ... ngược lại thì k
                  ));

                } else {
                  handleDeleteJoke(ghes.id)
                }
                console.log("classGhedangdat", classGhedangdat);
                console.log("ghedangdattttttttttttt1", dsgheDDs);


              }
              }
              key={ghes.id}
              className={`h-14 w-14 items-center m-2             
                ${gheVIP ? 'bg-yellow-200' : ''}
                ${classGhedangdat ? 'bg-blue-500' : ''}

                ${gheDadat ? 'bg-black text-red-500' : ''}
                // ${!gheDadat && !gheVIP && !classGhedangdat ? 'bg-slate-400' : ''}
                ${gheVIP && classGhedangdat ? 'bg-blue-500' : ''}



              
               
              `}
              disabled={disabled}
            // onChange={handlechange}              
            >
              {gheDadat === true ? 'X' : ghes.maGhe}
            </button >
          </>
        },
          chitietve.map((chitietves) => {
            chitietveArr.push(chitietves.id_ghe)
          })
        )
      }


      {/* check dkien 
  + nếu 1 vé đặt 1 ghế là insert dữ liệu bth
  + nếu nhiều hơn 1 ghế thì check length mãng mã ghế xong for để insert dữ liệu */}

      <button onClick={handleDatve} className=' m-32 flex justify-center items-center border border-red-200 bg-red-500'>Dat</button>

      <div className='flex p-1 m-1'>
        danh sách ghế đã chọn:
        {
          dsgheDDs.map((element, index) => {


            let sum = 0;

            dsgheDDs.forEach(element => {
              sum += element.gia;
            });
            sumsum = sum

            // setTonggiave(sum)
            return (
              <div key={index} className=''>
                <label className='pr-1'> {element.ma_ghe} </label>
                {/* <div>{sum}</div> */}
              </div>
            );

          })
        }
      </div>
      <div>{sumsum}</div>
      <div>
        <div className='cursor-pointer' onClick={(e) => handleDoan(trangthaidoan)}>chọn bắp nước</div>
        {
          trangthaidoan === true
            ?
            <div>
              {
                doan.map((doans, index) => {
                  return (
                    <>
                      <button className='p-2 border-solid border-2 border-indigo-600 bg-teal-500'>{doans.ten} size: {doans.size}</button>
                    </>
                  )
                })
              }
            </div>
            : ""
        }

      </div>
      <div>
        <div className='cursor-pointer' onClick={(e) => handleKM(km)}>khuyến mãi</div>
        {
          km === true
            ?
            <div>
              {
                khuyenmai.map((khuyenmais, index) => {
                  return (
                    <>
                      <button key={index} className='p-2 border-solid border-2 border-indigo-600 bg-teal-500'>{khuyenmais.ten_KM}</button>
                    </>
                  )
                })
              }

            </div>
            : ""
        }

      </div>




    </div >
  );
}

export default Sodoghe;
