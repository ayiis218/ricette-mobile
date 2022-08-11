/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

import style from './styles/recipe.module.css';

import InputText from '../../components/atoms/InputText';
import { useRouter } from 'next/router';

function search({ data }) {
   const [search, setSearch] = useState();
   /*   const router = useRouter;
  
  if (data === undefined) {
    return router('/notFound');
  } */
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                  <form id="search" action={`/recipe/search/${search}`}>
                     <div className="input-group mb-3">
                        <span
                           className="input-group-text test"
                           id="basic-addon1"
                        >
                           <FiSearch color="var(--color-3)" size={30} />
                           <InputText
                              className="form-control"
                              placeholder="Search Pasta, Bread, etc"
                              type="text"
                              onChange={(e) => setSearch(e.target.value)}
                           />
                        </span>
                     </div>
                  </form>
               </div>
            </div>
            {!data.length ? (
               <div>
                  <p>NotFound</p>
               </div>
            ) : (
               data.map((item, index) => (
                  <div className="row mt-5">
                     <div className="col-md-3 col-lg-3">
                        <div className={style.images}>
                           <img
                              src={`${
                                 item.images
                                    ? `http://localhost:8120/${item.images}`
                                    : `http://localhost:8120/picture/recipe/original.jpg`
                              }`}
                              alt={item.images}
                              width={90}
                              height={90}
                           ></img>
                        </div>
                     </div>
                     <div className="col-md-5 col-lg-5">
                        <div className={style.title}>
                           <Link href={`/recipe/detail/${item.id_recipe}`}>
                              <h4>{item.name_recipe}</h4>
                           </Link>
                           <h5>{item.name}</h5>
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

export default search;
