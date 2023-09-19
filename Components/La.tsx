/* eslint-disable react-hooks/exhaustive-deps */
// import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTGhe, LayTTchitietve, layTTChieu } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const La = () => {
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
    const [tonggia, setTonggia] = useState(Number)



    //   const [names, setNames] = useState<string[]>([]);
    //   const [focus, setFocus] = useState(Number);

    const gheArr: number[] = []
    const chitietveArr: number[] = []
    const dsghedangdat: number[] = []
    // const tongtienve: number
    // let dsghedangdatTAM: string;


    const [dsgheDDs, setDsgheDDs] = useState([
        {
            id_ghe: 0,
            ma_ghe: "",
            gia: 0
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
            ma_ghe: maGhe,
            gia: giave
        }
        // jokes.push(joke)

        setDsgheDDs([dsgheDD, ...dsgheDDs])
        // console.log("New Joke:", text)
        console.log("dsgheDDs", dsgheDDs)

    }
    const handleUpdateDSgheVIP = (id: any) => {
        setDsgheDDs(dsgheDDs.map(dsghe => {
            if (dsghe.id_ghe === id) {
                return {
                    ...dsghe, gia: giave + 20000
                }
            } else {
                return dsghe
            }

        }))
        console.log("gia", dsgheDDs[0].gia)

    }
    const handleUpdateDSghe = (id: any) => {
        setDsgheDDs(dsgheDDs.map(dsghe => {
            if (dsghe.id_ghe === id) {
                return { ...dsghe, gia: giave }
                // return { ...dsghe, gia: dsghe.gia*0.2 }

            } else {
                return dsghe
            }
        }))
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

    // const saveToLocalStorage = () => {
    //   // e.preventDefault()
    //   localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
    // }



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
        handleLayTTChieu();
        handleLayTTGhe();
        handleLayTTchitietve();
        // localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));

    }, []);
    useEffect(() => {
        localStorage.setItem('dsgheDDs', JSON.stringify(dsgheDDs));
    }, [dsgheDDs]);


    return (
        <div>
            <button onClick={handleUpdateDSgheVIP}>click</button>
            <div className='flex p-1 m-1'>
        danh sách ghế đã chọn:
        {
          dsgheDDs.map((element, index) => {
            return (
              <div key={index} className=''>
                <label className='pr-1'> {element.ma_ghe}{element.gia} </label>
              </div>
            );
          })
        }

      </div>
        </div>
    );
}

export default La;
