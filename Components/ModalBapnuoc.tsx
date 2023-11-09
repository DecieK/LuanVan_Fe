
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
import Image from 'next/image'




type Props = {
  // ctdoan: any
  showDA: any;
  onCloseDA: any;
  handleLayDuLieuTuModalBapNuoc: any;
};
const ModalBapnuoc = ({ showDA, onCloseDA, handleLayDuLieuTuModalBapNuoc }: Props) => {

  interface Doan {
    id: number;
    ten: string;
    anhminhhoa: string;
    loai: string;
    mota: string;
    gia: number;
    size: string;
    sl: number;
  }
  interface Chitietdoan {
    id: number,
    slda: number,
    id_ve: number,
    id_doan: number
  }

  const [isBrowser, setIsBrowser] = useState(false);
  const [doan, setDoan] = useState<Doan[]>([]);
  const [sl, setSl] = useState(Number);
  const [chitietdoan, setChitietdoan] = useState<Chitietdoan[]>([]);


  const [dsdoans, setDsdoans] = useState([
    {
      id: 0,
      ten: '',
      anhminhhoa: '',
      loai: '',
      mota: '',
      gia: 0,
      size: '',
      sl: 0
    },
  ])

  const handelesubtractionDoan = (id: number, sl: number) => {
    console.log("id", id)


    setDsdoans(dsdoans.map(item => {
      if (item.id === id && item.sl > 0) {
        return { ...item, sl: item.sl - 1 }
      } else {
        return item
      }
    }))

    // console.log("dsdoans", dsdoans)

  }
  const handeleAddDoan = (id: number, sl: number) => {
    console.log("id", id)


    setDsdoans(dsdoans.map(item => {
      if (item.id === id) {
        return { ...item, sl: item.sl + 1 }
      } else {
        return item
      }
    }))

    // console.log("dsdoans", dsdoans)

  }

  useEffect(() => {

    // console.log("asdasd", chitietdoan)
    // const res: Chitietdoan[] = ctdoan;
    // res.map((ctda)=>{
    //   console.log("asdasd",ctda.id_doan)
    // })
    const handleLayTTDoan = async () => {
      dsdoans.map((da) => {
        if (da.ten === "") {
          dsdoans.splice(0, dsdoans.length);
        }
      })
      try {

        const params = {
          key: "ALL",
        };
        // console.log("searchdate", params);
        const response = await LayTTDoan(params);
        const res: Doan[] = response.doans;
        console.log("check api Doan: ", response);
        // console.log("length", res.length);
        setDoan(res);
        console.log(res)
        res.map((res) => (
          dsdoans.push({
            id: res.id,
            ten: res.ten,
            anhminhhoa: res.anhminhhoa,
            loai: res.loai,
            mota: res.mota,
            gia: res.gia,
            size: res.size,
            sl: 0,
          })
        ));
        console.log("res", res);

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTDoan()
    setIsBrowser(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseClick = () => {
    onCloseDA()
    console.log(onCloseDA)
    console.log(showDA)

  }
  const handleTruyenduLieuveSodoghe = () => {
    handleCloseClick()
    handleLayDuLieuTuModalBapNuoc(dsdoans)
  }

  const modalContent = showDA ? (

    <StyledModalOverlay>
      { }
      <StyledModal className=" w-80/12  rounded-lg ">
        <StyledModalHeader className=" bg-red-500  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Dịch vụ
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
            {/* <div className="flex"> */}

            <div className="grid grid-cols-2 m-3 gap-3 " >
              {dsdoans.map((item, index) => {
                let i = 0
                return (
                  <div key={index} className="col-span-1">
                    <div
                      className="flex space-x-4">
                      <Image
                        className="h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 "
                        src={new Buffer(item.anhminhhoa, "base64").toString("binary")}
                        width={150}
                        height={100}
                        alt="Picture of the author"
                      />
                      <div className=''>
                        <p className='uppercase font-semibold text-xl'>{item.ten}</p>
                        <div className='list-inside text-gray-600'>
                          <li className=''>{item.mota}</li>
                          {/* <li className=''>Nhận ngay trong ngày xong phim</li>
                          <li className=''>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</li>
                          <li className=''>Mẫu ly phụ thuộc vào số lượng của rạp</li> */}
                          <li className=''>Giá: {item.gia} ₫</li>
                          <div className="flex">
                            <RemoveCircleOutlineIcon
                              onClick={() => handelesubtractionDoan(item.id, item.sl)}
                            />
                            <div>
                              {item.sl}
                              {/* {chitietdoan.map((ctda)=> ctda.id === item.id ? ctda.slda : item.sl)} */}
                            </div>

                            <AddCircleOutlineIcon onClick={() => handeleAddDoan(item.id, item.sl)} />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
              {/* <div className="basis-1/2">
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
                </div>*/}
              {/* </div>  */}
            </div>

          </div>
          <div className='text-center mt-7'>
            <button
              onClick={() => handleTruyenduLieuveSodoghe()}
              className='bg-red-400 uppercase w-32 mb-5 h-10 hover:bg-red-500 rounded-md'>
              xác nhận
            </button>
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

export default ModalBapnuoc;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu