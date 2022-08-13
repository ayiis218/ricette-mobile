/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import alert from 'sweetalert2';
import { useRouter } from 'next/router';

import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { IoMdBook } from 'react-icons/io';
import { FiVideo } from 'react-icons/fi';
import style from './styles/create.module.css';

const FormAdd = () => {
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
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-12 m-0 d-flex justify-content-center">
                  <div className={style.title}>
                     <h4>Add Your Recipe</h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-lg-12 m-0 d-flex justify-content-center">
                  <form action="submit">
                     <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <IoMdBook color="var(--color-3)" size={30} />
                           <InputText
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              style={{ color: 'var(--color-3)' }}
                           />
                        </span>
                     </div>
                     <div className="mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <textarea
                              className="form-control border-0"
                              placeholder="Description"
                              id="exampleFormControlTextarea1"
                              rows={6}
                              defaultValue={''}
                              style={{ color: 'var(--color-3)' }}
                           />
                        </span>
                     </div>
                     <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <FiVideo color="var(--color-3)" size={30} />
                           <InputText
                              type="text"
                              className="form-control"
                              placeholder="Add  Video"
                              aria-label="add video"
                              aria-describedby="basic-addon1"
                           />
                        </span>
                     </div>
                     <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                           <Button
                              className={`btn w-40 mt-3 ${style.button}`}
                              type="submit"
                           >
                              POST
                           </Button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormAdd;
