import Head from 'next/head';
import axios from 'axios';
import { API_URL } from '../helper/env';

import style from '../styles/Home.module.css';
import Search from '../components/molecules/Search';
import Slider from '../components/molecules/SlideRecipe';
import Popular from '../components/molecules/SlidePopular';
import NavBar from '../components/atoms/Navbar';

export async function getStaticProps() {
   try {
      const response = await axios({
         method: 'GET',
         url: `${API_URL}recipe?limit=5`,
      });
      const data = response.data.data;
      if (!data) {
         return {
            redirect: {
               destination: '/',
               permanent: false,
            },
         };
      } else {
         return {
            props: {
               dataPopular: data,
            },
            revalidate: 5,
         };
      }
   } catch (err) {
      return {
         props: {
            dataPopular: err.message,
         },
         revalidate: 5,
      };
   }
}

function home({ dataPopular }) {
   return (
      <>
         <Head>
            <title>Ricette mobile - Form Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <div className={style.section}>
            <div className="container fluid">
               <div className="row">
                  <div className="col-12 col-lg-12 d-flex justify-content-center">
                     <Search />
                  </div>
                  <div className="col-12 col-lg-12 me-4 d-flex justify-content-center">
                     <Slider />
                  </div>
                  <div className="col-12 col-lg-12 d-flex justify-content-center">
                     <Popular data={dataPopular} />
                  </div>
                  <div className="col-12 col-lg-12 d-flex justify-content-center">
                     <NavBar />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default home;
