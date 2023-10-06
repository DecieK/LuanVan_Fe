import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";



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
  const [tests, setTests] = useState([
    {
      text: ""
    },
  ])

  const handleChonghedangdat = async (id: number, ngaychieu: string, giave: number, id_r: number, id_suatchieu: number, id_phim: number) => {
    // const handleAddJoke = (text) => {
    const chieu = {
      id: id,
      ngaychieu: ngaychieu,
      giave: giave,
      id_rap: id_r,
      id_suatchieu: id_suatchieu,
      id_phim: id_phim
    }
    setDschieus([chieu, ...chieus])

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
    try {
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
        handleChonghedangdat(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu)
      })
    } catch (error) {
      console.log(error);
    }


  }

  const handleLayTTCumRap = async (id_cumrap: number) => {

    try {
      const params = {
        key: id_cumrap,
      };
      console.log("searchdate", params);
      const response = await LayTTRap_idcumrap(params);
      const res: Rap[] = response.raps;
      console.log("check api searchdate tat ca rap trong 1 cum rap: ", response);
      console.log("length rap", res.length);
      setRap(res);
      res.map((res) => {
        handleLayTTChieu(res.id)
      })
      console.log("chieus", chieus)
    } catch (error) {
      console.log(error);
    }

  }
  const handleLayTTSuatchieu = async () => {
    try {
      const params = {
        // key: idSuatchieu,
        key: 'ALL'
      };
      // console.log("searchdate", params);
      const response = await LayTTSuatchieu(params);
      const res: Suatchieu[] = response.suatchieus;
      // console.log("check api searchdate Suatchieu: ", response);
      console.log("length", res.length);
      setSuatchieu(res);
      res.map((res) => {
        const test = {
          text: res.giobatdau
        }
        setTests([test, ...tests])
      })
      // console.log(res.length)
    } catch (error) {
      console.log(error);
    }
  }


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

    handleLayTTCumrap()
    // handleLayTTSuatchieu()
    setIsBrowser(true);
  }, [chieu, idSuatchieu]);

  const handleCloseClick = () => {
    onClose()
    console.log(onClose)
    console.log(show)

  }

  const modalContent = show ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[500px]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Lịch chiếu CGV Cần Thơasdasdasd
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
          // title  && 
          (
            <StyledModal>
              {/* {title} */}
              {/* <div></div> */}
            </StyledModal>
          )}
        <StyledModalBody className="bg-gray-300 ">
          <div className="modal">
            <div className="flex pl-7">
              <DatePicker
                className=""
                // type="datetime"
                selected={startDate}
                // onChange={handlSearchLichkham}
                // onChange={(date: Date) => handleLayTTChieu(date)}
                onChange={(date: Date) => setStartDate(date)}
                // onChange={(date: Date) => handlSearchDate((date))}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            {
              cumrap.map((item, index) => {
                return (
                  <>
                    {/* <div key={index}> */}
                    <Button onClick={() => handleLayTTCumRap(item.id)} key={index} className="h-28 w-28 bg-slate-600 m-4">{item.ten_tttt}</Button>
                    {/* <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button> */}
                    {/* </div> */}
                  </>
                )
              })
            }
            {
              rap.map((item, index) => {
                // suatchieu.map((suatchieus, index) => {
                return (
                  <div key={index} className="h-12 w-28 bg-green-500 m-4">
                    {item.slghe}
                    {/* {suatchieu.giobatdau}~{suatchieu.gioketthuc} */}
                  </div>
                )
              })
            }
            {
              chieus.map((item, index) => {
                return (
                  <>
                    {/* <div key={index}> */}
                    <Button key={index} className="h-28 w-28 bg-slate-600 m-4">{item.id_rap}</Button>
                    {/* <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button> */}
                    {/* </div> */}
                  </>
                )
              })
            }
            <button
              // onClick={() => console.log("chieuuu", chieus)}
              onClick={() => handleLayTTSuatchieu()}
            >click</button>
            <button
              onClick={() => console.log("tests", tests)}
              // onClick={() => handleLayTTSuatchieu()}
            >click2</button>
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