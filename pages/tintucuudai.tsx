import Header from "@/Components/Header";
import Image from 'next/image'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';


function quidinh() {
    return (
        <div className="">
            <Header />
            <div className="max-w-screen-xl m-auto">
                <p className="uppercase font-semibold text-3xl text-center py-10">tin tức ưu đãi</p>
                <div className="grid grid-cols-4 gap-3 place-items-center  w-10/12 m-auto">
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc1.png'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        <div className="flex justify-center pt-2 space-x-2">
                            <CalendarMonthIcon sx={{ color: 'red' }} />
                            <p className=" ">8/12/2023 - 24/12/2023</p>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc2.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        <div className="flex justify-center pt-2 space-x-2">
                            <CalendarMonthIcon sx={{ color: 'red' }} />
                            <p className=" ">8/12/2023 - 24/12/2023</p>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc1.png'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        <div className="flex justify-center pt-2 space-x-2">
                            <CalendarMonthIcon sx={{ color: 'red' }} />
                            <p className=" ">8/12/2023 - 24/12/2023</p>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc2.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                        <div className="flex justify-center pt-2 space-x-2">
                            <CalendarMonthIcon sx={{ color: 'red' }} />
                            <p className=" ">8/12/2023 - 24/12/2023</p>
                        </div>
                    </div>

                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc1.png'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc2.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc1.png'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="">
                        <Image
                            className="w-52 h-36 "
                            src='/qc2.jpg'
                            width={1500}
                            height={1500}
                            alt="Picture of the author"
                        />
                    </div>
                    pt</div>
            </div>

        </div>
    );
}

export default quidinh;

