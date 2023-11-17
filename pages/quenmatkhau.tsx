// import React from "react";
// import { AppProps } from "next/app";
// import Head from "next/head";
// // import "@styles/global.scss";
// import { Provider } from "react-redux";
// import store from "@redux/store";  
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "src/createMiuitheme";

import { handleQuenMatKhau, handleUpdateMatkhau } from "@/service/userService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Quenmatkhau = () => {


    // const [mk, setMk] = useState(String)
    const [email, setemail] = useState(String)

    const router = useRouter();

    useEffect(() => {

    }, []);
    const handleUpdatePS = async () => {
        console.log('email', email)
        let res = await handleQuenMatKhau(
            {
                email: email

            });
        if (res && res.errCode === 0) {
            console.log(res)
            alert('Kiểm tra email để xác thực tài khoản')
            // router.push('/login')
        } else {
            console.log(res)

            alert('Cập nhật không thành công')
        }
    }
    return (
        <div>
            <input className="border-2 border-yellow-600" value={email} onChange={(e) => setemail(e.target.value)} />

            <button onClick={() => handleUpdatePS()}>Gửi mail xác thực</button>
        </div>


    )
}
export default Quenmatkhau;
