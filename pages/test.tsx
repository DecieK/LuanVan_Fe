// import React from "react";
// import { AppProps } from "next/app";
// import Head from "next/head";
// // import "@styles/global.scss";
// import { Provider } from "react-redux";
// import store from "@redux/store";  
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "src/createMiuitheme";

import { LayTTGhe } from "@/service/userService";
import { useEffect, useState } from "react";


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
  const handleTest = () => {
    for (let y = 0; y < 100; y++) {
      const dsgheDD = {
        // code:'asd',
        code: 'INSERT INTO `ghes` (`id`, `maGhe`, `loaiGhe`, `id_rap`, `createdAt`, `updatedAt`) VALUES' + ' (' + {y} + ', A' + {y} + ', ' + 'Thường' + ', ' + '1' + ', ' + '2023-10-03 19:03:03.000000' + ', ' + '2023-10-03 19:03:03.000000' + ');'

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


  return (
    <div>
      <button onClick={handleTest}>click</button>
      {

        dsgheDDs.map((item, index) => {
          return (
            <div key={index}>
              {item.code}
            </div>
          )
        })
      }
    </div >
  )
}
export default Test;
