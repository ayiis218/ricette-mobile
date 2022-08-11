/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import Image from 'next/image';
import style from './style.module.css';
import { FiSearch } from 'react-icons/fi';

import InputText from '../../atoms/InputText';

function index(props) {
   const [search, setSearch] = useState();
   return (
      <div className={style.section}>
         <div className="row">
            <div className="col-md-6 col-lg-12 d-flex justify-content-center">
               <form id="search" action={`recipe/search/${search}`}>
                  <div className="input-group mb-3">
                     <span className="input-group-text test" id="basic-addon1">
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
      </div>
   );
}

export default index;
