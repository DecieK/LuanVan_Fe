import { DangKy_KH } from "@/service/userService";
import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


type Props = {
  show: any;
  onClose: any;
};

const Dangky = ({ onClose, show }: Props) => {

  const [isBrowser, setIsBrowser] = useState(false);
  const [hten_KH, setHten_KH] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");
  const [gt_KH, setGT_KH] = useState("");
  const [sdt_KH, setSdt_KH] = useState("");
  const [cccd_KH, setCccd_KH] = useState("");
  const [email_KH, setEmail_KH] = useState("");
  const [diachi_KH, setDiachi_KH] = useState("");
  const [taikhoan_KH, setTaikhoan_KH] = useState("");
  const [matkhau_KH, setMatkhau_KH] = useState("");




  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const onChangeGT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGT_KH(e.target.value)
  }

  const handleDangKy = async () => {
    console.log("hoten", hten_KH)
    console.log("Ngaysinh", Ngaysinh)
    console.log("gt", gt_KH)
    console.log("sdt_KH", sdt_KH)
    console.log("cccd_KH", cccd_KH)
    console.log("email_KH", email_KH)
    console.log("diachi_KH", diachi_KH)
    console.log("taikhoan_KH", taikhoan_KH)
    console.log("matkhau_KH", matkhau_KH)
    let res = await DangKy_KH(
      {
        hten_KH: hten_KH,
        Ngaysinh: Ngaysinh,
        gt_KH: gt_KH,
        sdt_KH: sdt_KH,
        cccd_KH: cccd_KH,
        email_KH: email_KH,
        diachi_KH: diachi_KH,
        taikhoan_KH: taikhoan_KH,
        matkhau_KH: matkhau_KH     

      });
      if (res && res.errCode === 0) {

        console.log(res)
        alert("Đăng ký thành công")
  
        handleCloseClick();
      } else {
       
        console.log(res)
        alert("Đăng ký không thành công")
  
      };
  }
  const handleCloseClick = () => {
    // window.location.reload()
    // e.preventDefault();
    onClose();


  };
  const modalContent = show ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[500px]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Đăng ký tài khoản
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
          <div className="modal ">
            <div>
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="tài khoản"
                onChange={(event) => setTaikhoan_KH(event.target.value)}
                type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="mật khẩu"
                onChange={(event) => setMatkhau_KH(event.target.value)}
                type="password" />

              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="NHẬP CHÍNH XÁC HỌ TÊN"
                onChange={(event) => setHten_KH(event.target.value)}
                type="text" />
              <input
                id="ngaysinh"
                className=" w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                data-date-format="dd-MM-yy"
                type="date"
                // clearIcon={null}
                // placeholder="DD/MM/YYYY"
                data-inputmask-alias="date"
                data-inputmask-inputformat="dd-mm-yyyy"
                data-mask=""
                im-insert="false"
                value={Ngaysinh}
                // onChange={(Ngaysinh: Date) => handleOnchangeDate((Ngaysinh))}
                onChange={(event) => setNgaysinh(event.target.value)}
              ></input>
              <div className="col-span-4 mx-10 ">
                <input onChange={onChangeGT} type="radio" value="Nam" name='gt' checked={gt_KH === "Nam"} /> Nam
                <input className="ml-9" onChange={onChangeGT} type="radio" value="Nu" name='gt' checked={gt_KH === "Nu"} /> Nữ
              </div>
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="SDT"
                onChange={(event) => setSdt_KH(event.target.value)}
                type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="CCCD"
                onChange={(event) => setCccd_KH(event.target.value)}
                type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="email"
                onChange={(event) => setEmail_KH(event.target.value)}
                type="email" />

              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none"
                placeholder="Địa chỉ"
                onChange={(event) => setDiachi_KH(event.target.value)}
                type="text" />
              {/* <div className="grid grid-cols-5 py-2">
                <div className="col-span-1 pl-5">
                  <p className="datlich_text_desktop text-right">Giới tính</p>
                </div>


              </div> */}
              <button className="bg-slate-600 flex"
              onClick={handleDangKy}
              >Đăng ký</button>
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

export default Dangky;