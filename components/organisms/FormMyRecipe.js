/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { API_URL } from '../../helper/env';

import { IoIosArrowBack } from 'react-icons/io';
import style from './styles/recipe.module.css';
import { useRouter } from 'next/router';

function myRecipe({ data }) {
   const router = useRouter();
   return (
      <div className={style.section}>
         <div className="container">
            <div className={style.head}>
               <div className="row">
                  <div className="col-2 col-lg-2">
                     <div
                        className={style.back}
                        onClick={() => router.push('profile')}
                     >
                        <IoIosArrowBack size={40} />
                     </div>
                  </div>
                  <div className="col-10 col-lg-10">
                     <h2>My Recipe</h2>
                  </div>
               </div>
            </div>
         </div>

         {data.map((item) => (
            <>
               <div className={style.content}>
                  <div
                     className="row mt-4"
                     onClick={() =>
                        router.push(`/recipe/update/${item.id_recipe}`)
                     }
                  >
                     <div className="col-3 col-lg-3">
                        <div className={style.images}>
                           <img
                              src={`${
                                 item.images
                                    ? `${API_URL}${item.images}`
                                    : `${API_URL}picture/recipe/original.jpg`
                              }`}
                              alt={item.images}
                              width={90}
                              height={90}
                           ></img>
                        </div>
                     </div>
                     <div className="col-5 col-lg-5">
                        <div className={style.title}>
                           <h4>{item.name_recipe}</h4>
                           <h5>{item.name}</h5>
                           <h5>{item.comment}</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         ))}
      </div>
   );
}

export default myRecipe;
