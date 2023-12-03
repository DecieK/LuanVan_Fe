// import React from "react";
// import { AppProps } from "next/app";
// import Head from "next/head";
// // import "@styles/global.scss";
// import { Provider } from "react-redux";
// import store from "@redux/store";  
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "src/createMiuitheme";

import { handleUpdateMatkhau } from "@/service/userService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Capnhatmatkhau = () => {


const [mk,setMk] = useState(String)
// const [email,setemail] = useState(String)

const router = useRouter();

  useEffect(() => {

  }, []);
const handleUpdatePS = async (email : string) => {
    console.log('email', email)
    let res = await handleUpdateMatkhau(
        {
          email: email,
          matkhau: mk
          
        });
        if( res && res.errCode === 0){
            console.log(res)
            alert('Cập nhật thành công')
            router.push('/login')
        }else{
            console.log(res)

            alert('Cập nhật không thành công')
        }
}
  return (
    <div>
     {/* <input className="border-2 border-yellow-600" value={router.query.email} />
      <input className="border-2 border-yellow-600" value={mk} onChange={(e)=>setMk(e.target.value)}/>matkhau */}
      <div className="bg-gray-200 w-96 m-auto mt-10 pb-5 rounded-lg space-y-4 text-center">
      <p className="uppercase font-semibold text-xl pt-5">đặt lại mật khẩu</p>
      <p className="mx-5">Nhập lại mật khẩu mới cho tài khoản {router.query.email}</p>
      <input type="password" className=" border-2 border-black h-9 w-10/12 pl-1"  placeholder="Nhập mật khẩu mới"/>
      <input type="email" className=" border-2 border-black h-9 w-10/12 pl-1" placeholder="Nhập lại mật khẩu" />
      <button className=" bg-red-400 w-6/12 h-8 uppercase rounded-lg font-semibold" onClick={()=>handleUpdatePS(String(router.query.email))}>Cập nhật mật khẩu</button>
    </div>

    </div>


  )
}
export default Capnhatmatkhau;
