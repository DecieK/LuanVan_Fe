import Chitietphim from "@/Components/Chitietphim";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Profile from "@/Components/Profile";
import { GetServerSideProps } from "next";
import router from "next/router";


const profile = () => {
    //   const handleLogin = () => {
    //     router.push("/login");
    //     console.log("hello")
    //   };


    return (

        <div>
            <Header />
            <Profile />
            <Footer />
        </div>

    )
}

export default profile;
