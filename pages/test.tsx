// import React from "react";
// import { AppProps } from "next/app";
// import Head from "next/head";
// // import "@styles/global.scss";
// import { Provider } from "react-redux";
// import store from "@redux/store";  
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "src/createMiuitheme";

import { LayTTGhe, VNPay } from "@/service/userService";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';


// import "~slick-carousel/slick/slick.css";               //here
// import "~slick-carousel/slick/slick-theme.css";         //here

// function MyApp({ Component, pageProps }: AppProps): JSX.Element {
//   // const theme = responsiveFontSizes(createTheme());
//   return (
//     <>
//       <Head>
//         <link rel="shortcut icon" href="#" />
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
//         />
//         <meta name="theme-color" content={theme.palette.primary.main} />
//       </Head>
//       <Provider store={store}>
//         <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//           <Component {...pageProps} />
//         </MuiThemeProvider>
//       </Provider>
//     </>
//   );
// }
const Test = () => {
  interface Ghe {
    id: number;
    maGhe: string;
    loaiGhe: string;
  }
  const [i, setI] = useState(110);
  const [ghe, setGhe] = useState<Ghe[]>([]);

  const [dsgheDDs, setDsgheDDs] = useState([
    {
      code: ''
    },
  ])
  const handleXoaTTChieu = async () => {
      try {
          const params = {
            id: 1
          };
          // console.log("searchdate", params);
          const response = await VNPay(params);
          const res: Ghe[] = response.ghes;
          // console.log("check api searchdate ghe: ", response);
          // console.log("length", res.length);
          setGhe(res);
          // console.log(res.length)

      } catch (error) {
          console.log(error);
      }
  
  }
  const handleTest = () => {
    for (let y = 0; y < 100; y++) {
      const dsgheDD = {
        // code:'asd',
        code: 'INSERT INTO `ghes` (`id`, `maGhe`, `loaiGhe`, `id_rap`, `createdAt`, `updatedAt`) VALUES' + ' (' + { y } + ', A' + { y } + ', ' + 'Thường' + ', ' + '1' + ', ' + '2023-10-03 19:03:03.000000' + ', ' + '2023-10-03 19:03:03.000000' + ');'

      }
      setDsgheDDs([...dsgheDDs, dsgheDD])
      console.log("y", y)
      console.log("dsgheDDs", dsgheDDs)

    }
  }
  useEffect(() => {
    const handleLayTTGhe = async () => {
      try {

        const params = {
          key: "ALL",
        };
        console.log("searchdate", params);
        const response = await LayTTGhe(params);
        const res: Ghe[] = response.ghes;
        console.log("check api searchdate ghe: ", response);
        console.log("length", res.length);
        setGhe(res);
        console.log(res)
        // res.map((res) => (

        // ));
        // console.log("gheArr",gheArr);

      } catch (error) {
        console.log(error);
      }
    }
    handleLayTTGhe()
  }, []);


  //   return (

  // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //     <a href="#" className="flex items-center">
  //         {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
  //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  //     </a>
  //     <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
  //         <span className="sr-only">Open main menu</span>
  //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
  //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
  //         </svg>
  //     </button>
  //     <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
  //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //         <li>
  //           <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
  //         </li>
  //         <li>
  //             <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  //   </svg></button>
  //             {/* <!-- Dropdown menu --> */}
  //             <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
  //                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
  //                   <li>
  //                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
  //                   </li>
  //                   <li>
  //                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
  //                   </li>
  //                   <li>
  //                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
  //                   </li>
  //                 </ul>
  //                 <div className="py-1">
  //                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
  //                 </div>
  //             </div>
  //         </li>
  //         <li>
  //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
  //         </li>
  //         <li>
  //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
  //         </li>
  //         <li>
  //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  //   )
  return (
    <>
        <Link href="http://localhost:8080/order/create_payment_url">home</Link>
{/* 
      <ReactPlayer
        height={300}
        width={300}
        // playing={true}
        controls={true}
        poster
        url='https://www.youtube.com/watch?v=JBh7SlUwPUg' /> */}
      {/* <ReactPlayer
        height={300}
        width={500}
        // playing={true}
        controls={true}
        poster
        url="https://www.youtube.com/watch?v=JBh7SlUwPUg"></ReactPlayer> */}
    </>


  )
}
export default Test;
