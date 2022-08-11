/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './styles/recipe.module.css';
import { API_URL } from '../../helper/env';

import { IoIosArrowBack } from 'react-icons/io';

function myRecipe({ data }) {
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-2 col-lg-2">
                  <div className={style.back}>
                     <Link href="/users/profile">
                        <IoIosArrowBack size={40} />
                     </Link>
                  </div>
               </div>
               <div className="col-10 col-lg-10">
                  <h2>My Recipe</h2>
               </div>
            </div>
            {!data.length ? (
               <></>
            ) : (
               data.map((item, index) => (
                  <div className="row mt-5">
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
                           <span>{item.name}</span>
                           <h5>{item.comment}</h5>
                        </div>
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}

export default myRecipe;
