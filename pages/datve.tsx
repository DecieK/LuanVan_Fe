// import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
// import La from '@/Components/La';
// import SodoPhongChieu from '@/Components/SodoPhongChieu';
import Sodoghe from '@/Components/Sodoghe';
// import { Datve, LayTTGhe, LayTTchitietve } from '@/service/userService';
// import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import { GetServerSideProps } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';


interface codeProductProps {
  id_phim: string | null;
  id_rap: string | null;
  ngaychieu: string | null;
  tenP: string | null;
  tenrapP: string | null;
  giobdP: string | null;
  gioktP: string | null;
  tencumrapP: string | null;

}

const TestDatVe = ({id_phim, id_rap, ngaychieu, tenP, tenrapP, giobdP, gioktP,tencumrapP}:codeProductProps) => {
   useEffect(() => {
    
  }, [ ]);

  return (
<div>
    <Header/>
    <Sodoghe id_phimP={id_phim} id_rapP={id_rap} ngaychieuP={ngaychieu} tenP={tenP} tenrapP={tenrapP} giobdP={giobdP} gioktP={gioktP} tencumrapP={tencumrapP} />
    {/* <Footer />   */}
</div>
  );
}
export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  const { id_rap } = context.query;
  const { id_phim } = context.query;
  const { ngaychieu } = context.query;
  const { tenP } = context.query;
  const { tenrapP } = context.query;
  const { giobdP } = context.query;
  const { gioktP } = context.query;
  const { tencumrapP } = context.query;


  return {
    props: {
      id_rap: id_rap as string | null,
      id_phim: id_phim as string | null,
      ngaychieu: ngaychieu as string | null,
      tenP: tenP as string | null,
      tenrapP: tenrapP as string | null,
      giobdP: giobdP as string | null,
      gioktP: gioktP as string | null,
      tencumrapP: tencumrapP as string | null

    },
  };
};
export default TestDatVe;
