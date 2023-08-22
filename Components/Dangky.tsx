import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


type Props = {
  show: any;
  onClose: any;
};

const Dangky = ({ onClose, show }: Props) => {

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

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
              ádasd
              <br />
              ádasd
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
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="tài khoản" type="text" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="mật khẩu" type="password" />

              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="NHẬP CHÍNH XÁC HỌ TÊN" type="text" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="NHẬP CHÍNH XÁC HỌ TÊN" type="date" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="NHẬP CHÍNH XÁC HỌ TÊN" type="radio" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="SDT" type="text" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="email" type="email" />

              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="Địa chỉ" type="text" />
              <input className="w-full  border-slate-500 border-dotted font-bold border-b-2" placeholder="SDT" type="text" />
              <button className="bg-slate-600">Đăng ký</button>
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