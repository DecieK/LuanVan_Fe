import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Dangky from "./Dangky";
import QuenMk from "./QuenMK";
import Header from "./Header";
import router from "next/router";



type Props = {
  show: any;
  onClose: any;
};

const Dangnhap = ({ onClose, show }: Props) => {

  const [isBrowser, setIsBrowser] = useState(false);

  const [showModalDangky, setShowModalDangky] = useState(false);
  const [showModalQuenMk, setShowModalQuenMK] = useState(false);


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

  const handleSignOTP = () => {
    router.push({
      pathname: '/signOTP'
      // query: { username: username },
    })
  }


  useEffect(() => {
    setIsBrowser(true);
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
          <div className="modal">
            <div>
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="tài khoản" />
              <input className="w-[70%] border-slate-500 border-dotted  p-1 m-2 outline-none" placeholder="mật khẩu" name="password" type={passwordType} onChange={handlePasswordChange} value={passwordInput} />
              <button onClick={togglePassword}>
                {passwordType === "password"
                  ? <button className="  h-[20px] w-[20px] bg-no-repeat bg-[url('../public/hienMk.png')]"></button>
                  : <button className=" h-[20px] w-[20px] bg-no-repeat bg-[url('../public/hide.png')]"></button>}
              </button>
              <a className="flex pl-2 col-span-1 hover:text-red-600 cursor-pointer italic text-xs "
                onClick={handleSignOTP}>
                Quên mật khẩu
              </a>

              <div className="grid grid-cols-3 p-2">
                <button className=" col-span-1 bg-slate-600  m-1" onClick={() => setShowModalDangky(true)}>Đăng ký</button>
                <button className="col-span-1 bg-slate-600 m-1">Đăng Nhập</button>
              </div>
            </div>
            <Dangky
              onClose={() => setShowModalDangky(false)}
              show={showModalDangky}
            ></Dangky>
            <QuenMk
              onClose={() => setShowModalQuenMK(false)}
              show={showModalQuenMk}
            ></QuenMk>
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

export default Dangnhap;