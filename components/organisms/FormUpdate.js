/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import style from './styles/update.module.css';

function popular() {
   const router = useRouter();
   const [loading, setLoading] = useState(false);

   const handleButton = () => {
      setLoading(true);
      router.back();
   };
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-2 col-lg-2">
                  <div className={style.back}>
                     <IoIosArrowBack size={40} onClick={handleButton} />
                  </div>
               </div>
               <div className="col-10 col-lg-10">
                  <h2>Edit Profile</h2>
               </div>
            </div>
            <div className={style.content}>
               <div className="row mt-5">
                  <div
                     className="col-md-12 col-lg-12"
                     onClick={() => router.push('update/picture')}
                  >
                     <span>Change Profile Picture</span>
                     <hr />
                  </div>
                  <div
                     className="col-md-12 col-lg-12"
                     onClick={() => router.push('update/password')}
                  >
                     <span>Change Password</span>
                     <hr />
                  </div>
               </div>
            </div>
            <div className={style.profile}>
               <div className="row d-flex justify-content-center">
                  <div className={`btn-group-vertical ${style.photo}`}>
                     <button type="button" className="btn">
                        Photo Library
                     </button>
                     <button type="button" className="btn">
                        Take Photo
                     </button>
                  </div>
               </div>
               <div className="row mt-2 d-flex justify-content-center">
                  <div className={`d-grid ${style.cancel}`}>
                     <button
                        type="button"
                        className="btn"
                        onClick={handleButton}
                        disabled={loading}
                     >
                        {loading ? 'Loading...' : 'Cancel'}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default popular;
