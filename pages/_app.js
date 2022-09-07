import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper, store, persistor } from '../redux/store';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               {/* <PersistWrapper loading={null} wrapperConfig={persisWrapper}> */}
               <NextNProgress color="var(--secondColor)" height={5} />
               <Component {...pageProps} />
               {/* </PersistWrapper> */}
            </PersistGate>
         </Provider>
      </>
   );
}

export default wrapper.withRedux(MyApp);
