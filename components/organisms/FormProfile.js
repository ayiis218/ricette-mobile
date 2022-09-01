/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import alert from 'sweetalert2';
import axios from '../../helper/axios';
import Loading from 'react-content-loader';
import { useRouter } from 'next/router';
import { API_URL } from '../../helper/env';

import { IoIosLogOut } from 'react-icons/io';
import style from './styles/profile.module.css';

const FormDetail = () => {
   const token = Cookies.get('token');
   const id_user = Cookies.get('user');
   const router = useRouter();
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!token) {
         alert.fire({
            title: 'Failed',
            text: 'Please login',
            icon: 'Error',
         });
         router.push('/auth/login');
      }
      getUser;
   }, [token]);

   const getUser = () => {
      setLoading(true);

      axios
         .get(`users/${id_user}`)
         .then((res) => {
            setData(res?.data?.data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err?.response?.data?.message);
            setLoading(false);
         });
   };

   const HandleLogout = () => {
      Cookies.remove('token');
      Cookies.remove('user');
      alert.fire({
         title: 'success',
         text: 'Back login to access',
         icon: 'success',
      });
      router.push('/auth/login');
   };

   return (
      <div className={style.section}>
         <div className={style.hero}>
            <div className={style.profile}>
               <div className="row w-100">
                  {loading ? (
                     <Loading />
                  ) : (
                     data.map((item) => (
                        <>
                           <div className="col-12 col-lg-12 d-flex justify-content-end">
                              <IoIosLogOut
                                 size={30}
                                 color="#F5F5F5"
                                 onClick={HandleLogout}
                              />
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
                        <div
                           className="row mt-4"
                           onClick={() => router.push('/users/update')}
                        >
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
                        <div
                           className="row mt-4"
                           onClick={() => router.push('/users/myrecipe')}
                        >
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
