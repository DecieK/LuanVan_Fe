import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Dangky from "./Dangky";


type Props = {
  show: any;
  onClose: any;
};

const QuenMk = ({ onClose, show }: Props) => {

  const [isBrowser, setIsBrowser] = useState(false);

  const [showModalDangky, setShowModalDangky] = useState(false);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }



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
      <StyledModal className="  w-[30%]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Đăng nhập

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
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="tài khoản" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="mật khẩu" name="password" type={passwordType} onChange={handlePasswordChange} value={passwordInput} />
              <button onClick={togglePassword}>
                {passwordType === "password" 
                ? <button className="  h-[20px] w-[20px] bg-no-repeat bg-[url('../public/hienMk.png')]"></button> 
                : <button className=" h-[20px] w-[20px] bg-no-repeat bg-[url('../public/hide.png')]"></button>}
              </button>

            </div>
            <Dangky
              onClose={() => setShowModalDangky(false)}
              show={showModalDangky}
            ></Dangky>
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
  // padding-top: 1px;
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

export default QuenMk;