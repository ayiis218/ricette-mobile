/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import alert from 'sweetalert2';
import { useRouter } from 'next/router';

import { API_URL } from '../../helper/env';

import { IoIosLogOut } from 'react-icons/io';
import style from './styles/profile.module.css';

const FormDetail = ({ data }) => {
   const token = Cookies.get('token');
   const router = useRouter();

   useEffect(() => {
      if (!token) {
         alert.fire({
            title: 'Failed',
            text: 'Please login',
            icon: 'Error',
         });
         router.push('/auth/login');
      }
   }, [token]);

   return (
      <div className={style.section}>
         <div className={style.hero}>
            <div className={style.profile}>
               <div className="row w-100">
                  {!data?.length ? (
                     <></>
                  ) : (
                     data.map((item) => (
                        <>
                           <div className="col-12 col-lg-12 d-flex justify-content-end">
                              <Link href="/auth/login">
                                 <IoIosLogOut size={30} color="#F5F5F5" />
                              </Link>
                           </div>
                           <div className="col-12 col-lg-12 d-flex justify-content-center">
                              <div className={style.title}>
                                 <img
                                    src={`${
                                       item.photo
                                          ? `${API_URL}${item.photo}`
                                          : `${API_URL}picture/user/chef.jpg`
                                    }`}
                                    alt={item.photo}
                                    width={120}
                                    height={120}
                                 />
                              </div>
                           </div>
                           <div className="col-12 col-lg-12 d-flex justify-content-center">
                              <h5>{item.name}</h5>
                           </div>
                        </>
                     ))
                  )}
                  <div className="col-12 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
                     <div className={style.content}>
                        <Link href="/users/update">
                           <div className="row mt-4">
                              <div className="col-2 col-lg-2 d-flex align-content-center">
                                 <Image
                                    src="/icons/user2.svg"
                                    alt="user"
                                    height={30}
                                    width={30}
                                 />
                              </div>
                              <div className="col-8 col-lg-8">
                                 <h5> Edit Profile </h5>
                              </div>
                              <div className="col-2 col-lg-2">
                                 <Image
                                    src="/icons/back-in.svg"
                                    alt="user"
                                    height={25}
                                    width={25}
                                 />
                              </div>
                           </div>
                        </Link>
                        {!data?.length ? (
                           <></>
                        ) : (
                           data.map((item) => (
                              <Link href={`/users/myrecipe/${item.id_users}`}>
                                 <div className="row mt-4">
                                    <div className="col-2 col-lg-2 d-flex align-content-center">
                                       <Image
                                          src="/icons/award.svg"
                                          alt="user"
                                          height={30}
                                          width={30}
                                       />
                                    </div>
                                    <div className="col-8 col-lg-8">
                                       <h5> My Recipe </h5>
                                    </div>
                                    <div className="col-2 col-lg-2">
                                       <Image
                                          src="/icons/back-in.svg"
                                          alt="user"
                                          height={25}
                                          width={25}
                                       />
                                    </div>
                                 </div>
                              </Link>
                           ))
                        )}

                        <Link href="#">
                           <div className="row mt-4">
                              <div className="col-2 col-lg-2 d-flex align-content-center">
                                 <Image
                                    src="/icons/book.svg"
                                    alt="user"
                                    height={30}
                                    width={30}
                                 />
                              </div>
                              <div className="col-8 col-lg-8">
                                 <h5> Saved Recipe </h5>
                              </div>
                              <div className="col-2 col-lg-2">
                                 <Image
                                    src="/icons/back-in.svg"
                                    alt="user"
                                    height={25}
                                    width={25}
                                 />
                              </div>
                           </div>
                        </Link>
                        <Link href="#">
                           <div className="row mt-4">
                              <div className="col-2 col-lg-2 d-flex align-content-center">
                                 <Image
                                    src="/icons/vector.svg"
                                    alt="user"
                                    height={25}
                                    width={25}
                                 />
                              </div>
                              <div className="col-8 col-lg-8">
                                 <h5> Liked Recipe </h5>
                              </div>
                              <div className="col-2 col-lg-2">
                                 <Image
                                    src="/icons/back-in.svg"
                                    alt="user"
                                    height={25}
                                    width={25}
                                 />
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormDetail;
