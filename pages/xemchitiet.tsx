import Chitietphim from "@/Components/Chitietphim";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { GetServerSideProps } from "next";
import router from "next/router";

interface codeProductProps {
  id_phim: string | null;
}
const xemchitiet = ({id_phim}: codeProductProps) => {
  const handleLogin = () => {
    router.push("/login");
    console.log("hello")
  };


  return (

    <div>
      <Header />
      <Chitietphim id_phim={id_phim} />
      <Footer />
    </div>

  )
}
export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  const { id_phim } = context.query;

  return {
    props: {
      id_phim: id_phim as string | null,
    },
  };
};
export default xemchitiet;
