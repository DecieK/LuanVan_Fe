import React from "react";
import { Noto_Serif } from 'next/font/google'
import Combobox from "react-widgets/Combobox";
import { Checkbox } from "@nextui-org/react";
import { useRouter } from "next/router";
import Router from 'next/router'



const noto_serif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Register = () => {

  const router = useRouter();


  const handleBackPage = () => {
  router.push("/");
  
};
  return (
    <div className={noto_serif.className }>
        <div className="pt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
          <form className="text-black m-auto text-sm h-auto w-[450px] bg-yellow-900 bg-opacity-20 rounded-xl leading-loose">
              <h1 className="text-center uppercase text-3xl pt-6 ">Register</h1>
              <div className="pl-6">
                <p>Tên đăng nhập:</p>
                <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white" ></input>

                <p>Mật khẩu:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <p>Xác nhận lại mật khẩu:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <p>Họ và tên:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <p>Ngày sinh:</p>
                <input type="Date" placeholder="" className="w-[90%] border-2 border-gray-300" ></input>
                <div className="flex">
                  <p>Giới tính:</p>
                  <input type="radio"  className="ml-5"></input> <label>Nam</label>
                  <input type="radio" className="ml-5"></input> <label>Nữ</label>
                </div>
                
                <p>Địa chỉ:</p>
                <div className="flex">
                  <Combobox placeholder="Tỉnh/Thành Phố" className="mr-5"/>
                  <Combobox placeholder="Quận/Huyện"/>
                </div>
                

                <p>Email:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <p>Căn cước công dân:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <p>Số điện thoại:</p>
                <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input>

                <button className="uppercase w-[90%] h-8 mt-6 mb-6 bg-green-600">Đăng kí</button>
                <button onClick={handleBackPage} className="text-left pt-3 ">Trở về</button>
                {/* <button onClick={() => Router.back()} className="text-left pt-3 ">Trở về</button> */}
              </div>

          </form>
        </div>
    </div>

  );
};

export default Register;
