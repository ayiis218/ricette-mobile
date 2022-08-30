/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../../helper/env';
import style from './style.module.css';
import { useRouter } from 'next/router';

function index({ data }) {
   const router = useRouter();
   return (
      <div className={style.section}>
         <div className="container">
            <div className="Row">
               <div className="col-12 col-lg-12 d-flex justify-content-start">
                  <div className="d-flex justify-between">
                     <h1>Popular Recipes</h1>
                  </div>
               </div>
               <div className="col-12 col-lg-12 mt-3 d-flex justify-content-end">
                  <Link href={'/recipe/popular'}>
                     <p className="me-3 mt-1">see more</p>
                  </Link>
               </div>
               <div className={style.card}>
                  {data.map((item) => (
                     <>
                        <div className="col">
                           <div className="row">
                              <div className="col-3">
                                 <div className={style.image}>
                                    <img
                                       className="m-3"
                                       src={`${
                                          item.images
                                             ? `${API_URL}${item.images}`
                                             : `${API_URL}picture/recipe/original.jpg`
                                       }`}
                                       alt={item.name_recipe}
                                       width={85}
                                       height={85}
                                    />
                                 </div>
                              </div>
                              <div className="col-9">
                                 <div
                                    className={style.title}
                                    onClick={() =>
                                       router.push(
                                          `/recipe/detail/${item.id_recipe}`
                                       )
                                    }
                                 >
                                    <h5>{item.name_recipe}</h5>
                                    <span>{item.name}</span>
                                    <div className="d-flex gap-1 align-items-center">
                                       <img
                                          src="/icons/star.svg"
                                          alt="star"
                                          height="12px"
                                       />
                                       <span className="mb-1">4.7</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default index;
