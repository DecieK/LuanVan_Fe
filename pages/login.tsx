import React from "react";
import { Noto_Serif } from 'next/font/google'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import Axios from "axios";

const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const Login = () => {

  const [isBrowser, setIsBrowser] = useState(false);

  const [showModalDangky, setShowModalDangky] = useState(false);
  const [showModalQuenMk, setShowModalQuenMK] = useState(false);


  const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPasswordInput(e.target.value);
  // }
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

  }, []);



  const login = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/api/Dangnhap", {
      Taikhoan_KH: username,
      Matkhau_KH: password,
    }).then((response) => {
      if (response.data.errCode) {
        setLoginStatus(response.data.errCode);
        console.log("status2", loginStatus)


      } else {
        console.log("asdasdasdasd")
        router.push({
          pathname: '/',
          // query: { username: username },
        })
      }
    })
  }


  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
    // console.log("ádasdasd")

  };

  const handleBackPage = () => {
    router.push("/");

  };






  return (
    <div className={noto_serif.className}>
      <center>
        <div className="pt-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
          <form className=" h-auto w-96 bg-black bg-opacity-10 rounded-xl ">
            <h1 className="text-center uppercase text-3xl pt-6 text-white">Login</h1>
            <div className="mt-6">
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className="pr-3" />
              <input placeholder="Tên đăng nhập" className="w-3/4  border-b-2 bg-black bg-opacity-0 border-white"
                onChange={(e) => { setUsername(e.target.value) }}
              ></input>
            </div>
            <div className="mt-6">
              <FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} className="pr-3" />
              <input placeholder="Mật khẩu" className="w-3/4  border-b-2 bg-black bg-opacity-0 border-white"
                onChange={(e) => { setPassword(e.target.value) }}
              ></input>
              {/* <button className=" h-5 w-5 bg-no-repeat bg-[url('../public/Hienps.png')]"></button> */}
            </div>
            <div className="mt-7 text-xs text-white">
              <Link href="" className="float-left pl-9">Quên mật khẩu?</Link>
              <Link onClick={handleRegister} href="" className="float-right pr-8">Đăng ký</Link>
            </div>

            <button className="mt-10 uppercase text-white bg-red-400 rounded-md h-9 w-3/4"
            onClick={login}
            >đăng nhập</button>
            <button onClick={handleBackPage} className="text-left pt-3 ">Trở về</button>
            {/* <button onClick={() => Router.back()} className="text-left pt-3 ">Trở về</button> */}

            <p className="mt-7 border-2 border-red-400 w-12 h-12 rounded-full text-white pt-2">hoặc</p>
            <div className="mt-6 pb-7">
              <Link href=''>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998", }} className="w-8 h-8" />
              </Link>
              <Link href='' className="pl-3">
                <FontAwesomeIcon icon={faGooglePlusG} style={{ color: "#ffffff", }} className="w-8 h-8 bg-red-300 rounded-full" />
              </Link>
            </div>
          </form>
        </div>
      </center>
    </div>


  );
};

export default Login;