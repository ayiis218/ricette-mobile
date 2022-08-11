import Head from 'next/head';
import axios from 'axios';
import { API_URL } from '../helper/env';

import style from '../styles/Home.module.css';
import Search from '../components/molecules/Search';
import Slider from '../components/molecules/SlideRecipe';
import Popular from '../components/molecules/SlidePopular';
import NavBar from '../components/atoms/Navbar';

export async function getStaticProps() {
   const newRecipe = await axios({
      method: 'GET',
      url: `${API_URL}recipe/latest`,
   });
   const popularRecipe = await axios({
      method: 'GET',
      url: `${API_URL}recipe`,
   });
   return {
      props: {
         dataNew: newRecipe?.data?.data,
         dataPopular: popularRecipe?.data.data,
      },
   };
}

function home({ dataNew, dataPopular }) {
   return (
      <>
         <Head>
            <title>Form Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <div className={style.section}>
            <div className="container fluid">
               <div className="row">
                  <div className="col col-lg-12 d-flex justify-content-center">
                     <Search />
                  </div>
                  <div className="col col-lg-12 d-flex justify-content-center">
                     <Slider data={dataNew} />
                  </div>
                  <div className="col col-lg-12 d-flex justify-content-center">
                     <Popular data={dataPopular} />
                  </div>
                  <div className="col col-lg-12 d-flex justify-content-center">
                     <NavBar />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default home;
