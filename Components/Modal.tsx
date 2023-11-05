import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTPhim, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";



type Props = {
  //   fullname: string;
  //   name_clinic: string;
  //   iddv: number;
  show: any;
  onClose: any;
  id_phim: number;
};
// export type thongtinbenhnhan = {
//   id: number;
//   Ho: string;
//   Ten: string;
//   Dienthoai: string;
//   Gioitinh: string;
//   Diachi: string;
//   Hovaten: string;
// };
const Modal = ({ show, onClose, id_phim }: Props) => {
  interface Chieu {
    id: number;
    ngaychieu: string;
    giave: number;
    id_rap: number;
    id_suatchieu: number;
    id_phim: number;
  }
  interface Cumrap {
    id: number;
    ten_tttt: string;
    diachi: string;
  }
  interface Suatchieu {
    id: number;
    giobatdau: string;
    gioketthuc: string;
  }

  interface Rap {
    id: number;
    ten_rap: string;
    slghe: number;
    id_cumrap: number;
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

  const [Ngaysinh, setNgaysinh] = useState<any>()
  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [chieu, setChieu] = useState<Chieu[]>([]);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);
  const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
  const [rap, setRap] = useState<Rap[]>([]);
  const [idSuatchieu, setIdSuatchieu] = useState(Number);
  const [idcumrap, setIdcumrap] = useState(Number);
  const [id_rap, setIdRap] = useState(Number);
  const [ngaychieu, setNgaychieu] = useState(Date);
  const [phim, setPhim] = useState<Phim[]>([]);
  const [checkdate, setCheckdate] = useState(Boolean);


  const [chieus, setDschieus] = useState([
    {
      id: 0,
      ngaychieu: "",
      giave: 0,
      id_rap: 0,
      id_suatchieu: 0,
      id_phim: 0
    },
  ])
  const [items, setDsitems] = useState([
    {
      id_rap: 0,
      ngaychieu: "",
      // giave: 0,
      id_phim: 0,
      id_suatchieu: 0,
      giobatdau: "",
      gioketthuc: "",
      slghe: 0,
      slghedadat: 0

    },
  ])
  const [suatchieus, setDssuatchieus] = useState([
    {
      // id: Number,
      // giobatdau: String,
      // gioketthuc: String
      id: 0,
      giobatdau: "",
      gioketthuc: ""
    },
  ])
  // chieus.splice(0, chieus.length);
  // suatchieus.splice(0, suatchieus.length);
  const handlePushTTchieu = async (id: number, ngaychieu: string, giave: number, id_r: number, id_suatchieu: number, id_phim: number) => {
    const isFound = chieus.some(element => {
      if (element.id === id) {
        return true;
      }

      return false;
    });
    if (isFound === false) {
      chieus.push({
        id: id,
        ngaychieu: ngaychieu,
        giave: giave,
        id_rap: id_r,
        id_suatchieu: id_suatchieu,
        id_phim: id_phim
      });
      // handleLayTTSuatchieu()

    }
  }

  const handleLayTTChieu = async (id_rap: number) => {
    // const key = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    // const keyfm = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    let res = await layTTChieu(
      {
        id_phim: id_phim,
        ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
        id_rap: id_rap
      });
    console.log("Thong tin bang Chieu", res)

    // try {
    const res1: Chieu[] = res.ttchieu;
    setChieu(res1)
    console.log(res1.length)
    res1.map((res1) => {
      console.log("gia", res1.giave)
      // const chieu = {
      //   id: res1.id,
      //   ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
      //   giave: res1.giave,
      //   id_rap: res1.id_rap,
      //   id_suatchieu: res1.id_suatchieu,
      //   id_phim: res1.id_phim
      // }
      // setDschieus([chieu, ...chieus])
      handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu)
    })
    // } catch (error) {
    //   console.log(error);
    // }

    console.log("Thong tin bang chieus", chieus)

  }

  const handleKiemtraNgay = (date: Date) => {
    suatchieus.splice(0, suatchieus.length)

    setStartDate(date)
    let currdate = new Date()
    // currdate.setHours(0, 0, 0, 0)
    // date.setHours(0, 0, 0, 0)
    // if (date.getTime() === currdate.getTime()) {
    //   setCheckdate(true)
    // } else {
    //   setCheckdate(false)
    // }
  }

  const deleteAllItems = () => {
    chieus.splice(0, chieus.length);
    // setDschieus([...chieus]); // Update the state with the modified array
  };

  const handleLayTTCumRap = async (id_cumrap: number) => {
    if (id_cumrap != idcumrap) {
      suatchieus.splice(0, suatchieus.length)
    }
    setIdcumrap(id_cumrap)
    deleteAllItems()
    setNgaychieu(startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate())
    //  if(id_cumrap !== idcumrap){
    try {
      const params = {
        key: id_cumrap,
      };
      // console.log("searchdate", params);
      const response = await LayTTRap_idcumrap(params);
      const res: Rap[] = response.raps;
      console.log("check api searchdate tat ca rap trong 1 cum rap: ", response);
      // console.log("length rap", res.length);
      setRap(res);
      res.map(async (res) => {
        // setIdRap(res.id)
        console.log("idp", id_phim)
        console.log("idr", res.id)

        let resChieu = await layTTChieu(
          {
            id_phim: id_phim,
            ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
            id_rap: res.id
          });

        const res1: Chieu[] = resChieu.ttchieu;
        console.log("asdassssssssssssss", resChieu.ttchieu)
        console.log("res1", res1)

        setChieu(res1)
        if (res1.length === 0) {
          suatchieus.splice(0, suatchieus.length)
        } else {
          res1.map(async (res1) => {
            // setIdRap(res1.id_rap)
            suatchieus.splice(0, suatchieus.length);

            console.log("gia", res1.giave)
            const params = {
              key: res1.id_suatchieu
            };
            console.log("suatchieuparams", params);
            const response = await LayTTSuatchieu(params);
            const ressuatchieu: Suatchieu[] = response.suatchieus;
            console.log("check api searchdate Suatchieu: ", response);
            // console.log("length", res.length);
            setSuatchieu(ressuatchieu);

            ressuatchieu.map((res) => {
              suatchieus.push({
                id: res.id,
                giobatdau: res.giobatdau,
                gioketthuc: res.gioketthuc
              });
            })
            console.log(ressuatchieu.length)
            handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu)
          })
        }
        // handleLayTTChieu(res.id)
      })
      console.log("lengasdasdasth rap");
    } catch (error) {
      console.log(error);
    }
    console.log("chieuschieus2222", chieus)
  }
  const handleLayTTSuatchieu = async () => {
    suatchieus.splice(0, suatchieus.length);
    console.log("lengthchieus", chieus.length);
    chieus.map(async (item) => {
      try {
        const params = {
          // key: idSuatchieu,
          key: item.id
        };
        console.log("suatchieuparams", params);
        const response = await LayTTSuatchieu(params);
        const res: Suatchieu[] = response.suatchieus;
        console.log("check api searchdate Suatchieu: ", response);
        // console.log("length", res.length);
        setSuatchieu(res);
        res.map((res) => {
          suatchieus.push({
            id: res.id,
            giobatdau: res.giobatdau,
            gioketthuc: res.gioketthuc
          });
        })
        console.log(res.length)
      } catch (error) {
        console.log(error);
      }
    })

  }
  const router = useRouter();

  const handleDatve = (id_r: number, bd: string, kt: string) => {
    let tenP
    let tenrapP
    let tencumrapP
    rap.map((r) => {
      if (r.id === id_r) {
        tenrapP = r.ten_rap
      }
    })
    cumrap.map((cr) => {
      if (cr.id === idcumrap) {
        tencumrapP = cr.ten_tttt
      }
    })
    const handleLayTTPhim = async () => {

      try {
        const params = {
          key: id_phim

        };
        console.log("searchdate", params);
        const response = await LayTTPhim(params);
        const res: Phim[] = response.phims;
        console.log("check api handleLayTTChieu: ", response);
        // console.log("length", res.length);
        setPhim(res);
        console.log(res.length)
        res.map((res) => (
          tenP = res.tenphim

        ));

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTPhim()


    router.push({
      pathname: '/datve',
      query: {
        id_phim: id_phim,
        id_rap: id_r,
        ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
        tenP: tenP,
        tenrapP: tenrapP,
        giobdP: bd,
        gioktP: kt,
        tencumrapP: tencumrapP
      },

    })


  };

  useEffect(() => {
    const handleLayTTCumrap = async () => {
      try {
        const params = {
          key: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTCumrap(params);
        const res: Cumrap[] = response.cumraps;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setCumrap(res);
        // console.log(res.length)

      } catch (error) {
        console.log(error);
      }
    }

    handleLayTTCumrap();
    setIsBrowser(true);
  }, [chieu, chieus, idSuatchieu, suatchieus]);

  const handleCloseClick = () => {
    onClose()
    console.log(onClose)
    console.log(show)

  }

  const modalContent = show ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[10/12]  rounded-lg ">
        <StyledModalHeader className="bg-red-500 w-full h-14 uppercase pt-3 font-semibold text-2xl text-center ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Lịch chiếu CGV Cần
            </span>

            <button
              // href="#"
              className="rounded-full text-center h-7 w-7 bg-gray-300"
              onClick={handleCloseClick}
            >
              x
            </button>
          </div>
        </StyledModalHeader>
        {
          (
            <StyledModal>
            </StyledModal>
          )}
        <StyledModalBody className="bg-white">
          <div className="modal">
            <div className='grid grid-cols-7 mt-5 gap-4 m-3'>
              <button className='col-span-1 border-red-400 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Chủ nhật</p>
                <p className='bg-red-400 text-2xl h-16 pt-4'>05/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 2</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>06/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 3</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>07/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 4</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>08/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 5</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>09/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 6</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>10/11</p>
              </button>
              <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                <p className='text-lg h-12 pt-2'>Thứ 7</p>
                <p className='bg-gray-300 text-2xl h-16 pt-4'>11/11</p>
              </button>
            </div>
            <div className="flex pl-7">
              <DatePicker
                className=""
                selected={startDate}
                minDate={new Date()}
                onChange={(date: Date) => handleKiemtraNgay((date))}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className='grid grid-cols-3 mt-10 place-items-center'>              {
              cumrap.map((item, index) => {
                return (
                  <>
                    <Button
                      onClick={() => handleLayTTCumRap(item.id)}
                      key={index}
                      className='col-span-1 bg-red-400 h-20 w-40 rounded-md'                    >{item.ten_tttt}
                    </Button>
                  </>
                )
              })
            }
            </div>
            <div className='grid grid-cols-4 mt-8 gap-4 place-items-center mb-10'>
              {
                suatchieus.map((item, index) => {
                  let datee = new Date()
                  if (checkdate === true) {
                    if (item.giobatdau !== '' && datee.getHours() < Number(item.giobatdau.slice(0, 2)) ||
                      (datee.getHours() === Number(item.giobatdau.slice(0, 2)) &&
                        (datee.getMinutes() + 10) < Number(item.giobatdau.slice(3, 5)))) {
                      return (
                        <>
                          <Button
                            onClick={() => handleDatve(chieus[index].id_rap, item.giobatdau, item.gioketthuc)}
                            key={index}
                            className="bg-gray-300 rounded-md h-10 w-32"
                            >
                            {
                              item.giobatdau + " - " + item.gioketthuc
                            }
                          </Button>
                        </>
                      )
                    }
                  } else {
                    if (item.giobatdau !== '') {
                      return (
                        <>
                          <Button
                            onClick={() => handleDatve(chieus[index].id_rap, item.giobatdau, item.gioketthuc)}
                            key={index}
                            className="bg-gray-300 rounded-md h-10 w-32">
                            {
                              item.giobatdau + " - " + item.gioketthuc
                              // (datee.getHours() < Number(item.giobatdau.slice(0, 2)) ||
                              //   datee.getHours() === Number(item.giobatdau.slice(0, 2)) && (datee.getMinutes()+10) < Number(item.giobatdau.slice)
                              //   ? item.giobatdau +" - "+ item.gioketthuc : null                            
                              //   )
                            }
                          </Button>
                        </>
                      )
                    }
                  }
                })
              }
            </div>
            {/* <button
              value={new Date().getDate()}
              onClick={() => console.log("checkdate", checkdate)}
            >{new Date().getDate()}</button>

            <button
              value={new Date().getDate()}
              onClick={() => console.log("checkdate", checkdate)}
            >{(new Date().getDate() + ' ' + (new Date().getMonth() + 1) + ' ' + new Date().getDay())}
            </button> */}

            {/* <button
              onClick={() => console.log("suatchieus", suatchieus)}
            // onClick={() => console.log("chieu", chieus)}
            >chieus</button> */}
          </div>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 1px;
`;

const StyledModalHeader = styled.div`
  /* display: flex;
  justify-content: flex-end;
  font-size: 25px; */
`;

const StyledModal = styled.div`
  /* background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px; */
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu