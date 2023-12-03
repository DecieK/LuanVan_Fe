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
            {/* <input className="border-2 border-yellow-600" value={email} onChange={(e) => setemail(e.target.value)} /> */}

            {/* <button onClick={() => handleUpdatePS()}>Gửi mail xác thực</button> */}
            <div className="bg-gray-200 w-96 m-auto mt-10 pb-5 rounded-lg space-y-4 text-center">
                <p className="uppercase font-semibold text-xl pt-5">Quên mật khẩu</p>
                <p className="mx-5">Vui lòng nhập email của bạn để xác nhận lấy lại mật khẩu</p>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className=" border-2 border-black h-9 w-10/12 pl-1" />
                <button className=" bg-red-400 w-6/12 h-8 uppercase rounded-lg font-semibold"
                    onClick={() => handleUpdatePS()}>Gửi mail xác thực</button>
                <p className="text-blue-500 text-sm">Quay lại đăng nhập</p>

            </div>
        </div>


    )
}
export default Quenmatkhau;
