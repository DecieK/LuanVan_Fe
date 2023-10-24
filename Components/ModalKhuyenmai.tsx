import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTDoan, LayTTKM, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";



// type Props = {
//     //   fullname: string;
//     //   name_clinic: string;
//     //   iddv: number;
//     show: any;
//     onClose: any;
//     id_phim: number;
// };
// export type thongtinbenhnhan = {
//   id: number;
//   Ho: string;
//   Ten: string;
//   Dienthoai: string;
//   Gioitinh: string;
//   Diachi: string;
//   Hovaten: string;
// };
type Props = {
  //   fullname: string;
  //   name_clinic: string;
  //   iddv: number;
  showKM: any;
  onCloseKM: any;
  // id_phim: number;
};
const ModalKhuyenmai = ({ showKM, onCloseKM }: Props) => {

  interface Khuyenmai {
    id: number;
    ten_KM: string;
    tile_KM: number;
    mota_KM: string;
    dieukien_KM: number;
    thoigianbatdau: Date;
    thoigianketthuc: Date;
  }

  const [isBrowser, setIsBrowser] = useState(false);
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);



  useEffect(() => {
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
        console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTKM()
    setIsBrowser(true);
  }, []);

  const handleCloseClick = () => {
    onCloseKM()
    console.log(onCloseKM)
    console.log(showKM)

  }

  const modalContent = showKM ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[500px]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Bắp nước
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
          <div className="modal">ádas</div>
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

export default ModalKhuyenmai;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu