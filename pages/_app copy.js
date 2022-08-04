import App from 'next/app';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';

import '../styles/globals.css';

export default class MyApp extends App {
   static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
         ? await Component.getInitialProps(ctx)
         : {};

      return { pageProps };
   }

   render() {
      const { Component, pageProps } = this.pageProps;

      return (
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <MainApp Component={Component} pageProps={pageProps} />
            </PersistGate>
         </Provider>
      );
   }
}

const MyApp = ({ Component, pageProps }) => {
   const router = useRouter();
   const { auth } = useSelector((state) => state);
   return <Component {...pageProps} />;
};
