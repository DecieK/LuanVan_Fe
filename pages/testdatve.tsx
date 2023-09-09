import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTGhe, LayTTchitietve } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const TestDatVe = () => {
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
  interface Dsghedangdat {
    id: number;
    maGhe: string;
    // loaiGhe: string;
    giaGhe: number;

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
      ma_ghe: ""
      // gia: Number
    },

  ])



  const handleDatve = async () => {
    // console.log("hoten", hten_KH)
    // console.log("httt", httt)
    // console.log("tongtien", tongtien)
    // console.log("soluongghe", soluongghe)
    // console.log("ngaymuave", ngaymuave)
    // console.log("id_ghe", id_ghe)
    // console.log("id_suatchieu", id_suatchieu)
    // console.log("id_rap", id_rap)
    // console.log("id_cumrap", id_cumrap)
    // console.log("id_KM", id_KM)
    // console.log("id_NV", id_NV)
    // console.log("id_doan", id_doan)
    // console.log("id_KH", id_KH)


    // let res = await Datve(
    //   {
    //     hten_KH: hten_KH,
    //     httt: httt,
    //     tongtien: tongtien,
    //     soluongghe: soluongghe,
    //     ngaymuave: ngaymuave,
    //     id_KH: id_KH,
    //     id_ghe: id_ghe,
    //     id_suatchieu: id_suatchieu,
    //     id_rap: id_rap,
    //     id_cumrap: id_cumrap,
    //     id_KM: id_KM,
    //     id_NV: id_NV,
    //     id_doan: id_doan
    //   });
    // if (res && res.errCode === 0) {

    //   console.log(res)
    //   alert("Đăng ký thành công")

    //   // handleCloseClick();
    // } else {

    //   console.log(res)
    //   alert("Đăng ký không thành công")

    // };
    // console.log("arrghe", gheArr)
    // console.log("chitietveArr", chitietveArr)
    console.log("testclick");
    console.log("dsghedangdattttttttt", dsghedangdat);
  }
  const handleDeleteJoke = (id: number) => {
    setDsgheDDs(dsgheDDs.filter(dsgheDDs => dsgheDDs.id_ghe !== id))
    console.log("delete joke", id)
  }
  const handleChonghedangdat = async (id: number, maGhe: string) => {
    // const handleAddJoke = (text) => {


    const dsgheDD = {
      id_ghe: id,
      ma_ghe: maGhe
    }
    // jokes.push(joke)

    setDsgheDDs([dsgheDD, ...dsgheDDs])
    // console.log("New Joke:", text)
    console.log("jokesjokesjokes", dsgheDDs)



    // }



    // console.log("wwwđaâsdassssssssssssssssssssssss", dsghedangdat)

    // if (dsghedangdat.includes(id_ghe) === false) {
    //   dsghedangdat.push(id_ghe),
    //     console.log("ádasd"),
    //     console.log("1", dsghedangdat)
    // }
    // else {
    //   let vitriPTcanxoa = dsghedangdat.findIndex((item) => item === id_ghe)
    //   dsghedangdat.splice(vitriPTcanxoa, 1)
    //   console.log("2", dsghedangdat)
    // }
    // console.log("đâsdassssssssssssssssssssssss", dsghedangdat)

    // for (let i = 0; i <= dsghedangdat.length; i++) {
    //   try {
    //     const params = {
    //       key: dsghedangdat[i],
    //     };
    //     console.log("searchdate", params);
    //     const response = await LayTTGhe(params);
    //     const res: DSGheDangDat[] = response.ghes;
    //     console.log("check api searchdate ghe: ", response);
    //     console.log("length", res.length);
    //     setDsghe(res);
    //     console.log(res)
    //     res.map((res) => (
    //       setDsghedangdatTAM(dsghedangdatTAM + " " + res.maGhe)
    //     ));
    //     // console.log("gheArr", gheArr);

    //   } catch (error) {
    //     console.log(error);
    //   }
    //   console.log("tessss", dsghedangdat[i])
    // }
    // console.log("dsghedangdatTAM", dsghedangdat)
    // return dsghedangdat
    // setDsghedangdatTAM(dsghedangdatTAM + " " + dsghedangdat.join(','))
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
      // res.map((res) => {
      //   chitietveArr.push(res.id_ghe)
      // })
      // console.log("chitietveArr", chitietveArr);


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
      //   gheArr.push(res.id)
      // ));
      // console.log("gheArr",gheArr);

    } catch (error) {
      console.log(error);
    }
  }




  useEffect(() => {
    handleLayTTchitietve()
    handleLayTTGhe()
    setHten_KH("khoa")
    setHttt("onl")
    setTongtien(200000)
    setSoluongghe(2)
    setNgaymuave("8-28-2023")
    setId_KH(1)
    setId_ghe(25)
    setId_suatchieu(5)
    setId_rap(9)
    setId_cumrap(2)
    setId_KM(10)
    setId_NV(10)
    setId_doan(10)
  }, []);


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
          // console.log("gheDadat",gheDadat);
          // console.log("maghe", ghes.maGhe)
          let disabled = gheDadat === true

          //ghế đang dặt
          let ghedangdat = dsgheDDs.findIndex(dsgheDDs => ghes.id === dsgheDDs.id_ghe)

          let classGhedangdat = ghedangdat != -1
          return <>
            <button
              onClick={async () => {

                if (!classGhedangdat) {
                  const params = {
                    key: ghes.id,
                  };
                  console.log("searchdate", params);
                  const response = await LayTTGhe(params);
                  const res: Dsghedangdat[] = response.ghes;
                  console.log("check api searchdate ghe: ", response);
                  console.log("length", res.length);
                  setDsghe(res);
                  console.log(res)
                  res.map((res) => (
                    handleChonghedangdat(ghes.id, res.maGhe)

                  ));
                }else{
                  handleDeleteJoke(ghes.id)
                }
                // const params = {
                //   key: ghes.id,
                // };
                // console.log("searchdate", params);
                // const response = await LayTTGhe(params);
                // const res: Dsghedangdat[] = response.ghes;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                // setDsghe(res);
                // console.log(res)
                // res.map((res) => (
                //   handleChonghedangdat(ghes.id, res.maGhe)

                // ));
                console.log("classGhedangdat", classGhedangdat);
                console.log("ghedangdattttttttttttt1", ghedangdat);



              }


              }
              key={ghes.id}
              className={`h-14 w-14 items-center m-2
              ${classGhedangdat ? 'bg-blue-500' : 'bg-slate-400'}
               ${gheVIP ? 'bg-amber-100 text-amber-700' : ''}
               ${gheDadat === true ? 'bg-red-900 text-amber-700' : ''}
              `}
              disabled={disabled}
            // onChange={handlechange}              
            >
              {ghes.maGhe}
            </button>
          </>
        },
          chitietve.map((chitietves) => {
            chitietveArr.push(chitietves.id_ghe)

          })

        )
      }


      <button onClick={handleDatve} className=' m-32 flex justify-center items-center border border-red-200 bg-red-500'>Dat</button>

      {dsgheDDs.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.ma_ghe} ádasd</h2>
            <p>Khuyen mai</p>
            <button></button>
          </div>
        );
      })}

      <p className='p-8 m-8'
      // onClick={handleChonghedangdat}
      >
        {/* {dsghedangdatTAM} ádasdas  */}
      </p>


    </div>
  );
}

export default TestDatVe;
