/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './styles/popular.module.css';

import { IoIosArrowBack } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';

function popular({ data }) {
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-2 col-lg-2">
                  <div className={style.back}>
                     <Link href="/">
                        <IoIosArrowBack size={40} />
                     </Link>
                  </div>
               </div>
               <div className="col-md-10 col-lg-10">
                  <h2>Popular Menu</h2>
               </div>
            </div>
            {!data.length ? (
               <></>
            ) : (
               data.map((item, index) => (
                  <div className="row mt-5">
                     <div className="col-md-3 col-lg-3">
                        <div className={style.images}>
                           <Image
                              src={`${
                                 item.images
                                    ? `http://localhost:8120/${item.images}`
                                    : `http://localhost:8120/picture/recipe/original.jpg`
                              }`}
                              alt={item.images}
                              width={90}
                              height={90}
                           ></Image>
                        </div>
                     </div>
                     <div className="col-md-5 col-lg-5">
                        <div className={style.title}>
                           <Link href={`detail/${item.id_recipe}`}>
                              <h4>{item.name_recipe}</h4>
                           </Link>
                           <h5>{item.name}</h5>
                           <h5>{item.comment}</h5>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4">
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
