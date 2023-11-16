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
     <input className="border-2 border-yellow-600" value={router.query.email} />
      <input className="border-2 border-yellow-600" value={mk} onChange={(e)=>setMk(e.target.value)}/>matkhau
      <button onClick={()=>handleUpdatePS(String(router.query.email))}>Cập nhật mật khẩu</button>
    </div>


  )
}
export default Capnhatmatkhau;
