import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import La from '@/Components/La';
import SodoPhongChieu from '@/Components/SodoPhongChieu';
import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTGhe, LayTTchitietve } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import { GetServerSideProps } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
<<<<<<< HEAD


=======
>>>>>>> a61ab55f2f709eb7425e64108d2d07720be97125
interface codeProductProps {
  id_phim: string | null;
  id_rap: string | null;
  ngaychieu: string | null;
}
<<<<<<< HEAD

const TestDatVe = ({id_phim, id_rap, ngaychieu}:codeProductProps) => {
   useEffect(() => {
=======
const TestDatVe = ({id_phim, id_rap, ngaychieu}:codeProductProps) => {

  useEffect(() => {
>>>>>>> a61ab55f2f709eb7425e64108d2d07720be97125
    
  }, [ ]);

  return (
<div>
    <Header/>
    <Sodoghe id_phimP={id_phim} id_rapP={id_rap} ngaychieuP={ngaychieu}/>
    <Footer />  
</div>
  );
}
export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
<<<<<<< HEAD
  const { id_rap } = context.query;
  const { id_phim } = context.query;
=======
  const { id_phim } = context.query;
  const { id_rap } = context.query;
>>>>>>> a61ab55f2f709eb7425e64108d2d07720be97125
  const { ngaychieu } = context.query;

  return {
    props: {
<<<<<<< HEAD
      id_rap: id_rap as string | null,
      id_phim: id_phim as string | null,
=======
      id_phim: id_phim as string | null,
      id_rap: id_rap as string | null,
>>>>>>> a61ab55f2f709eb7425e64108d2d07720be97125
      ngaychieu: ngaychieu as string | null,

    },
  };
};
export default TestDatVe;
