import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@material-tailwind/react";



type Props = {
  //   fullname: string;
  //   name_clinic: string;
  //   iddv: number;
  show: any;
  onClose: any;
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
const Modal = ({ show, onClose }: Props) => {


  const [Ngaysinh, setNgaysinh] = useState<any>()
  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  useEffect(() => {
    setIsBrowser(true);
  }, []);
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
                onChange={(date: Date) => setStartDate(date)}
                // onChange={(date: Date) => handlSearchDate((date))}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
            <Button className="h-28 w-28 bg-slate-600 m-4">Vincom Ninh kiều</Button>
            <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button>
            </div>
           <div>
           <button className="h-12 w-28 bg-green-500 m-4">12:10 ~ 14:46<br/>116/118 Ghế</button>
            <button className="h-12 w-28 bg-green-500 m-4">12:10 ~ 14:46<br/>116/118 Ghế</button>
            <button className="h-12 w-28 bg-green-500 m-4">12:10 ~ 14:46<br/>116/118 Ghế</button>
            <button className="h-12 w-28 bg-green-500 m-4">12:10 ~ 14:46<br/>116/118 Ghế</button>
           </div>

            
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

