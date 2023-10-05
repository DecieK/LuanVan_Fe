import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";



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

  const [Ngaysinh, setNgaysinh] = useState<any>()
  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [chieu, setChieu] = useState<Chieu[]>([]);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);
  const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
  const [idChieu, setIdChieu] = useState(Number);




  const handleLayTTChieu = async (id_rap: number) => {
    // console.log(date)
    // const key = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    // const keyfm = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    // console.log(keyfm)
    // setStartDate(date)
    let res = await layTTChieu(
      {
        id_phim: id_phim,
        ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
        id_rap: id_rap
      });
    console.log("res", res)
    try {
      const res1: Chieu[] = res.ttchieu;
      res1.map((res1) => {
        setIdChieu(res1.id_suatchieu)
        console.log(res1.id_phim)
      })
    } catch (error) {
      console.log(error);
    }

    // if (res && res.errCode === 0) {

    //   console.log(res)
    //   alert("Đăng ký thành công")

    //   handleCloseClick();
    // } else {

    //   console.log(res)
    //   alert("Đăng ký không thành công")

    // };

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
    const handleLayTTSuatchieu = async () => {
      try {
        const params = {
          key: idChieu,
        };
        // console.log("searchdate", params);
        const response = await LayTTSuatchieu(params);
        const res: Suatchieu[] = response.suatchieus;
        // console.log("check api searchdate Suatchieu: ", response);
        // console.log("length", res.length);
        setSuatchieu(res);
        // console.log(res.length)
      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTCumrap()
    handleLayTTSuatchieu()
    setIsBrowser(true);
  }, [idChieu]);
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
              Lịch chiếu CGV Cần Thơ
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
                    <Button onClick={()=> handleLayTTChieu(item.id)} key={index} className="h-28 w-28 bg-slate-600 m-4">{item.ten_tttt}</Button>
                    {/* <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button> */}
                    {/* </div> */}
                  </>
                )
              })
            }
            {/* <div> */}
            {suatchieu.map((item, index) => {
              return (
                <div key={index}>
                  <button className="h-12 w-28 bg-green-500 m-4">{item.giobatdau} ~ {item.gioketthuc}<br />116/118 Ghế</button>
                  <button className="h-12 w-28 bg-green-500 m-4">{item.giobatdau} ~ {item.gioketthuc}<br />116/118 Ghế</button>
                  <button className="h-12 w-28 bg-green-500 m-4">{item.giobatdau} ~ {item.gioketthuc}<br />116/118 Ghế</button>
                  <button className="h-12 w-28 bg-green-500 m-4">{item.giobatdau} ~ {item.gioketthuc}<br />116/118 Ghế</button>
                </div>
              )
            })}
            {/* </div> */}


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

