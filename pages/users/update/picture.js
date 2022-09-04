/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';
import alert from 'sweetalert2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import axios from '../../../helper/axios';

import InputText from '../../../components/atoms/InputText';
import Button from '../../../components/atoms/Button';

import style from '../../../styles/picture.module.css';

const changePicture = () => {
   const id = Cookies.get('user');
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [password, setPassword] = useState('');
   const [repass, setRePass] = useState('');
   const [photo, setPhoto] = useState(null);

   const body = password || repass || photo;

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!body) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      }

      const formData = new FormData();
      formData.append('password', password);
      formData.append('repass', repass);
      if (photo) {
         formData.append('photo', photo);
      }

      setLoading(true);
      axios
         .put(`users/update/${id}`, formData)
         .then((res) => {
            alert.fire({
               title: 'Success!',
               text: `update Picture Success ${res}`,
               icon: 'success',
            });
            router.push('/users/profile');
         })
         .catch((err) => {
            alert.fire({
               title: 'Error!',
               text: err.message,
               icon: 'error',
            });
         })
         .finally(() => {
            setLoading(false);
         });
   };

   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-12 d-flex justify-content-center">
                  <div className={style.left}>
                     <span>
                        <Image
                           src="/img/chef.jpg"
                           width={150}
                           height={150}
                           alt="user"
                        />
                     </span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-12 d-flex justify-content-center">
                  <div className={style.right}>
                     <h4>Change Picture</h4>
                     <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <InputText
                                 type="file"
                                 placeholder="Password"
                                 style={{ display: 'none' }}
                                 onChange={(e) => {
                                    setPhoto(e.target.files[0]);
                                 }}
                              />
                           </span>
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <AiOutlineUnlock
                                 color="var(--color-3)"
                                 size={30}
                              />
                              <InputText
                                 type="password"
                                 className="form-control"
                                 placeholder="Password"
                                 style={{ color: 'var(--color-3)' }}
                                 onChange={(e) => {
                                    setPassword(e.target.value);
                                 }}
                              />
                           </span>
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <AiOutlineLock color="var(--color-3)" size={30} />
                              <InputText
                                 type="password"
                                 className="form-control"
                                 placeholder="confirm Password"
                                 style={{ color: 'var(--color-3)' }}
                                 onChange={(e) => {
                                    setRePass(e.target.value);
                                 }}
                              />
                           </span>
                        </div>
                        <div className="row">
                           <div className="col-12 d-flex justify-content-center">
                              <Button
                                 className={`btn w-100 mt-3 ${style.button}`}
                                 type="submit"
                                 disabled={loading}
                              >
                                 {loading ? 'Loading...' : 'Update'}
                              </Button>
                           </div>
                        </div>
                     </form>
                     <div className="w-100 d-flex flex-column">
                        <div className="w-100 d-flex justify-content-center">
                           <div div className={style.option}>
                              Back to profile?{' '}
                              <Link href="/users/profile">in hire</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default changePicture;
