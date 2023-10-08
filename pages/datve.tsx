import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import La from '@/Components/La';
import SodoPhongChieu from '@/Components/SodoPhongChieu';
import Sodoghe from '@/Components/Sodoghe';
import { Datve, LayTTGhe, LayTTchitietve } from '@/service/userService';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const TestDatVe = () => {
 



  useEffect(() => {
    
  }, [ ]);


  return (
<div>
    <Header/>
    <Sodoghe/>
    <Footer />  
</div>
  );
}

export default TestDatVe;
