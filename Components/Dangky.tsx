import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


type Props = {
  show: any;
  onClose: any;
};

const Dangky = ({ onClose, show }: Props) => {

  const [isBrowser, setIsBrowser] = useState(false);
  const [gt, setGT] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");



  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const onChangeGT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGT(e.target.value)
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
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="tài khoản" type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="mật khẩu" type="password" />

              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="NHẬP CHÍNH XÁC HỌ TÊN" type="text" />
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
              ></input>              <div className="col-span-4 mx-10 ">
                <input onChange={onChangeGT} type="radio" value="Nam" name='gt' checked={gt === "Nam"} /> Nam
                <input className="ml-9" onChange={onChangeGT} type="radio" value="Nu" name='gt' checked={gt === "Nu"} /> Nữ
              </div>
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="SDT" type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="email" type="email" />

              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="Địa chỉ" type="text" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="SDT" type="text" />
              {/* <div className="grid grid-cols-5 py-2">
                <div className="col-span-1 pl-5">
                  <p className="datlich_text_desktop text-right">Giới tính</p>
                </div>


              </div> */}
              <button className="bg-slate-600 flex  ">Đăng ký</button>
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