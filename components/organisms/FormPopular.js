/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { API_URL } from '../../helper/env';

import { BiLike } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import style from './styles/popular.module.css';

function popular({ data }) {
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-3">
                  <div className={style.back}>
                     <Link href="/">
                        <IoIosArrowBack size={40} />
                     </Link>
                  </div>
               </div>
               <div className="col-9">
                  <h2>Popular Menu</h2>
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
                              width={100}
                              height={100}
                           ></img>
                        </div>
                     </div>
                     <div className="col-5 col-lg-5">
                        <div className={style.title}>
                           <Link href={`detail/${item.id_recipe}`}>
                              <h4>{item.name_recipe}</h4>
                           </Link>
                           <h5>{item.name}</h5>
                           <h5>{item.comment}</h5>
                        </div>
                     </div>
                     <div className="col-4 col-lg-4">
                        <div className={style.response}>
                           <button type="button" className="btn">
                              <IoBookmarkOutline size={20} />
                           </button>
                           <button type="button" className="btn">
                              <BiLike size={20} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}

export default popular;
