/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import Loading from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestRecipe } from '../../../redux/action/recipe';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_URL } from '../../../helper/env';
import Default from '../../../public/img/original.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from './style.module.css';
import { useRouter } from 'next/router';

function Index() {
   const [loading, setLoading] = useState(true);
   const router = useRouter();
   const dispatch = useDispatch();
   const { latestRecipe } = useSelector((state) => state);

   useEffect(() => {
      setLoading(false);
      dispatch(getLatestRecipe(8));
   }, [dispatch]);
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col">
                  <h1 className="heading">New Recipes</h1>
               </div>
               <Swiper
                  slidesPerView={3}
                  slidesPerGroup={1}
                  loopFillGroupWithBlank
                  modules={[Navigation]}
                  breakpoints={{
                     100: {
                        slidesPerView: 3,
                     },
                     768: {
                        slidesPerView: 3,
                     },
                  }}
               >
                  {loading ? (
                     <Loading />
                  ) : (
                     latestRecipe?.data?.map((item, index) => (
                        <SwiperSlide key={index}>
                           <div className={style.card}>
                              <div className={style.image}>
                                 <div
                                    className="col-12 col-lg-12"
                                    onClick={() =>
                                       router.push(
                                          `/recipe/detail/${item.id_recipe}`
                                       )
                                    }
                                 >
                                    <h5 className={style.label}>
                                       {item.name_recipe}
                                    </h5>
                                    <img
                                       src={`${
                                          item.images
                                             ? `${API_URL}${item.images}`
                                             : `${API_URL}picture/recipe/original.jpg`
                                       }`}
                                       alt={item.name_recipe}
                                       height={150}
                                       width={140}
                                       onError={(e) => {
                                          e.target.src = Default;
                                       }}
                                    />
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))
                  )}
               </Swiper>
            </div>
         </div>
      </div>
   );
}

export default Index;
