
//làm lại csdl đồ ăn có ảnh, làm xong chức năng đặt có chọn nhiều đồ ăn( chọn sl xong push vào ds tính tổng giá và truyền lại sodoghe)
import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTDoan, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


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
  showDA: any;
  onCloseDA: any;
  // id_phim: number;
};
const ModalBapnuoc = ({ showDA, onCloseDA }: Props) => {

  interface Doan {
    id: number;
    ten: string;
    loai: number;
    mota: number;
    gia: number;
    size: number;
  }

  const [isBrowser, setIsBrowser] = useState(false);
  const [doan, setDoan] = useState<Doan[]>([]);



  useEffect(() => {
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
        console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTDoan()
    setIsBrowser(true);
  }, []);

  const handleCloseClick = () => {
    onCloseDA()
    console.log(onCloseDA)
    console.log(showDA)

  }

  const modalContent = showDA ? (

    <StyledModalOverlay>
      { }
      <StyledModal className=" w-10/12  rounded-lg ">
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
          <div className="modal">
            <div className="flex ">
              <div className="basis-1/2">
                <div className="flex">
                  <img height={100} width={150} src="DA1.png"></img>
                  <div className="">
                    <p>PEANUTS SINGLE COMBO 2023</p>
                    <p>01 ly nhân vật Peanuts (kèm nước)</p>
                    <p>Nhận ngay trong ngày xong phim</p>
                    <p>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</p>
                    <p>Mẫu ly phụ thuộc vào số lượng của rạp</p>
                    <p>Giá: 199.000,00 ₫</p>
                    <div className="flex">
                      <RemoveCircleOutlineIcon />
                      <p>số luọng</p>
                      <AddCircleOutlineIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="basis-1/2">
                  <div className="flex">
                    <img height={100} width={150} src="DA1.png"></img>
                    <div className="">
                      <p>PEANUTS SINGLE COMBO 2023</p>
                      <p>01 ly nhân vật Peanuts (kèm nước)</p>
                      <p>Nhận ngay trong ngày xong phim</p>
                      <p>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</p>
                      <p>Mẫu ly phụ thuộc vào số lượng của rạp</p>
                      <p>Giá: 199.000,00 ₫</p>
                      <div className="flex">
                        <RemoveCircleOutlineIcon />
                        <p>số luọng</p>
                        <AddCircleOutlineIcon />
                      </div>                    </div>
                  </div>
                </div>
                {/* <img height={100} width={100} src="DA1.png"></img>
                <div>
                  <p>PEANUTS SINGLE COMBO 2023</p>
                  <p>01 ly nhân vật Peanuts (kèm nước)</p>
                  <p>Nhận ngay trong ngày xong phim</p>
                  <p>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</p>
                  <p>Mẫu ly phụ thuộc vào số lượng của rạp</p>
                  <p>Giá: 199.000,00 ₫</p>
                  <input type="number"></input>
                </div> */}
              </div>
            </div>

          </div>
          <button>Xác nhận</button>

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

export default ModalBapnuoc;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu