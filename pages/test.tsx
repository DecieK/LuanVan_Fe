// import React from "react";
// import { AppProps } from "next/app";
// import Head from "next/head";
// // import "@styles/global.scss";
// import { Provider } from "react-redux";
// import store from "@redux/store";  
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "src/createMiuitheme";


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

// export default MyApp;