import React from 'react';
import Link from 'next/link';

import { IoIosArrowBack } from 'react-icons/io';
import style from './styles/update.module.css';

function popular() {
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
                  <Link href={`/user/change`}>
                     <h2>Edit Profile</h2>
                  </Link>
               </div>
            </div>
            <div className="row mt-5">
               <div className="col-md-12 col-lg-12">
                  <span>Change Profile Picture</span>
                  <hr />
               </div>
               <div className="col-md-12 col-lg-12">
                  <span>Change Password</span>
                  <hr />
               </div>
            </div>
            <div className={style.profile}>
               <div className="container">
                  <div className="row align-items-end">
                     <div className="d-grid">
                        <div className={`btn-group-vertical ${style.photo}`}>
                           <button type="button" className="btn">
                              Photo Library
                           </button>
                           <button type="button" className="btn">
                              Take Photo
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="row mt-2">
                     <div className={`d-grid ${style.cancel}`}>
                        <button type="button" className="btn">
                           Cancel
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default popular;
